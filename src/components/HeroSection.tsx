import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-cityscape.jpg";

const HeroSection = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      if (parallaxRef.current) {
        parallaxRef.current.style.transform = `translateY(${scrolled * 0.3}px)`;
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <div
        ref={parallaxRef}
        className="absolute inset-0 w-full h-[120%] bg-cover bg-center parallax-element"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-overlay" />
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-secondary/20 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-1/3 right-16 w-32 h-32 bg-primary/20 rounded-full blur-2xl animate-pulse" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-8 text-center">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Hindi Tagline */}
          <p className="text-secondary font-serif text-lg lg:text-xl animate-fade-in">
            आपका निवेश, हमारी जिम्मेदारी
          </p>
          
          {/* Main Headline */}
          <h1 className="text-5xl lg:text-7xl xl:text-8xl font-serif font-bold text-white leading-tight">
            Investment
            <br />
            <span className="text-gradient">Redefined</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto font-light leading-relaxed">
            Curated real estate opportunities for the modern investor. 
            Tech-driven insights, immersive experiences, and premium properties 
            that build generational wealth.
          </p>
          
          {/* Stats */}
          <div className="flex justify-center items-center space-x-8 lg:space-x-12 text-white/80">
            <div className="text-center">
              <div className="text-2xl lg:text-3xl font-bold text-secondary">₹500Cr+</div>
              <div className="text-sm">Assets Under Management</div>
            </div>
            <div className="w-px h-12 bg-white/20" />
            <div className="text-center">
              <div className="text-2xl lg:text-3xl font-bold text-secondary">1000+</div>
              <div className="text-sm">Happy Investors</div>
            </div>
            <div className="w-px h-12 bg-white/20" />
            <div className="text-center">
              <div className="text-2xl lg:text-3xl font-bold text-secondary">15+</div>
              <div className="text-sm">Cities Covered</div>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Button 
              size="lg" 
              className="bg-secondary hover:bg-secondary/90 text-primary font-semibold px-8 py-6 text-lg cursor-fancy hover-lift"
            >
              Explore Properties
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg cursor-fancy hover-lift"
            >
              <Play className="mr-2 w-5 h-5" />
              Watch Story
            </Button>
          </div>
          
          {/* Trust Indicators */}
          <div className="flex justify-center items-center space-x-6 pt-12 text-white/60 text-sm">
            <div className="flex items-center">
              <TrendingUp className="w-4 h-4 mr-2 text-secondary" />
              RERA Approved
            </div>
            <div>•</div>
            <div>RBI Compliant</div>
            <div>•</div>
            <div>ISO Certified</div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-white/60 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;