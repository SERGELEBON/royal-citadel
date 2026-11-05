"use client";

import * as React from "react";
import {
  BookOpen, Award, Home, Scale,
  CheckCircle2, ArrowRight, type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { PILLARS } from "@/lib/site";
import { SectionShell } from "@/components/site/brand";

type PillarColor = "royal" | "gold" | "royal-soft" | "indigo";

const colorMap: Record<PillarColor, { tab: string; iconBg: string; ring: string; bar: string; dot: string }> = {
  royal: {
    tab: "bg-[#2E75B6] text-white",
    iconBg: "bg-[#2E75B6]",
    ring: "ring-[#2E75B6]",
    bar: "bg-[#2E75B6]",
    dot: "bg-[#2E75B6]",
  },
  gold: {
    tab: "bg-[#F4C430] text-[#2E75B6]",
    iconBg: "bg-[#F4C430]",
    ring: "ring-[#F4C430]",
    bar: "bg-[#F4C430]",
    dot: "bg-[#F4C430]",
  },
  "royal-soft": {
    tab: "bg-[#4A90D9] text-white",
    iconBg: "bg-[#4A90D9]",
    ring: "ring-[#4A90D9]",
    bar: "bg-[#4A90D9]",
    dot: "bg-[#4A90D9]",
  },
  indigo: {
    tab: "bg-[#4A3B69] text-white",
    iconBg: "bg-[#4A3B69]",
    ring: "ring-[#4A3B69]",
    bar: "bg-[#4A3B69]",
    dot: "bg-[#4A3B69]",
  },
};

const iconMap: Record<string, LucideIcon> = {
  BookOpen, Award, Home, Scale,
};

export function PillarsTabs() {
  const [active, setActive] = React.useState(0);
  const pillar = PILLARS[active];
  const color = colorMap[pillar.color as PillarColor];
  const Icon = iconMap[pillar.icon];

  return (
    <SectionShell id="pillars" background="white">
      {/* Heading */}
      <div className="flex flex-col items-center text-center">
        <div className="flex items-center gap-3">
          <span className="h-[2px] w-7 bg-[#F4C430]" />
          <span className="font-display text-xs font-semibold uppercase tracking-[0.32em] text-[#B8860B]">
            Our Pillars
          </span>
          <span className="h-[2px] w-7 bg-[#F4C430]" />
        </div>
        <h2 className="mt-4 font-display text-3xl font-bold uppercase leading-[1.05] tracking-tight text-[#2E75B6] sm:text-4xl lg:text-[2.75rem]">
          Four Reasons Families Choose Royal Citadel
        </h2>
        <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-[#1A2340]/75">
          Strong academics. Rich extra-curricular life. Discipline that builds character.
          Creativity in everything — these are the pillars on which every Royal Citadel learner grows.
        </p>
        <span className="mt-4 h-[3px] w-16 rounded-full bg-[#F4C430]" />
      </div>

      {/* Tabs */}
      <div className="mt-12">
        {/* Tab strip */}
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-0">
          {PILLARS.map((p, i) => {
            const c = colorMap[p.color as PillarColor];
            const PIcon = iconMap[p.icon];
            const isActive = i === active;
            return (
              <button
                key={p.id}
                type="button"
                onClick={() => setActive(i)}
                role="tab"
                aria-selected={isActive}
                aria-controls={`pillar-panel-${p.id}`}
                id={`pillar-tab-${p.id}`}
                className={cn(
                  "group relative flex flex-col items-center gap-2 px-2 py-4 text-center font-display text-sm font-semibold uppercase tracking-[0.12em] transition-all duration-300 sm:py-5",
                  c.tab,
                  isActive
                    ? "shadow-[0_10px_30px_-12px_rgba(46,117,182,0.5)] sm:-mb-3 sm:rounded-t-[6px] sm:z-10 sm:scale-[1.02]"
                    : "opacity-80 hover:opacity-100 sm:rounded-t-[6px]",
                )}
              >
                <span
                  className={cn(
                    "flex h-10 w-10 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/20 transition-transform",
                    isActive && "scale-110",
                  )}
                >
                  <PIcon className="h-5 w-5" />
                </span>
                <span className="text-[11px] sm:text-xs">{p.label}</span>
                {!isActive && <span className="hidden h-1 w-full bg-black/10 sm:block" />}
                {isActive && (
                  <span className="absolute -bottom-0 left-1/2 hidden h-1 w-16 -translate-x-1/2 bg-white/40 sm:block" />
                )}
              </button>
            );
          })}
        </div>

        {/* Panel */}
        <div
          id={`pillar-panel-${pillar.id}`}
          role="tabpanel"
          aria-labelledby={`pillar-tab-${pillar.id}`}
          className="relative overflow-hidden rounded-b-[6px] rounded-tr-[6px] border border-[#2E75B6]/10 bg-[#FAF7EC] p-7 shadow-[0_18px_50px_-20px_rgba(46,117,182,0.3)] sm:p-10"
        >
          {/* Color side bar */}
          <div className={cn("absolute inset-y-0 left-0 w-1.5", color.bar)} />

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[auto_1fr] lg:gap-10">
            {/* Big icon + label */}
            <div className="flex flex-row items-center gap-4 lg:flex-col lg:items-start lg:gap-3">
              <div
                className={cn(
                  "flex h-16 w-16 items-center justify-center rounded-[6px] text-white shadow-lg ring-4 ring-white",
                  color.iconBg,
                )}
              >
                <Icon className="h-8 w-8" />
              </div>
              <div>
                <p className="font-display text-[10px] font-semibold uppercase tracking-[0.24em] text-[#B8860B]">
                  Pillar {String(active + 1).padStart(2, "0")}
                </p>
                <h3 className="font-display text-xl font-bold uppercase tracking-wide text-[#2E75B6]">
                  {pillar.label}
                </h3>
              </div>
            </div>

            {/* Body */}
            <div>
              <h4 className="font-display text-2xl font-bold leading-snug text-[#2E75B6] sm:text-3xl">
                {pillar.title}
              </h4>
              <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-[#1A2340]/80">
                {pillar.body}
              </p>

              <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {pillar.points.map((pt) => (
                  <li
                    key={pt}
                    className="flex items-start gap-2.5 rounded-[4px] border border-[#2E75B6]/8 bg-white p-3"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#B8860B]" />
                    <span className="text-[13px] font-medium leading-snug text-[#2E75B6]">{pt}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#admissions"
                className="mt-7 inline-flex items-center gap-1.5 font-display text-xs font-semibold uppercase tracking-[0.16em] text-[#2E75B6] transition-colors hover:text-[#B8860B]"
              >
                See it in action at our next open day
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Tab indicator dots (mobile-friendly alt) */}
          <div className="mt-8 flex items-center justify-center gap-2 border-t border-[#2E75B6]/10 pt-5 lg:hidden">
            {PILLARS.map((p, i) => (
              <button
                key={p.id}
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Show pillar ${i + 1}`}
                className={cn(
                  "h-2 rounded-full transition-all",
                  i === active ? "w-7 bg-[#F4C430]" : "w-2 bg-[#2E75B6]/20",
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
