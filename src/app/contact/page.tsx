"use client";

import { useState } from "react";
import { Mail, Linkedin, Instagram, Send } from "lucide-react";

const reasons = [
  "General Enquiry",
  "Join MBASA",
  "Partnership / Sponsorship",
  "Event Collaboration",
  "Publications",
  "Media / Press",
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", reason: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* HERO */}
      <section className="bg-[#003152] pt-28 pb-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <p className="text-[#89cff0]/60 text-xs uppercase tracking-[0.2em] font-semibold mb-4 font-[family-name:var(--font-archivo)]">
            Contact
          </p>
          <h1 className="font-[family-name:var(--font-baskerville)] font-semibold text-white text-5xl sm:text-6xl tracking-[-0.04em] leading-tight mb-6">
            Get in <span className="text-[#89cff0]">touch.</span>
          </h1>
          <p className="text-white/60 text-lg max-w-xl leading-relaxed font-[family-name:var(--font-archivo)]">
            Whether you&apos;re a student, partner, or potential collaborator — we&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* FORM + INFO */}
      <section className="py-20 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* Form */}
          <div className="lg:col-span-2">
            {submitted ? (
              <div className="rounded-2xl bg-white border border-[#89cff0] p-12 text-center">
                <div className="w-14 h-14 rounded-full bg-[#89cff0]/10 flex items-center justify-center mx-auto mb-5">
                  <Send size={24} className="text-[#003152]" />
                </div>
                <h2 className="font-[family-name:var(--font-baskerville)] font-semibold text-[#003152] text-2xl mb-3">Message sent!</h2>
                <p className="text-[#161617]/60 font-[family-name:var(--font-archivo)]">Thanks for reaching out — we&apos;ll get back to you shortly.</p>
              </div>
            ) : (
              <div className="rounded-2xl bg-white border border-[#003152]/10 p-8">
                <h2 className="font-[family-name:var(--font-baskerville)] font-semibold text-[#003152] text-2xl mb-7">Send us a message</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#003152]/60 uppercase tracking-wider mb-2 font-[family-name:var(--font-archivo)]">
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Your name"
                        className="w-full px-4 py-3 rounded-lg border border-[#003152]/15 bg-[#fafafa] text-[#161617] text-sm focus:outline-none focus:border-[#89cff0] transition-colors font-[family-name:var(--font-archivo)]"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#003152]/60 uppercase tracking-wider mb-2 font-[family-name:var(--font-archivo)]">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 rounded-lg border border-[#003152]/15 bg-[#fafafa] text-[#161617] text-sm focus:outline-none focus:border-[#89cff0] transition-colors font-[family-name:var(--font-archivo)]"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#003152]/60 uppercase tracking-wider mb-2 font-[family-name:var(--font-archivo)]">
                      Reason for contact
                    </label>
                    <select
                      required
                      className="w-full px-4 py-3 rounded-lg border border-[#003152]/15 bg-[#fafafa] text-[#161617] text-sm focus:outline-none focus:border-[#89cff0] transition-colors font-[family-name:var(--font-archivo)]"
                      value={form.reason}
                      onChange={(e) => setForm({ ...form, reason: e.target.value })}
                    >
                      <option value="">Select a reason...</option>
                      {reasons.map((r) => (
                        <option key={r} value={r}>{r}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#003152]/60 uppercase tracking-wider mb-2 font-[family-name:var(--font-archivo)]">
                      Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Tell us more..."
                      className="w-full px-4 py-3 rounded-lg border border-[#003152]/15 bg-[#fafafa] text-[#161617] text-sm focus:outline-none focus:border-[#89cff0] transition-colors resize-none font-[family-name:var(--font-archivo)]"
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-[#003152] text-white font-semibold rounded-lg hover:bg-[#00253e] transition-colors font-[family-name:var(--font-archivo)]"
                  >
                    Send Message <Send size={15} />
                  </button>
                </form>
              </div>
            )}
          </div>

          {/* Info */}
          <div className="flex flex-col gap-5">
            <div className="rounded-2xl bg-[#003152] p-7">
              <h3 className="font-[family-name:var(--font-baskerville)] font-semibold text-white text-lg mb-5">Contact details</h3>
              <div className="space-y-4">
                <a href="mailto:mbasa@usyd.edu.au" className="flex items-start gap-3 group">
                  <div className="w-8 h-8 rounded-lg bg-[#89cff0]/10 flex items-center justify-center shrink-0">
                    <Mail size={14} className="text-[#89cff0]" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-white/30 font-[family-name:var(--font-archivo)]">Email</p>
                    <p className="text-sm text-white/70 group-hover:text-[#89cff0] transition-colors font-[family-name:var(--font-archivo)]">mbasa@usyd.edu.au</p>
                  </div>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 group">
                  <div className="w-8 h-8 rounded-lg bg-[#89cff0]/10 flex items-center justify-center shrink-0">
                    <Linkedin size={14} className="text-[#89cff0]" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-white/30 font-[family-name:var(--font-archivo)]">LinkedIn</p>
                    <p className="text-sm text-white/70 group-hover:text-[#89cff0] transition-colors font-[family-name:var(--font-archivo)]">linkedin.com/company/mbasa</p>
                  </div>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 group">
                  <div className="w-8 h-8 rounded-lg bg-[#89cff0]/10 flex items-center justify-center shrink-0">
                    <Instagram size={14} className="text-[#89cff0]" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-white/30 font-[family-name:var(--font-archivo)]">Instagram</p>
                    <p className="text-sm text-white/70 group-hover:text-[#89cff0] transition-colors font-[family-name:var(--font-archivo)]">@mbasa_official</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="rounded-2xl bg-white border border-[#003152]/10 p-7">
              <h3 className="font-[family-name:var(--font-baskerville)] font-semibold text-[#003152] text-base mb-3">Response time</h3>
              <p className="text-sm text-[#161617]/60 leading-relaxed font-[family-name:var(--font-archivo)]">
                We aim to respond to all enquiries within 2–3 business days. For urgent matters, please reach out directly via email.
              </p>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
