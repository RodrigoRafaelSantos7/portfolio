import BlurFade from "@/components/magicui/blur-fade";
import { getBlogPosts, getCategories } from "@/data/blog";
import Link from "next/link";

export const metadata = {
  title: "Blog",
  description: "My thoughts on software development, life, and more.",
};

const BLUR_FADE_DELAY = 0.04;

export default async function BlogPage() {
  const categories = await getCategories();

  return (
    <section>
      <BlurFade delay={BLUR_FADE_DELAY}>
        <div className="flex flex-col items-center justify-center space-y-4 sm:text-center mb-20">
          <div className="space-y-2">
            <div className="sm:inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm hidden">
              Notes
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Class Notes & More
            </h2>
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              I study a lot, write notes, and share them with friends. here are
              some of my notes from school.
            </p>
          </div>
        </div>
      </BlurFade>

      <div className="grid grid-cols-1">
        {categories.map((category, id) => (
          <BlurFade delay={BLUR_FADE_DELAY * 2 + id * 0.05} key={category}>
            <Link
              className="flex flex-col space-y-1 mb-4 hover:bg-foreground/10 p-4 rounded-lg border"
              href={`/blog/category/${encodeURIComponent(category || "")}`}
            >
              <div className="w-full flex flex-col">
                <p className="tracking-tight text-lg font-semibold">
                  {category}
                </p>
              </div>
            </Link>
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
