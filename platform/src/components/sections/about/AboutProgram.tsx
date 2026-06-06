"use client";
import { SlideLeft, SlideRight } from "@/components/animations";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight } from "lucide-react";

const perks = [
  "Work on real client projects from day one",
  "Mentorship from experienced developers and designers",
  "Flexible — remote and on-site options available",
  "Certificate of completion and portfolio support",
  "Job placement assistance upon graduation",
];

export default function AboutProgram() {
  return (
    <section className="bg-slate-900 py-24 px-6 md:px-10 overflow-hidden">
      {/* subtle grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="pgrid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.8" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#pgrid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        <SlideLeft>
          <span className="text-slate-400 text-xs font-semibold uppercase tracking-[0.25em]">For Students & Graduates</span>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Build Real Skills. <br />
            <span className="text-slate-300">Launch Real Careers.</span>
          </h2>
          <div className="mt-4 w-12 h-1 bg-slate-600 rounded-full" />
          <p className="mt-6 text-slate-400 text-sm leading-relaxed">
            Our internship and training program gives students and young professionals hands-on experience building real websites and digital products — not toy projects. You&apos;ll work alongside our team, serve real clients, and leave with a portfolio you&apos;re proud of.
          </p>
          <ul className="mt-7 flex flex-col gap-3">
            {perks.map((p, i) => (
              <motion.li
                key={p}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex items-start gap-3 text-slate-300 text-sm"
              >
                <CheckCircle size={16} className="text-slate-400 flex-shrink-0 mt-0.5" />
                {p}
              </motion.li>
            ))}
          </ul>
          <motion.button
            whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
            className="group mt-9 inline-flex items-center gap-2 bg-slate-700 hover:bg-slate-600 text-white font-semibold px-8 py-3.5 rounded-full text-sm transition-colors duration-200"
          >
            Apply for Internship
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
          </motion.button>
        </SlideLeft>

        <SlideRight>
          <div className="grid grid-cols-2 gap-4">
            {[
              { val: "50+", label: "Students Trained", sub: "And counting" },
              { val: "3mo", label: "Program Duration", sub: "Intensive & practical" },
              { val: "90%", label: "Job Placement", sub: "Within 3 months" },
              { val: "Free", label: "For Top Applicants", sub: "Merit-based spots" },
            ].map(({ val, label, sub }) => (
              <div key={label} className="bg-slate-800 border border-slate-700 rounded-2xl p-6 flex flex-col gap-1">
                <span className="text-4xl font-black text-white">{val}</span>
                <span className="text-slate-200 font-semibold text-sm">{label}</span>
                <span className="text-slate-500 text-xs">{sub}</span>
              </div>
            ))}
          </div>
        </SlideRight>
      </div>
    </section>
  );
}
