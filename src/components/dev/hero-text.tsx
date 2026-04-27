"use client";

import BlurFadeText from "@/components/magicui/blur-fade-text";
import { LineShadowText } from "@/components/ui/line-shadow-text";
import { AuroraText } from "@/components/ui/aurora-text";
import { TypingAnimation } from "@/components/ui/typing-animation";
import { usePreview } from "@/components/dev/preview-context";

interface Props {
  text: string;
  className?: string;
  delay?: number;
  yOffset?: number;
}

export function HeroText({ text, className, delay, yOffset }: Props) {
  const { heroStyle, accent } = usePreview();
  const finalText = text;

  switch (heroStyle) {
    case "line-shadow":
      return (
        <h2 className={className}>
          <LineShadowText shadowColor={accent}>{finalText}</LineShadowText>
        </h2>
      );
    case "aurora":
      return (
        <h2 className={className}>
          <AuroraText
            colors={[accent, "#0070F3", "#38bdf8", accent]}
          >
            {finalText}
          </AuroraText>
        </h2>
      );
    case "typing":
      return (
        <TypingAnimation
          className={className}
          duration={60}
          startOnView
        >
          {finalText}
        </TypingAnimation>
      );
    default:
      return (
        <BlurFadeText
          text={finalText}

          className={className}
          delay={delay}
          yOffset={yOffset}
        />
      );
  }
}
