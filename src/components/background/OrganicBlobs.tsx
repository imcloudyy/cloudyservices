"use client";

import { motion } from "framer-motion";

const BLOBS = [
  { color: "rgba(100,120,180,0.12)", x: "10%", y: "20%", size: 420, duration: 22 },
  { color: "rgba(80,90,140,0.1)", x: "70%", y: "15%", size: 380, duration: 26 },
  { color: "rgba(120,110,160,0.08)", x: "45%", y: "60%", size: 500, duration: 30 },
  { color: "rgba(60,70,110,0.1)", x: "80%", y: "70%", size: 340, duration: 24 },
];

export function OrganicBlobs() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
      {BLOBS.map((blob, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-[80px] will-change-transform"
          style={{
            left: blob.x,
            top: blob.y,
            width: blob.size,
            height: blob.size,
            background: blob.color,
          }}
          animate={{
            x: [0, 40, -30, 20, 0],
            y: [0, -30, 20, -15, 0],
            scale: [1, 1.08, 0.95, 1.04, 1],
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
