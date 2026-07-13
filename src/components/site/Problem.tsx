"use client";
import { motion } from "motion/react";
import { Eyebrow, SectionHeading, Gold } from "./primitives";
import { Reveal, Stagger, StaggerItem } from "./motion-primitives";
import { DotField, ArchOutline } from "./Ornaments";

const cards = [
  {
    n: "01",
    title: "No Financial Visibility",
    lines: ["Revenue is growing.", "Profit isn't.", "Nobody can tell you why."],
  },
  {
    n: "02",
    title: "Reactive Compliance",
    lines: ["GST. Payroll. Tax.", "Everything happens at the deadline.", "Nothing is planned."],
  },
  {
    n: "03",
    title: "Disconnected Advisors",
    lines: ["Accountant. HR. Tax.", "Everyone works separately.", "Nobody owns the full picture."],
  },
];

export function Problem() {
  return (
    <section id="about" className="relative py-28 md:py-40 overflow-hidden">
      <ArchOutline className="hidden lg:block -left-16 top-24 text-navy" width={280} height={420} />
      <DotField className="inset-0 text-navy" opacity={0.05} size={28} />
      <div className="relative mx-auto max-w-[1400px] px-6 md:px-10 grid lg:grid-cols-12 gap-12 lg:gap-20">
        <Reveal className="lg:col-span-5 space-y-8 lg:sticky lg:top-32 lg:self-start">
          <Eyebrow>The Modern Business</Eyebrow>
          <SectionHeading className="text-navy">
            Running a business shouldn't mean <Gold>guessing</Gold> your numbers.
          </SectionHeading>
          <p className="text-lg text-foreground/70 leading-relaxed max-w-md">
            Most growing companies operate on lagging information and fragmented advice. By the time
            the picture is clear, the decision has already been made — often the wrong one.
          </p>
        </Reveal>

        <Stagger className="lg:col-span-7 space-y-5" stagger={0.12}>
          {cards.map((c) => (
            <StaggerItem key={c.n}>
              <motion.article
                whileHover={{ x: 6 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="group relative bg-card border border-border p-8 md:p-10 flex gap-8 overflow-hidden"
              >
                <motion.span
                  className="absolute inset-y-0 left-0 w-px bg-gold origin-top"
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                />
                <motion.span
                  className="absolute inset-0 bg-cream-deep -z-0"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  style={{ transformOrigin: "left" }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                />
                <span className="relative font-serif text-2xl text-gold shrink-0 pt-1">{c.n}</span>
                <div className="relative space-y-3">
                  <h3 className="font-serif text-2xl md:text-3xl text-navy">{c.title}</h3>
                  <div className="space-y-1 text-foreground/70">
                    {c.lines.map((l) => (
                      <p key={l}>{l}</p>
                    ))}
                  </div>
                </div>
              </motion.article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
