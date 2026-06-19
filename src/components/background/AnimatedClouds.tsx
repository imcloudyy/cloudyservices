"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useCallback, useEffect, useRef } from "react";

const CLOUDS = [
  { id: 1, x: "8%", y: "12%", scale: 1.1, opacity: 0.14, duration: 48, delay: 0 },
  { id: 2, x: "62%", y: "8%", scale: 0.9, opacity: 0.1, duration: 55, delay: 4 },
  { id: 3, x: "35%", y: "28%", scale: 1.3, opacity: 0.08, duration: 62, delay: 2 },
  { id: 4, x: "78%", y: "35%", scale: 0.75, opacity: 0.12, duration: 44, delay: 6 },
  { id: 5, x: "15%", y: "55%", scale: 1, opacity: 0.09, duration: 58, delay: 1 },
  { id: 6, x: "50%", y: "65%", scale: 1.2, opacity: 0.07, duration: 65, delay: 3 },
  { id: 7, x: "85%", y: "72%", scale: 0.85, opacity: 0.11, duration: 50, delay: 5 },
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
  const springX = useSpring(mouseX, { stiffness: 40, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 40, damping: 20 });

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      mouseX.set(x * 40);
      mouseY.set(y * 30);
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
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
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
  const parallaxX = useTransform(springX, (v) => v * (cloud.id % 3 === 0 ? 1.5 : 0.8));
  const parallaxY = useTransform(springY, (v) => v * (cloud.id % 2 === 0 ? 1.2 : 0.6));

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
        className="text-white"
        style={{ scale: cloud.scale, opacity: cloud.opacity }}
        animate={{
          x: [0, 30, -20, 15, 0],
          y: [0, -12, 8, -6, 0],
        }}
        transition={{
          duration: cloud.duration,
          delay: cloud.delay,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        whileHover={{ opacity: cloud.opacity + 0.08, scale: cloud.scale * 1.06 }}
        whileTap={{ scale: cloud.scale * 0.98, opacity: cloud.opacity + 0.12 }}
      >
        <CloudShape className="h-24 w-48 md:h-32 md:w-64 lg:h-40 lg:w-80" />
      </motion.div>
    </motion.div>
  );
}
