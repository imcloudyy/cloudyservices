"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { GlassCard } from "@/components/layout/GlassCard";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { termsSections } from "@/data/terms";

export function TermsAccordion() {
  const [openId, setOpenId] = useState<string | null>("scope");

  return (
    <SectionWrapper id="terms" title="⚖️ terms and conditions">
      <GlassCard hover={false} className="!p-0 overflow-hidden">
        <div className="divide-y divide-white/[0.06]">
          {termsSections.map((section, i) => {
            const isOpen = openId === section.id;
            return (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <motion.button
                  type="button"
                  onClick={() => setOpenId(isOpen ? null : section.id)}
                  className="flex w-full items-center gap-3 px-5 py-4 text-left md:px-6 md:py-5"
                  whileHover={{ backgroundColor: "rgba(255,255,255,0.02)" }}
                  whileTap={{ scale: 0.995 }}
                >
                  <span className="text-sm leading-none opacity-80" aria-hidden>
                    {section.emoji}
                  </span>
                  <span className="flex-1 text-sm font-light text-white/75 md:text-base">
                    {i + 1}. {section.title}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <ChevronDown className="h-4 w-4 text-white/30" strokeWidth={1.5} />
                  </motion.span>
                </motion.button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <motion.p
                        className="px-5 pb-5 text-xs font-light leading-relaxed text-white/40 md:px-6 md:pb-6 md:text-sm"
                        initial={{ y: -8 }}
                        animate={{ y: 0 }}
                        exit={{ y: -4 }}
                        transition={{ duration: 0.25 }}
                      >
                        {section.content}
                      </motion.p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </GlassCard>
    </SectionWrapper>
  );
}
