import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Layout from "@/components/layout/Layout";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: MapPin,
    title: "Chamber Address",
    details: ["Jamalkhan", "Chittagong, Bangladesh"],
  },
  {
    icon: Phone,
    title: "Phone Number",
    details: ["+880 1XXX-XXXXXX"],
  },
  {
    icon: Mail,
    title: "Email Address",
    details: ["contact@drakheedas.com"],
  },
  {
    icon: Clock,
    title: "Chamber Hours",
    details: ["Sat - Thu: 5:00 PM - 9:00 PM", "Friday: Closed"],
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent!",
      description: "Thank you for your message. We'll get back to you soon.",
    });

    setFormData({ name: "", email: "", phone: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-secondary">
        <div className="container-width px-4 md:px-8">
          <div className="text-center animate-fade-up">
            <span className="inline-block px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-medium mb-4">
              Contact Us
            </span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              Get in Touch
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Have questions or ready to schedule an appointment? We're here to help. 
              Reach out to us through any of the methods below.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding bg-background">
        <div className="container-width">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-fade-up">
              <div className="dental-card p-8 rounded-xl">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-2">
                  Send a Message
                </h2>
                <p className="text-muted-foreground text-sm mb-6">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="h-12"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+880 1XXX-XXXXXX"
                        value={formData.phone}
                        onChange={handleChange}
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="How can we help you? Describe your dental concern or inquiry..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    variant="appointment" 
                    size="lg" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Info & Map */}
            <div className="space-y-8 animate-fade-up delay-200">
              {/* Contact Info Cards */}
              <div className="grid sm:grid-cols-2 gap-4">
                {contactInfo.map((info) => (
                  <div
                    key={info.title}
                    className="dental-card p-6 rounded-xl"
                  >
                    <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-4">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{info.title}</h3>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-muted-foreground text-sm">
                        {detail}
                      </p>
                    ))}
                  </div>
                ))}
              </div>

              {/* Map */}
              <div className="dental-card rounded-xl overflow-hidden h-80">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3689.832775!2d91.8219!3d22.3569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd89aaa8239cd%3A0x6e65fa00001f0!2sJamalkhan%2C%20Chittagong!5e0!3m2!1sen!2sbd!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Chamber Location"
                />
              </div>

              {/* Quick Info */}
              <div className="dental-card p-6 rounded-xl bg-accent">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      Walk-ins Welcome
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      While appointments are preferred, we do accept walk-in patients during 
                      chamber hours. For emergencies, please call ahead.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="dental-gradient section-padding">
        <div className="container-width text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-4 animate-fade-up">
            Prefer to Call?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto animate-fade-up delay-100">
            Speak directly with us to schedule your appointment or ask any questions.
          </p>
          <Button 
            variant="heroOutline" 
            size="xl" 
            className="animate-fade-up delay-200"
            asChild
          >
            <a href="tel:+8801XXXXXXXXX">
              <Phone className="w-5 h-5" />
              Call Now
            </a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
