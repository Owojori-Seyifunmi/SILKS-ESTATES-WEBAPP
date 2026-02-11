import { Link } from "react-router-dom";
import { Search, Calendar, ShieldCheck, Home } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ScrollReveal } from "@/hooks/useScrollAnimation";
import heroImage from "@/assets/hero-building.jpg";

const steps = [
  {
    icon: Search,
    title: "Search & Shortlist",
    description: "Help finding the right home easily within your budget and timeline.",
  },
  {
    icon: Calendar,
    title: "Book a Viewing",
    description: "Search is easy. It could be online or assisted.",
  },
  {
    icon: ShieldCheck,
    title: "Apply Securely",
    description: "Search is easy. It could be online or assisted.",
  },
  {
    icon: Home,
    title: "Move-in Confidently",
    description: "Support before, during, and after moving in.",
  },
];

const faqs = [
  {
    question: "Do you charge tenants any fee?",
    answer: "No, we do not charge tenants any fees for our services. All costs are covered by the landlord as part of our management agreement.",
  },
  {
    question: "Are properties fully managed?",
    answer: "Yes, most of our properties are fully managed. This means we handle everything from maintenance requests to rent collection on behalf of the landlord.",
  },
  {
    question: "How long does approval take?",
    answer: "The approval process typically takes 2-5 working days, depending on reference checks and credit assessments.",
  },
  {
    question: "Who handles repairs?",
    answer: "Our dedicated maintenance team handles all repair requests. Tenants can report issues directly to us and we coordinate with trusted contractors to resolve them promptly.",
  },
];

const Tenants = () => {
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
            Find a Home that
            <br />
            fits your Life
          </h1>
          <p className="text-primary-foreground/80 text-base leading-relaxed mb-8 max-w-lg mx-auto">
            Quality homes, verified landlords, and professional engagement making renting simple, secure and stress-free.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="bg-brand text-brand-foreground text-sm font-medium px-8 py-3 rounded-lg hover:opacity-90 transition-opacity"
            >
              Get free valuation
            </Link>
            <Link
              to="/properties"
              className="border border-primary-foreground/40 text-primary-foreground text-sm font-medium px-8 py-3 rounded-lg hover:bg-primary-foreground/10 transition-colors"
            >
              View Available Properties
            </Link>
          </div>
        </div>
      </section>

      {/* Search Bar */}
      <section className="py-10 bg-background">
        <div className="container mx-auto px-6">
          <div className="bg-secondary rounded-xl p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
              <div>
                <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Available properties</label>
                <select className="w-full bg-background border border-border rounded-lg px-3 py-2.5 text-sm text-foreground">
                  <option>All Properties</option>
                </select>
              </div>
              <div>
                <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Location</label>
                <select className="w-full bg-background border border-border rounded-lg px-3 py-2.5 text-sm text-foreground">
                  <option>All Locations</option>
                </select>
              </div>
              <div>
                <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Property type</label>
                <select className="w-full bg-background border border-border rounded-lg px-3 py-2.5 text-sm text-foreground">
                  <option>All Types</option>
                </select>
              </div>
              <button className="bg-brand text-brand-foreground text-sm font-medium px-6 py-2.5 rounded-lg hover:opacity-90 transition-opacity">
                Search
              </button>
            </div>
            <p className="text-xs text-muted-foreground mt-3">Search for properties based on available properties</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <ScrollReveal className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">
              How Renting with Silks
              <br />
              Estates Works
            </h2>
            <p className="text-muted-foreground text-sm">Simple, Secure and Stress free.</p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {steps.map((step, i) => (
              <ScrollReveal key={step.title} delay={i * 0.1} className="text-center">
                <div className="w-14 h-14 rounded-xl bg-brand flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-7 h-7 text-brand-foreground" />
                </div>
                <h3 className="font-heading text-sm font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="text-center mt-10">
            <Link
              to="/properties"
              className="inline-block bg-brand text-brand-foreground text-sm font-medium px-8 py-3 rounded-lg hover:opacity-90 transition-opacity"
            >
              Find a Home
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Mission / Why Choose Us */}
      <section className="py-20 bg-secondary">
        <ScrollReveal className="container mx-auto px-6 max-w-3xl">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-2">Tenants</h2>
          <p className="text-sm font-semibold text-brand mb-4">Our Mission:</p>
          <p className="text-sm text-muted-foreground leading-relaxed mb-6">
            Silks Estate aims to find you a property in which you can feel at home. We guarantee you to make the tenancy process from viewing a property to moving in as simple as possible.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed mb-8">
            For many people out there it will be a first time procedure to go through the tenancy process, Silks Estate would like to take the opportunity to assure you that we care.
          </p>

          <h3 className="font-heading text-xl font-bold text-foreground mb-4">Why choose Silks</h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-6">
            Silks Estate specifically specializes in lettings and property management. Our target is to research and gain knowledge about local areas so we can offer you the best advice in regards to properties and its facilities suiting your requirements, for example properties which are closer to schools, businesses, health and care, corner shops and much more.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed mb-6">
            Individuals at Silks Estate have been trained professionally by the property specialists, so tenants could be assisted with the assurance that their requirements will be considered and will receive a happy and problem-free tenancy.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed mb-6">
            We take pride to announce that our office will continue to liaise and look after tenants throughout the rental period.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Our office maintains a database of available rental properties, and prospective tenants. As soon as properties become available our first action is to contact prospective tenants on the database whose requirements match the property. If you are a tenant looking for a rental property then please call Silks Estates.
          </p>
        </ScrollReveal>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 max-w-3xl">
          <ScrollReveal className="text-center mb-10">
            <h2 className="font-heading text-3xl font-bold text-foreground mb-3">Tenant FAQs</h2>
            <p className="text-muted-foreground text-sm">Simple, Secure and Stress free.</p>
          </ScrollReveal>

          <ScrollReveal>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`}>
                  <AccordionTrigger className="text-sm font-medium text-foreground">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </ScrollReveal>

          <ScrollReveal className="text-center mt-10">
            <Link
              to="/properties"
              className="inline-block bg-brand text-brand-foreground text-sm font-medium px-8 py-3 rounded-lg hover:opacity-90 transition-opacity"
            >
              Find a Home
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Tenants;
