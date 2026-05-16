/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Icons } from "@/components/icons";
import { FaGithub } from "react-icons/fa";

type PersonCardProps = {
  name: string;
  role?: string;
  image?: string;
  linkedinUrl?: string;
  githubUrl?: string;
};

export function PersonCard({
  name,
  role,
  image,
  linkedinUrl,
  githubUrl,
}: PersonCardProps) {
  const initials = name
    .split(/\s+/)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="not-prose my-6 flex flex-col sm:flex-row items-start gap-4 p-4 border border-border rounded-xl bg-card">
      <div className="size-16 rounded-full overflow-hidden ring-2 ring-muted shrink-0 bg-muted flex items-center justify-center">
        {image ? (
          <img
            src={image}
            alt={name}
            className="size-full object-cover"
            loading="lazy"
          />
        ) : (
          <span className="text-sm font-medium text-muted-foreground">
            {initials}
          </span>
        )}
      </div>
      <div className="flex-1 flex flex-col gap-2 min-w-0">
        <div className="flex flex-col">
          <span className="text-base font-medium text-foreground">{name}</span>
          {role ? (
            <span className="text-sm text-muted-foreground">{role}</span>
          ) : null}
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {linkedinUrl ? (
            <Link
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Connect with ${name} on LinkedIn`}
              className="inline-flex items-center gap-1.5 rounded-md bg-[#0A66C2] px-3 py-1.5 text-xs sm:text-sm font-medium text-white shadow-sm transition-colors hover:bg-[#0953a1] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <Icons.linkedin className="size-3.5 sm:size-4" />
              Connect on LinkedIn
            </Link>
          ) : null}
          {githubUrl ? (
            <Link
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${name} on GitHub`}
              className="inline-flex items-center gap-1.5 rounded-md border border-border bg-background px-3 py-1.5 text-xs sm:text-sm font-medium text-foreground shadow-sm transition-colors hover:bg-accent/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <FaGithub className="size-3.5 sm:size-4" />
              GitHub
            </Link>
          ) : null}
        </div>
      </div>
    </div>
  );
}
