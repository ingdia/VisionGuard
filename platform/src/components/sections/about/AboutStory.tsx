"use client";
import { motion } from "framer-motion";
import { SlideLeft, SlideRight } from "@/components/animations";
import { Target, Eye, Heart } from "lucide-react";

const pillars = [
  { icon: Target, title: "Our Mission", desc: "To help every business — no matter its size — become visible, trusted, and competitive in the digital space." },
  { icon: Eye, title: "Our Vision", desc: "A Rwanda where every local business, school, and startup has a strong, professional digital presence." },
  { icon: Heart, title: "Our Values", desc: "Integrity, creativity, and real impact. We build relationships, not just websites." },
];

export default function AboutStory() {
  return (
    <section className="bg-white py-24 px-6 md:px-10 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <SlideLeft>
          <span className="text-slate-500 text-xs font-semibold uppercase tracking-[0.25em]">Our Story</span>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 leading-tight">
            Built from a Simple <br /> Observation
          </h2>
          <div className="mt-4 w-12 h-1 bg-slate-700 rounded-full" />
          <p className="mt-6 text-slate-500 text-sm leading-relaxed">
            We noticed that hundreds of businesses in Rwanda were invisible online — not because they lacked quality, but because they lacked digital tools. Schools couldn&apos;t be found. Restaurants had no websites. Local services were losing customers to competitors who simply showed up online.
          </p>
          <p className="mt-4 text-slate-500 text-sm leading-relaxed">
            VisionGuard was founded to change that. We started with a clear goal: give every business — regardless of size or budget — the digital presence it deserves. Today, we&apos;ve helped over 120 businesses and trained 50+ young professionals to build the digital future of Rwanda.
          </p>
          <div className="mt-8 flex items-center gap-6">
            {[["2019", "Founded"], ["120+", "Clients"], ["50+", "Trainees"]].map(([val, label]) => (
              <div key={label} className="text-center">
                <p className="text-3xl font-black text-slate-800">{val}</p>
                <p className="text-slate-500 text-xs mt-0.5">{label}</p>
              </div>
            ))}
          </div>
        </SlideLeft>

        <SlideRight>
          <div className="flex flex-col gap-5">
            {pillars.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                className="flex gap-5 p-6 rounded-2xl border border-slate-100 hover:border-slate-200 hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-11 h-11 rounded-xl bg-slate-700 group-hover:bg-slate-800 flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                  <Icon size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="text-slate-800 font-semibold text-base mb-1">{title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </SlideRight>
      </div>
    </section>
  );
}
