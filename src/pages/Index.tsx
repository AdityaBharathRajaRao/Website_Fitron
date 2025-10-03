import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Globe, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-manufacturing.jpg";
import qualityImage from "@/assets/quality-lab.jpg";
const Index = () => {
  const valueProps = [{
    icon: <Globe className="h-8 w-8 text-accent" />,
    title: "Indigenization & OEM Vision",
    description: "Reducing import dependency with locally manufactured components that meet global quality standards."
  }, {
    icon: <Award className="h-8 w-8 text-accent" />,
    title: "International Standards",
    description: "ASTM, ASME, and ISO-grade manufacturing with full material certifications and testing documentation."
  }, {
    icon: <Users className="h-8 w-8 text-accent" />,
    title: "Local Talent & Supply Chain",
    description: "Leveraging India's skilled workforce and robust supply ecosystem to deliver competitive, reliable solutions."
  }];
  const capabilities = ["CNC Machining (3, 4, 5-axis)", "Precision Grinding & Finishing", "Heat Treatment & Surface Hardening", "CMM Inspection & Quality Control", "Material Testing & Certification", "Custom Engineering & Prototyping"];
  return <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Modern manufacturing facility" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-overlay"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Indigenized Industrial Components — Made in India, Trusted Worldwide
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Developing ASTM / ASME / ISO-grade components using locally sourced materials, skilled talent and industry-grade testing — enabling 'Make in India' and 'Viksit Bharat' at scale.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">Request a Quote <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="bg-white/10 border-white text-white hover:bg-white hover:text-primary">
                <Link to="/products">View Products</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Fitron Mantech</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              World-class manufacturing capabilities combined with the agility and cost-effectiveness of Indian production
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {valueProps.map((prop, index) => <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="mb-4">{prop.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{prop.title}</h3>
                  <p className="text-muted-foreground">{prop.description}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Manufacturing Capabilities */}
      

      {/* CTA Section */}
      <section className="py-16 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            From prototype to production, we deliver precision components that meet your exact specifications.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Contact Sales</Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="bg-white/10 border-white text-white hover:bg-white hover:text-primary">
              <Link to="/products">Browse Products</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Index;