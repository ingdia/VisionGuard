"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const categories = [
  {
    id: 1,
    title: "Website Development",
    description:
      "Modern websites built for visibility, credibility, and growth.",
    projects: [
      "Corporate Website",
      "School Website",
      "Business Landing Page",
    ],
  },
  {
    id: 2,
    title: "Mobile Applications",
    description:
      "Cross-platform experiences for businesses and customers.",
    projects: [
      "Service Booking App",
      "Delivery App",
      "Business Management App",
    ],
  },
  {
    id: 3,
    title: "Business Systems",
    description:
      "Custom systems that streamline business operations.",
    projects: [
      "Inventory Management System",
      "Rental Management System",
      "Employee Management System",
    ],
  },
  {
    id: 4,
    title: "AI & Automation",
    description:
      "Intelligent solutions that automate repetitive work.",
    projects: [
      "AI Travel Planner",
      "Customer Support Assistant",
      "AI Document Processor",
    ],
  },
  {
    id: 5,
    title: "Talent Development",
    description:
      "Training, mentorship, and internship opportunities.",
    projects: [
      "Software Engineering Cohort",
      "Industry Mentorship",
      "Internship Program",
    ],
  },
];

export default function WhatWeBuild() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <span className="text-[#72195A] font-medium">
            WHAT WE BUILD
          </span>

          <h2 className="mt-4 text-5xl font-bold text-[#2A2031]">
            Technology That Creates Impact
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-gray-600">
            Explore our expertise and discover the solutions
            we've delivered across industries.
          </p>
        </div>

        {/* Apple-like stacked carousel */}

        <div className="relative mt-24 h-[560px]">
          {categories.map((item, index) => {
            const offset = index - active;

            return (
              <motion.div
                key={item.id}
                onClick={() => setActive(index)}
                animate={{
                  x: offset * 120,
                  scale: offset === 0 ? 1 : 0.88,
                  rotate: offset * 4,
                  zIndex: 50 - Math.abs(offset),
                  opacity: Math.abs(offset) > 3 ? 0 : 1,
                }}
                transition={{
                  type: "spring",
                  stiffness: 120,
                  damping: 20,
                }}
                className="
                  absolute
                  left-1/2
                  top-0
                  w-[90%]
                  md:w-[700px]
                  cursor-pointer
                "
                style={{
                  translateX: "-50%",
                }}
              >
                <div
                  className={`
                    rounded-[36px]
                    border
                    overflow-hidden
                    backdrop-blur-xl
                    shadow-2xl
                    transition-all
                    duration-500
                    ${
                      offset === 0
                        ? "bg-white border-[#72195A]/30"
                        : "bg-[#FAF7FC] border-[#D1BCE3]/20"
                    }
                  `}
                >
                  <div className="p-10">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-sm text-[#72195A] font-medium">
                          {String(index + 1).padStart(2, "0")}
                        </p>

                        <h3 className="mt-3 text-3xl md:text-4xl font-bold text-[#2A2031]">
                          {item.title}
                        </h3>

                        <p className="mt-4 text-gray-600 max-w-lg">
                          {item.description}
                        </p>
                      </div>

                      <motion.div
                        animate={{
                          rotate: offset === 0 ? 180 : 0,
                        }}
                        className="
                          w-12
                          h-12
                          rounded-full
                          bg-[#72195A]
                          text-white
                          flex
                          items-center
                          justify-center
                        "
                      >
                        ↓
                      </motion.div>
                    </div>

                    <AnimatePresence>
                      {offset === 0 && (
                        <motion.div
                          initial={{
                            opacity: 0,
                            y: 30,
                          }}
                          animate={{
                            opacity: 1,
                            y: 0,
                          }}
                          exit={{
                            opacity: 0,
                          }}
                          className="mt-12"
                        >
                          <div className="grid md:grid-cols-3 gap-5">
                            {item.projects.map((project, i) => (
                              <motion.div
                                key={project}
                                initial={{
                                  opacity: 0,
                                  y: 20,
                                }}
                                animate={{
                                  opacity: 1,
                                  y: 0,
                                }}
                                transition={{
                                  delay: i * 0.1,
                                }}
                                whileHover={{
                                  y: -6,
                                }}
                                className="
                                  bg-[#FAF7FC]
                                  rounded-3xl
                                  p-5
                                  border
                                  border-[#D1BCE3]/20
                                "
                              >
                                <div
                                  className="
                                    h-28
                                    rounded-2xl
                                    bg-gradient-to-br
                                    from-[#D1BCE3]
                                    to-[#72195A]
                                    opacity-90
                                  "
                                />

                                <h4 className="mt-4 font-semibold text-[#2A2031]">
                                  {project}
                                </h4>

                                <p className="mt-2 text-sm text-gray-500">
                                  View project details
                                </p>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Navigation Dots */}

        <div className="flex justify-center gap-3 mt-10">
          {categories.map((_, index) => (
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