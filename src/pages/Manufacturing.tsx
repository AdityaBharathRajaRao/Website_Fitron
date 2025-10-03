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
                Manufacturing of components for Industrial manufacturing solutions is the core business for the organization. In the process of pooling the required talent, professionals, establishing the local supply chain, etc to bring them all for a common goal of developing prototypes which can be tested & ascertained by internal agencies. Further to success of testing and necessary approvals, the products will be subjected to trails at customer's applications. Upon triumph meeting the customer expectations, the products will be mass produced for industrial consumption and later expanded further for global market.
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
