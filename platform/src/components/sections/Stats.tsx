"use client";
import React from "react";
import { motion } from "framer-motion";

const stats = [
  { value: "5+",   label: "Years of Experience"   },
  { value: "120+", label: "Businesses Launched"   },
  { value: "50+",  label: "Students Trained"      },
  { value: "100%", label: "Built for Growth"      },
];

export default function Stats() {
  return (
    <section className="bg-slate-800 border-y border-slate-700/50">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map(({ value, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`flex flex-col items-center justify-center text-center py-10 px-6 ${
                i % 2 === 0 && i !== stats.length - 1 ? "border-r border-slate-700/50" : ""
              } ${i < 2 ? "border-b lg:border-b-0 border-slate-700/50" : ""} ${
                i === 1 ? "lg:border-r border-slate-700/50" : ""
              } ${i === 2 ? "lg:border-r border-slate-700/50" : ""}`}
            >
              <span className="text-5xl font-black text-white tracking-tight leading-none">
                {value}
              </span>
              <span className="mt-2 text-slate-400 text-sm font-medium">{label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
