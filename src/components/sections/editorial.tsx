"use client";

import { Quote, ArrowRight, GraduationCap, Star } from "lucide-react";
import { SectionShell, RoundPhoto, BrandButton } from "@/components/site/brand";

export function EditorialFeature() {
  return (
    <SectionShell id="principal" background="navy">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16 lg:items-center">
        {/* Left: portrait mosaic */}
        <div className="relative order-2 lg:order-1">
          <div className="relative mx-auto max-w-md">
            {/* Main framed portrait */}
            <div className="relative overflow-hidden rounded-[6px] shadow-[0_24px_60px_-20px_rgba(0,0,0,0.5)] ring-1 ring-white/10">
              <img
                src="/images/photo-principal.png"
                alt="The Principal of Royal Citadel College"
                className="aspect-[4/5] w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#1B3A6B] via-[#1B3A6B]/60 to-transparent p-5">
                <p className="font-display text-base font-bold uppercase tracking-wide text-white">
                  Mr. Samuel Osei
                </p>
                <p className="font-display text-[11px] font-semibold uppercase tracking-[0.18em] text-[#B8860B]">
                  Headmaster
                </p>
              </div>
            </div>

            {/* Floating round photo (classroom) */}
            <div className="absolute -bottom-8 -right-4 hidden sm:block lg:-right-10">
              <RoundPhoto
                src="/images/editorial-teacher.png"
                alt="A Royal Citadel teacher supporting a young scholar"
                size={130}
              />
            </div>

            {/* Decorative stat block */}
            <div className="absolute -left-4 -top-6 hidden rounded-[6px] bg-[#F4C430] p-4 shadow-xl lg:block">
              <div className="flex items-center gap-2 text-white">
                <GraduationCap className="h-5 w-5" />
                <span className="font-display text-2xl font-bold leading-none">17+</span>
              </div>
              <p className="mt-1 font-display text-[9px] font-semibold uppercase tracking-[0.18em] text-white/90">
                Years of discipline <br /> & excellence
              </p>
            </div>

            {/* Small stars decor */}
            <div className="absolute -right-2 top-6 hidden lg:block">
              <Star className="h-5 w-5 fill-[#F4C430] text-[#B8860B]" />
            </div>
          </div>
        </div>

        {/* Right: editorial text */}
        <div className="order-1 lg:order-2">
          <div className="flex items-center gap-3">
            <span className="h-[2px] w-7 bg-[#F4C430]" />
            <span className="font-display text-xs font-semibold uppercase tracking-[0.32em] text-[#B8860B]">
              Headmaster's Message
            </span>
          </div>

          <Quote className="mt-5 h-10 w-10 text-[#B8860B]" />

          <h2 className="mt-3 font-display text-3xl font-bold uppercase leading-[1.05] tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
            We Don't Just Teach — <br />
            <span className="text-[#B8860B]">We Build Excellence.</span>
          </h2>

          <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-white/80">
            <p>
              “When we founded Royal Citadel College on Kotobabi Road, we set out to build more
              than a school. We set out to build a Senior High School where every scholar — from
              SHS 1 to SHS 3 — is known by name, held to a kind but firm standard, and prepared
              to excel at WASSCE and in life.”
            </p>
            <p>
              “Our scholars leave us not only with strong WASSCE results, but with the discipline,
              knowledge and character to lead the next generation of Ghana. That, to us, is
              what <span className="font-script text-xl text-[#B8860B]">discipline, knowledge, excellence</span>{' '}
              truly means.”
            </p>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <BrandButton href="#admissions" icon={<ArrowRight className="h-4 w-4" />}>
              Join Our College
            </BrandButton>
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {[
                  "/images/photo-preschool.png",
                  "/images/photo-primary.png",
                  "/images/news-cultural.png",
                ].map((src, i) => (
                  <RoundPhoto key={i} src={src} alt="Royal Citadel learner" size={36} />
                ))}
              </div>
              <p className="text-[12px] text-white/70">
                Trusted by <span className="font-semibold text-white">300+ families</span>
                <br /> across Kotobabi & Accra
              </p>
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
