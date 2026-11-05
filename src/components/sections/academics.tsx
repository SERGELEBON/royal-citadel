"use client";

import { ArrowRight, BookOpen, GraduationCap, CalendarDays, Award, Home, type LucideIcon } from "lucide-react";
import { SectionShell, BrandButton, LevelBadge } from "@/components/site/brand";

type Level = {
  name: string;
  age: string;
  icon: LucideIcon;
  description: string;
  features: string[];
  image: string;
  accent: string;
};

const LEVELS: Level[] = [
  {
    name: "SHS 1",
    age: "Form 1 · Foundation Year",
    icon: BookOpen,
    description:
      "The foundation of Senior High — learners settle into their chosen track (General Science, Business or General Arts), build strong study habits and begin the GES SHS curriculum with confidence.",
    features: ["GES SHS 1 curriculum", "Track selection & guidance", "Strong study-skills coaching"],
    image: "/images/photo-preschool.png",
    accent: "#F4C430",
  },
  {
    name: "SHS 2",
    age: "Form 2 · Consolidation Year",
    icon: GraduationCap,
    description:
      "Learners deepen subject mastery across core and elective areas — with consistent assessment, targeted remedial support and growing independence toward their final year.",
    features: ["Core & elective mastery", "Targeted remedial support", "Mid-year mock assessments"],
    image: "/images/photo-primary.png",
    accent: "#2E75B6",
  },
  {
    name: "SHS 3",
    age: "Form 3 · WASSCE Year",
    icon: Award,
    description:
      "The WASSCE year — focused revision, past-question drills and mock exams prepare candidates to sit the May/June WASSCE with confidence and excel in their results.",
    features: ["WASSCE-focused revision", "Past-question drills & mocks", "Exam registration & guidance"],
    image: "/images/hero-slide3.png",
    accent: "#4A90D9",
  },
  {
    name: "Vacation Classes",
    age: "School Breaks · Open to all",
    icon: CalendarDays,
    description:
      "Our popular vacation classes run during school breaks — open to R.C.C learners and private candidates who want to strengthen weak areas and stay ahead for the next term.",
    features: ["Holds during school breaks", "Open to private candidates", "Small-group focused teaching"],
    image: "/images/hero-slide2.png",
    accent: "#B8860B",
  },
  {
    name: "WASSCE Remedial",
    age: "May/June & Nov/Dec Sessions",
    icon: GraduationCap,
    description:
      "Dedicated WASSCE remedial classes for both the May/June and November/December (NOVDEC) sessions — giving candidates structured preparation and a second chance at distinction.",
    features: ["May/June & Nov/Dec sessions", "In-house WASSCE registration", "Mock exams & past questions"],
    image: "/images/news-science.png",
    accent: "#4A3B69",
  },
  {
    name: "Hostel Facilities",
    age: "Boarding · Safe & Supervised",
    icon: Home,
    description:
      "A secure, supervised hostel on Kotobabi Road — with caring houseparents, balanced meals, evening prep and a structured routine that supports both study and rest for boarders.",
    features: ["Safe, supervised boarding", "Balanced meals & evening prep", "Caring houseparents 24/7"],
    image: "/images/hero-students.png",
    accent: "#1B3A6B",
  },
];

export function AcademicsSection() {
  return (
    <SectionShell id="academics" background="white">
      {/* Heading */}
      <div className="flex flex-col items-center text-center">
        <div className="flex items-center gap-3">
          <span className="h-[2px] w-7 bg-[#F4C430]" />
          <span className="font-display text-xs font-semibold uppercase tracking-[0.32em] text-[#B8860B]">
            Academics
          </span>
          <span className="h-[2px] w-7 bg-[#F4C430]" />
        </div>
        <h2 className="mt-4 font-display text-3xl font-bold uppercase leading-[1.05] tracking-tight text-[#2E75B6] sm:text-4xl lg:text-[2.75rem]">
          SHS Programs At Royal Citadel College
        </h2>
        <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-[#1A2340]/75">
          From SHS 1 to SHS 3 — plus vacation classes, WASSCE remedial &
          registration, and safe hostel facilities. The Royal Citadel journey
          is G.E.S-approved and built for WASSCE excellence.
        </p>
        <span className="mt-4 h-[3px] w-16 rounded-full bg-[#F4C430]" />
      </div>

      {/* Level cards */}
      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {LEVELS.map((lvl) => {
          const Icon = lvl.icon;
          return (
            <article
              key={lvl.name}
              className="group flex h-full flex-col overflow-hidden rounded-[6px] border border-[#2E75B6]/10 bg-white shadow-[0_14px_40px_-16px_rgba(46,117,182,0.3)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_-16px_rgba(46,117,182,0.4)]"
            >
              {/* Image header */}
              <div className="relative aspect-[5/3] overflow-hidden">
                <img
                  src={lvl.image}
                  alt={`${lvl.name} at Royal Citadel College`}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B3A6B]/70 to-transparent" />
                {/* Level badge floating */}
                <div className="absolute left-3 top-3">
                  <LevelBadge level={lvl.name} />
                </div>
                {/* Icon disc */}
                <div
                  className="absolute -bottom-5 right-4 flex h-12 w-12 items-center justify-center rounded-full text-white shadow-lg ring-4 ring-white"
                  style={{ backgroundColor: lvl.accent }}
                >
                  <Icon className="h-6 w-6" />
                </div>
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col gap-3 p-5 pt-7">
                <div>
                  <h3 className="font-display text-xl font-bold uppercase tracking-wide text-[#2E75B6]">
                    {lvl.name}
                  </h3>
                  <p className="font-display text-[10px] font-semibold uppercase tracking-[0.18em] text-[#B8860B]">
                    {lvl.age}
                  </p>
                </div>
                <p className="text-[13px] leading-relaxed text-[#1A2340]/75">{lvl.description}</p>

                <ul className="mt-auto flex flex-col gap-2 pt-3">
                  {lvl.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-[12px] text-[#2E75B6]">
                      <span
                        className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full"
                        style={{ backgroundColor: lvl.accent }}
                      />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          );
        })}
      </div>

      {/* CTA strip */}
      <div className="mt-10 flex flex-col items-center justify-center gap-4 rounded-[6px] bg-[#FAF7EC] p-6 text-center sm:flex-row sm:gap-6 sm:text-left">
        <p className="font-display text-base font-semibold uppercase tracking-wide text-[#2E75B6]">
          Not sure which level your ward belongs to?
        </p>
        <BrandButton href="#contact" variant="navy" size="sm" icon={<ArrowRight className="h-4 w-4" />}>
          Talk to our admissions team
        </BrandButton>
      </div>
    </SectionShell>
  );
}
