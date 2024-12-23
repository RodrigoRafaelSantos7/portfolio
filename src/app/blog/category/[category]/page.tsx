import BlurFade from "@/components/magicui/blur-fade";
import { getBlogPosts, getCategories } from "@/data/blog";
import Link from "next/link";

const BLUR_FADE_DELAY = 0.04;

export const metadata = {
  title: "Blog",
  description: "My thoughts on software development, life, and more.",
};

export async function generateStaticParams() {
  const categories = await getCategories();
  return categories.map((category) => ({
    category,
  }));
}

export default async function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const decodedCategory = decodeURIComponent(params.category);
  const posts = await getBlogPosts(decodedCategory);

  return (
    <section>
      <BlurFade delay={BLUR_FADE_DELAY}>
        <div className="flex flex-col items-center justify-center space-y-4 sm:text-center mb-10">
          <div className="space-y-2">
            <Link
              href="/blog"
              className="sm:inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm hover:bg-foreground/80"
            >
              ← Back to Categories
            </Link>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              {decodedCategory}
            </h2>
          </div>
        </div>
      </BlurFade>

      {posts
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post, id) => (
          <BlurFade delay={BLUR_FADE_DELAY * 2 + id * 0.05} key={post.slug}>
            <Link
              className="flex flex-col space-y-1 mb-4 hover:bg-foreground/10 p-4 rounded-lg"
              href={`/blog/${post.slug}`}
            >
              <div className="w-full flex flex-col">
                <p className="tracking-tight">{post.metadata.title}</p>
                <p className="h-6 text-xs text-muted-foreground">
                  {post.metadata.publishedAt}
                </p>
              </div>
            </Link>
          </BlurFade>
        ))}
    </section>
  );
}
