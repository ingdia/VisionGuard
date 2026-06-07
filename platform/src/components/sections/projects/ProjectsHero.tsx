"use client";
import { motion } from "framer-motion";

export default function ProjectsHero() {
  return (
    <section className="relative bg-slate-900 overflow-hidden py-32">
      <div className="absolute inset-0">
        <img src="/images/Hero.jpg" alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-slate-900/88" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-transparent to-slate-900/80" />
      </div>

      {/* animated dot grid */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="pdots" width="28" height="28" patternUnits="userSpaceOnUse">
              <circle cx="1.5" cy="1.5" r="1.5" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#pdots)" />
        </svg>
      </div>

      {/* decorative SVG rings */}
      <div className="absolute right-10 top-10 opacity-10 pointer-events-none hidden lg:block">
        <motion.svg
          width="300" height="300" viewBox="0 0 300 300" fill="none"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "150px 150px" }}
        >
          <circle cx="150" cy="150" r="130" stroke="white" strokeWidth="1" strokeDasharray="6 12" />
          <circle cx="150" cy="150" r="90"  stroke="white" strokeWidth="0.8" strokeDasharray="4 10" />
        </motion.svg>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-6"
        >
          <span className="w-8 h-px bg-slate-500" />
          <span className="text-slate-400 text-xs font-semibold uppercase tracking-[0.25em]">Our Work</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-white font-bold text-5xl sm:text-6xl md:text-7xl leading-[1.06] tracking-tight"
        >
          Projects That <br />
          <span className="text-slate-300">Speak for Themselves.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-6 text-slate-400 text-lg leading-relaxed max-w-xl"
        >
          From local businesses to schools and startups — every project is a story of a business that became visible online.
        </motion.p>

        {/* quick stats inline */}
        <motion.div
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 flex flex-wrap gap-8"
        >
          {[["120+", "Projects Delivered"], ["5+", "Industries"], ["100%", "Client Satisfaction"]].map(([val, label]) => (
            <div key={label} className="flex flex-col">
              <span className="text-3xl font-black text-white">{val}</span>
              <span className="text-slate-400 text-xs mt-0.5">{label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
