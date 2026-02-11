import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const portals = ["Zoopla", "OnTheMarket", "Rightmove"];

const PortalsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground leading-tight mb-4">
              Direct Uploads to Major
              <br />
              Property Portals
            </h2>
            <p className="text-sm font-semibold text-foreground mb-4">
              List Once. We Handle the Rest.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6 max-w-md">
              Tell us where you want your property listed and we'll take care of everything.
            </p>
            <p className="text-muted-foreground text-sm mb-3">
              Your property can be uploaded directly to:
            </p>
            <ul className="space-y-2 mb-6">
              {portals.map((portal) => (
                <li key={portal} className="flex items-center gap-2 text-sm text-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand" />
                  {portal}
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground text-sm leading-relaxed mb-8 max-w-md">
              We handle the marketing, enquiries, and tenant screening from start to finish.
            </p>
            <Link
              to="/landlord"
              className="inline-flex items-center gap-2 bg-brand text-brand-foreground text-sm font-medium px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
            >
              View Latest Updates
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="rounded-xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=700&q=80"
              alt="Property portals"
              className="w-full h-full object-cover aspect-[4/3]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortalsSection;
