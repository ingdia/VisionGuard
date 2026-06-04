"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Search } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-[#F7F3FA] overflow-hidden">

      {/* background depth (less empty space, more atmosphere) */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FAF7FC] via-[#F3ECF7] to-[#EFE6F6]" />

      <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-[#72195A]/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-[#D1BCE3]/30 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full relative">

        {/* TOP BRAND BAR */}
        <div className="flex items-center justify-between mb-10">

          {/* LOGO */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3"
          >
            <Image
              src="/vision-guard-logo.png"
              alt="Vision Guard"
              width={44}
              height={44}
              className="rounded-lg"
            />

            <span className="text-[#2A2031] font-semibold tracking-wide">
              Vision Guard
            </span>
          </motion.div>

        </div>

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-white/60 backdrop-blur border border-[#D1BCE3]/40 text-[#69306D] text-sm">
              Websites • Systems • AI • Growth
            </span>

            <h1 className="text-5xl md:text-6xl font-bold mt-6 leading-tight text-[#2A2031]">
              Helping Businesses
              <span className="block text-[#72195A]">
                Stay Visible
              </span>
              In A Digital World
            </h1>

            <p className="mt-6 text-gray-600 max-w-xl leading-relaxed">
              We design websites, build systems, and create digital tools that make businesses visible, trusted, and chosen.
            </p>

            <div className="mt-10 flex gap-4">
              <button className="px-7 py-3 rounded-xl bg-[#72195A] text-white hover:scale-[1.03] transition">
                Start a Project
              </button>

              <button className="px-7 py-3 rounded-xl border border-[#72195A] text-[#72195A] hover:bg-[#72195A] hover:text-white transition">
                View Work
              </button>
            </div>
          </motion.div>

          {/* RIGHT — improved "alive" cards */}
          <motion.div className="relative h-[520px]">

            {/* SEARCH (not emoji, real UI) */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="absolute top-0 right-0 w-[340px] bg-white/70 backdrop-blur-xl border border-[#D1BCE3]/40 rounded-2xl p-5 shadow-lg"
            >
              <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                <Search size={16} />
                Search
              </div>

              <div className="bg-white rounded-xl px-4 py-3 text-gray-600 shadow-sm">
                Emergency plumber near me
              </div>
            </motion.div>

            {/* FLOW LINE */}
            <motion.div
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ delay: 0.6 }}
              className="absolute top-24 right-[165px] w-[2px] h-28 bg-gradient-to-b from-[#72195A] to-[#D1BCE3] origin-top"
            />

            {/* BUSINESS CARD */}
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="absolute top-52 right-0 w-[340px] bg-[#72195A] text-white rounded-3xl p-6 shadow-2xl"
            >
              <h3 className="text-lg font-semibold">
                Business Discovered
              </h3>

              <p className="text-white/80 mt-3 text-sm leading-relaxed">
                Clean website<br />
                Strong presence<br />
                Instant trust
              </p>
            </motion.div>

            {/* RESULT CARD */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute bottom-0 left-0 w-[280px] bg-white/80 backdrop-blur-xl border border-[#D1BCE3]/40 rounded-2xl p-5 shadow-xl"
            >
              <div className="text-2xl mb-2">✓</div>
              <h4 className="font-semibold text-[#2A2031]">
                New Client Acquired
              </h4>
              <p className="text-sm text-gray-500 mt-2">
                Visibility creates opportunity.
              </p>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}