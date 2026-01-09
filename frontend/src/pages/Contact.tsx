import { useState } from "react";
import { Phone, Mail, MapPin, Clock, ChevronRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
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
    hours: "4 PM - 8 PM",
    days: "Sunday, Tuesday, Wednesday",
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
    const message = encodeURIComponent(
      "Hello, I would like to book an appointment with Dr. Rakhee Das."
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-secondary">
        <div className="container-width px-4 md:px-8 text-center">
          <span className="inline-block px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-medium mb-4">
            Book Appointment
          </span>
          <h1 className="font-serif text-3xl md:text-4xl font-bold mb-3">
            Book Your Appointment
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Schedule a consultation with Dr. Rakhee Das for expert dental care
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-background">
        <div className="container-width">
          <div className="grid lg:grid-cols-2 rounded-2xl border overflow-hidden">

            {/* Left */}
            <div className="p-8 bg-secondary/50 border-r">
              <h2 className="font-serif text-xl font-bold mb-6">
                Chamber Locations
              </h2>

              {chambers.map((chamber, index) => (
                <div
                  key={index}
                  className="bg-card rounded-xl p-5 mb-4 border-l-4 border-primary"
                >
                  <h3 className="text-primary font-semibold mb-3">
                    {chamber.name}
                  </h3>

                  <div className="space-y-2 text-sm">
                    <div className="flex gap-2">
                      <MapPin className="w-4 h-4" />
                      {chamber.address}
                    </div>
                    <div className="flex gap-2">
                      <Clock className="w-4 h-4" />
                      {chamber.hours} ({chamber.days})
                    </div>
                    <div className="flex gap-2">
                      <Phone className="w-4 h-4" />
                      {chamber.phone}
                    </div>
                  </div>
                </div>
              ))}

              {/* WhatsApp Button */}
              <Button
                onClick={handleWhatsAppClick}
                variant="outline"
                className="w-full h-12 border-2 border-green-500 text-green-600 gap-2 mb-8"
              >
                <FaWhatsapp className="w-5 h-5" />
                01815343430
              </Button>

              {/* Map */}
              <div className="h-48 rounded-xl overflow-hidden border">
                <iframe
                  src="https://www.google.com/maps?q=Cheragi+Pahar+Moore,+Chattogram,+Bangladesh&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  title="Cheragi Pahar Moore"
                />
              </div>

              {/* Direct Contact */}
              <div className="mt-6 bg-card p-5 rounded-xl">
                <a
                  href="mailto:rakheedas.dental@gmail.com"
                  className="flex gap-2 mb-2"
                >
                  <Mail className="w-4 h-4" />
                  rakheedas.dental@gmail.com
                </a>
                <a href="tel:+8801815343430" className="flex gap-2">
                  <Phone className="w-4 h-4" />
                  +880 1815343430
                </a>
              </div>
            </div>

            {/* Right */}
            <div className="p-8 bg-card">
              <h2 className="font-serif text-xl font-bold mb-6">
                Schedule Appointment
              </h2>

              <form onSubmit={handleSubmit} className="space-y-5">
                <Input name="name" placeholder="Full Name" required onChange={handleChange} />
                <Input name="email" type="email" placeholder="Email" required onChange={handleChange} />
                <Input name="phone" placeholder="Phone Number" required onChange={handleChange} />

                <Select
                  value={formData.chamber}
                  onValueChange={(value) =>
                    setFormData((p) => ({ ...p, chamber: value }))
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select Chamber" />
                  </SelectTrigger>
                  <SelectContent>
                    {chambers.map((c) => (
                      <SelectItem key={c.name} value={c.name}>
                        {c.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Textarea
                  name="message"
                  placeholder="Message (optional)"
                  rows={4}
                  onChange={handleChange}
                />

                <Button
                  type="submit"
                  className="w-full h-12"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Book Appointment"}
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp */}
      <button
        onClick={handleWhatsAppClick}
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp className="w-6 h-6" />
      </button>
    </Layout>
  );
};

export default Contact;
