import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Download, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { productCategories } from "@/data/content";
import productsImage from "@/assets/products-workholding.jpg";

const ProductDetail = () => {
  const { id } = useParams();
  const category = productCategories.find(c => c.id === id);

  if (!category) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Product category not found</h2>
            <Button asChild>
              <Link to="/products">Back to Products</Link>
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const specifications = [
    { label: "Material Standards", value: "ASTM A36, A572, SS304, SS316" },
    { label: "Tolerance", value: "±0.001\" to ±0.005\"" },
    { label: "Surface Finish", value: "Ra 0.8 to Ra 3.2 μm" },
    { label: "Hardness Range", value: "HRC 45-62 (depending on material)" },
    { label: "Coating Options", value: "Black Oxide, Zinc Plating, Anodized" },
    { label: "Testing", value: "CMM, Hardness, Material Cert included" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Breadcrumb & Back */}
      <section className="bg-secondary/30 py-6">
        <div className="container mx-auto px-4">
          <Button variant="ghost" size="sm" asChild>
            <Link to="/products">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Products
            </Link>
          </Button>
        </div>
      </section>

      {/* Product Detail */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            <div>
              <img 
                src={productsImage}
                alt={category.name}
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            
            <div>
              <h1 className="text-4xl font-bold mb-4">{category.name}</h1>
              <p className="text-lg text-muted-foreground mb-6">
                {category.description}
              </p>
              
              <div className="space-y-4 mb-8">
                <h2 className="text-2xl font-bold">Technical Specifications</h2>
                <div className="space-y-3">
                  {specifications.map((spec, index) => (
                    <div key={index} className="flex border-b border-border pb-2">
                      <span className="font-medium w-1/2">{spec.label}:</span>
                      <span className="text-muted-foreground w-1/2">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button variant="cta" size="lg" asChild>
                  <Link to="/contact">Request Quote</Link>
                </Button>
                <Button variant="outline" size="lg">
                  <Download className="mr-2 h-4 w-4" />
                  Download Datasheet
                </Button>
              </div>
            </div>
          </div>

          {/* Features & Applications */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-border">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-4">Key Features</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    <span>Manufactured to ASTM/ASME/ISO standards</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    <span>Full material traceability and certification</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    <span>Custom sizes and configurations available</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    <span>Precision machining with tight tolerances</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    <span>Multiple surface treatment options</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-4">Applications</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    <span>CNC machining centers and automated systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    <span>Assembly and inspection fixtures</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    <span>Automotive and aerospace manufacturing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    <span>Heavy equipment and industrial machinery</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    <span>General manufacturing and MRO applications</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Related CTA */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Custom Specifications?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our engineering team can develop components to your exact requirements with full technical support
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="cta" size="lg" asChild>
              <Link to="/contact">Contact Engineering</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/products">Browse All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductDetail;
