import { Link } from "react-router-dom";
import { Home, Megaphone, Users, Check } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ScrollReveal } from "@/hooks/useScrollAnimation";
import heroImage from "@/assets/hero-building.jpg";

const services = [
  {
    icon: Home,
    title: "Full Property Management",
    description: "Full management services for letting and maintenance",
  },
  {
    icon: Megaphone,
    title: "Advertise Only",
    description: "List and promote your property across major portals",
  },
  {
    icon: Users,
    title: "Tenants Find Only",
    description: "Find tenants for our owners",
  },
  {
    icon: Check,
    title: "Free Property",
    description: "Portfolio Compliance Check",
  },
];

const provideItems = [
  "Rental appraisals for your property or properties",
  "Open and transparent fees with no hidden charges",
  "Expert and up-to-date legal information about the lettings market",
  "Easy to read agreements for tenants and landlords",
];

const feeItems = [
  "Sourcing a suitable tenant",
  "Taking up references and credit checks",
  "Drawing up a tenancy agreement",
  "Taking a Statement of Condition (or inventory)",
  "Collecting the rent and accounting to you monthly",
  "Conducting regular property inspections and advising you that all is in order",
  "Advising on any repairs that may be necessary",
  "Banking of deposits",
  "Ensuring all legal documentation is provided to all parties",
];

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "FAQS", href: "/faq" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Contact Us", href: "/contact" },
  { label: "Tenants", href: "/tenants" },
  { label: "Landlords", href: "/landlord" },
  { label: "Feedback", href: "/contact" },
];

const Landlord = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative pt-28 pb-20">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Property" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[hsl(var(--hero-overlay)/0.5)]" />
        </div>
        <div className="relative z-10 container mx-auto px-6 text-center max-w-2xl">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground leading-tight mb-5">
            Manage Your Property With
            <br />
            Confidence
          </h1>
          <p className="text-primary-foreground/80 text-base leading-relaxed mb-8 max-w-lg mx-auto">
            Professional management, trusted tenants, and complete peace of mind—every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="bg-brand text-brand-foreground text-sm font-medium px-8 py-3 rounded-lg hover:opacity-90 transition-opacity"
            >
              Get free valuation
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <ScrollReveal className="text-center mb-4">
            <p className="text-sm font-semibold text-brand uppercase tracking-wider mb-2">
              Landlord Services
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">
              Professional Letting & Management Support.
            </h2>
          </ScrollReveal>

          <p className="text-sm font-semibold text-foreground text-center mb-8">
            Our Services Include:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {services.map((service, i) => (
              <ScrollReveal key={service.title} delay={i * 0.1}>
                <div className="bg-secondary rounded-xl p-7 text-center h-full">
                  <div className="w-12 h-12 rounded-lg bg-brand flex items-center justify-center mx-auto mb-4">
                    <service.icon className="w-6 h-6 text-brand-foreground" />
                  </div>
                  <h3 className="font-heading text-base font-semibold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* What We Provide */}
      <section className="py-20 bg-secondary">
        <ScrollReveal className="container mx-auto px-6 max-w-3xl">
          <p className="text-muted-foreground text-sm leading-relaxed mb-8">
            Whether you are considering the possibility of becoming a Buy to Let Landlord or you already have a large portfolio.
          </p>

          <h3 className="font-heading text-xl font-bold text-foreground mb-6">
            We can provide:
          </h3>

          <ul className="space-y-3 mb-10">
            {provideItems.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-foreground">
                <span className="flex-shrink-0 mt-0.5 text-brand font-bold">+</span>
                {item}
              </li>
            ))}
          </ul>

          <p className="text-muted-foreground text-sm leading-relaxed">
            If you have a property to let, please find out how we can help you by visiting your local independent letting agent Silks Estates via telephone or email.
          </p>
        </ScrollReveal>
      </section>

      {/* Fees */}
      <section className="py-20 bg-background">
        <ScrollReveal className="container mx-auto px-6 max-w-3xl">
          <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
            Fees
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed mb-8">
            Our fees may fund:
          </p>

          <ul className="space-y-3 mb-10">
            {feeItems.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-foreground">
                <span className="flex-shrink-0 mt-0.5 text-brand font-bold">+</span>
                {item}
              </li>
            ))}
          </ul>
        </ScrollReveal>
      </section>

      {/* Quick Links */}
      <section className="py-12 bg-secondary">
        <div className="container mx-auto px-6 text-center">
          <h3 className="font-heading text-lg font-bold text-foreground mb-6">
            Quick Links
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {quickLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="text-sm font-medium text-brand hover:underline"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-foreground">
        <ScrollReveal className="container mx-auto px-6 text-center max-w-lg">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-background leading-tight mb-4">
            Let Your Property Be the Right Investment
          </h2>
          <p className="text-background/70 text-sm mb-8">
            Call or email us today to get started with the management of your property. We provide services you can rely on.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-brand text-brand-foreground text-sm font-medium px-8 py-3 rounded-lg hover:opacity-90 transition-opacity"
          >
            Get Started
          </Link>
        </ScrollReveal>
      </section>

      <Footer />
    </div>
  );
};

export default Landlord;
