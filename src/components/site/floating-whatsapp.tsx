"use client";

import * as React from "react";
import { SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

/* ============================================================
   FloatingWhatsApp — fixed bottom-right chat button
   Links to wa.me with a pre-filled admissions enquiry message.
   ============================================================ */

// Convert local Ghana number (0XXX) to international +233 format
function toIntl(phone: string): string {
  const digits = phone.replace(/\D/g, "");
  if (digits.startsWith("0")) return "233" + digits.slice(1);
  if (digits.startsWith("233")) return digits;
  return digits;
}

export function FloatingWhatsApp() {
  const [mounted, setMounted] = React.useState(false);
  const [expanded, setExpanded] = React.useState(false);
  const [showTip, setShowTip] = React.useState(false);

  React.useEffect(() => {
    // small delay so it slides in after page load
    const t = window.setTimeout(() => setMounted(true), 600);
    return () => window.clearTimeout(t);
  }, []);

  const intlNumber = toIntl(SITE.whatsapp);
  const message = encodeURIComponent(
    `Hello ${SITE.name}, I'd like to enquire about admissions (${SITE.levels.join(", ")}). G.E.S Approved in Kotobabi. Thank you!`,
  );
  const href = `https://wa.me/${intlNumber}?text=${message}`;

  return (
    <div
      className={cn(
        "fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3 transition-all duration-500",
        mounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
      )}
    >
      {/* Tooltip card (desktop hover) */}
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Chat with ${SITE.name} on WhatsApp`}
        className="group flex items-center gap-3"
        onMouseEnter={() => { setExpanded(true); setShowTip(true); }}
        onMouseLeave={() => { setExpanded(false); setShowTip(false); }}
        onFocus={() => { setExpanded(true); setShowTip(true); }}
        onBlur={() => { setExpanded(false); setShowTip(false); }}
      >
        {/* Expandable label */}
        <span
          className={cn(
            "hidden max-w-[180px] items-center gap-2 rounded-full bg-white px-4 py-2.5 font-display text-[12px] font-semibold uppercase tracking-[0.12em] text-[#1A2340] shadow-[0_8px_24px_-8px_rgba(0,0,0,0.3)] ring-1 ring-black/5 transition-all duration-300 sm:flex",
            showTip ? "translate-x-0 opacity-100" : "pointer-events-none translate-x-3 opacity-0",
          )}
        >
          <span className="h-2 w-2 rounded-full bg-[#25D366]" />
          Chat with us
        </span>

        {/* Button */}
        <span className="relative flex h-14 w-14 items-center justify-center">
          {/* Pulsing rings */}
          <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366]/30" style={{ animationDuration: "2.4s" }} />
          <span className="absolute inset-0 rounded-full bg-[#25D366]/20" />
          {/* Main button disc */}
          <span
            className={cn(
              "relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_28px_-6px_rgba(37,211,102,0.6)] ring-4 ring-white transition-transform duration-300",
              expanded ? "scale-110" : "hover:scale-105",
            )}
          >
            <WhatsAppIcon className="h-7 w-7" />
            {/* Online dot */}
            <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#F4C430] ring-2 ring-white">
              <span className="h-1.5 w-1.5 rounded-full bg-white" />
            </span>
          </span>
        </span>
      </a>
    </div>
  );
}

/* Official WhatsApp glyph (inline SVG — lucide has no brand icons) */
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M16.003 3c-2.566 0-5.024.876-6.984 2.484a9.97 9.97 0 0 0-3.516 6.27 9.93 9.93 0 0 0 .752 5.564L3 26l6.95-1.79a10.02 10.02 0 0 0 6.05 2.04h.005c5.514 0 10.002-4.486 10.005-9.998a9.94 9.94 0 0 0-2.928-7.07A9.92 9.92 0 0 0 16.003 3zm0 1.8c3.794 0 6.88 3.086 6.883 6.878a8.07 8.07 0 0 1-1.06 4.025l-.172.318.46 1.66-1.7-.46-.314.17a8.05 8.05 0 0 1-4.097 1.044h-.005a8.08 8.08 0 0 1-5.74-2.39 8.05 8.05 0 0 1-2.39-5.737c0-3.794 3.086-6.88 6.878-6.88zm-3.64 3.47c-.165 0-.43.062-.656.31s-.873.853-.873 2.08 0 1.226.873 2.42c.873 1.194 2.02 2.29 3.157 2.96 1.137.67 1.74.83 2.05.83.31 0 .926-.39 1.06-.656.137-.266.137-.5.097-.55-.04-.05-.214-.165-.45-.29-.236-.124-.873-.43-1.01-.48-.137-.05-.236-.075-.336.075-.1.15-.387.483-.474.582-.087.1-.174.112-.323.037-.15-.075-.633-.234-1.206-.745-.446-.398-.747-.89-.834-1.04-.087-.15-.009-.23.066-.305.068-.067.15-.174.224-.262.075-.087.1-.15.15-.25.05-.1.025-.187-.012-.262-.037-.075-.336-.81-.46-1.11-.12-.293-.246-.25-.336-.255l-.287-.005z" />
    </svg>
  );
}

export { toIntl };
