"use client";

import { motion } from "framer-motion";
import { StatusIndicator } from "@/components/ui/StatusIndicator";
import { VerificationCard } from "@/components/sections/VerificationCard";
import { fadeUp } from "@/lib/animations";

export function HeroSection() {
  return (
    <section className="relative flex flex-col items-center px-4 pt-20 pb-4 md:px-6 md:pt-24">
      <div className="mx-auto w-full max-w-2xl text-center">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
          className="mb-4 text-xs font-light tracking-[0.28em] text-sky-300/60"
        >
          mm services
        </motion.p>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
          className="bg-gradient-to-br from-white via-sky-100 to-violet-200 bg-clip-text text-5xl font-extralight tracking-tight text-transparent md:text-7xl"
        >
          imcloudy
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
          className="mx-auto mt-4 max-w-md text-sm font-light leading-relaxed text-white/60 md:text-base"
        >
          neutral escrow for accounts, virtual items, and crypto — verified, low-key, and scam-aware.
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3}
          className="mt-6 flex justify-center"
        >
          <StatusIndicator />
        </motion.div>

        <div className="mt-8">
          <VerificationCard inline />
        </div>
      </div>
    </section>
  );
}
