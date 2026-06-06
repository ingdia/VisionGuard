import React from 'react'
import { Camera, Shield, Bell, Users, Lock, Radio } from 'lucide-react'

const services = [
  { icon: Camera, title: "CCTV Surveillance", desc: "Advanced HD cameras with remote access and cloud storage for round-the-clock monitoring." },
  { icon: Shield, title: "Guard Services", desc: "Trained and vetted security personnel deployed to protect your premises day and night." },
  { icon: Bell, title: "Alarm Systems", desc: "Smart alarm solutions with instant alerts sent directly to you and our response team." },
  { icon: Users, title: "Event Security", desc: "Professional crowd management and access control for events of any size." },
  { icon: Lock, title: "Access Control", desc: "Biometric and keycard systems that restrict entry to authorised personnel only." },
  { icon: Radio, title: "24/7 Response", desc: "Dedicated rapid-response units ready to act on any security incident immediately." },
]

function Services() {
  return (
    <section className="bg-white py-20 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <span className="text-slate-500 text-xs font-semibold uppercase tracking-[0.2em]">What We Offer</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-slate-800">Our Services</h2>
          <div className="mt-3 w-12 h-1 bg-slate-700 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group border border-slate-100 rounded-2xl p-7 hover:shadow-lg hover:border-slate-200 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-700 flex items-center justify-center mb-5 group-hover:bg-slate-800 transition-colors duration-300">
                <Icon size={22} className="text-white" />
              </div>
              <h3 className="text-slate-800 font-semibold text-lg mb-2">{title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
