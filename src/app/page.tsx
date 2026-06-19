import { PageBackground } from "@/components/background/PageBackground";
import { ContactFooter } from "@/components/sections/ContactFooter";
import { HeroSection } from "@/components/sections/HeroSection";
import { RepCounter } from "@/components/sections/RepCounter";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { TermsAccordion } from "@/components/sections/TermsAccordion";
import { VerificationCard } from "@/components/sections/VerificationCard";
import { VouchLog } from "@/components/sections/VouchLog";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <PageBackground />
      <div className="relative z-10">
        <HeroSection />
        <RepCounter />
        <VerificationCard />
        <ServicesGrid />
        <VouchLog />
        <TermsAccordion />
        <ContactFooter />
      </div>
    </main>
  );
}
