"use client";
import { motion } from "framer-motion";
import { FadeUp } from "@/components/animations";
import { Building2, School, ShoppingBag, Heart, Leaf, Utensils } from "lucide-react";

const industries = [
  { icon: Building2, label: "Business" },
  { icon: School,    label: "Education" },
  { icon: ShoppingBag, label: "Retail" },
  { icon: Heart,     label: "Healthcare" },
  { icon: Leaf,      label: "Agriculture" },
  { icon: Utensils,  label: "Food & Dining" },
];

const testimonials = [
  { quote: "Our website now gets 3x more inquiries than before.", name: "Eric N.", role: "Founder, Kigali Fresh" },
  { quote: "VisionGuard made us look like a Fortune 500 company.", name: "Sister Mary", role: "Director, Sunrise Academy" },
  { quote: "I landed my first dev job 2 months after the program.", name: "Claudine M.", role: "Intern Alumni" },
];

export default function ProjectsIndustries() {
  return (
    <section className="bg-white py-20 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <FadeUp className="text-center mb-14">
          <span className="text-slate-500 text-xs font-semibold uppercase tracking-[0.25em] block mb-3">Industries We Serve</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800">We Work Across Every Sector</h2>
        </FadeUp>

        {/* industry pills */}
        <div className="flex flex-wrap justify-center gap-4 mb-20">
          {industries.map(({ icon: Icon, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -4, boxShadow: "0 12px 30px rgba(0,0,0,0.08)" }}
              className="flex flex-col items-center gap-3 bg-slate-50 border border-slate-100 rounded-2xl px-8 py-6 cursor-default transition-all duration-200"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-700 flex items-center justify-center">
                <Icon size={20} className="text-white" />
              </div>
              <span className="text-slate-700 font-semibold text-sm">{label}</span>
            </motion.div>
          ))}
        </div>

        {/* mini testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map(({ quote, name, role }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="relative bg-slate-50 border border-slate-100 rounded-2xl p-7 overflow-hidden group hover:border-slate-300 hover:shadow-md transition-all duration-300"
            >
              {/* big quote mark */}
              <span className="absolute -top-2 -left-1 text-8xl font-black text-slate-100 leading-none select-none">"</span>
              <p className="relative text-slate-700 font-medium text-sm leading-relaxed z-10">{quote}</p>
              <div className="mt-5 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-slate-700 flex items-center justify-center text-white text-xs font-black flex-shrink-0">
                  {name.charAt(0)}
                </div>
                <div>
                  <p className="text-slate-800 font-semibold text-xs">{name}</p>
                  <p className="text-slate-400 text-xs">{role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
