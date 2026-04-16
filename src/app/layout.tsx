import type { Metadata } from "next";
import { Archivo, Libre_Baskerville } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* Figma body font: Archivo */
const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

/* Figma heading font: Libre Baskerville */
const libreBaskerville = Libre_Baskerville({
  variable: "--font-baskerville",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://mbasa.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "MBASA — MBA Student Association",
    template: "%s | MBASA",
  },
  description:
    "The one-stop hub for student comms, connection, and opportunities. The MBA Digital & Tech Student Association — connecting the brightest minds of the future.",
  keywords: [
    "MBA Student Association",
    "MBASA",
    "MBA Digital Tech",
    "USYD MBA",
    "business school community",
    "MBA students",
  ],
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: siteUrl,
    siteName: "MBASA",
    title: "MBASA — MBA Student Association",
    description:
      "The one-stop hub for student comms, connection, and opportunities. Built to scale across cohorts.",
    images: [
      {
        url: "/images/hero-bg.jpg",
        width: 1200,
        height: 630,
        alt: "MBASA — MBA Student Association",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MBASA — MBA Student Association",
    description:
      "The one-stop hub for student comms, connection, and opportunities.",
    images: ["/images/hero-bg.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${archivo.variable} ${libreBaskerville.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col bg-[#fafafa] font-[family-name:var(--font-archivo)] antialiased text-[#161617]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
