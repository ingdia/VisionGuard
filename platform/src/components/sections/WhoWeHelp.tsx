"use client";

import { motion } from "framer-motion";

const industries = [
  "Schools",
  "Companies",
  "Startups",
  "Organizations",
  "Growing Brands",
  "Local Businesses",
];

export default function WhoWeHelp() {
  return (
    <section className="relative py-28 overflow-hidden bg-white">
      {/* Floating Background Shapes */}

      <motion.div
        animate={{
          y: [0, -40, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
        }}
        className="absolute top-20 left-20 w-40 h-40 rounded-full bg-[#D1BCE3]/20 blur-3xl"
      />

      <motion.div
        animate={{
          y: [0, 30, 0],
          x: [0, -20, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
        }}
        className="absolute bottom-20 right-20 w-56 h-56 rounded-full bg-[#72195A]/10 blur-3xl"
      />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="text-[#72195A] font-medium">
            WHO WE HELP
          </span>

          <h2 className="mt-4 text-5xl font-bold text-[#2A2031]">
            Built For Visionaries
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-gray-600">
            From startups launching their first product to
            organizations transforming their operations,
            we create digital experiences that move ideas forward.
          </p>
        </motion.div>

        <div className="mt-20 flex flex-wrap justify-center gap-8">
          {industries.map((item, index) => (
            <motion.div
              key={item}
              initial={{
                opacity: 0,
                scale: 0.8,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
              }}
              animate={{
                y: [0, -10, 0],
              }}
              className="group relative"
            >
              <div
                style={{
                  animationDelay: `${index * 0.4}s`,
                }}
                className="
                bg-[#FAF7FC]
                border
                border-[#D1BCE3]/40
                px-8
                py-6
                rounded-3xl
                shadow-sm
                hover:shadow-xl
                hover:scale-105
                transition-all
                duration-300
              "
              >
                <h3 className="text-xl font-semibold text-[#2A2031]">
                  {item}
                </h3>

                <motion.div
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  className="h-[2px] bg-[#72195A] mt-3"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}