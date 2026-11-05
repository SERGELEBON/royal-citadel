"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

/* ============================================================
   BrandButton — copper CTA / navy outline / ghost variants
   ============================================================ */
type BrandButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: "copper" | "navy" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  icon?: React.ReactNode;
};

const brandButtonVariants: Record<NonNullable<BrandButtonProps["variant"]>, string> = {
  copper:
    "bg-[#F4C430] text-[#2E75B6] hover:bg-[#B0B43D] shadow-[0_8px_20px_-6px_rgba(244,196,48,0.6)] border border-[#F4C430]",
  navy:
    "bg-[#2E75B6] text-white hover:bg-[#1B3A6B] shadow-[0_8px_20px_-6px_rgba(46,117,182,0.55)] border border-[#2E75B6]",
  outline:
    "bg-transparent text-[#2E75B6] border-2 border-[#2E75B6] hover:bg-[#2E75B6] hover:text-white",
  ghost:
    "bg-white/10 text-white border border-white/30 backdrop-blur-sm hover:bg-white/20",
};

const brandButtonSizes: Record<NonNullable<BrandButtonProps["size"]>, string> = {
  sm: "px-4 py-2 text-xs",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

export function BrandButton({
  children,
  href,
  variant = "copper",
  size = "md",
  className,
  onClick,
  icon,
}: BrandButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 font-display font-semibold uppercase tracking-[0.12em] rounded-[4px] transition-all duration-300 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F4C430] focus-visible:ring-offset-2",
    brandButtonVariants[variant],
    brandButtonSizes[size],
    className,
  );
  const content = (
    <>
      <span>{children}</span>
      {icon}
    </>
  );
  if (href) {
    return (
      <Link href={href} className={classes} onClick={onClick}>
        {content}
      </Link>
    );
  }
  return (
    <button type="button" className={classes} onClick={onClick}>
      {content}
    </button>
  );
}

/* ============================================================
   LevelBadge — navy pill with copper dot + level label
   "● PRE-SCHOOL"  "● PRIMARY"  "● J.H.S"
   ============================================================ */
export function LevelBadge({
  level,
  className,
  variant = "navy",
}: {
  level: string;
  className?: string;
  variant?: "navy" | "copper" | "outline";
}) {
  const variants = {
    navy: "bg-[#2E75B6] text-white",
    copper: "bg-[#F4C430] text-[#2E75B6]",
    outline: "bg-transparent text-[#2E75B6] border border-[#2E75B6]/30",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 font-display text-[11px] font-semibold uppercase tracking-[0.18em]",
        variants[variant],
        className,
      )}
    >
      <span className="level-dot" />
      {level}
    </span>
  );
}

/* ============================================================
   Eyebrow — small uppercase copper label above section titles
   ============================================================ */
export function Eyebrow({
  children,
  className,
  align = "left",
}: {
  children: React.ReactNode;
  className?: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={cn(
        "flex items-center gap-3",
        align === "center" ? "justify-center" : "justify-start",
        className,
      )}
    >
      <span className="h-[2px] w-7 bg-[#F4C430]" />
      <span className="font-display text-xs font-semibold uppercase tracking-[0.32em] text-[#B8860B]">
        {children}
      </span>
      {align === "center" && <span className="h-[2px] w-7 bg-[#F4C430]" />}
    </div>
  );
}

/* ============================================================
   SectionHeading — eyebrow + big navy title + copper underline
   ============================================================ */
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  light = false,
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      {eyebrow && <Eyebrow align={align}>{eyebrow}</Eyebrow>}
      <h2
        className={cn(
          "font-display text-3xl font-bold uppercase leading-[1.05] tracking-tight sm:text-4xl lg:text-[2.75rem]",
          light ? "text-white" : "text-[#2E75B6]",
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "max-w-2xl text-[15px] leading-relaxed",
            light ? "text-white/80" : "text-[#1A2340]/75",
          )}
        >
          {subtitle}
        </p>
      )}
      <span
        className={cn(
          "mt-1 h-[3px] w-16 rounded-full bg-[#F4C430]",
          align === "center" && "mx-auto",
        )}
      />
    </div>
  );
}

