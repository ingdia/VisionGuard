"use client";
import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/animations";

const testimonials = [
  {
    name: "Eric Nzeyimana",
    role: "Founder, Kigali Fresh Deliveries",
    quote: "Before VisionGuard, nobody could find us online. They built our website and within weeks we were getting new customers through Google.",
    initial: "E",
  },
  {
    name: "Sister Mary Consolata",
    role: "Director, Sunrise Academy",
    quote: "Our school now has a professional website that parents trust. VisionGuard understood exactly what we needed and delivered beyond expectations.",
    initial: "S",
  },
  {
    name: "Claudine Mukamana",
    role: "Intern Alumni, VisionGuard",
    quote: "The internship program gave me real skills and confidence. I built my first full website here and landed a job within two months of graduating.",
    initial: "C",
  },
];

export default function Testimonials() {
  return (
    <section className="relative bg-slate-50 py-24 px-6 md:px-10 overflow-hidden">
      {/* SVG decorative arc */}
      <div className="absolute top-0 left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1440 80" fill="none" className="w-full">
          <path d="M0 80 Q720 0 1440 80" stroke="#e2e8f0" strokeWidth="1.5" fill="none" />
        </svg>
      </div>

      {/* Floating SVG shapes */}
      <motion.div
        className="absolute left-10 top-20 opacity-10 hidden lg:block"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
          <polygon points="40,5 75,25 75,55 40,75 5,55 5,25" stroke="#475569" strokeWidth="1.5" fill="none" />
        </svg>
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        <FadeUp className="text-center mb-16">
          <span className="text-slate-500 text-xs font-semibold uppercase tracking-[0.25em] mb-3 block">Client Voices</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800">What Our Clients Say</h2>
          <div className="mt-4 flex items-center justify-center gap-2">
            <div className="w-12 h-1 bg-slate-700 rounded-full" />
            <div className="w-3 h-1 bg-slate-400 rounded-full" />
            <div className="w-1.5 h-1 bg-slate-300 rounded-full" />
          </div>
        </FadeUp>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {testimonials.map(({ name, role, quote, initial }, i) => (
            <StaggerItem key={name}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
                className="relative bg-white rounded-3xl p-8 shadow-sm border border-slate-100 flex flex-col gap-5 overflow-hidden group"
              >
                {/* Large SVG quote mark */}
                <svg className="absolute top-4 right-6 opacity-[0.06] group-hover:opacity-[0.1] transition-opacity" width="80" height="60" viewBox="0 0 80 60" fill="#334155">
                  <path d="M0 60V36C0 15 14 4 30 0L34 8C24 12 18 20 18 30H32V60H0ZM48 60V36C48 15 62 4 78 0L82 8C72 12 66 20 66 30H80V60H48Z" />
                </svg>

                {/* Stars */}
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <motion.div
                      key={j}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 + j * 0.06 }}
                    >
                      <Star size={14} className="fill-slate-700 text-slate-700" />
                    </motion.div>
                  ))}
                </div>

                <p className="text-slate-600 text-sm leading-relaxed flex-1 relative z-10">&ldquo;{quote}&rdquo;</p>

                <div className="flex items-center gap-3 border-t border-slate-50 pt-4">
                  <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {initial}
                  </div>
                  <div>
                    <p className="text-slate-800 font-semibold text-sm">{name}</p>
                    <p className="text-slate-400 text-xs">{role}</p>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
