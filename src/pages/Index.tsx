import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PropertiesSection from "@/components/PropertiesSection";
import LandlordsSection from "@/components/LandlordsSection";
import FeaturesCarousel from "@/components/FeaturesCarousel";
import ServicesGrid from "@/components/ServicesGrid";
import PortalsSection from "@/components/PortalsSection";
import LettingLawsSection from "@/components/LettingLawsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import RentersRightsBill from "@/components/RentersRightBill";
import PartnersBanner from "@/components/PatnersBanner";
import { ScrollReveal } from "@/hooks/useScrollAnimation";


const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <ScrollReveal>
        <HeroSection />
      </ScrollReveal>
      <ScrollReveal>
        <PropertiesSection />
      </ScrollReveal>
      <ScrollReveal>
        <PartnersBanner />
      </ScrollReveal>
      <ScrollReveal>
        <LandlordsSection />
      </ScrollReveal>
      <ScrollReveal>
        <RentersRightsBill />
      </ScrollReveal>
      <ScrollReveal>
        <FeaturesCarousel />
      </ScrollReveal>
      <ScrollReveal>
        <ServicesGrid />
      </ScrollReveal>
      {/* <PortalsSection /> */}
      {/* <LettingLawsSection /> */}
      <ScrollReveal>
        <TestimonialsSection />
      </ScrollReveal>
      <ScrollReveal>
        <CTASection />
      </ScrollReveal>
      <ScrollReveal>
        <Footer />
      </ScrollReveal>
    </div>
  );
};

export default Index;
