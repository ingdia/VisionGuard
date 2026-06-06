import React from "react";

const brands = [
  "Local Businesses", "Schools & Academies", "Startups", "NGOs",
  "Restaurants", "Healthcare Clinics", "Real Estate", "E-Commerce",
  "Local Businesses", "Schools & Academies", "Startups", "NGOs",
  "Restaurants", "Healthcare Clinics", "Real Estate", "E-Commerce",
];

export default function TrustedBy() {
  return (
    <section className="bg-white py-10 border-y border-slate-100 overflow-hidden">
      <p className="text-center text-xs text-slate-400 uppercase tracking-[0.2em] font-semibold mb-6">Trusted by businesses across every industry</p>
      <div className="relative">
        <div className="flex animate-marquee gap-12 w-max">
          {brands.map((brand, i) => (
            <div key={i} className="flex items-center gap-3 flex-shrink-0">
              <div className="w-1.5 h-1.5 rounded-full bg-slate-400" />
              <span className="text-slate-400 text-sm font-medium whitespace-nowrap">{brand}</span>
            </div>
          ))}
        </div>
        {/* Fade edges */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
