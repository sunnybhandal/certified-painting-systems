import { LegalPage, legalMetadata } from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata = legalMetadata(
  "Privacy Policy",
  "How Certified Painting Systems collects and uses personal information.",
);

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      description={`If you have questions about this policy, contact us at ${site.email} or ${site.phone}.`}
      body={[
        `${site.legalName} collects only the information needed to provide painting estimates and service — such as your name, phone number, email, project address, and a description of the work. We do not sell your information. We use it to respond to requests, schedule estimates, and improve our service.`,
        "When you submit information through a form on our website, we collect the details you provide. Form submissions are used by authorized personnel to respond to inquiries and provide painting services in Calgary and surrounding communities.",
      ]}
    />
  );
}
