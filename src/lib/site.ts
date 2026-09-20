export const site = {
  name: "Certified Painting Systems",
  legalName: "Certified Painting Systems Ltd",
  shortName: "CPS",
  tagline: "One Customer at a Time… ON TIME!",
  phone: "403-813-5985",
  phoneHref: "tel:+14038135985",
  email: "CPSLouRay@gmail.com",
  emailHref: "mailto:CPSLouRay@gmail.com",
  city: "Calgary, Alberta",
  url: "https://certifiedpaintingsystems.com",
  googleReviewHref:
    "https://www.google.com/search?q=Certified+Painting+Systems+Ltd+Calgary+reviews",
  serviceArea: "Calgary, Airdrie, Chestermere, Cochrane, Okotoks, and Langdon",
} as const;

export const navLinks = [
  { href: "/#work", label: "Our Work" },
  { href: "/#process", label: "Our Process" },
  { href: "/#about", label: "About" },
  { href: "/#testimonials", label: "Testimonials" },
  { href: "/commercial", label: "Commercial" },
] as const;

export const legalLinks = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-of-use", label: "Terms & Conditions" },
] as const;

export const communities = [
  "Calgary",
  "Airdrie",
  "Chestermere",
  "Cochrane",
  "Okotoks",
  "Langdon",
] as const;

export const stats = [
  { value: "25+", label: "Years Serving Calgary" },
  { value: "$0", label: "Deposit" },
  { value: "No", label: "Hidden Fees" },
] as const;

export const promises = [
  {
    key: "show-up",
    title: "Show Up",
    body: "We respect your schedule. When we say we’ll be there, we are.",
  },
  {
    key: "protect",
    title: "Protect",
    body: "Your home is treated like a home — not a construction site.",
  },
  {
    key: "communicate",
    title: "Communicate",
    body: "You always know what’s happening with your project.",
  },
  {
    key: "finish",
    title: "Finish",
    body: "We make sure the work is right before we consider the job complete.",
  },
] as const;

export const residentialServices = [
  {
    title: "Interior Painting",
    body: "Walls, ceilings, trim, doors, and complete home repaints.",
  },
  {
    title: "Exterior Painting",
    body: "Beautiful, durable results that stand up to Calgary’s climate.",
  },
  {
    title: "Renovations",
    body: "Basements, additions, and remodeled spaces that need a clean finish.",
  },
  {
    title: "Feature Rooms",
    body: "Bedrooms, offices, great rooms, and the spaces you use every day.",
  },
  {
    title: "Move-In / Move-Out",
    body: "Refresh a home before you move in, or get it ready for sale.",
  },
  {
    title: "Whole-Home Repaints",
    body: "Professional scheduling and project management from start to finish.",
  },
] as const;

export const processSteps = [
  {
    number: "01",
    title: "Estimate",
    body: "We meet with you and provide a clear estimate. No deposit required.",
  },
  {
    number: "02",
    title: "Schedule",
    body: "We agree on a start date that works for you.",
  },
  {
    number: "03",
    title: "Prepare",
    body: "Floors, furniture, and surfaces are protected.",
  },
  {
    number: "04",
    title: "Paint",
    body: "Experienced professionals complete your project.",
  },
  {
    number: "05",
    title: "Walkthrough",
    body: "We review the completed work with you.",
  },
  {
    number: "06",
    title: "Payment",
    body: "Now you pay us.",
  },
] as const;

export const projects = [
  {
    title: "Calgary Interior Repaint",
    location: "Calgary, AB",
    summary: "A modern home transformation with fresh interior finishes.",
    image: "/images/interior-living.jpg",
    alt: "Freshly painted modern living room interior in Calgary",
  },
  {
    title: "Chestermere Exterior",
    location: "Chestermere, AB",
    summary: "Full exterior repaint built for prairie weather.",
    image: "/images/exterior-home.jpg",
    alt: "Freshly painted house exterior in Chestermere near Calgary",
  },
  {
    title: "Whole-Home Repaint",
    location: "Calgary, AB",
    summary: "Clean, modern interiors from entry to bedrooms.",
    image: "/images/interior-bright.jpg",
    alt: "Bright whole-home interior painting project in Calgary",
  },
  {
    title: "Modernized Fuel Station",
    location: "Calgary Area",
    summary: "Commercial exterior painting with durable, high-traffic finishes.",
    image: "/images/commercial-exterior.jpg",
    alt: "Commercial exterior painting on a high-traffic building",
  },
] as const;

