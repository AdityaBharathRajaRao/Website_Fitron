import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { productCategories, individualProducts } from "@/data/content";

const Products = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero */}
      <section className="bg-gradient-hero text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Jergens</h1>
          <p className="text-xl max-w-3xl mx-auto text-primary-foreground/90">
            Precision-engineered components for modern manufacturing, machining, and assembly applications
          </p>
        </div>
      </section>

      {/* Trading Principals - Jergens */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Trading Principals</h2>
            
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4">Jergens Inc., USA</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Associated with <strong>Jergens India Private Limited</strong>, a fully owned subsidiary of Jergens Inc., USA. Jergens Inc. was founded in 1942 by Jack Schron, Sr. and his father Christy, to provide standard components for building jigs and fixtures. Throughout its 75-year history the company has grown into 4 separate operating divisions: Tooling Component Division, Jergens Industrial Supply (JIS), ACME Industrial Company and Advanced Systems Group (ASG) Division of Jergens.
                </p>
                <p>
                  Jergens India Private Limited., Navi Mumbai opened in 2009, providing marketing and importing, warehousing, distribution and technical support to our customers, distributors and local representatives.
                </p>
                <p>
                  Jergens Tooling Division comprises 3 distinct business units: Workholding Solutions, Lifting Solutions and Speciality Fasteners. Today you will find our tooling components, fasteners and hoist rings at work in just about every industry on every continent. Additionally, we offer a wide range of metal working tools, clamps and supplies to manufacturers through our JIS division. ACME industrial is a premium manufacturer of precision drill bushings and keylocking thread inserts. And ASG division specializes in products for light assembly ranging from torque-controlled electric screwdrivers to automation systems.
                </p>
              </div>
            </div>

            <div className="bg-accent/10 rounded-lg p-6 mb-8">
              <h4 className="text-xl font-bold mb-4">Jergens is a proud supplier to leading companies in the following industries:</h4>
              <div className="grid md:grid-cols-2 gap-3">
                {['Transportation', 'Military/Aviation', 'Manufacturing', 'Metalworking', 'Material Handling', 'Recreation', 'Entertainment'].map((industry, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span className="text-accent">•</span>
                    <span>{industry}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <p className="text-muted-foreground leading-relaxed mb-4">
                Jergens quality control procedures define the entire manufacturing process and provide complete traceability from raw materials, tested in our metallurgical lab, to finished products. The certifications are AS 9100 Rev D/ ISO 9001:2015, ANSI/ ASME B30.26, MIL, NAS, (OSHA) 29 CFR 1918, etc.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="outline" asChild></Button>
                <Button variant="outline" asChild></Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Product Categories</h2>
            <ul className="space-y-3 text-lg">
              {productCategories.map((category, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <span className="text-accent text-xl">•</span>
                  <span className="text-muted-foreground">{category}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Individual Products */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Products</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive range of precision-engineered components for industrial applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {individualProducts.map(product => (
              <Card key={product.id} className="border-border hover:shadow-lg transition-shadow group">
                <CardContent className="pt-6">
                  <div className="w-full h-48 flex items-center justify-center bg-white rounded-md mb-4 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                  <p className="text-muted-foreground">{product.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Solutions */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our engineering team specializes in custom component development from concept to production
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

export default Products;
