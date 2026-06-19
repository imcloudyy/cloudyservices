"use client";

import { motion } from "framer-motion";
import { Check, Copy } from "lucide-react";
import { useState } from "react";

interface CopyButtonProps {
  value: string;
  label?: string;
}

export function CopyButton({ value, label = "click to copy" }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <div className="relative">
      <motion.button
        type="button"
        onClick={handleCopy}
        className="group relative flex items-center gap-2 overflow-hidden rounded-xl border border-white/10 bg-white/[0.06] px-4 py-2.5 text-xs font-light tracking-wide text-white/70 transition-colors hover:border-white/20 hover:bg-white/[0.1] hover:text-white/90 md:text-sm"
        whileHover={{ scale: 1.03, y: -1 }}
        whileTap={{ scale: 0.97 }}
        title={copied ? "hit me up :)" : "copy discord id"}
      >
        <motion.span
          key={copied ? "check" : "copy"}
          initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
        >
          {copied ? (
            <Check className="h-3.5 w-3.5 text-emerald-400" strokeWidth={1.5} />
          ) : (
            <Copy className="h-3.5 w-3.5 text-white/50 group-hover:text-white/70" strokeWidth={1.5} />
          )}
        </motion.span>
        <motion.span
          key={copied ? "copied-text" : "default-text"}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          {copied ? "hit me up :)" : label}
        </motion.span>
        <motion.span
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.06] to-transparent"
          initial={{ x: "-100%" }}
          whileHover={{ x: "100%" }}
          transition={{ duration: 0.6 }}
        />
      </motion.button>

      {copied && (
        <motion.div
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-lg border border-white/10 bg-[#1a1a1f]/90 px-3 py-1 text-[10px] font-light text-white/60 backdrop-blur-md"
        >
          copied — verify before any deal
        </motion.div>
      )}
    </div>
  );
}
