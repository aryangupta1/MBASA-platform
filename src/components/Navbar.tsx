"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

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
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  /* Avoid hydration mismatch — only render theme-dependent UI after mount */
  useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme === "dark";

  return (
    /*
     * Figma Light Mode header: bg=#ffffff, nav text #003152, button #003152 bg + #89cff0 text
     * Figma Dark Mode  header: bg=#003152, nav text #89cff0, button #89cff0 bg + #003152 text
     */
    <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-[#003152] border-b border-black/5 dark:border-white/10 transition-colors duration-200">
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-[72px] flex items-center justify-between gap-6">

        {/* Logo wordmark */}
        <Link href="/" className="flex items-center shrink-0">
          {mounted ? (
            <div className="leading-none">
              <span className="font-[family-name:var(--font-baskerville)] font-semibold text-xl tracking-[-0.05em]">
                <span className={isDark ? "text-white" : "text-[#003152]"}>MBA</span>
                <span className="text-[#89cff0]">DTSA</span>
              </span>
            </div>
          ) : (
            /* SSR placeholder — same size, no flash */
            <div className="h-7 w-[90px]" />
          )}
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-1 flex-1 justify-center">
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href || pathname.startsWith(href + "/");
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`px-4 py-2 rounded text-sm font-medium tracking-[-0.01em] transition-all duration-150 font-[family-name:var(--font-archivo)]
                    ${isActive
                      ? "text-[#003152] dark:text-white bg-[#003152]/5 dark:bg-white/10"
                      : "text-[#003152] dark:text-[#89cff0] hover:bg-[#003152]/5 dark:hover:bg-white/10 hover:text-[#003152] dark:hover:text-white"
                    }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Right — Join Us button + theme toggle */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          {/* Theme toggle */}
          {mounted && (
            <button
              onClick={() => setTheme(isDark ? "light" : "dark")}
              aria-label="Toggle theme"
              className="p-2 rounded-lg text-[#003152]/50 dark:text-[#89cff0]/50 hover:text-[#003152] dark:hover:text-[#89cff0] hover:bg-[#003152]/5 dark:hover:bg-white/10 transition-all"
            >
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          )}

          {/*
           * Figma Light: button bg=#003152, text=#89cff0
           * Figma Dark:  button bg=#89cff0, text=#003152
           */}
          <Link
            href="/contact"
            className="px-5 py-2 text-sm font-semibold rounded transition-colors duration-150 font-[family-name:var(--font-archivo)]
              bg-[#003152] text-[#89cff0] hover:bg-[#00253e]
              dark:bg-[#89cff0] dark:text-[#003152] dark:hover:bg-[#b3dff5]"
          >
            Join Us
          </Link>
        </div>

        {/* Mobile right */}
        <div className="md:hidden flex items-center gap-2">
          {mounted && (
            <button
              onClick={() => setTheme(isDark ? "light" : "dark")}
              aria-label="Toggle theme"
              className="p-1.5 rounded text-[#003152]/60 dark:text-[#89cff0]/60 hover:text-[#003152] dark:hover:text-[#89cff0] transition-colors"
            >
              {isDark ? <Sun size={15} /> : <Moon size={15} />}
            </button>
          )}
          <button
            onClick={() => setOpen(!open)}
            className="p-1.5 text-[#003152] dark:text-[#89cff0] hover:opacity-70 transition-opacity"
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden bg-white dark:bg-[#003152] border-t border-black/5 dark:border-white/10 px-6 pb-5 transition-colors">
          <ul className="flex flex-col gap-1 pt-3">
            {navLinks.map(({ href, label }) => {
              const isActive = pathname === href;
              return (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={() => setOpen(false)}
                    className={`block px-4 py-3 rounded text-sm font-medium font-[family-name:var(--font-archivo)] transition-all
                      ${isActive
                        ? "text-[#003152] dark:text-white bg-[#003152]/5 dark:bg-white/10"
                        : "text-[#003152] dark:text-[#89cff0] hover:bg-[#003152]/5 dark:hover:bg-white/10"
                      }`}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="pt-4 border-t border-black/5 dark:border-white/10 mt-2">
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="block w-full text-center px-5 py-2.5 text-sm font-semibold rounded font-[family-name:var(--font-archivo)] transition-colors
                bg-[#003152] text-[#89cff0] hover:bg-[#00253e]
                dark:bg-[#89cff0] dark:text-[#003152] dark:hover:bg-[#b3dff5]"
            >
              Join Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
