import { useState } from "react";
import { Mail, Phone, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ScrollReveal } from "@/hooks/useScrollAnimation";
import heroImage from "@/assets/hero-building.jpg";

const Contact = () => {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero - matching rent page style */}
      <section className="relative pt-28 pb-12">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Property" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[hsl(var(--hero-overlay)/0.5)]" />
        </div>
        <div className="relative z-10 container mx-auto px-6">
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-3">
            Get in Touch With Us
          </h1>
          <p className="text-primary-foreground/80 text-base max-w-xl">
            We're here to help with any questions you may have about renting, buying or any of our property services.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-5xl mx-auto">
            {/* Form - takes 2 cols */}
            <ScrollReveal className="lg:col-span-2">
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand/30"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Contact Number"
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand/30"
                  />
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your@email.com"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand/30"
                />
                <textarea
                  name="message"
                  placeholder="Type your message..."
                  rows={6}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand/30 resize-none"
                />
                <button
                  type="submit"
                  className="w-full bg-brand text-brand-foreground text-sm font-medium py-3 rounded-lg hover:opacity-90 transition-opacity"
                >
                  Send
                </button>
              </form>
            </ScrollReveal>

            {/* Contact Info */}
            <ScrollReveal delay={0.15} className="space-y-8">
              {/* Head Office */}
              <div>
                <h3 className="font-heading text-base font-bold text-foreground mb-3">Head Office</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                  Silks Estates UK Ltd,
                  <br />
                  294 Bradford Road, Batley West
                  <br />
                  Yorkshire, WF17 5PW
                </p>
                <div className="flex items-center gap-2 text-sm text-foreground mb-1">
                  <Phone className="w-4 h-4 text-brand" />
                  +(44) 01924 477999
                </div>
                <p className="text-xs text-muted-foreground mb-2 ml-6">Landline rate rates apply</p>
                <div className="flex items-center gap-2 text-sm text-foreground">
                  <Mail className="w-4 h-4 text-brand" />
                  info@silksestate.co.uk
                </div>
              </div>

              {/* Leeds Office */}
              <div>
                <h3 className="font-heading text-base font-bold text-foreground mb-3">Leeds Office</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                  Silks Estates UK Ltd,
                  <br />
                  254 Dewsbury Road, Leeds
                  <br />
                  West Yorkshire, LS11 6JQ
                </p>
                <div className="flex items-center gap-2 text-sm text-foreground mb-1">
                  <Phone className="w-4 h-4 text-brand" />
                  +(44) 0113 270 2548
                </div>
                <div className="flex items-center gap-2 text-sm text-foreground">
                  <Mail className="w-4 h-4 text-brand" />
                  enquiries@silksestate.co.uk
                </div>
              </div>

              {/* Opening Times */}
              <div>
                <h3 className="font-heading text-base font-bold text-foreground mb-3 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-brand" />
                  Opening Times
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <span className="font-medium text-foreground">Monday - Friday:</span>
                  <br />
                  9.30am to 4.30pm
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                  <span className="font-medium text-foreground">Saturday:</span>
                  <br />
                  by appointment only
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
