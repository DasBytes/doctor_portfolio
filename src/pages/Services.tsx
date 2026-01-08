import { Link } from "react-router-dom";
import { 
  Sparkles, 
  Scissors, 
  Heart, 
  Shield, 
  Zap, 
  Star,
  CheckCircle,
  ArrowRight,
  Phone
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

const services = [
  {
    icon: Sparkles,
    title: "General Dentistry",
    description: "Comprehensive oral health care including regular checkups, professional cleanings, and preventive treatments to maintain your dental health.",
    features: ["Routine Dental Checkups", "Professional Teeth Cleaning", "Dental X-rays", "Cavity Fillings", "Gum Disease Prevention"],
  },
  {
    icon: Scissors,
    title: "Dental Surgery",
    description: "Expert surgical procedures performed with precision and care, ensuring minimal discomfort and optimal recovery.",
    features: ["Tooth Extractions", "Wisdom Teeth Removal", "Surgical Extractions", "Minor Oral Surgery", "Pre-Prosthetic Surgery"],
  },
  {
    icon: Star,
    title: "Cosmetic Dentistry",
    description: "Transform your smile with our aesthetic dental treatments designed to enhance the appearance of your teeth.",
    features: ["Teeth Whitening", "Dental Veneers", "Smile Makeover", "Tooth Reshaping", "Bonding"],
  },
  {
    icon: Zap,
    title: "Root Canal Treatment",
    description: "Advanced endodontic treatment to save infected or damaged teeth, performed with modern techniques for painless experience.",
    features: ["Root Canal Therapy", "Retreatment", "Pulp Capping", "Apicoectomy", "Pain Management"],
  },
  {
    icon: Shield,
    title: "Dental Implants",
    description: "Permanent tooth replacement solutions that look, feel, and function like natural teeth.",
    features: ["Single Tooth Implants", "Implant Consultation", "Implant Planning", "Post-Implant Care", "Bone Assessment"],
  },
  {
    icon: Heart,
    title: "Preventive Care",
    description: "Proactive dental care focused on preventing problems before they develop, keeping your smile healthy for life.",
    features: ["Fluoride Treatment", "Dental Sealants", "Oral Cancer Screening", "Dietary Counseling", "Custom Mouthguards"],
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-secondary">
        <div className="container-width px-4 md:px-8">
          <div className="text-center animate-fade-up">
            <span className="inline-block px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-medium mb-4">
              Our Services
            </span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              Comprehensive Dental Care
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              From routine checkups to advanced treatments, we offer a complete range of dental 
              services to keep your smile healthy and beautiful.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-background">
        <div className="container-width">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="dental-card p-8 rounded-xl animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 rounded-xl bg-accent flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-secondary">
        <div className="container-width">
          <div className="text-center mb-12 animate-fade-up">
            <span className="inline-block px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-medium mb-4">
              Why Choose Us
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Quality Care You Can Trust
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-up delay-200">
            {[
              { title: "Modern Equipment", desc: "Latest dental technology for precise treatments" },
              { title: "Gentle Approach", desc: "Comfortable, anxiety-free dental experience" },
              { title: "Personalized Care", desc: "Treatment plans tailored to your needs" },
              { title: "Affordable Pricing", desc: "Quality dental care at reasonable rates" },
            ].map((item, index) => (
              <div key={item.title} className="text-center p-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="font-serif font-bold text-primary">{index + 1}</span>
                </div>
                <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="dental-gradient section-padding">
        <div className="container-width text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-4 animate-fade-up">
            Need a Dental Consultation?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto animate-fade-up delay-100">
            Book an appointment today and let's discuss the best treatment plan for your smile.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up delay-200">
            <Button variant="heroOutline" size="xl" asChild>
              <Link to="/contact">
                <Phone className="w-5 h-5" />
                Book Appointment
              </Link>
            </Button>
            <Button 
              variant="ghost" 
              size="xl" 
              className="text-primary-foreground hover:bg-primary-foreground/10"
              asChild
            >
              <Link to="/about">
                About Dr. Rakhee
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
