import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import InvestSection from "@/components/InvestSection";
import WatchSection from "@/components/WatchSection";
import LearnSection from "@/components/LearnSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <InvestSection />
      <WatchSection />
      <LearnSection />
      <TestimonialsSection />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
