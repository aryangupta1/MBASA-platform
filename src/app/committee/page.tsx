const executives = [
  {
    name: "Sheeren Khalifa",
    role: "President",
    desc: "Vision, positioning, partnerships. Owns advisory board + sponsors. Final decision-maker.",
  },
  {
    name: "Ben Khaydarov",
    role: "VP — Partnerships & Alliances",
    desc: "External co-ordination, strategic partnerships & channels. Internal–external alignment.",
  },
  {
    name: "Adam Holczer",
    role: "VP — Operations",
    desc: "Internal coordination. Ensures all teams are aligned and delivering.",
  },
  {
    name: "Mae Palafox",
    role: "General Secretary",
    desc: "Operations backbone — documentation, comms, governance. Keeps everything organised.",
  },
];

const departments = [
  {
    name: "Finance",
    lead: "Undecided",
    roles: ["Finance Officer"],
    focus: "Budget tracking, payments, funding coordination.",
  },
  {
    name: "Tech",
    lead: "Undecided",
    roles: ["IT Officer"],
    focus: "Platform management, digital infrastructure, technical support.",
  },
  {
    name: "Operations",
    lead: "Undecided",
    roles: ["Events Manager", "Events Coordinator", "Program Lead"],
    focus: "Owns ALL events. Responsible for execution quality.",
  },
  {
    name: "Marketing",
    lead: "Undecided",
    roles: ["Social Media Officer", "Design + Branding", "Content & Comms Officer"],
    focus: "Brand + growth. Owns LinkedIn presence.",
  },
  {
    name: "External Relations",
    lead: "Undecided",
    roles: ["Partnerships Officer", "Careers / Opportunities Lead", "Alumni Relations Lead", "Advisory Board (per stream)"],
    focus: "Sponsors, alumni relations, recruiters, companies, startup connections.",
  },
  {
    name: "Community & Student Experience",
    lead: "Undecided",
    roles: ["Buddy System Lead", "Feedback & Experience Officer", "Student Representative(s)"],
    focus: "Engagement + retention. Voice of the students.",
  },
];

export default function Committee() {
  return (
    <>
      {/* HERO */}
      <section className="bg-[#003152] pt-28 pb-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <p className="text-[#89cff0]/60 text-xs uppercase tracking-[0.2em] font-semibold mb-4 font-[family-name:var(--font-archivo)]">
            Committee
          </p>
          <h1 className="font-[family-name:var(--font-baskerville)] font-semibold text-white text-5xl sm:text-6xl tracking-[-0.04em] leading-tight mb-6">
            The people who <span className="text-[#89cff0]">make it happen.</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl leading-relaxed font-[family-name:var(--font-archivo)]">
            A student-led committee of MBA professionals — driving the MBASA mission across every pillar of the organisation.
          </p>
        </div>
      </section>

      {/* EXECUTIVE COMMITTEE */}
      <section className="py-20 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <p className="text-[#003152]/40 text-xs uppercase tracking-[0.25em] font-semibold mb-3 font-[family-name:var(--font-archivo)]">Leadership</p>
            <h2 className="font-[family-name:var(--font-baskerville)] font-semibold text-[#003152] text-4xl sm:text-5xl tracking-[-0.04em]">Executive Committee</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {executives.map(({ name, role, desc }) => (
              <div key={name} className="rounded-2xl bg-white border border-[#003152]/10 p-7 hover:border-[#89cff0] hover:shadow-md transition-all">
                <div className="w-14 h-14 rounded-full bg-[#003152] flex items-center justify-center mb-5">
                  <span className="font-[family-name:var(--font-baskerville)] font-semibold text-white text-xl">
                    {name.charAt(0)}
                  </span>
                </div>
                <h3 className="font-[family-name:var(--font-baskerville)] font-semibold text-[#003152] text-lg mb-1 leading-snug">{name}</h3>
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#003152]/40 mb-3 font-[family-name:var(--font-archivo)]">{role}</p>
                <p className="text-sm text-[#161617]/60 leading-relaxed font-[family-name:var(--font-archivo)]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEPARTMENTS */}
      <section className="py-20 bg-[#003152]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <p className="text-[#89cff0]/50 text-xs uppercase tracking-[0.25em] font-semibold mb-3 font-[family-name:var(--font-archivo)]">Organisational structure</p>
            <h2 className="font-[family-name:var(--font-baskerville)] font-semibold text-white text-4xl sm:text-5xl tracking-[-0.04em]">Departments</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {departments.map(({ name, lead, roles, focus }) => (
              <div key={name} className="rounded-xl border border-white/10 bg-white/5 p-7 hover:bg-white/8 transition-colors">
                <h3 className="font-[family-name:var(--font-baskerville)] font-semibold text-white text-xl mb-1">{name}</h3>
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#89cff0]/50 mb-3 font-[family-name:var(--font-archivo)]">Lead: {lead}</p>
                <p className="text-sm text-white/50 mb-5 leading-relaxed font-[family-name:var(--font-archivo)]">{focus}</p>
                <ul className="space-y-1.5">
                  {roles.map((r) => (
                    <li key={r} className="flex items-center gap-2 text-sm text-white/40 font-[family-name:var(--font-archivo)]">
                      <span className="w-1 h-1 rounded-full bg-[#89cff0]/30 inline-block shrink-0" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GET INVOLVED */}
      <section className="py-16 bg-[#89cff0]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-[family-name:var(--font-baskerville)] font-semibold text-[#003152] text-3xl sm:text-4xl tracking-[-0.04em] mb-4">
            Want to get involved?
          </h2>
          <p className="text-[#003152]/70 mb-7 font-[family-name:var(--font-archivo)]">
            We are always looking for motivated MBA students to join the committee. If you&apos;re interested in contributing to any department, reach out.
          </p>
          <a href="/contact" className="inline-flex items-center gap-2 px-7 py-3 bg-[#003152] text-white font-semibold rounded hover:bg-[#00253e] transition-colors font-[family-name:var(--font-archivo)]">
            Express Your Interest
          </a>
        </div>
      </section>
    </>
  );
}
