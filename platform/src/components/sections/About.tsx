import React from 'react'
import Image from 'next/image'
import { CheckCircle } from 'lucide-react'

const reasons = [
  "Licensed and fully insured security company",
  "Over 10 years of field experience in Rwanda",
  "Cutting-edge technology integrated with human expertise",
  "Customised security plans for every client",
  "Rapid response team available around the clock",
]

function About() {
  return (
    <section className="bg-slate-50 py-20 px-6 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        {/* Image */}
        <div className="relative w-full h-72 sm:h-96 lg:h-[480px] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/images/Hero1.jpg"
            alt="VisionGuard team in the field"
            fill
            className="object-cover"
          />
          {/* Floating badge */}
          <div className="absolute bottom-6 left-6 bg-slate-700 text-white px-5 py-3 rounded-xl shadow-lg">
            <p className="text-2xl font-bold">10+</p>
            <p className="text-xs text-slate-300">Years Protecting Rwanda</p>
          </div>
        </div>

        {/* Text */}
        <div>
          <span className="text-slate-500 text-xs font-semibold uppercase tracking-[0.2em]">Who We Are</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-slate-800 leading-tight">
            Why Clients Choose <br className="hidden sm:block" /> VisionGuard
          </h2>
          <div className="mt-3 w-12 h-1 bg-slate-700 rounded-full" />
          <p className="mt-6 text-slate-500 text-sm leading-relaxed">
            We are Rwanda&apos;s trusted security partner — combining modern surveillance technology with highly trained professionals to keep homes, businesses, and events safe.
          </p>
          <ul className="mt-6 flex flex-col gap-3">
            {reasons.map(r => (
              <li key={r} className="flex items-start gap-3 text-sm text-slate-700">
                <CheckCircle size={18} className="text-slate-700 flex-shrink-0 mt-0.5" />
                {r}
              </li>
            ))}
          </ul>
          <button className="mt-8 bg-slate-700 hover:bg-slate-800 text-white font-semibold px-7 py-3 rounded-full text-sm transition-colors duration-200">
            Learn More About Us
          </button>
        </div>
      </div>
    </section>
  )
}

export default About
