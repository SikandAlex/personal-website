"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

type PreviewContextValue = {
  accent: string;
  setAccent: (c: string) => void;
  workSkills: boolean;
  setWorkSkills: (v: boolean) => void;
  projectTags: boolean;
  setProjectTags: (v: boolean) => void;
};

const DEFAULTS: PreviewContextValue = {
  accent: "#7C3AED",
  setAccent: () => {},
  workSkills: true,
  setWorkSkills: () => {},
  projectTags: false,
  setProjectTags: () => {},
};

const PreviewContext = createContext<PreviewContextValue>(DEFAULTS);

export function PreviewProvider({ children }: { children: ReactNode }) {
  const [accent, setAccent] = useState<string>("#7C3AED");
  const [workSkills, setWorkSkills] = useState<boolean>(true);
  const [projectTags, setProjectTags] = useState<boolean>(false);

  return (
    <PreviewContext.Provider
      value={{
        accent,
        setAccent,
        workSkills,
        setWorkSkills,
        projectTags,
        setProjectTags,
      }}
    >
      {children}
    </PreviewContext.Provider>
  );
}

export function usePreview() {
  return useContext(PreviewContext);
}
