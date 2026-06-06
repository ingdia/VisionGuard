import React from 'react'

function CTA() {
  return (
    <section className="relative bg-[url('/images/Hero.jpg')] bg-cover bg-center py-24 px-6 md:px-10">
      <div className="absolute inset-0 bg-slate-800/85" />
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <span className="text-slate-300 text-xs font-semibold uppercase tracking-[0.2em]">Get Started Today</span>
        <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
          Ready to Secure Your Property?
        </h2>
        <p className="mt-5 text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
          Contact us today for a free security assessment. Our experts will build a plan tailored specifically to your needs.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-slate-700 hover:bg-slate-600 text-white font-semibold px-8 py-3 rounded-full transition-colors duration-200 text-sm">
            Get a Free Quote
          </button>
          <button className="border border-white/40 hover:border-white text-white font-semibold px-8 py-3 rounded-full transition-colors duration-200 text-sm">
            Call Us Now
          </button>
        </div>
      </div>
    </section>
  )
}

export default CTA
