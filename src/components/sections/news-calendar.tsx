"use client";

import { CalendarDays, ArrowUpRight, ChevronRight } from "lucide-react";
import { NEWS, CALENDAR_EVENTS } from "@/lib/site";
import { SectionShell, SectionHeading, BrandButton } from "@/components/site/brand";
import { NewsCard } from "@/components/site/news-card";

const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function MiniCalendar() {
  // September 2026 as the anchor month for the academic calendar.
  const year = 2026;
  const month = 8; // September (0-indexed)
  const first = new Date(year, month, 1);
  const startDay = first.getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // Mark event days
  const eventDays = new Set<number>();
  CALENDAR_EVENTS.forEach((e) => {
    const d = new Date(e.date);
    if (d.getFullYear() === year && d.getMonth() === month) eventDays.add(d.getDate());
  });

  const cells: (number | null)[] = [];
  for (let i = 0; i < startDay; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);
  while (cells.length % 7 !== 0) cells.push(null);

  return (
    <div className="rounded-[6px] border border-[#2E75B6]/10 bg-white p-5 shadow-[0_14px_40px_-16px_rgba(46,117,182,0.3)]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <CalendarDays className="h-5 w-5 text-[#B8860B]" />
          <h3 className="font-display text-base font-bold uppercase tracking-wide text-[#2E75B6]">
            {months[month]} {year}
          </h3>
        </div>
        <span className="font-display text-[10px] font-semibold uppercase tracking-[0.18em] text-[#B8860B]">
          Academic
        </span>
      </div>

      <div className="mt-4 grid grid-cols-7 gap-1 text-center">
        {dayNames.map((d) => (
          <span
            key={d}
            className="font-display text-[10px] font-semibold uppercase tracking-wide text-[#1A2340]/45"
          >
            {d}
          </span>
        ))}
        {cells.map((c, i) => (
          <div
            key={i}
            className="flex aspect-square items-center justify-center rounded-[3px] text-[12px]"
          >
            {c === null ? (
              <span />
            ) : eventDays.has(c) ? (
              <span className="relative flex h-7 w-7 items-center justify-center rounded-full bg-[#F4C430] font-semibold text-[#2E75B6]">
                {c}
                <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-white ring-1 ring-[#2E75B6]" />
              </span>
            ) : (
              <span className="text-[#1A2340]/70">{c}</span>
            )}
          </div>
        ))}
      </div>

      <div className="mt-4 flex items-center gap-2 border-t border-[#2E75B6]/10 pt-3 text-[10px] uppercase tracking-wide text-[#1A2340]/55">
        <span className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#F4C430]" /> Event
        </span>
        <span className="ml-auto font-display font-semibold text-[#2E75B6]">
          {eventDays.size} events
        </span>
      </div>
    </div>
  );
}

export function NewsCalendar() {
  return (
    <SectionShell id="news" background="cream">
      <SectionHeading
        eyebrow="News & Calendar"
        title="What's Happening At Royal Citadel"
        subtitle="Stay up to date with the latest stories, events and key dates across the academy — from science fairs to cultural day and inter-house sports."
      />

      <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* News cards — span 2 cols */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2">
          {NEWS.map((item) => (
            <NewsCard key={item.id} item={item} />
          ))}
          {/* View all card */}
          <a
            href="#news"
            className="group flex flex-col items-start justify-center gap-3 rounded-[6px] border-2 border-dashed border-[#2E75B6]/20 bg-white/40 p-6 transition-colors hover:border-[#F4C430] hover:bg-white"
          >
            <span className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-[#B8860B]">
              The Bulletin
            </span>
            <h3 className="font-display text-xl font-bold uppercase leading-snug text-[#2E75B6]">
              Read every story from the academy
            </h3>
            <span className="mt-auto inline-flex items-center gap-1.5 font-display text-xs font-semibold uppercase tracking-[0.16em] text-[#2E75B6] transition-colors group-hover:text-[#B8860B]">
              View All Publications
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </a>
        </div>

        {/* Calendar column */}
        <div id="calendar" className="flex flex-col gap-5">
          <MiniCalendar />

          {/* Upcoming events list */}
          <div className="rounded-[6px] border border-[#2E75B6]/10 bg-white p-5 shadow-[0_14px_40px_-16px_rgba(46,117,182,0.3)]">
            <h3 className="flex items-center gap-2 font-display text-base font-bold uppercase tracking-wide text-[#2E75B6]">
              <span className="h-[3px] w-6 bg-[#F4C430]" />
              Upcoming Events
            </h3>
            <ul className="scroll-brand mt-4 max-h-72 space-y-3 overflow-y-auto pr-1">
              {CALENDAR_EVENTS.map((e) => (
                <li
                  key={e.date}
                  className="flex items-start gap-3 rounded-[4px] border border-[#2E75B6]/8 p-2.5 transition-colors hover:border-[#F4C430] hover:bg-[#FAF7EC]"
                >
                  <div className="flex h-12 w-12 shrink-0 flex-col items-center justify-center rounded-[4px] bg-[#2E75B6] text-white">
                    <span className="font-display text-base font-bold leading-none">{e.day}</span>
                    <span className="font-display text-[9px] font-semibold uppercase tracking-wide text-[#B8860B]">
                      {e.month}
                    </span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[13px] font-semibold leading-snug text-[#2E75B6]">{e.title}</p>
                    <p className="mt-0.5 font-display text-[10px] font-semibold uppercase tracking-[0.16em] text-[#B8860B]">
                      {e.type}
                    </p>
                  </div>
                  <ChevronRight className="mt-1 h-4 w-4 shrink-0 text-[#1A2340]/30" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-10 flex justify-center">
        <BrandButton href="#contact" variant="outline">
          Request the full 2026/27 calendar
        </BrandButton>
      </div>
    </SectionShell>
  );
}
