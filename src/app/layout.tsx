import type { Metadata } from "next";
import { Oswald, Poppins, Great_Vibes, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Royal Citadel College (R.C.C) | Discipline, Knowledge, Excellence — Kotobabi, Accra",
  description:
    "Royal Citadel College (R.C.C) — G.E.S Approved Senior High School (SHS 1-3) on Kotobabi Road, Accra, Ghana. Admissions open, vacation classes, WASSCE remedial & registration, hostel facilities. Discipline, Knowledge, Excellence.",
  keywords: [
    "Royal Citadel College",
    "R.C.C",
    "SHS Kotobabi",
    "Senior High School Accra",
    "SHS 1-3 admissions",
    "WASSCE remedial Accra",
    "WASSCE registration",
    "vacation classes Accra",
    "hostel facilities SHS",
    "GES approved school Kotobabi",
    "admissions open",
  ],
  authors: [{ name: "Royal Citadel College" }],
  icons: {
    icon: "/logo.svg",
    apple: "/images/logo-crest.png",
  },
  openGraph: {
    title: "Royal Citadel College (R.C.C) | Discipline, Knowledge, Excellence — Kotobabi, Accra",
    description:
      "G.E.S Approved SHS 1-3 — Vacation Classes, WASSCE Remedial & Registration, Hostel. Kotobabi Road, Accra, Ghana.",
    siteName: "Royal Citadel College",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Royal Citadel College (R.C.C) — Kotobabi, Accra",
    description:
      "G.E.S Approved SHS 1-3 · Vacation Classes · WASSCE Remedial & Registration · Hostel. Kotobabi Road, Accra.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${oswald.variable} ${poppins.variable} ${greatVibes.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
