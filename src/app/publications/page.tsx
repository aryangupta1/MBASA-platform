import { FileText, ExternalLink, PenLine, Users2, Award } from "lucide-react";

/* FigJam "publications" section content */
const publicationTypes = [
  {
    icon: FileText,
    title: "Journal & Newsletter",
    desc: "A certified student journal and regular newsletter — open eventually to MBA students from other universities and programs. Inspired by APSJ (pharmacy students journal).",
  },
  {
    icon: PenLine,
    title: "Opinion Pieces",
    desc: "Student-authored opinion pieces on digital transformation, business strategy, technology trends, and MBA life.",
  },
  {
    icon: Award,
    title: "Class Blogs",
    desc: "Exemplary blogs and written work from MBA courses, curated and published with student consent.",
  },
  {
    icon: Users2,
    title: "Volunteer Editorial Board",
    desc: "Students who get involved receive official certification for their editorial work — building credentials while contributing to the community.",
  },
];

const articles = [
  {
    category: "Feature",
    title: "AI for Business Leaders: What MBAs Need to Know",
    date: "April 2025",
    desc: "An in-depth look at how MBA students can leverage AI tools to accelerate decision-making and build competitive advantage in tech-adjacent roles.",
  },
  {
    category: "Opinion",
    title: "Why Digital Health Is the Blind Spot of Most MBA Programs",
    date: "March 2025",
    desc: "A student opinion piece on the gap between MBA curricula and the booming digital health industry — and how MBASA is bridging it.",
  },
  {
    category: "Newsletter",
    title: "MBASA Monthly — Issue 1",
    date: "February 2025",
    desc: "Inaugural newsletter: platform launch, upcoming events, committee introductions, and a spotlight on MBASA founding members.",
  },
  {
    category: "Guide",
    title: "The Digital MBA Career Navigator",
    date: "January 2025",
    desc: "A practical guide for MBA students looking to transition into product management, digital strategy, and technology leadership roles.",
  },
  {
    category: "Interview",
    title: "Founder Spotlight: Building Post-MBA",
    date: "December 2024",
    desc: "Podcast-style interview with an MBASA alumni who built a funded health-tech startup within three years of graduation.",
  },
  {
    category: "Research",
    title: "MBA Digital Skills Gap Report 2025",
    date: "November 2024",
    desc: "Data-driven research on the most in-demand digital competencies for MBA graduates entering the Australian technology sector.",
  },
];

