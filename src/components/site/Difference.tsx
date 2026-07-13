"use client";
import { Eye, BookOpen, Compass, Target, TrendingUp } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Gold } from "./primitives";
import { Reveal } from "./motion-primitives";
import { GridField, ConcentricArcs, DiagonalHatch } from "./Ornaments";

const steps = [
  { icon: Eye, label: "Observe" },
  { icon: BookOpen, label: "Understand" },
  { icon: Compass, label: "Advise" },
  { icon: Target, label: "Execute" },
  { icon: TrendingUp, label: "Compound" },
];

export function Difference() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative bg-navy text-cream py-28 md:py-40 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.12] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 20% 20%, rgba(212,175,120,0.3) 0%, transparent 50%), radial-gradient(ellipse at 80% 80%, rgba(212,175,120,0.2) 0%, transparent 50%)",
        }}
      />
      <motion.div
        className="absolute -top-40 -right-40 w-[36rem] h-[36rem] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(212,175,120,0.14), transparent 70%)",
        }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <GridField className="inset-0 text-cream" opacity={0.04} />
      <DiagonalHatch className="inset-0 text-gold" opacity={0.05} gap={14} />

      <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal className="max-w-3xl space-y-6 mb-20 md:mb-28">
          <span className="eyebrow eyebrow-line">The IntrinsQ Difference</span>
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-cream">
            One Advisory <Gold>House.</Gold>
          </h2>
          <p className="text-lg text-cream/70 max-w-2xl leading-relaxed">
            Finance. HR. Tax. Compliance. AI. Human judgment. Every discipline under one roof,
            working from the same understanding of your business.
          </p>
        </Reveal>

        <div ref={ref} className="relative">
          <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-px bg-cream/10" />
          <motion.div
            className="hidden md:block absolute top-8 left-[10%] h-px bg-gold origin-left"
            style={{ right: "10%" }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: inView ? 1 : 0 }}
            transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          />

          <ol className="grid grid-cols-2 md:grid-cols-5 gap-10 md:gap-4 relative">
            {steps.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.li
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.7,
                    delay: 0.4 + i * 0.15,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="text-center space-y-5 group"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    className="relative mx-auto w-16 h-16 rounded-full border border-gold/60 bg-navy flex items-center justify-center"
                  >
                    <motion.span
                      className="absolute inset-0 rounded-full bg-gold/20 blur-md"
                      animate={{ opacity: [0.3, 0.7, 0.3] }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.4,
                        ease: "easeInOut",
                      }}
                    />
                    <Icon className="relative h-6 w-6 text-gold" strokeWidth={1.25} />
                  </motion.div>
                  <div className="space-y-1">
                    <p className="text-xs tracking-[0.2em] text-gold/80">0{i + 1}</p>
                    <p className="font-serif text-2xl text-cream">{s.label}</p>
                  </div>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
