"use client";
import { motion } from "motion/react";
import { Eyebrow, SectionHeading, Gold } from "./primitives";
import { Reveal, Stagger, StaggerItem } from "./motion-primitives";
import { DotField, CornerBracket, DiagonalHatch, ArchOutline } from "./Ornaments";

const groups = [
  {
    numeral: "I",
    label: "Growing Businesses",
    meta: "₹50L — ₹10Cr revenue",
    focus: ["Virtual CFO", "Payroll", "MIS", "Tax", "Compliance"],
    line: "For founders scaling past the first plateau, when instinct is no longer enough.",
  },
  {
    numeral: "II",
    label: "Professionals & Families",
    meta: "High-earning individuals",
    focus: ["Planning", "Investments", "Taxes", "Insurance", "Retirement Dashboard"],
    line: "For those whose income is strong but whose time is scarce — advice that protects and compounds.",
  },
];

export function WhoWeServe() {
  return (
    <section className="relative py-28 md:py-40 bg-cream-deep overflow-hidden">
      <DotField className="inset-0 text-navy" opacity={0.06} size={32} />
      <DiagonalHatch className="inset-0 text-navy" opacity={0.035} gap={22} />
      <ArchOutline
        className="-left-32 top-1/2 -translate-y-1/2 opacity-60 hidden md:block"
        width={420}
        height={560}
      />
      <ArchOutline
        className="-right-32 top-1/2 -translate-y-1/2 scale-x-[-1] opacity-40 hidden md:block"
        width={420}
        height={560}
      />
      <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal className="max-w-3xl space-y-6 mb-16 md:mb-24">
          <Eyebrow>Who We Work With</Eyebrow>
          <SectionHeading className="text-navy">
            Two audiences. <Gold>One standard of advice.</Gold>
          </SectionHeading>
        </Reveal>

        {/* Center ampersand between cards */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-[62%] -translate-x-1/2 -translate-y-1/2 hidden md:flex flex-col items-center gap-3 z-10"
        >
          <span className="h-16 w-px bg-navy/20" />
          <span className="font-serif italic text-2xl text-gold/70">&amp;</span>
          <span className="h-16 w-px bg-navy/20" />
        </div>

        <Stagger className="grid md:grid-cols-2 gap-6" stagger={0.15}>
          {groups.map((g) => (
            <StaggerItem key={g.label}>
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="relative bg-background p-10 md:p-14 border border-border min-h-[420px] flex flex-col justify-between overflow-hidden group"
              >
                <CornerBracket className="top-3 left-3" size={40} />
                <CornerBracket className="top-3 right-3 scale-x-[-1]" size={40} />
                <motion.span
                  className="absolute top-0 left-0 h-1 bg-gold origin-left"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
                  style={{ width: "100%" }}
                />
                <span
                  aria-hidden
                  className="pointer-events-none absolute -bottom-6 -right-4 font-serif italic text-[12rem] leading-none text-navy/[0.05] select-none"
                >
                  {g.numeral}
                </span>
                <div className="relative space-y-6">
                  <div className="flex items-baseline justify-between border-b border-border pb-4">
                    <h3 className="font-serif text-3xl md:text-4xl text-navy">{g.label}</h3>
                    <span className="text-xs tracking-[0.18em] uppercase text-gold">{g.meta}</span>
                  </div>
                  <p className="text-foreground/70 text-lg leading-relaxed max-w-md">{g.line}</p>
                </div>
                <ul className="relative mt-10 grid grid-cols-2 gap-y-3 gap-x-6">
                  {g.focus.map((f, i) => (
                    <motion.li
                      key={f}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{
                        duration: 0.5,
                        delay: 0.5 + i * 0.07,
                      }}
                      className="font-serif text-xl text-navy flex items-baseline gap-3 group/item"
                    >
                      <span className="h-1 w-1 rounded-full bg-gold transition-all duration-300 group-hover/item:w-4" />
                      {f}
                    </motion.li>
                  ))}
                </ul>
              </motion.article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
