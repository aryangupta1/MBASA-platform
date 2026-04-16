import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Users, Zap, TrendingUp } from "lucide-react";

const pillars = [
  {
    word: "CONNECT.",
    tagline: "Community First, Inclusive Excellence, Shared Success",
    label: "High Signal Community",
    icon: Users,
    stake: "Partners gain access to a diverse, elite, yet collaborative talent pool where \"mutual uplift\" is the culture.",
  },
  {
    word: "ELEVATE.",
    tagline: "Radical Utility, Digital-First Agility",
    label: "Engineered Utility",
    icon: Zap,
    stake: "Every interaction is streamlined and high-value. No \"fluff\", just efficient, tech enabled outcomes.",
  },
  {
    word: "SCALE.",
    tagline: "Scalable Connectivity, Professional Integrity, Innovation",
    label: "Enduring Impact",
    icon: TrendingUp,
    stake: "We aren't a \"pop-up\" student group. We are a permanent, professional bridge between academia and industry.",
  },
];

export default function Home() {
  return (
    <>
      {/* ─── HERO — "WELCOME TO..." from FigJam ─── */}
      <section className="relative min-h-screen bg-[#003152] flex items-center overflow-hidden">
        <Image
          src="/images/hero-bg.jpg"
          alt="Business school background"
          fill
          priority
          className="object-cover opacity-25"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#003152]/75" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full pt-28 pb-20">
          <div className="max-w-3xl">
            {/* Figma logo image */}
            <div className="relative w-36 h-14 mb-10">
              <Image
                src="/images/mbasa-logo.png"
                alt="MBASA"
                fill
                className="object-contain object-left"
                sizes="144px"
              />
            </div>

            {/* "WELCOME TO..." — FigJam section header */}
            <p className="text-[#89cff0]/50 text-xs uppercase tracking-[0.3em] font-semibold mb-4 font-[family-name:var(--font-archivo)]">
              Welcome to
            </p>

            {/* Libre Baskerville Title 1: 64px, SemiBold */}
            <h1 className="font-[family-name:var(--font-baskerville)] font-semibold text-white text-5xl sm:text-6xl lg:text-7xl leading-[1.0] tracking-[-0.04em] mb-6">
              MBA<span className="text-[#89cff0]">SA.</span>
            </h1>

            {/* FigJam exact tagline */}
            <p className="font-[family-name:var(--font-archivo)] font-light text-white/70 text-xl sm:text-2xl leading-relaxed tracking-[-0.02em] mb-3 max-w-2xl">
              The one-stop hub for student comms, connection, and opportunities.
            </p>
            <p className="font-[family-name:var(--font-archivo)] text-white/40 text-base mb-10 max-w-xl">
              Built to scale across cohorts and collaborate with other MBA bodies.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#89cff0] text-[#003152] font-semibold text-sm rounded hover:bg-[#b3dff5] transition-colors font-[family-name:var(--font-archivo)]"
              >
                Our Mission <ArrowRight size={15} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 border border-[#89cff0]/30 text-[#89cff0] font-semibold text-sm rounded hover:bg-white/10 hover:text-white transition-all font-[family-name:var(--font-archivo)]"
              >
                Join Us
              </Link>
            </div>
          </div>
        </div>

        {/* Vertical scroll line */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="w-px h-12 bg-gradient-to-b from-[#89cff0]/30 to-transparent" />
        </div>
      </section>

      {/* ─── IDENTITY STATEMENT — exact FigJam copy ─── */}
      <section className="bg-[#003152] border-t border-white/10 py-16">
        <div className="max-w-5xl mx-auto px-6 lg:px-10 text-center">
          {/* Libre Baskerville Title 2 */}
          <blockquote className="font-[family-name:var(--font-baskerville)] font-semibold text-white text-2xl sm:text-3xl lg:text-4xl leading-snug tracking-[-0.04em] mb-5">
            &ldquo;The MBA Digital &amp; Tech Student Association is the central digital platform connecting the brightest minds of the future. A community first organisation.&rdquo;
          </blockquote>
          <p className="text-[#89cff0]/50 text-sm font-[family-name:var(--font-archivo)]">Our Mission: To create a digitally connected platform for MBA students and beyond.</p>
        </div>
      </section>

      {/* ─── THREE PILLARS — exact FigJam copy ─── */}
      <section className="py-20 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <p className="text-[#003152]/40 text-xs uppercase tracking-[0.25em] font-semibold mb-3 font-[family-name:var(--font-archivo)]">What does this mean for stakeholders?</p>
            {/* Libre Baskerville Title 2 */}
            <h2 className="font-[family-name:var(--font-baskerville)] font-semibold text-[#003152] text-4xl sm:text-5xl tracking-[-0.04em]">
              Something that provides us<br className="hidden sm:block" /> with a way to&hellip;
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map(({ word, tagline, label, icon: Icon, stake }) => (
              <div
                key={word}
                className="group rounded-2xl bg-white border border-[#003152]/10 p-8 hover:border-[#89cff0] hover:shadow-lg transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-[#003152]/5 flex items-center justify-center mb-5 group-hover:bg-[#003152] transition-colors">
                  <Icon size={20} className="text-[#003152] group-hover:text-[#89cff0] transition-colors" />
                </div>
                {/* Libre Baskerville Title 3 */}
                <h3 className="font-[family-name:var(--font-baskerville)] font-semibold text-[#003152] text-3xl mb-1 tracking-[-0.03em]">
                  {word}
                </h3>
                <p className="text-[10px] font-bold text-[#003152]/40 uppercase tracking-widest mb-1 font-[family-name:var(--font-archivo)]">{label}</p>
                <p className="text-xs font-semibold text-[#003152]/50 italic mb-4 font-[family-name:var(--font-archivo)]">{tagline}</p>
                {/* Archivo body */}
                <p className="text-sm text-[#161617]/60 leading-relaxed font-[family-name:var(--font-archivo)]">{stake}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── THE PROBLEMS WE SOLVE — exact FigJam text ─── */}
      <section className="py-20 bg-[#003152]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <p className="text-[#89cff0]/50 text-xs uppercase tracking-[0.25em] font-semibold mb-3 font-[family-name:var(--font-archivo)]">Why MBASA exists</p>
            <h2 className="font-[family-name:var(--font-baskerville)] font-semibold text-white text-4xl sm:text-5xl tracking-[-0.04em]">
              The Problem
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                number: "01",
                title: "Fragmented Student Experience",
                desc: "There is no single, trusted hub that brings together communication, career opportunities, community, and practical support across the MBA journey. We are only 50 students and most are lucky to at least know the students in their group.",
              },
              {
                number: "02",
                title: "Underdeveloped Link to Real World Value",
                desc: "There is no structured platform connecting students to industry, partnerships, and career pathways. Opportunities are ad hoc and inconsistent, reducing the long-term value of the MBA experience specifically in the digital and tech industry.",
              },
              {
                number: "03",
                title: "Lack of Scalable Community",
                desc: "Current digital setup is not designed to foster consistent, meaningful connection across cohorts. Students remain isolated within their own circles, limiting collaboration, peer learning, and a strong MBA identity.",
              },
            ].map(({ number, title, desc }) => (
              <div key={number} className="rounded-2xl border border-white/10 bg-white/5 p-8">
                <span className="font-[family-name:var(--font-baskerville)] text-5xl font-semibold text-white/10 block mb-4">
                  {number}
                </span>
                <h3 className="font-[family-name:var(--font-baskerville)] font-semibold text-white text-xl mb-3 tracking-tight">
                  {title}
                </h3>
                <p className="text-sm text-white/50 leading-relaxed font-[family-name:var(--font-archivo)]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── OUR PROMISE — exact FigJam stickies ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-10 text-center">
          <p className="text-[#003152]/40 text-xs uppercase tracking-[0.25em] font-semibold mb-3 font-[family-name:var(--font-archivo)]">Our Promise</p>
          <h2 className="font-[family-name:var(--font-baskerville)] font-semibold text-[#003152] text-4xl sm:text-5xl tracking-[-0.04em] mb-12">
            Every decision passes<br className="hidden sm:block" /> three tests.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { q: "Is it elite?", a: "Does it reflect the professional caliber of our partners?" },
              { q: "Is it useful?", a: "Does it provide immediate career or academic momentum?" },
              { q: "Is it scalable?", a: "Does this benefit future cohorts and the wider network?" },
            ].map(({ q, a }) => (
              <div key={q} className="rounded-2xl bg-[#fafafa] border border-[#003152]/10 p-8 text-left hover:border-[#89cff0] transition-colors">
                <h3 className="font-[family-name:var(--font-baskerville)] font-semibold text-[#003152] text-xl mb-3 tracking-tight">{q}</h3>
                <p className="text-sm text-[#161617]/60 leading-relaxed font-[family-name:var(--font-archivo)]">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA BANNER ─── */}
      <section className="py-20 bg-[#89cff0]">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <h2 className="font-[family-name:var(--font-baskerville)] font-semibold text-[#003152] text-4xl sm:text-5xl tracking-[-0.04em] mb-5">
            Be part of something bigger.
          </h2>
          <p className="text-[#003152]/70 text-lg mb-8 max-w-xl mx-auto font-[family-name:var(--font-archivo)]">
            Join the central digital platform connecting the brightest minds of the future. A community-first organisation.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#003152] text-white font-semibold rounded hover:bg-[#00253e] transition-colors font-[family-name:var(--font-archivo)]"
            >
              Join MBASA <ArrowRight size={16} />
            </Link>
            <Link
              href="/events"
              className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-[#003152]/30 text-[#003152] font-semibold rounded hover:bg-[#003152]/10 transition-all font-[family-name:var(--font-archivo)]"
            >
              Upcoming Events
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
