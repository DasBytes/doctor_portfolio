import { useState } from "react";
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
  Award,
  Users,
  Clock
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

const services = [
  {
    icon: Sparkles,
    title: "General Dentistry",
    description: "Comprehensive oral health care including regular checkups, professional cleanings, and preventive treatments to maintain your dental health.",
    features: ["Routine Dental Checkups", "Professional Teeth Cleaning", "Dental X-rays", "Cavity Fillings", "Gum Disease Prevention"],
    color: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-50 to-cyan-50"
  },
  {
    icon: Scissors,
    title: "Dental Surgery",
    description: "Expert surgical procedures performed with precision and care, ensuring minimal discomfort and optimal recovery.",
    features: ["Tooth Extractions", "Wisdom Teeth Removal", "Surgical Extractions", "Minor Oral Surgery", "Pre-Prosthetic Surgery"],
    color: "from-purple-500 to-pink-500",
    bgGradient: "from-purple-50 to-pink-50"
  },
  {
    icon: Star,
    title: "Cosmetic Dentistry",
    description: "Transform your smile with our aesthetic dental treatments designed to enhance the appearance of your teeth.",
    features: ["Teeth Whitening", "Dental Veneers", "Smile Makeover", "Tooth Reshaping", "Bonding"],
    color: "from-amber-500 to-orange-500",
    bgGradient: "from-amber-50 to-orange-50"
  },
  {
    icon: Zap,
    title: "Root Canal Treatment",
    description: "Advanced endodontic treatment to save infected or damaged teeth, performed with modern techniques for painless experience.",
    features: ["Root Canal Therapy", "Retreatment", "Pulp Capping", "Apicoectomy", "Pain Management"],
    color: "from-red-500 to-rose-500",
    bgGradient: "from-red-50 to-rose-50"
  },
  {
    icon: Shield,
    title: "Dental Implants",
    description: "Permanent tooth replacement solutions that look, feel, and function like natural teeth.",
    features: ["Single Tooth Implants", "Implant Consultation", "Implant Planning", "Post-Implant Care", "Bone Assessment"],
    color: "from-emerald-500 to-teal-500",
    bgGradient: "from-emerald-50 to-teal-50"
  },
  {
    icon: Heart,
    title: "Preventive Care",
    description: "Proactive dental care focused on preventing problems before they develop, keeping your smile healthy for life.",
    features: ["Fluoride Treatment", "Dental Sealants", "Oral Cancer Screening", "Dietary Counseling", "Custom Mouthguards"],
    color: "from-violet-500 to-purple-500",
    bgGradient: "from-violet-50 to-purple-50"
  },
];

const Services = () => {
  const [activeService, setActiveService] = useState(null);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-white animate-fade-up">
        <div className="relative max-w-7xl mx-auto px-4 md:px-8 text-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-blue-50 text-blue-700 rounded-full text-sm font-medium border border-blue-100 animate-fade-up">
              Our Services
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-800 leading-tight animate-fade-up delay-100">
              Comprehensive
              <span className="block bg-gradient-to-r from-amber-400 to-pink-400 bg-clip-text text-transparent">
                Dental Care
              </span>
            </h1>
            <p className="text-slate-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed animate-fade-up delay-200">
              From routine checkups to advanced treatments, we offer a complete range of dental 
              services to keep your smile healthy and beautiful.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative -mt-16 pb-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              onMouseEnter={() => setActiveService(index)}
              onMouseLeave={() => setActiveService(null)}
              className={`group relative bg-white rounded-3xl shadow-xl transition-all duration-500 overflow-hidden cursor-pointer animate-fade-up`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              <div className="relative p-8">
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                  <service.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-blue-700 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                      <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.color} opacity-5 rounded-bl-full`}></div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white animate-fade-up delay-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-blue-50 text-blue-700 rounded-full text-sm font-medium mb-4 animate-fade-up">
              <Award className="w-4 h-4" />
              Why Choose Us
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4 animate-fade-up delay-100">
              Quality Care You Can Trust
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto animate-fade-up delay-200">
              Experience dental care that combines expertise, technology, and compassion
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[ 
              { title: "Modern Equipment", desc: "Latest dental technology for precise treatments", icon: Sparkles, gradient: "from-blue-500 to-cyan-500" },
              { title: "Gentle Approach", desc: "Comfortable, anxiety-free dental experience", icon: Heart, gradient: "from-pink-500 to-rose-500" },
              { title: "Personalized Care", desc: "Treatment plans tailored to your needs", icon: Users, gradient: "from-purple-500 to-violet-500" },
              { title: "Affordable Pricing", desc: "Quality dental care at reasonable rates", icon: Shield, gradient: "from-emerald-500 to-teal-500" },
            ].map((item, idx) => (
              <div key={item.title} className="group relative bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 border border-slate-200 hover:border-transparent overflow-hidden animate-fade-up" style={{ animationDelay: `${idx * 100}ms` }}>
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                <div className="relative">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-700 transition-colors">{item.title}</h4>
                  <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-slate-200 rounded-full opacity-20 group-hover:scale-150 transition-transform duration-700"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="dental-gradient section-padding animate-fade-up">
        <div className="container-width text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-4 animate-fade-up">
            Need a Dental Consultation?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto animate-fade-up delay-100">
            Book an appointment today and let's discuss the best treatment plan for your smile.
          </p>
          <Button variant="heroOutline" size="xl" asChild className="animate-fade-up delay-200">
            <Link to="/contact">
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
      </section>
    </Layout>
  );
};

export default Services;
