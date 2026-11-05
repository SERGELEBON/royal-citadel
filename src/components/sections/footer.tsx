"use client";

import Link from "next/link";
import {
  Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube,
  ArrowUp, Send,
} from "lucide-react";
import { SITE, NAV_ITEMS } from "@/lib/site";
import { Crest } from "@/components/site/brand";

export function Footer() {
  return (
    <footer id="contact" className="mt-auto bg-[#2E75B6] text-white">
      {/* Top: main footer grid */}
      <div className="mx-auto w-full max-w-[1200px] px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          {/* Brand + about */}
          <div className="lg:col-span-1">
            <Crest size={64} showWordmark light />
            <p className="mt-5 text-[13px] leading-relaxed text-white/70">
              {SITE.slogan}. A caring, creative academy in Kotobabi, Accra —
              SHS 1, SHS 2 & SHS 3.
            </p>
            <p className="mt-4 font-script text-xl text-[#B8860B]">
              G.E.S Approved!
            </p>

            {/* Social */}
            <div className="mt-6 flex items-center gap-3">
              {[
                { icon: Facebook, label: "Facebook" },
                { icon: Instagram, label: "Instagram" },
                { icon: Youtube, label: "YouTube" },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-[#2E75B6]/80 transition-colors hover:border-[#F4C430] hover:bg-[#F4C430] hover:text-[#2E75B6]"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Our Campus */}
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-[0.18em] text-white">
              <span className="mr-2 inline-block h-[3px] w-5 align-middle bg-[#F4C430]" />
              Our Campus
            </h3>
            <ul className="mt-5 space-y-4 text-[13px] text-white/75">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#B8860B]" />
                <span>
                  {SITE.addressLine1}
                  <br />
                  {SITE.addressLine2}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-[#B8860B]" />
                <span>{SITE.hours}</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[#B8860B]" />
                <span className="flex flex-col">
                  {SITE.phones.map((p) => (
                    <a
                      key={p}
                      href={`tel:${p.replace(/\s/g, "")}`}
                      className="transition-colors hover:text-[#B8860B]"
                    >
                      {p}
                    </a>
                  ))}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[#B8860B]" />
                <a
                  href={`mailto:${SITE.email}`}
                  className="break-all transition-colors hover:text-[#B8860B]"
                >
                  {SITE.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-[0.18em] text-white">
              <span className="mr-2 inline-block h-[3px] w-5 align-middle bg-[#F4C430]" />
              Quick Links
            </h3>
            <ul className="mt-5 space-y-2.5 text-[13px]">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="group flex items-center gap-2 text-white/70 transition-colors hover:text-[#B8860B]"
                  >
                    <span className="h-1 w-1 rounded-full bg-[#F4C430] opacity-50 transition-opacity group-hover:opacity-100" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Levels + newsletter */}
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-[0.18em] text-white">
              <span className="mr-2 inline-block h-[3px] w-5 align-middle bg-[#F4C430]" />
              We Offer
            </h3>
            <ul className="mt-5 space-y-3">
              {SITE.levels.map((lvl) => (
                <li key={lvl}>
                  <Link
                    href="#academics"
                    className="group flex items-center gap-2.5 rounded-[4px] border border-white/10 bg-white/5 px-3 py-2 text-[12px] font-medium uppercase tracking-wide text-[#2E75B6] transition-colors hover:border-[#F4C430] hover:bg-[#F4C430]"
                  >
                    <span className="level-dot" />
                    {lvl}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mini newsletter */}
            <form
              className="mt-6"
              onSubmit={(e) => e.preventDefault()}
              aria-label="Newsletter signup"
            >
              <label
                htmlFor="footer-email"
                className="font-display text-[11px] font-semibold uppercase tracking-[0.18em] text-white/55"
              >
                Get admission updates
              </label>
              <div className="mt-2 flex items-center gap-2">
                <input
                  id="footer-email"
                  type="email"
                  required
                  placeholder="Your email"
                  className="min-w-0 flex-1 rounded-[4px] border border-white/20 bg-white/5 px-3 py-2 text-[13px] text-[#2E75B6] placeholder-white/40 outline-none transition-colors focus:border-[#F4C430]"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[4px] bg-[#F4C430] text-[#2E75B6] transition-colors hover:bg-[#B0B43D]"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Copper ribbon accent */}
      <div className="h-1 bg-[#F4C430]" />

      {/* Bottom bar */}
      <div className="bg-[#1B3A6B]">
        <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center justify-between gap-3 px-4 py-5 text-center sm:px-6 md:flex-row md:text-left lg:px-8">
          <p className="text-[12px] text-white/55">
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
            <span className="mx-2 hidden text-white/20 md:inline">|</span>
            <span className="block md:inline">Discipline, Knowledge, Excellence.</span>
          </p>
          <div className="flex items-center gap-5 text-[12px] text-white/55">
            <a href="#" className="transition-colors hover:text-[#B8860B]">Privacy</a>
            <a href="#" className="transition-colors hover:text-[#B8860B]">Terms</a>
            <a
              href="#top"
              className="inline-flex items-center gap-1.5 font-display font-semibold uppercase tracking-[0.14em] text-white/70 transition-colors hover:text-[#B8860B]"
            >
              Back to top
              <ArrowUp className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
