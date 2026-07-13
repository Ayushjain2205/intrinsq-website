"use client";
import { motion } from "motion/react";

/**
 * Subtle decorative SVGs. All absolutely-positioned, pointer-events-none.
 * Parent should be `relative overflow-hidden`.
 */

export function GridField({
  className = "",
  color = "currentColor",
  opacity = 0.06,
}: {
  className?: string;
  color?: string;
  opacity?: number;
}) {
  return (
    <svg
      aria-hidden
      className={"absolute pointer-events-none " + className}
      width="100%"
      height="100%"
      style={{ color, opacity }}
    >
      <defs>
        <pattern id="grid-field" width="42" height="42" patternUnits="userSpaceOnUse">
          <path d="M 42 0 L 0 0 0 42" fill="none" stroke="currentColor" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid-field)" />
    </svg>
  );
}

export function DotField({
  className = "",
  color = "currentColor",
  opacity = 0.15,
  size = 24,
}: {
  className?: string;
  color?: string;
  opacity?: number;
  size?: number;
}) {
  return (
    <svg
      aria-hidden
      className={"absolute pointer-events-none " + className}
      width="100%"
      height="100%"
      style={{ color, opacity }}
    >
      <defs>
        <pattern id={`dot-field-${size}`} width={size} height={size} patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="0.9" fill="currentColor" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#dot-field-${size})`} />
    </svg>
  );
}

export function Compass({
  className = "",
  size = 320,
  spin = true,
}: {
  className?: string;
  size?: number;
  spin?: boolean;
}) {
  return (
    <motion.svg
      aria-hidden
      viewBox="0 0 200 200"
      width={size}
      height={size}
      className={"absolute pointer-events-none text-gold " + className}
      style={{ opacity: 0.18 }}
      animate={spin ? { rotate: 360 } : undefined}
      transition={spin ? { duration: 180, repeat: Infinity, ease: "linear" } : undefined}
    >
      <circle cx="100" cy="100" r="98" fill="none" stroke="currentColor" strokeWidth="0.4" />
      <circle cx="100" cy="100" r="78" fill="none" stroke="currentColor" strokeWidth="0.4" />
      <circle cx="100" cy="100" r="58" fill="none" stroke="currentColor" strokeWidth="0.4" />
      <circle cx="100" cy="100" r="1.5" fill="currentColor" />
      {Array.from({ length: 24 }).map((_, i) => {
        const a = (i * 15 * Math.PI) / 180;
        const long = i % 6 === 0;
        const r1 = long ? 70 : 78;
        const r2 = 98;
        return (
          <line
            key={i}
            x1={100 + Math.cos(a) * r1}
            y1={100 + Math.sin(a) * r1}
            x2={100 + Math.cos(a) * r2}
            y2={100 + Math.sin(a) * r2}
            stroke="currentColor"
            strokeWidth={long ? "0.8" : "0.35"}
          />
        );
      })}
      <polygon points="100,30 104,100 100,170 96,100" fill="currentColor" opacity="0.5" />
    </motion.svg>
  );
}

export function ArchOutline({
  className = "",
  width = 320,
  height = 480,
}: {
  className?: string;
  width?: number;
  height?: number;
}) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 200 300"
      width={width}
      height={height}
      className={"absolute pointer-events-none text-gold " + className}
      style={{ opacity: 0.14 }}
      fill="none"
      stroke="currentColor"
    >
      <path d="M10 300 L10 100 A90 90 0 0 1 190 100 L190 300" strokeWidth="0.6" />
      <path d="M25 300 L25 105 A75 75 0 0 1 175 105 L175 300" strokeWidth="0.4" />
      <path d="M40 300 L40 110 A60 60 0 0 1 160 110 L160 300" strokeWidth="0.3" />
      <line x1="0" y1="300" x2="200" y2="300" strokeWidth="0.5" />
    </svg>
  );
}

export function CornerBracket({
  className = "",
  size = 64,
  color = "text-gold",
}: {
  className?: string;
  size?: number;
  color?: string;
}) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 64 64"
      width={size}
      height={size}
      className={"absolute pointer-events-none " + color + " " + className}
      style={{ opacity: 0.55 }}
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
    >
      <path d="M2 20 L2 2 L20 2" />
      <path d="M62 20 L62 2 L44 2" />
    </svg>
  );
}

