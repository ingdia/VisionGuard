"use client";
import { motion, useInView, Variants } from "framer-motion";
import { useRef, ReactNode } from "react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: (i = 0) => ({
    opacity: 1,
    transition: { duration: 0.7, delay: i * 0.1, ease: "easeOut" },
  }),
};

const slideLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const slideRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

function useScrollReveal() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return { ref, inView };
}

export function FadeUp({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  const { ref, inView } = useScrollReveal();
  return (
    <motion.div ref={ref} variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"} custom={delay} className={className}>
      {children}
    </motion.div>
  );
}

export function FadeIn({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  const { ref, inView } = useScrollReveal();
  return (
    <motion.div ref={ref} variants={fadeIn} initial="hidden" animate={inView ? "visible" : "hidden"} custom={delay} className={className}>
      {children}
    </motion.div>
  );
}

export function SlideLeft({ children, className = "" }: { children: ReactNode; className?: string }) {
  const { ref, inView } = useScrollReveal();
  return (
    <motion.div ref={ref} variants={slideLeft} initial="hidden" animate={inView ? "visible" : "hidden"} className={className}>
      {children}
    </motion.div>
  );
}

export function SlideRight({ children, className = "" }: { children: ReactNode; className?: string }) {
  const { ref, inView } = useScrollReveal();
  return (
    <motion.div ref={ref} variants={slideRight} initial="hidden" animate={inView ? "visible" : "hidden"} className={className}>
      {children}
    </motion.div>
  );
}

export function StaggerContainer({ children, className = "" }: { children: ReactNode; className?: string }) {
  const { ref, inView } = useScrollReveal();
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.div variants={fadeUp} className={className}>
      {children}
    </motion.div>
  );
}
