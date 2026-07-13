import type { ReactNode } from "react";

export function Eyebrow({ children }: { children: ReactNode }) {
  return <span className="eyebrow eyebrow-line">{children}</span>;
}

export function SectionHeading({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={
        "font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight " + className
      }
    >
      {children}
    </h2>
  );
}

export function Gold({ children }: { children: ReactNode }) {
  return <span className="italic text-gold font-serif">{children}</span>;
}

export function GoldRule({ className = "" }: { className?: string }) {
  return <span className={"block h-px w-16 bg-gold " + className} />;
}
