"use client";
import { Landmark, LineChart, Scale, Users, FileBarChart, Brain, ArrowUpRight } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import type { MouseEvent } from "react";
import { Eyebrow, SectionHeading, Gold } from "./primitives";
import { Reveal, Stagger, StaggerItem } from "./motion-primitives";
import { GridField, Compass } from "./Ornaments";

const services = [
  {
    icon: Landmark,
    title: "Virtual CFO",
    body: "Full financial stewardship — cash flow, forecasting, board-ready reporting, and strategic guidance.",
  },
  {
    icon: LineChart,
    title: "Financial Strategy",
    body: "Capital planning, unit economics, and long-horizon decisions built on evidence, not instinct.",
  },
  {
    icon: Scale,
    title: "Tax & Compliance",
    body: "Proactive tax planning and end-to-end compliance so surprises never become setbacks.",
  },
  {
    icon: Users,
    title: "HR & Payroll",
    body: "People operations handled with precision — payroll, policy, and structure that scale.",
  },
  {
    icon: FileBarChart,
    title: "MIS & Reporting",
    body: "Dashboards and monthly reviews that turn raw data into decisions leadership can act on.",
  },
  {
    icon: Brain,
    title: "Business Intelligence",
    body: "AI-assisted analysis that surfaces the questions worth asking — and the answers worth acting on.",
  },
];

type Service = (typeof services)[number];

function ServiceCard({ s }: { s: Service }) {
  const Icon = s.icon;
  const mx = useMotionValue(50);
  const my = useMotionValue(50);
  const smx = useSpring(mx, { stiffness: 150, damping: 20 });
  const smy = useSpring(my, { stiffness: 150, damping: 20 });
  const bg = useTransform(
    [smx, smy],
    ([x, y]) =>
      `radial-gradient(circle at ${x}% ${y}%, oklch(0.78 0.08 82 / 0.18), transparent 55%)`,
  );

  const onMove = (e: MouseEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set(((e.clientX - r.left) / r.width) * 100);
    my.set(((e.clientY - r.top) / r.height) * 100);
  };

  return (
    <motion.article
      onMouseMove={onMove}
      onMouseLeave={() => {
        mx.set(50);
        my.set(50);
      }}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 250, damping: 20 }}
      className="group relative h-full bg-background p-8 md:p-10 min-h-[280px] flex flex-col justify-between overflow-hidden"
    >
      <motion.div className="absolute inset-0 pointer-events-none" style={{ background: bg }} />
      <div className="relative space-y-6">
        <motion.div
          whileHover={{ rotate: -8, scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
          className="inline-flex"
        >
          <Icon className="h-8 w-8 text-gold" strokeWidth={1.25} />
        </motion.div>
        <h3 className="font-serif text-2xl md:text-[1.7rem] text-navy leading-tight">{s.title}</h3>
        <p className="text-foreground/70 leading-relaxed">{s.body}</p>
      </div>
      <div className="relative flex items-center justify-between mt-6">
        <motion.span
          className="h-px bg-gold origin-left"
          initial={{ width: 0 }}
          whileHover={{ width: "3rem" }}
        />
        <ArrowUpRight className="h-5 w-5 text-gold opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-500" />
      </div>
    </motion.article>
  );
}

export function AdvisoryHouse() {
  return (
    <section id="services" className="relative py-28 md:py-40 overflow-hidden bg-cream-deep/40">
      <GridField className="inset-0 text-navy" opacity={0.05} />
      <Compass className="hidden lg:block -right-40 top-20 text-gold" size={520} />
      <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-10 mb-16 md:mb-24">
          <Reveal className="lg:col-span-6 space-y-6">
            <Eyebrow>The Advisory House</Eyebrow>
            <SectionHeading className="text-navy">
              Comprehensive advice. <br />
              <Gold>Integrated for impact.</Gold>
            </SectionHeading>
          </Reveal>
          <Reveal delay={0.15} className="lg:col-span-5 lg:col-start-8 self-end">
            <p className="text-lg text-foreground/70 leading-relaxed">
              From financial strategy to tax and compliance, we bring every piece together — so you
              can focus on building what matters.
            </p>
          </Reveal>
        </div>

        <Stagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border" stagger={0.08}>
          {services.map((s) => (
            <StaggerItem key={s.title} className="h-full">
              <ServiceCard s={s} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
