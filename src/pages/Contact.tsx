import { MapPin, Mail, Phone, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/data/content";

const Contact = () => {

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero */}
      <section className="bg-gradient-hero text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto text-primary-foreground/90">
            Let's discuss how we can support your manufacturing needs
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto space-y-6">
            <Card className="border-border">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3 mb-4">
                  <MapPin className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Address</h3>
                    <p className="text-sm text-muted-foreground">
                      1351, Ground Floor, 25th Main, 24th Cross,<br />
                      Banashankari 2nd Stage,<br />
                      Bangalore – 560070
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3 mb-4">
                  <Mail className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a 
                      href="mailto:bharathrrao@fitronmantech.in" 
                      className="text-sm text-accent hover:underline"
                    >
                      bharathrrao@fitronmantech.in
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3 mb-4">
                  <Phone className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <a 
                      href="tel:+919845519914" 
                      className="text-sm text-accent hover:underline"
                    >
                      +91-98455-19914
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Business Hours</h3>
                    <p className="text-sm text-muted-foreground">
                      Monday - Saturday<br />
                      9:00 AM - 6:00 PM IST
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
