"use client";

import * as React from "react";
import Link from "next/link";
import {
  Menu, X, Phone, Mail, MapPin, Clock,
  Facebook, Instagram, Youtube, ChevronRight, ChevronDown, ArrowRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { SITE, NAV_ITEMS } from "@/lib/site";
import { Crest, DiagonalSeparator } from "@/components/site/brand";

/* ============================================================
   Bloc 01 — Top bar (navy): phone + email + hours + social
   (desktop only — hidden on mobile to save space)
   ============================================================ */
function TopBar() {
  return (
    <div className="hidden bg-[#1B3A6B] text-white lg:block">
      <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between px-8 py-2 text-[12px]">
        <div className="flex items-center gap-6">
          {SITE.phones.map((phone, idx) => (
            <React.Fragment key={phone}>
              {idx > 0 && <span className="text-white/20">|</span>}
              <a
                href={`tel:${phone.replace(/\s/g, "")}`}
                className="flex items-center gap-2 transition-colors hover:text-[#B8860B]"
              >
                <Phone className="h-3.5 w-3.5 text-[#B8860B]" />
                <span className="font-medium tracking-wide">{phone}</span>
              </a>
            </React.Fragment>
          ))}
          <span className="text-white/20">|</span>
          <a
            href={`mailto:${SITE.email}`}
            className="flex items-center gap-2 transition-colors hover:text-[#B8860B]"
          >
            <Mail className="h-3.5 w-3.5 text-[#B8860B]" />
            <span className="font-medium tracking-wide">{SITE.email}</span>
          </a>
        </div>
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-2 text-white/70">
            <Clock className="h-3.5 w-3.5 text-[#B8860B]" />
            {SITE.hours}
          </span>
          <span className="text-white/20">|</span>
          <div className="flex items-center gap-3">
            <a href="#" aria-label="Facebook" className="transition-colors hover:text-[#B8860B]">
              <Facebook className="h-4 w-4" />
            </a>
            <a href="#" aria-label="Instagram" className="transition-colors hover:text-[#B8860B]">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="#" aria-label="YouTube" className="transition-colors hover:text-[#B8860B]">
              <Youtube className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   Desktop nav item (with optional dropdown)
   ============================================================ */
function DesktopNavItem({ item }: { item: typeof NAV_ITEMS[number] }) {
  const hasChildren = "children" in item && item.children && item.children.length > 0;
  return (
    <div className="group relative">
      <Link
        href={item.href}
        className="flex items-center gap-1.5 py-2 font-display text-[13px] font-semibold uppercase tracking-[0.06em] text-[#2E75B6] transition-colors group-hover:text-[#B8860B]"
      >
        {item.label}
        {hasChildren && <ChevronDown className="h-3.5 w-3.5 opacity-60 transition-transform group-hover:rotate-180" />}
      </Link>
      {/* underline on hover */}
      <span className="absolute -bottom-0.5 left-0 h-[2px] w-0 bg-[#F4C430] transition-all duration-300 group-hover:w-full" />

      {/* Dropdown */}
      {hasChildren && (
        <div className="invisible absolute left-0 top-full z-50 min-w-[240px] translate-y-1 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
          <div className="mt-1 overflow-hidden rounded-[4px] border border-[#2E75B6]/10 bg-white shadow-[0_20px_50px_-12px_rgba(46,117,182,0.35)]">
            {/* copper top accent */}
            <div className="h-1 bg-[#F4C430]" />
            <ul className="p-2">
              {item.children!.map((child) => (
                <li key={child.label}>
                  <Link
                    href={child.href}
                    className="flex items-center gap-2 rounded-[3px] px-3 py-2.5 text-[13px] text-[#1A2340] transition-colors hover:bg-[#FAF7EC] hover:text-[#B8860B]"
                  >
                    <span className="h-1 w-1 rounded-full bg-[#F4C430] opacity-50" />
                    {child.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

/* ============================================================
   Bloc 02 — Header: logo + VISIBLE horizontal nav (desktop)
   + hamburger (mobile only) + diagonal separator
   ============================================================ */
export function Header() {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header id="top" className="sticky top-0 z-50">
      <TopBar />

      {/* Main header bar */}
      <div
        className={cn(
          "bg-white transition-shadow duration-300",
          scrolled ? "shadow-[0_6px_24px_-12px_rgba(46,117,182,0.35)]" : "shadow-sm",
        )}
      >
        <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between gap-6 px-4 py-2.5 sm:px-6 lg:px-8 lg:py-3">
          {/* Logo + wordmark */}
          <Link href="#home" className="flex shrink-0 items-center" aria-label="Royal Citadel College — home">
            <Crest size={52} showWordmark />
          </Link>

          {/* Desktop: visible horizontal nav */}
          <nav className="hidden flex-1 items-center justify-center gap-1 lg:flex" aria-label="Main navigation">
            {NAV_ITEMS.map((item) => (
              <DesktopNavItem key={item.label} item={item} />
            ))}
          </nav>

          {/* Right: Apply CTA (desktop) / Call+Menu (mobile) */}
          <div className="flex shrink-0 items-center gap-2">
            <Link
              href="#admissions"
              className="hidden items-center gap-2 rounded-[4px] bg-[#F4C430] px-5 py-2.5 font-display text-[12px] font-semibold uppercase tracking-[0.12em] text-[#2E75B6] shadow-[0_6px_16px_-4px_rgba(244,196,48,0.55)] transition-all hover:bg-[#B0B43D] hover:shadow-[0_8px_20px_-4px_rgba(244,196,48,0.65)] lg:flex"
            >
              Apply Now
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>

            {/* Mobile: call button + hamburger */}
            <a
              href={`tel:${SITE.phones[0].replace(/\s/g, "")}`}
              className="flex items-center gap-2 rounded-full bg-[#2E75B6] px-4 py-2 font-display text-[11px] font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-[#1B3A6B] lg:hidden"
            >
              <Phone className="h-3.5 w-3.5 text-[#B8860B]" />
              Call
            </a>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              className="flex items-center gap-2 rounded-[4px] border-2 border-[#2E75B6] bg-[#2E75B6] px-3.5 py-2.5 text-white transition-colors hover:bg-[#1B3A6B] lg:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="font-display text-xs font-semibold uppercase tracking-[0.18em]">Menu</span>
            </button>
          </div>
        </div>
      </div>

      {/* Diagonal navy → copper ribbon separator */}
      <DiagonalSeparator />

      {/* Mobile full-screen overlay menu */}
      <OverlayMenu open={open} onClose={() => setOpen(false)} />
    </header>
  );
}

/* ============================================================
   OverlayMenu — full-screen navy overlay (mobile only)
   ============================================================ */
function OverlayMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <div
      className={cn(
        "fixed inset-0 z-[60] transition-all duration-500 lg:hidden",
        open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
      )}
      aria-hidden={!open}
      role="dialog"
      aria-modal="true"
    >
      <div className="absolute inset-0 bg-[#1B3A6B]/95 backdrop-blur-sm" onClick={onClose} />
      <div
        className={cn(
          "absolute right-0 top-0 flex h-full w-full max-w-[420px] flex-col bg-[#2E75B6] text-white shadow-2xl transition-transform duration-500 ease-out",
          open ? "translate-x-0" : "translate-x-full",
        )}
      >
        {/* Top: logo + close */}
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
          <Crest size={46} showWordmark light />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-[#2E75B6] transition-colors hover:bg-[#F4C430] hover:text-[#2E75B6]"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Slogan strip */}
        <div className="border-b border-white/10 bg-[#1B3A6B] px-5 py-2.5">
          <p className="font-script text-lg text-[#B8860B]">Pursuing Excellence</p>
          <p className="font-display text-[9px] font-semibold uppercase tracking-[0.3em] text-white/60">
            Is Our Ultimate Goal
          </p>
        </div>

        {/* Nav links */}
        <nav className="scroll-brand flex-1 overflow-y-auto px-5 py-4">
          <ul className="flex flex-col">
            {NAV_ITEMS.map((item, idx) => (
              <li key={item.label} className="border-b border-white/8">
                <Link href={item.href} onClick={onClose} className="group flex items-center justify-between gap-3 py-3">
                  <span className="flex items-center gap-3">
                    <span className="font-display text-[11px] font-medium text-[#B8860B]/70">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-lg font-semibold uppercase tracking-[0.04em] text-white transition-colors group-hover:text-[#B8860B]">
                      {item.label}
                    </span>
                  </span>
                  <ChevronRight className="h-4 w-4 text-white/40 transition-all group-hover:translate-x-1 group-hover:text-[#B8860B]" />
                </Link>
                {"children" in item && item.children && (
                  <ul className="flex flex-col gap-0.5 pb-2.5 pl-9">
                    {item.children.map((child) => (
                      <li key={child.label}>
                        <Link
                          href={child.href}
                          onClick={onClose}
                          className="flex items-center gap-2 py-1 text-[12px] text-white/65 transition-colors hover:text-[#B8860B]"
                        >
                          <span className="h-1 w-1 rounded-full bg-[#F4C430]" />
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Bottom: contact CTA */}
        <div className="border-t border-white/10 bg-[#1B3A6B] px-5 py-4">
          <div className="mb-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-white/70">
            <Phone className="h-3.5 w-3.5 text-[#B8860B]" />
            {SITE.phones.map((phone, idx) => (
              <React.Fragment key={phone}>
                {idx > 0 && <span className="text-white/30">/</span>}
                <a href={`tel:${phone.replace(/\s/g, "")}`} className="text-sm hover:text-[#B8860B]">
                  {phone}
                </a>
              </React.Fragment>
            ))}
          </div>
          <div className="mb-3 flex items-start gap-2 text-white/70">
            <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#B8860B]" />
            <span className="text-[11px] leading-relaxed">
              {SITE.addressLine1}<br />{SITE.addressLine2}
            </span>
          </div>
          <Link
            href="#admissions"
            onClick={onClose}
            className="flex w-full items-center justify-center gap-2 rounded-[4px] bg-[#F4C430] px-5 py-3 font-display text-xs font-semibold uppercase tracking-[0.18em] text-[#2E75B6] transition-colors hover:bg-[#B0B43D]"
          >
            Enroll Your Ward Now
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
