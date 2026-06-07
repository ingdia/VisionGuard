"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Globe, Code2, BarChart3, Layers, GraduationCap, Megaphone } from "lucide-react";
import { FadeUp } from "@/components/animations";

const categories = ["All", "Web Design", "Digital System", "Branding", "SEO", "Training"];

const projects = [
  {
    id: 1,
    title: "Sunrise Academy Website",
    client: "Sunrise Academy",
    category: "Web Design",
    year: "2024",
    tags: ["Next.js", "Tailwind", "CMS"],
    desc: "A professional school website with online enrollment, staff profiles, and news sections.",
    image: "/images/Hero.jpg",
    size: "large",
    color: "from-slate-800 to-slate-900",
  },
  {
    id: 2,
    title: "Restaurant Booking System",
    client: "Chez Lando Kigali",
    category: "Digital System",
    year: "2024",
    tags: ["React", "Node.js", "DB"],
    desc: "Table reservation system with real-time availability and SMS confirmation.",
    image: "/images/Hero1.jpg",
    size: "small",
    color: "from-slate-700 to-slate-800",
  },
  {
    id: 3,
    title: "Brand Identity & Website",
    client: "GreenGrow Rwanda",
    category: "Branding",
    year: "2023",
    tags: ["Figma", "Branding", "Web"],
    desc: "Complete digital identity for an agri-tech startup — logo, colours, and a modern landing page.",
    image: "/images/Hero.jpg",
    size: "small",
    color: "from-slate-600 to-slate-700",
  },
  {
    id: 4,
    title: "Google Visibility Campaign",
    client: "Nyamirambo Auto Parts",
    category: "SEO",
    year: "2023",
    tags: ["SEO", "Google Maps", "Analytics"],
    desc: "Took a local auto shop from invisible to page 1 of Google for 12 local search terms.",
    image: "/images/Hero1.jpg",
    size: "small",
    color: "from-slate-800 to-slate-900",
  },
  {
    id: 5,
    title: "Hospital Patient Portal",
    client: "Kigali Health Centre",
    category: "Digital System",
    year: "2024",
    tags: ["React", "Auth", "Dashboard"],
    desc: "Secure patient management portal with appointment scheduling and medical record access.",
    image: "/images/Hero.jpg",
    size: "large",
    color: "from-slate-700 to-slate-900",
  },
  {
    id: 6,
    title: "Developer Internship Cohort",
    client: "VisionGuard Program",
    category: "Training",
    year: "2024",
    tags: ["Training", "Mentorship", "Careers"],
    desc: "20 students trained over 3 months — 18 landed jobs or launched freelance careers.",
    image: "/images/Hero1.jpg",
    size: "small",
    color: "from-slate-600 to-slate-800",
  },
  {
    id: 7,
    title: "E-Commerce Fashion Store",
    client: "Amara Styles",
    category: "Web Design",
    year: "2023",
    tags: ["Next.js", "Stripe", "CMS"],
    desc: "A full e-commerce experience for a Kigali-based fashion brand with 200+ products.",
    image: "/images/Hero.jpg",
    size: "small",
    color: "from-slate-800 to-slate-900",
  },
  {
    id: 8,
    title: "NGO Digital Presence",
    client: "Youth4Change Rwanda",
    category: "Web Design",
    year: "2023",
    tags: ["WordPress", "Donations", "Blog"],
    desc: "Built a donation-enabled website helping a youth NGO reach global supporters.",
    image: "/images/Hero1.jpg",
    size: "small",
    color: "from-slate-700 to-slate-800",
  },
];

const iconMap: Record<string, React.ElementType> = {
  "Web Design": Globe,
  "Digital System": Code2,
  "Branding": Megaphone,
  "SEO": BarChart3,
  "Training": GraduationCap,
};

export default function ProjectsGrid() {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? projects : projects.filter(p => p.category === active);

  return (
    <section id="all-projects" className="bg-slate-50 py-20 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <FadeUp className="mb-12">
          <span className="text-slate-500 text-xs font-semibold uppercase tracking-[0.25em] block mb-3">All Projects</span>
          <div className="flex items-end justify-between flex-wrap gap-4">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800">Browse Our Work</h2>
            {/* filter tabs */}
            <div className="flex flex-wrap gap-2">
              {categories.map(cat => (
                <motion.button
                  key={cat}
                  onClick={() => setActive(cat)}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
                    active === cat
                      ? "bg-slate-800 text-white shadow-md"
                      : "bg-white text-slate-500 border border-slate-200 hover:border-slate-400"
                  }`}
                >
                  {cat}
                </motion.button>
              ))}
            </div>
          </div>
        </FadeUp>

        {/* masonry-style bento grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {filtered.map((project, i) => {
              const CatIcon = iconMap[project.category] || Layers;
              const isLarge = project.size === "large";
              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: i * 0.07 }}
                  className={`group relative rounded-2xl overflow-hidden cursor-pointer ${isLarge ? "sm:col-span-2" : ""}`}
                  style={{ minHeight: isLarge ? 380 : 280 }}
                >
                  {/* background image */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-90 group-hover:opacity-80 transition-opacity duration-300`} />

                  {/* top meta */}
                  <div className="absolute top-5 left-5 right-5 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-[10px] font-semibold px-3 py-1.5 rounded-full">
                      <CatIcon size={10} />
                      {project.category}
                    </span>
                    <span className="text-slate-400 text-[10px] font-medium">{project.year}</span>
                  </div>

                  {/* bottom content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-slate-400 text-[10px] font-semibold uppercase tracking-widest mb-1">{project.client}</p>
                    <h3 className="text-white font-bold text-lg leading-snug">{project.title}</h3>
                    <p className="text-slate-300 text-xs leading-relaxed mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-w-sm">
                      {project.desc}
                    </p>
                    <div className="mt-3 flex items-center justify-between">
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.map(tag => (
                          <span key={tag} className="text-[10px] bg-white/10 border border-white/15 text-slate-300 px-2 py-0.5 rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0"
                      >
                        <ArrowUpRight size={15} className="text-white" />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
