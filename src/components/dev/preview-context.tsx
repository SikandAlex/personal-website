"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

export type CardStyle =
  | "default"
  | "particles"
  | "noise"
  | "glare"
  | "shine"
  | "magic";

export type HeroStyle = "default" | "line-shadow" | "aurora" | "typing";

type PreviewContextValue = {
  cardStyle: CardStyle;
  setCardStyle: (s: CardStyle) => void;
  heroStyle: HeroStyle;
  setHeroStyle: (s: HeroStyle) => void;
  accent: string;
  setAccent: (c: string) => void;
};

const DEFAULTS: PreviewContextValue = {
  cardStyle: "default",
  setCardStyle: () => {},
  heroStyle: "default",
  setHeroStyle: () => {},
  accent: "#7C3AED",
  setAccent: () => {},
};

const PreviewContext = createContext<PreviewContextValue>(DEFAULTS);

export function PreviewProvider({ children }: { children: ReactNode }) {
  const [cardStyle, setCardStyle] = useState<CardStyle>("default");
  const [heroStyle, setHeroStyle] = useState<HeroStyle>("default");
  const [accent, setAccent] = useState<string>("#7C3AED");

  return (
    <PreviewContext.Provider
      value={{
        cardStyle,
        setCardStyle,
        heroStyle,
        setHeroStyle,
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
