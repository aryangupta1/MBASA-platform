import { BookOpen, Trophy, Globe, GraduationCap, Coffee } from "lucide-react";

/* Exact event types from FigJam "Paid events" section */
const upskilling = [
  { name: "Workshops & Panels", desc: "Practical skill-building sessions with industry experts — no fluff, immediate career value." },
  { name: "How to Use Different Tools?", desc: "Hands-on sessions teaching digital tools relevant to MBA careers in tech, finance, and consulting." },
  { name: "Applications — Do's & Don'ts", desc: "Practical guidance on applying for roles, internships, and graduate programs from those who've done it." },
  { name: "Interview Skills", desc: "Mock interviews, frameworks, and feedback sessions to prepare students for competitive roles." },
  { name: "Resume Building", desc: "CV workshops tailored to MBA graduates entering digital and tech-adjacent industries." },
  { name: "Potential Electives Stream", desc: "Supplementary academic content and elective-style learning pathways for MBA students." },
];

const socialising = [
  { name: "Corporate Cocktails", desc: "Curated professional networking events in a social setting — where real connections are made." },
  { name: "Online Socialising Mixers", desc: "Virtual mixers designed to foster connection across cohorts and time zones." },
  { name: "Trivia Nights (with prizes!)", desc: "Team trivia with prizes — a fun, competitive way to meet people outside your group." },
  { name: "Business Gala / Boat Party", desc: "Flagship social events for the whole cohort — digitised and professionally organised." },
  { name: "Movie Nights", desc: "Relaxed community watch events building cohort culture beyond the classroom." },
  { name: "Wellness Month Competitions", desc: "Student wellbeing initiatives and friendly challenges during key stress periods." },
];

const competitions = [
  { name: "Faculty Case Competition", desc: "An MBADTSA-organised case competition open to the full MBA cohort, testing strategy and execution." },
  { name: "Digital-Focused National Competition", desc: "Inspired by existing national competitions — a digital and tech focused challenge for MBA students across Australia." },
  { name: "Student Focus Groups", desc: "Collaborative problem-solving sessions where students work on real briefs from industry partners." },
];