export const testimonials = [
  {
    quote:
      "CPS did an amazing job on our interior and exterior painting. The work was completed extremely well, on time and on budget.",
    name: "Calgary Homeowner",
  },
  {
    quote:
      "Great company to deal with. They worked around our schedule, moved furniture and put it back. The staff were pleasant, helpful and knowledgeable.",
    name: "Calgary Homeowner",
  },
] as const;

export const owners = [
  {
    name: "Lou",
    role: "Co-Owner, Red Seal Journeyperson Painter",
    experience: "40 Years of Experience",
    bio: "Decades of hands-on painting and project experience across residential, commercial, and construction work.",
    image: "/images/Lou.png",
  },
  {
    name: "Ray",
    role: "Co-Owner, Red Seal Journeyperson Painter",
    experience: "30 Years of Experience",
    bio: "Owner involvement, customer communication, and dependable project delivery from estimate through completion.",
    image: "/images/Ray.png",
  },
] as const;

export const commercialServices = [
  "Commercial painting",
  "Renovations",
  "Tenant improvements",
  "Multi-family",
  "New construction",
  "Basement developments",
] as const;

export const safetyCredentials = [
  "CPR / First Aid",
  "WHMIS",
  "Fall Arrest",
  "Elevated Work Platforms",
  "Lift Tickets",
  "COR Safety Program",
  "WCB Coverage",
  "Insured",
] as const;

export const projectTypes = [
  "Interior Painting",
  "Exterior Painting",
  "Whole-home repaint",
  "Renovation / Basement",
  "Commercial / Contractor",
] as const;

export const contactMethods = ["Phone", "Email", "Text"] as const;

export const faqs = [
  {
    question: "Do you paint homes in Calgary?",
    answer:
      "Yes. Residential painting is our focus. CPS paints interiors, exteriors, renovations, and whole-home repaints for homeowners across Calgary and nearby communities including Airdrie, Chestermere, Cochrane, Okotoks, and Langdon.",
  },
  {
    question: "Do you require a deposit?",
    answer:
      "No. For more than 25 years, Certified Painting Systems has never required homeowners to pay a deposit before we begin. Your money stays with you until the work is finished and you’re satisfied.",
  },
  {
    question: "What painting services do you offer?",
    answer:
      "We offer interior painting, exterior painting, basement and renovation finishing, feature rooms, move-in and move-out refreshes, and whole-home repaints. We also paint for general contractors, builders, and property managers.",
  },
  {
    question: "Do you take on commercial or contractor work?",
    answer:
      "Yes. After residential work, CPS regularly paints for general contractors, developers, and property managers — including tenant improvements, multi-family, new construction, and basement developments. Invite us to bid on your next project.",
  },
  {
    question: "How do I get a painting estimate in Calgary?",
    answer:
      "Fill out our {link} or call {phone}. We’ll review your project and contact you to arrange the next step. Estimates are free, and there’s no deposit if you move ahead.",
    link: { href: "/#estimate", label: "free estimate form" },
  },
  {
    question: "Are Lou and Ray involved in the work?",
    answer:
      "CPS is locally owned and owner operated. Lou and Ray are both Red Seal Journeyperson Painters with more than 70 years of combined experience, and they stay accountable from estimate through completion.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We proudly serve Calgary, Airdrie, Chestermere, Cochrane, Okotoks, and Langdon. If you’re nearby and not sure we cover your community, give us a call.",
  },
] as const;
