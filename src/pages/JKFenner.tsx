import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import jkFennerLogo from "@/assets/jkfenner/jkfenner-logo.jpg";
import mp3Grease from "@/assets/jkfenner/mp3-grease.jpg";
import mp3Premium from "@/assets/jkfenner/mp3-premium.jpg";
import highTempGrease from "@/assets/jkfenner/high-temp-grease.jpg";
import ep2Grease from "@/assets/jkfenner/ep2-grease.jpg";

const lubricants = [
  {
    id: 1,
    name: "Lythero Lithium Multi-Purpose MP3 Grade Grease",
    image: mp3Grease,
    description:
      "A lithium soap-based grease manufactured from quality refined base oils to provide good thermal and structural stability along with water resistance. Recommended for antifriction and plain bearings in Industrial and Automotive applications.",
  },
  {
    id: 2,
    name: "Lythero Lithium Multi-Purpose MP3 Premium Grade Grease",
    image: mp3Premium,
    description:
      "A high-quality lithium soap grease based on high base oil viscosity (160 cSt at 40°C), formulated to provide excellent thermal and structural stability along with high water resistance.",
  },
  {
    id: 3,
    name: "Lythero Lithium Complex High Temperature NLGI 2 Grease",
    image: highTempGrease,
    description:
      "A high-performance, smooth, homogeneous grease with an exceptional high drop point over 260°C, providing excellent resistance to leakage, dripping and throw-off at elevated operating temperatures. Offers excellent EP and antiwear properties, high water resistance, very good mechanical stability, and protection against rust and corrosion for extended bearing life. Recommended for lubrication of bearings under heavy loads and high temperatures.",
  },
  {
    id: 4,
    name: "Lythero Lithium Extreme Pressure NLGI 2 Grade Grease",
    image: ep2Grease,
    description:
      "A high-performance grease formulated with highly refined petroleum oil and fortified with performance additives to deliver additional extreme pressure properties and high load carrying capacity. Prevents excess wear, protects against rust and corrosion, and provides extended bearing life.",
  },
];

const JKFenner = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-hero text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <img
            src={jkFennerLogo}
            alt="JK Fenner"
            className="h-16 mx-auto mb-6 bg-white rounded-md p-2"
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">JK Fenner Lubricants</h1>
          <p className="text-xl max-w-3xl mx-auto text-primary-foreground/90">
            Authorized distributors of JK Fenner Lubricants, a trusted and experienced brand
            delivering high-performance industrial greases, gear oils and hydraulic oils.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About JK Fenner Lubricants</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                We are happy to introduce ourselves as authorized distributors of JK Fenner
                Lubricants, a most trusted and experienced brand in the domain of industrial
                solutions, now offering a developed range of industrial lubricants to cater to
                our customers.
              </p>
              <p>
                Lubricants (Grease / Gear Oil / Hydraulic Oil) developed by JK Fenner are built
                to withstand high pressure, high load, and high heat, while providing reliable
                water protection. The products manufactured exceed the quality requirements as
                per ASTM, NLGI, IS, and other applicable standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Lubricant Range</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              High-performance greases engineered for demanding industrial and automotive
              applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {lubricants.map((product) => (
              <Card
                key={product.id}
                className="border-border hover:shadow-lg transition-shadow group"
              >
                <CardContent className="pt-6">
                  <div className="w-full h-56 flex items-center justify-center bg-white rounded-md mb-4 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                  <p className="text-muted-foreground leading-relaxed">{product.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trial Samples CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Request a Trial Sample</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            We are able to provide trial samples for testing purposes. Looking forward to
            working with you on the opportunities.
          </p>
          <Button variant="cta" size="lg" asChild>
            <Link to="/contact">
              Discuss Your Requirements <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default JKFenner;
