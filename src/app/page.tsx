import type { Metadata } from "next";
import Image from "next/image";
import { ContactSection } from "@/components/ContactSection";
import { EstimateLink, ScrollToHash } from "@/components/EstimateLink";
import { FadeIn } from "@/components/FadeIn";
import { PaintHero } from "@/components/PaintHero";
import {
  owners,
  processSteps,
  projects,
  residentialServices,
  site,
  stats,
  testimonials,
} from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <ScrollToHash />
      <section id="home" className="relative scroll-mt-24 overflow-x-clip bg-white">
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 pb-16 pt-10 sm:px-8 sm:pb-20 sm:pt-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:py-10">
          <FadeIn className="max-w-xl">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-sage">
              Proudly Serving Calgary and Surrounding Communities
            </p>
            <h1 className="mt-4 font-display text-[2.35rem] leading-[1.08] text-ink sm:text-5xl lg:text-[3.5rem]">
              Calgary Painters
              <br />
              You Can Count On
            </h1>
            <p className="mt-6 max-w-md text-base leading-7 text-stone sm:text-lg">
              Professional residential painting that gives your home a fresh,
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

      <section className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-5 py-10 sm:flex-row sm:items-stretch sm:justify-center sm:gap-10 sm:px-8 sm:py-12">
          {stats.map((stat, index) => (
            <FadeIn
              key={stat.label}
              delay={index * 80}
              className="w-full max-w-sm rounded-xl border border-line bg-cream/70 px-5 py-8 text-center sm:w-[16rem] sm:max-w-none sm:px-6 sm:py-10"
            >
              <p className="font-display text-3xl text-forest sm:text-4xl">{stat.value}</p>
              <p className="mt-2 text-sm leading-6 text-stone">{stat.label}</p>
            </FadeIn>
          ))}
        </div>
      </section>

      <section id="work" className="scroll-mt-24 border-t border-line bg-cream/70">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <FadeIn>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-sage">
              Our work
            </p>
            <h2 className="mt-4 font-display text-4xl leading-tight text-ink sm:text-5xl">
              Recent Projects
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
                  <p className="text-xs uppercase tracking-[0.14em] text-sage">
                    {project.location}
                  </p>
                  <h3 className="mt-2 font-display text-2xl text-ink">{project.title}</h3>
                  <p className="mt-2 text-base leading-7 text-stone">{project.summary}</p>
                </div>
              </FadeIn>
            ))}
          </div>
          <div
            id="residential"
            className="mt-12 grid scroll-mt-24 gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
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
      </section>

      <section id="process" className="scroll-mt-24 border-t border-line">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <FadeIn>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-sage">
              Our process
            </p>
            <h2 className="mt-4 font-display text-4xl leading-tight text-ink sm:text-5xl">
              Here’s What Happens When You Call CPS
            </h2>
          </FadeIn>
          <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step, index) => (
              <FadeIn as="li" key={step.number} delay={index * 80} className="flex gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-forest font-display text-sm text-white">
                  {step.number}
                </span>
                <div>
                  <h3 className="pt-2 font-display text-2xl text-ink">{step.title}</h3>
                  <p className="mt-2 text-base leading-7 text-stone">{step.body}</p>
                </div>
              </FadeIn>
            ))}
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
            <p className="mt-5 font-display text-xl leading-snug text-forest sm:text-2xl">
              {site.tagline}
            </p>
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
    </>
  );
}
