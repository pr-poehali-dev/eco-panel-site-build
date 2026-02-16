import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import TechnologySection from "@/components/TechnologySection";
import CalculatorSection from "@/components/CalculatorSection";
import GallerySection from "@/components/GallerySection";
import BlogSection from "@/components/BlogSection";
import ContactsSection from "@/components/ContactsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <TechnologySection />
      <CalculatorSection />
      <GallerySection />
      <BlogSection />
      <ContactsSection />
      <Footer />
    </div>
  );
};

export default Index;
