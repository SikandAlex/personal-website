/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { DATA } from "@/data/resume";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import Markdown from "react-markdown";

function LogoImage({ src, alt }: { src: string; alt: string }) {
  const [imageError, setImageError] = useState(false);

  const sizingStyle = {
    width: "var(--logo-size, 80px)",
    height: "var(--logo-size, 80px)",
    borderRadius: "var(--logo-radius, 8px)",
  } as const;

  if (!src || imageError) {
    return <div className="bg-muted flex-none" style={sizingStyle} />;
  }

  return (
    <img
      src={src}
      alt={alt}
      className="object-contain flex-none"
      style={sizingStyle}
      onError={() => setImageError(true)}
    />
  );
}

export default function WorkSection() {
  const allValues = DATA.work.map((w) => w.company);

  return (
    <Accordion
      type="multiple"
      className="w-full grid gap-6"
      defaultValue={allValues}
    >
      {DATA.work.map((work, index) => {
        const isLast = index === DATA.work.length - 1;
        return (
          <AccordionItem
            key={work.company}
            value={work.company}
            className="w-full border-b-0 grid grid-cols-[auto_1fr] gap-x-3"
          >
            <div className="flex flex-col items-center">
              <LogoImage src={work.logoUrl} alt={work.company} />
              {!isLast && (
                <div className="w-px flex-1 bg-border mt-2 -mb-6" />
              )}
            </div>
            <div className="flex flex-col gap-2 min-w-0">
              <AccordionTrigger className="hover:no-underline p-0 cursor-pointer transition-colors rounded-none group [&>svg]:hidden">
                <div className="flex items-start gap-x-3 justify-between w-full text-left">
                  <div className="flex-1 min-w-0 gap-0.5 flex flex-col">
                    <div className="font-semibold leading-none flex items-center gap-2">
                      {work.company}
                      <ChevronDown
                        className={cn(
                          "h-3.5 w-3.5 shrink-0 text-muted-foreground stroke-2 transition-transform duration-200",
                          "group-data-[state=open]:rotate-180"
                        )}
                      />
                    </div>
                    <div className="font-sans text-sm text-muted-foreground">
                      {work.title}
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-xs tabular-nums text-muted-foreground text-right flex-none pt-0.5">
                    <span>
                      {work.start} - {work.end ?? "Present"}
                    </span>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="p-0">
                <div className="prose prose-sm max-w-full text-muted-foreground dark:prose-invert prose-ul:my-1 prose-ul:pl-5 prose-li:my-1 prose-li:marker:text-muted-foreground">
                  <Markdown>{work.description}</Markdown>
                </div>
              </AccordionContent>
            </div>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}
