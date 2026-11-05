"use client";

import { ArrowRight, CheckCircle2, MapPin } from "lucide-react";
import { SITE } from "@/lib/site";
import { SectionShell, SectionHeading, BrandButton, LevelBadge } from "@/components/site/brand";

const HIGHLIGHTS = [
  "G.E.S Approved SHS in Kotobabi",
  "GES curriculum, SHS 1 to SHS 3",
  "Small classes, individual attention",
  "Sports, music, art & STEM clubs",
];

export function WelcomeSection() {
  return (
    <SectionShell id="about" background="white">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14 lg:items-center">
        {/* Left: text */}
        <div>
          <SectionHeading
            eyebrow="Why choose us"
            title={
              <>
                Where Discipline Meets <br className="hidden sm:block" />
                Knowledge & Excellence
              </>
            }
          />
          <p className="mt-5 text-[15px] leading-relaxed text-[#1A2340]/80">
            {SITE.whyChooseBody}
          </p>
          <p className="mt-4 text-[15px] leading-relaxed text-[#1A2340]/80">
            {SITE.whyChooseLead}
          </p>

          {/* Highlight checklist */}
          <ul className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {HIGHLIGHTS.map((h) => (
              <li key={h} className="flex items-start gap-2.5">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#B8860B]" />
                <span className="text-[13px] font-medium leading-snug text-[#2E75B6]">{h}</span>
              </li>
            ))}
          </ul>

          {/* Level badges */}
          <div className="mt-7 flex flex-wrap items-center gap-2">
            <span className="font-display text-[11px] font-semibold uppercase tracking-[0.2em] text-[#1A2340]/55">
              We offer:
            </span>
            {SITE.levels.map((lvl) => (
              <LevelBadge key={lvl} level={lvl} variant="outline" />
            ))}
          </div>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <BrandButton href="#academics" icon={<ArrowRight className="h-4 w-4" />}>
              Learn More
            </BrandButton>
            <BrandButton href="#admissions" variant="outline">
              Enroll Your Ward
            </BrandButton>
          </div>
        </div>

        {/* Right: framed photo with badge */}
        <div className="relative">
          <div className="relative overflow-hidden rounded-[6px] shadow-[0_24px_60px_-20px_rgba(46,117,182,0.45)]">
            <img
              src="/images/campus.png"
              alt="Royal Citadel College campus in Kotobabi, Accra"
              className="aspect-[4/5] w-full object-cover sm:aspect-[5/5] lg:aspect-[4/5]"
              loading="lazy"
            />
            {/* Navy gradient at bottom for badge legibility */}
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#1B3A6B]/85 to-transparent" />
            {/* Floating badge */}
            <div className="absolute bottom-5 left-5 right-5 rounded-[6px] border border-white/20 bg-white/10 p-5 backdrop-blur-md">
              <p className="font-script text-2xl text-[#F4C430]">Since 2009</p>
              <p className="mt-1 font-display text-base font-semibold uppercase tracking-wide text-white">
                Over a decade of <br /> Learning & Leading
              </p>
            </div>
          </div>

          {/* Decorative copper corner block */}
          <div className="absolute -right-3 -top-3 hidden h-20 w-20 rounded-tl-[6px] bg-[#F4C430] lg:block">
            <div className="flex h-full w-full items-end justify-start p-2">
              <MapPin className="h-5 w-5 text-white" />
            </div>
          </div>
          {/* Decorative navy corner block */}
          <div className="absolute -bottom-3 -left-3 hidden h-20 w-32 rounded-br-[6px] bg-[#2E75B6] lg:block">
            <div className="flex h-full w-full flex-col justify-center p-3">
              <span className="font-display text-2xl font-bold text-[#B8860B]">3</span>
              <span className="font-display text-[9px] font-semibold uppercase tracking-[0.18em] text-white">
                Levels
              </span>
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
