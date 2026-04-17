"use client";

import { useState } from "react";
import { LayoutGrid, GitFork, ChevronDown, ChevronRight, User } from "lucide-react";

/* ─── Data types ──────────────────────────────────────────────────── */
type OrgNode = {
  id: string;
  title: string;
  subtitle?: string;
  person?: string;
  accent?: boolean;           // highlights department heads
  children?: OrgNode[];
};

/* ─── Tree data — built directly from FigJam connectors ──────────── */
const orgTree: OrgNode = {
  id: "president",
  title: "President",
  person: "Sheeren Khalifa",
  subtitle: "Vision, positioning, partnerships. Owns advisory board + sponsors. Final decision-maker.",
  accent: true,
  children: [
    {
      id: "vp-partnerships",
      title: "VP — Partnerships & Alliances",
      person: "Ben Khaydarov",
      subtitle: "External co-ordination, strategic partnerships & channels. Internal–external alignment.",
      accent: true,
    },
    {
      id: "vp-operations",
      title: "VP — Operations",
      person: "Adam Holczer",
      subtitle: "Internal coordination. Ensures all teams are aligned and delivering.",
      accent: true,
    },
    {
      id: "general-sec",
      title: "General Secretary",
      person: "Mae Palafox",
      subtitle: "Operations backbone — documentation, comms, governance. Keeps everything organised.",
      accent: true,
    },
    {
      id: "finance",
      title: "Finance",
      subtitle: "Budget tracking, payments, funding coordination.",
      children: [
        { id: "finance-officer", title: "Finance Officer" },
      ],
    },
    {
      id: "tech",
      title: "Tech",
      subtitle: "Platform management, digital infrastructure, technical support.",
      children: [
        {
          id: "lead-swe",
          title: "Lead Software Engineer",
          person: "Aryan",
          subtitle: "Technical guidance on platform. Continuing to contribute technically.",
          children: [
            { id: "it-officer", title: "IT Officer" },
          ],
        },
      ],
    },
    {
      id: "operations-dept",
      title: "Operations",
      subtitle: "Owns ALL events. Responsible for execution quality.",
      children: [
        {
          id: "events-manager",
          title: "Events Manager",
          children: [
            { id: "events-coord", title: "Events Coordinator" },
          ],
        },
        { id: "program-lead", title: "Program Lead" },
      ],
    },
    {
      id: "marketing",
      title: "Marketing",
      subtitle: "Brand + growth. Owns LinkedIn presence.",
      children: [
        { id: "social-media", title: "Social Media Officer" },
        { id: "design", title: "Design + Branding" },
        { id: "content", title: "Content & Comms Officer" },
      ],
    },
    {
      id: "external",
      title: "External Relations",
      subtitle: "Sponsors, alumni relations, recruiters & companies, startup connections.",
      children: [
        { id: "partnerships-officer", title: "Partnerships Officer" },
        { id: "advisory-board", title: "Advisory Board", subtitle: "1 per stream: healthcare, finance" },
        { id: "careers-lead", title: "Careers / Opportunities Lead" },
        { id: "alumni-lead", title: "Alumni Relations Lead" },
      ],
    },
    {
      id: "community",
      title: "Community & Student Experience",
      subtitle: "Engagement + retention. Voice of the students.",
      children: [
        { id: "buddy-lead", title: "Buddy System Lead" },
        { id: "feedback-officer", title: "Feedback & Experience Officer" },
        { id: "student-reps", title: "Student Representative(s)" },
      ],
    },
  ],
};

