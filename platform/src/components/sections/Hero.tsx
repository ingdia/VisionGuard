import React from 'react'

function Hero() {
  return (
    <div className="relative w-full">
      <div className="relative bg-[url('/images/Hero.jpg')] bg-cover bg-center min-h-[500px] h-[70vh] md:h-screen">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/40" />

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center h-full px-6 md:px-16 lg:px-24 max-w-5xl">
          <span className="text-slate-300 text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            Professional Security Solutions
          </span>
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Protecting What <br className="hidden sm:block" />
            <span className="text-slate-300">Matters Most</span>
          </h1>
          <p className="mt-5 text-slate-300 text-base sm:text-lg max-w-xl leading-relaxed">
            VisionGuard delivers cutting-edge security services you can trust — 24/7 surveillance, trained personnel, and smart monitoring systems.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button className="bg-slate-700 hover:bg-slate-800 text-white font-semibold px-8 py-3 rounded-full transition-colors duration-200 text-sm">
              Get a Free Quote
            </button>
            <button className="border border-white/40 hover:border-white text-white font-semibold px-8 py-3 rounded-full transition-colors duration-200 text-sm backdrop-blur-sm">
              Our Services
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/50 text-xs hidden md:flex">
          <span>Scroll</span>
          <div className="w-px h-8 bg-white/30 animate-pulse" />
        </div>
      </div>
    </div>
  )
}

export default Hero
