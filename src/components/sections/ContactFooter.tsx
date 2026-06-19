"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, MessageCircle, Send } from "lucide-react";
import {
  DISCORD_PROFILE_URL,
  DISCORD_USERNAME,
  TELEGRAM_URL,
  TELEGRAM_USERNAME,
} from "@/data/constants";
import { fadeUp } from "@/lib/animations";

export function ContactFooter() {
  return (
    <footer className="relative px-4 py-16 md:px-6 md:py-20">
      <motion.div
        className="mx-auto max-w-2xl text-center"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <motion.a
            href={DISCORD_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 rounded-full border border-sky-400/25 bg-sky-500/10 px-6 py-3 text-sm font-light text-sky-100/90 backdrop-blur-md transition-colors hover:border-sky-400/40 hover:bg-sky-500/15"
            whileHover={{ scale: 1.06, y: -3 }}
            whileTap={{ scale: 0.96 }}
          >
            <MessageCircle className="h-4 w-4 text-sky-300/80" strokeWidth={1.5} />
            @{DISCORD_USERNAME}
            <ArrowUpRight className="h-3.5 w-3.5 text-sky-300/50" strokeWidth={1.5} />
          </motion.a>

          <motion.a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 rounded-full border border-violet-400/20 bg-violet-500/10 px-6 py-3 text-sm font-light text-violet-100/80 transition-colors hover:border-violet-400/35 hover:bg-violet-500/15"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.96 }}
          >
            <Send className="h-3.5 w-3.5 text-violet-300/70" strokeWidth={1.5} />
            @{TELEGRAM_USERNAME}
          </motion.a>
        </div>

        <motion.p
          className="mt-12 text-xs font-light tracking-[0.2em] text-white/35"
          animate={{ opacity: [0.35, 0.55, 0.35] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          imcloudy 2026
        </motion.p>
      </motion.div>
    </footer>
  );
}
