"use client";
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { SlideLeft, SlideRight } from "@/components/animations";

const reasons = [
  "We specialise in businesses that are hard to find online",
  "Modern websites and systems built for real-world results",
  "Affordable solutions tailored to startups, schools, and local services",
  "Real internship and training opportunities for young professionals",
  "A dedicated team that treats your growth as our mission",
];

/* alternate both images across 6 slots */
const imgs = [
  "/images/Hero.jpg",
  "/images/Hero1.jpg",
  "/images/Hero.jpg",
  "/images/Hero1.jpg",
  "/images/Hero.jpg",
  "/images/Hero1.jpg",
];

export default function About() {
  return (
    <section className="relative bg-slate-50 py-24 px-6 md:px-10 overflow-hidden">

      {/* dot pattern corners */}
      <div className="absolute bottom-0 left-0 opacity-30 pointer-events-none">
        <svg width="220" height="220" viewBox="0 0 220 220" fill="none">
          {Array.from({ length: 5 }).map((_, r) =>
            Array.from({ length: 5 }).map((_, c) => (
              <circle key={`${r}-${c}`} cx={c * 40 + 20} cy={r * 40 + 20} r="2.5" fill="#94a3b8" />
            ))
          )}
        </svg>
      </div>
      <div className="absolute top-0 right-0 opacity-30 pointer-events-none">
        <svg width="160" height="160" viewBox="0 0 160 160" fill="none">
          {Array.from({ length: 4 }).map((_, r) =>
            Array.from({ length: 4 }).map((_, c) => (
              <circle key={`${r}-${c}`} cx={c * 40 + 20} cy={r * 40 + 20} r="2.5" fill="#94a3b8" />
            ))
          )}
        </svg>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">

        {/* ── LEFT: 6-image SVG mosaic ── */}
        <SlideLeft>
          <div className="relative flex items-center justify-center">
            <svg
              viewBox="0 0 440 520"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              className="w-full max-w-[440px] drop-shadow-xl"
            >
              <defs>
                {/* 1 — large circle, top-left anchor */}
                <clipPath id="a1"><circle cx="125" cy="125" r="108" /></clipPath>
                {/* 2 — rounded hexagon, top-right */}
                <clipPath id="a2">
                  <path d="M330 30 Q360 14 390 30 L420 75 Q436 97 420 118 L390 163 Q360 179 330 163 L300 118 Q284 97 300 75 Z" />
                </clipPath>
                {/* 3 — portrait pill, left-mid */}
                <clipPath id="a3"><ellipse cx="68" cy="330" rx="62" ry="95" /></clipPath>
                {/* 4 — large squircle, center-right */}
                <clipPath id="a4">
                  <path d="M200 240 Q200 185 255 185 Q310 185 310 240 Q310 295 255 295 Q200 295 200 240Z" />
                </clipPath>
                {/* 5 — landscape pill, bottom-right */}
                <clipPath id="a5"><ellipse cx="320" cy="415" rx="110" ry="75" /></clipPath>
                {/* 6 — medium circle, bottom-left */}
                <clipPath id="a6"><circle cx="148" cy="420" r="72" /></clipPath>

                <filter id="af">
                  <feColorMatrix type="saturate" values="0.82" />
                </filter>
              </defs>

              {/* slow outer orbit */}
              <motion.g
                style={{ transformOrigin: "220px 260px" }}
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              >
                <circle cx="220" cy="260" r="278" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="4 14" fill="none" />
              </motion.g>

              {/* connector lines — from edge of each shape to the next */}
              <line x1="230" y1="125" x2="298" y2="100" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="3 5" />
              <line x1="125" y1="233" x2="125" y2="258" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="3 5" />
              <line x1="130" y1="285" x2="200" y2="260" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="3 5" />
              <line x1="310" y1="255" x2="360" y2="345" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="3 5" />
              <line x1="220" y1="295" x2="220" y2="348" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="3 5" />

              {/* 1 — large circle */}
              <image href={imgs[0]} x="17" y="17" width="216" height="216"
                clipPath="url(#a1)" preserveAspectRatio="xMidYMid slice" filter="url(#af)" />
              <circle cx="125" cy="125" r="108" stroke="#94a3b8" strokeWidth="1.8" fill="none" />

              {/* 2 — rounded hexagon */}
              <image href={imgs[1]} x="282" y="12" width="156" height="156"
                clipPath="url(#a2)" preserveAspectRatio="xMidYMid slice" filter="url(#af)" />
              <path d="M330 30 Q360 14 390 30 L420 75 Q436 97 420 118 L390 163 Q360 179 330 163 L300 118 Q284 97 300 75 Z"
                stroke="#94a3b8" strokeWidth="1.8" fill="none" />

              {/* 3 — portrait pill */}
              <image href={imgs[2]} x="6" y="235" width="124" height="190"
                clipPath="url(#a3)" preserveAspectRatio="xMidYMid slice" filter="url(#af)" />
              <ellipse cx="68" cy="330" rx="62" ry="95" stroke="#94a3b8" strokeWidth="1.8" fill="none" />

              {/* 4 — squircle */}
              <image href={imgs[3]} x="196" y="181" width="118" height="118"
                clipPath="url(#a4)" preserveAspectRatio="xMidYMid slice" filter="url(#af)" />
              <path d="M200 240 Q200 185 255 185 Q310 185 310 240 Q310 295 255 295 Q200 295 200 240Z"
                stroke="#94a3b8" strokeWidth="1.8" fill="none" />

              {/* 5 — landscape pill */}
              <image href={imgs[4]} x="210" y="340" width="220" height="150"
                clipPath="url(#a5)" preserveAspectRatio="xMidYMid slice" filter="url(#af)" />
              <ellipse cx="320" cy="415" rx="110" ry="75" stroke="#94a3b8" strokeWidth="1.8" fill="none" />

              {/* 6 — medium circle */}
              <image href={imgs[5]} x="76" y="348" width="144" height="144"
                clipPath="url(#a6)" preserveAspectRatio="xMidYMid slice" filter="url(#af)" />
              <circle cx="148" cy="420" r="72" stroke="#94a3b8" strokeWidth="1.8" fill="none" />

              {/* junction dots */}
              <circle cx="230" cy="125" r="4" fill="#94a3b8" />
              <circle cx="125" cy="255" r="3.5" fill="#cbd5e1" />
              <circle cx="200" cy="258" r="3.5" fill="#cbd5e1" />
              <circle cx="310" cy="252" r="3.5" fill="#cbd5e1" />
              <circle cx="220" cy="346" r="3.5" fill="#cbd5e1" />

              {/* badge */}
              <rect x="292" y="195" width="140" height="56" rx="13" fill="#1e293b" opacity="0.92" />
              <text x="308" y="216" fontSize="9.5" fontWeight="600" fill="#94a3b8" fontFamily="sans-serif">Businesses Launched</text>
              <text x="308" y="240" fontSize="21" fontWeight="900" fill="white" fontFamily="sans-serif">120+</text>
            </svg>

            {/* floating card outside SVG */}
            <motion.div
              animate={{ y: [0, -7, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-3 -right-3 bg-white shadow-xl rounded-2xl px-5 py-3 border border-slate-100"
            >
              <p className="text-xs text-slate-500 font-medium">Trusted by</p>
              <p className="text-slate-800 font-bold text-base leading-tight">Schools & Startups</p>
            </motion.div>
          </div>
        </SlideLeft>

        {/* ── RIGHT: text ── */}
        <SlideRight>
          <span className="text-slate-500 text-xs font-semibold uppercase tracking-[0.25em]">Who We Are</span>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 leading-tight">
            Why Businesses Choose{" "}
            <span className="relative inline-block">
              VisionGuard
              <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 200 8" fill="none">
                <path d="M2 6 Q50 2 100 5 Q150 8 198 4" stroke="#475569" strokeWidth="2.5" strokeLinecap="round" fill="none" />
              </svg>
            </span>
          </h2>
          <div className="mt-4 w-12 h-1 bg-slate-700 rounded-full" />
          <p className="mt-6 text-slate-500 text-sm leading-relaxed">
            We believe every business deserves a strong digital presence — no matter its size or industry. We work with local services, schools, startups, and organisations to bring them online with clarity, professionalism, and purpose.
          </p>

          <ul className="mt-7 flex flex-col gap-3.5">
            {reasons.map((r, i) => (
              <motion.li
                key={r}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex items-start gap-3 text-sm text-slate-700"
              >
                <CheckCircle size={18} className="text-slate-600 flex-shrink-0 mt-0.5" />
                {r}
              </motion.li>
            ))}
          </ul>

          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="mt-9 bg-slate-700 hover:bg-slate-800 text-white font-semibold px-8 py-3.5 rounded-full text-sm transition-colors duration-200 shadow-lg shadow-slate-200"
          >
            Learn More About Us
          </motion.button>
        </SlideRight>
      </div>
    </section>
  );
}
