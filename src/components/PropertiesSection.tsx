import { Bed, Bath } from "lucide-react";
import { Link } from "react-router-dom";

const properties = [
  {
    id: 1,
    price: "$1500",
    period: "/ month",
    address: "Dean Lane, BS3",
    beds: 2,
    baths: 2,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80",
  },
  {
    id: 2,
    price: "$8500",
    period: "/ month",
    address: "Atlantic, NW4",
    beds: 8,
    baths: 2,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
  },
  {
    id: 3,
    price: "$1230",
    period: "/ month",
    address: "Dean Rd, NW4",
    beds: 1,
    baths: 1,
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&q=80",
  },
];

const PropertiesSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Available Properties
          </h2>
          <p className="text-muted-foreground text-base max-w-xl">
            Browse our latest rental properties. Professionally marketed, fully managed, and ready for quality tenants.
          </p>
        </div>

        {/* Property Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property) => (
            <div
              key={property.id}
              className="bg-card rounded-xl overflow-hidden border border-border group"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={property.image}
                  alt={property.address}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <div className="mb-3">
                  <span className="font-heading text-xl font-bold text-foreground">
                    {property.price}
                  </span>
                  <span className="text-muted-foreground text-sm">
                    {property.period}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm mb-4">
                  {property.address}
                </p>
                <div className="flex items-center gap-4 mb-5">
                  <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                    <Bed className="w-4 h-4" />
                    {property.beds} Beds
                  </span>
                  <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                    <Bath className="w-4 h-4" />
                    {property.baths} Baths
                  </span>
                </div>
                <Link
                  to={`/properties/${property.id}`}
                  className="inline-block w-full text-center bg-brand text-brand-foreground text-sm font-medium py-2.5 rounded-lg hover:opacity-90 transition-opacity"
                >
                  Rent now
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="mt-12 text-center">
          <Link
            to="/properties"
            className="inline-block border border-brand text-brand text-sm font-medium px-8 py-3 rounded-lg hover:bg-brand hover:text-brand-foreground transition-colors"
          >
            View all available properties
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PropertiesSection;
