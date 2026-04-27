/* eslint-disable @next/next/no-img-element */
"use client";

import { DATA } from "@/data/resume";
import Markdown from "react-markdown";
import { usePreview } from "@/components/dev/preview-context";

const labelLogoStyle = {
  width: "var(--logo-size, 120px)",
  height: "auto",
  borderRadius: "var(--logo-radius, 0px)",
} as const;

const dateGapStyle = {
  marginTop: "var(--label-date-gap, 16px)",
} as const;

type SkillItem = {
  name: string;
  icon?: React.ComponentType<{ className?: string }>;
};

const ALL_SKILL_ITEMS: readonly SkillItem[] = DATA.skillGroups.flatMap(
  (g) => g.items as readonly SkillItem[],
);
const findSkill = (name: string) =>
  ALL_SKILL_ITEMS.find((s) => s.name === name);

export default function WorkSectionTimeline() {
  const { workSkills } = usePreview();

  return (
    <div className="flex flex-col">
      {DATA.work.map((work) => (
        <div key={work.company} className="relative flex justify-end gap-2">
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
            <div className="sticky top-4 flex size-6 items-center justify-center">
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
            {workSkills && work.skills && work.skills.length > 0 && (
              <div className="flex flex-wrap gap-1.5 pt-1">
                {work.skills.map((name) => {
                  const skill = findSkill(name);
                  return (
                    <span
                      key={name}
                      className="inline-flex items-center gap-1 border border-border rounded-md px-2 py-0.5 text-[11px]"
                    >
                      {skill && "icon" in skill && skill.icon && (
                        <skill.icon className="size-3 object-contain" />
                      )}
                      <span>{name}</span>
                    </span>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
