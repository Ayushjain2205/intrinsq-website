import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "../styles.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-serif",
  style: ["normal", "italic"],
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "IntrinsQ — Advice That Compounds",
  description:
    "IntrinsQ is a boutique AI-enabled advisory firm. AI handles the routine. We handle the decisions that shape your business — finance, tax, HR, and compliance under one roof.",
  authors: [{ name: "IntrinsQ" }],
  openGraph: {
    title: "IntrinsQ — Advice That Compounds",
    description:
      "Financial judgment that compounds. One advisory house for founders, business owners, and professionals.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${manrope.variable} ${cormorant.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