export default function Events() {
  return (
    <>
      {/* HERO */}
      <section className="bg-[#003152] pt-28 pb-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <p className="text-[#89cff0]/60 text-xs uppercase tracking-[0.2em] font-semibold mb-4 font-[family-name:var(--font-archivo)]">
            Events
          </p>
          <h1 className="font-[family-name:var(--font-baskerville)] font-semibold text-white text-5xl sm:text-6xl tracking-[-0.04em] leading-tight mb-6">
            Events that <span className="text-[#89cff0]">elevate.</span>
          </h1>
          <p className="text-white/60 text-lg max-w-xl leading-relaxed font-[family-name:var(--font-archivo)]">
            Every MBADTSA event is designed to provide immediate, tangible value — no fluff, just high-signal experiences. Pushing for more online events.
          </p>
        </div>
      </section>

      {/* UPCOMING */}
      <section className="py-16 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-12">
            <p className="text-[#003152]/40 text-xs uppercase tracking-[0.25em] font-semibold mb-3 font-[family-name:var(--font-archivo)]">What&apos;s on</p>
            <h2 className="font-[family-name:var(--font-baskerville)] font-semibold text-[#003152] text-4xl sm:text-5xl tracking-[-0.04em]">Upcoming Events</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { tag: "Upskilling", title: "AI for Business Leaders", date: "May 2025", desc: "Hands-on workshop exploring practical AI applications for non-technical MBA students entering tech-adjacent roles." },
              { tag: "Case Competition", title: "MBADTSA Strategy Hackathon", date: "June 2025", desc: "A 48-hour case competition challenging teams to develop go-to-market strategies for an early-stage tech startup." },
              { tag: "Corporate Cocktails", title: "Alumni Connect Evening", date: "June 2025", desc: "A curated networking evening with MBADTSA alumni working across fintech, consulting, and product management." },
              { tag: "Digital Event", title: "Startup Founders Panel", date: "July 2025", desc: "Virtual fireside chat with three MBA graduates who built funded startups within five years of graduation." },
              { tag: "Orientation", title: "New Cohort Welcome & Mixer", date: "August 2025", desc: "The official onboarding experience — platform tour, team introductions, breakout rooms and social mixer." },
              { tag: "Business Gala", title: "MBADTSA End of Year Gala", date: "November 2025", desc: "Our flagship annual event celebrating the cohort — professionally organised and thoroughly memorable." },
            ].map(({ tag, title, date, desc }) => (
              <div key={title} className="rounded-2xl bg-white border border-[#003152]/10 p-6 hover:border-[#89cff0] hover:shadow-md transition-all">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#003152]/40 font-[family-name:var(--font-archivo)]">{tag}</span>
                  <span className="text-xs text-[#003152]/40 font-[family-name:var(--font-archivo)]">{date}</span>
                </div>
                <h3 className="font-[family-name:var(--font-baskerville)] font-semibold text-[#003152] text-lg mb-3 leading-snug">{title}</h3>
                <p className="text-sm text-[#161617]/60 leading-relaxed font-[family-name:var(--font-archivo)]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UPSKILLING */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-10 h-10 rounded-xl bg-[#003152] flex items-center justify-center">
              <BookOpen size={18} className="text-[#89cff0]" />
            </div>
            <div>
              <p className="text-[#003152]/40 text-[10px] uppercase tracking-widest font-semibold font-[family-name:var(--font-archivo)]">Category</p>
              <h2 className="font-[family-name:var(--font-baskerville)] font-semibold text-[#003152] text-3xl tracking-[-0.03em]">Upskilling</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {upskilling.map(({ name, desc }) => (
              <div key={name} className="rounded-xl bg-[#fafafa] border border-[#003152]/10 p-6 hover:border-[#89cff0] transition-colors">
                <h3 className="font-[family-name:var(--font-baskerville)] font-semibold text-[#003152] text-base mb-2">{name}</h3>
                <p className="text-sm text-[#161617]/60 leading-relaxed font-[family-name:var(--font-archivo)]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOCIALISING */}
      <section className="py-16 bg-[#003152]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-10 h-10 rounded-xl bg-[#89cff0]/10 flex items-center justify-center">
              <Coffee size={18} className="text-[#89cff0]" />
            </div>
            <div>
              <p className="text-[#89cff0]/40 text-[10px] uppercase tracking-widest font-semibold font-[family-name:var(--font-archivo)]">Category</p>
              <h2 className="font-[family-name:var(--font-baskerville)] font-semibold text-white text-3xl tracking-[-0.03em]">Socialising</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {socialising.map(({ name, desc }) => (
              <div key={name} className="rounded-xl border border-white/10 bg-white/5 p-6 hover:bg-white/8 transition-colors">
                <h3 className="font-[family-name:var(--font-baskerville)] font-semibold text-white text-base mb-2">{name}</h3>
                <p className="text-sm text-white/50 leading-relaxed font-[family-name:var(--font-archivo)]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPETITIONS */}
      <section className="py-16 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-10 h-10 rounded-xl bg-[#003152]/5 flex items-center justify-center">
              <Trophy size={18} className="text-[#003152]" />
            </div>
            <div>
              <p className="text-[#003152]/40 text-[10px] uppercase tracking-widest font-semibold font-[family-name:var(--font-archivo)]">Category</p>
              <h2 className="font-[family-name:var(--font-baskerville)] font-semibold text-[#003152] text-3xl tracking-[-0.03em]">Competitions</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {competitions.map(({ name, desc }) => (
              <div key={name} className="rounded-xl bg-white border border-[#003152]/10 p-6 hover:border-[#89cff0] transition-colors">
                <h3 className="font-[family-name:var(--font-baskerville)] font-semibold text-[#003152] text-base mb-2">{name}</h3>
                <p className="text-sm text-[#161617]/60 leading-relaxed font-[family-name:var(--font-archivo)]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ORIENTATION + DIGITAL */}
      <section className="py-16 bg-[#003152]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
              <div className="w-10 h-10 rounded-xl bg-[#89cff0]/10 flex items-center justify-center mb-5">
                <GraduationCap size={18} className="text-[#89cff0]" />
              </div>
              <h3 className="font-[family-name:var(--font-baskerville)] font-semibold text-white text-xl mb-3">Orientation</h3>
              <p className="text-white/50 text-sm mb-4 font-[family-name:var(--font-archivo)]">Online mixer and cocktail — part of orientation. Students break into breakout rooms to get to know each other. Ice breakers and trivia to get people comfortable. Representatives act as a feedback channel to teachers and program directors.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
              <div className="w-10 h-10 rounded-xl bg-[#89cff0]/10 flex items-center justify-center mb-5">
                <Globe size={18} className="text-[#89cff0]" />
              </div>
              <h3 className="font-[family-name:var(--font-baskerville)] font-semibold text-white text-xl mb-3">Digital Events</h3>
              <p className="text-white/50 text-sm mb-4 font-[family-name:var(--font-archivo)]">MBADTSA is pushing for more online events — webinars, virtual panels, and digital socials accessible across locations and time zones. From podcast-style student interviews to online business showcases.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
