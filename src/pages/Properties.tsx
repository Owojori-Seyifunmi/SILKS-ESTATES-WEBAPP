import { useState } from "react";
import { Bed, Bath, Search } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const allProperties = [
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
  {
    id: 4,
    price: "$1500",
    period: "/ month",
    address: "Dean Lane, BS3",
    beds: 2,
    baths: 2,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80",
  },
  {
    id: 5,
    price: "$8500",
    period: "/ month",
    address: "Atlantic, NW4",
    beds: 8,
    baths: 2,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
  },
  {
    id: 6,
    price: "$1230",
    period: "/ month",
    address: "Dean Rd, NW4",
    beds: 1,
    baths: 1,
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&q=80",
  },
  {
    id: 7,
    price: "$1500",
    period: "/ month",
    address: "Dean Lane, BS3",
    beds: 2,
    baths: 2,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80",
  },
  {
    id: 8,
    price: "$8500",
    period: "/ month",
    address: "Atlantic, NW4",
    beds: 8,
    baths: 2,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
  },
  {
    id: 9,
    price: "$1230",
    period: "/ month",
    address: "Dean Rd, NW4",
    beds: 1,
    baths: 1,
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&q=80",
  },
];

const portals = ["Rightmove", "Zoopla", "OpenRent", "On the Market", "PrimeLocation"];

const Properties = () => {
  const [sortBy, setSortBy] = useState("recent");

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero / Title */}
      <section className="pt-28 pb-12 bg-secondary">
        <div className="container mx-auto px-6">
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">
            Available Properties
          </h1>
          <p className="text-muted-foreground text-base max-w-xl">
            Browse our latest rental properties. Professionally marketed, fully managed, and ready for quality tenants.
          </p>
        </div>
      </section>

      {/* Search / Filters */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-end gap-4">
            <div className="flex-1 w-full">
              <label className="text-xs text-muted-foreground mb-1 block">Location</label>
              <select className="w-full text-sm font-medium text-foreground bg-secondary rounded-lg px-3 py-2.5 border-0 focus:ring-1 focus:ring-ring outline-none appearance-none cursor-pointer">
                <option>All Locations</option>
                <option>BS3</option>
                <option>NW4</option>
              </select>
            </div>
            <div className="flex-1 w-full">
              <label className="text-xs text-muted-foreground mb-1 block">Property Type</label>
              <select className="w-full text-sm font-medium text-foreground bg-secondary rounded-lg px-3 py-2.5 border-0 focus:ring-1 focus:ring-ring outline-none appearance-none cursor-pointer">
                <option>All Types</option>
                <option>House</option>
                <option>Apartment</option>
                <option>Flat</option>
              </select>
            </div>
            <button className="flex items-center gap-2 bg-brand text-brand-foreground px-6 py-2.5 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity whitespace-nowrap">
              <Search className="w-4 h-4" />
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Portals */}
      <section className="py-6 border-b border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap items-center gap-6">
            {portals.map((portal) => (
              <span
                key={portal}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              >
                {portal}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Results Header */}
      <section className="pt-8 pb-4">
        <div className="container mx-auto px-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            Showing <span className="font-semibold text-foreground">{allProperties.length}</span> Matches
          </p>
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="text-sm font-medium text-foreground bg-secondary rounded-lg px-3 py-1.5 border-0 focus:ring-1 focus:ring-ring outline-none appearance-none cursor-pointer"
            >
              <option value="recent">Most recent</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>
      </section>

      {/* Property Grid */}
      <section className="pb-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allProperties.map((property) => (
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
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">
            Need Help Finding the Right Rental?
          </h2>
          <p className="text-muted-foreground text-base max-w-md mx-auto mb-8">
            Get expert help finding a home that suits your budget and needs
          </p>
          <Link
            to="/contact"
            className="inline-block bg-brand text-brand-foreground text-sm font-medium px-8 py-3 rounded-lg hover:opacity-90 transition-opacity"
          >
            Get Started
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Properties;
