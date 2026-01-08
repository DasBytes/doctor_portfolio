import { useState } from "react";
import { Phone, Mail, MapPin, Clock, ChevronRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Layout from "@/components/layout/Layout";
import { useToast } from "@/hooks/use-toast";

const chambers = [
  {
    name: "Cheragi Pahar Square",
    address: "Cheragi Pahar, Chittagong",
    hours: "4 PM - 8 PM (Thursday Closed)",
    phone: "01815343430",
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    chamber: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Appointment Request Sent!",
      description: "We'll contact you shortly to confirm your appointment.",
    });

    setFormData({ name: "", email: "", phone: "", chamber: "", message: "" });
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

  const handleWhatsAppClick = () => {
    const whatsappNumber = "8801815343430";
    const message = encodeURIComponent("Hello, I would like to book an appointment with Dr. Rakhee Das.");
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-secondary">
        <div className="container-width px-4 md:px-8">
          <div className="text-center animate-fade-up">
            <span className="inline-block px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-medium mb-4">
              Book Appointment
            </span>
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-3">
              Book Your Appointment
            </h1>
            <p className="text-muted-foreground text-base max-w-2xl mx-auto">
              Schedule a consultation with Dr. Rakhee Das for expert dental care and treatment
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-background">
        <div className="container-width">
          <div className="dental-card rounded-2xl border border-border overflow-hidden">
            <div className="grid lg:grid-cols-2">
              {/* Left Column - Chamber Locations */}
              <div className="p-8 border-r border-border bg-secondary/50">
                {/* Chamber Locations */}
                <div className="mb-8">
                  <h2 className="font-serif text-xl font-bold text-foreground mb-6">
                    Chamber Locations
                  </h2>
                  
                  {chambers.map((chamber, index) => (
                    <div
                      key={index}
                      className="bg-card rounded-xl p-5 mb-4 border-l-4 border-primary shadow-sm"
                    >
                      <h3 className="text-primary font-semibold mb-3">
                        {chamber.name}
                      </h3>
                      <div className="space-y-2">
                        <div className="flex items-start gap-3 text-foreground">
                          <MapPin className="w-4 h-4 mt-0.5 text-muted-foreground" />
                          <span className="text-sm">{chamber.address}</span>
                        </div>
                        <div className="flex items-start gap-3 text-foreground">
                          <Clock className="w-4 h-4 mt-0.5 text-muted-foreground" />
                          <span className="text-sm">
                            Visiting Hours:<br />
                            <strong>{chamber.hours}</strong>
                          </span>
                        </div>
                        <div className="flex items-center gap-3 text-foreground">
                          <Phone className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm">{chamber.phone}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Direct Contact Section */}
                <div className="bg-card rounded-xl p-5 shadow-sm">
                  <h3 className="text-primary font-semibold mb-4">
                    Direct Contact With Us
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-muted-foreground text-sm mb-1">Email us</p>
                      <a 
                        href="mailto:rakheedas.dental@gmail.com" 
                        className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
                      >
                        <Mail className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm">rakheedas.dental@gmail.com</span>
                      </a>
                    </div>
                    <div>
                      <p className="text-muted-foreground text-sm mb-1">WhatsApp</p>
                      <button 
                        onClick={handleWhatsAppClick}
                        className="flex items-center gap-2 text-foreground hover:text-green-600 transition-colors"
                      >
                        <MessageCircle className="w-4 h-4 text-green-600" />
                        <span className="text-sm">+880 1815343430</span>
                      </button>
                    </div>
                    <div>
                      <p className="text-muted-foreground text-sm mb-1">Call us</p>
                      <a 
                        href="tel:+8801815343430" 
                        className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
                      >
                        <Phone className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm">+880 1815343430</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Appointment Form */}
              <div className="p-8 bg-card">
                <h2 className="font-serif text-xl font-bold text-foreground mb-6">
                  Schedule Appointment
                </h2>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Full Name <span className="text-destructive">*</span>
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="h-12"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address <span className="text-destructive">*</span>
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="example@gmail.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="h-12"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Phone Number <span className="text-destructive">*</span>
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="Mobile Number"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="h-12"
                    />
                  </div>

                  <div>
                    <label htmlFor="chamber" className="block text-sm font-medium text-foreground mb-2">
                      Preferred Chamber <span className="text-destructive">*</span>
                    </label>
                    <Select
                      value={formData.chamber}
                      onValueChange={(value) => setFormData((prev) => ({ ...prev, chamber: value }))}
                      required
                    >
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Select Chamber" />
                      </SelectTrigger>
                      <SelectContent>
                        {chambers.map((chamber) => (
                          <SelectItem 
                            key={chamber.name} 
                            value={chamber.name}
                          >
                            {chamber.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message (Optional)
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Any specific concerns or preferred appointment time..."
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    variant="appointment" 
                    size="lg" 
                    className="w-full h-12"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Book Appointment
                        <ChevronRight className="w-5 h-5" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <button
        onClick={handleWhatsAppClick}
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </button>
    </Layout>
  );
};

export default Contact;
