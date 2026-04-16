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
      {/* ─── HERO — matches Figma Frame 2147238006 exactly ─── */}
      <section className="relative min-h-screen bg-[#003152] flex flex-col justify-end overflow-hidden">

        {/* Figma: "Rectangle 2" — hero background image with dark overlay */}
        <Image
          src="/images/hero-bg.jpg"
          alt="Business school"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Dark navy overlay — matches Figma Rectangle 2 fill=#003152 */}
        <div className="absolute inset-0 bg-[#003152]/75" />

        {/* Hero content — positioned over the image */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 w-full pt-36 pb-24">

          {/*
           * Figma: "MBABA Logo White & Blue 1" — 494×177px image
           * white MBA + sky-blue SA, shown large in the hero
           */}
          <div className="relative mb-8" style={{ width: 247, height: 89 }}>
            <Image
              src="/images/mbasa-logo.png"
              alt="MBASA"
              fill
              className="object-contain object-left"
              sizes="247px"
            />
          </div>

          {/*
           * Figma: Archivo 48px weight=400, white, ls=-1.44, lh=48
           * "MBASA builds an inclusive community, empowers professional success,
           *  and connects students, alumni, and partners."
           */}
          <p
            className="font-[family-name:var(--font-archivo)] font-normal text-white max-w-2xl mb-10"
            style={{ fontSize: "clamp(1.5rem, 3vw, 3rem)", lineHeight: 1.1, letterSpacing: "-0.03em" }}
          >
            MBASA builds an inclusive community, empowers professional success, and connects students, alumni, and partners.
          </p>

          {/*
           * Figma Button Light / Frame 2147238000:
           * Light mode: bg=#89cff0, text=#003152
           * Dark mode:  bg=#89cff0, text=#003152  (same — hero is always dark bg)
           */}
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#89cff0] text-[#003152] font-semibold text-base rounded hover:bg-[#b3dff5] active:scale-[0.98] transition-all font-[family-name:var(--font-archivo)]"
          >
            Join Us <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* ─── IDENTITY STATEMENT ─── */}
      <section className="bg-[#003152] dark:bg-[#001a2e] border-t border-white/10 py-16">
        <div className="max-w-5xl mx-auto px-6 lg:px-10 text-center">
          <blockquote className="font-[family-name:var(--font-baskerville)] font-semibold text-white text-2xl sm:text-3xl lg:text-4xl leading-snug tracking-[-0.04em] mb-5">
            &ldquo;The MBA Digital &amp; Tech Student Association is the central digital platform connecting the brightest minds of the future. A community first organisation.&rdquo;
          </blockquote>
          <p className="text-[#89cff0]/60 text-sm font-[family-name:var(--font-archivo)]">
            Our Mission: To create a digitally connected platform for MBA students and beyond.
          </p>
        </div>
      </section>

      {/* ─── THREE PILLARS ─── */}
      <section className="py-20 bg-[#fafafa] dark:bg-[#001a2e]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <p className="text-[#003152]/40 dark:text-white/30 text-xs uppercase tracking-[0.25em] font-semibold mb-3 font-[family-name:var(--font-archivo)]">
              What does this mean for stakeholders?
            </p>
            <h2 className="font-[family-name:var(--font-baskerville)] font-semibold text-[#003152] dark:text-white text-4xl sm:text-5xl tracking-[-0.04em]">
              Something that provides us<br className="hidden sm:block" /> with a way to&hellip;
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map(({ word, tagline, label, icon: Icon, stake }) => (
              <div key={word} className="group rounded-2xl bg-white dark:bg-white/5 border border-[#003152]/10 dark:border-white/10 p-8 hover:border-[#89cff0] hover:shadow-lg dark:hover:shadow-none transition-all duration-300">
                <div className="w-11 h-11 rounded-xl bg-[#003152]/5 dark:bg-[#89cff0]/10 flex items-center justify-center mb-5 group-hover:bg-[#003152] dark:group-hover:bg-[#89cff0]/20 transition-colors">
                  <Icon size={20} className="text-[#003152] dark:text-[#89cff0] group-hover:text-[#89cff0] dark:group-hover:text-[#89cff0] transition-colors" />
                </div>
                <h3 className="font-[family-name:var(--font-baskerville)] font-semibold text-[#003152] dark:text-white text-3xl mb-1 tracking-[-0.03em]">
                  {word}
                </h3>
                <p className="text-[10px] font-bold text-[#003152]/40 dark:text-white/30 uppercase tracking-widest mb-1 font-[family-name:var(--font-archivo)]">{label}</p>
                <p className="text-xs font-semibold text-[#003152]/50 dark:text-white/40 italic mb-4 font-[family-name:var(--font-archivo)]">{tagline}</p>
                <p className="text-sm text-[#161617]/60 dark:text-white/50 leading-relaxed font-[family-name:var(--font-archivo)]">{stake}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── THE PROBLEM ─── */}
      <section className="py-20 bg-[#003152] dark:bg-[#00253e]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <p className="text-[#89cff0]/50 text-xs uppercase tracking-[0.25em] font-semibold mb-3 font-[family-name:var(--font-archivo)]">
              Why MBASA exists
            </p>
            <h2 className="font-[family-name:var(--font-baskerville)] font-semibold text-white text-4xl sm:text-5xl tracking-[-0.04em]">
              The Problem
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { number: "01", title: "Fragmented Student Experience", desc: "There is no single, trusted hub that brings together communication, career opportunities, community, and practical support across the MBA journey. We are only 50 students and most are lucky to at least know the students in their group." },
              { number: "02", title: "Underdeveloped Link to Real World Value", desc: "There is no structured platform connecting students to industry, partnerships, and career pathways. Opportunities are ad hoc and inconsistent, reducing the long-term value of the MBA experience specifically in the digital and tech industry." },
              { number: "03", title: "Lack of Scalable Community", desc: "Current digital setup is not designed to foster consistent, meaningful connection across cohorts. Students remain isolated within their own circles, limiting collaboration, peer learning, and a strong MBA identity." },
            ].map(({ number, title, desc }) => (
              <div key={number} className="rounded-2xl border border-white/10 bg-white/5 p-8">
                <span className="font-[family-name:var(--font-baskerville)] text-5xl font-semibold text-white/10 block mb-4">{number}</span>
                <h3 className="font-[family-name:var(--font-baskerville)] font-semibold text-white text-xl mb-3 tracking-tight">{title}</h3>
                <p className="text-sm text-white/50 leading-relaxed font-[family-name:var(--font-archivo)]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── OUR PROMISE ─── */}
      <section className="py-20 bg-white dark:bg-[#001a2e]">
        <div className="max-w-5xl mx-auto px-6 lg:px-10 text-center">
          <p className="text-[#003152]/40 dark:text-white/30 text-xs uppercase tracking-[0.25em] font-semibold mb-3 font-[family-name:var(--font-archivo)]">Our Promise</p>
          <h2 className="font-[family-name:var(--font-baskerville)] font-semibold text-[#003152] dark:text-white text-4xl sm:text-5xl tracking-[-0.04em] mb-12">
            Every decision passes three tests.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { q: "Is it elite?", a: "Does it reflect the professional caliber of our partners?" },
              { q: "Is it useful?", a: "Does it provide immediate career or academic momentum?" },
              { q: "Is it scalable?", a: "Does this benefit future cohorts and the wider network?" },
            ].map(({ q, a }) => (
              <div key={q} className="rounded-2xl bg-[#fafafa] dark:bg-white/5 border border-[#003152]/10 dark:border-white/10 p-8 text-left hover:border-[#89cff0] transition-colors">
                <h3 className="font-[family-name:var(--font-baskerville)] font-semibold text-[#003152] dark:text-white text-xl mb-3 tracking-tight">{q}</h3>
                <p className="text-sm text-[#161617]/60 dark:text-white/50 leading-relaxed font-[family-name:var(--font-archivo)]">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-20 bg-[#89cff0]">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <h2 className="font-[family-name:var(--font-baskerville)] font-semibold text-[#003152] text-4xl sm:text-5xl tracking-[-0.04em] mb-5">
            Be part of something bigger.
          </h2>
          <p className="text-[#003152]/70 text-lg mb-8 max-w-xl mx-auto font-[family-name:var(--font-archivo)]">
            Join the central digital platform connecting the brightest minds of the future.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#003152] text-white font-semibold rounded hover:bg-[#00253e] transition-colors font-[family-name:var(--font-archivo)]">
              Join MBASA <ArrowRight size={16} />
            </Link>
            <Link href="/events" className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-[#003152]/30 text-[#003152] font-semibold rounded hover:bg-[#003152]/10 transition-all font-[family-name:var(--font-archivo)]">
              Upcoming Events
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