export default function Publications() {
  return (
    <>
      {/* HERO */}
      <section className="bg-[#003152] pt-28 pb-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <p className="text-[#89cff0]/60 text-xs uppercase tracking-[0.2em] font-semibold mb-4 font-[family-name:var(--font-archivo)]">
            Publications
          </p>
          <h1 className="font-[family-name:var(--font-baskerville)] font-semibold text-white text-5xl sm:text-6xl tracking-[-0.04em] leading-tight mb-6">
            Insights, ideas &amp;<br className="hidden sm:block" /> <span className="text-[#89cff0]">certified work.</span>
          </h1>
          <p className="text-white/60 text-lg max-w-xl leading-relaxed font-[family-name:var(--font-archivo)]">
            Research, guides, opinion pieces, and newsletters curated for MBA students navigating the digital and technology landscape. Eventually open to MBA students from other universities.
          </p>
        </div>
      </section>

      {/* WHAT WE PUBLISH */}
      <section className="py-16 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-12">
            <p className="text-[#003152]/40 text-xs uppercase tracking-[0.25em] font-semibold mb-3 font-[family-name:var(--font-archivo)]">What we publish</p>
            <h2 className="font-[family-name:var(--font-baskerville)] font-semibold text-[#003152] text-4xl sm:text-5xl tracking-[-0.04em]">Publication Types</h2>
            <p className="text-[#161617]/50 mt-4 text-base max-w-xl mx-auto font-[family-name:var(--font-archivo)]">
              Students who contribute receive official certification for their work — a credential that travels with you beyond graduation.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {publicationTypes.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-2xl bg-white border border-[#003152]/10 p-7 hover:border-[#89cff0] hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-xl bg-[#003152]/5 flex items-center justify-center mb-5">
                  <Icon size={18} className="text-[#003152]" />
                </div>
                <h3 className="font-[family-name:var(--font-baskerville)] font-semibold text-[#003152] text-base mb-2">{title}</h3>
                <p className="text-sm text-[#161617]/60 leading-relaxed font-[family-name:var(--font-archivo)]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ARTICLES */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-12">
            <p className="text-[#003152]/40 text-xs uppercase tracking-[0.25em] font-semibold mb-3 font-[family-name:var(--font-archivo)]">Latest issues</p>
            <h2 className="font-[family-name:var(--font-baskerville)] font-semibold text-[#003152] text-4xl sm:text-5xl tracking-[-0.04em]">Recent Publications</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map(({ category, title, date, desc }) => (
              <div key={title} className="group rounded-2xl bg-[#fafafa] border border-[#003152]/10 p-7 hover:border-[#89cff0] hover:shadow-md transition-all cursor-pointer">
                <div className="flex items-center justify-between mb-5">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#003152]/5 text-[10px] font-bold uppercase tracking-widest text-[#003152]/50 font-[family-name:var(--font-archivo)]">
                    <FileText size={10} />
                    {category}
                  </span>
                  <span className="text-xs text-[#003152]/40 font-[family-name:var(--font-archivo)]">{date}</span>
                </div>
                <h3 className="font-[family-name:var(--font-baskerville)] font-semibold text-[#003152] text-lg mb-3 leading-snug">{title}</h3>
                <p className="text-sm text-[#161617]/60 leading-relaxed mb-5 font-[family-name:var(--font-archivo)]">{desc}</p>
                <div className="flex items-center gap-1.5 text-xs font-semibold text-[#003152]/40 group-hover:text-[#003152] group-hover:gap-2 transition-all font-[family-name:var(--font-archivo)]">
                  Read more <ExternalLink size={11} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GET INVOLVED — volunteer editors */}
      <section className="py-16 bg-[#003152]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-[#89cff0]/50 text-xs uppercase tracking-[0.25em] font-semibold mb-4 font-[family-name:var(--font-archivo)]">Get involved</p>
              <h2 className="font-[family-name:var(--font-baskerville)] font-semibold text-white text-4xl tracking-[-0.04em] mb-5">
                Volunteer editors wanted.
              </h2>
              <p className="text-white/60 leading-relaxed mb-4 font-[family-name:var(--font-archivo)]">
                MBASA Publications is building a proper editorial board. Volunteer editors gain official certification for their work — a credential that travels with you beyond graduation.
              </p>
              <p className="text-white/40 text-sm font-[family-name:var(--font-archivo)]">
                We also welcome contributions: opinion pieces, class blogs, research summaries, and career guides. If you have a story worth telling, we want to publish it.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              {[
                { role: "Editor", desc: "Review and edit submitted articles before publication." },
                { role: "Writer / Contributor", desc: "Submit opinion pieces, guides, or research summaries." },
                { role: "Design & Layout", desc: "Help design the journal layout and visual identity." },
              ].map(({ role, desc }) => (
                <div key={role} className="rounded-xl border border-white/10 bg-white/5 p-5">
                  <h4 className="font-[family-name:var(--font-baskerville)] font-semibold text-white text-base mb-1">{role}</h4>
                  <p className="text-sm text-white/50 font-[family-name:var(--font-archivo)]">{desc}</p>
                </div>
              ))}
              <a href="/contact" className="mt-2 inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#89cff0] text-[#003152] font-semibold rounded hover:bg-[#b3dff5] transition-colors font-[family-name:var(--font-archivo)]">
                Express Your Interest
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
