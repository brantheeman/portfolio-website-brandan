"use client";

import Image from "next/image";
import { techLogoUrl, techStack, type TechItem } from "../data/techStack";

function TechLogoCard({ tech }: { tech: TechItem }) {
  return (
    <div
      className="group flex shrink-0 flex-col items-center gap-3 rounded-xl border border-gray-800 bg-gray-900/60 px-6 py-5 transition-colors hover:border-blue-500/40 hover:bg-gray-900"
      title={tech.name}
    >
      <div className="relative flex h-12 w-12 items-center justify-center">
        <Image
          src={techLogoUrl(tech.slug, tech.color)}
          alt=""
          width={48}
          height={48}
          className="h-10 w-10 object-contain opacity-90 transition-opacity group-hover:opacity-100"
          unoptimized
        />
      </div>
      <span className="whitespace-nowrap text-sm font-medium text-gray-300">
        {tech.name}
      </span>
    </div>
  );
}

function MarqueeRow({
  items,
  direction = "left",
}: {
  items: TechItem[];
  direction?: "left" | "right";
}) {
  const doubled = [...items, ...items];

  return (
    <div className="relative overflow-hidden">
      <div
        className={`flex w-max gap-4 ${
          direction === "left" ? "animate-marquee" : "animate-marquee-reverse"
        } motion-reduce:animate-none`}
      >
        {doubled.map((tech, index) => (
          <TechLogoCard key={`${tech.slug}-${index}`} tech={tech} />
        ))}
      </div>
    </div>
  );
}

type TechStackCarouselProps = {
  title?: string;
  subtitle?: string;
  className?: string;
};

export default function TechStackCarousel({
  title = "Tools & Technologies",
  subtitle = "Languages, frameworks, and platforms I use to build full-stack apps and data platforms.",
  className = "",
}: TechStackCarouselProps) {
  const firstRow = techStack.filter((_, i) => i % 2 === 0);
  const secondRow = techStack.filter((_, i) => i % 2 === 1);

  return (
    <div className={className}>
      {(title || subtitle) && (
        <div className="mb-6">
          {title && <h3 className="text-2xl font-semibold">{title}</h3>}
          {subtitle && (
            <p className="mt-2 text-sm text-gray-400 max-w-2xl">{subtitle}</p>
          )}
        </div>
      )}

      <div
        className="relative space-y-4 rounded-xl border border-gray-800 bg-gray-900/30 py-6"
        aria-label="Technologies carousel"
      >
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-gray-950 to-transparent"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-gray-950 to-transparent"
          aria-hidden
        />

        <div className="[--marquee-duration:45s] hover:[--marquee-duration:90s] motion-reduce:[--marquee-duration:0s]">
          <MarqueeRow items={firstRow} direction="left" />
          <MarqueeRow items={secondRow} direction="right" />
        </div>
      </div>
    </div>
  );
}
