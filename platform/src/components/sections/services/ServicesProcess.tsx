"use client";
import { motion } from "framer-motion";
import { MessageSquare, PenTool, Rocket, HeadphonesIcon } from "lucide-react";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/animations";

const steps = [
  { icon: MessageSquare, num: "01", title: "Discovery Call", desc: "We start with a free consultation to understand your goals, your audience, and where you currently stand online." },
  { icon: PenTool, num: "02", title: "Strategy & Design", desc: "We create a tailored plan and prototype — showing you exactly what we'll build before we write a single line of code." },
  { icon: Rocket, num: "03", title: "Build & Launch", desc: "Our team builds your solution cleanly and efficiently, then launches it — tested, optimised, and ready for real users." },
  { icon: HeadphonesIcon, num: "04", title: "Support & Growth", desc: "We don't disappear after launch. We stay with you — updating, optimising, and helping your digital presence grow." },
];

export default function ServicesProcess() {
  return (
    <section className="bg-slate-50 py-24 px-6 md:px-10 overflow-hidden relative">
      {/* large faint word */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="text-[18vw] font-black text-slate-100 uppercase leading-none">Process</span>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <FadeUp className="text-center mb-16">
          <span className="text-slate-500 text-xs font-semibold uppercase tracking-[0.25em] block mb-3">How We Work</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800">Simple. Transparent. Effective.</h2>
          <div className="mt-4 flex items-center justify-center gap-2">
            <div className="w-12 h-1 bg-slate-700 rounded-full" />
            <div className="w-3 h-1 bg-slate-400 rounded-full" />
            <div className="w-1.5 h-1 bg-slate-300 rounded-full" />
          </div>
        </FadeUp>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map(({ icon: Icon, num, title, desc }, i) => (
            <StaggerItem key={num}>
              <div className="relative flex flex-col items-center text-center group">
                {/* connector */}
                {i < steps.length - 1 && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: i * 0.2 }}
                    className="hidden lg:block absolute top-10 left-[calc(50%+3rem)] w-[calc(100%-6rem)] h-px bg-slate-200 origin-left"
                  />
                )}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-20 h-20 rounded-full bg-slate-700 hover:bg-slate-800 flex items-center justify-center mb-5 z-10 shadow-lg shadow-slate-200 transition-colors duration-300"
                >
                  <Icon size={26} className="text-white" />
                </motion.div>
                <span className="text-[10px] font-black text-slate-400 tracking-[0.2em] mb-2">{num}</span>
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
