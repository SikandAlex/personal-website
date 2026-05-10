"use client";

import { useEffect, useState } from "react";
import {
  DEFAULT_LINK_PREVIEW_VARIANT,
  LINK_PREVIEW_VARIANTS,
  usePreview,
} from "@/components/dev/preview-context";

const DEFAULT_SIZE = 120;
const DEFAULT_RADIUS = 0;
const DEFAULT_DATE_GAP = 16;
const DEFAULT_ACCENT = "#7C3AED";

export default function LogoControls() {
  const [size, setSize] = useState(DEFAULT_SIZE);
  const [radius, setRadius] = useState(DEFAULT_RADIUS);
  const [dateGap, setDateGap] = useState(DEFAULT_DATE_GAP);
  const [collapsed, setCollapsed] = useState(false);

  const {
    accent,
    setAccent,
    workSkills,
    setWorkSkills,
    projectTags,
    setProjectTags,
    linkPreviewVariant,
    setLinkPreviewVariant,
  } = usePreview();

  useEffect(() => {
    document.documentElement.style.setProperty("--logo-size", `${size}px`);
    document.documentElement.style.setProperty("--logo-radius", `${radius}px`);
    document.documentElement.style.setProperty(
      "--label-date-gap",
      `${dateGap}px`,
    );
  }, [size, radius, dateGap]);

  return (
    <div className="fixed bottom-24 right-4 z-50 w-72 max-h-[80vh] overflow-y-auto rounded-xl border bg-card/95 p-3 shadow-lg backdrop-blur-sm text-foreground">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Dev controls
        </span>
        <button
          type="button"
          onClick={() => setCollapsed((c) => !c)}
          className="text-xs text-muted-foreground hover:text-foreground"
        >
          {collapsed ? "+" : "–"}
        </button>
      </div>
      {!collapsed && (
        <div className="flex flex-col gap-3">
          <label className="flex flex-col gap-1 text-xs">
            <div className="flex justify-between">
              <span>Logo size</span>
              <span className="tabular-nums text-muted-foreground">
                {size}px
              </span>
            </div>
            <input
              type="range"
              min={32}
              max={200}
              value={size}
              onChange={(e) => setSize(Number(e.target.value))}
              className="w-full accent-primary"
            />
          </label>
          <label className="flex flex-col gap-1 text-xs">
            <div className="flex justify-between">
              <span>Logo radius</span>
              <span className="tabular-nums text-muted-foreground">
                {radius}px
              </span>
            </div>
            <input
              type="range"
              min={0}
              max={80}
              value={radius}
              onChange={(e) => setRadius(Number(e.target.value))}
              className="w-full accent-primary"
            />
          </label>
          <label className="flex flex-col gap-1 text-xs">
            <div className="flex justify-between">
              <span>Logo→date gap</span>
              <span className="tabular-nums text-muted-foreground">
                {dateGap}px
              </span>
            </div>
            <input
              type="range"
              min={-32}
              max={64}
              value={dateGap}
              onChange={(e) => setDateGap(Number(e.target.value))}
              className="w-full accent-primary"
            />
          </label>
          <div className="flex flex-col gap-1.5 text-xs">
            <span>Variants</span>
            <button
              type="button"
              onClick={() => setWorkSkills(!workSkills)}
              className={`px-2 py-1 text-xs rounded border transition-colors text-left ${
                workSkills
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-background hover:bg-muted"
              }`}
            >
              Work skill chips: {workSkills ? "on" : "off"}
            </button>
            <button
              type="button"
              onClick={() => setProjectTags(!projectTags)}
              className={`px-2 py-1 text-xs rounded border transition-colors text-left ${
                projectTags
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-background hover:bg-muted"
              }`}
            >
              Project tags: {projectTags ? "on" : "off"}
            </button>
          </div>
          <label className="flex flex-col gap-1 text-xs">
            <div className="flex justify-between">
              <span>Particles color</span>
              <span className="tabular-nums text-muted-foreground">
                {accent}
              </span>
            </div>
            <input
              type="color"
              value={accent}
              onChange={(e) => setAccent(e.target.value)}
              className="w-full h-7 cursor-pointer"
            />
          </label>
          <div className="flex flex-col gap-1.5 text-xs">
            <span>Link preview layout</span>
            {LINK_PREVIEW_VARIANTS.map((v) => (
              <button
                key={v}
                type="button"
                onClick={() => setLinkPreviewVariant(v)}
                className={`px-2 py-1 text-xs rounded border transition-colors text-left ${
                  linkPreviewVariant === v
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-background hover:bg-muted"
                }`}
              >
                {v}
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={() => {
              setSize(DEFAULT_SIZE);
              setRadius(DEFAULT_RADIUS);
              setDateGap(DEFAULT_DATE_GAP);
              setAccent(DEFAULT_ACCENT);
              setWorkSkills(true);
              setProjectTags(false);
              setLinkPreviewVariant(DEFAULT_LINK_PREVIEW_VARIANT);
            }}
            className="text-xs text-muted-foreground hover:text-foreground self-start underline underline-offset-2"
          >
            reset
          </button>
        </div>
      )}
    </div>
  );
}
