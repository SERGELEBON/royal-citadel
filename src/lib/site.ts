/**
 * Royal Citadel College (R.C.C) — Kotobabi Road, Accra, Ghana — site content & brand config.
 * GES-Approved Senior High School — SHS 1-3, Vacation Classes, WASSCE Remedial & Registration, Hostel.
 */

export const SITE = {
  name: "Royal Citadel College",
  shortName: "R.C.C",
  slogan: "Discipline, Knowledge, Excellence",
  motto: "Discipline, Knowledge, Excellence",
  admissionHeadline: "Admissions Open",
  admissionSub: "G.E.S Approved",
  bannerMessage:
    "Admissions Open for SHS 1-3 at Royal Citadel College, Kotobabi — G.E.S Approved. Vacation Classes, WASSCE Remedial & Registration, Hostel facilities available. Enroll today!",
  whyChooseLead:
    "Give your ward a disciplined, excellent Senior High School education at Royal Citadel College — where knowledge meets character, and every learner is prepared to excel at WASSCE and in life.",
  whyChooseBody:
    "Royal Citadel College is a G.E.S-approved Senior High School on Kotobabi Road, Accra. We combine a rigorous SHS curriculum with vacation classes, WASSCE remedial and registration, and safe hostel facilities — nurturing disciplined, knowledgeable and excellent young men and women ready for university and beyond.",
  levels: ["SHS 1", "SHS 2", "SHS 3"] as const,
  facilities: "Hostel facilities available",
  phones: ["0244 103 429"],
  whatsapp: "0244 103 429",
  addressLine1: "Kotobabi Road, Accra",
  addressLine2: "Greater Accra Region, Ghana",
  email: "admissions@royalcitadelcollege.edu.gh",
  hours: "Mon – Fri · 7:00am – 4:00pm · Boarders 24/7",
  year: 2009,
} as const;

export const BRAND = {
  royal: "#2E75B6",
  royalDeep: "#1B3A6B",
  royalSoft: "#4A90D9",
  gold: "#F4C430",
  goldDark: "#B8860B",
  indigo: "#4A3B69",
  cream: "#FAF7EC",
  creamDark: "#E8E4D2",
  ink: "#1A2340",
  white: "#FFFFFF",
} as const;

export const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  {
    label: "About Us",
    href: "#about",
    children: [
      { label: "Headmaster's Message", href: "#principal" },
      { label: "Our History", href: "#about" },
      { label: "Vision & Mission", href: "#why-us" },
      { label: "Core Values", href: "#pillars" },
    ],
  },
  { label: "Admissions", href: "#admissions" },
  {
    label: "Academics",
    href: "#academics",
    children: [
      { label: "SHS 1-3 Admissions", href: "#academics" },
      { label: "Vacation Classes", href: "#academics" },
      { label: "WASSCE Remedial", href: "#academics" },
      { label: "WASSCE Registration", href: "#academics" },
      { label: "Hostel Facilities", href: "#facilities" },
    ],
  },
  { label: "Facilities", href: "#facilities" },
  {
    label: "Publications",
    href: "#news",
    children: [
      { label: "Calendar", href: "#calendar" },
      { label: "Bulletin", href: "#news" },
      { label: "Photo Gallery", href: "#mosaic" },
      { label: "Forms", href: "#admissions" },
    ],
  },
  { label: "Contact Us", href: "#contact" },
] as const;

export type NewsItem = {
  id: string;
  date: string;
  day: string;
  month: string;
  category: string;
  title: string;
  excerpt: string;
  image: string;
};

export const NEWS: NewsItem[] = [
  {
    id: "wassce-results",
    date: "2026-09-12",
    day: "12",
    month: "Sep",
    category: "Academics",
    title: "R.C.C Scholars Post Outstanding WASSCE Results",
    excerpt:
      "Our SHS 3 leavers recorded distinction passes in Core Maths, English and the Sciences — a testament to disciplined teaching and our WASSCE remedial programme on Kotobabi Road.",
    image: "/images/news-science.png",
  },
  {
    id: "inter-house-sports",
    date: "2026-08-29",
    day: "29",
    month: "Aug",
    category: "Sports",
    title: "Inter-House Sports Day Ends In A Photo Finish",
    excerpt:
      "Royals, Citadels, Knights and Scholars houses battled through football, athletics and relay on our Kotobabi sports ground. The 4×100m relay decided it all in the final stride.",
    image: "/images/news-sports.png",
  },
  {
    id: "vacation-classes",
    date: "2026-08-15",
    day: "15",
    month: "Aug",
    category: "Programs",
    title: "Vacation Classes Resume — Register Now For WASSCE Prep",
    excerpt:
      "Our popular vacation classes are back — open to R.C.C learners and private candidates preparing for the May/June and Nov/Dec WASSCE. Limited hostel spaces available.",
    image: "/images/news-cultural.png",
  },
];

