"use client";
import { motion } from "motion/react";

const items = [
  "Founders",
  "Business Owners",
  "Professionals",
  "Growing Companies",
  "Family Offices",
  "Startups",
];

export function TrustStrip() {
  const row = [...items, ...items];
  return (
    <section className="py-16 border-b border-border/60 overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 text-center mb-8">
        <p className="eyebrow justify-center">Trusted By</p>
      </div>
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
        <motion.div
          className="flex gap-16 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, ease: "linear", repeat: Infinity }}
        >
          {row.map((it, i) => (
            <div key={i} className="flex items-center gap-16 shrink-0">
              <span className="font-serif text-2xl md:text-3xl text-navy/80">{it}</span>
              <span className="h-1 w-1 rounded-full bg-gold" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
