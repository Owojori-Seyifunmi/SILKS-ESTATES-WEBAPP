import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  "Professional tenant sourcing & vetting",
  "Full property management options",
  "Rent collection & clear financial reporting",
  "Legal compliance & asset protection",
];

const LandlordsSection = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
              Built for Landlords
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground leading-tight mb-4">
              Everything You Need to Let
              <br />
              with Confidence
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-10 max-w-lg">
              Silks Estates is designed around landlords. Our services are structured to protect your asset, and remove the stress of property management.
            </p>

            <p className="text-sm font-semibold text-foreground mb-4">Top Features:</p>
            <ul className="space-y-3 mb-10">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-sm text-foreground">
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-foreground text-background">
                    <Check className="w-3 h-3" />
                  </span>
                  {feature}
                </li>
              ))}
            </ul>

            <Link
              to="/landlord"
              className="inline-block bg-brand text-brand-foreground text-sm font-medium px-8 py-3 rounded-lg hover:opacity-90 transition-opacity"
            >
              Explore Landlord Services
            </Link>
          </div>

          <div className="rounded-xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=700&q=80"
              alt="Landlord services"
              className="w-full h-full object-cover aspect-[4/3]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandlordsSection;
