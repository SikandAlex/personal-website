import { allPosts } from "content-collections";
import { DATA } from "@/data/resume";

export const dynamic = "force-static";

function escape(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function GET() {
  const posts = [...allPosts].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  const items = posts
    .map((post) => {
      const slug = post._meta.path.replace(/\.mdx$/, "");
      const url = `${DATA.url}/blog/${slug}`;
      const pubDate = new Date(post.publishedAt).toUTCString();
      const author = post.author
        ? `      <dc:creator><![CDATA[${post.author}]]></dc:creator>`
        : "";
      return `    <item>
      <title>${escape(post.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${pubDate}</pubDate>
      <description>${escape(post.summary)}</description>
${author}
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>${escape(DATA.name)}</title>
    <link>${DATA.url}</link>
    <description>${escape(DATA.description)}</description>
    <language>en-us</language>
    <atom:link href="${DATA.url}/feed.xml" rel="self" type="application/rss+xml" />
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
