"use client";
import { motion } from "motion/react";
import { Eyebrow } from "./primitives";
import { Reveal } from "./motion-primitives";
import { Compass, ArchOutline } from "./Ornaments";

const principles = [
  "Truth before comfort.",
  "Clarity before complexity.",
  "Judgment before automation.",
  "Discipline before growth.",
  "Advice that compounds.",
];

export function Principles() {
  return (
    <section className="relative py-28 md:py-40 marble-texture overflow-hidden">
      <Compass className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" size={720} />
      <ArchOutline
        className="hidden lg:block -left-24 -bottom-20 text-navy"
        width={280}
        height={420}
      />
      <ArchOutline
        className="hidden lg:block -right-24 -bottom-20 text-navy scale-x-[-1]"
        width={280}
        height={420}
      />
      <div className="relative mx-auto max-w-[1200px] px-6 md:px-10 text-center space-y-16">
        <Reveal className="space-y-6 flex flex-col items-center">
          <Eyebrow>Our Signature</Eyebrow>
          <h2 className="font-serif text-4xl md:text-5xl text-navy">The IntrinsQ Principles</h2>
        </Reveal>

        <ul className="space-y-0">
          {principles.map((p, i) => (
            <motion.li
              key={p}
              initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 1,
                delay: i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group"
            >
              <p className="font-serif text-3xl md:text-5xl lg:text-6xl text-navy py-8 md:py-10 tracking-tight transition-colors duration-500 group-hover:text-navy-deep">
                {p}
              </p>
              {i < principles.length - 1 && (
                <motion.span
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    duration: 0.8,
                    delay: 0.3 + i * 0.12,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="block h-px w-24 mx-auto bg-gold origin-center"
                />
              )}
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
