import { communities, site } from "@/lib/site";

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
  slogan: site.tagline,
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
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you paint homes in Calgary?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Residential painting is our focus. CPS paints interiors, exteriors, renovations, and whole-home repaints for homeowners across Calgary and nearby communities.",
      },
    },
    {
      "@type": "Question",
      name: "Do you require a deposit?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Certified Painting Systems has never required homeowners to pay a deposit before work begins.",
      },
    },
    {
      "@type": "Question",
      name: "Do you take on commercial or contractor work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. CPS paints for general contractors, developers, and property managers throughout Calgary and surrounding communities.",
      },
    },
  ],
} as const;
