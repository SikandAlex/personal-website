"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

type PreviewContextValue = {
  accent: string;
  setAccent: (c: string) => void;
};

const DEFAULTS: PreviewContextValue = {
  accent: "#7C3AED",
  setAccent: () => {},
};

const PreviewContext = createContext<PreviewContextValue>(DEFAULTS);

export function PreviewProvider({ children }: { children: ReactNode }) {
  const [accent, setAccent] = useState<string>("#7C3AED");

  return (
    <PreviewContext.Provider value={{ accent, setAccent }}>
      {children}
    </PreviewContext.Provider>
  );
}

export function usePreview() {
  return useContext(PreviewContext);
}
