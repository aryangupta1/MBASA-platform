import Link from "next/link";
import { Star, Award, Gem } from "lucide-react";

const tiers = [
  {
    icon: Star,
    name: "Community Partner",
    tagline: "Build brand awareness",
    perks: [
      "Logo on MBASA website",
      "Social media mention",
      "Access to member events",
      "Newsletter feature",
    ],
  },
  {
    icon: Award,
    name: "Strategic Partner",
    tagline: "Deep talent engagement",
    featured: true,
    perks: [
      "All Community benefits",
      "Dedicated recruitment slot",
      "Co-branded event hosting",
      "Access to CV bank",
      "Exclusive speaker slot",
    ],
  },
  {
    icon: Gem,
    name: "Platinum Ally",
    tagline: "Exclusive, high-impact presence",
    perks: [
      "All Strategic benefits",
      "Priority placement at events",
      "Custom collaboration projects",
      "First access to graduating cohort",
      "Co-created content series",
      "Executive roundtable access",
    ],
  },
];

export default function Partners() {
  return (
    <>
      {/* HERO */}
      <section className="bg-[#003152] pt-28 pb-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <p className="text-[#89cff0]/60 text-xs uppercase tracking-[0.2em] font-semibold mb-4 font-[family-name:var(--font-archivo)]">
            Partners
          </p>
          <h1 className="font-[family-name:var(--font-baskerville)] font-semibold text-white text-5xl sm:text-6xl tracking-[-0.04em] leading-tight mb-6">
            Partner with <span className="text-[#89cff0]">MBASA.</span>
          </h1>
          <p className="text-white/60 text-lg max-w-xl leading-relaxed font-[family-name:var(--font-archivo)]">
            Access a diverse, elite talent pool of MBA candidates at the intersection of business, technology, and innovation.
          </p>
        </div>
      </section>

      {/* WHY PARTNER */}
      <section className="py-20 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <p className="text-[#003152]/50 text-xs uppercase tracking-[0.2em] font-semibold mb-3 font-[family-name:var(--font-archivo)]">The value</p>
            <h2 className="font-[family-name:var(--font-baskerville)] font-semibold text-[#003152] text-4xl sm:text-5xl tracking-[-0.04em]">Why partner with MBASA?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Elite talent pipeline", desc: "Direct access to high-calibre MBA candidates with deep expertise in digital transformation, strategy, and innovation." },
              { title: "Authentic engagement", desc: "MBASA is student-led — our partnerships are genuine, purposeful, and visible to a community that trusts our curation." },
              { title: "Scalable reach", desc: "Our platform is built to grow. Partner once, benefit across multiple cohorts, programs, and campus channels." },
            ].map(({ title, desc }) => (
              <div key={title} className="rounded-2xl bg-white border border-[#003152]/10 p-8 hover:border-[#89cff0] transition-colors">
                <h3 className="font-[family-name:var(--font-baskerville)] font-semibold text-[#003152] text-xl mb-3">{title}</h3>
                <p className="text-sm text-[#161617]/60 leading-relaxed font-[family-name:var(--font-archivo)]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIERS */}
      <section className="py-20 bg-[#003152]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <p className="text-[#89cff0]/60 text-xs uppercase tracking-[0.2em] font-semibold mb-3 font-[family-name:var(--font-archivo)]">Partnership tiers</p>
            <h2 className="font-[family-name:var(--font-baskerville)] font-semibold text-white text-4xl sm:text-5xl tracking-[-0.04em]">Choose your tier</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tiers.map(({ icon: Icon, name, tagline, perks, featured }) => (
              <div
                key={name}
                className={`rounded-2xl p-8 border transition-all ${
                  featured
                    ? "bg-[#89cff0] border-[#89cff0]"
                    : "bg-white/5 border-white/10 hover:bg-white/8"
                }`}
              >
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 ${featured ? "bg-[#003152]/10" : "bg-[#89cff0]/10"}`}>
                  <Icon size={20} className={featured ? "text-[#003152]" : "text-[#89cff0]"} />
                </div>
                <h3 className={`font-[family-name:var(--font-baskerville)] font-semibold text-2xl mb-1 ${featured ? "text-[#003152]" : "text-white"}`}>{name}</h3>
                <p className={`text-xs font-semibold uppercase tracking-wider mb-6 font-[family-name:var(--font-archivo)] ${featured ? "text-[#003152]/70" : "text-[#89cff0]/70"}`}>{tagline}</p>
                <ul className="space-y-2.5">
                  {perks.map((p) => (
                    <li key={p} className={`flex items-start gap-2 text-sm font-[family-name:var(--font-archivo)] ${featured ? "text-[#003152]/80" : "text-white/60"}`}>
                      <span className={`mt-1.5 w-1 h-1 rounded-full shrink-0 ${featured ? "bg-[#003152]" : "bg-[#89cff0]/50"}`} />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3 bg-[#89cff0] text-[#003152] font-semibold rounded hover:bg-[#b3dff5] transition-colors font-[family-name:var(--font-archivo)]">
              Enquire about partnering
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
