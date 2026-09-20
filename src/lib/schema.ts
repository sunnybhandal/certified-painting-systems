import { communities, faqs, site } from "@/lib/site";

function faqAnswerText(item: (typeof faqs)[number]) {
  const linkLabel = "link" in item && item.link ? item.link.label : "";
  return item.answer.replace("{link}", linkLabel).replace("{phone}", site.phone);
}

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["HousePainter", "HomeAndConstructionBusiness"],
  "@id": `${site.url}/#business`,
  name: site.legalName,
  alternateName: [site.name, site.shortName],
  url: site.url,
  telephone: site.phoneHref.replace("tel:", ""),
  email: site.email,
  image: `${site.url}/images/interior-living.jpg`,
  description:
    "Calgary painters specializing in residential interior and exterior painting, with commercial and contractor painting across Calgary and surrounding communities.",
  priceRange: "$$",
  currenciesAccepted: "CAD",
  paymentAccepted: "Cash, Cheque, E-Transfer",
  areaServed: communities.map((name) => ({
    "@type": "City",
    name: name === "Calgary" ? "Calgary" : name,
    containedInPlace: {
      "@type": "AdministrativeArea",
      name: "Alberta",
    },
  })),
  address: {
    "@type": "PostalAddress",
    addressLocality: "Calgary",
    addressRegion: "AB",
    addressCountry: "CA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.0447,
    longitude: -114.0719,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:00",
    closes: "17:00",
  },
  knowsAbout: [
    "Residential painting Calgary",
    "Interior house painting",
    "Exterior house painting",
    "Commercial painting",
    "Contractor painting",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Painting Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Residential Interior Painting",
          areaServed: "Calgary",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Residential Exterior Painting",
          areaServed: "Calgary",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Commercial & Contractor Painting",
          areaServed: "Calgary",
        },
      },
    ],
  },
} as const;

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faqAnswerText(item),
    },
  })),
};
