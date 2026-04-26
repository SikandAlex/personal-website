/* eslint-disable @next/next/no-img-element */
import { DATA } from "@/data/resume";
import Markdown from "react-markdown";

const labelLogoStyle = {
  width: "var(--logo-size, 80px)",
  height: "var(--logo-size, 80px)",
  borderRadius: "var(--logo-radius, 8px)",
} as const;

const dateGapStyle = {
  marginTop: "var(--label-date-gap, 8px)",
} as const;

// Vertical offset that aligns the dot's center with the logo's center.
// Logo center sits at (var(--logo-size) / 2) below the row top; dot container
// is 24px tall so its own half is 12px.
const DOT_OFFSET = "calc(var(--logo-size, 80px) / 2 - 12px)";

export default function WorkSectionTimeline() {
  return (
    <div className="flex flex-col">
      {DATA.work.map((work, index) => {
        const isFirst = index === 0;
        return (
          <div
            key={work.company}
            className="relative flex justify-end gap-2"
          >
            <div className="sticky top-4 flex w-32 flex-col items-end self-start pb-4 max-md:hidden">
              <img
                src={work.logoUrl}
                alt={work.company}
                className="object-contain"
                style={labelLogoStyle}
              />
              <div
                className="text-muted-foreground text-right text-xs font-medium tabular-nums"
                style={dateGapStyle}
              >
                {work.start} - {work.end ?? "Present"}
              </div>
            </div>
            <div className="flex flex-col items-center">
              {!isFirst && (
                <span
                  className="w-px border"
                  style={{ height: DOT_OFFSET }}
                />
              )}
              <div
                className="sticky flex size-6 items-center justify-center"
                style={{ top: `calc(1rem + ${DOT_OFFSET})` }}
              >
                <span className="bg-primary/20 flex size-[18px] shrink-0 items-center justify-center rounded-full">
                  <span className="bg-primary size-3 rounded-full" />
                </span>
              </div>
              <span className="-mt-2.5 w-px flex-1 border" />
            </div>
            <div className="flex flex-1 flex-col gap-3 pb-8 pl-3 md:pl-6">
              <div className="flex flex-col gap-2 md:hidden">
                <img
                  src={work.logoUrl}
                  alt={work.company}
                  className="object-contain"
                  style={labelLogoStyle}
                />
                <div
                  className="font-medium text-xs tabular-nums"
                  style={dateGapStyle}
                >
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
        );
      })}
    </div>
  );
}
