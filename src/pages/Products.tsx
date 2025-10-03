import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { productCategories } from "@/data/content";
import productsImage from "@/assets/products-workholding.jpg";

const Products = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero */}
      <section className="bg-gradient-hero text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Products & Solutions</h1>
          <p className="text-xl max-w-3xl mx-auto text-primary-foreground/90">
            Precision-engineered components for modern manufacturing, machining, and assembly applications
          </p>
        </div>
      </section>

      {/* Trading Principal */}
      <section className="py-12 bg-accent/10 border-y border-accent/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold mb-2">Authorized Distributor: Jergens Inc.</h2>
              <p className="text-muted-foreground">
                Official partner for Jergens workholding and fixturing solutions in India
              </p>
            </div>
            <Button variant="outline" asChild>
              <a href="https://www.jergensinc.com" target="_blank" rel="noopener noreferrer">
                Visit Jergens Website <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Product Categories</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive range of standard and custom components for industrial applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories.map((category) => (
              <Card key={category.id} className="border-border hover:shadow-lg transition-shadow group">
                <CardContent className="pt-6">
                  <img 
                    src={productsImage}
                    alt={category.name}
                    className="w-full h-48 object-cover rounded-md mb-4 group-hover:scale-105 transition-transform"
                  />
                  <h3 className="text-xl font-bold mb-2">{category.name}</h3>
                  <p className="text-muted-foreground mb-4">{category.description}</p>
                  <Button variant="link" className="p-0" asChild>
                    <Link to={`/products/${category.id}`}>
                      View Details <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
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
