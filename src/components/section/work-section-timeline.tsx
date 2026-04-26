/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { DATA } from "@/data/resume";
import Markdown from "react-markdown";

const MARKER_SIZE = 48;
const LABEL_LOGO_SIZE = 40;

function MarkerLogo({ src, alt }: { src: string; alt: string }) {
  const [imageError, setImageError] = useState(false);

  const sizingStyle = {
    width: `${MARKER_SIZE}px`,
    height: `${MARKER_SIZE}px`,
  } as const;

  if (!src || imageError) {
    return (
      <span
        className="bg-primary/20 flex items-center justify-center rounded-full"
        style={sizingStyle}
      >
        <span className="bg-primary size-3 rounded-full" />
      </span>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className="rounded-md object-contain"
      style={sizingStyle}
      onError={() => setImageError(true)}
    />
  );
}

export default function WorkSectionTimeline() {
  return (
    <div className="flex flex-col">
      {DATA.work.map((work) => (
        <div
          key={work.company}
          className="relative flex justify-end gap-2"
        >
          <div className="sticky top-4 flex w-32 flex-col items-end gap-2 self-start pb-4 max-md:hidden">
            <img
              src={work.logoUrl}
              alt={work.company}
              className="object-contain"
              style={{
                width: `${LABEL_LOGO_SIZE}px`,
                height: `${LABEL_LOGO_SIZE}px`,
              }}
            />
            <div className="text-muted-foreground text-right text-xs font-medium tabular-nums">
              {work.start} - {work.end ?? "Present"}
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div
              className="sticky top-4 flex shrink-0 items-center justify-center"
              style={{ width: MARKER_SIZE, height: MARKER_SIZE }}
            >
              <MarkerLogo src={work.logoUrl} alt={work.company} />
            </div>
            <span className="w-px flex-1 border mt-1" />
          </div>
          <div className="flex flex-1 flex-col gap-3 pb-8 pl-3 md:pl-6">
            <div className="flex flex-col gap-2 md:hidden">
              <img
                src={work.logoUrl}
                alt={work.company}
                className="object-contain"
                style={{
                  width: `${LABEL_LOGO_SIZE}px`,
                  height: `${LABEL_LOGO_SIZE}px`,
                }}
              />
              <div className="font-medium text-xs tabular-nums">
                {work.start} - {work.end ?? "Present"}
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-base font-semibold leading-tight">
                {work.title}
              </h3>
              <p className="text-muted-foreground text-xs">{work.location}</p>
            </div>
            <div className="prose prose-sm max-w-full text-muted-foreground dark:prose-invert prose-ul:my-1 prose-ul:pl-5 prose-li:my-1 prose-li:marker:text-muted-foreground">
              <Markdown>{work.description}</Markdown>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
