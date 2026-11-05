"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { SITE } from "@/lib/site";
import { BrandButton, LevelBadge } from "@/components/site/brand";

type Slide = {
  image: string;
  eyebrow: string;
  title: string;
  highlight?: string;
  body: string;
  align: "left" | "right" | "center";
};

const SLIDES: Slide[] = [
  {
    image: "/images/hero-students.png",
    eyebrow: "G.E.S Approved!",
    title: "Admissions Open",
    highlight: "for SHS 1-3",
    body: "SHS 1 · SHS 2 · SHS 3 — plus vacation classes, WASSCE remedial & registration, and safe hostel facilities at Royal Citadel College, Kotobabi Road.",
    align: "left",
  },
  {
    image: "/images/hero-slide2.png",
    eyebrow: "WASSCE Excellence",
    title: "Discipline, Knowledge, Excellence",
    body: "A G.E.S-approved Senior High School with dedicated WASSCE remedial (May/June & Nov/Dec), in-house registration and consistent mock exams — every scholar is known and stretched at Royal Citadel College.",
    align: "left",
  },
  {
    image: "/images/hero-slide3.png",
    eyebrow: "Hostel & Boarding",
    title: "Safe Hostel, Strong Character",
    body: "Secure hostel facilities with caring houseparents, balanced meals and supervised evening prep on Kotobabi Road — building disciplined, knowledgeable and excellent young men and women ready for university and life.",
    align: "right",
  },
];

export function HeroCarousel() {
  const [index, setIndex] = React.useState(0);
  const [paused, setPaused] = React.useState(false);
  const count = SLIDES.length;

  const next = React.useCallback(() => setIndex((i) => (i + 1) % count), [count]);
  const prev = React.useCallback(() => setIndex((i) => (i - 1 + count) % count), [count]);

  React.useEffect(() => {
    if (paused) return;
    const t = window.setInterval(next, 6500);
    return () => window.clearInterval(t);
  }, [next, paused, index]);

  const slide = SLIDES[index];

  return (
    <section
      id="home"
      className="relative -mt-[1px] h-[88vh] min-h-[560px] w-full overflow-hidden bg-[#1B3A6B] lg:h-[92vh]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Royal Citadel College highlights"
    >
      {/* Slides */}
      {SLIDES.map((s, i) => (
        <div
          key={i}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000 ease-out",
            i === index ? "opacity-100" : "opacity-0",
          )}
          aria-hidden={i !== index}
        >
          <img
            src={s.image}
            alt=""
            className={cn(
              "h-full w-full object-cover",
              i === index && "animate-kenburns-loop",
            )}
          />
          {/* Dark navy gradient overlay for legibility */}
          <div
            className={cn(
              "absolute inset-0",
              s.align === "right"
                ? "bg-gradient-to-l from-[#1B3A6B]/92 via-[#1B3A6B]/65 to-transparent"
                : s.align === "center"
                  ? "bg-[#1B3A6B]/65"
                  : "bg-gradient-to-r from-[#1B3A6B]/92 via-[#1B3A6B]/65 to-transparent",
            )}
          />
          {/* Copper bottom edge accent */}
          <div className="absolute inset-x-0 bottom-0 h-1 bg-[#F4C430]" />
        </div>
      ))}

      {/* Caption */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div
            className={cn(
              "max-w-xl text-[#2E75B6]",
              slide.align === "right" && "ml-auto text-right",
              slide.align === "center" && "mx-auto text-center",
            )}
            key={index /* re-trigger animation */}
          >
            {/* Script accent */}
            <p
              className="font-script text-3xl text-[#B8860B] sm:text-4xl lg:text-5xl"
              style={{ animation: "fadeUp 800ms ease-out both" }}
            >
              {slide.eyebrow}
            </p>
            {/* Big H1 */}
            <h1
              className="mt-2 font-display text-4xl font-bold uppercase leading-[0.95] tracking-tight drop-shadow-lg sm:text-6xl lg:text-7xl"
              style={{ animation: "fadeUp 900ms ease-out 120ms both" }}
            >
              {slide.title}
              {slide.highlight && (
                <span className="block text-[#B8860B]">{slide.highlight}</span>
              )}
            </h1>
            {/* Body */}
            <p
              className="mt-5 max-w-md text-sm leading-relaxed text-[#2E75B6]/85 sm:text-base lg:text-lg"
              style={{ animation: "fadeUp 900ms ease-out 240ms both" }}
            >
              {slide.body}
            </p>

            {/* Level badges row (slide 1 only) */}
            {index === 0 && (
              <div
                className="mt-6 flex flex-wrap gap-2"
                style={{ animation: "fadeUp 900ms ease-out 360ms both" }}
              >
                {SITE.levels.map((lvl) => (
                  <span
                    key={lvl}
                    className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 font-display text-[11px] font-semibold uppercase tracking-[0.18em] text-[#2E75B6] ring-1 ring-white/25 backdrop-blur-sm"
                  >
                    <span className="level-dot" />
                    {lvl}
                  </span>
                ))}
              </div>
            )}

            {/* CTAs */}
            <div
              className="mt-8 flex flex-wrap items-center gap-3"
              style={{ animation: "fadeUp 900ms ease-out 480ms both" }}
            >
              <BrandButton href="#admissions" size="lg" icon={<ArrowRight className="h-4 w-4" />}>
                Enroll Now
              </BrandButton>
              <BrandButton href="#about" variant="ghost" size="lg">
                Discover Royal Citadel
              </BrandButton>
            </div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="absolute bottom-6 left-0 right-0 z-20">
        <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Indicators */}
          <div className="flex items-center gap-2.5">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={cn(
                  "h-[3px] rounded-full transition-all duration-500",
                  i === index ? "w-10 bg-[#F4C430]" : "w-6 bg-white/40 hover:bg-white/70",
                )}
              />
            ))}
            <span className="ml-3 font-display text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
              {String(index + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
            </span>
          </div>

          {/* Arrows */}
          <div className="hidden items-center gap-2 sm:flex">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous slide"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-[#2E75B6] backdrop-blur-sm transition-colors hover:bg-[#F4C430] hover:border-[#F4C430]"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next slide"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-[#2E75B6] backdrop-blur-sm transition-colors hover:bg-[#F4C430] hover:border-[#F4C430]"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Inline keyframes (so they exist regardless of CSS load order) */}
      <style>{`@keyframes fadeUp { from { opacity:0; transform: translateY(24px); } to { opacity:1; transform: translateY(0); } }`}</style>
    </section>
  );
}
