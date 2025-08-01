import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Play, Eye, Clock, ArrowRight } from "lucide-react";

const WatchSection = () => {
  const [activeVideo, setActiveVideo] = useState(0);

  const videoContent = [
    {
      id: 1,
      title: "Luxury Living in Mumbai's Financial District",
      duration: "3:45",
      views: "12.5K",
      type: "Property Tour",
      thumbnail: "/api/placeholder/400/300",
      description: "Take a virtual walk through this stunning 3BHK apartment in BKC with panoramic city views."
    },
    {
      id: 2,
      title: "Investment Analysis: Gurgaon Tech Corridor",
      duration: "5:20",
      views: "8.3K",
      type: "Market Analysis",
      thumbnail: "/api/placeholder/400/300",
      description: "Deep dive into the commercial real estate opportunities in Cyber City and surrounding areas."
    },
    {
      id: 3,
      title: "Client Success Story: From ₹50L to ₹2Cr",
      duration: "4:15",
      views: "15.7K",
      type: "Success Story",
      thumbnail: "/api/placeholder/400/300",
      description: "How Rajesh doubled his investment in 3 years through strategic property selection."
    },
    {
      id: 4,
      title: "Bangalore IT Hub: The Future of Tech Real Estate",
      duration: "6:30",
      views: "9.2K",
      type: "Market Insights",
      thumbnail: "/api/placeholder/400/300",
      description: "Exploring upcoming developments in Electronic City and Whitefield tech parks."
    },
  ];

  const webinarSeries = [
    {
      title: "NRI Investment Masterclass",
      date: "March 15, 2024",
      time: "8:00 PM IST",
      speaker: "Amit Sharma, Investment Strategist",
      attendees: 450,
      status: "upcoming"
    },
    {
      title: "Real Estate Tax Optimization",
      date: "March 22, 2024",
      time: "7:30 PM IST",
      speaker: "Priya Gupta, Tax Consultant",
      attendees: 380,
      status: "upcoming"
    },
    {
      title: "Market Trends Q1 2024",
      date: "February 28, 2024",
      time: "Recorded",
      speaker: "Team Nivesh Bhumi",
      attendees: 720,
      status: "recorded"
    },
  ];

  return (
    <section id="watch" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Immersive Content
          </Badge>
          <h2 className="text-4xl lg:text-6xl font-serif font-bold text-foreground mb-6">
            Watch & <span className="text-gradient">Learn</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From virtual property tours to market analysis, experience real estate 
            like never before with our immersive content library.
          </p>
        </div>

        {/* Featured Video Player */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Video Player */}
            <div className="lg:col-span-2">
              <Card className="overflow-hidden bg-card border-border shadow-premium">
                <div className="relative aspect-video bg-gradient-to-br from-primary to-primary/80">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Button
                      size="lg"
                      className="w-20 h-20 rounded-full bg-secondary hover:bg-secondary/90 cursor-fancy"
                      onClick={() => {/* Play video logic */}}
                    >
                      <Play className="w-8 h-8 text-primary fill-current ml-1" />
                    </Button>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <Badge className="bg-black/50 text-white mb-2">
                      {videoContent[activeVideo].type}
                    </Badge>
                    <h3 className="text-xl font-semibold mb-1">
                      {videoContent[activeVideo].title}
                    </h3>
                    <p className="text-sm opacity-90">
                      {videoContent[activeVideo].description}
                    </p>
                  </div>
                  <div className="absolute bottom-4 right-4 text-white text-sm bg-black/50 px-2 py-1 rounded">
                    {videoContent[activeVideo].duration}
                  </div>
                </div>
              </Card>
            </div>

            {/* Video Playlist */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground mb-4">Featured Content</h3>
              {videoContent.map((video, index) => (
                <Card
                  key={video.id}
                  className={`cursor-pointer transition-all duration-300 hover-lift ${
                    activeVideo === index ? 'ring-2 ring-secondary' : ''
                  }`}
                  onClick={() => setActiveVideo(index)}
                >
                  <CardContent className="p-4">
                    <div className="flex space-x-3">
                      <div className="relative flex-shrink-0">
                        <div className="w-20 h-14 bg-gradient-to-br from-primary/20 to-secondary/20 rounded flex items-center justify-center">
                          <Play className="w-4 h-4 text-primary" />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-medium text-foreground line-clamp-2 mb-1">
                          {video.title}
                        </h4>
                        <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                          <div className="flex items-center">
                            <Clock className="w-3 h-3 mr-1" />
                            {video.duration}
                          </div>
                          <div className="flex items-center">
                            <Eye className="w-3 h-3 mr-1" />
                            {video.views}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Webinar Series */}
        <div className="mb-16">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12">
            <div>
              <h3 className="text-3xl lg:text-4xl font-serif font-bold text-foreground mb-2">
                Live Webinars
              </h3>
              <p className="text-muted-foreground">
                Join our experts for live sessions on market trends and investment strategies
              </p>
            </div>
            <Button variant="outline" className="mt-4 sm:mt-0 cursor-fancy">
              View All Webinars
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {webinarSeries.map((webinar, index) => (
              <Card key={index} className="hover-lift cursor-fancy bg-card border-border">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Badge 
                      variant={webinar.status === 'upcoming' ? 'default' : 'secondary'}
                      className={webinar.status === 'upcoming' ? 'bg-secondary text-primary' : ''}
                    >
                      {webinar.status === 'upcoming' ? 'Upcoming' : 'Recorded'}
                    </Badge>
                    <div className="text-sm text-muted-foreground">
                      {webinar.attendees} attendees
                    </div>
                  </div>
                  
                  <h4 className="text-lg font-semibold text-foreground mb-2">
                    {webinar.title}
                  </h4>
                  
                  <p className="text-sm text-muted-foreground mb-4">
                    By {webinar.speaker}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="text-sm">
                      <div className="font-medium">{webinar.date}</div>
                      <div className="text-muted-foreground">{webinar.time}</div>
                    </div>
                    <Button 
                      size="sm" 
                      variant={webinar.status === 'upcoming' ? 'default' : 'outline'}
                      className="cursor-fancy"
                    >
                      {webinar.status === 'upcoming' ? 'Register' : 'Watch'}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Content Categories */}
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { title: "Property Tours", count: "25+", icon: "🏠", desc: "Virtual walkthroughs" },
            { title: "Market Analysis", count: "40+", icon: "📊", desc: "Data-driven insights" },
            { title: "Success Stories", count: "30+", icon: "🎯", desc: "Client journeys" },
            { title: "Expert Talks", count: "50+", icon: "🎤", desc: "Industry insights" },
          ].map((category, index) => (
            <Card key={index} className="text-center hover-lift cursor-fancy bg-card border-border">
              <CardContent className="p-6">
                <div className="text-3xl mb-3">{category.icon}</div>
                <h4 className="text-lg font-semibold mb-1">{category.title}</h4>
                <div className="text-2xl font-bold text-secondary mb-1">{category.count}</div>
                <p className="text-sm text-muted-foreground">{category.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WatchSection;