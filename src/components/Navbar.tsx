import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, MessageCircle } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Invest", href: "#invest" },
    { label: "Watch", href: "#watch" },
    { label: "Learn", href: "#learn" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-elegant border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl lg:text-3xl font-serif font-bold text-foreground">
              Nivesh <span className="text-gradient">Bhumi</span>
            </h1>
            <p className="text-xs text-muted-foreground font-sans">Investment Land</p>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-foreground hover:text-secondary font-medium transition-colors duration-300 cursor-fancy"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="outline" size="sm" className="cursor-fancy">
              <Phone className="w-4 h-4 mr-2" />
              Book a Call
            </Button>
            <Button size="sm" className="bg-gradient-secondary cursor-fancy">
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-foreground cursor-fancy"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 ${
          isMobileMenuOpen
            ? "max-h-96 bg-background/95 backdrop-blur-md border-b border-border"
            : "max-h-0 overflow-hidden"
        }`}
      >
        <div className="container mx-auto px-6 py-6 space-y-4">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="block text-foreground hover:text-secondary font-medium transition-colors duration-300 cursor-fancy"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <div className="flex flex-col space-y-3 pt-4 border-t border-border">
            <Button variant="outline" size="sm" className="w-full cursor-fancy">
              <Phone className="w-4 h-4 mr-2" />
              Book a Call
            </Button>
            <Button size="sm" className="w-full bg-gradient-secondary cursor-fancy">
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;