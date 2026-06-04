"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const team = [
  {
    name: "Esther",
    role: "Founder / Product Lead",
    image: "/images/team-1.jpg",
    quote: "If it doesn't solve a real problem, it doesn't ship.",
    bio: "Turns ideas into structured digital products and decides what actually gets built.",
  },
  {
    name: "Aisha",
    role: "Lead Developer",
    image: "/team-2.jpg",
    quote: "Clean code is a form of respect.",
    bio: "Builds scalable systems and spends too much time in terminal windows.",
  },
  {
    name: "Brian",
    role: "UI/UX Designer",
    image: "/team-3.jpg",
    quote: "If users feel it, they remember it.",
    bio: "Designs interfaces that feel natural, not forced.",
  },
  {
    name: "Maya",
    role: "AI & Automation Engineer",
    image: "/team-4.jpg",
    quote: "If it can be automated, it probably should be.",
    bio: "Builds intelligent systems that remove repetitive work.",
  },
  {
    name: "Daniel",
    role: "Operations & Growth",
    image: "/team-5.jpg",
    quote: "Momentum beats perfection.",
    bio: "Keeps projects moving and clients aligned.",
  },
];

export default function Team() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-32 bg-[#FAF7FC] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        {/* Header */}

        <div className="text-center">
          <span className="text-[#72195A] font-medium">
            THE TEAM
          </span>

          <h2 className="mt-4 text-5xl font-bold text-[#2A2031]">
            The People Behind The Vision
          </h2>

          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            A small team focused on building meaningful digital
            experiences, not just delivering code.
          </p>
        </div>

        {/* Stack Container */}

        <div className="relative mt-24 h-[600px] flex items-center justify-center">
          {team.map((member, index) => {
            const offset = index - active;

            return (
              <motion.div
                key={member.name}
                onClick={() => setActive(index)}
                className="absolute cursor-pointer"
                animate={{
                  x: offset * 140,
                  scale: offset === 0 ? 1 : 0.85,
                  rotate: offset * 5,
                  zIndex: 50 - Math.abs(offset),
                  opacity: Math.abs(offset) > 3 ? 0 : 1,
                }}
                transition={{
                  type: "spring",
                  stiffness: 120,
                  damping: 18,
                }}
              >
                {/* Card */}

                <div
                  className={`
                    w-[320px]
                    rounded-[32px]
                    overflow-hidden
                    shadow-2xl
                    border
                    ${
                      offset === 0
                        ? "bg-white border-[#72195A]/30"
                        : "bg-white/80 border-[#D1BCE3]/30"
                    }
                  `}
                >
                  {/* Image Placeholder */}

                  <div className="h-[220px] bg-gradient-to-br from-[#D1BCE3] to-[#72195A] relative">
                    <div className="absolute inset-0 flex items-center justify-center text-white text-lg font-semibold">
                      {member.name}
                    </div>
                  </div>

                  {/* Content */}

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#2A2031]">
                      {member.name}
                    </h3>

                    <p className="text-sm text-[#72195A] font-medium mt-1">
                      {member.role}
                    </p>

                    <AnimatePresence mode="wait">
                      {offset === 0 && (
                        <motion.div
                          key="active"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                        >
                          <p className="mt-4 text-gray-600 text-sm">
                            {member.bio}
                          </p>

                          <p className="mt-4 italic text-gray-500 text-sm">
                            “{member.quote}”
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Navigation dots */}

        <div className="flex justify-center gap-3 mt-8">
          {team.map((_, index) => (
            <button
              key={index}
              onClick={() => setActive(index)}
              className={`
                transition-all duration-300 rounded-full
                ${
                  active === index
                    ? "w-10 h-3 bg-[#72195A]"
                    : "w-3 h-3 bg-[#D1BCE3]"
                }
              `}
            />
          ))}
        </div>
      </div>
    </section>
  );
}