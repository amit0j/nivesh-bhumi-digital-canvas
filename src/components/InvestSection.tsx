import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, TrendingUp, Users, Star, ArrowRight } from "lucide-react";
import propertyImage from "@/assets/property-abstract.jpg";

const InvestSection = () => {
  const featuredProperties = [
    {
      id: 1,
      title: "Luxury Residences, Gurgaon",
      location: "Golf Course Road, Sector 54",
      price: "₹2.8 Cr",
      returns: "12-15%",
      type: "Residential",
      image: propertyImage,
      tags: ["Premium", "Ready to Move"],
      rating: 4.8,
      investors: 45,
    },
    {
      id: 2,
      title: "Commercial Hub, Bangalore",
      location: "Whitefield Tech Park",
      price: "₹5.2 Cr",
      returns: "18-22%",
      type: "Commercial",
      image: propertyImage,
      tags: ["High Yield", "IT Hub"],
      rating: 4.9,
      investors: 78,
    },
    {
      id: 3,
      title: "Modern Apartments, Mumbai",
      location: "Bandra Kurla Complex",
      price: "₹4.1 Cr",
      returns: "10-14%",
      type: "Residential",
      image: propertyImage,
      tags: ["Metro Connected", "Premium"],
      rating: 4.7,
      investors: 62,
    },
  ];

  const investmentTypes = [
    {
      title: "Residential Properties",
      description: "Premium homes in prime locations with high appreciation potential",
      icon: "🏠",
      count: "150+ Properties"
    },
    {
      title: "Commercial Real Estate",
      description: "Office spaces and retail outlets in business districts",
      icon: "🏢",
      count: "80+ Properties"
    },
    {
      title: "Mixed Development",
      description: "Integrated townships combining residential and commercial",
      icon: "🏙️",
      count: "25+ Projects"
    },
  ];

  return (
    <section id="invest" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Investment Opportunities
          </Badge>
          <h2 className="text-4xl lg:text-6xl font-serif font-bold text-foreground mb-6">
            Curated for <span className="text-gradient">Excellence</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hand-picked properties analyzed through our proprietary technology stack. 
            Every investment opportunity is vetted for maximum returns and minimum risk.
          </p>
        </div>

        {/* Investment Types */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {investmentTypes.map((type, index) => (
            <Card key={index} className="hover-lift cursor-fancy bg-card border-border">
              <CardContent className="p-8 text-center">
                <div className="text-4xl mb-4">{type.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{type.title}</h3>
                <p className="text-muted-foreground mb-4">{type.description}</p>
                <Badge variant="outline">{type.count}</Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Properties */}
        <div className="mb-16">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12">
            <div>
              <h3 className="text-3xl lg:text-4xl font-serif font-bold text-foreground mb-2">
                Featured Properties
              </h3>
              <p className="text-muted-foreground">
                Premium opportunities available for investment
              </p>
            </div>
            <Button variant="outline" className="mt-4 sm:mt-0 cursor-fancy">
              View All Properties
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {featuredProperties.map((property) => (
              <Card key={property.id} className="overflow-hidden hover-lift cursor-fancy bg-card border-border">
                <div className="relative">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary text-primary-foreground">
                      {property.type}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4 bg-black/50 text-white px-2 py-1 rounded text-sm">
                    {property.returns} Returns
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-lg font-semibold">{property.title}</h4>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Star className="w-4 h-4 fill-secondary text-secondary mr-1" />
                      {property.rating}
                    </div>
                  </div>
                  
                  <div className="flex items-center text-muted-foreground mb-4">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span className="text-sm">{property.location}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {property.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div>
                      <div className="text-2xl font-bold text-foreground">{property.price}</div>
                      <div className="text-sm text-muted-foreground flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {property.investors} investors
                      </div>
                    </div>
                    <Button size="sm" className="cursor-fancy">
                      <TrendingUp className="w-4 h-4 mr-2" />
                      Invest Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Investment Process */}
        <div className="bg-muted rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-serif font-bold text-foreground mb-4">
              Your Investment Journey
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From discovery to ownership, we make real estate investment seamless and transparent
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discover", desc: "Browse curated properties with detailed analytics" },
              { step: "02", title: "Analyze", desc: "Review market data, returns, and risk assessment" },
              { step: "03", title: "Invest", desc: "Secure your investment with digital documentation" },
              { step: "04", title: "Track", desc: "Monitor performance and returns in real-time" },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-gradient-secondary rounded-full flex items-center justify-center text-primary font-bold text-lg mb-4 mx-auto">
                  {item.step}
                </div>
                <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestSection;