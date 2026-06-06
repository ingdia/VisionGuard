"use client";
import React from "react";
import { motion } from "framer-motion";
import { MessageSquare, PenTool, Rocket, HeadphonesIcon } from "lucide-react";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/animations";

const steps = [
  { icon: MessageSquare, step: "01", title: "Discovery Call", desc: "We listen to your goals, understand your audience, and identify gaps in your digital presence." },
  { icon: PenTool, step: "02", title: "Strategy & Design", desc: "We craft a tailored plan and design a solution that looks great and works even better." },
  { icon: Rocket, step: "03", title: "Build & Launch", desc: "We develop and deploy your website or system quickly, cleanly, and ready for real users." },
  { icon: HeadphonesIcon, step: "04", title: "Grow & Support", desc: "We stay post-launch — optimising, updating, and helping your digital presence grow over time." },
];

export default function HowItWorks() {
  return (
    <section className="relative bg-white py-24 px-6 md:px-10 overflow-hidden">
      {/* Large faint text background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="text-[16vw] font-black text-slate-50 uppercase leading-none whitespace-nowrap">Process</span>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <FadeUp className="text-center mb-16">
          <span className="text-slate-500 text-xs font-semibold uppercase tracking-[0.25em] mb-3 block">Simple Process</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800">How It Works</h2>
          <div className="mt-4 flex items-center justify-center gap-2">
            <div className="w-12 h-1 bg-slate-700 rounded-full" />
            <div className="w-3 h-1 bg-slate-400 rounded-full" />
            <div className="w-1.5 h-1 bg-slate-300 rounded-full" />
          </div>
        </FadeUp>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map(({ icon: Icon, step, title, desc }, i) => (
            <StaggerItem key={step}>
              <div className="relative flex flex-col items-center text-center group">
                {/* Connector */}
                {i < steps.length - 1 && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: i * 0.2 + 0.4 }}
                    className="hidden lg:block absolute top-10 left-[calc(50%+3rem)] w-[calc(100%-6rem)] h-px bg-gradient-to-r from-slate-300 to-slate-200 origin-left"
                  />
                )}

                {/* Icon circle */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative w-20 h-20 rounded-full bg-slate-700 flex items-center justify-center mb-5 z-10 shadow-lg shadow-slate-200"
                >
                  <Icon size={26} className="text-white" />
                  {/* Outer ring */}
                  <div className="absolute inset-0 rounded-full border-2 border-slate-300 scale-[1.35] opacity-0 group-hover:opacity-100 transition-all duration-300" />
                </motion.div>

                <span className="text-[10px] font-black text-slate-400 tracking-[0.2em] mb-2">{step}</span>
                <h3 className="text-slate-800 font-bold text-base mb-2">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
