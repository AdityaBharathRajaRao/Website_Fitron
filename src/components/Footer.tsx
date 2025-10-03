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
              High-Tech Indian Manufacturing — OEM Components Built for Global Standards
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-sm text-primary-foreground/80 hover:text-primary-foreground">About Us</Link></li>
              <li><Link to="/products" className="text-sm text-primary-foreground/80 hover:text-primary-foreground">Products</Link></li>
              <li><Link to="/capabilities" className="text-sm text-primary-foreground/80 hover:text-primary-foreground">Capabilities</Link></li>
              <li><Link to="/careers" className="text-sm text-primary-foreground/80 hover:text-primary-foreground">Careers</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><Link to="/resources" className="text-sm text-primary-foreground/80 hover:text-primary-foreground">Downloads</Link></li>
              <li><Link to="/contact" className="text-sm text-primary-foreground/80 hover:text-primary-foreground">Contact</Link></li>
              <li><Link to="#" className="text-sm text-primary-foreground/80 hover:text-primary-foreground">Privacy Policy</Link></li>
              <li><Link to="#" className="text-sm text-primary-foreground/80 hover:text-primary-foreground">Terms of Service</Link></li>
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
