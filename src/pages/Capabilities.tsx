import { CheckCircle, Award, FileCheck, Cog } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import qualityImage from "@/assets/quality-lab.jpg";

const Capabilities = () => {
  const processes = [
    {
      category: "Machining",
      items: ["CNC Turning & Milling (3, 4, 5-axis)", "Swiss-type Automatic Turning", "EDM & Wire EDM", "Precision Grinding (Surface, Cylindrical, ID/OD)"]
    },
    {
      category: "Finishing",
      items: ["Deburring & Polishing", "Surface Treatments (Anodizing, Plating)", "Heat Treatment & Hardening", "Coating & Painting"]
    },
    {
      category: "Assembly",
      items: ["Sub-assembly & Final Assembly", "Torque-controlled Fastening", "Testing & Quality Inspection", "Packaging & Kitting"]
    },
  ];

  const standards = [
    "ISO 9001:2015 Quality Management",
    "ASTM Material Standards Compliance",
    "ASME B30 (Lifting Equipment)",
    "RoHS & REACH Compliance",
    "Export Certification Support",
    "Full Material Traceability",
  ];

  const equipment = [
    "CMM (Coordinate Measuring Machine)",
    "Optical Comparators & Vision Systems",
    "Surface Roughness Testers",
    "Hardness Testing Equipment",
    "Material Spectrometers",
    "Environmental Testing Chamber",
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero */}
      <section className="bg-gradient-hero text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Manufacturing Capabilities</h1>
          <p className="text-xl max-w-3xl mx-auto text-primary-foreground/90">
            State-of-the-art facility equipped for precision manufacturing and quality excellence
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Advanced Manufacturing Facility
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our 15,000 sq ft facility in Bangalore houses modern CNC equipment, precision measurement tools, and dedicated quality control systems. We combine advanced technology with skilled craftsmanship to deliver components that meet the highest international standards.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Cog className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">In-house Engineering</h3>
                    <p className="text-sm text-muted-foreground">Full CAD/CAM capabilities with process planning and optimization</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Award className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Quality First</h3>
                    <p className="text-sm text-muted-foreground">ISO 9001:2015 certified with comprehensive QC protocols</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FileCheck className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Full Documentation</h3>
                    <p className="text-sm text-muted-foreground">Material certs, dimensional reports, and test records with every shipment</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src={qualityImage}
                alt="Quality control facility"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Processes */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Manufacturing Processes</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {processes.map((process, index) => (
              <Card key={index} className="border-border">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-4 text-accent">{process.category}</h3>
                  <ul className="space-y-2">
                    {process.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quality & Standards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Quality Certifications & Standards</h2>
              <p className="text-muted-foreground mb-6">
                We maintain rigorous quality standards and certifications to ensure every component meets or exceeds customer specifications and industry requirements.
              </p>
              <div className="space-y-3">
                {standards.map((standard, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-secondary/50 rounded-md">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="font-medium">{standard}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Inspection & Testing Equipment</h2>
              <p className="text-muted-foreground mb-6">
                Our quality lab is equipped with advanced metrology and testing instruments for comprehensive verification and validation.
              </p>
              <div className="space-y-3">
                {equipment.map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-secondary/50 rounded-md">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Capabilities;
