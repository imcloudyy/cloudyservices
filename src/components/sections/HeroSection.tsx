"use client";

import { motion } from "framer-motion";
import { StatusIndicator } from "@/components/ui/StatusIndicator";
import { fadeUp } from "@/lib/animations";

export function HeroSection() {
  return (
    <section className="relative flex min-h-[85vh] flex-col items-center justify-center px-4 pt-24 pb-16 md:px-6">
      <div className="mx-auto max-w-3xl text-center">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
          className="mb-6 text-xs font-light tracking-[0.25em] text-white/35"
        >
          discord middleman
        </motion.p>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
          className="text-5xl font-extralight tracking-tight text-white md:text-7xl lg:text-8xl"
        >
          imcloudy
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
          className="mx-auto mt-5 max-w-md text-sm font-light leading-relaxed text-white/45 md:text-base"
        >
          neutral escrow for accounts, virtual items, and crypto — verified, low-key, and scam-aware.
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3}
          className="mt-8 flex justify-center"
        >
          <StatusIndicator />
        </motion.div>
      </div>
    </section>
  );
}
