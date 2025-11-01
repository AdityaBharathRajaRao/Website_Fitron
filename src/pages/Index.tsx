import { Link } from "react-router-dom";
import { ArrowRight, Globe, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-manufacturing.jpg";
import std1 from "@/assets/std1.jpg";
import std2 from "@/assets/std2.jpg";
import std3 from "@/assets/std3.jpg";
import std4 from "@/assets/std4.jpg";
import std5 from "@/assets/std5.jpg";

const Index = () => {
  const valueProps = [
    {
      icon: <Globe className="h-8 w-8 text-accent" />,
      title: "Indigenization & OEM Vision",
      description:
        "Reducing import dependency with locally manufactured components that meet global quality standards.",
    },
    {
      icon: <Award className="h-8 w-8 text-accent" />,
      title: "International Standards",
      description:
        "ASTM, ASME, and ISO-grade manufacturing with full material certifications and testing documentation.",
      standards: [std1, std2, std3, std4, std5], // ✅ added images
    },
    {
      icon: <Users className="h-8 w-8 text-accent" />,
      title: "Save Costs",
      description:
        "Solutions improve production efficiencies with no compromise on workmanship, quality & performance.",
    },
    {
      icon: <Users className="h-8 w-8 text-accent" />,
      title: "Local Talent & Supply Chain",
      description:
        "Leveraging India's skilled workforce and robust supply ecosystem to deliver competitive, reliable solutions.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Modern manufacturing facility"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-overlay"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              “Industrial Manufacturing Solutions – Made for You, Trusted Worldwide”
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Offering products & solutions meeting stringent international quality
              standards not limited to ASTM/ASME/ISO/NAS/MIL, etc.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  Request a Quote <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="bg-white/10 border-white text-white hover:bg-white hover:text-primary"
              >
                <Link to="/jergens">View Products</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Fitron Mantech
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              World-class manufacturing capabilities combined with the agility
              and cost-effectiveness of Indian production
            </p>
          </div>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 place-items-center">
            {valueProps.map((prop, index) => (
              <Card
                key={index}
                className="border-border hover:shadow-lg transition-shadow w-full max-w-md"
              >
                <CardContent className="pt-6 text-center">
                  <div className="mb-4 flex justify-center">{prop.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{prop.title}</h3>
                  <p className="text-muted-foreground mb-4">{prop.description}</p>

                  {/* ✅ Display standard logos only for "International Standards" */}
                  {prop.standards && (
                    <div className="flex justify-center items-center flex-wrap gap-4 mt-4">
                      {prop.standards.map((img, i) => (
                        <img
                          key={i}
                          src={img}
                          alt={`standard-${i}`}
                          className="h-10 w-auto object-contain"
                        />
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            From prototype to production, we deliver precision components that
            meet your exact specifications.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Contact Sales</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="bg-white/10 border-white text-white hover:bg-white hover:text-primary"
            >
              <Link to="/jergens">Browse Products</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
