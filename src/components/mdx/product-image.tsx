/* eslint-disable @next/next/no-img-element */
import type { ReactNode } from "react";

interface ProductImageProps {
  src: string;
  alt: string;
  caption?: string;
  credit?: string;
}

export function ProductImage({ src, alt, caption, credit }: ProductImageProps) {
  return (
    <figure className="not-prose my-6">
      <div className="flex h-[280px] w-full items-center justify-center overflow-hidden rounded-lg bg-white p-4 ring-4 ring-muted">
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="h-full w-full object-contain"
        />
      </div>
      {(caption || credit) && (
        <figcaption className="mt-2 text-xs text-muted-foreground">
          {caption}
          {caption && credit && " "}
          {credit && <span className="opacity-70">Image: {credit}</span>}
        </figcaption>
      )}
    </figure>
  );
}

export function ProductImageRow({ children }: { children: ReactNode }) {
  return (
    <div className="not-prose grid grid-cols-1 gap-4 sm:grid-cols-2 [&>figure]:my-0 my-6">
      {children}
    </div>
  );
}
