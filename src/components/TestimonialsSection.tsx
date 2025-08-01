import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const TestimonialsSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Rajesh Patel",
      location: "Mumbai → London",
      role: "NRI Investor",
      investment: "₹3.2 Cr",
      returns: "18% Annual Return",
      rating: 5,
      quote: "Nivesh Bhumi made my real estate investment journey seamless. From London, I could virtually tour properties and make informed decisions. My portfolio has grown by 45% in just 2 years.",
      image: "/api/placeholder/80/80",
      timeframe: "2 years"
    },
    {
      id: 2,
      name: "Priya Sharma",
      location: "Bangalore",
      role: "Tech Executive",
      investment: "₹1.8 Cr",
      returns: "22% Annual Return",
      rating: 5,
      quote: "The data-driven approach and market insights helped me identify the perfect commercial property in Whitefield. The ROI exceeded my expectations, and the team's support was exceptional.",
      image: "/api/placeholder/80/80",
      timeframe: "18 months"
    },
    {
      id: 3,
      name: "Amit Gupta",
      location: "Dubai → Gurgaon",
      role: "Business Owner",
      investment: "₹5.5 Cr",
      returns: "15% Annual Return",
      rating: 5,
      quote: "As an NRI, finding trustworthy real estate partners was challenging. Nivesh Bhumi's transparency and tech-driven solutions gave me confidence to invest across multiple properties.",
      image: "/api/placeholder/80/80",
      timeframe: "3 years"
    },
    {
      id: 4,
      name: "Kavita Singh",
      location: "Delhi",
      role: "Investment Banker",
      investment: "₹2.1 Cr",
      returns: "20% Annual Return",
      rating: 5,
      quote: "The virtual reality property tours and detailed analytics made it easy to evaluate multiple options. My residential investment in South Delhi has been phenomenal.",
      image: "/api/placeholder/80/80",
      timeframe: "1.5 years"
    },
  ];

  const stats = [
    { number: "500+", label: "Happy Investors" },
    { number: "₹1000Cr+", label: "Assets Managed" },
    { number: "18%", label: "Average Returns" },
    { number: "95%", label: "Client Satisfaction" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 lg:py-32 bg-gradient-primary text-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
            Client Success Stories
          </Badge>
          <h2 className="text-4xl lg:text-6xl font-serif font-bold mb-6">
            Trusted by <span className="text-secondary">Investors</span>
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Real stories from real investors who've built wealth through our platform. 
            Your success is our success.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-secondary mb-2">
                {stat.number}
              </div>
              <div className="text-white/80 text-sm lg:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Main Testimonial */}
        <div className="relative mb-16">
          <Card className="bg-white/10 backdrop-blur-md border-white/20 overflow-hidden">
            <CardContent className="p-8 lg:p-12">
              <div className="grid lg:grid-cols-3 gap-8 items-center">
                {/* Quote */}
                <div className="lg:col-span-2">
                  <Quote className="w-12 h-12 text-secondary mb-6" />
                  <blockquote className="text-xl lg:text-2xl font-light leading-relaxed text-white mb-8">
                    "{testimonials[activeTestimonial].quote}"
                  </blockquote>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center">
                      <span className="text-primary font-bold text-lg">
                        {testimonials[activeTestimonial].name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-white text-lg">
                        {testimonials[activeTestimonial].name}
                      </div>
                      <div className="text-white/70">
                        {testimonials[activeTestimonial].role} • {testimonials[activeTestimonial].location}
                      </div>
                      <div className="flex items-center mt-1">
                        {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Investment Details */}
                <div className="space-y-4">
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-secondary text-sm font-medium">Total Investment</div>
                    <div className="text-2xl font-bold text-white">
                      {testimonials[activeTestimonial].investment}
                    </div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-secondary text-sm font-medium">Returns Generated</div>
                    <div className="text-2xl font-bold text-white">
                      {testimonials[activeTestimonial].returns}
                    </div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-secondary text-sm font-medium">Investment Period</div>
                    <div className="text-xl font-semibold text-white">
                      {testimonials[activeTestimonial].timeframe}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300 cursor-fancy"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300 cursor-fancy"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Testimonial Indicators */}
        <div className="flex justify-center space-x-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 cursor-fancy ${
                index === activeTestimonial 
                  ? 'bg-secondary scale-125' 
                  : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl lg:text-3xl font-serif font-bold text-white mb-4">
            Ready to Join Our Success Stories?
          </h3>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Start your investment journey with India's most trusted real estate platform
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-secondary hover:bg-secondary/90 text-primary px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 cursor-fancy hover-lift">
              Start Investing Today
            </button>
            <button className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 cursor-fancy hover-lift">
              Schedule a Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;