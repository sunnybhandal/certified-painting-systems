import { LegalPage, legalMetadata } from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata = legalMetadata(
  "Terms & Conditions",
  "Terms for using the Certified Painting Systems website.",
);

export default function TermsOfUsePage() {
  return (
    <LegalPage
      title="Terms & Conditions"
      description={`Questions about these terms can be sent to ${site.email}.`}
      body={`By using ${site.url.replace("https://", "")}, you agree to use the site for lawful purposes related to our painting services. Content on this site is provided for general information. Estimates submitted through the form are requests for service and are subject to confirmation by our team.`}
    />
  );
}
