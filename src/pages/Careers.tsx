import { Briefcase, TrendingUp, Users, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Careers = () => {
  const benefits = [
    {
      icon: <TrendingUp className="h-8 w-8 text-accent" />,
      title: "Growth & Learning",
      description: "Continuous training programs and career advancement opportunities in precision engineering"
    },
    {
      icon: <Users className="h-8 w-8 text-accent" />,
      title: "Collaborative Culture",
      description: "Work alongside industry experts in a supportive, team-oriented environment"
    },
    {
      icon: <Heart className="h-8 w-8 text-accent" />,
      title: "Competitive Benefits",
      description: "Industry-leading compensation, health coverage, and work-life balance initiatives"
    },
  ];

  const openings = [
    {
      title: "CNC Machinist",
      department: "Production",
      location: "Bangalore",
      type: "Full-time",
      description: "Experienced CNC operator with 3+ years in precision machining"
    },
    {
      title: "Quality Control Engineer",
      department: "Quality Assurance",
      location: "Bangalore",
      type: "Full-time",
      description: "BE/BTech with expertise in CMM operation and ISO standards"
    },
    {
      title: "Production Planning Executive",
      department: "Operations",
      location: "Bangalore",
      type: "Full-time",
      description: "Manufacturing planning experience with ERP systems knowledge"
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero */}
      <section className="bg-gradient-hero text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Join Our Team</h1>
          <p className="text-xl max-w-3xl mx-auto text-primary-foreground/90">
            Build your career in precision manufacturing with India's emerging leader in industrial components
          </p>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Work With Us</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Be part of India's manufacturing transformation and work on cutting-edge precision engineering projects
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                <CardContent className="pt-6 text-center">
                  <div className="flex justify-center mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Current Openings</h2>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {openings.map((job, index) => (
              <Card key={index} className="border-border hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Briefcase className="h-5 w-5 text-accent" />
                        <h3 className="text-xl font-bold">{job.title}</h3>
                      </div>
                      <div className="flex flex-wrap gap-3 text-sm text-muted-foreground mb-2">
                        <span>{job.department}</span>
                        <span>•</span>
                        <span>{job.location}</span>
                        <span>•</span>
                        <span>{job.type}</span>
                      </div>
                      <p className="text-muted-foreground">{job.description}</p>
                    </div>
                    <Button variant="outline" asChild>
                      <Link to="/contact">Apply Now</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Don't see a position that fits? We're always looking for talented individuals.
            </p>
            <Button variant="cta" asChild>
              <Link to="/contact">Send Your Resume</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;
