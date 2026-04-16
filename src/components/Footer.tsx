import Link from "next/link";
import Image from "next/image";
import { Linkedin, Mail, Instagram } from "lucide-react";

const footerLinks = [
  {
    heading: "Navigate",
    links: [
      { href: "/", label: "Home" },
      { href: "/about", label: "About" },
      { href: "/events", label: "Events" },
      { href: "/publications", label: "Publications" },
      { href: "/committee", label: "Committee" },
      { href: "/partners", label: "Partners" },
    ],
  },
  {
    heading: "Connect",
    links: [
      { href: "https://linkedin.com", label: "LinkedIn" },
      { href: "https://instagram.com", label: "Instagram" },
      { href: "mailto:mbasa@usyd.edu.au", label: "Email Us" },
      { href: "/contact", label: "Contact Form" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#003152] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-5">
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
                <span className="font-[family-name:var(--font-baskerville)] font-semibold text-lg">
                  <span className="text-white">MBA</span>
                  <span className="text-[#89cff0]">SA</span>
                </span>
                <span className="text-white/40 text-[10px] tracking-widest uppercase">
                  MBA Student Association
                </span>
              </div>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs font-[family-name:var(--font-archivo)]">
              MBASA builds an inclusive community, empowers professional success, and connects students, alumni, and partners.
            </p>
            <div className="flex gap-3 mt-5">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                className="p-2 rounded bg-white/10 hover:bg-[#89cff0]/20 transition-colors" aria-label="LinkedIn">
                <Linkedin size={16} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                className="p-2 rounded bg-white/10 hover:bg-[#89cff0]/20 transition-colors" aria-label="Instagram">
                <Instagram size={16} />
              </a>
              <a href="mailto:mbasa@usyd.edu.au"
                className="p-2 rounded bg-white/10 hover:bg-[#89cff0]/20 transition-colors" aria-label="Email">
                <Mail size={16} />
              </a>
            </div>
          </div>

          {footerLinks.map(({ heading, links }) => (
            <div key={heading}>
              <h4 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#89cff0]/70 mb-4 font-[family-name:var(--font-archivo)]">
                {heading}
              </h4>
              <ul className="space-y-2">
                {links.map(({ href, label }) => (
                  <li key={label}>
                    <Link href={href}
                      className="text-sm text-white/60 hover:text-[#89cff0] transition-colors font-[family-name:var(--font-archivo)]">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs font-[family-name:var(--font-archivo)]">
            © {new Date().getFullYear()} MBASA — MBA Student Association.
          </p>
          <p className="text-white/30 text-xs font-[family-name:var(--font-archivo)]">
            Connect · Elevate · Scale
          </p>
        </div>
      </div>
    </footer>
  );
}
