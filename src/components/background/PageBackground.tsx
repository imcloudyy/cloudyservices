"use client";

import { AnimatedClouds } from "@/components/background/AnimatedClouds";
import { OrganicBlobs } from "@/components/background/OrganicBlobs";

export function PageBackground() {
  return (
    <>
      <div
        className="fixed inset-0 -z-20 bg-gradient-to-b from-[#141525] via-[#10111a] to-[#0c0d14]"
        aria-hidden
      />
      <OrganicBlobs />
      <AnimatedClouds />
      <div
        className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_20%_0%,_rgba(125,211,252,0.12)_0%,_transparent_45%),radial-gradient(ellipse_at_80%_10%,_rgba(167,139,250,0.14)_0%,_transparent_40%),radial-gradient(ellipse_at_50%_100%,_rgba(103,232,249,0.08)_0%,_transparent_50%)]"
        aria-hidden
      />
    </>
  );
}