export function GoldOrb({
  className = "",
  size = 500,
  intensity = 0.14,
}: {
  className?: string;
  size?: number;
  intensity?: number;
}) {
  return (
    <motion.div
      aria-hidden
      className={"absolute pointer-events-none rounded-full " + className}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, rgba(212,175,120,${intensity}), transparent 65%)`,
      }}
      animate={{ scale: [1, 1.08, 1], opacity: [0.6, 1, 0.6] }}
      transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}

export function VerticalRule({
  className = "",
  color = "text-gold",
  height = "100%",
  opacity = 0.25,
}: {
  className?: string;
  color?: string;
  height?: string | number;
  opacity?: number;
}) {
  return (
    <span
      aria-hidden
      className={"absolute w-px pointer-events-none " + color + " " + className}
      style={{ height, backgroundColor: "currentColor", opacity }}
    />
  );
}

export function Constellation({
  className = "",
  width = 520,
  height = 520,
}: {
  className?: string;
  width?: number;
  height?: number;
}) {
  const pts: [number, number][] = [
    [40, 60],
    [140, 30],
    [230, 100],
    [320, 55],
    [420, 130],
    [90, 180],
    [200, 220],
    [310, 200],
    [400, 260],
    [480, 200],
    [60, 320],
    [170, 360],
    [270, 320],
    [370, 380],
    [460, 340],
    [120, 460],
    [230, 440],
    [340, 480],
    [430, 450],
  ];
  const edges: [number, number][] = [
    [0, 1],
    [1, 2],
    [2, 3],
    [3, 4],
    [0, 5],
    [5, 6],
    [2, 6],
    [6, 7],
    [7, 3],
    [7, 8],
    [8, 9],
    [4, 9],
    [5, 10],
    [10, 11],
    [11, 12],
    [6, 12],
    [12, 13],
    [8, 13],
    [13, 14],
    [9, 14],
    [10, 15],
    [15, 16],
    [11, 16],
    [16, 17],
    [12, 17],
    [17, 18],
    [13, 18],
    [14, 18],
  ];
  return (
    <svg
      aria-hidden
      viewBox="0 0 520 520"
      width={width}
      height={height}
      className={"absolute pointer-events-none text-gold " + className}
      style={{ opacity: 0.22 }}
    >
      {edges.map(([a, b], i) => (
        <line
          key={i}
          x1={pts[a][0]}
          y1={pts[a][1]}
          x2={pts[b][0]}
          y2={pts[b][1]}
          stroke="currentColor"
          strokeWidth="0.4"
        />
      ))}
      {pts.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={i % 4 === 0 ? 2.2 : 1.2} fill="currentColor" />
      ))}
    </svg>
  );
}

export function ConcentricArcs({
  className = "",
  size = 600,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <motion.svg
      aria-hidden
      viewBox="0 0 300 300"
      width={size}
      height={size}
      className={"absolute pointer-events-none text-gold " + className}
      style={{ opacity: 0.2 }}
      fill="none"
      stroke="currentColor"
      initial={{ rotate: -20 }}
      animate={{ rotate: 20 }}
      transition={{ duration: 30, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
    >
      {[40, 70, 100, 130, 160, 190, 220].map((r, i) => (
        <circle
          key={r}
          cx="150"
          cy="150"
          r={r}
          strokeWidth={i % 2 ? "0.4" : "0.6"}
          strokeDasharray={i % 3 ? "1 4" : undefined}
        />
      ))}
      <circle cx="150" cy="150" r="4" fill="currentColor" />
    </motion.svg>
  );
}

export function DiagonalHatch({
  className = "",
  color = "currentColor",
  opacity = 0.08,
  gap = 10,
}: {
  className?: string;
  color?: string;
  opacity?: number;
  gap?: number;
}) {
  return (
    <svg
      aria-hidden
      className={"absolute pointer-events-none " + className}
      width="100%"
      height="100%"
      style={{ color, opacity }}
    >
      <defs>
        <pattern
          id={`hatch-${gap}`}
          width={gap}
          height={gap}
          patternUnits="userSpaceOnUse"
          patternTransform="rotate(45)"
        >
          <line x1="0" y1="0" x2="0" y2={gap} stroke="currentColor" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#hatch-${gap})`} />
    </svg>
  );
}
