"use client";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import logoImg from "@/assets/logo.png";

const logoSrc = typeof logoImg === "string" ? logoImg : logoImg.src;

const links = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Our Approach", href: "#approach" },
  { label: "Our Blog", href: "#ledger" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
      className={
        "fixed top-0 inset-x-0 z-50 transition-all duration-500 " +
        (scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border/60"
          : "bg-transparent")
      }
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 h-20 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3 group">
          <motion.img
            src={logoSrc}
            alt="IntrinsQ"
            className="h-11 w-auto"
            whileHover={{ scale: 1.04 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          />
        </a>
        <nav className="hidden lg:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-foreground/80 hover:text-navy transition-colors relative group"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-500 group-hover:w-full" />
            </a>
          ))}
        </nav>
        <motion.a
          href="#contact"
          className="group inline-flex items-center gap-2 bg-navy text-cream px-5 py-3 text-sm relative overflow-hidden"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onHoverStart={() => setOpen(true)}
          onHoverEnd={() => setOpen(false)}
        >
          <AnimatePresence>
            {open && (
              <motion.span
                key="sheen"
                initial={{ x: "-120%" }}
                animate={{ x: "120%" }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
                className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-cream/25 to-transparent pointer-events-none"
              />
            )}
          </AnimatePresence>
          <span className="relative">Book a Consultation</span>
          <motion.span
            className="relative"
            animate={{ x: open ? 3 : 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <ArrowRight className="h-4 w-4" />
          </motion.span>
        </motion.a>
      </div>
    </motion.header>
  );
}
