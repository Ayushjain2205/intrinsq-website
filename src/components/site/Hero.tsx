"use client";
import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform, type Variants } from "motion/react";
import { useRef } from "react";
import heroImg from "@/assets/hero-marble.png";
import { Eyebrow, Gold } from "./primitives";

const heroSrc = typeof heroImg === "string" ? heroImg : heroImg.src;

const wordVariants: Variants = {
  hidden: { y: "110%", opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1] as const,
      delay: 0.1 + i * 0.08,
    },
  }),
};

const line1 = ["Strategic", "Financial"];
const line2 = ["Advice", "That"];

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-14%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} id="top" className="relative min-h-[92vh] overflow-hidden bg-background">
      {/* Full-bleed image on the right, masked so no hard seam can show through */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.img
          src={heroSrc}
          alt="Classical marble hall with a tall ornate door, brass banker's lamp, and stacked leather books on a marble pedestal"
          width={1280}
          height={1600}
          style={{ y: imgY, scale: imgScale }}
          className="absolute inset-y-0 right-0 w-full h-[110%] object-cover object-[62%_center] lg:object-right"
        />
        {/* Left-side blend into cream background */}
        <div
          className="absolute inset-0 bg-background"
          style={{
            WebkitMaskImage:
              "linear-gradient(90deg, #000 0%, #000 45%, rgba(0,0,0,0.96) 50%, rgba(0,0,0,0.68) 59%, rgba(0,0,0,0.24) 70%, transparent 84%)",
            maskImage:
              "linear-gradient(90deg, #000 0%, #000 45%, rgba(0,0,0,0.96) 50%, rgba(0,0,0,0.68) 59%, rgba(0,0,0,0.24) 70%, transparent 84%)",
          }}
        />

        {/* Bottom fade for footer of hero */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 md:px-10 pt-32 md:pt-40 pb-24 md:pb-32 grid lg:grid-cols-12 gap-12 items-center">
        <motion.div
          style={{ y: textY, opacity: textOpacity }}
          className="lg:col-span-6 space-y-8 relative"
        >
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Eyebrow>Advice That Compounds</Eyebrow>
          </motion.div>

          <h1 className="font-serif text-5xl md:text-6xl lg:text-[5.5rem] leading-[1.1] tracking-[-0.015em] text-navy">
            <span className="block overflow-hidden pb-[0.15em]">
              <span className="flex flex-wrap gap-x-4">
                {line1.map((w, i) => (
                  <motion.span
                    key={w}
                    custom={i}
                    initial="hidden"
                    animate="visible"
                    variants={wordVariants}
                    className="inline-block"
                  >
                    {w}
                  </motion.span>
                ))}
              </span>
            </span>
            <span className="block overflow-hidden pb-[0.15em]">
              <span className="flex flex-wrap gap-x-4">
                {line2.map((w, i) => (
                  <motion.span
                    key={w}
                    custom={i + 2}
                    initial="hidden"
                    animate="visible"
                    variants={wordVariants}
                    className="inline-block"
                  >
                    {w}
                  </motion.span>
                ))}
              </span>
            </span>
            <span className="block overflow-hidden pb-[0.15em]">
              <motion.span
                custom={4}
                initial="hidden"
                animate="visible"
                variants={wordVariants}
                className="inline-block"
              >
                <Gold>Compounds.</Gold>
              </motion.span>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.65 }}
            className="text-lg md:text-xl text-foreground/70 max-w-xl leading-relaxed"
          >
            AI handles the routine. We handle the decisions that shape your business — clarity,
            strategy, and discipline from a single advisory partner.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.8 }}
            className="flex flex-wrap items-center gap-6 pt-2"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative inline-flex items-center gap-3 bg-navy text-cream px-7 py-4 text-sm overflow-hidden"
            >
              <span className="absolute inset-0 bg-navy-deep translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              <span className="relative">Book a Consultation</span>
              <ArrowRight className="relative h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
            </motion.a>
            <a
              href="#services"
              className="group inline-flex items-center gap-3 text-sm text-navy relative"
            >
              <span className="relative">
                Explore Our Services
                <span className="absolute left-0 -bottom-1 w-full h-px bg-gold origin-right scale-x-0 group-hover:origin-left group-hover:scale-x-100 transition-transform duration-500" />
              </span>
              <ArrowRight className="h-4 w-4 text-gold transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.9 }}
            className="pt-10 flex items-center gap-4"
          >
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1.1, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              style={{ transformOrigin: "left" }}
              className="block h-px w-16 bg-gold/70"
            />
            <p className="font-serif italic text-navy/70 text-base tracking-wide">
              Discipline today. Freedom tomorrow.
            </p>
          </motion.div>
        </motion.div>

        {/* Spacer to keep grid balance on lg */}
        <div className="hidden lg:block lg:col-span-6" />
      </div>
    </section>
  );
}
