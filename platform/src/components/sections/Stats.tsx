import React from 'react'

const stats = [
  { value: "10+", label: "Years of Experience" },
  { value: "500+", label: "Clients Protected" },
  { value: "24/7", label: "Active Monitoring" },
  { value: "99.9%", label: "Uptime Guaranteed" },
]

function Stats() {
  return (
    <section className="bg-slate-700 text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-10 grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map(({ value, label }) => (
          <div key={label} className="flex flex-col items-center text-center gap-1">
            <span className="text-4xl font-bold">{value}</span>
            <span className="text-slate-300 text-sm">{label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Stats
