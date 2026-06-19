"use client";

import { AnimatedClouds } from "@/components/background/AnimatedClouds";
import { OrganicBlobs } from "@/components/background/OrganicBlobs";

export function PageBackground() {
  return (
    <>
      <div className="fixed inset-0 -z-20 bg-[#08080c]" aria-hidden />
      <OrganicBlobs />
      <AnimatedClouds />
      <div
        className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_rgba(30,32,45,0.4)_0%,_transparent_50%)]"
        aria-hidden
      />
    </>
  );
}
