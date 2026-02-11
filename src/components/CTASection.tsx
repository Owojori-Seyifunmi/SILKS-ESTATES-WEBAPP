import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-20 bg-foreground">
      <div className="container mx-auto px-6 text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-background leading-tight mb-4">
          Let Your Property the
          <br />
          Right Way
        </h2>
        <p className="text-background/70 text-sm max-w-md mx-auto mb-8">
          Whether you need full management or help finding the right tenant, Silks Estates is here to support you.
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
            className="border border-background/30 text-background text-sm font-medium px-8 py-3 rounded-lg hover:bg-background/10 transition-colors"
          >
            View available properties
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
