"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";
import { fadeUp } from "@/lib/animations";

interface SectionWrapperProps {
  id?: string;
  children: ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
}

export function SectionWrapper({
  id,
  children,
  className = "",
  title,
  subtitle,
}: SectionWrapperProps) {
  return (
    <section id={id} className={`relative px-4 py-16 md:px-6 md:py-24 ${className}`}>
      <div className="mx-auto max-w-5xl">
        {(title || subtitle) && (
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-10 md:mb-12"
          >
            {title && (
              <h2 className="bg-gradient-to-r from-white via-sky-100 to-violet-200 bg-clip-text text-xl font-light tracking-wide text-transparent md:text-2xl">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-2 max-w-xl text-sm font-light text-white/55 md:text-base">
                {subtitle}
              </p>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}
