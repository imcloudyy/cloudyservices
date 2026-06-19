"use client";

import { motion } from "framer-motion";

interface FilterTabsProps<T extends string> {
  tabs: { id: T; label: string }[];
  active: T;
  onChange: (id: T) => void;
}

export function FilterTabs<T extends string>({
  tabs,
  active,
  onChange,
}: FilterTabsProps<T>) {
  return (
    <div className="flex flex-wrap gap-2">
      {tabs.map((tab) => {
        const isActive = tab.id === active;
        return (
          <motion.button
            key={tab.id}
            type="button"
            onClick={() => onChange(tab.id)}
            className={`relative rounded-full px-4 py-2 text-xs font-light tracking-wide transition-colors md:text-sm ${
              isActive ? "text-white/90" : "text-white/40 hover:text-white/60"
            }`}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
          >
            {isActive && (
              <motion.span
                layoutId="activeTab"
                className="absolute inset-0 rounded-full border border-white/15 bg-white/[0.08]"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10">{tab.label}</span>
          </motion.button>
        );
      })}
    </div>
  );
}
