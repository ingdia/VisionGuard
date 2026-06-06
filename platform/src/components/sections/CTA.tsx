"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { FadeUp } from "@/components/animations";

export default function CTA() {
  return (
    <section className="relative bg-[url('/images/Hero.jpg')] bg-cover bg-center py-28 px-6 md:px-10 overflow-hidden">
      <div className="absolute inset-0 bg-slate-800/88" />

      {/* Animated SVG rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {[280, 420, 560].map((size, i) => (
          <motion.div
            key={size}
            className="absolute rounded-full border border-white/10"
            style={{ width: size, height: size }}
            animate={{ scale: [1, 1.04, 1], opacity: [0.4, 0.15, 0.4] }}
            transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.8 }}
          />
        ))}
      </div>

      {/* Floating SVG shapes */}
      <motion.div
        className="absolute top-10 left-10 opacity-15 hidden md:block"
        animate={{ y: [0, -12, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
          <circle cx="30" cy="30" r="26" stroke="white" strokeWidth="1.5" strokeDasharray="5 4" />
        </svg>
      </motion.div>

      <motion.div
        className="absolute bottom-10 right-16 opacity-15 hidden md:block"
        animate={{ y: [0, 10, 0], rotate: [0, -8, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
          <rect x="5" y="5" width="40" height="40" rx="8" stroke="white" strokeWidth="1.5" strokeDasharray="5 4" />
        </svg>
      </motion.div>

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <FadeUp>
          <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-slate-300 text-xs font-semibold px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
            <Mail size={12} />
            Let&apos;s Build Together
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Ready to Grow Your <br className="hidden sm:block" /> Digital Presence?
          </h2>
          <p className="mt-6 text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
            Whether you&apos;re a startup, a school, or a local business — we&apos;ll help you get online, get found, and get growing. Let&apos;s talk about your project today.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="group inline-flex items-center justify-center gap-2 bg-slate-700 hover:bg-slate-600 text-white font-semibold px-9 py-3.5 rounded-full transition-colors duration-200 text-sm"
            >
              Start Your Project
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2 border border-white/30 hover:border-white/70 hover:bg-white/10 text-white font-semibold px-9 py-3.5 rounded-full transition-all duration-200 text-sm backdrop-blur-sm"
            >
              Contact Us
            </motion.button>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
