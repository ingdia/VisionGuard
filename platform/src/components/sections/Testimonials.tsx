import React from 'react'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: "Jean-Pierre Habimana",
    role: "CEO, Kigali Retail Group",
    quote: "VisionGuard transformed our store security completely. Response times are incredible and the team is always professional.",
  },
  {
    name: "Amina Uwase",
    role: "Property Manager, Nyarutarama",
    quote: "We've had zero incidents since engaging VisionGuard. The peace of mind is worth every franc.",
  },
  {
    name: "David Mugisha",
    role: "Event Organiser",
    quote: "They managed security for our 2,000-person event flawlessly. I won't use anyone else going forward.",
  },
]

function Testimonials() {
  return (
    <section className="bg-slate-50 py-20 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-slate-500 text-xs font-semibold uppercase tracking-[0.2em]">Client Voices</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-slate-800">What Our Clients Say</h2>
          <div className="mt-3 w-12 h-1 bg-slate-700 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map(({ name, role, quote }) => (
            <div key={name} className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 flex flex-col gap-4">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} className="fill-slate-700 text-slate-700" />
                ))}
              </div>
              <p className="text-slate-600 text-sm leading-relaxed flex-1">&ldquo;{quote}&rdquo;</p>
              <div>
                <p className="text-slate-800 font-semibold text-sm">{name}</p>
                <p className="text-slate-400 text-xs">{role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
