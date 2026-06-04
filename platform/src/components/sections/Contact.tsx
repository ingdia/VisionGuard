"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

export default function Contact() {
  return (
    <section className="relative py-32 bg-white overflow-hidden">
      {/* Background glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#D1BCE3]/30 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT SIDE - Emotional close */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-[#72195A] font-medium">
              LET’S BUILD SOMETHING
            </span>

            <h2 className="mt-4 text-5xl font-bold text-[#2A2031] leading-tight">
              Your Idea Deserves
              <br />
              To Be Seen
            </h2>

            <p className="mt-8 text-gray-600 leading-relaxed max-w-lg">
              Whether you're launching something new or improving
              an existing system, we help you turn ideas into
              digital experiences people actually find and use.
            </p>

            <div className="mt-10 space-y-5">
              <div className="flex items-center gap-3 text-gray-700">
                <Mail size={18} className="text-[#72195A]" />
                contact@visionguard.com
              </div>

              <div className="flex items-center gap-3 text-gray-700">
                <Phone size={18} className="text-[#72195A]" />
                +250 XXX XXX XXX
              </div>

              <div className="flex items-center gap-3 text-gray-700">
                <MapPin size={18} className="text-[#72195A]" />
                Kigali, Rwanda
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE - Premium contact card */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="rounded-[36px] border border-[#D1BCE3]/40 bg-[#FAF7FC] shadow-2xl p-10">
              
              <div className="flex justify-between items-center">
                <h3 className="text-2xl font-bold text-[#2A2031]">
                  Start a Project
                </h3>

                <div className="w-10 h-10 rounded-full bg-[#72195A] flex items-center justify-center text-white">
                  <ArrowUpRight size={18} />
                </div>
              </div>

              <p className="mt-4 text-gray-600 text-sm">
                Tell us briefly what you're building. We’ll respond
                with clarity, not templates.
              </p>

              {/* Minimal input feel (not real form clutter) */}

              <div className="mt-10 space-y-5">
                <div className="bg-white rounded-2xl p-4 border border-[#D1BCE3]/30 text-gray-500">
                  Your name
                </div>

                <div className="bg-white rounded-2xl p-4 border border-[#D1BCE3]/30 text-gray-500">
                  Email address
                </div>

                <div className="bg-white rounded-2xl p-4 border border-[#D1BCE3]/30 text-gray-500">
                  What are you building?
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="mt-8 w-full py-4 rounded-2xl bg-[#72195A] text-white font-medium"
              >
                Send Message
              </motion.button>

              <p className="mt-6 text-xs text-gray-500 text-center">
                Usually respond within 24–48 hours
              </p>
            </div>

            {/* Floating accent card */}

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="absolute -bottom-10 -left-10 bg-white shadow-xl rounded-2xl p-5 border border-[#D1BCE3]/30"
            >
              <p className="text-sm text-gray-600">
                Projects don’t start with code.
                <br />
                They start with clarity.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}