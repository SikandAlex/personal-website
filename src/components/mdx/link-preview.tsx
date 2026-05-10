import { LinkPreviewCard } from "@/components/mdx/link-preview-card";

type OgData = {
  title?: string;
  description?: string;
  image?: string;
  siteName?: string;
};

const decodeEntities = (input?: string) =>
  input
    ?.replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");

async function fetchOgData(url: string): Promise<OgData | null> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 5000);
  try {
    const res = await fetch(url, {
      signal: controller.signal,
      next: { revalidate: 60 * 60 * 24 },
      headers: {
        "User-Agent":
          "Mozilla/5.0 (compatible; AlexSikandLinkPreview/1.0; +https://alexsikand.com)",
        Accept: "text/html,application/xhtml+xml",
      },
    });
    if (!res.ok) return null;
    const html = await res.text();

    const grab = (re: RegExp) => decodeEntities(html.match(re)?.[1]?.trim());

    let image =
      grab(
        /<meta[^>]+property=["']og:image(?::secure_url)?["'][^>]+content=["']([^"']+)["']/i,
      ) ||
      grab(
        /<meta[^>]+content=["']([^"']+)["'][^>]+property=["']og:image(?::secure_url)?["']/i,
      ) ||
      grab(
        /<meta[^>]+name=["']twitter:image["'][^>]+content=["']([^"']+)["']/i,
      );

    if (image && !/^https?:/i.test(image)) {
      try {
        image = new URL(image, url).toString();
      } catch {
        image = undefined;
      }
    }

    const title =
      grab(
        /<meta[^>]+property=["']og:title["'][^>]+content=["']([^"']+)["']/i,
      ) ||
      grab(
        /<meta[^>]+name=["']twitter:title["'][^>]+content=["']([^"']+)["']/i,
      ) ||
      grab(/<title>([^<]+)<\/title>/i);

    const description =
      grab(
        /<meta[^>]+property=["']og:description["'][^>]+content=["']([^"']+)["']/i,
      ) ||
      grab(
        /<meta[^>]+name=["']twitter:description["'][^>]+content=["']([^"']+)["']/i,
      ) ||
      grab(/<meta[^>]+name=["']description["'][^>]+content=["']([^"']+)["']/i);

    const siteName = grab(
      /<meta[^>]+property=["']og:site_name["'][^>]+content=["']([^"']+)["']/i,
    );

    return { title, description, image, siteName };
  } catch {
    return null;
  } finally {
    clearTimeout(timeout);
  }
}

type LinkPreviewProps = {
  href: string;
  /** Override or fallback for og:title. Use for sites that block scrapers (Reddit, HN, etc.). */
  title?: string;
  description?: string;
  image?: string;
  siteName?: string;
};

export async function LinkPreview({
  href,
  title: titleProp,
  description: descProp,
  image: imgProp,
  siteName: siteNameProp,
}: LinkPreviewProps) {
  const data = await fetchOgData(href);

  let domain = href;
  try {
    domain = new URL(href).hostname.replace(/^www\./, "");
  } catch {
    /* keep raw href as the fallback domain */
  }
  const favicon = `https://www.google.com/s2/favicons?domain=${domain}&sz=64`;

  return (
    <LinkPreviewCard
      href={href}
      title={titleProp ?? data?.title}
      description={descProp ?? data?.description}
      image={imgProp ?? data?.image}
      siteName={siteNameProp ?? data?.siteName}
      domain={domain}
      favicon={favicon}
    />
  );
}
