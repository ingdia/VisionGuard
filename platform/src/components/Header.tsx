"use client";
import React, { useState, useEffect } from 'react'
import Image from "next/image";
import logo from "../../public/images/logo.jpeg";
import { Menu, X } from "lucide-react";

const navLinks = ["Home", "About Us", "Services", "Projects", "Blog", "Contact Us"];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 bg-white font-sans transition-shadow duration-300 ${scrolled ? "shadow-md" : "border-b border-gray-100"}`}>
      <div className="flex items-center justify-between px-4 md:px-10 py-3">
        {/* Logo */}
        <div className="w-36 h-10 relative flex-shrink-0">
          <Image src={logo} alt="VisionGuard logo" placeholder="blur" fill className="object-contain object-left" />
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map(link => (
            <a
              key={link}
              href="#"
              className="relative px-3 py-2 text-sm text-slate-600 font-medium hover:text-slate-900 transition-colors duration-200 group"
            >
              {link}
              <span className="absolute bottom-1 left-3 right-3 h-0.5 bg-slate-700 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left rounded-full" />
            </a>
          ))}
        </nav>

        <button className="hidden md:inline-flex items-center gap-2 bg-slate-700 hover:bg-slate-800 text-white text-sm font-semibold px-5 py-2 rounded-full transition-colors duration-200">
          Let&apos;s Talk
        </button>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-1 rounded-md text-slate-700 hover:bg-slate-100 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-100 px-4 py-4 flex flex-col gap-1 bg-white">
          {navLinks.map(link => (
            <a key={link} href="#" className="py-2.5 px-3 text-sm text-slate-700 font-medium hover:bg-slate-50 rounded-md transition-colors">
              {link}
            </a>
          ))}
          <button className="mt-3 bg-slate-700 hover:bg-slate-800 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors w-full">
            Let&apos;s Talk
          </button>
        </div>
      )}
    </header>
  )
}

export default Header
