"use client";
import { motion } from "motion/react";
import { Reveal } from "./motion-primitives";

const steps = [
  {
    n: "01",
    label: "Discovery",
    body: "We listen. Understand the business, the people, and the numbers behind them.",
  },
  {
    n: "02",
    label: "Proposal",
    body: "A clear scope of advice tailored to where you are and where you want to be.",
  },
  {
    n: "03",
    label: "Onboarding",
    body: "Systems, data, and rhythms set up with care so the machine runs quietly.",
  },
  {
    n: "04",
    label: "Monthly Advisory",
    body: "Reports, reviews, and decisions — a steady cadence of clarity.",
  },
  {
    n: "05",
    label: "Long-Term Partnership",
    body: "We grow with you. The advice compounds, and so does the trust.",
  },
];

export function HowItWorks() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-cream-deep">
      <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal className="mb-10 md:mb-14 text-center space-y-3">
          <h2 className="font-serif italic text-4xl md:text-5xl text-navy">Our Process</h2>
          <div className="h-px w-24 bg-gold mx-auto" />
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-0">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative bg-background/60 md:bg-transparent border border-navy/5 md:border-none p-8 transition-all duration-500 hover:bg-background hover:shadow-2xl ${
                i % 2 === 1 ? "md:-mt-8 z-20" : "z-10"
              }`}
              style={{ boxShadow: undefined }}
            >
              <div className="mb-12">
                <span className="font-serif text-5xl font-light text-gold/30 group-hover:text-gold transition-colors duration-500">
                  {s.n}
                </span>
              </div>
              <h3 className="font-serif text-xl font-bold text-navy mb-4 group-hover:translate-x-1 transition-transform duration-300">
                {s.label}
              </h3>
              <p className="text-sm leading-relaxed text-navy/70">{s.body}</p>
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gold transition-all duration-500 group-hover:w-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
