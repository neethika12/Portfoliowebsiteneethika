"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 220,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{
        scaleX,
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: 4,
        transformOrigin: "0% 50%",
        background: "linear-gradient(90deg, var(--indigo) 0%, var(--lime-dark) 100%)",
        zIndex: 60,
      }}
    />
  );
}
