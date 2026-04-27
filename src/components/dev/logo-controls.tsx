"use client";

import { useEffect, useState } from "react";

const DEFAULT_SIZE = 120;
const DEFAULT_RADIUS = 0;
const DEFAULT_DATE_GAP = 16;
const DEFAULT_COURSEWORK_LAYOUT: CourseworkLayout = "pills";

type CourseworkLayout = "pills" | "list" | "two-col";

export default function LogoControls() {
  const [size, setSize] = useState(DEFAULT_SIZE);
  const [radius, setRadius] = useState(DEFAULT_RADIUS);
  const [dateGap, setDateGap] = useState(DEFAULT_DATE_GAP);
  const [courseworkLayout, setCourseworkLayout] = useState<CourseworkLayout>(
    DEFAULT_COURSEWORK_LAYOUT,
  );
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    document.documentElement.style.setProperty("--logo-size", `${size}px`);
    document.documentElement.style.setProperty("--logo-radius", `${radius}px`);
    document.documentElement.style.setProperty(
      "--label-date-gap",
      `${dateGap}px`,
    );
  }, [size, radius, dateGap]);

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-coursework-layout",
      courseworkLayout,
    );
  }, [courseworkLayout]);

  return (
    <div className="fixed bottom-24 right-4 z-50 w-64 rounded-xl border bg-card/95 p-3 shadow-lg backdrop-blur-sm text-foreground">
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
            <span>Coursework layout</span>
            <div className="flex rounded-md border overflow-hidden">
              {(["pills", "list", "two-col"] as CourseworkLayout[]).map(
                (opt, i) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => setCourseworkLayout(opt)}
                    className={`flex-1 px-2 py-1 text-xs transition-colors ${
                      i > 0 ? "border-l" : ""
                    } ${
                      courseworkLayout === opt
                        ? "bg-primary text-primary-foreground"
                        : "bg-background hover:bg-muted"
                    }`}
                  >
                    {opt === "two-col" ? "2-col" : opt}
                  </button>
                ),
              )}
            </div>
          </div>
          <button
            type="button"
            onClick={() => {
              setSize(DEFAULT_SIZE);
              setRadius(DEFAULT_RADIUS);
              setDateGap(DEFAULT_DATE_GAP);
              setCourseworkLayout(DEFAULT_COURSEWORK_LAYOUT);
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
