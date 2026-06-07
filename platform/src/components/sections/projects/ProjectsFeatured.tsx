"use client";
import { motion } from "framer-motion";
import { ArrowUpRight, Globe } from "lucide-react";
import { FadeUp } from "@/components/animations";

export default function ProjectsFeatured() {
  return (
    <section className="bg-white py-20 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <FadeUp className="flex items-end justify-between mb-10 flex-wrap gap-4">
          <div>
            <span className="text-slate-500 text-xs font-semibold uppercase tracking-[0.25em] block mb-2">Featured Project</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800">Our Best Work</h2>
          </div>
          <a href="#all-projects" className="text-slate-500 hover:text-slate-800 text-sm font-medium flex items-center gap-1.5 transition-colors duration-200">
            View all projects <ArrowUpRight size={15} />
          </a>
        </FadeUp>

        {/* Featured bento card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="group relative rounded-3xl overflow-hidden bg-slate-900 cursor-pointer"
          style={{ minHeight: 480 }}
        >
          <img
            src="/images/Hero1.jpg"
            alt="Featured project"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/40 to-transparent" />

          {/* top-right tag */}
          <div className="absolute top-6 right-6 flex items-center gap-2">
            <span className="bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
              Web Design
            </span>
            <span className="bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
              2024
            </span>
          </div>

          {/* bottom content */}
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
            <div className="flex items-end justify-between gap-6 flex-wrap">
              <div>
                <p className="text-slate-400 text-xs font-semibold uppercase tracking-widest mb-2">Kigali Fresh Deliveries</p>
                <h3 className="text-white font-bold text-2xl md:text-4xl leading-tight max-w-xl">
                  Full Brand Identity & E-Commerce Website
                </h3>
                <p className="text-slate-300 text-sm mt-3 max-w-lg leading-relaxed">
                  Designed and built a complete online presence for Kigali's fastest-growing delivery service — from logo to checkout.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {["Branding", "Next.js", "E-Commerce", "SEO"].map(tag => (
                    <span key={tag} className="bg-slate-700/60 text-slate-300 text-xs px-3 py-1 rounded-full border border-slate-600">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <motion.a
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                href="#"
                className="flex-shrink-0 w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-xl"
              >
                <ArrowUpRight size={22} className="text-slate-800" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
