import type { Metadata } from "next";
import { Archivo, Libre_Baskerville } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

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
    default: "MBADTSA — MBA Student Association",
    template: "%s | MBADTSA",
  },
  description:
    "The one-stop hub for student comms, connection, and opportunities. The MBA Digital & Tech Student Association — connecting the brightest minds of the future.",
  keywords: ["MBA Student Association", "MBADTSA", "MBA Digital Tech", "USYD MBA"],
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: siteUrl,
    siteName: "MBADTSA",
    title: "MBADTSA — MBA Student Association",
    description: "The one-stop hub for student comms, connection, and opportunities.",
    images: [{ url: "/images/hero-bg.jpg", width: 1200, height: 630, alt: "MBADTSA" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "MBADTSA — MBA Student Association",
    description: "The one-stop hub for student comms, connection, and opportunities.",
    images: ["/images/hero-bg.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${archivo.variable} ${libreBaskerville.variable}`} suppressHydrationWarning>
      <body className="min-h-screen flex flex-col bg-white dark:bg-[#001a2e] font-[family-name:var(--font-archivo)] antialiased text-[#161617] dark:text-white transition-colors duration-200">
        <ThemeProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
