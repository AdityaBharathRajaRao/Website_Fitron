import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Fitron Mantech</h3>
            <p className="text-sm text-primary-foreground/80">
              Indigenized Industrial Components — Made in India, Trusted Worldwide
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-sm text-primary-foreground/80 hover:text-primary-foreground">About Us</Link></li>
              <li><Link to="/manufacturing" className="text-sm text-primary-foreground/80 hover:text-primary-foreground">Manufacturing</Link></li>
              <li><Link to="/jergens" className="text-sm text-primary-foreground/80 hover:text-primary-foreground">Jergens</Link></li>
              <li><Link to="/contact" className="text-sm text-primary-foreground/80 hover:text-primary-foreground">Contact</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="https://www.jergensinc.com/literature" target="_blank" rel="noopener noreferrer" className="text-sm text-primary-foreground/80 hover:text-primary-foreground">Technical Literature</a></li>
              <li><a href="https://www.jergensinc.com" target="_blank" rel="noopener noreferrer" className="text-sm text-primary-foreground/80 hover:text-primary-foreground">Jergens Inc.</a></li>
              <li><a href="https://www.jergensinc.com/qualitycertifications" target="_blank" rel="noopener noreferrer" className="text-sm text-primary-foreground/80 hover:text-primary-foreground">Quality Certifications</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-primary-foreground/80">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>1351, Ground Floor, 25th Main, 24th Cross, Banashankari 2nd Stage, Bangalore – 560070</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-primary-foreground/80">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a href="mailto:bharathrrao@fitronmantech.in" className="hover:text-primary-foreground">
                  bharathrrao@fitronmantech.in
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-primary-foreground/80">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a href="tel:+919845519914" className="hover:text-primary-foreground">
                  +91-98455-19914
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
          <p>&copy; {currentYear} Fitron Mantech. All rights reserved. | Made in India 🇮🇳</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
