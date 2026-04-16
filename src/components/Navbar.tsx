"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

/* Exact nav links from Figma wireframe */
const navLinks = [
  { href: "/about", label: "About" },
  { href: "/events", label: "Events" },
  { href: "/publications", label: "Publications" },
  { href: "/committee", label: "Committee" },
  { href: "/partners", label: "Partners" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    /* Dark navy bg #003152, nav text in light blue #89cff0 — matches Figma Dark Mode header */
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#003152]">
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-[72px] flex items-center justify-between">

        {/* Logo — MBA in white, SA in #89cff0 (matches Figma white+blue logo) */}
        <Link href="/" className="flex items-center gap-3 group shrink-0">
          <div className="relative w-10 h-10 shrink-0">
            <Image
              src="/images/mbasa-logo.png"
              alt="MBASA Logo"
              fill
              className="object-contain"
              sizes="40px"
            />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-[family-name:var(--font-baskerville)] font-semibold text-lg tracking-tight">
              <span className="text-white">MBA</span>
              <span className="text-[#89cff0]">SA</span>
            </span>
            <span className="text-white/50 text-[10px] tracking-widest uppercase font-[family-name:var(--font-archivo)]">
              MBA Student Association
            </span>
          </div>
        </Link>

        {/* Desktop nav — Archivo, light blue text on dark navy */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href || pathname.startsWith(href + "/");
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`px-4 py-2 rounded text-sm font-medium tracking-wide transition-all duration-200 font-[family-name:var(--font-archivo)] ${
                    isActive
                      ? "text-white bg-white/10"
                      : "text-[#89cff0] hover:text-white hover:bg-white/10"
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Join Us button — #89cff0 bg, #003152 text (matches Figma Dark Mode CTA) */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="px-5 py-2 bg-[#89cff0] text-[#003152] text-sm font-semibold rounded hover:bg-[#b3dff5] transition-colors duration-200 font-[family-name:var(--font-archivo)]"
          >
            Join Us
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-[#89cff0] hover:text-white p-1"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden bg-[#003152] border-t border-white/10 px-6 pb-5">
          <ul className="flex flex-col gap-1 pt-3">
            {navLinks.map(({ href, label }) => {
              const isActive = pathname === href;
              return (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={() => setOpen(false)}
                    className={`block px-4 py-3 rounded text-sm font-medium font-[family-name:var(--font-archivo)] transition-all ${
                      isActive
                        ? "text-white bg-white/10"
                        : "text-[#89cff0] hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="pt-4 border-t border-white/10 mt-2">
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="block w-full text-center px-5 py-2.5 bg-[#89cff0] text-[#003152] text-sm font-semibold rounded hover:bg-[#b3dff5] transition-colors font-[family-name:var(--font-archivo)]"
            >
              Join Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
