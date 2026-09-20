import type { Metadata } from "next";
import Image from "next/image";
import { Fragment } from "react";
import { ContactSection } from "@/components/ContactSection";
import { EstimateLink, ScrollToHash } from "@/components/EstimateLink";
import { FadeIn } from "@/components/FadeIn";
import { Faq } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import { PaintHero } from "@/components/PaintHero";
import { faqSchema } from "@/lib/schema";
import {
  owners,
  processSteps,
  projects,
  residentialServices,
  site,
  testimonials,
} from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const processDesktopSlots = [
  "lg:col-start-1 lg:row-start-1",
  "lg:col-start-3 lg:row-start-1",
  "lg:col-start-5 lg:row-start-1",
  "lg:col-start-5 lg:row-start-3",
  "lg:col-start-3 lg:row-start-3",
  "lg:col-start-1 lg:row-start-3",
] as const;

function ProcessArrow({
  direction,
  className = "",
}: {
  direction: "right" | "left" | "down";
  className?: string;
}) {
  const isDown = direction === "down";

  return (
    <span aria-hidden="true" className={`text-forest ${className}`}>
      <svg
        viewBox={isDown ? "0 0 24 48" : "0 0 48 24"}
        className={isDown ? "h-12 w-6" : "h-6 w-12"}
        fill="none"
      >
        {isDown ? (
          <>
            <path
              d="M12 4v23"
              stroke="currentColor"
              strokeWidth="3.25"
              strokeLinecap="round"
            />
            <path d="M4.5 25.5 12 42 19.5 25.5Z" fill="currentColor" />
          </>
        ) : direction === "left" ? (
          <>
            <path
              d="M44 12H21"
              stroke="currentColor"
              strokeWidth="3.25"
              strokeLinecap="round"
            />
            <path d="M22.5 4.5 6 12l16.5 7.5Z" fill="currentColor" />
          </>
        ) : (
          <>
            <path
              d="M4 12h23"
              stroke="currentColor"
              strokeWidth="3.25"
              strokeLinecap="round"
            />
            <path d="M25.5 4.5 42 12 25.5 19.5Z" fill="currentColor" />
          </>
        )}
      </svg>
    </span>
  );
}

