import { Link } from "react-router-dom";
import { ArrowRight, Phone, Award, Users, Clock, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import doctorPortrait from "@/assets/doctor-portrait.jpg";
import dentalClinic from "@/assets/dental-clinic.jpg";

const services = [
  {
    icon: Sparkles,
    title: "General Dentistry",
    description: "Comprehensive dental checkups, cleanings, and preventive care for optimal oral health.",
  },
  {
    icon: Award,
    title: "Cosmetic Dentistry",
    description: "Transform your smile with teeth whitening, veneers, and aesthetic treatments.",
  },
  {
    icon: Users,
    title: "Dental Surgery",
    description: "Expert surgical procedures including extractions and oral surgical treatments.",
  },
  {
    icon: Clock,
    title: "Root Canal",
    description: "Painless root canal treatments to save and restore damaged teeth.",
  },
];

const stats = [
  { number: "6+", label: "Years Experience" },
  { number: "2000+", label: "Happy Patients" },
  { number: "15+", label: "Procedures" },
  { number: "100%", label: "Dedication" },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src={dentalClinic}
            alt="Modern dental clinic"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dental-navy/90 via-dental-navy/70 to-transparent" />
        </div>

        <div className="container-width px-4 md:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-secondary leading-tight mb-6">
                Dr. Rakhee Das
              </h1>
              <p className="text-xl md:text-2xl text-secondary/80 font-light mb-4">
                Dentist | BDS
              </p>
              <p className="text-secondary/70 text-lg mb-8 max-w-xl">
                2019 | Providing Quality Dental Care in Chittagong with Compassion and Expertise
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="xl" asChild>
                  <Link to="/contact">
                    <Phone className="w-5 h-5" />
                    Book Appointment
                  </Link>
                </Button>
                <Button variant="heroOutline" size="xl" asChild>
                  <Link to="/services">
                    Our Services
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="hidden lg:flex justify-end animate-fade-up delay-200">
              <div className="relative">
                <div className="w-80 h-96 rounded-2xl overflow-hidden shadow-dental-lg dental-glow">
                  <img
                    src={doctorPortrait}
                    alt="Dr. Rakhee Das"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-xl shadow-dental">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                      <Award className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">BDS</p>
                      <p className="text-sm text-muted-foreground">Rajshahi Medical College</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary py-12">
        <div className="container-width px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <p className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground mb-2">
                  {stat.number}
                </p>
                <p className="text-primary-foreground/80 text-sm md:text-base">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding bg-background">
        <div className="container-width">
          <div className="text-center mb-12 animate-fade-up">
            <span className="inline-block px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-medium mb-4">
              Our Services
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Comprehensive Dental Care
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From routine checkups to advanced dental procedures, we provide a full range of services 
              to keep your smile healthy and beautiful.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="dental-card p-6 rounded-xl animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-4">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10 animate-fade-up delay-400">
            <Button variant="outline" size="lg" asChild>
              <Link to="/services">
                View All Services
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section-padding bg-secondary">
        <div className="container-width">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <div className="relative">
                <img
                  src={doctorPortrait}
                  alt="Dr. Rakhee Das"
                  className="w-full max-w-md rounded-2xl shadow-dental-lg mx-auto lg:mx-0"
                />
                <div className="absolute -bottom-4 -right-4 md:bottom-auto md:-right-6 md:top-1/2 md:-translate-y-1/2 bg-primary text-primary-foreground p-4 md:p-6 rounded-xl shadow-lg">
                  <p className="font-serif text-2xl md:text-3xl font-bold">2019</p>
                  <p className="text-sm md:text-base opacity-90">Graduate</p>
                </div>
              </div>
            </div>

            <div className="animate-fade-up delay-200">
              <span className="inline-block px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-medium mb-4">
                About Me
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                Dedicated to Your Oral Health
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                I am Dr. Rakhee Das, a dedicated dental professional graduated from the prestigious 
                Rajshahi Medical College Dental Unit in 2019. With a passion for dentistry and 
                patient care, I have been serving the community of Chittagong with comprehensive 
                dental services.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                My approach combines modern dental techniques with a gentle, patient-centered care 
                philosophy. I believe every patient deserves a healthy, confident smile.
              </p>
              <Button variant="default" size="lg" asChild>
                <Link to="/about">
                  Learn More About Me
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="dental-gradient section-padding">
        <div className="container-width text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-4 animate-fade-up">
            Ready for a Healthier Smile?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto animate-fade-up delay-100">
            Book your appointment today and experience quality dental care in a comfortable, 
            friendly environment.
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
              <Link to="/contact">
                Visit Our Chamber
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
