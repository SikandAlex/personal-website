"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

export type LinkPreviewVariant =
  | "compact"
  | "wide-side"
  | "wide-side-left"
  | "banner"
  | "contain"
  | "text-only";

export const LINK_PREVIEW_VARIANTS: LinkPreviewVariant[] = [
  "compact",
  "wide-side",
  "wide-side-left",
  "banner",
  "contain",
  "text-only",
];

export const DEFAULT_LINK_PREVIEW_VARIANT: LinkPreviewVariant = "wide-side-left";

type PreviewContextValue = {
  accent: string;
  setAccent: (c: string) => void;
  workSkills: boolean;
  setWorkSkills: (v: boolean) => void;
  projectTags: boolean;
  setProjectTags: (v: boolean) => void;
  linkPreviewVariant: LinkPreviewVariant;
  setLinkPreviewVariant: (v: LinkPreviewVariant) => void;
};

const DEFAULTS: PreviewContextValue = {
  accent: "#7C3AED",
  setAccent: () => {},
  workSkills: true,
  setWorkSkills: () => {},
  projectTags: false,
  setProjectTags: () => {},
  linkPreviewVariant: DEFAULT_LINK_PREVIEW_VARIANT,
  setLinkPreviewVariant: () => {},
};

const PreviewContext = createContext<PreviewContextValue>(DEFAULTS);

export function PreviewProvider({ children }: { children: ReactNode }) {
  const [accent, setAccent] = useState<string>("#7C3AED");
  const [workSkills, setWorkSkills] = useState<boolean>(true);
  const [projectTags, setProjectTags] = useState<boolean>(false);
  const [linkPreviewVariant, setLinkPreviewVariant] =
    useState<LinkPreviewVariant>(DEFAULT_LINK_PREVIEW_VARIANT);

  return (
    <PreviewContext.Provider
      value={{
        accent,
        setAccent,
        workSkills,
        setWorkSkills,
        projectTags,
        setProjectTags,
        linkPreviewVariant,
        setLinkPreviewVariant,
      }}
    >
      {children}
    </PreviewContext.Provider>
  );
}

export function usePreview() {
  return useContext(PreviewContext);
}
