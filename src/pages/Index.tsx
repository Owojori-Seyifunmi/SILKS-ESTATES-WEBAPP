import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PropertiesSection from "@/components/PropertiesSection";
import LandlordsSection from "@/components/LandlordsSection";
import FeaturesCarousel from "@/components/FeaturesCarousel";
import ServicesGrid from "@/components/ServicesGrid";
import PortalsSection from "@/components/PortalsSection";
import LettingLawsSection from "@/components/LettingLawsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <PropertiesSection />
      <LandlordsSection />
      <FeaturesCarousel />
      <ServicesGrid />
      <PortalsSection />
      <LettingLawsSection />
    </div>
  );
};

export default Index;
