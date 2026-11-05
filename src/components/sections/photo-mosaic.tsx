"use client";

import { Quote } from "lucide-react";
import { SectionShell, SectionHeading, RoundPhoto } from "@/components/site/brand";

export function PhotoMosaic() {
  return (
    <SectionShell id="mosaic" background="cream">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
        {/* Left: mosaic of three round photos in an asymmetric grid */}
        <div className="relative mx-auto w-full max-w-lg lg:mx-0">
          {/* Background pattern block */}
          <div className="absolute -left-4 -top-4 h-full w-full rounded-[8px] border-2 border-[#F4C430]/30" />

          <div className="relative grid grid-cols-2 gap-5">
            <div className="col-span-1 flex justify-center pt-6">
              <RoundPhoto
                src="/images/photo-preschool.png"
                alt="Crèche learners at Royal Citadel College"
                size={170}
                caption="Crèche"
              />
            </div>
            <div className="col-span-1 flex justify-end">
              <img
                src="/images/news-cultural.png"
                alt="Cultural Day at Royal Citadel College"
                className="aspect-square w-full max-w-[220px] rounded-[6px] object-cover shadow-[0_14px_40px_-12px_rgba(46,117,182,0.4)] ring-1 ring-white"
                loading="lazy"
              />
            </div>
            <div className="col-span-1 flex justify-start">
              <img
                src="/images/news-sports.png"
                alt="Inter-house sports at Royal Citadel College"
                className="aspect-square w-full max-w-[200px] rounded-[6px] object-cover shadow-[0_14px_40px_-12px_rgba(46,117,182,0.4)] ring-1 ring-white"
                loading="lazy"
              />
            </div>
            <div className="col-span-1 flex justify-center pb-6">
              <RoundPhoto
                src="/images/photo-primary.png"
                alt="Nursery learners at Royal Citadel College"
                size={170}
                caption="Nursery"
              />
            </div>
          </div>
        </div>

        {/* Right: editorial text */}
        <div>
          <SectionHeading
            eyebrow="Life at Royal Citadel College"
            title={
              <>
                A Day In The Life <br className="hidden sm:block" /> Of A Royal Citadel Learner
              </>
            }
          />
          <p className="mt-5 text-[15px] leading-relaxed text-[#1A2340]/80">
            Mornings begin with assembly, song and a thought for the day. Then it is into the
            classroom — phonics and numeracy for our youngest, project-based learning for the
            middle years, and the GES curriculum leading into the BECE for our J.H.S scholars.
            Afternoons burst into colour: football on the field, dance in the hall, code in the
            lab, brushstrokes in the art room.
          </p>
          <p className="mt-4 text-[15px] leading-relaxed text-[#1A2340]/80">
            Every child is known by name, supported by caring teachers and held to a clear,
            kind standard of behaviour. The result? Confident, creative, well-rounded children
            who love to come to school.
          </p>

          {/* Testimonial pull-quote */}
          <figure className="mt-8 rounded-[6px] border-l-4 border-[#F4C430] bg-white p-5 shadow-[0_10px_30px_-12px_rgba(46,117,182,0.25)]">
            <Quote className="h-7 w-7 text-[#B8860B]/30" />
            <blockquote className="mt-2 font-display text-lg font-medium italic leading-snug text-[#2E75B6]">
              “My daughter actually asks to go to school on Saturdays. That says everything.”
            </blockquote>
            <figcaption className="mt-3 flex items-center gap-3">
              <RoundPhoto src="/images/photo-principal.png" alt="Parent" size={42} />
              <div>
                <p className="font-display text-xs font-semibold uppercase tracking-[0.16em] text-[#2E75B6]">
                  Mrs. Adjoa Mensah
                </p>
                <p className="text-[11px] text-[#1A2340]/55">Parent · Primary 4</p>
              </div>
            </figcaption>
          </figure>
        </div>
      </div>
    </SectionShell>
  );
}
