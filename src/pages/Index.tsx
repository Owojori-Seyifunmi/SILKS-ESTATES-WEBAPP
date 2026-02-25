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


const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <PropertiesSection />
      <LandlordsSection />
      <RentersRightsBill />
      <FeaturesCarousel />
      <ServicesGrid />
      {/* <PortalsSection /> */}
      {/* <LettingLawsSection /> */}
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