/* ============================================================
   RoundPhoto — circular photo with white border + copper ring
   ============================================================ */
export function RoundPhoto({
  src,
  alt,
  size = 160,
  className,
  caption,
}: {
  src: string;
  alt: string;
  size?: number;
  className?: string;
  caption?: string;
}) {
  return (
    <figure className={cn("flex flex-col items-center gap-3", className)}>
      <div
        className="relative rounded-full bg-white p-1.5 shadow-[0_10px_30px_-8px_rgba(46,117,182,0.35)] ring-2 ring-[#F4C430]"
        style={{ width: size, height: size }}
      >
        <div className="h-full w-full overflow-hidden rounded-full">
          <img
            src={src}
            alt={alt}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
      {caption && (
        <figcaption className="text-center font-display text-xs font-semibold uppercase tracking-[0.18em] text-[#2E75B6]">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

/* ============================================================
   DiagonalSeparator — navy→copper diagonal ribbon under header
   ============================================================ */
export function DiagonalSeparator({ className }: { className?: string }) {
  return (
    <div
      className={cn("relative h-3 w-full overflow-hidden", className)}
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-[#2E75B6]" />
      <div
        className="absolute inset-0 bg-[#F4C430]"
        style={{ clipPath: "polygon(38% 0, 100% 0, 100% 100%, 62% 100%)" }}
      />
    </div>
  );
}

/* ============================================================
   AccentBanner — copper full-width marquee banner
   ============================================================ */
export function AccentBanner({
  message,
  className,
}: {
  message: string;
  className?: string;
}) {
  const items = Array.from({ length: 6 });
  return (
    <div
      className={cn(
        "relative overflow-hidden bg-[#F4C430] py-2.5 text-[#2E75B6]",
        className,
      )}
    >
      <div className="flex w-max animate-marquee whitespace-nowrap">
        {[0, 1].map((dup) => (
          <div key={dup} className="flex shrink-0 items-center" aria-hidden={dup === 1}>
            {items.map((_, i) => (
              <span
                key={`${dup}-${i}`}
                className="flex items-center gap-3 px-6 font-display text-[12px] font-semibold uppercase tracking-[0.22em] sm:text-sm"
              >
                {message}
                <span className="text-white/60">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ============================================================
   Crest — wraps the SVG logo with optional wordmark
   ============================================================ */
export function Crest({
  size = 64,
  showWordmark = false,
  light = false,
}: {
  size?: number;
  showWordmark?: boolean;
  light?: boolean;
}) {
  return (
    <div className="flex items-center gap-3">
      <img
        src="/logo.svg"
        alt="Royal Citadel College crest"
        width={size}
        height={size}
        className="shrink-0 object-contain"
      />
      {showWordmark && (
        <div className="flex flex-col leading-none">
          <span
            className={cn(
              "font-display text-lg font-bold uppercase tracking-[0.04em]",
              light ? "text-white" : "text-[#2E75B6]",
            )}
          >
            Royal Citadel
          </span>
          <span
            className={cn(
              "font-display text-[10px] font-semibold uppercase tracking-[0.28em]",
              light ? "text-[#B8860B]" : "text-[#B8860B]",
            )}
          >
            College (R.C.C)
          </span>
        </div>
      )}
    </div>
  );
}

/* ============================================================
   SectionShell — consistent vertical rhythm + max width
   ============================================================ */
export function SectionShell({
  children,
  className,
  id,
  background = "white",
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: "white" | "cream" | "navy" | "navy-deep" | "transparent";
}) {
  const bgs = {
    white: "bg-white",
    cream: "bg-[#FAF7EC]",
    navy: "bg-[#2E75B6] text-white",
    "navy-deep": "bg-[#1B3A6B] text-white",
    transparent: "",
  };
  return (
    <section id={id} className={cn("py-16 sm:py-20 lg:py-24", bgs[background], className)}>
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}
