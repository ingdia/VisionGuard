"use client";
import React from "react";
import { motion } from "framer-motion";
import { Globe, Code2, BarChart3, Layers, GraduationCap, Megaphone } from "lucide-react";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/animations";

const services = [
  { icon: Globe, title: "Web Design & Development", desc: "Modern, fast, and mobile-friendly websites that make a strong first impression and keep visitors engaged." },
  { icon: Code2, title: "Digital Systems", desc: "From booking platforms to management tools — smart systems that streamline how your business operates." },
  { icon: BarChart3, title: "Online Visibility", desc: "Get found online through SEO, Google listings, and digital presence strategies that actually work." },
  { icon: Layers, title: "Custom Digital Tools", desc: "Tailored portals, dashboards, and apps designed specifically around your business needs." },
  { icon: Megaphone, title: "Brand & Digital Identity", desc: "Clear, consistent brand identities that communicate trust and professionalism across every touchpoint." },
  { icon: GraduationCap, title: "Internships & Training", desc: "Hands-on programs for students and young professionals ready to build real digital skills." },
];

export default function Services() {
  return (
    <section className="relative bg-white py-24 px-6 md:px-10 overflow-hidden">
      {/* SVG background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] opacity-[0.03] pointer-events-none">
        <svg viewBox="0 0 600 600" fill="none">
          <circle cx="300" cy="300" r="250" stroke="#334155" strokeWidth="2" />
          <circle cx="300" cy="300" r="180" stroke="#334155" strokeWidth="1.5" />
          <circle cx="300" cy="300" r="110" stroke="#334155" strokeWidth="1" />
          <line x1="50" y1="300" x2="550" y2="300" stroke="#334155" strokeWidth="1" />
          <line x1="300" y1="50" x2="300" y2="550" stroke="#334155" strokeWidth="1" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section heading */}
        <FadeUp className="text-center mb-16">
          <span className="inline-block text-slate-500 text-xs font-semibold uppercase tracking-[0.25em] mb-3">What We Offer</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 leading-tight">
            Everything Your Business <br className="hidden sm:block" /> Needs to Thrive Online
          </h2>
          <div className="mt-4 flex items-center justify-center gap-2">
            <div className="w-12 h-1 bg-slate-700 rounded-full" />
            <div className="w-3 h-1 bg-slate-400 rounded-full" />
            <div className="w-1.5 h-1 bg-slate-300 rounded-full" />
          </div>
        </FadeUp>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc }, i) => (
            <StaggerItem key={title}>
              <motion.div
                whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(0,0,0,0.10)" }}
                transition={{ duration: 0.25 }}
                className="group relative bg-white border border-slate-100 rounded-2xl p-7 cursor-default overflow-hidden"
              >
                {/* Hover background fill */}
                <motion.div
                  className="absolute inset-0 bg-slate-700 rounded-2xl origin-bottom"
                  initial={{ scaleY: 0 }}
                  whileHover={{ scaleY: 1 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                />
                {/* Number */}
                <span className="absolute top-5 right-6 text-6xl font-black text-slate-100 group-hover:text-slate-600 transition-colors duration-300 select-none leading-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 group-hover:bg-white/20 flex items-center justify-center mb-5 transition-colors duration-300">
                    <Icon size={22} className="text-slate-700 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-slate-800 group-hover:text-white font-semibold text-lg mb-2 transition-colors duration-300">{title}</h3>
                  <p className="text-slate-500 group-hover:text-slate-200 text-sm leading-relaxed transition-colors duration-300">{desc}</p>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
