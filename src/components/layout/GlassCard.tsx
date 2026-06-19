"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";
import { fadeUp } from "@/lib/animations";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  hover?: boolean;
}

export function GlassCard({
  children,
  className = "",
  delay = 0,
  hover = true,
}: GlassCardProps) {
  return (
    <motion.div
      custom={delay}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      whileHover={hover ? { y: -3, transition: { duration: 0.25 } } : undefined}
      className={`rounded-2xl border border-white/[0.08] bg-white/[0.04] p-6 shadow-[0_8px_32px_rgba(0,0,0,0.24)] backdrop-blur-[16px] md:p-8 ${className}`}
    >
      {children}
    </motion.div>
  );
}
