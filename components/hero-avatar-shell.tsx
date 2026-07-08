"use client";

import dynamic from "next/dynamic";

const HeroAvatar = dynamic(() => import("@/components/hero-avatar").then((module) => module.HeroAvatar), {
  ssr: false,
  loading: () => <div className="hero-canvas-placeholder" />,
});

export function HeroAvatarShell() {
  return <HeroAvatar />;
}
