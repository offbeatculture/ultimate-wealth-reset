import { useRef } from "react";
import { Header } from "@/components/Header";
import {HeroSection} from "@/components/Hero"
import { DayBreakdown } from "@/components/DayBreakdown";
import { UrgencyBar } from "@/components/UrgencyBar";
import { LeadForm } from "@/components/LeadForm";
import { Footer } from "@/components/Footer";

const IndexSn = () => {
  const formRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-background">
      <main>
        <HeroSection/>
        <DayBreakdown />
        <UrgencyBar />
      </main>
      <Footer />
      {/* Analytics placeholder - Add lightweight analytics script here */}
    </div>
  );
};

export default IndexSn;
