"use client";
import { motion } from "motion/react";
import { Counter } from "./Counter";
import { DotField } from "./Ornaments";

type Metric = {
  n: number;
  suffix?: string;
  prefix?: string;
  label: string;
  format?: (v: number) => string;
};

const metrics: Metric[] = [
  { n: 50, suffix: "+", label: "Businesses Supported" },
  {
    n: 500,
    prefix: "₹",
    suffix: "Cr+",
    label: "Financial Oversight",
  },
  { n: 15, suffix: "+", label: "Years of Experience" },
  { n: 48, suffix: " hrs", label: "Reporting Turnaround" },
];

export function Metrics() {
  return (
    <section className="relative py-24 md:py-28 border-y border-border overflow-hidden">
      <DotField className="inset-0 text-navy" opacity={0.05} size={24} />
      <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-border">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="px-4 py-10 md:py-6 text-center space-y-3 group"
            >
              <Counter
                value={m.n}
                prefix={m.prefix}
                suffix={m.suffix}
                className="block font-serif text-5xl md:text-6xl text-navy tracking-tight"
              />
              <motion.span
                className="block h-px w-6 mx-auto bg-gold origin-center"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.4 + i * 0.1 }}
              />
              <p className="text-xs tracking-[0.2em] uppercase text-foreground/60">{m.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
