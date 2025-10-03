import { Target, Eye, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { founders } from "@/data/content";
import teamImage from "@/assets/team-founders.jpg";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero */}
      <section className="bg-gradient-hero text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Fitron Mantech</h1>
          <p className="text-xl max-w-3xl mx-auto text-primary-foreground/90">
            Building India's manufacturing future with precision engineering and global quality standards
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="border-border">
              <CardContent className="pt-6">
                <Eye className="h-10 w-10 text-accent mb-4" />
                <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To become India's most trusted partner for indigenized industrial components, enabling OEMs to reduce import dependency while maintaining world-class quality standards. We envision a future where 'Made in India' components are the first choice for precision engineering needs.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardContent className="pt-6">
                <Target className="h-10 w-10 text-accent mb-4" />
                <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To manufacture ASTM, ASME, and ISO-grade components using locally sourced materials and skilled talent, delivering exceptional quality, reliability, and value. We're committed to supporting India's industrial growth through advanced manufacturing capabilities and technical excellence.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Approach */}
          <div className="bg-secondary/30 rounded-lg p-8 md:p-12">
            <div className="flex items-center gap-3 mb-6">
              <Award className="h-10 w-10 text-accent" />
              <h2 className="text-2xl md:text-3xl font-bold">Our Approach: Phased Development</h2>
            </div>
            <div className="space-y-6">
              <div className="border-l-4 border-accent pl-6">
                <h3 className="text-xl font-semibold mb-2">Phase 1: Standard Components (Current)</h3>
                <p className="text-muted-foreground">
                  Manufacturing proven catalog items like workholding fixtures, hoist rings, and quick-release pins to established specifications. Building quality reputation and production capacity.
                </p>
              </div>
              
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-semibold mb-2">Phase 2: Custom OEM Development</h3>
                <p className="text-muted-foreground">
                  Expanding into custom component manufacturing with engineering support for prototyping, testing, and production scaling. Partnering with OEMs to indigenize their supply chains.
                </p>
              </div>

              <div className="border-l-4 border-muted-foreground pl-6">
                <h3 className="text-xl font-semibold mb-2">Phase 3: Full Engineering Services</h3>
                <p className="text-muted-foreground">
                  Offering complete design-to-delivery solutions including material selection, process engineering, testing validation, and full supply chain management for complex industrial components.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Founders</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Industry veterans with decades of combined experience in precision engineering and manufacturing excellence
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {founders.map((founder, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <img 
                    src={teamImage}
                    alt={founder.name}
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                  <h3 className="text-xl font-bold mb-1">{founder.name}</h3>
                  <p className="text-accent font-medium mb-3">{founder.role}</p>
                  <p className="text-sm text-muted-foreground">{founder.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
