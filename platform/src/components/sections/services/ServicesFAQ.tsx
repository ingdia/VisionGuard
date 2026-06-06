"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { FadeUp } from "@/components/animations";

const faqs = [
  { q: "How long does it take to build a website?", a: "A standard 5-page website typically takes 2–3 weeks. Larger projects with custom systems can take 4–8 weeks. We'll give you a clear timeline before we start." },
  { q: "Do I need to know anything technical?", a: "Not at all. We handle everything technical. You just tell us what you need, review our designs, and approve the final result. We keep you informed at every step." },
  { q: "Will my website work on mobile phones?", a: "Absolutely. Every website we build is fully responsive and tested across phones, tablets, and desktops before we hand it over." },
  { q: "Can you help my business show up on Google?", a: "Yes. All our websites are built with SEO best practices. We also offer Google Business listing setup and SEO packages to help you rank for local searches." },
  { q: "What happens after my website launches?", a: "We provide post-launch support for all plans. We're available to fix issues, make updates, and help you grow. We also offer ongoing maintenance packages." },
  { q: "Do you offer payment plans?", a: "Yes. We understand budgets vary. We offer flexible payment options including 50% upfront and 50% on delivery, or custom arrangements for larger projects." },
  { q: "Can students join your training program?", a: "Yes! We welcome students, recent graduates, and self-taught developers. Applications are open throughout the year. Check the About page for details." },
];

export default function ServicesFAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-slate-50 py-24 px-6 md:px-10">
      <div className="max-w-3xl mx-auto">
        <FadeUp className="text-center mb-14">
          <span className="text-slate-500 text-xs font-semibold uppercase tracking-[0.25em] block mb-3">FAQ</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800">Common Questions</h2>
          <div className="mt-4 flex items-center justify-center gap-2">
            <div className="w-12 h-1 bg-slate-700 rounded-full" />
            <div className="w-3 h-1 bg-slate-400 rounded-full" />
          </div>
        </FadeUp>

        <div className="flex flex-col gap-3">
          {faqs.map(({ q, a }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.4 }}
              className={`rounded-2xl border overflow-hidden transition-colors duration-300 ${open === i ? "border-slate-300 bg-white" : "border-slate-100 bg-white hover:border-slate-200"}`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left"
              >
                <span className={`font-semibold text-sm pr-4 transition-colors duration-200 ${open === i ? "text-slate-800" : "text-slate-700"}`}>{q}</span>
                <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${open === i ? "bg-slate-700 text-white" : "bg-slate-100 text-slate-500"}`}>
                  {open === i ? <Minus size={13} /> : <Plus size={13} />}
                </div>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 text-slate-500 text-sm leading-relaxed">{a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
