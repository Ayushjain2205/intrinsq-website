"use client";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import img1 from "@/assets/ledger-1.jpg";
import img2 from "@/assets/ledger-2.jpg";
import img3 from "@/assets/ledger-3.jpg";
import { Eyebrow, SectionHeading, Gold } from "./primitives";
import { Reveal, Stagger, StaggerItem } from "./motion-primitives";

const img1Src = typeof img1 === "string" ? img1 : img1.src;
const img2Src = typeof img2 === "string" ? img2 : img2.src;
const img3Src = typeof img3 === "string" ? img3 : img3.src;

const posts = [
  {
    img: img1Src,
    category: "Cash Flow",
    title: "How cash flow quietly kills growing businesses.",
    read: "6 min read",
  },
  {
    img: img2Src,
    category: "Founders",
    title: "The four numbers every founder should track monthly.",
    read: "5 min read",
  },
  {
    img: img3Src,
    category: "Tax",
    title: "The compounding cost of reactive tax planning.",
    read: "7 min read",
  },
];

export function Ledger() {
  return (
    <section id="ledger" className="py-28 md:py-40 bg-cream-deep">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal className="flex flex-wrap items-end justify-between gap-8 mb-16 md:mb-20">
          <div className="space-y-6 max-w-2xl">
            <Eyebrow>Our Blog</Eyebrow>
            <SectionHeading className="text-navy">
              Ideas that <Gold>compound.</Gold>
            </SectionHeading>
          </div>
          <a
            href="#"
            className="group inline-flex items-center gap-2 text-sm text-navy border-b border-gold/60 pb-1 hover:border-gold"
          >
            View Blog
            <ArrowRight className="h-4 w-4 text-gold transition-transform group-hover:translate-x-1" />
          </a>
        </Reveal>

        <Stagger className="grid md:grid-cols-3 gap-8 md:gap-6" stagger={0.12}>
          {posts.map((p) => (
            <StaggerItem key={p.title}>
              <motion.article whileHover="hover" className="group cursor-pointer">
                <div className="aspect-[4/5] overflow-hidden mb-6 bg-navy/5 relative">
                  <motion.img
                    src={p.img}
                    alt=""
                    loading="lazy"
                    width={1200}
                    height={900}
                    variants={{ hover: { scale: 1.08 } }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    className="w-full h-full object-cover"
                  />
                  <motion.div
                    variants={{ hover: { opacity: 1 } }}
                    initial={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 bg-navy/20"
                  />
                  <motion.div
                    variants={{ hover: { y: 0, opacity: 1 } }}
                    initial={{ y: 20, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute bottom-4 right-4 bg-cream text-navy px-4 py-2 text-xs tracking-[0.18em] uppercase flex items-center gap-2"
                  >
                    Read <ArrowRight className="h-3 w-3" />
                  </motion.div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-xs tracking-[0.18em] uppercase">
                    <span className="text-gold">{p.category}</span>
                    <span className="h-1 w-1 rounded-full bg-gold/60" />
                    <span className="text-foreground/50">{p.read}</span>
                  </div>
                  <h3 className="font-serif text-2xl md:text-[1.7rem] text-navy leading-snug transition-colors group-hover:text-navy-deep">
                    {p.title}
                  </h3>
                </div>
              </motion.article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
