import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";

const updates = [
  "Changes in UK letting laws",
  "Compliance requirements",
  "Best practices for protecting your property",
];

const LettingLawsSection = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 rounded-xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=700&q=80"
              alt="Letting laws updates"
              className="w-full h-full object-cover aspect-[4/3]"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground leading-tight mb-4">
              Letting Laws & Landlord
              <br />
              Updates
            </h2>
            <p className="text-sm font-semibold text-foreground mb-4">
              Stay Informed. Stay Compliant.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6 max-w-md">
              Our latest updates keep landlords informed about:
            </p>
            <ul className="space-y-3 mb-8">
              {updates.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-foreground">
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-brand text-brand-foreground">
                    <Check className="w-3 h-3" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <Link
              to="/landlord"
              className="inline-flex items-center gap-2 bg-brand text-brand-foreground text-sm font-medium px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
            >
              View Latest Updates
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LettingLawsSection;
