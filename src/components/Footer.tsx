import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle, Phone, Mail, MapPin, Instagram, Youtube, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { title: "Invest", href: "#invest" },
    { title: "Watch", href: "#watch" },
    { title: "Learn", href: "#learn" },
    { title: "About Us", href: "#about" },
    { title: "Contact", href: "#contact" },
  ];

  const investmentTypes = [
    { title: "Residential Properties", href: "#" },
    { title: "Commercial Real Estate", href: "#" },
    { title: "Mixed Development", href: "#" },
    { title: "NRI Investment", href: "#" },
    { title: "Plot Deals", href: "#" },
  ];

  const resources = [
    { title: "Investment Calculator", href: "#" },
    { title: "Market Reports", href: "#" },
    { title: "Legal Guide", href: "#" },
    { title: "Tax Consultation", href: "#" },
    { title: "Blog", href: "#" },
  ];

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ];

  return (
    <footer className="bg-primary text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-3xl font-serif font-bold mb-2">
                Nivesh <span className="text-secondary">Bhumi</span>
              </h3>
              <p className="text-sm text-white/70 font-sans">Investment Land</p>
            </div>
            
            <p className="text-white/80 mb-6 leading-relaxed">
              India's premier real estate investment platform, combining cutting-edge technology 
              with expert insights to deliver exceptional returns for modern investors.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-secondary" />
                <span className="text-white/90">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-secondary" />
                <span className="text-white/90">invest@niveshbhumi.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-secondary" />
                <span className="text-white/90">Mumbai • Delhi • Bangalore</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-white/10 hover:bg-secondary rounded-full flex items-center justify-center transition-all duration-300 cursor-fancy hover-lift"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-secondary transition-colors duration-300 cursor-fancy"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Investment Types */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Investment Types</h4>
            <ul className="space-y-3">
              {investmentTypes.map((type, index) => (
                <li key={index}>
                  <a
                    href={type.href}
                    className="text-white/80 hover:text-secondary transition-colors duration-300 cursor-fancy"
                  >
                    {type.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Resources</h4>
            <ul className="space-y-3">
              {resources.map((resource, index) => (
                <li key={index}>
                  <a
                    href={resource.href}
                    className="text-white/80 hover:text-secondary transition-colors duration-300 cursor-fancy"
                  >
                    {resource.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="border-t border-white/20 pt-12 mt-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-2xl font-serif font-bold text-white mb-2">
                Stay Updated
              </h4>
              <p className="text-white/80">
                Get the latest market insights and investment opportunities delivered to your inbox.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-secondary"
              />
              <Button className="bg-secondary hover:bg-secondary/90 text-primary font-semibold px-8 cursor-fancy">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-secondary rounded-2xl p-8 lg:p-12 mt-12 text-center">
          <h3 className="text-2xl lg:text-3xl font-serif font-bold text-primary mb-4">
            Ready to Start Your Investment Journey?
          </h3>
          <p className="text-primary/80 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of successful investors who trust Nivesh Bhumi for their real estate investments.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white px-8 py-4 cursor-fancy hover-lift"
            >
              <Phone className="w-5 h-5 mr-2" />
              Book Free Consultation
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary/20 text-primary hover:bg-primary/10 px-8 py-4 cursor-fancy hover-lift"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Join WhatsApp Group
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20">
        <div className="container mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white/70">
            <div className="mb-4 md:mb-0">
              <p>© 2024 Nivesh Bhumi. All rights reserved.</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-secondary transition-colors cursor-fancy">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-secondary transition-colors cursor-fancy">
                Terms of Service
              </a>
              <a href="#" className="hover:text-secondary transition-colors cursor-fancy">
                Cookie Policy
              </a>
              <a href="#" className="hover:text-secondary transition-colors cursor-fancy">
                RERA Compliance
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;