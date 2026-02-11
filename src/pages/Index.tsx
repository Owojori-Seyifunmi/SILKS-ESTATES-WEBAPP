import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PropertiesSection from "@/components/PropertiesSection";
import LandlordsSection from "@/components/LandlordsSection";
import FeaturesCarousel from "@/components/FeaturesCarousel";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <PropertiesSection />
      <LandlordsSection />
      <FeaturesCarousel />
    </div>
  );
};

export default Index;
