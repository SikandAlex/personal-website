"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const DEFAULT_SIZE = 80;
const DEFAULT_RADIUS = 8;
const DEFAULT_WORK_STYLE: WorkStyle = "accordion";

type WorkStyle = "accordion" | "timeline";

export default function LogoControls() {
  const [size, setSize] = useState(DEFAULT_SIZE);
  const [radius, setRadius] = useState(DEFAULT_RADIUS);
  const [workStyle, setWorkStyle] = useState<WorkStyle>(DEFAULT_WORK_STYLE);
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    document.documentElement.style.setProperty("--logo-size", `${size}px`);
    document.documentElement.style.setProperty("--logo-radius", `${radius}px`);
  }, [size, radius]);

  useEffect(() => {
    document.documentElement.setAttribute("data-work-style", workStyle);
  }, [workStyle]);

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
              max={160}
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
          <div className="flex flex-col gap-1.5 text-xs">
            <span>Work layout</span>
            <div className="flex rounded-md border overflow-hidden">
              <button
                type="button"
                onClick={() => setWorkStyle("accordion")}
                className={cn(
                  "flex-1 px-2 py-1 text-xs transition-colors",
                  workStyle === "accordion"
                    ? "bg-primary text-primary-foreground"
                    : "bg-background hover:bg-muted",
                )}
              >
                Accordion
              </button>
              <button
                type="button"
                onClick={() => setWorkStyle("timeline")}
                className={cn(
                  "flex-1 px-2 py-1 text-xs transition-colors border-l",
                  workStyle === "timeline"
                    ? "bg-primary text-primary-foreground"
                    : "bg-background hover:bg-muted",
                )}
              >
                Timeline
              </button>
            </div>
          </div>
          <button
            type="button"
            onClick={() => {
              setSize(DEFAULT_SIZE);
              setRadius(DEFAULT_RADIUS);
              setWorkStyle(DEFAULT_WORK_STYLE);
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
