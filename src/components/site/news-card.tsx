"use client";

import * as React from "react";
import { ArrowUpRight, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";
import type { NewsItem } from "@/lib/site";

export function NewsCard({ item, className }: { item: NewsItem; className?: string }) {
  return (
    <article
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-[6px] border border-[#2E75B6]/10 bg-white shadow-[0_10px_30px_-12px_rgba(46,117,182,0.25)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_-12px_rgba(46,117,182,0.35)]",
        className,
      )}
    >
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        {/* Date badge */}
        <div className="absolute left-3 top-3 flex flex-col items-center rounded-[4px] bg-[#2E75B6] px-3 py-1.5 text-white shadow-lg">
          <span className="font-display text-lg font-bold leading-none">{item.day}</span>
          <span className="font-display text-[10px] font-semibold uppercase tracking-[0.18em] text-[#B8860B]">
            {item.month}
          </span>
        </div>
        {/* Category tag */}
        <span className="absolute right-3 top-3 rounded-full bg-[#F4C430] px-3 py-1 font-display text-[10px] font-semibold uppercase tracking-[0.18em] text-[#2E75B6] shadow">
          {item.category}
        </span>
      </div>
      {/* Body */}
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.14em] text-[#1A2340]/55">
          <Calendar className="h-3.5 w-3.5" />
          <time>{item.date}</time>
        </div>
        <h3 className="font-display text-lg font-bold uppercase leading-snug text-[#2E75B6] transition-colors group-hover:text-[#B8860B]">
          {item.title}
        </h3>
        <p className="text-[13px] leading-relaxed text-[#1A2340]/70">{item.excerpt}</p>
        <a
          href="#news"
          className="mt-auto inline-flex items-center gap-1.5 font-display text-xs font-semibold uppercase tracking-[0.16em] text-[#2E75B6] transition-colors hover:text-[#B8860B]"
        >
          Read More
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </article>
  );
}
