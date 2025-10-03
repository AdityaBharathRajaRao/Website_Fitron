import { FileText, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Resources = () => {
  const resources = [
    {
      title: "Company Brochure",
      description: "Overview of our capabilities, facilities, and product range",
      format: "PDF • 2.4 MB",
      category: "General"
    },
    {
      title: "ISO 9001:2015 Certificate",
      description: "Quality management system certification",
      format: "PDF • 450 KB",
      category: "Certifications"
    },
    {
      title: "Modular Workholding Catalog",
      description: "Complete catalog of workholding fixtures and accessories",
      format: "PDF • 8.2 MB",
      category: "Products"
    },
    {
      title: "Material Specifications Guide",
      description: "Detailed specifications for supported materials and grades",
      format: "PDF • 1.1 MB",
      category: "Technical"
    },
    {
      title: "Quality Control Procedures",
      description: "Our quality assurance and inspection protocols",
      format: "PDF • 680 KB",
      category: "Quality"
    },
    {
      title: "Custom Component Request Form",
      description: "Template for submitting custom manufacturing requirements",
      format: "Excel • 120 KB",
      category: "Forms"
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero */}
      <section className="bg-gradient-hero text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Resources & Downloads</h1>
          <p className="text-xl max-w-3xl mx-auto text-primary-foreground/90">
            Technical literature, certifications, and documentation
          </p>
        </div>
      </section>

      {/* Downloads */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-2">Technical Documentation</h2>
              <p className="text-muted-foreground">
                Download product catalogs, certifications, and technical specifications
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {resources.map((resource, index) => (
                <Card key={index} className="border-border hover:shadow-md transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-accent/10 rounded-lg">
                        <FileText className="h-6 w-6 text-accent" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <h3 className="font-semibold">{resource.title}</h3>
                          <span className="text-xs bg-secondary px-2 py-1 rounded">
                            {resource.category}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">
                          {resource.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-muted-foreground">{resource.format}</span>
                          <Button variant="link" size="sm" className="p-0">
                            <Download className="h-4 w-4 mr-1" />
                            Download
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need More Information?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our technical team is available to provide detailed specifications, drawings, and custom documentation
          </p>
          <Button variant="cta" size="lg" asChild>
            <a href="mailto:bharathrrao@fitronmantech.in">
              Contact Technical Support
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Resources;
