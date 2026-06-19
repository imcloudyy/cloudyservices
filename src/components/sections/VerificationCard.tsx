"use client";

import { motion } from "framer-motion";
import { Shield } from "lucide-react";
import { GlassCard } from "@/components/layout/GlassCard";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { CopyButton } from "@/components/ui/CopyButton";
import { DISCORD_USER_ID } from "@/data/constants";

interface VerificationCardProps {
  inline?: boolean;
}

export function VerificationCard({ inline = false }: VerificationCardProps) {
  const card = (
    <GlassCard
      delay={inline ? 0 : undefined}
      className="border-amber-400/25 bg-gradient-to-br from-amber-500/[0.08] to-orange-500/[0.04] shadow-[0_0_40px_rgba(251,191,36,0.06)]"
      hover
    >
      <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div className="flex items-start gap-3.5">
          <motion.div
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-amber-400/30 bg-amber-400/15"
            animate={{ rotate: [0, 3, -3, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.1, rotate: 8 }}
          >
            <Shield className="h-4 w-4 text-amber-300" strokeWidth={1.5} />
          </motion.div>
          <div className="text-left">
            <p className="text-xs font-light tracking-wide text-amber-200/80">
              anti-scam verification
            </p>
            <motion.p
              className="mt-1.5 font-mono text-sm font-light tracking-wide text-white/90 md:text-base"
              whileHover={{ x: 3 }}
            >
              discord id: {DISCORD_USER_ID}
            </motion.p>
            <p className="mt-1.5 text-xs font-light leading-relaxed text-white/50 md:text-sm">
              right-click my profile → copy user id. must match exactly.
            </p>
          </div>
        </div>
        <CopyButton value={DISCORD_USER_ID} />
      </div>
    </GlassCard>
  );

  if (inline) {
    return card;
  }

  return (
    <SectionWrapper
      id="verify"
      title="anti-scam verification"
      subtitle="always confirm my identity before sending anything. impersonators are common."
    >
      {card}
    </SectionWrapper>
  );
}
