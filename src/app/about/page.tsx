import { Eye, Target, Unlock, Users, Zap, TrendingUp, ArrowRight } from "lucide-react";
import Link from "next/link";

/* Exact from FigJam "Brand Voice & Personality" section */
const values = [
  {
    icon: Unlock,
    word: "OPENNESS",
    quote: '"High standards, wide gates."',
    desc: "High standards are non-negotiable, but they must be accessible to everyone. Diversity of industry, background, and thought is our greatest asset.",
  },
  {
    icon: Target,
    word: "PRECISION",
    quote: '"We value your time as much as our own."',
    desc: "If it isn't useful, it doesn't exist. Every tool, event, or communication must provide immediate, tangible value to the student's career or academic journey.",
  },
  {
    icon: Eye,
    word: "VISION",
    quote: '"Always looking at the horizon of leadership, and what\'s next."',
    desc: "We are the bridge to what's next — encouraging students to look beyond the classroom to the frontiers of technology and leadership.",
  },
];

/* Exact from FigJam values text nodes */
const fullValues = [
  {
    title: "Community First & Inclusive Excellence",
    desc: "High standards are non-negotiable, but they must be accessible to everyone. Diversity of industry, background, and thought is our greatest asset.",
  },
  {
    title: "Radical Utility",
    desc: "If it isn't useful, it doesn't exist. Every tool, event, or communication must provide immediate, tangible value to the student's career or academic journey.",
  },
  {
    title: "Scalable Connectivity",
    desc: "We don't just build for this year's cohort; we build systems that grow. We focus on creating digital and physical links that outlast any single graduation date.",
  },
  {
    title: "Digital First Agility",
    desc: "Embracing new technologies and streamlined workflows to keep the association efficient, responsive, and modern.",
  },
  {
    title: "Shared Success",
    desc: "Your peer's win is your win. We foster an environment where networking is about mutual uplift, not just individual climbing.",
  },
  {
    title: "Professional Integrity",
    desc: "We represent the MBADTSA brand. Every interaction with alumni, partners, and the public reflects the caliber of our members.",
  },
  {
    title: "Boundary Pushing Innovation",
    desc: "We are the bridge to what's next. We encourage students to look beyond the classroom to the frontiers of technology and leadership.",
  },
];

