"use client";

import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <section className="py-28 bg-[#FAF7FC] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#72195A] font-medium">
              ABOUT US
            </span>

            <h2 className="mt-4 text-5xl font-bold text-[#2A2031] leading-tight">
              Visibility Creates
              Opportunity
            </h2>

            <p className="mt-8 text-gray-600 leading-relaxed">
              Every day, people search for services, products,
              and solutions online.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              The businesses that are visible get discovered.
              The businesses that are discoverable get chosen.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              At Vision Guard, we help organizations build
              their digital presence through websites,
              smart systems, and innovative technology.
            </p>

            <div className="mt-10 flex gap-10">
              <div>
                <h3 className="text-3xl font-bold text-[#72195A]">
                  Vision
                </h3>

                <p className="text-gray-600 mt-2">
                  We develop vision.
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-[#72195A]">
                  Innovation
                </h3>

                <p className="text-gray-600 mt-2">
                  We drive innovation.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Side */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[450px]"
          >
            {/* Search */}

            <motion.div
              animate={{
                x: [0, 20, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
              className="absolute top-0 left-0 bg-white rounded-3xl p-5 shadow-lg"
            >
              🔍 Looking for a service...
            </motion.div>

            {/* Website */}

            <motion.div
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="absolute top-36 right-0 bg-[#72195A] text-white rounded-3xl p-8 shadow-2xl"
            >
              Website Found
            </motion.div>

            {/* Result */}

            <motion.div
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="absolute bottom-0 left-20 bg-[#D1BCE3] rounded-3xl p-8"
            >
              New Opportunity
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}