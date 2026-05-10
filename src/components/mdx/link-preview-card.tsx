"use client";

import { ExternalLink } from "lucide-react";
import { usePreview } from "@/components/dev/preview-context";

type CardProps = {
  href: string;
  title?: string;
  description?: string;
  image?: string;
  siteName?: string;
  domain: string;
  favicon: string;
};

const WRAPPER_BASE =
  "not-prose flex border border-border rounded-xl overflow-hidden no-underline group hover:bg-accent/40 transition-colors my-3";

export function LinkPreviewCard({
  href,
  title,
  description,
  image,
  siteName,
  domain,
  favicon,
}: CardProps) {
  const { linkPreviewVariant: variant } = usePreview();

  const meta = (
    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={favicon} alt="" className="size-4 rounded-sm flex-none" />
      <span className="truncate">{siteName || domain}</span>
      <ExternalLink
        className="size-3 opacity-0 group-hover:opacity-60 transition-opacity flex-none"
        aria-hidden
      />
    </div>
  );

  const titleEl = (
    <div className="font-semibold text-sm text-foreground leading-snug line-clamp-2 group-hover:underline underline-offset-4">
      {title || href}
    </div>
  );

  const descEl = description ? (
    <div className="text-xs text-muted-foreground leading-snug line-clamp-2">
      {description}
    </div>
  ) : null;

  if (variant === "banner") {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${WRAPPER_BASE} flex-col`}
      >
        {image && (
          <div className="relative w-full aspect-[1200/630] bg-muted overflow-hidden border-b border-border">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={image}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        )}
        <div className="flex flex-col gap-1.5 p-4">
          {meta}
          {titleEl}
          {descEl}
        </div>
      </a>
    );
  }

  if (variant === "text-only") {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${WRAPPER_BASE} items-stretch`}
      >
        <div className="flex flex-col gap-1.5 p-4 flex-1 min-w-0 justify-center">
          {meta}
          {titleEl}
          {descEl}
        </div>
      </a>
    );
  }

  if (variant === "contain") {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${WRAPPER_BASE} items-stretch`}
      >
        <div className="flex flex-col gap-1.5 p-4 flex-1 min-w-0 justify-center">
          {meta}
          {titleEl}
          {descEl}
        </div>
        {image && (
          <div className="relative w-44 sm:w-56 flex-none bg-muted self-stretch overflow-hidden border-l border-border">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={image}
              alt=""
              className="absolute inset-0 w-full h-full object-contain"
            />
          </div>
        )}
      </a>
    );
  }

  if (variant === "wide-side" || variant === "wide-side-left") {
    const imgPosition =
      variant === "wide-side-left" ? "object-left" : "object-center";
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${WRAPPER_BASE} items-stretch`}
      >
        <div className="flex flex-col gap-1.5 p-4 flex-1 min-w-0 justify-center">
          {meta}
          {titleEl}
          {descEl}
        </div>
        {image && (
          <div className="relative w-44 sm:w-56 flex-none bg-muted self-stretch overflow-hidden border-l border-border">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={image}
              alt=""
              className={`absolute inset-0 w-full h-full object-cover ${imgPosition}`}
            />
          </div>
        )}
      </a>
    );
  }

  // compact (current behavior — narrow image column, center crop)
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${WRAPPER_BASE} items-stretch`}
    >
      <div className="flex flex-col gap-1.5 p-4 flex-1 min-w-0 justify-center">
        {meta}
        {titleEl}
        {descEl}
      </div>
      {image && (
        <div className="relative w-28 sm:w-36 flex-none bg-muted self-stretch overflow-hidden border-l border-border">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={image}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      )}
    </a>
  );
}
