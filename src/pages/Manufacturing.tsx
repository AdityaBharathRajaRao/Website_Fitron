import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Manufacturing = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero */}
      <section className="bg-gradient-hero text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Manufacturing</h1>
          <p className="text-xl max-w-3xl mx-auto text-primary-foreground/90">
            Core business focused on developing world-class industrial components
          </p>
        </div>
      </section>

      {/* Manufacturing Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed text-lg">
               Manufacturing of components for Ultra hugh purity applications such as Semiconductor industries, biotech industries, etc. 
These manufacturing processes will be designed to meet the stringent international standards including SEMI, ASTM, etc. 
In order to achieve, the company will procure raw materials locally by partnering with the vendors who can develop technologies which consistently maintain the required chemistry & mechanical properties for every batch being produced. Thus ensuring material tolerances precisely. 
The components will be machined to accurate dimensions using latest tech machines where repeat ability is ensured. 
The machined components go through indegineously developed chemical treatment where the internal surfaces are chemically treated to meet the required purity requirements. 
All the components will go through all the necessary tests meeting industry approvals. 
In order to meet the ultra high purity requirements, the components will be packed in a clean room as per the industry guidelines before it gets shipped to the customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Manufacturing;
