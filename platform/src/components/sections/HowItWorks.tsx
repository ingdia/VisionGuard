import React from 'react'
import { ClipboardList, Settings, ShieldCheck, HeadphonesIcon } from 'lucide-react'

const steps = [
  { icon: ClipboardList, step: "01", title: "Free Consultation", desc: "Tell us about your security needs and we assess your site at no cost." },
  { icon: Settings, step: "02", title: "Custom Plan", desc: "We design a tailored security solution that fits your budget and requirements." },
  { icon: ShieldCheck, step: "03", title: "Deployment", desc: "Our team installs systems and deploys personnel swiftly and professionally." },
  { icon: HeadphonesIcon, step: "04", title: "Ongoing Support", desc: "We monitor, maintain and adapt your security plan as your needs evolve." },
]

function HowItWorks() {
  return (
    <section className="bg-white py-20 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-slate-500 text-xs font-semibold uppercase tracking-[0.2em]">Simple Process</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-slate-800">How It Works</h2>
          <div className="mt-3 w-12 h-1 bg-slate-700 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map(({ icon: Icon, step, title, desc }, i) => (
            <div key={step} className="relative flex flex-col items-center text-center">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[calc(50%+2.5rem)] w-[calc(100%-5rem)] h-px bg-slate-200" />
              )}
              <div className="w-16 h-16 rounded-full bg-slate-700 flex items-center justify-center mb-5 z-10">
                <Icon size={24} className="text-white" />
              </div>
              <span className="text-[10px] font-bold text-slate-400 tracking-widest mb-1">{step}</span>
              <h3 className="text-slate-800 font-semibold text-base mb-2">{title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