export type CalendarEvent = {
  date: string;
  day: string;
  month: string;
  title: string;
  type: string;
};

export const CALENDAR_EVENTS: CalendarEvent[] = [
  {
    date: "2026-09-15",
    day: "15",
    month: "Sep",
    title: "Term 1 Resumption — SHS 1, 2 & 3 (Boarders report)",
    type: "Academic",
  },
  {
    date: "2026-09-22",
    day: "22",
    month: "Sep",
    title: "Open Day & Campus Tour for Prospective Parents",
    type: "Admissions",
  },
  {
    date: "2026-10-07",
    day: "07",
    month: "Oct",
    title: "Founders' Day Celebration — R.C.C turns 17",
    type: "Event",
  },
  {
    date: "2026-10-21",
    day: "21",
    month: "Oct",
    title: "Mid-Term Assessment Week (SHS 1-3)",
    type: "Academic",
  },
  {
    date: "2026-11-05",
    day: "05",
    month: "Nov",
    title: "WASSCE Registration Closes — May/June 2027",
    type: "WASSCE",
  },
  {
    date: "2026-12-12",
    day: "12",
    month: "Dec",
    title: "Speech & Prize-Giving Day + SHS 3 Send-off",
    type: "Event",
  },
];

export const PILLARS = [
  {
    id: "academic",
    label: "Academics",
    icon: "BookOpen",
    color: "royal",
    title: "A rigorous SHS curriculum",
    body:
      "A G.E.S-approved Senior High School curriculum delivered by qualified, disciplined teachers across SHS 1-3 — covering General Science, Business, General Arts and more, with consistent assessment toward WASSCE excellence.",
    points: [
      "GES-approved SHS 1-3 curriculum",
      "General Science, Business & Arts tracks",
      "Consistent WASSCE preparation",
    ],
  },
  {
    id: "wassce",
    label: "WASSCE Excellence",
    icon: "Award",
    color: "gold",
    title: "WASSCE remedial & registration",
    body:
      "We run dedicated WASSCE remedial classes for both May/June and Nov/Dec sessions, and handle WASSCE registrations in-house — giving candidates the structured preparation and confidence to excel.",
    points: [
      "Remedial classes (May/June & Nov/Dec)",
      "In-house WASSCE registration",
      "Past-question drills & mock exams",
    ],
  },
  {
    id: "hostel",
    label: "Hostel & Care",
    icon: "Home",
    color: "royal-soft",
    title: "Safe hostel facilities",
    body:
      "Our hostel offers boarders a secure, supervised home away from home — with caring houseparents, balanced meals, evening prep and a structured routine that supports both study and rest on Kotobabi Road.",
    points: [
      "Safe, supervised hostel facilities",
      "Balanced meals & evening prep",
      "Caring houseparents & pastoral care",
    ],
  },
  {
    id: "character",
    label: "Discipline",
    icon: "Scale",
    color: "indigo",
    title: "Discipline & character",
    body:
      "At Royal Citadel College, discipline is the foundation of excellence. We pair firm, fair discipline with leadership opportunities and life-skills coaching — building young men and women of character, integrity and purpose.",
    points: [
      "Clear values & discipline framework",
      "Leadership & prefect duties",
      "Life-skills & responsibility coaching",
    ],
  },
] as const;

export const FACILITIES = [
  { label: "Science Laboratory", icon: "FlaskConical" },
  { label: "ICT / Computer Lab", icon: "Monitor" },
  { label: "Library & Study Hall", icon: "BookMarked" },
  { label: "Sports Ground & Field", icon: "Volleyball" },
  { label: "Hostel Facilities", icon: "Home" },
  { label: "Dining Hall", icon: "Utensils" },
  { label: "Counselling Room", icon: "Heart" },
  { label: "School Bus", icon: "Bus" },
] as const;
