import React from 'react'
import { Phone, Mail, Clock } from "lucide-react";

function TopBar() {
  return (
    <div className="bg-slate-700 px-4 md:px-10 text-xs text-slate-300 py-2 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
      <div className="flex items-center gap-3">
        <span className="text-slate-400 uppercase tracking-widest text-[10px]">Follow Us</span>
        <span className="text-slate-600">|</span>
        {[
          { label: "Instagram", href: "#" },
          { label: "Facebook", href: "#" },
          { label: "Twitter", href: "#" },
        ].map(({ label, href }) => (
          <a key={label} href={href} className="hover:text-white transition-colors duration-200">{label}</a>
        ))}
      </div>
      <div className="hidden sm:flex items-center gap-5">
        <span className="flex items-center gap-1.5"><Phone size={12} className="text-slate-300" /> +250 798 334 054</span>
        <span className="hidden md:flex items-center gap-1.5"><Mail size={12} className="text-slate-300" /> ngabiblackiane02@gmail.com</span>
        <span className="hidden lg:flex items-center gap-1.5"><Clock size={12} className="text-slate-300" /> Sun–Fri &nbsp;9:00 AM – 5:00 PM</span>
      </div>
    </div>
  )
}

export default TopBar
