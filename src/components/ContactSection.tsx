import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { FadeIn } from "@/components/FadeIn";
import { site } from "@/lib/site";

export function ContactSection() {
  return (
    <section id="estimate" className="scroll-mt-24 border-t border-line bg-cream/70">
      <div className="mx-auto grid max-w-6xl items-start gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[0.9fr_1.1fr]">
        <FadeIn>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-sage">
            Free painting estimate
          </p>
          <h2 className="mt-4 font-display text-4xl leading-tight text-ink sm:text-5xl">
            Tell Us About Your Project.
          </h2>
          <p className="mt-5 max-w-md font-display text-xl leading-snug text-forest sm:text-2xl">
            One room or the whole house — you’re still our customer.
          </p>
          <p className="mt-6 max-w-md text-base leading-8 text-stone sm:text-lg">
            Whether you’re repainting one room, your whole home, or planning a
            commercial project, CPS will review the details and contact you to
            arrange the next step.
          </p>
          <p className="mt-6 font-display text-lg text-ink">{site.tagline}</p>
          <address className="mt-8 space-y-1 text-base not-italic leading-7 text-stone">
            <p>{site.city}</p>
            <p>
              <a href={site.phoneHref} className="text-forest hover:underline">
                {site.phone}
              </a>
            </p>
            <p>
              <a href={site.emailHref} className="text-forest hover:underline">
                {site.email}
              </a>
            </p>
          </address>
          <p className="mt-8 max-w-md text-sm leading-6 text-stone">
            $0 deposit required. You don’t pay us before the work begins. By
            providing your phone number and email, you agree to hear from CPS
            about your estimate. You also agree to our{" "}
            <Link href="/privacy-policy" className="text-forest underline underline-offset-2">
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link href="/terms-of-use" className="text-forest underline underline-offset-2">
              Terms & Conditions
            </Link>
            .
          </p>
        </FadeIn>

        <FadeIn delay={140} className="relative z-10 rounded-xl border border-line bg-white p-5 sm:p-8">
          <ContactForm />
        </FadeIn>
      </div>
    </section>
  );
}
