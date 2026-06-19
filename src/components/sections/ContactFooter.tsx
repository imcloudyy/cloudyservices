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
    <footer className="relative px-4 py-20 md:px-6 md:py-28">
      <motion.div
        className="mx-auto max-w-2xl text-center"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <p className="text-xs font-light tracking-wide text-white/35">
          ready to start a deal?
        </p>
        <p className="mt-3 text-sm font-light text-white/50">
          reach out on discord or telegram — i never dm first.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <motion.a
            href={DISCORD_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.06] px-6 py-3 text-sm font-light text-white/75 backdrop-blur-md transition-colors hover:border-white/20 hover:bg-white/[0.1] hover:text-white/90"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            <MessageCircle className="h-4 w-4 text-white/50 group-hover:text-white/70" strokeWidth={1.5} />
            @{DISCORD_USERNAME}
            <ArrowUpRight className="h-3.5 w-3.5 text-white/30 group-hover:text-white/50" strokeWidth={1.5} />
          </motion.a>

          <motion.a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 rounded-full border border-white/[0.06] bg-transparent px-6 py-3 text-sm font-light text-white/45 transition-colors hover:border-white/12 hover:text-white/65"
            whileHover={{ scale: 1.03, y: -1 }}
            whileTap={{ scale: 0.97 }}
          >
            <Send className="h-3.5 w-3.5" strokeWidth={1.5} />
            @{TELEGRAM_USERNAME}
          </motion.a>
        </div>

        <motion.p
          className="mt-16 text-[10px] font-light tracking-wide text-white/20"
          whileInView={{ opacity: [0, 1] }}
          viewport={{ once: true }}
        >
          imcloudy · discord middleman · {new Date().getFullYear()}
        </motion.p>
      </motion.div>
    </footer>
  );
}
