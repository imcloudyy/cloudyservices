"use client";

import { motion } from "framer-motion";

const BLOBS = [
  { color: "rgba(125,211,252,0.22)", x: "5%", y: "10%", size: 440, duration: 10 },
  { color: "rgba(167,139,250,0.2)", x: "65%", y: "8%", size: 400, duration: 12 },
  { color: "rgba(103,232,249,0.16)", x: "40%", y: "55%", size: 520, duration: 14 },
  { color: "rgba(253,164,175,0.12)", x: "78%", y: "62%", size: 360, duration: 11 },
  { color: "rgba(129,140,248,0.14)", x: "20%", y: "75%", size: 380, duration: 13 },
];

export function OrganicBlobs() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-visible" aria-hidden>
      {BLOBS.map((blob, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-[90px] will-change-transform"
          style={{
            left: blob.x,
            top: blob.y,
            width: blob.size,
            height: blob.size,
            background: blob.color,
          }}
          animate={{
            x: [0, 70, -50, 35, 0],
            y: [0, -50, 35, -25, 0],
            scale: [1, 1.15, 0.9, 1.1, 1],
          }}
          transition={{
            duration: blob.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
