"use client";
import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="relative bg-slate-900 overflow-hidden py-32">
      <div className="absolute inset-0">
        <img src="/images/Hero1.jpg" alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-slate-900/82" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 to-slate-900/40" />
      </div>
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="adots" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="1.5" cy="1.5" r="1.5" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#adots)" />
        </svg>
      </div>
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-6"
        >
          <span className="w-8 h-px bg-slate-500" />
          <span className="text-slate-400 text-xs font-semibold uppercase tracking-[0.25em]">Who We Are</span>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-white font-bold text-5xl sm:text-6xl md:text-7xl leading-[1.06] tracking-tight"
        >
          We Are <br /><span className="text-slate-300">VisionGuard.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-6 text-slate-400 text-lg leading-relaxed max-w-xl"
        >
          A digital solutions company on a mission to make every business visible, competitive, and growing in the digital world.
        </motion.p>
      </div>
    </section>
  );
}
