import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-dental-navy text-secondary">
      <div className="container-width section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-serif font-bold text-lg">R</span>
              </div>
              <div>
                <p className="font-serif font-semibold text-lg text-secondary">Dr. Rakhee Das</p>
                <p className="text-xs text-secondary/60">BDS, Dental Surgeon</p>
              </div>
            </div>
            <p className="text-secondary/70 text-sm leading-relaxed">
              Providing quality dental care with compassion and expertise. 
              Your smile is our priority.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center hover:bg-primary transition-colors duration-200">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "About", "Services", "Contact"].map((link) => (
                <li key={link}>
                  <Link
                    to={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                    className="text-secondary/70 hover:text-primary transition-colors duration-200 text-sm"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-6">Services</h4>
            <ul className="space-y-3">
              {["General Dentistry", "Dental Surgery", "Cosmetic Dentistry", "Root Canal", "Dental Implants"].map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-secondary/70 hover:text-primary transition-colors duration-200 text-sm"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-secondary/70 text-sm">
                  Jamalkhan, Chittagong, Bangladesh
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span className="text-secondary/70 text-sm">+880 1815343430</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span className="text-secondary/70 text-sm">contact@drakheedas.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div className="text-secondary/70 text-sm">
                  <p>Sun-thu: 4:00 PM - 8:00 PM</p>
                  <p>Friday: Closed</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-secondary/50 text-sm">
            © {new Date().getFullYear()} Dr. Rakhee Das. All rights reserved.
          </p>
          <p className="text-secondary/50 text-sm">
            Designed with care for your smile
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