export default function Home() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <ScrollToHash />
      <section id="home" className="relative scroll-mt-24 overflow-x-clip bg-white">
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 pb-16 pt-10 sm:px-8 sm:pb-20 sm:pt-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:py-10">
          <FadeIn className="max-w-xl">
            <h1 className="font-display text-[2.35rem] leading-[1.08] text-ink sm:text-5xl lg:text-[3.5rem]">
              Calgary Painters
              <br />
              You Can Count On
            </h1>
            <p className="mt-5 font-display text-xl leading-snug text-forest sm:text-2xl">
              $0 Deposit. Clear Communication. Quality Painting.
            </p>
            <p className="mt-6 max-w-md text-base leading-7 text-stone sm:text-lg">
              Professional residential and exterior painting that gives your home a fresh,
              beautiful finish.
            </p>
            <div className="mt-8">
              <EstimateLink className="inline-flex h-12 w-full cursor-pointer items-center justify-center rounded-full border border-forest bg-forest px-6 text-base font-medium text-white transition-colors hover:bg-white hover:text-forest sm:w-auto">
                Get a Free Estimate
              </EstimateLink>
            </div>
          </FadeIn>

          <FadeIn delay={140}>
            <PaintHero />
          </FadeIn>
        </div>
      </section>

      <section id="work" className="scroll-mt-24 border-t border-line bg-cream/70">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <FadeIn>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-sage">
              Our work
            </p>
            <h2 className="mt-4 font-display text-4xl leading-tight text-ink sm:text-5xl">
              Recent House Painting Projects in Calgary
            </h2>
          </FadeIn>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {projects.slice(0, 4).map((project, index) => (
              <FadeIn
                key={project.title}
                delay={index * 90}
                className="overflow-hidden rounded-xl border border-line bg-white"
              >
                <div className="relative aspect-[16/10] bg-cream">
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 640px) 50vw, 100vw"
                  />
                </div>
                <div className="px-5 py-5">
                  <h3 className="font-display text-2xl text-ink">{project.title}</h3>
                  <p className="mt-2 text-base leading-7 text-stone">{project.summary}</p>
                </div>
              </FadeIn>
            ))}
          </div>
          <div id="residential" className="mt-16 scroll-mt-24">
            <FadeIn>
              <h2 className="font-display text-4xl leading-tight text-ink sm:text-5xl">
                Residential Painting Services
              </h2>
            </FadeIn>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {residentialServices.map((service, index) => (
                <FadeIn
                  key={service.title}
                  delay={index * 80}
                  className="rounded-xl border border-line bg-white px-5 py-6"
                >
                  <h3 className="font-display text-2xl text-ink">{service.title}</h3>
                  <p className="mt-3 text-base leading-7 text-stone">{service.body}</p>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="scroll-mt-24 border-t border-line">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <FadeIn>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-sage">
              Our process
            </p>
            <h2 className="mt-4 font-display text-4xl leading-tight text-ink sm:text-5xl">
              How Our Painting Process Works
            </h2>
          </FadeIn>
          <ol className="relative mt-12 max-w-2xl lg:mt-16 lg:grid lg:max-w-none lg:grid-cols-[1fr_auto_1fr_auto_1fr] lg:grid-rows-[1fr_auto_1fr] lg:items-center lg:gap-x-3 lg:gap-y-2">
            {processSteps.map((step, index) => (
              <Fragment key={step.number}>
                <FadeIn
                  as="li"
                  delay={index * 80}
                  className={`relative flex gap-5 pb-2 lg:flex-col lg:items-center lg:gap-0 lg:px-3 lg:pb-0 lg:text-center ${processDesktopSlots[index]}`}
                >
                  <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-forest font-display text-base text-white">
                    {step.number}
                  </span>
                  <div className="pt-1.5 lg:pt-4">
                    <h3 className="font-display text-2xl text-ink">{step.title}</h3>
                    <p className="mt-2 text-base leading-7 text-stone">{step.body}</p>
                  </div>
                </FadeIn>
                {index < processSteps.length - 1 ? (
                  <li aria-hidden="true" className="flex justify-start py-3 pl-3 lg:hidden">
                    <ProcessArrow direction="down" />
                  </li>
                ) : null}
              </Fragment>
            ))}
            <li
              aria-hidden="true"
              className="hidden lg:col-start-2 lg:row-start-1 lg:flex lg:items-center lg:justify-center"
            >
              <ProcessArrow direction="right" />
            </li>
            <li
              aria-hidden="true"
              className="hidden lg:col-start-4 lg:row-start-1 lg:flex lg:items-center lg:justify-center"
            >
              <ProcessArrow direction="right" />
            </li>
            <li
              aria-hidden="true"
              className="hidden lg:col-start-5 lg:row-start-2 lg:flex lg:items-center lg:justify-center lg:py-3"
            >
              <ProcessArrow direction="down" />
            </li>
            <li
              aria-hidden="true"
              className="hidden lg:col-start-4 lg:row-start-3 lg:flex lg:items-center lg:justify-center"
            >
              <ProcessArrow direction="left" />
            </li>
            <li
              aria-hidden="true"
              className="hidden lg:col-start-2 lg:row-start-3 lg:flex lg:items-center lg:justify-center"
            >
              <ProcessArrow direction="left" />
            </li>
          </ol>
        </div>
      </section>

      <ContactSection />

      <section id="about" className="scroll-mt-24 border-t border-line">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[1fr_auto] lg:gap-14">
          <FadeIn className="max-w-xl">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-sage">
              Meet the owners
            </p>
            <h2 className="mt-4 font-display text-4xl leading-tight text-ink sm:text-5xl">
              Local Experience. Personal Accountability.
            </h2>
            <p className="mt-6 text-base leading-8 text-stone sm:text-lg">
              CPS is locally owned and owner operated. Lou and Ray are both Red
              Seal Journeyperson Painters, with more than 70 years of combined
              painting experience and direct accountability behind every project.
            </p>
          </FadeIn>
          <div className="mx-auto flex w-3/4 flex-col gap-5 sm:w-auto sm:flex-row sm:justify-center sm:gap-6 lg:mx-0">
            {owners.map((owner, index) => (
              <FadeIn
                key={owner.name}
                delay={index * 120}
                className="overflow-hidden rounded-xl border border-line bg-white sm:w-64"
              >
                <div className="relative aspect-[4/5] bg-cream">
                  <Image
                    src={owner.image}
                    alt={`${owner.name}, co-owner of Certified Painting Systems`}
                    fill
                    className="object-cover object-[center_20%]"
                    sizes="(min-width: 640px) 256px, 75vw"
                  />
                </div>
                <div className="px-4 py-5 text-center">
                  <h3 className="font-display text-2xl text-forest">{owner.name}</h3>
                  <p className="mt-1 text-sm leading-6 text-stone">{owner.experience}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="scroll-mt-24 border-t border-line bg-cream/70">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <FadeIn>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-sage">
              What Calgary homeowners say
            </p>
            <h2 className="mt-4 font-display text-4xl leading-tight text-ink sm:text-5xl">
              Real Customers. Real Feedback.
            </h2>
          </FadeIn>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {testimonials.map((item, index) => (
              <FadeIn
                key={item.quote}
                delay={index * 120}
                className="rounded-xl border border-line bg-white px-6 py-8"
              >
                <p className="text-forest" aria-hidden="true">
                  ★★★★★
                </p>
                <blockquote className="mt-4 font-display text-xl leading-snug text-ink">
                  “{item.quote}”
                </blockquote>
                <p className="mt-5 text-sm text-stone">— {item.name}</p>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={80} className="mt-8">
            <a
              href={site.googleReviewHref}
              target="_blank"
              rel="noreferrer"
              className="text-base font-medium text-forest underline decoration-line underline-offset-4 hover:decoration-forest"
            >
              Leave CPS a Google Review →
            </a>
          </FadeIn>
        </div>
      </section>

      <Faq />
    </>
  );
}
