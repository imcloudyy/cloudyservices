"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/layout/GlassCard";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { CryptoIcon } from "@/components/ui/CryptoIcon";
import { acceptedCryptos, services } from "@/data/services";
import { staggerContainer, fadeUp } from "@/lib/animations";

export function ServicesGrid() {
  return (
    <SectionWrapper
      id="services"
      title="services & fees"
      subtitle="fixed rates. fees due upfront unless agreed otherwise."
    >
      <motion.div
        className="grid gap-4 md:grid-cols-3 md:gap-5"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
      >
        {services.map((service, i) => (
          <GlassCard key={service.id} delay={i} className="flex flex-col">
            <motion.div
              className="mb-4 flex items-baseline justify-between"
              whileHover={{ x: 2 }}
            >
              <h3 className="text-base font-normal text-white/85 md:text-lg">
                {service.title}
              </h3>
              <span className="text-lg font-light text-white/70">{service.fee}</span>
            </motion.div>
            <p className="text-xs font-light leading-relaxed text-white/40 md:text-sm">
              {service.description}
            </p>
            <p className="mt-3 text-[11px] font-light text-white/30">{service.feeNote}</p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {service.examples.map((ex) => (
                <motion.span
                  key={ex}
                  className="rounded-md border border-white/[0.06] bg-white/[0.03] px-2 py-1 text-[10px] font-light text-white/35"
                  whileHover={{ scale: 1.05, borderColor: "rgba(255,255,255,0.12)" }}
                >
                  {ex}
                </motion.span>
              ))}
            </div>
          </GlassCard>
        ))}
      </motion.div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={3}
        className="mt-8"
      >
        <GlassCard hover={false} className="!p-5 md:!p-6">
          <p className="mb-4 text-xs font-light tracking-wide text-white/40">
            accepted crypto payments
          </p>
          <div className="flex flex-wrap gap-4 md:gap-6">
            {acceptedCryptos.map((crypto, i) => (
              <motion.div
                key={crypto.id}
                className="flex items-center gap-2.5"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                whileHover={{ scale: 1.06, y: -2 }}
              >
                <CryptoIcon id={crypto.id} className="h-7 w-7" />
                <div>
                  <p className="text-xs font-light text-white/70">{crypto.name}</p>
                  <p className="text-[10px] font-light text-white/30">{crypto.symbol}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </GlassCard>
      </motion.div>
    </SectionWrapper>
  );
}
