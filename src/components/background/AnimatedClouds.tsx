"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useCallback, useEffect, useRef } from "react";

const CLOUDS = [
  { id: 1, x: "5%", y: "18%", scale: 1.1, opacity: 0.22, duration: 14, delay: 0, tint: "text-sky-200/40" },
  { id: 2, x: "58%", y: "14%", scale: 0.95, opacity: 0.18, duration: 16, delay: 1, tint: "text-violet-200/35" },
  { id: 3, x: "30%", y: "32%", scale: 1.25, opacity: 0.15, duration: 18, delay: 0.5, tint: "text-cyan-100/30" },
  { id: 4, x: "72%", y: "38%", scale: 0.8, opacity: 0.2, duration: 13, delay: 2, tint: "text-sky-100/35" },
  { id: 5, x: "12%", y: "52%", scale: 1.05, opacity: 0.17, duration: 15, delay: 1.5, tint: "text-indigo-200/30" },
  { id: 6, x: "48%", y: "62%", scale: 1.15, opacity: 0.14, duration: 17, delay: 0.8, tint: "text-violet-100/28" },
  { id: 7, x: "82%", y: "68%", scale: 0.9, opacity: 0.19, duration: 14, delay: 2.5, tint: "text-sky-200/32" },
];

function CloudShape({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 120"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M48 88c-18 0-32-14-32-32 0-16 12-29 28-31 4-22 24-38 48-38 22 0 40 14 46 34 16 2 28 16 28 33 0 19-15 34-34 34H48z" />
    </svg>
  );
}

export function AnimatedClouds() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 120, damping: 18 });
  const springY = useSpring(mouseY, { stiffness: 120, damping: 18 });

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      mouseX.set(x * 70);
      mouseY.set(y * 50);
    },
    [mouseX, mouseY],
  );

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed -top-[8%] -left-[3%] -right-[3%] bottom-0 z-0 overflow-visible"
      aria-hidden
    >
      {CLOUDS.map((cloud) => (
        <InteractiveCloud
          key={cloud.id}
          cloud={cloud}
          springX={springX}
          springY={springY}
        />
      ))}
    </div>
  );
}

function InteractiveCloud({
  cloud,
  springX,
  springY,
}: {
  cloud: (typeof CLOUDS)[number];
  springX: ReturnType<typeof useSpring>;
  springY: ReturnType<typeof useSpring>;
}) {
  const parallaxX = useTransform(springX, (v) => v * (cloud.id % 3 === 0 ? 2 : 1.2));
  const parallaxY = useTransform(springY, (v) => v * (cloud.id % 2 === 0 ? 1.6 : 1));

  return (
    <motion.div
      className="pointer-events-auto absolute cursor-default will-change-transform"
      style={{
        left: cloud.x,
        top: cloud.y,
        x: parallaxX,
        y: parallaxY,
      }}
    >
      <motion.div
        className={cloud.tint}
        style={{ scale: cloud.scale, opacity: cloud.opacity }}
        animate={{
          x: [0, 55, -40, 25, 0],
          y: [0, -22, 14, -10, 0],
        }}
        transition={{
          duration: cloud.duration,
          delay: cloud.delay,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        whileHover={{ opacity: cloud.opacity + 0.12, scale: cloud.scale * 1.08 }}
        whileTap={{ scale: cloud.scale * 0.96, opacity: cloud.opacity + 0.15 }}
      >
        <CloudShape className="h-24 w-48 md:h-32 md:w-64 lg:h-40 lg:w-80" />
      </motion.div>
    </motion.div>
  );
}
