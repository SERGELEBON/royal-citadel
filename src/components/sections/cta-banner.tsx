"use client";

import { ArrowRight, Phone } from "lucide-react";
import { SITE } from "@/lib/site";
import { BrandButton } from "@/components/site/brand";

export function CtaBanner() {
  return (
    <section id="admissions" className="relative overflow-hidden bg-[#1B3A6B]">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/images/cta-banner.png"
          alt=""
          className="h-full w-full object-cover"
          loading="lazy"
        />
        {/* Dark navy gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1B3A6B]/95 via-[#1B3A6B]/80 to-[#2E75B6]/70" />
        {/* Copper diagonal accent */}
        <div
          className="absolute inset-y-0 right-0 w-1/3 bg-[#F4C430]/15"
          style={{ clipPath: "polygon(35% 0, 100% 0, 100% 100%, 0 100%)" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <div className="max-w-2xl text-white">
          <div className="flex items-center gap-3">
            <span className="h-[2px] w-7 bg-[#F4C430]" />
            <span className="font-display text-xs font-semibold uppercase tracking-[0.32em] text-[#B8860B]">
              Now Open For Admissions
            </span>
          </div>

          <h2 className="mt-4 font-display text-4xl font-bold uppercase leading-[0.95] tracking-tight drop-shadow-lg sm:text-5xl lg:text-6xl">
            Enroll Your Ward <br />
            <span className="text-[#B8860B]">Right Now!</span>
          </h2>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
            {SITE.bannerMessage.replace(/^Admissions Open for SHS 1-3 — /, "")}
          </p>

          <p className="mt-4 font-script text-2xl text-[#F4C430] sm:text-3xl">
            G.E.S Approved — Discipline, Knowledge, Excellence!
          </p>

          {/* CTA + phone */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <BrandButton href="#contact" size="lg" icon={<ArrowRight className="h-4 w-4" />}>
              Apply Now
            </BrandButton>
            <a
              href={`tel:${SITE.phones[0].replace(/\s/g, "")}`}
              className="inline-flex items-center gap-3 rounded-[4px] border border-white/30 bg-white/5 px-5 py-3.5 backdrop-blur-sm transition-colors hover:bg-white/15"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F4C430] text-[#2E75B6]">
                <Phone className="h-4 w-4" />
              </span>
              <span className="flex flex-col leading-tight">
                <span className="font-display text-[10px] font-semibold uppercase tracking-[0.18em] text-white/70">
                  Call us now
                </span>
                <span className="font-display text-sm font-bold text-white">{SITE.phones[0]}</span>
              </span>
            </a>
          </div>

          {/* Levels reminder strip */}
          <div className="mt-10 flex flex-wrap items-center gap-2.5 border-t border-white/15 pt-6">
            <span className="font-display text-[11px] font-semibold uppercase tracking-[0.2em] text-white/55">
              Open across all levels:
            </span>
            {SITE.levels.map((lvl) => (
              <span
                key={lvl}
                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 font-display text-[11px] font-semibold uppercase tracking-[0.18em] text-white ring-1 ring-white/25"
              >
                <span className="level-dot" />
                {lvl}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
