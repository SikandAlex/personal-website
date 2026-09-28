import BlurFade from "@/components/magicui/blur-fade";
import { allGearPosts } from "content-collections";
import Link from "next/link";
import type { Metadata } from "next";
import { ChevronRight } from "lucide-react";

const description =
  "Products and upgrades I actually own, what they're like to live with, and whether they're worth the money.";

export const metadata: Metadata = {
  title: "Gear",
  description,
  openGraph: {
    title: "Gear",
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Gear",
    description,
  },
};

const BLUR_FADE_DELAY = 0.04;

export default function GearPage() {
  const sortedPosts = [...allGearPosts].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  return (
    <section id="gear">
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="text-2xl font-semibold tracking-tight mb-2">Gear</h1>
        <p className="text-sm text-muted-foreground mb-8">
          Things I own, what living with them is like, and whether they&apos;re
          worth the money. Everything here was used in my own apartment. No
          sponsored picks.
        </p>
      </BlurFade>

      <BlurFade delay={BLUR_FADE_DELAY * 2}>
        <div className="flex flex-col gap-5">
          {sortedPosts.map((post, id) => {
            const slug = post._meta.path.replace(/\.mdx$/, "");
            return (
              <BlurFade delay={BLUR_FADE_DELAY * 3 + id * 0.05} key={slug}>
                <Link
                  className="flex items-start gap-x-2 group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  href={`/gear/${slug}`}
                >
                  <span className="text-xs font-mono tabular-nums font-medium mt-[5px]">
                    {String(id + 1).padStart(2, "0")}.
                  </span>
                  <div className="flex flex-col gap-y-2 flex-1">
                    <p className="tracking-tight text-lg font-medium">
                      <span className="group-hover:text-foreground transition-colors">
                        {post.title}
                        <ChevronRight
                          className="ml-1 inline-block size-4 stroke-3 text-muted-foreground opacity-0 -translate-x-2 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0"
                          aria-hidden
                        />
                      </span>
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {post.summary}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {post.publishedAt}
                    </p>
                  </div>
                </Link>
              </BlurFade>
            );
          })}
        </div>
      </BlurFade>
    </section>
  );
}
