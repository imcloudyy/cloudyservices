"use client";

import { motion } from "framer-motion";
import { REP_STATS } from "@/data/constants";
import { staggerContainer, fadeUp } from "@/lib/animations";

const STAT_COLORS = [
  "border-sky-400/25 bg-sky-500/[0.08] text-sky-200/80",
  "border-emerald-400/25 bg-emerald-500/[0.08] text-emerald-200/80",
  "border-violet-400/25 bg-violet-500/[0.08] text-violet-200/80",
];

export function RepCounter() {
  return (
    <section className="relative px-4 pt-2 pb-8 md:px-6">
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
            whileHover={{ scale: 1.06, y: -4 }}
            animate={{ y: [0, -3, 0] }}
            transition={{
              y: { duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut" },
            }}
            className={`rounded-full border px-5 py-2.5 backdrop-blur-md ${STAT_COLORS[i % STAT_COLORS.length]}`}
          >
            <span className="text-xs font-light tracking-wide md:text-sm">
              [ {stat.label} ]
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
