"use client";
import { motion } from "framer-motion";
import { Globe, Code2, BarChart3, Layers, Megaphone, GraduationCap, ArrowRight } from "lucide-react";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/animations";

const services = [
  {
    icon: Globe, tag: "Most Popular",
    title: "Web Design & Development",
    desc: "We design and build modern, fast, mobile-first websites that look great, load fast, and convert visitors into customers.",
    features: ["Custom design", "Mobile responsive", "SEO ready", "Fast loading"],
  },
  {
    icon: Code2, tag: "",
    title: "Digital Systems & Platforms",
    desc: "Booking systems, management dashboards, student portals, inventory tools — we build smart systems tailored to your workflow.",
    features: ["Custom built", "User friendly", "Scalable", "Secure"],
  },
  {
    icon: BarChart3, tag: "",
    title: "Online Visibility & SEO",
    desc: "We get your business found on Google, Google Maps, and across the web through proven SEO and digital presence strategies.",
    features: ["Google listing", "Keyword strategy", "Local SEO", "Analytics setup"],
  },
  {
    icon: Layers, tag: "",
    title: "Custom Digital Tools",
    desc: "Need something specific? We build portals, apps, and dashboards designed exactly around your unique business needs.",
    features: ["Tailored solution", "Admin panel", "Data management", "Integrations"],
  },
  {
    icon: Megaphone, tag: "",
    title: "Brand & Digital Identity",
    desc: "Logo, colour palette, typography, and consistent brand guidelines — we give your business a professional identity that builds trust.",
    features: ["Logo design", "Brand guide", "Social assets", "Consistency"],
  },
  {
    icon: GraduationCap, tag: "New",
    title: "Internships & Training",
    desc: "Hands-on training programs for students and young professionals. Learn web development and digital skills through real projects.",
    features: ["Real projects", "Mentorship", "Certificate", "Job support"],
  },
];

export default function ServicesGrid() {
  return (
    <section className="bg-white py-24 px-6 md:px-10 relative overflow-hidden">
      {/* bg decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] opacity-[0.025] pointer-events-none">
        <svg viewBox="0 0 500 500" fill="none">
          <circle cx="250" cy="250" r="220" stroke="#334155" strokeWidth="1.5" />
          <circle cx="250" cy="250" r="150" stroke="#334155" strokeWidth="1" />
          <circle cx="250" cy="250" r="80" stroke="#334155" strokeWidth="0.8" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <FadeUp className="text-center mb-16">
          <span className="text-slate-500 text-xs font-semibold uppercase tracking-[0.25em] block mb-3">Our Services</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800">Everything You Need,<br className="hidden sm:block" /> Under One Roof</h2>
          <div className="mt-4 flex items-center justify-center gap-2">
            <div className="w-12 h-1 bg-slate-700 rounded-full" />
            <div className="w-3 h-1 bg-slate-400 rounded-full" />
            <div className="w-1.5 h-1 bg-slate-300 rounded-full" />
          </div>
        </FadeUp>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, tag, title, desc, features }) => (
            <StaggerItem key={title}>
              <motion.div
                whileHover={{ y: -5, boxShadow: "0 20px 50px rgba(0,0,0,0.10)" }}
                transition={{ duration: 0.22 }}
                className="group relative flex flex-col bg-white border border-slate-100 rounded-2xl p-7 h-full overflow-hidden"
              >
                {/* hover fill */}
                <motion.div
                  className="absolute inset-0 bg-slate-800 rounded-2xl origin-bottom"
                  initial={{ scaleY: 0 }}
                  whileHover={{ scaleY: 1 }}
                  transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                />
                <div className="relative z-10 flex flex-col flex-1">
                  {/* tag */}
                  {tag && (
                    <span className="self-start text-[10px] font-bold uppercase tracking-widest bg-slate-100 group-hover:bg-white/10 text-slate-600 group-hover:text-slate-200 px-2.5 py-1 rounded-full mb-4 transition-colors duration-300">
                      {tag}
                    </span>
                  )}
                  <div className="w-12 h-12 rounded-xl bg-slate-100 group-hover:bg-white/15 flex items-center justify-center mb-5 transition-colors duration-300">
                    <Icon size={22} className="text-slate-700 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-slate-800 group-hover:text-white font-bold text-lg mb-2 transition-colors duration-300">{title}</h3>
                  <p className="text-slate-500 group-hover:text-slate-300 text-sm leading-relaxed flex-1 transition-colors duration-300">{desc}</p>
                  <ul className="mt-5 grid grid-cols-2 gap-1.5">
                    {features.map(f => (
                      <li key={f} className="flex items-center gap-1.5 text-xs text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                        <span className="w-1 h-1 rounded-full bg-slate-400 group-hover:bg-slate-400 flex-shrink-0" />{f}
                      </li>
                    ))}
                  </ul>
                  <button className="mt-6 inline-flex items-center gap-1.5 text-slate-600 group-hover:text-white text-xs font-semibold transition-colors duration-300">
                    Learn more <ArrowRight size={12} />
                  </button>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
