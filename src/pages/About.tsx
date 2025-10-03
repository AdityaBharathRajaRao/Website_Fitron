import { Target, Eye, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { founders } from "@/data/content";

// ✅ import the 3 founder/advisor images
import teamImage1 from "@/assets/team-founders1.jpg";
import teamImage2 from "@/assets/team-founders2.jpg";
import teamImage3 from "@/assets/team-founders3.jpg";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-hero text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Fitron</h1>
          <p className="text-xl max-w-3xl mx-auto text-primary-foreground/90">
            Indigenized Industrial Components — Made in India, Trusted Worldwide
          </p>
        </div>
      </section>

      {/* About Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">About Us</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                The company will focus on the indigenization of products for Industrial manufacturing
                solutions. Currently, nearly all products in this sector are imported into India...
              </p>
              <p>
                The company's development and expansion will proceed in phases. Initially, the focus will be
                on developing products that meet international standards...
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-border">
              <CardContent className="pt-6">
                <Eye className="h-10 w-10 text-accent mb-4" />
                <h2 className="text-2xl font-bold mb-4">Vision</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To become a globally recognized Indian Original Equipment Manufacturer (OEM)...
                </p>
              </CardContent>
            </Card>
            <Card className="border-border">
              <CardContent className="pt-6">
                <Target className="h-10 w-10 text-accent mb-4" />
                <h2 className="text-2xl font-bold mb-4">Mission</h2>
                <div className="text-muted-foreground leading-relaxed">
                  <p className="mb-3">Our mission is to indigenize high-quality components...</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Developing products that meet or exceed international standards...</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Leveraging local materials, skilled talent, and innovative techniques...</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Creating employment opportunities...</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Building a robust manufacturing ecosystem...</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Founders & Advisors */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Founders & Advisors</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Industry veterans with decades of combined experience driving India's manufacturing excellence
            </p>
          </div>

          <div className="space-y-8">
            {founders.map((founder, index) => (
              <Card key={index} className="border-border">
                <CardContent className="pt-6">
                  <div className="grid md:grid-cols-4 gap-6">
                    <div className="md:col-span-1">
                      <img
                        src={
                          index === 0
                            ? teamImage1
                            : index === 1
                            ? teamImage2
                            : teamImage3
                        }
                        alt={founder.name}
                        className="w-full h-48 object-contain rounded-md bg-gray-50"
                      />
                    </div>
                    <div className="md:col-span-3">
                      <h3 className="text-2xl font-bold mb-1">{founder.name}</h3>
                      <p className="text-accent font-medium mb-4">{founder.role}</p>
                      <p className="text-muted-foreground leading-relaxed">{founder.bio}</p>
                    </div>
                  </div>
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
