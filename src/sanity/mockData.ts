/* eslint-disable @typescript-eslint/no-explicit-any */
export interface MockPost {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  excerpt: string;
  mainImage?: {
    alt?: string;
    assetUrl?: string; // local fallback or URL
  };
  author: {
    name: string;
    image?: string;
  };
  categories: Array<{ title: string }>;
  body: any[];
}

export const mockPosts: MockPost[] = [
  {
    _id: "mock-1",
    title: "The Calculus of Corporate Structure: LLC vs. C-Corp",
    slug: { current: "calculus-of-corporate-structure-llc-vs-ccorp" },
    publishedAt: "2026-07-12T10:00:00.000Z",
    excerpt:
      "Choosing the right legal container is one of the most critical decisions a founder makes. Here, we break down the compounding tax and compliance effects of each path.",
    mainImage: {
      alt: "Corporate architecture abstract visualization",
      assetUrl:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop",
    },
    author: {
      name: "Devon Reed",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
    },
    categories: [{ title: "Structure" }, { title: "Finance" }],
    body: [
      {
        _key: "b1",
        _type: "block",
        style: "normal",
        children: [
          {
            _key: "s1",
            _type: "span",
            text: "When founding a new venture, the immediate focus is usually on product, market fit, and initial hires. Yet, the legal scaffolding you choose at the inception dictates your operating velocity, tax efficiency, and fundraising capability for years to come. In advisory, we call this a path-dependent decision—one that is easy to make but highly complex and expensive to undo.",
          },
        ],
      },
      {
        _key: "b2",
        _type: "block",
        style: "h2",
        children: [
          {
            _key: "s2",
            _type: "span",
            text: "The Dual Contenders: LLC and C-Corp",
          },
        ],
      },
      {
        _key: "b3",
        _type: "block",
        style: "normal",
        children: [
          {
            _key: "s3",
            _type: "span",
            text: "For the vast majority of founders, the decision boils down to a choice between a Limited Liability Company (LLC) and a C-Corporation (C-Corp). While both protect your personal assets from corporate liabilities, their structural DNA is completely different:",
          },
        ],
      },
      {
        _key: "b4",
        _type: "block",
        style: "normal",
        children: [
          {
            _key: "s4",
            _type: "span",
            text: "1. LLCs represent absolute flexibility. They are pass-through entities, meaning profits and losses flow directly to the owners' personal tax returns, avoiding the double-taxation of traditional corporations. Furthermore, they require fewer formalities—no mandatory board meetings, complex bylaws, or rigid share issuances.",
          },
        ],
      },
      {
        _key: "b5",
        _type: "block",
        style: "normal",
        children: [
          {
            _key: "s5",
            _type: "span",
            text: "2. C-Corps, conversely, are structured for scale. They are separate legal taxpayers. They issue common and preferred stock, support stock option pools for employees, and represent the mandatory standard for venture capital investors. If you plan to raise institutional capital, a Delaware C-Corp is not just recommended; it is practically non-negotiable.",
          },
        ],
      },
      {
        _key: "b6",
        _type: "block",
        style: "h2",
        children: [
          {
            _key: "s6",
            _type: "span",
            text: "The Tax Equation: The Compounding Cost",
          },
        ],
      },
      {
        _key: "b7",
        _type: "block",
        style: "normal",
        children: [
          {
            _key: "s7",
            _type: "span",
            text: "Consider the Qualified Small Business Stock (QSBS) exclusion under Section 1202 of the IRC. For C-Corps, if you hold your shares for more than 5 years, you may be eligible to exclude up to 100% of your capital gains (up to $10 million or 10x your basis) from federal income tax upon acquisition. This single tax provision can yield millions of dollars in savings, a benefit that is entirely unavailable to LLCs.",
          },
        ],
      },
      {
        _key: "b8",
        _type: "block",
        style: "blockquote",
        children: [
          {
            _key: "s8",
            _type: "span",
            text: "Structural efficiency is not just about avoiding immediate friction; it is about choosing the rules of the game you want to play in 5 to 10 years.",
          },
        ],
      },
      {
        _key: "b9",
        _type: "block",
        style: "normal",
        children: [
          {
            _key: "s9",
            _type: "span",
            text: "Ultimately, the right structure aligns with your capital plan. If you are building a self-sustaining service business or lifestyle brand, the pass-through simplicity of an LLC is optimal. If you are building a high-growth technology startup that requires R&D investment and equity incentives, the Delaware C-Corp is the logical container. Make the choice with your eyes wide open, and with advice that compounds.",
          },
        ],
      },
    ],
  },
  {
    _id: "mock-2",
    title: "Maximizing R&D Tax Credits in the Age of AI",
    slug: { current: "maximizing-rd-tax-credits-in-the-age-of-ai" },
    publishedAt: "2026-07-08T14:30:00.000Z",
    excerpt:
      "If you are building AI-enabled software, you might be leaving hundreds of thousands of dollars on the table. A guide to claiming R&D credits safely.",
    mainImage: {
      alt: "Artificial intelligence concept art",
      assetUrl:
        "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1200&auto=format&fit=crop",
    },
    author: {
      name: "Elena Rostova",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop",
    },
    categories: [{ title: "Tax" }, { title: "AI" }],
    body: [
      {
        _key: "b1",
        _type: "block",
        style: "normal",
        children: [
          {
            _key: "s1",
            _type: "span",
            text: "The rapid acceleration of generative AI has sparked a renaissance in product development. From custom LLM fine-tuning to specialized agentic workflows, software teams are writing code at unprecedented rates. Yet, a significant portion of this investment qualifies for the federal Research and Development (R&D) Tax Credit under Section 41—a benefit that many founders overlook or fail to maximize.",
          },
        ],
      },
      {
        _key: "b2",
        _type: "block",
        style: "h2",
        children: [
          {
            _key: "s2",
            _type: "span",
            text: "The Four-Part Test: Does Your AI Project Qualify?",
          },
        ],
      },
      {
        _key: "b3",
        _type: "block",
        style: "normal",
        children: [
          {
            _key: "s3",
            _type: "span",
            text: "To claim the R&D credit, your development activities must satisfy a strict four-part test defined by the IRS:",
          },
        ],
      },
      {
        _key: "b4",
        _type: "block",
        style: "normal",
        children: [
          {
            _key: "s4",
            _type: "span",
            text: "1. Permissible Purpose: The activity must relate to creating or improving the functionality, performance, reliability, or quality of a product, process, or software.",
          },
        ],
      },
      {
        _key: "b5",
        _type: "block",
        style: "normal",
        children: [
          {
            _key: "s5",
            _type: "span",
            text: "2. Elimination of Uncertainty: You must have encountered technological uncertainty at the outset—meaning you did not know if the product could be built, or how to build it.",
          },
        ],
      },
      {
        _key: "b6",
        _type: "block",
        style: "normal",
        children: [
          {
            _key: "s6",
            _type: "span",
            text: "3. Process of Experimentation: You must have evaluated alternatives, conducted simulations, or systematically tested code paths to resolve the technological uncertainty.",
          },
        ],
      },
      {
        _key: "b7",
        _type: "block",
        style: "normal",
        children: [
          {
            _key: "s7",
            _type: "span",
            text: "4. Technological in Nature: The process must rely on the principles of physical sciences, biological sciences, engineering, or computer science.",
          },
        ],
      },
      {
        _key: "b8",
        _type: "block",
        style: "h2",
        children: [
          {
            _key: "s8",
            _type: "span",
            text: "Why AI Development is a Perfect Fit",
          },
        ],
      },
      {
        _key: "b9",
        _type: "block",
        style: "normal",
        children: [
          {
            _key: "s9",
            _type: "span",
            text: "Building with generative AI fits these criteria exceptionally well. Fine-tuning models, building custom embeddings, managing latency in multi-agent networks, or implementing retrieval-augmented generation (RAG) models are not simple 'plug-and-play' exercises. They involve substantial software architecture challenges, model experimentation, and code optimization to reach stable production benchmarks.",
          },
        ],
      },
      {
        _key: "b10",
        _type: "block",
        style: "normal",
        children: [
          {
            _key: "s10",
            _type: "span",
            text: "Startups can use these credits to offset their payroll taxes by up to $500,000 per year, yielding immediate cash benefits. In a high-interest environment where capital is scarce, claiming what you are legally owed is just sound financial hygiene.",
          },
        ],
      },
    ],
  },
  {
    _id: "mock-3",
    title: "Designing Compensation Models That Don't Dilute Alignment",
    slug: { current: "designing-compensation-models-that-dont-dilute-alignment" },
    publishedAt: "2026-06-28T09:00:00.000Z",
    excerpt:
      "Equity is a double-edged sword. How to structure options, bonuses, and salary to scale your early-stage team while protecting founders' ownership.",
    mainImage: {
      alt: "Team alignment and compensation design",
      assetUrl:
        "https://images.unsplash.com/photo-1521791136364-728647285b50?q=80&w=1200&auto=format&fit=crop",
    },
    author: {
      name: "Marcus Chen",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    },
    categories: [{ title: "HR" }, { title: "Alignment" }],
    body: [
      {
        _key: "b1",
        _type: "block",
        style: "normal",
        children: [
          {
            _key: "s1",
            _type: "span",
            text: "One of the most persistent challenges in high-growth companies is compensation. How do you attract elite talent when competing against tech giants with massive balance sheets? The default answer is often to offer high stock grants. But over-reliance on equity dilution damages the capital efficiency of the business and can misalign incentives. Designing compensation is an exercise in engineering human incentives.",
          },
        ],
      },
      {
        _key: "b2",
        _type: "block",
        style: "h2",
        children: [
          {
            _key: "s2",
            _type: "span",
            text: "The Triangle of Incentives",
          },
        ],
      },
      {
        _key: "b3",
        _type: "block",
        style: "normal",
        children: [
          {
            _key: "s3",
            _type: "span",
            text: "Every compensation model consists of three pillars, each serving a distinct behavioral purpose:",
          },
        ],
      },
      {
        _key: "b4",
        _type: "block",
        style: "normal",
        children: [
          {
            _key: "s4",
            _type: "span",
            text: "1. Base Salary: Solves for stability. It covers living costs and removes immediate financial anxiety, allowing employees to focus entirely on their work.",
          },
        ],
      },
      {
        _key: "b5",
        _type: "block",
        style: "normal",
        children: [
          {
            _key: "s5",
            _type: "span",
            text: "2. Performance Bonuses (Cash): Solves for velocity. Tied to quarterly or yearly operational milestones, it rewards high output and execution speed.",
          },
        ],
      },
      {
        _key: "b6",
        _type: "block",
        style: "normal",
        children: [
          {
            _key: "s6",
            _type: "span",
            text: "3. Equity Options: Solves for long-term equity of outcomes. It binds the individual's upside to the compound value of the firm over a multi-year horizon.",
          },
        ],
      },
      {
        _key: "b7",
        _type: "block",
        style: "h2",
        children: [
          {
            _key: "s7",
            _type: "span",
            text: "The Dilution Trap",
          },
        ],
      },
      {
        _key: "b8",
        _type: "block",
        style: "normal",
        children: [
          {
            _key: "s8",
            _type: "span",
            text: "Many founders treat stock options as 'free' money because it doesn't impact their immediate cash flow. This is a mirage. Dilution directly reduces your future exit value and, more importantly, can lead to a culture where employees expect windfall gains regardless of the operational cash-health of the firm.",
          },
        ],
      },
      {
        _key: "b9",
        _type: "block",
        style: "normal",
        children: [
          {
            _key: "s9",
            _type: "span",
            text: "We advise our clients to model option pools dynamically, reserving stock grants strictly for strategic hires who directly move the needle on enterprise value. For general team members, a profit-sharing or performance-based bonus model tied to EBITDA or top-line benchmarks aligns behavior with actual business sustainability, protecting dilution while keeping everyone driving toward the same financial North Star.",
          },
        ],
      },
    ],
  },
];
