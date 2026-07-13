"use client";
import { motion } from "motion/react";
import { Gold } from "./primitives";
import { Reveal, Stagger, StaggerItem } from "./motion-primitives";
import { GridField, Constellation, CornerBracket, GoldOrb, DiagonalHatch } from "./Ornaments";

const pillars = [
  {
    n: "i",
    title: "Human Reviewed",
    body: "Every report. Every number. Signed off by a partner, not a workflow.",
  },
  {
    n: "ii",
    title: "AI Assisted",
    body: "Faster, more consistent, and grounded in the data behind every decision.",
  },
  {
    n: "iii",
    title: "One Point of Contact",
    body: "No juggling advisors. One relationship across finance, tax, HR, and compliance.",
  },
  {
    n: "iv",
    title: "Long-Term Partnership",
    body: "We grow with your business — and stay accountable to its trajectory.",
  },
];

export function WhyIntrinsq() {
  return (
    <section className="relative bg-navy text-cream py-28 md:py-40 overflow-hidden">
      <GridField className="inset-0 text-cream" opacity={0.045} />
      <DiagonalHatch className="inset-0 text-gold" opacity={0.05} gap={18} />
      <Constellation
        className="hidden md:block -right-20 top-10 text-gold"
        width={620}
        height={620}
      />

      <GoldOrb className="-left-40 bottom-0" size={480} intensity={0.14} />
      <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal className="max-w-4xl mb-16 md:mb-24 space-y-6">
          <span className="eyebrow eyebrow-line">Why IntrinsQ</span>
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-cream">
            Advice Built <br />
            Around <Gold>Judgment.</Gold>
          </h2>
        </Reveal>

        <Stagger className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-cream/10" stagger={0.1}>
          {pillars.map((p) => (
            <StaggerItem key={p.title}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 250, damping: 20 }}
                className="relative bg-navy p-8 md:p-10 space-y-4 min-h-[260px] group overflow-hidden h-full"
              >
                <CornerBracket className="bottom-3 right-3 rotate-180" size={32} />
                <motion.span
                  className="absolute top-0 left-0 h-px bg-gold origin-left"
                  initial={{ scaleX: 0.2 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  style={{ width: "100%" }}
                />
                <span className="block h-px w-8 bg-gold transition-all duration-500 group-hover:w-16" />
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-serif text-2xl text-cream">{p.title}</h3>
                  <span className="font-serif italic text-gold/50 text-lg tracking-widest">
                    {p.n}
                  </span>
                </div>
                <p className="text-cream/70 leading-relaxed">{p.body}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
