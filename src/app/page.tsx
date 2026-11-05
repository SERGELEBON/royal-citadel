import { SITE } from "@/lib/site";
import { AccentBanner } from "@/components/site/brand";
import { Header } from "@/components/site/header";
import { HeroCarousel } from "@/components/sections/hero-carousel";
import { WelcomeSection } from "@/components/sections/welcome";
import { PhotoMosaic } from "@/components/sections/photo-mosaic";
import { AcademicsSection } from "@/components/sections/academics";
import { NewsCalendar } from "@/components/sections/news-calendar";
import { EditorialFeature } from "@/components/sections/editorial";
import { PillarsTabs } from "@/components/sections/pillars";
import { FacilitiesSection } from "@/components/sections/facilities";
import { CtaBanner } from "@/components/sections/cta-banner";
import { Footer } from "@/components/sections/footer";
import { FloatingWhatsApp } from "@/components/site/floating-whatsapp";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      {/* Bloc 01–02 — Top bar + Header (logo + hamburger only) + diagonal separator */}
      <Header />

      {/* Bloc 03 — Hero carousel (full-screen, text overlay, slide indicators) */}
      <HeroCarousel />

      {/* Bandeau d'accroche — full-width gold marquee */}
      <AccentBanner message="Admissions Open — SHS 1 · SHS 2 · SHS 3 — Vacation Classes · WASSCE Remedial & Registration · Hostel — G.E.S Approved in Kotobabi — Enroll Now!" />

      {/* Bloc 04 — Welcome / Why choose us */}
      <WelcomeSection />

      {/* Bloc 05 — Photo mosaic */}
      <PhotoMosaic />

      {/* Academics (SHS 1 · SHS 2 · SHS 3) — bonus block for the #academics nav target */}
      <AcademicsSection />

      {/* Bloc 06 — News + Calendar (cream background) */}
      <NewsCalendar />

      {/* Bloc 07 — Editorial feature (Headmaster's message) */}
      <EditorialFeature />

      {/* Bloc 08 — Why Choose Us tabs (4 pillars) */}
      <PillarsTabs />

      {/* Facilities — bonus block for the #facilities nav target */}
      <FacilitiesSection />

      {/* Bloc 09 — CTA banner (darkened full image, Apply Now button) */}
      <CtaBanner />

      {/* Bloc 10 — Footer (navy, contact, menus, social, copyright) */}
      <Footer />

      {/* Floating WhatsApp chat button */}
      <FloatingWhatsApp />

      {/* JSON-LD structured data for the school */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "School",
            name: SITE.name,
            slogan: SITE.slogan,
            telephone: SITE.phones,
            email: SITE.email,
            address: {
              "@type": "PostalAddress",
              streetAddress: SITE.addressLine2,
              addressLocality: "Dome",
              addressRegion: "Greater Accra Region",
              addressCountry: "GH",
            },
            url: "https://royalcitadelcollege.edu.gh",
            description:
              "Royal Citadel College — SHS 1, SHS 2 & SHS 3 in Kotobabi (Accra, Ghana). G.E.S Approved. Discipline, Knowledge, Excellence.",
          }),
        }}
      />
    </main>
  );
}
