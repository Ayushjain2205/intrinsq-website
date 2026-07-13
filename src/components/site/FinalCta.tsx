"use client";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { Gold } from "./primitives";
import { Reveal } from "./motion-primitives";

export function FinalCta() {
  return (
    <section
      id="contact"
      className="relative py-32 md:py-48 marble-texture text-center overflow-hidden"
    >
      <motion.div
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(212,175,120,0.16), transparent 65%)",
        }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="relative mx-auto max-w-[1200px] px-6 md:px-10 space-y-12">
        <Reveal className="flex justify-center">
          <span className="eyebrow eyebrow-line">Begin the Conversation</span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-serif text-5xl md:text-7xl lg:text-[6.5rem] leading-[1.02] text-navy tracking-[-0.015em]">
            Every business needs <br />
            <Gold>better numbers.</Gold>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="text-lg md:text-xl text-foreground/70 max-w-xl mx-auto leading-relaxed">
            Let's start a conversation about your goals — and how disciplined advice can help you
            reach them.
          </p>
        </Reveal>
        <Reveal delay={0.3} className="flex flex-wrap justify-center items-center gap-6 pt-4">
          <motion.a
            href="mailto:hello@intrinsq.com"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="group relative inline-flex items-center gap-3 bg-navy text-cream px-8 py-4 text-sm overflow-hidden"
          >
            <span className="absolute inset-0 bg-navy-deep translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            <span className="relative">Book a Consultation</span>
            <ArrowRight className="relative h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
          </motion.a>
          <a
            href="mailto:hello@intrinsq.com"
            className="group inline-flex items-center gap-2 text-sm text-navy relative"
          >
            <span className="relative">
              hello@intrinsq.com
              <span className="absolute left-0 -bottom-1 w-full h-px bg-gold origin-right scale-x-0 group-hover:origin-left group-hover:scale-x-100 transition-transform duration-500" />
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
