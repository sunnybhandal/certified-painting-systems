import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, Geist, Poppins } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { localBusinessSchema } from "@/lib/schema";
import { site } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["700", "800"],
});

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "Calgary Painters | Residential & Commercial Painting | CPS",
    template: `%s | ${site.shortName}`,
  },
  description:
    "Calgary painters specializing in residential interior and exterior painting. Locally owned CPS also paints for contractors across Calgary, Airdrie, Chestermere, Cochrane, Okotoks, and Langdon. $0 deposit.",
  keywords: [
    "Calgary painters",
    "Calgary painting company",
    "residential painting Calgary",
    "house painters Calgary",
    "interior painting Calgary",
    "exterior painting Calgary",
    "commercial painters Calgary",
    "painting contractors Calgary",
    "home painters Airdrie",
    "house painters Chestermere",
    "Cochrane painters",
    "Okotoks painting company",
  ],
  authors: [{ name: site.legalName }],
  creator: site.legalName,
  metadataBase: new URL(site.url),
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: site.url,
    siteName: site.legalName,
    title: "Calgary Painters | Residential & Commercial Painting | CPS",
    description:
      "Local Calgary house painters with 70+ years of combined experience. Residential first, commercial when you need a crew that’s jobsite ready. $0 deposit.",
    images: [
      {
        url: "/images/interior-living.jpg",
        width: 1600,
        height: 1067,
        alt: "Freshly painted Calgary home interior by Certified Painting Systems",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Calgary Painters | Certified Painting Systems",
    description:
      "Residential and commercial painting in Calgary and surrounding communities. $0 deposit. Locally owned.",
    images: ["/images/interior-living.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [{ url: "/images/favicon.png", type: "image/png" }],
    apple: "/images/favicon.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-CA"
      className={`${geistSans.variable} ${poppins.variable} ${barlowCondensed.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col bg-white text-ink" suppressHydrationWarning>
        <JsonLd data={localBusinessSchema} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-forest focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