/* ─── Recursive tree node ─────────────────────────────────────────── */
function TreeNode({ node, depth = 0 }: { node: OrgNode; depth?: number }) {
  const [expanded, setExpanded] = useState(depth < 2);
  const hasChildren = !!node.children?.length;
  const isRoot = depth === 0;
  const isDept = depth === 1 && !node.accent;

  return (
    <div className="flex flex-col items-center">
      {/* Connector line from parent */}
      {!isRoot && (
        <div className="w-px h-6 bg-[#003152]/20 dark:bg-[#89cff0]/20" />
      )}

      {/* Node card */}
      <div
        className={`relative rounded-xl border px-4 py-3 text-center transition-all duration-200 min-w-[140px] max-w-[180px]
          ${isRoot
            ? "bg-[#003152] dark:bg-[#003152] border-[#003152] text-white shadow-lg shadow-[#003152]/20 min-w-[180px]"
            : node.accent
              ? "bg-[#003152]/8 dark:bg-[#89cff0]/10 border-[#89cff0]/60 dark:border-[#89cff0]/40"
              : isDept
                ? "bg-[#89cff0]/10 dark:bg-[#89cff0]/10 border-[#89cff0]/40 dark:border-[#89cff0]/30"
                : "bg-white dark:bg-white/5 border-[#003152]/10 dark:border-white/10"
          }
          ${hasChildren ? "cursor-pointer hover:border-[#89cff0] hover:shadow-md" : ""}
        `}
        onClick={() => hasChildren && setExpanded(!expanded)}
        role={hasChildren ? "button" : undefined}
        aria-expanded={hasChildren ? expanded : undefined}
      >
        {/* Person name */}
        {node.person && (
          <div className={`flex items-center justify-center gap-1 mb-1 ${isRoot ? "text-[#89cff0]" : "text-[#003152]/50 dark:text-[#89cff0]/60"}`}>
            <User size={10} />
            <span className="text-[10px] font-semibold tracking-wide font-[family-name:var(--font-archivo)]">
              {node.person}
            </span>
          </div>
        )}

        {/* Title */}
        <p className={`font-[family-name:var(--font-baskerville)] font-semibold leading-tight text-sm
          ${isRoot ? "text-white" : "text-[#003152] dark:text-white"}`}
        >
          {node.title}
        </p>

        {/* Expand toggle indicator */}
        {hasChildren && (
          <div className={`mt-1.5 flex justify-center ${isRoot ? "text-[#89cff0]/60" : "text-[#003152]/30 dark:text-white/30"}`}>
            {expanded ? <ChevronDown size={12} /> : <ChevronRight size={12} />}
          </div>
        )}
      </div>

      {/* Children */}
      {hasChildren && expanded && (
        <>
          {/* Vertical line from node to horizontal bar */}
          <div className="w-px h-5 bg-[#003152]/20 dark:bg-[#89cff0]/20" />

          {/* Horizontal connector bar + children */}
          <div className="relative flex items-start gap-3">
            {/* Horizontal line spanning all children */}
            {node.children!.length > 1 && (
              <div
                className="absolute top-0 left-0 right-0 h-px bg-[#003152]/20 dark:bg-[#89cff0]/20"
                style={{ transform: "translateX(0)" }}
              />
            )}
            {node.children!.map((child) => (
              <TreeNode key={child.id} node={child} depth={depth + 1} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

/* ─── Grid view (original cards) ─────────────────────────────────── */
const executives = [
  { name: "Sheeren Khalifa", role: "President", desc: "Vision, positioning, partnerships. Owns advisory board + sponsors. Final decision-maker." },
  { name: "Ben Khaydarov", role: "VP — Partnerships & Alliances", desc: "External co-ordination, strategic partnerships & channels. Internal–external alignment." },
  { name: "Adam Holczer", role: "VP — Operations", desc: "Internal coordination. Ensures all teams are aligned and delivering." },
  { name: "Mae Palafox", role: "General Secretary", desc: "Operations backbone — documentation, comms, governance. Keeps everything organised." },
  { name: "Aryan", role: "Lead Software Engineer", desc: "Technical guidance on platform. Continuing to contribute technically as well." },
  { name: "Oviya Balamurugan", role: "Committee Member", desc: "Contributing to MBADTSA's digital and community initiatives." },
  { name: "Kanny P", role: "Committee Member", desc: "Contributing to MBADTSA's digital and community initiatives." },
];

const departments = [
  { name: "Finance", focus: "Budget tracking, payments, funding coordination.", roles: ["Finance Officer"] },
  { name: "Tech", focus: "Platform management, digital infrastructure, technical support.", roles: ["Lead Software Engineer: Aryan", "IT Officer"] },
  { name: "Operations", focus: "Owns ALL events. Responsible for execution quality.", roles: ["Events Manager", "Events Coordinator", "Program Lead"] },
  { name: "Marketing", focus: "Brand + growth. Owns LinkedIn presence.", roles: ["Social Media Officer", "Design + Branding", "Content & Comms Officer"] },
  { name: "External Relations", focus: "Sponsors, alumni relations, recruiters & companies, startup connections.", roles: ["Partnerships Officer", "Advisory Board (per stream)", "Careers / Opportunities Lead", "Alumni Relations Lead"] },
  { name: "Community & Student Experience", focus: "Engagement + retention. Voice of the students.", roles: ["Buddy System Lead", "Feedback & Experience Officer", "Student Representative(s)"] },
];

/* ─── Page ────────────────────────────────────────────────────────── */
export default function Committee() {
  const [view, setView] = useState<"grid" | "tree">("grid");

  return (
    <>
      {/* HERO */}
      <section className="bg-[#003152] dark:bg-[#001a2e] pt-28 pb-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <p className="text-[#89cff0]/60 text-xs uppercase tracking-[0.2em] font-semibold mb-4 font-[family-name:var(--font-archivo)]">
            Committee
          </p>
          <h1 className="font-[family-name:var(--font-baskerville)] font-semibold text-white text-5xl sm:text-6xl tracking-[-0.04em] leading-tight mb-6">
            The people who <span className="text-[#89cff0]">make it happen.</span>
          </h1>
          <p className="text-white/60 text-lg max-w-xl leading-relaxed font-[family-name:var(--font-archivo)]">
            A student-led committee of MBA professionals — driving the MBADTSA mission across every pillar of the organisation.
          </p>
        </div>
      </section>

      {/* EXECUTIVE COMMITTEE */}
      <section className="py-16 bg-[#fafafa] dark:bg-[#001a2e]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-12">
            <p className="text-[#003152]/40 dark:text-white/30 text-xs uppercase tracking-[0.25em] font-semibold mb-3 font-[family-name:var(--font-archivo)]">Leadership</p>
            <h2 className="font-[family-name:var(--font-baskerville)] font-semibold text-[#003152] dark:text-white text-4xl sm:text-5xl tracking-[-0.04em]">Executive Committee</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {executives.map(({ name, role, desc }) => (
              <div key={name} className="rounded-2xl bg-white dark:bg-white/5 border border-[#003152]/10 dark:border-white/10 p-7 hover:border-[#89cff0] hover:shadow-md transition-all">
                <div className="w-14 h-14 rounded-full bg-[#003152] dark:bg-[#003152] flex items-center justify-center mb-5">
                  <span className="font-[family-name:var(--font-baskerville)] font-semibold text-white text-xl">{name.charAt(0)}</span>
                </div>
                <h3 className="font-[family-name:var(--font-baskerville)] font-semibold text-[#003152] dark:text-white text-lg mb-1 leading-snug">{name}</h3>
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#003152]/40 dark:text-white/30 mb-3 font-[family-name:var(--font-archivo)]">{role}</p>
                <p className="text-sm text-[#161617]/60 dark:text-white/50 leading-relaxed font-[family-name:var(--font-archivo)]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ORGANISATIONAL STRUCTURE — toggle */}
      <section className="py-16 bg-white dark:bg-[#00253e]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          {/* Section header + toggle */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-12">
            <div>
              <p className="text-[#003152]/40 dark:text-[#89cff0]/50 text-xs uppercase tracking-[0.25em] font-semibold mb-2 font-[family-name:var(--font-archivo)]">
                Organisational structure
              </p>
              <h2 className="font-[family-name:var(--font-baskerville)] font-semibold text-[#003152] dark:text-white text-4xl tracking-[-0.04em]">
                Departments
              </h2>
            </div>

            {/* View toggle */}
            <div className="flex items-center gap-1 p-1 rounded-xl bg-[#003152]/5 dark:bg-white/5 border border-[#003152]/10 dark:border-white/10 self-start sm:self-auto">
              <button
                onClick={() => setView("grid")}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all font-[family-name:var(--font-archivo)]
                  ${view === "grid"
                    ? "bg-[#003152] dark:bg-[#89cff0] text-white dark:text-[#003152] shadow-sm"
                    : "text-[#003152]/50 dark:text-white/40 hover:text-[#003152] dark:hover:text-white"
                  }`}
              >
                <LayoutGrid size={14} /> Grid
              </button>
              <button
                onClick={() => setView("tree")}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all font-[family-name:var(--font-archivo)]
                  ${view === "tree"
                    ? "bg-[#003152] dark:bg-[#89cff0] text-white dark:text-[#003152] shadow-sm"
                    : "text-[#003152]/50 dark:text-white/40 hover:text-[#003152] dark:hover:text-white"
                  }`}
              >
                <GitFork size={14} /> Tree
              </button>
            </div>
          </div>

          {/* GRID VIEW */}
          {view === "grid" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {departments.map(({ name, focus, roles }) => (
                <div key={name} className="rounded-xl border border-[#003152]/10 dark:border-white/10 bg-[#fafafa] dark:bg-white/5 p-7 hover:border-[#89cff0] transition-colors">
                  <h3 className="font-[family-name:var(--font-baskerville)] font-semibold text-[#003152] dark:text-white text-xl mb-1">{name}</h3>
                  <p className="text-sm text-[#003152]/50 dark:text-[#89cff0]/70 mb-5 font-[family-name:var(--font-archivo)]">{focus}</p>
                  <ul className="space-y-1.5">
                    {roles.map((r) => (
                      <li key={r} className="flex items-center gap-2 text-sm text-[#161617]/50 dark:text-white/40 font-[family-name:var(--font-archivo)]">
                        <span className="w-1 h-1 rounded-full bg-[#89cff0]/50 dark:bg-[#89cff0]/40 inline-block shrink-0" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {/* TREE VIEW */}
          {view === "tree" && (
            <div>
              <p className="text-[#003152]/40 dark:text-white/30 text-xs text-center mb-8 font-[family-name:var(--font-archivo)]">
                Click any node with children to expand or collapse
              </p>
              <div className="overflow-x-auto pb-6">
                <div className="min-w-max mx-auto">
                  <TreeNode node={orgTree} depth={0} />
                </div>
              </div>
            </div>
          )}
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
