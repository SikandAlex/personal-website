"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

export type HeroStyle = "default" | "line-shadow" | "aurora" | "typing";

export const HERO_GREETINGS = [
  "Hi, I'm Alex",
  "Hi, I'm Alex Sikand",
  "Alex Sikand",
  "Hey, I'm Alex",
  "Hey, I'm Alex Sikand",
] as const;

export type HeroGreeting = (typeof HERO_GREETINGS)[number];

type PreviewContextValue = {
  heroStyle: HeroStyle;
  setHeroStyle: (s: HeroStyle) => void;
  greeting: HeroGreeting;
  setGreeting: (g: HeroGreeting) => void;
  accent: string;
  setAccent: (c: string) => void;
};

const DEFAULTS: PreviewContextValue = {
  heroStyle: "default",
  setHeroStyle: () => {},
  greeting: "Hi, I'm Alex",
  setGreeting: () => {},
  accent: "#7C3AED",
  setAccent: () => {},
};

const PreviewContext = createContext<PreviewContextValue>(DEFAULTS);

export function PreviewProvider({ children }: { children: ReactNode }) {
  const [heroStyle, setHeroStyle] = useState<HeroStyle>("default");
  const [greeting, setGreeting] = useState<HeroGreeting>("Hi, I'm Alex");
  const [accent, setAccent] = useState<string>("#7C3AED");

  return (
    <PreviewContext.Provider
      value={{
        heroStyle,
        setHeroStyle,
        greeting,
        setGreeting,
        accent,
        setAccent,
      }}
    >
      {children}
    </PreviewContext.Provider>
  );
}

export function usePreview() {
  return useContext(PreviewContext);
}
