"use client";
import { useEffect, useRef } from "react";
import { animate, useInView } from "motion/react";

type Props = {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
  format?: (n: number) => string;
};

export function Counter({
  value,
  suffix = "",
  prefix = "",
  duration = 2,
  className,
  format,
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  useEffect(() => {
    if (!inView || !ref.current) return;
    const node = ref.current;
    const controls = animate(0, value, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate(v) {
        const rounded = value >= 100 ? Math.round(v) : Math.round(v * 10) / 10;
        node.textContent = `${prefix}${format ? format(v) : rounded}${suffix}`;
      },
    });
    return () => controls.stop();
  }, [inView, value, duration, prefix, suffix, format]);

  return (
    <span ref={ref} className={className}>
      {prefix}0{suffix}
    </span>
  );
}
