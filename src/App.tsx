import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { Hero } from "@/components/sections/Hero";
import { StruggleSection } from "@/components/sections/StruggleSection";
import { JapanSection } from "@/components/sections/JapanSection";
import { CellProcessingSection } from "@/components/sections/CellProcessingSection";
import { VideoSection } from "@/components/sections/VideoSection";
import { TreatmentOptionsSection } from "@/components/sections/TreatmentOptionsSection";
import { DifferenceSection } from "@/components/sections/DifferenceSection";
import { WhyHeleneSection } from "@/components/sections/WhyHeleneSection";
import { SpecialistsSection } from "@/components/sections/SpecialistsSection";
import { LocationSection } from "@/components/sections/LocationSection";
import { ResearchSection } from "@/components/sections/ResearchSection";
import { CertificationsSection } from "@/components/sections/CertificationsSection";
import { ClinicTourSection } from "@/components/sections/ClinicTourSection";
import { ComparisonSection } from "@/components/sections/ComparisonSection";
import { JourneySection } from "@/components/sections/JourneySection";
import { FaqSection } from "@/components/sections/FaqSection";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <StruggleSection />
        <JapanSection />
        <CellProcessingSection />
        <VideoSection />
        <TreatmentOptionsSection />
        <DifferenceSection />
        <WhyHeleneSection />
        <SpecialistsSection />
        <LocationSection />
        <ResearchSection />
        <CertificationsSection />
        <ClinicTourSection />
        <ComparisonSection />
        <JourneySection />
        <FaqSection />
        <FinalCtaSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
