import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, Calendar, User, ArrowRight, TrendingUp, FileText, Video } from "lucide-react";

const LearnSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Real Estate Investment Guide for NRIs in 2024",
      excerpt: "Complete guide covering FEMA regulations, tax implications, and best investment strategies for Non-Resident Indians.",
      author: "Amit Sharma",
      date: "March 10, 2024",
      readTime: "8 min read",
      category: "NRI Investment",
      image: "/api/placeholder/400/250",
      featured: true
    },
    {
      id: 2,
      title: "Mumbai vs Bangalore: Which City Offers Better ROI?",
      excerpt: "Comprehensive comparison of real estate markets in India's top two metropolitan cities for investors.",
      author: "Priya Gupta",
      date: "March 8, 2024",
      readTime: "6 min read",
      category: "Market Analysis",
      image: "/api/placeholder/400/250",
      featured: false
    },
    {
      id: 3,
      title: "Commercial Real Estate: The New Investment Frontier",
      excerpt: "Why commercial properties are becoming the preferred choice for high-net-worth investors in India.",
      author: "Rajesh Kumar",
      date: "March 5, 2024",
      readTime: "10 min read",
      category: "Commercial",
      image: "/api/placeholder/400/250",
      featured: false
    },
  ];

  const resources = [
    {
      title: "Investment Calculator",
      description: "Calculate potential returns and EMI for your property investment",
      icon: <TrendingUp className="w-6 h-6" />,
      type: "Tool",
      link: "#"
    },
    {
      title: "Legal Documentation Guide",
      description: "Step-by-step guide for property purchase documentation",
      icon: <FileText className="w-6 h-6" />,
      type: "PDF Guide",
      link: "#"
    },
    {
      title: "Market Reports",
      description: "Quarterly market analysis and trend reports",
      icon: <BookOpen className="w-6 h-6" />,
      type: "Report",
      link: "#"
    },
    {
      title: "Video Tutorials",
      description: "Learn real estate investing through expert-led videos",
      icon: <Video className="w-6 h-6" />,
      type: "Video Series",
      link: "#"
    },
  ];

  const categories = [
    { name: "NRI Investment", count: 24, color: "bg-blue-100 text-blue-800" },
    { name: "Market Analysis", count: 18, color: "bg-green-100 text-green-800" },
    { name: "Commercial", count: 15, color: "bg-purple-100 text-purple-800" },
    { name: "Residential", count: 21, color: "bg-orange-100 text-orange-800" },
    { name: "Tax & Legal", count: 12, color: "bg-red-100 text-red-800" },
  ];

  return (
    <section id="learn" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Knowledge Center
          </Badge>
          <h2 className="text-4xl lg:text-6xl font-serif font-bold text-foreground mb-6">
            Learn & <span className="text-gradient">Grow</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Master the art of real estate investment with our comprehensive guides, 
            market insights, and expert-curated resources.
          </p>
        </div>

        {/* Featured Article */}
        {blogPosts.filter(post => post.featured).map(post => (
          <Card key={post.id} className="mb-16 overflow-hidden hover-lift cursor-fancy bg-card border-border shadow-premium">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative">
                <div className="h-64 lg:h-full bg-gradient-to-br from-primary/20 to-secondary/20" />
                <Badge className="absolute top-4 left-4 bg-secondary text-primary">
                  Featured
                </Badge>
              </div>
              <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                <Badge variant="outline" className="w-fit mb-4">
                  {post.category}
                </Badge>
                <h3 className="text-2xl lg:text-3xl font-serif font-bold text-foreground mb-4">
                  {post.title}
                </h3>
                <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {post.date}
                    </div>
                    <div>{post.readTime}</div>
                  </div>
                  <Button className="cursor-fancy">
                    Read More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </div>
          </Card>
        ))}

        {/* Blog Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {blogPosts.filter(post => !post.featured).map(post => (
            <Card key={post.id} className="overflow-hidden hover-lift cursor-fancy bg-card border-border">
              <div className="h-48 bg-gradient-to-br from-primary/10 to-secondary/10" />
              <CardContent className="p-6">
                <Badge variant="outline" className="mb-3">
                  {post.category}
                </Badge>
                <h4 className="text-xl font-semibold text-foreground mb-3 line-clamp-2">
                  {post.title}
                </h4>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                    <span>{post.author}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <Button variant="ghost" size="sm" className="cursor-fancy">
                    Read More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Resources Grid */}
        <div className="mb-16">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12">
            <div>
              <h3 className="text-3xl lg:text-4xl font-serif font-bold text-foreground mb-2">
                Investment Resources
              </h3>
              <p className="text-muted-foreground">
                Tools and guides to help you make informed investment decisions
              </p>
            </div>
            <Button variant="outline" className="mt-4 sm:mt-0 cursor-fancy">
              View All Resources
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource, index) => (
              <Card key={index} className="text-center hover-lift cursor-fancy bg-card border-border">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-secondary rounded-full flex items-center justify-center text-primary mx-auto mb-4">
                    {resource.icon}
                  </div>
                  <Badge variant="secondary" className="mb-3">
                    {resource.type}
                  </Badge>
                  <h4 className="text-lg font-semibold text-foreground mb-2">
                    {resource.title}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    {resource.description}
                  </p>
                  <Button size="sm" variant="outline" className="cursor-fancy">
                    Access Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Categories */}
        <div className="bg-muted rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-serif font-bold text-foreground mb-4">
              Explore by Category
            </h3>
            <p className="text-muted-foreground">
              Find content tailored to your specific investment interests
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant="outline"
                className="cursor-fancy hover-lift"
              >
                <BookOpen className="w-4 h-4 mr-2" />
                {category.name}
                <Badge variant="secondary" className="ml-2">
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearnSection;