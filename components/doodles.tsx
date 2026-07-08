import type { CSSProperties, ReactNode } from "react";

type DoodleProps = {
  variant: "squiggle" | "star" | "circle" | "arrow" | "swirl" | "spark" | "underline" | "dots";
  color?: string;
  size?: number;
  style?: CSSProperties;
  className?: string;
  rotate?: number;
};

const paths: Record<DoodleProps["variant"], { viewBox: string; content: ReactNode }> = {
  squiggle: {
    viewBox: "0 0 120 40",
    content: (
      <path
        d="M4 24C14 6 24 6 34 20C44 34 54 34 64 18C74 2 84 2 94 16C100 24 104 26 116 22"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />
    ),
  },
  star: {
    viewBox: "0 0 60 60",
    content: (
      <path
        d="M30 4 L34 24 L52 18 L37 31 L48 48 L30 37 L12 48 L23 31 L8 18 L26 24 Z"
        strokeWidth="3.5"
        strokeLinejoin="round"
        fill="none"
      />
    ),
  },
  circle: {
    viewBox: "0 0 100 100",
    content: (
      <path
        d="M52 8C28 6 8 22 9 44C10 66 30 86 54 88C78 90 94 72 90 52C87 36 68 20 50 22"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />
    ),
  },
  arrow: {
    viewBox: "0 0 100 70",
    content: (
      <>
        <path d="M6 14C34 6 66 10 88 40" strokeWidth="4" strokeLinecap="round" fill="none" />
        <path d="M68 30C76 34 84 38 88 40C84 44 78 50 74 58" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </>
    ),
  },
  swirl: {
    viewBox: "0 0 80 80",
    content: (
      <path
        d="M40 10C55 10 66 22 64 36C62 48 48 54 40 46C34 40 36 32 44 32C50 32 52 38 48 40"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />
    ),
  },
  spark: {
    viewBox: "0 0 40 40",
    content: (
      <>
        <path d="M20 2V16" strokeWidth="3.5" strokeLinecap="round" />
        <path d="M20 24V38" strokeWidth="3.5" strokeLinecap="round" />
        <path d="M2 20H16" strokeWidth="3.5" strokeLinecap="round" />
        <path d="M24 20H38" strokeWidth="3.5" strokeLinecap="round" />
        <path d="M7 7L16 16" strokeWidth="3.5" strokeLinecap="round" />
        <path d="M24 24L33 33" strokeWidth="3.5" strokeLinecap="round" />
        <path d="M33 7L24 16" strokeWidth="3.5" strokeLinecap="round" />
        <path d="M16 24L7 33" strokeWidth="3.5" strokeLinecap="round" />
      </>
    ),
  },
  underline: {
    viewBox: "0 0 140 20",
    content: (
      <path
        d="M4 14C30 4 50 16 70 10C90 4 110 16 136 8"
        strokeWidth="5"
        strokeLinecap="round"
        fill="none"
      />
    ),
  },
  dots: {
    viewBox: "0 0 90 24",
    content: (
      <>
        <circle cx="8" cy="12" r="4" />
        <circle cx="32" cy="8" r="4" />
        <circle cx="56" cy="16" r="4" />
        <circle cx="80" cy="10" r="4" />
      </>
    ),
  },
};

export function Doodle({ variant, color = "var(--indigo)", size = 60, style, className, rotate = 0 }: DoodleProps) {
  const { viewBox, content } = paths[variant];
  return (
    <svg
      viewBox={viewBox}
      width={size}
      height={(size * Number(viewBox.split(" ")[3])) / Number(viewBox.split(" ")[2])}
      className={className}
      style={{ position: "absolute", pointerEvents: "none", transform: `rotate(${rotate}deg)`, color, stroke: "currentColor", fill: "currentColor", ...style }}
      aria-hidden="true"
    >
      {content}
    </svg>
  );
}
