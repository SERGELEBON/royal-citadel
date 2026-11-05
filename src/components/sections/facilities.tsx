"use client";

import {
  FlaskConical, Monitor, BookMarked, Volleyball, Home,
  Utensils, Heart, Bus, type LucideIcon,
} from "lucide-react";
import { FACILITIES } from "@/lib/site";
import { SectionShell } from "@/components/site/brand";

const iconMap: Record<string, LucideIcon> = {
  FlaskConical, Monitor, BookMarked, Volleyball, Home, Utensils, Heart, Bus,
};

export function FacilitiesSection() {
  return (
    <SectionShell id="facilities" background="navy-deep">
      <div className="flex flex-col items-center text-center">
        <div className="flex items-center gap-3">
          <span className="h-[2px] w-7 bg-[#F4C430]" />
          <span className="font-display text-xs font-semibold uppercase tracking-[0.32em] text-[#B8860B]">
            Our Facilities
          </span>
          <span className="h-[2px] w-7 bg-[#F4C430]" />
        </div>
        <h2 className="mt-4 font-display text-3xl font-bold uppercase leading-[1.05] tracking-tight text-white sm:text-4xl">
          Spaces Built For Curious Scholars
        </h2>
        <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-white/75">
          Every space at Royal Citadel College is designed to make learning safe, hands-on and joyful —
          from the science lab to the playground, the library to the dance studio.
        </p>
        <span className="mt-4 h-[3px] w-16 rounded-full bg-[#F4C430]" />
      </div>

      <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {FACILITIES.map((f, i) => {
          const Icon = iconMap[f.icon];
          return (
            <div
              key={f.label}
              className="group relative flex flex-col items-start gap-3 overflow-hidden rounded-[6px] border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#F4C430]/50 hover:bg-white/10"
            >
              <span className="font-display text-[10px] font-semibold uppercase tracking-[0.2em] text-[#B8860B]/60">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex h-11 w-11 items-center justify-center rounded-[4px] bg-[#F4C430] text-[#2E75B6] transition-transform group-hover:scale-110">
                <Icon className="h-5 w-5" />
              </div>
              <p className="font-display text-sm font-semibold uppercase tracking-wide text-white">
                {f.label}
              </p>
              {/* Decorative corner */}
              <span className="absolute right-3 top-3 h-1.5 w-1.5 rounded-full bg-[#F4C430]/40 transition-colors group-hover:bg-[#F4C430]" />
            </div>
          );
        })}
      </div>
    </SectionShell>
  );
}
