"use client";

import { motion } from "framer-motion";

export function StatusIndicator() {
  return (
    <motion.div
      className="inline-flex items-center gap-2.5 rounded-full border border-emerald-400/30 bg-emerald-500/12 px-4 py-2 shadow-[0_0_24px_rgba(52,211,153,0.12)]"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.3, duration: 0.35 }}
      whileHover={{ scale: 1.05, y: -2 }}
    >
      <span className="relative flex h-2 w-2">
        <motion.span
          className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"
          animate={{ scale: [1, 2.2, 1], opacity: [0.8, 0, 0.8] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
        />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
      </span>
      <span className="text-xs font-light tracking-wide text-emerald-200 md:text-sm">
        online & available for deals
      </span>
    </motion.div>
  );
}
