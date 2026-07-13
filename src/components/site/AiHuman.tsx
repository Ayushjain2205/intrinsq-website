"use client";
import { Check } from "lucide-react";
import { motion } from "motion/react";
import { Gold } from "./primitives";
import { Reveal } from "./motion-primitives";
import { GridField, GoldOrb, Constellation, ConcentricArcs, DiagonalHatch } from "./Ornaments";

const ai = [
  "Data preparation",
  "Report generation",
  "Reconciliation",
  "Payroll calculations",
  "Workflow automation",
];
const human = [
  "Judgment",
  "Strategy",
  "Difficult decisions",
  "Financial planning",
  "Business conversations",
];

function Column({
  label,
  title,
  items,
  side,
}: {
  label: string;
  title: string;
  items: string[];
  side: "left" | "right";
}) {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, x: side === "left" ? -20 : 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="space-y-2"
      >
        <p className="text-xs tracking-[0.22em] text-gold uppercase">{label}</p>
        <h3 className="font-serif text-3xl md:text-4xl text-cream">{title}</h3>
      </motion.div>
      <ul className="space-y-4">
        {items.map((it, i) => (
          <motion.li
            key={it}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.6,
              delay: 0.15 + i * 0.09,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="group flex items-start gap-4 pb-4 border-b border-cream/10 hover:border-gold/50 transition-colors"
          >
            <motion.span whileHover={{ scale: 1.3, rotate: 10 }} className="inline-flex">
              <Check className="h-4 w-4 text-gold mt-1.5 shrink-0" strokeWidth={2} />
            </motion.span>
            <span className="text-cream/85 text-lg group-hover:text-cream transition-colors">
              {it}
            </span>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

export function AiHuman() {
  return (
    <section
      id="approach"
      className="relative bg-navy-deep text-cream py-28 md:py-40 overflow-hidden"
    >
      {/* Faint editorial grid */}
      <GridField className="inset-0 text-cream" opacity={0.035} />

      {/* Soft vignette */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 40%, transparent 0%, transparent 45%, rgba(0,0,0,0.35) 100%)",
        }}
      />

      <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal className="max-w-3xl mb-16 md:mb-24 space-y-6">
          <span className="eyebrow eyebrow-line">A Process Built on Judgment</span>
          <h2 className="font-serif text-5xl md:text-6xl leading-[1.05] text-cream">
            AI gives us speed. <br />
            <Gold>Experience gives us conviction.</Gold>
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-16 md:gap-24 relative">
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="hidden md:block absolute inset-y-0 left-1/2 w-px bg-gold/40 origin-top"
          />
          <Column side="left" label="AI Handles" title="The Repeatable." items={ai} />
          <Column side="right" label="We Handle" title="The Consequential." items={human} />
        </div>

        <Reveal className="mt-24 md:mt-32 border-t border-cream/15 pt-16">
          <p className="font-serif text-3xl md:text-5xl lg:text-6xl leading-[1.1] text-cream max-w-4xl">
            Technology speeds up the work. <br />
            <Gold>Experience shapes the advice.</Gold>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
