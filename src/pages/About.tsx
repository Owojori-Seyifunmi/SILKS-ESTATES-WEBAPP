import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ScrollReveal } from "@/hooks/useScrollAnimation";
import heroImage from "@/assets/hero-building.jpg";

const objectives = [
  {
    number: "1",
    title: "Sourcing",
    description:
      "Investment in below market value properties with average rental yields of 8% to 15% or for trading purposes. Silks Estates always netting you a positive monthly cash flow after all expenses.",
  },
  {
    number: "2",
    title: "Negotiate",
    description:
      "Silks Estates on your behalf negotiates with vendors and all other agents including any conveyances and mortgage to get the best possible price and advice on properties.",
  },
  {
    number: "3",
    title: "Management",
    description:
      "Silks Estates specifically specialize in lettings and property management. Our specialities promise to take away all headaches and hassles involved in managing a property. Here at Silks Estates we include rent collections and organization for trading maintenance work to be carried out on the property in the management.",
  },
  {
    number: "4",
    title: "Protect",
    description:
      "We take pride in announcing that your assets are absolutely protected, with the addition of having an exit strategy, Silks Estates cover a number of areas including, assisting you to create trusts funds, wills and tax planning strategies, in order to minimize your legitimate paid taxes and help you create wealth by protecting your investment for generations.",
  },
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

const About = () => {
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
            Your local Independent
            <br />
            letting agent
          </h1>
          <p className="text-primary-foreground/80 text-base leading-relaxed mb-8 max-w-lg mx-auto">
            We'll help you find quality homes with verified landlords, and professional engagement for a stress free renting.
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

      {/* Welcome */}
      <section className="py-20 bg-background">
        <ScrollReveal className="container mx-auto px-6 max-w-3xl">
          <p className="text-xs font-semibold text-brand uppercase tracking-wider mb-3">
            Welcome to Silks Estates
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed mb-6">
            Silks Estates was established in 2003. Since then we have gone on a remarkable journey, thanks to our remarkable record for excellent service and delivering on our promises to landlords and tenants alike.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed mb-6">
            We began as a local agent based in Batley, West Yorkshire, where we established a reputation as one of the best estate agents in the area. Whether it was helping local landlords to find reliable tenants or matching renters with their ideal home, we quickly became known for delivering service of an impeccable quality.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed mb-6">
            As our reputation grew, so did our business. We're now a truly global enterprise, handling multiple international properties for some significant overseas landlords. However, despite the increased reach of our business, we've remained true to our roots and the business ethos of clear communication and impeccable customer service.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Our expansion overseas has given us an abundance of experience when it comes to letting properties, which is what we've now specialized in for several years. Click to learn more about our comprehensive{" "}
            <Link to="/landlord" className="text-brand font-medium hover:underline">
              Full Management Service
            </Link>
            .
          </p>
        </ScrollReveal>
      </section>

      {/* Four Objectives */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6 max-w-3xl">
          <ScrollReveal>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground leading-tight mb-3">
              As a landlord, we focus on our four main
              <br />
              objectives to form you a suitable strategy.
            </h2>
          </ScrollReveal>

          <div className="mt-10 space-y-10">
            {objectives.map((obj, i) => (
              <ScrollReveal key={obj.number} delay={i * 0.1}>
                <h3 className="font-heading text-lg font-bold text-foreground mb-2">
                  <span className="text-brand">{obj.number}.</span> {obj.title}:
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {obj.description}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-6 text-center">
          <h3 className="font-heading text-lg font-bold text-foreground mb-6">Quick Links</h3>
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

      <Footer />
    </div>
  );
};

export default About;
