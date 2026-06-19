"use client";

import { motion } from "framer-motion";
import { Shield } from "lucide-react";
import { GlassCard } from "@/components/layout/GlassCard";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { CopyButton } from "@/components/ui/CopyButton";
import { DISCORD_USER_ID } from "@/data/constants";

export function VerificationCard() {
  return (
    <SectionWrapper
      id="verify"
      title="anti-scam verification"
      subtitle="always confirm my identity before sending anything. impersonators are common."
    >
      <GlassCard className="border-amber-500/15 bg-amber-500/[0.03]">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-start gap-4">
            <motion.div
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-amber-500/20 bg-amber-500/[0.08]"
              whileHover={{ rotate: [0, -5, 5, 0], scale: 1.05 }}
              transition={{ duration: 0.4 }}
            >
              <Shield className="h-4 w-4 text-amber-400/80" strokeWidth={1.5} />
            </motion.div>
            <div>
              <p className="text-xs font-light tracking-wide text-amber-300/60">
                verify via developer mode
              </p>
              <motion.p
                className="mt-2 font-mono text-sm font-light tracking-wide text-white/80 md:text-base"
                whileHover={{ x: 2 }}
              >
                discord id: {DISCORD_USER_ID}
              </motion.p>
              <p className="mt-2 text-xs font-light leading-relaxed text-white/35 md:text-sm">
                right-click my profile → copy user id. must match exactly.
              </p>
            </div>
          </div>
          <CopyButton value={DISCORD_USER_ID} />
        </div>
      </GlassCard>
    </SectionWrapper>
  );
}
