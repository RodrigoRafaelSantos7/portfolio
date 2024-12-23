import fs from "fs";
import matter from "gray-matter";
import path from "path";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import { unified } from "unified";

type Metadata = {
  title: string;
  publishedAt: string;
  summary: string;
  image?: string;
  category?: string;
};

function getMDXFiles(dir: string): string[] {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  let files: string[] = [];

  entries.forEach((entry) => {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files = files.concat(getMDXFiles(fullPath));
    } else if (entry.isFile() && path.extname(entry.name) === ".mdx") {
      files.push(fullPath);
    }
  });

  return files;
}

export async function markdownToHTML(markdown: string) {
  const p = await unified()
    .use(remarkParse)
    .use(remarkMath)
    .use(remarkRehype)
    .use(rehypeKatex)
    .use(rehypePrettyCode, {
      // https://rehype-pretty.pages.dev/#usage
      theme: {
        light: "min-light",
        dark: "min-dark",
      },
      keepBackground: false,
    })
    .use(rehypeStringify)
    .process(markdown);

  return p.toString();
}

export async function getPost(slug: string, category?: string) {
  const filePath = category
    ? path.join("content", category, `${slug}.mdx`)
    : path.join("content", `${slug}.mdx`);

  let source = fs.readFileSync(filePath, "utf-8");
  const { content: rawContent, data: metadata } = matter(source);
  const content = await markdownToHTML(rawContent);
  return {
    source: content,
    metadata: metadata as Metadata,
    slug,
  };
}

async function getAllPosts(dir: string) {
  let mdxFiles = getMDXFiles(dir);
  return Promise.all(
    mdxFiles.map(async (filePath) => {
      const relativePath = path.relative(
        path.join(process.cwd(), "content"),
        filePath
      );
      const category =
        path.dirname(relativePath) !== "."
          ? path.dirname(relativePath)
          : undefined;
      const slug = path.basename(filePath, path.extname(filePath));
      let { metadata, source } = await getPost(slug, category);

      // If category is not in frontmatter, use directory name
      if (!metadata.category && category) {
        metadata.category = category;
      }

      return {
        metadata,
        slug,
        source,
      };
    })
  );
}

export async function getBlogPosts(category?: string) {
  const posts = await getAllPosts(path.join(process.cwd(), "content"));

  if (category) {
    return posts.filter((post) => post.metadata.category === category);
  }

  return posts;
}

export async function getCategories() {
  const posts = await getBlogPosts();
  const categories = new Set(
    posts.map((post) => post.metadata.category).filter(Boolean)
  );
  return Array.from(categories);
}
