import logoImg from "@/assets/logo.png";

const logoSrc = typeof logoImg === "string" ? logoImg : logoImg.src;

const cols = [
  {
    title: "Company",
    links: ["About Us", "Our Approach", "Our Blog", "Contact"],
  },
  {
    title: "Services",
    links: [
      "Virtual CFO",
      "Financial Strategy",
      "Tax & Compliance",
      "HR & Payroll",
      "MIS & Reporting",
    ],
  },
  {
    title: "Legal",
    links: ["Privacy Policy", "Terms of Service"],
  },
];

export function Footer() {
  return (
    <footer className="bg-navy-deep text-cream/80 border-t border-gold/20">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-20 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4 space-y-6">
          <img
            src={logoSrc}
            alt="IntrinsQ"
            className="h-14 w-auto brightness-0 invert opacity-90"
          />
          <p className="font-serif italic text-xl text-cream">Advice that compounds.</p>
          <p className="text-sm text-cream/60 max-w-xs leading-relaxed">
            A boutique advisory house for founders, business owners, and professionals — bringing
            finance, tax, HR, and compliance under one roof.
          </p>
        </div>
        {cols.map((c) => (
          <div key={c.title} className="lg:col-span-2 lg:col-start-auto space-y-5">
            <h4 className="text-xs tracking-[0.22em] uppercase text-gold">{c.title}</h4>
            <ul className="space-y-3">
              {c.links.map((l) => (
                <li key={l}>
                  <a href="#" className="text-sm text-cream/75 hover:text-cream transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="lg:col-span-2 space-y-5">
          <h4 className="text-xs tracking-[0.22em] uppercase text-gold">Contact</h4>
          <ul className="space-y-3 text-sm text-cream/75">
            <li>hello@intrinsq.com</li>
            <li>Bengaluru · India</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-6 flex flex-wrap items-center justify-between gap-4 text-xs text-cream/50">
          <p>© {new Date().getFullYear()} IntrinsQ Advisory. All rights reserved.</p>
          <p className="font-serif italic">Truth before comfort.</p>
        </div>
      </div>
    </footer>
  );
}