export default function About() {
  return (
    <>
      {/* HERO */}
      <section className="bg-[#003152] pt-28 pb-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <p className="text-[#89cff0]/60 text-xs uppercase tracking-[0.2em] font-semibold mb-4 font-[family-name:var(--font-archivo)]">
            About MBADTSA
          </p>
          <h1 className="font-[family-name:var(--font-baskerville)] font-semibold text-white text-5xl sm:text-6xl leading-tight tracking-[-0.04em] mb-6">
            Who we are &amp;<br />
            <span className="text-[#89cff0]">why we exist.</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl leading-relaxed font-[family-name:var(--font-archivo)]">
            MBADTSA — the MBA Digital &amp; Tech Student Association — is the one-stop hub for student comms, connection, and opportunities.
          </p>
        </div>
      </section>

      {/* MISSION */}
      <section className="py-20 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-[#003152]/40 text-xs uppercase tracking-[0.25em] font-semibold mb-4 font-[family-name:var(--font-archivo)]">Our Mission</p>
            <h2 className="font-[family-name:var(--font-baskerville)] font-semibold text-[#003152] text-4xl leading-snug tracking-[-0.04em] mb-5">
              To create a digitally connected platform for MBA students and beyond.
            </h2>
            <p className="text-[#161617]/60 text-base leading-relaxed mb-4 font-[family-name:var(--font-archivo)]">
              MBADTSA helps digital students navigate the business world and beyond — connecting students where information lives in one place, buddying students to learn from each other, and providing continuing education after the program.
            </p>
            <p className="text-[#161617]/60 text-base leading-relaxed mb-6 font-[family-name:var(--font-archivo)]">
              We are the one-stop hub for student comms, connection, and opportunities — built to scale across cohorts and collaborate with other MBA bodies.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-semibold text-[#003152] hover:text-[#89cff0] transition-colors font-[family-name:var(--font-archivo)]">
              Get Involved <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { stat: "50+", label: "Active Members" },
              { stat: "3", label: "Core Pillars" },
              { stat: "6", label: "Departments" },
              { stat: "1", label: "Community Hub" },
            ].map(({ stat, label }) => (
              <div key={label} className="rounded-2xl bg-[#003152] p-6 flex flex-col">
                <span className="font-[family-name:var(--font-baskerville)] text-4xl font-semibold text-white mb-1">{stat}</span>
                <span className="text-[#89cff0]/60 text-sm font-[family-name:var(--font-archivo)]">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE DO — FigJam "Core" section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-12">
            <p className="text-[#003152]/40 text-xs uppercase tracking-[0.25em] font-semibold mb-3 font-[family-name:var(--font-archivo)]">What we do</p>
            <h2 className="font-[family-name:var(--font-baskerville)] font-semibold text-[#003152] text-4xl sm:text-5xl tracking-[-0.04em]">How we help</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              { title: "Information in one place", desc: "USYD info, exams, starter guides, timetables, free apps, tools to help students become more digitally aware — all centralised." },
              { title: "Buddy system", desc: "Pairing students with similar goals and interests to learn from each other across cohorts, industries, and backgrounds." },
              { title: "Career momentum", desc: "Workshops, panels, and practical skill building to give students tangible career advantage during and after the MBA." },
              { title: "Beyond the cohort", desc: "Links to alumni, partners, and other MBA communities — connecting students to what already exists and what's next." },
            ].map(({ title, desc }) => (
              <div key={title} className="rounded-xl bg-[#fafafa] border border-[#003152]/10 p-7 hover:border-[#89cff0] transition-colors">
                <h3 className="font-[family-name:var(--font-baskerville)] font-semibold text-[#003152] text-lg mb-2">{title}</h3>
                <p className="text-sm text-[#161617]/60 leading-relaxed font-[family-name:var(--font-archivo)]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES — 3 core brand values from FigJam */}
      <section className="py-20 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <p className="text-[#003152]/40 text-xs uppercase tracking-[0.25em] font-semibold mb-3 font-[family-name:var(--font-archivo)]">Brand voice &amp; personality</p>
            <h2 className="font-[family-name:var(--font-baskerville)] font-semibold text-[#003152] text-4xl sm:text-5xl tracking-[-0.04em]">Our Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map(({ icon: Icon, word, quote, desc }) => (
              <div key={word} className="rounded-2xl bg-white border border-[#003152]/10 p-8 hover:border-[#89cff0] transition-colors">
                <div className="w-11 h-11 rounded-xl bg-[#003152]/5 flex items-center justify-center mb-5">
                  <Icon size={20} className="text-[#003152]" />
                </div>
                <h3 className="font-[family-name:var(--font-baskerville)] font-semibold text-[#003152] text-2xl mb-2 tracking-tight">{word}</h3>
                <p className="text-sm italic text-[#003152]/50 font-semibold mb-4 font-[family-name:var(--font-archivo)]">{quote}</p>
                <p className="text-sm text-[#161617]/60 leading-relaxed font-[family-name:var(--font-archivo)]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FULL VALUES — detailed from FigJam text blocks */}
      <section className="py-20 bg-[#003152]">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-12">
            <p className="text-[#89cff0]/50 text-xs uppercase tracking-[0.25em] font-semibold mb-3 font-[family-name:var(--font-archivo)]">In full</p>
            <h2 className="font-[family-name:var(--font-baskerville)] font-semibold text-white text-4xl tracking-[-0.04em]">What we believe</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {fullValues.map(({ title, desc }) => (
              <div key={title} className="rounded-xl border border-white/10 bg-white/5 p-6">
                <h4 className="font-[family-name:var(--font-baskerville)] font-semibold text-white text-base mb-2">{title}</h4>
                <p className="text-white/50 text-sm leading-relaxed font-[family-name:var(--font-archivo)]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="py-20 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <p className="text-[#003152]/40 text-xs uppercase tracking-[0.25em] font-semibold mb-3 font-[family-name:var(--font-archivo)]">The solution</p>
            <h2 className="font-[family-name:var(--font-baskerville)] font-semibold text-[#003152] text-4xl sm:text-5xl tracking-[-0.04em]">Connect. Elevate. Scale.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Users, label: "High Signal Community", tag: "CONNECT.", desc: "Community First, Inclusive Excellence, Shared Success" },
              { icon: Zap, label: "Engineered Utility", tag: "ELEVATE.", desc: "Radical Utility, Digital-First Agility" },
              { icon: TrendingUp, label: "Enduring Impact", tag: "SCALE.", desc: "Scalable Connectivity, Professional Integrity, Innovation" },
            ].map(({ icon: Icon, label, tag, desc }) => (
              <div key={label} className="rounded-2xl bg-white border border-[#003152]/10 p-8 text-center hover:border-[#89cff0] transition-colors">
                <div className="w-12 h-12 rounded-full bg-[#003152]/5 flex items-center justify-center mx-auto mb-5">
                  <Icon size={22} className="text-[#003152]" />
                </div>
                <p className="text-xs font-bold uppercase tracking-widest text-[#003152]/40 mb-1 font-[family-name:var(--font-archivo)]">{tag}</p>
                <h3 className="font-[family-name:var(--font-baskerville)] font-semibold text-[#003152] text-xl mb-3">{label}</h3>
                <p className="text-sm text-[#161617]/60 leading-relaxed font-[family-name:var(--font-archivo)]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#89cff0]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-[family-name:var(--font-baskerville)] font-semibold text-[#003152] text-3xl sm:text-4xl tracking-[-0.04em] mb-4">
            Ready to be part of this?
          </h2>
          <p className="text-[#003152]/70 mb-7 font-[family-name:var(--font-archivo)]">
            Join a community of MBA students committed to digital excellence, shared growth, and enduring impact.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3 bg-[#003152] text-white font-semibold rounded hover:bg-[#00253e] transition-colors font-[family-name:var(--font-archivo)]">
            Get Involved
          </Link>
        </div>
      </section>
    </>
  );
}
