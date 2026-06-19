"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/layout/GlassCard";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { CryptoIcon } from "@/components/ui/CryptoIcon";
import { acceptedCryptos, services } from "@/data/services";
import { staggerContainer, fadeUp } from "@/lib/animations";

const SERVICE_ACCENTS = [
  "border-sky-400/20 bg-gradient-to-br from-sky-500/[0.1] to-transparent",
  "border-violet-400/20 bg-gradient-to-br from-violet-500/[0.1] to-transparent",
  "border-cyan-400/20 bg-gradient-to-br from-cyan-500/[0.1] to-transparent",
];

const FEE_COLORS = ["text-sky-300", "text-violet-300", "text-cyan-300"];

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
          <GlassCard
            key={service.id}
            delay={i}
            className={`flex flex-col ${SERVICE_ACCENTS[i % SERVICE_ACCENTS.length]}`}
          >
            <motion.div
              className="mb-4 flex items-baseline justify-between"
              whileHover={{ x: 4 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-base font-normal text-white/90 md:text-lg">
                {service.title}
              </h3>
              <motion.span
                className={`text-lg font-light ${FEE_COLORS[i]}`}
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.3 }}
              >
                {service.fee}
              </motion.span>
            </motion.div>
            <p className="text-xs font-light leading-relaxed text-white/55 md:text-sm">
              {service.description}
            </p>
            <p className="mt-3 text-[11px] font-light text-white/40">{service.feeNote}</p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {service.examples.map((ex) => (
                <motion.span
                  key={ex}
                  className="rounded-md border border-white/10 bg-white/[0.06] px-2 py-1 text-[10px] font-light text-white/50"
                  whileHover={{ scale: 1.08, y: -2 }}
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
        <GlassCard
          hover={false}
          className="border-indigo-400/15 bg-gradient-to-r from-indigo-500/[0.08] via-violet-500/[0.06] to-sky-500/[0.08] !p-5 md:!p-6"
        >
          <p className="mb-4 text-xs font-light tracking-wide text-indigo-200/70">
            accepted crypto payments
          </p>
          <div className="flex flex-wrap gap-4 md:gap-6">
            {acceptedCryptos.map((crypto, i) => (
              <motion.div
                key={crypto.id}
                className="flex items-center gap-2.5"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04, duration: 0.3 }}
                whileHover={{ scale: 1.1, y: -4 }}
              >
                <CryptoIcon id={crypto.id} className="h-7 w-7" />
                <div>
                  <p className="text-xs font-light text-white/80">{crypto.name}</p>
                  <p className="text-[10px] font-light text-white/40">{crypto.symbol}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </GlassCard>
      </motion.div>
    </SectionWrapper>
  );
}
