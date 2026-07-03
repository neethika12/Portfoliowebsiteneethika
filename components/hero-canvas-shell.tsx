"use client";

import dynamic from "next/dynamic";

const HeroCanvas = dynamic(() => import("@/components/hero-canvas").then((module) => module.HeroCanvas), {
  ssr: false,
  loading: () => <div className="hero-canvas-placeholder" />,
});

export function HeroCanvasShell() {
  return <HeroCanvas />;
}
