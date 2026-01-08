import { Link } from "react-router-dom";
import { GraduationCap, Award, Heart, Target, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import doctorPortrait from "@/assets/doctor-portrait.jpg";

const education = [
  {
    year: "2019",
    degree: "Bachelor of Dental Surgery (BDS)",
    institution: "Rajshahi Medical College Dental Unit",
    description: "Graduated with comprehensive training in all aspects of dental care and oral surgery.",
  },
];

const skills = [
  "General Dentistry",
  "Dental Surgery",
  "Root Canal Treatment",
  "Cosmetic Dentistry",
  "Dental Implants",
  "Orthodontics Basics",
  "Periodontal Treatment",
  "Pediatric Dentistry",
];

const values = [
  {
    icon: Heart,
    title: "Patient-Centered Care",
    description: "Every treatment plan is tailored to your unique needs and comfort level.",
  },
  {
    icon: Target,
    title: "Precision & Excellence",
    description: "Committed to the highest standards of dental care using modern techniques.",
  },
  {
    icon: Award,
    title: "Continuous Learning",
    description: "Staying updated with the latest advancements in dental medicine.",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-secondary">
        <div className="container-width px-4 md:px-8">
          <div className="text-center animate-fade-up">
            <span className="inline-block px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-medium mb-4">
              About Me
            </span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              Dr. Rakhee Das
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              BDS | Dental Surgeon | 2019
            </p>
          </div>
        </div>
      </section>

      {/* Main About */}
      <section className="section-padding bg-background">
        <div className="container-width">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="animate-fade-up">
              <div className="sticky top-32">
                <img
                  src={doctorPortrait}
                  alt="Dr. Rakhee Das"
                  className="w-full max-w-md rounded-2xl shadow-dental-lg mx-auto lg:mx-0"
                />
              </div>
            </div>

            <div className="space-y-8 animate-fade-up delay-200">
              <div>
                <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
                  My Journey in Dentistry
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  I am Dr. Rakhee Das, a passionate dental professional dedicated to providing 
                  exceptional oral healthcare. My journey in dentistry began at the prestigious 
                  Rajshahi Medical College Dental Unit, where I graduated with a Bachelor of 
                  Dental Surgery (BDS) degree in 2019.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Since then, I have been committed to serving patients in Chittagong, helping 
                  them achieve and maintain healthy, beautiful smiles. My practice at Jamalkhan 
                  focuses on comprehensive dental care, from routine checkups to complex dental 
                  procedures.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  I believe that everyone deserves access to quality dental care, and I strive 
                  to create a comfortable, welcoming environment where patients feel at ease 
                  during their treatments.
                </p>
              </div>

              {/* Education */}
              <div>
                <h3 className="font-serif text-2xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <GraduationCap className="w-6 h-6 text-primary" />
                  Education
                </h3>
                {education.map((edu) => (
                  <div key={edu.year} className="dental-card p-6 rounded-xl">
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 rounded-xl bg-accent flex items-center justify-center shrink-0">
                        <span className="font-serif font-bold text-primary">{edu.year}</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{edu.degree}</h4>
                        <p className="text-primary text-sm mb-2">{edu.institution}</p>
                        <p className="text-muted-foreground text-sm">{edu.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Skills */}
              <div>
                <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
                  Skills & Expertise
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {skills.map((skill) => (
                    <div key={skill} className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                      <span className="text-muted-foreground text-sm">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-padding bg-secondary">
        <div className="container-width">
          <div className="text-center mb-12 animate-fade-up">
            <span className="inline-block px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-medium mb-4">
              My Philosophy
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Values That Guide My Practice
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I approach every patient with care, compassion, and a commitment to excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="dental-card p-8 rounded-xl text-center animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="dental-gradient section-padding">
        <div className="container-width text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-4 animate-fade-up">
            Let's Take Care of Your Smile
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto animate-fade-up delay-100">
            Schedule a consultation and experience personalized dental care.
          </p>
          <Button variant="heroOutline" size="xl" asChild className="animate-fade-up delay-200">
            <Link to="/contact">
              Book Appointment
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default About;
