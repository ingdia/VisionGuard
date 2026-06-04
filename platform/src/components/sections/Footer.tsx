"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-[#FAF7FC] border-t border-[#D1BCE3]/30 overflow-hidden">
      
      {/* soft background glow */}
      <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#72195A]/10 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 relative">
        
        {/* Top section */}
        <div className="grid md:grid-cols-3 gap-12">
          
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-[#2A2031]">
              Vision Guard
            </h2>

            <p className="mt-4 text-gray-600 leading-relaxed">
              We develop vision.
              <br />
              We drive innovation.
            </p>

            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="mt-6 inline-flex items-center gap-2 text-[#72195A] font-medium"
            >
              Build something meaningful
              <ArrowUpRight size={16} />
            </motion.div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-[#2A2031]">
              Navigation
            </h3>

            <ul className="mt-4 space-y-3 text-gray-600">
              <li className="hover:text-[#72195A] cursor-pointer transition">
                Home
              </li>
              <li className="hover:text-[#72195A] cursor-pointer transition">
                About
              </li>
              <li className="hover:text-[#72195A] cursor-pointer transition">
                What We Build
              </li>
              <li className="hover:text-[#72195A] cursor-pointer transition">
                Contact
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-[#2A2031]">
              Contact
            </h3>

            <ul className="mt-4 space-y-3 text-gray-600">
              <li>contact@visionguard.com</li>
              <li>+250 XXX XXX XXX</li>
              <li>Kigali, Rwanda</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-12 border-t border-[#D1BCE3]/30" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Vision Guard. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm text-gray-500">
            <span className="hover:text-[#72195A] cursor-pointer transition">
              Privacy
            </span>
            <span className="hover:text-[#72195A] cursor-pointer transition">
              Terms
            </span>
            <span className="hover:text-[#72195A] cursor-pointer transition">
              Cookies
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}