import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { TrustStrip } from "@/components/site/TrustStrip";
import { Problem } from "@/components/site/Problem";
import { Difference } from "@/components/site/Difference";
import { AdvisoryHouse } from "@/components/site/AdvisoryHouse";
import { AiHuman } from "@/components/site/AiHuman";
import { WhoWeServe } from "@/components/site/WhoWeServe";
import { HowItWorks } from "@/components/site/HowItWorks";
import { WhyIntrinsq } from "@/components/site/WhyIntrinsq";
import { Principles } from "@/components/site/Principles";
import { Ledger } from "@/components/site/Ledger";
import { Metrics } from "@/components/site/Metrics";
import { FinalCta } from "@/components/site/FinalCta";
import { Footer } from "@/components/site/Footer";

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <Nav />
      <Hero />
      <TrustStrip />
      <Problem />
      <Difference />
      <AdvisoryHouse />
      <AiHuman />
      <WhoWeServe />
      <HowItWorks />
      <WhyIntrinsq />
      <Principles />
      <Ledger />
      <Metrics />
      <FinalCta />
      <Footer />
    </main>
  );
}
