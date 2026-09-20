import type { Metadata } from "next";
import Image from "next/image";
import { EstimateLink } from "@/components/EstimateLink";
import { FadeIn } from "@/components/FadeIn";
import { PageIntro } from "@/components/PageIntro";
import { commercialServices, safetyCredentials } from "@/lib/site";

export const metadata: Metadata = {
  title: "Commercial Painters in Calgary",
  description:
    "Commercial and contractor painting in Calgary. Jobsite-ready crews for tenant improvements, multi-family, new construction, and renovations. WHMIS, fall arrest, COR, WCB, and insured.",
  keywords: [
    "commercial painters Calgary",
    "painting contractors Calgary",
    "tenant improvement painting Calgary",
    "multi-family painting Calgary",
    "new construction painters Calgary",
  ],
  alternates: { canonical: "/commercial" },
  openGraph: {
    title: "Commercial Painters in Calgary | CPS",
    description:
      "Contractor-ready painting crews for Calgary jobsites. Dependable scheduling, safety compliance, and professional finishes.",
    url: "/commercial",
    images: ["/images/commercial-exterior.jpg"],
  },
};

export default function CommercialPage() {
  return (
    <>
      <PageIntro
        eyebrow="Commercial & contractors"
        title="Experienced Crews. Jobsite Ready."
        lede="Commercial painting for general contractors, builders, developers, and property managers."
        media={
          <FadeIn delay={140} className="overflow-hidden rounded-xl bg-cream">
            <Image
              src="/images/Gymnasium.png"
              alt="Freshly painted Gymnasium 1 hallway with blue cinder block walls and mint double doors"
              width={711}
              height={499}
              className="h-auto w-full object-cover"
              preload
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
          </FadeIn>
        }
      >
        <p className="mt-6 max-w-2xl text-base leading-8 text-stone sm:text-lg">
          Commercial and construction projects need more than a good finish.
          They need trained people, dependable scheduling, and crews who know
          how to work on an active site. CPS has decades of that experience in
          Calgary.
        </p>
        <div className="mt-8">
          <EstimateLink>Invite CPS to Bid</EstimateLink>
        </div>
        <div className="mt-8 flex max-w-2xl flex-wrap gap-3">
          {commercialServices.map((item) => (
            <span
              key={item}
              className="rounded-full border border-line bg-cream/70 px-4 py-2 text-sm font-medium text-ink"
            >
              {item}
            </span>
          ))}
        </div>
      </PageIntro>

      <section className="border-t border-line bg-cream/70">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-2 lg:gap-14">
          <FadeIn className="overflow-hidden rounded-xl bg-cream">
            <Image
              src="/images/commercial-exterior.jpg"
              alt="Commercial building exterior with a durable professional paint finish"
              width={1600}
              height={1067}
              className="h-auto w-full object-cover"
            />
          </FadeIn>
          <FadeIn delay={120}>
            <h2 className="font-display text-4xl leading-tight text-ink">
              Safety and site readiness
            </h2>
            <p className="mt-5 text-base leading-8 text-stone sm:text-lg">
              CPS crews maintain the training expected on professional
              construction projects. Current documentation can be provided for
              bidding and site onboarding.
            </p>
            <ul className="mt-8 grid grid-cols-2 gap-3 text-sm text-ink">
              {safetyCredentials.map((item) => (
                <li key={item} className="rounded-xl border border-line bg-white px-4 py-3">
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-6 text-stone">
              Training and certification requirements can vary by project and
              crew.
            </p>
          </FadeIn>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <FadeIn>
            <h2 className="font-display text-4xl leading-tight text-ink sm:text-5xl">
              Ready to bid your next Calgary painting job?
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-stone sm:text-lg">
              Tell us about the scope, schedule, and site. We’ll review the
              project and follow up.
            </p>
            <div className="mt-8">
              <EstimateLink>Invite CPS to Bid</EstimateLink>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
