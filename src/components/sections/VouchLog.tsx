"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { Star } from "lucide-react";
import { GlassCard } from "@/components/layout/GlassCard";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { FilterTabs } from "@/components/ui/FilterTabs";
import { vouches, type VouchCategory } from "@/data/vouches";

type Filter = "all" | VouchCategory;

const TABS: { id: Filter; label: string }[] = [
  { id: "all", label: "all" },
  { id: "accounts", label: "accounts" },
  { id: "crypto", label: "crypto" },
];

export function VouchLog() {
  const [filter, setFilter] = useState<Filter>("all");

  const filtered = useMemo(
    () => (filter === "all" ? vouches : vouches.filter((v) => v.category === filter)),
    [filter],
  );

  return (
    <SectionWrapper
      id="vouches"
      title="vouch log"
      subtitle="verified client feedback from completed deals."
    >
      <div className="mb-8">
        <FilterTabs tabs={TABS} active={filter} onChange={setFilter} />
      </div>

      <motion.div layout className="grid gap-4 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {filtered.map((vouch, i) => (
            <motion.div
              key={vouch.id}
              layout
              initial={{ opacity: 0, scale: 0.95, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -8 }}
              transition={{ duration: 0.35, delay: i * 0.04 }}
            >
              <GlassCard delay={0} className="h-full !p-5">
                <div className="mb-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <motion.div whileHover={{ rotate: 15 }}>
                      <Star className="h-3 w-3 fill-amber-400/60 text-amber-400/60" strokeWidth={1} />
                    </motion.div>
                    <span className="text-xs font-light text-white/50">{vouch.client}</span>
                  </div>
                  <span className="rounded-full border border-white/[0.06] px-2 py-0.5 text-[10px] font-light text-white/30">
                    {vouch.category}
                  </span>
                </div>
                <p className="text-sm font-light text-white/75">{vouch.deal}</p>
                <p className="mt-1 text-xs font-light text-white/40">{vouch.amount}</p>
                <p className="mt-3 text-xs font-light leading-relaxed text-white/35">
                  &ldquo;{vouch.note}&rdquo;
                </p>
                <p className="mt-3 text-[10px] font-light text-white/20">{vouch.date}</p>
              </GlassCard>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </SectionWrapper>
  );
}
