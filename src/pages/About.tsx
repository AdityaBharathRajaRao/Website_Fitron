import { Target, Eye } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { founders } from "@/data/content";

// Import team images
import teamImage1 from "@/assets/team-founders1.jpg";
import teamImage2 from "@/assets/team-founders2.jpg";
import teamImage3 from "@/assets/team-founders3.jpg";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            About Fitron
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-primary-foreground/90">
            Indigenized Industrial Components — Made in India, Trusted Worldwide
          </p>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Who We Are
          </h2>
          <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
            <p>
              At Fitron, we are committed to transforming India’s manufacturing
              landscape by indigenizing high-quality industrial components.
              Today, nearly all products in this sector are imported — creating
              dependency and slowing innovation. We aim to change that.
            </p>
            <p>
              Our journey will progress in carefully planned phases, beginning
              with products that meet international standards. Over time, we
              will expand into advanced, globally competitive solutions that not
              only serve India but also make their mark on the world.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8">
          {/* Vision */}
          <Card className="border-border shadow-md rounded-2xl">
            <CardContent className="pt-8">
              <Eye className="h-12 w-12 text-accent mb-6" />
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                To become a globally recognized Indian Original Equipment
                Manufacturer (OEM) delivering world-class industrial solutions
                that redefine trust, quality, and innovation.
              </p>
            </CardContent>
          </Card>

          {/* Mission */}
          <Card className="border-border shadow-md rounded-2xl">
            <CardContent className="pt-8">
              <Target className="h-12 w-12 text-accent mb-6" />
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <ul className="text-muted-foreground space-y-3 text-lg leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>
                    Develop products that meet or exceed international standards
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>
                    Leverage local resources, talent, and innovative techniques
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Create employment opportunities across India</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Build a sustainable, robust manufacturing ecosystem</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Founders & Advisors Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Founders & Advisors
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Industry veterans with decades of experience driving India’s
              manufacturing excellence
            </p>
          </div>

          <div className="grid gap-10">
            {founders.map((founder, index) => (
              <Card
                key={index}
                className="border-border shadow-md rounded-2xl"
              >
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-4 gap-6 items-start">
                    {/* Image */}
                    <div className="md:col-span-1 flex justify-center">
                      <img
                        src={
                          index === 0
                            ? teamImage1
                            : index === 1
                            ? teamImage2
                            : teamImage3
                        }
                        alt={founder.name}
                        className="w-full max-h-64 object-contain rounded-lg bg-gray-100 shadow-sm"
                      />
                    </div>

                    {/* Text */}
                    <div className="md:col-span-3">
                      <h3 className="text-2xl font-bold mb-2">
                        {founder.name}
                      </h3>
                      <p className="text-accent font-medium mb-4">
                        {founder.role}
                      </p>
                      <p className="text-muted-foreground leading-relaxed text-lg whitespace-pre-line">
                        {founder.bio}
                      </p>
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
