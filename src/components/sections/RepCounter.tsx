"use client";

import { motion } from "framer-motion";
import { REP_STATS } from "@/data/constants";
import { staggerContainer, fadeUp } from "@/lib/animations";

export function RepCounter() {
  return (
    <section className="relative px-4 py-6 md:px-6">
      <motion.div
        className="mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-3 md:gap-4"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {REP_STATS.map((stat, i) => (
          <motion.div
            key={stat.label}
            custom={i}
            variants={fadeUp}
            whileHover={{ scale: 1.04, y: -2 }}
            className="rounded-full border border-white/[0.07] bg-white/[0.03] px-5 py-2.5 backdrop-blur-md"
          >
            <span className="text-xs font-light tracking-wide text-white/55 md:text-sm">
              [ {stat.label} ]
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
