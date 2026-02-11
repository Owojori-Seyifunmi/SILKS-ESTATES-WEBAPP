import { useParams, Link } from "react-router-dom";
import { Bed, Bath, Users, MapPin, Check, Calendar, ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const allProperties = [
  {
    id: 1,
    price: "$1500",
    period: "/ month",
    title: "2 Bed Detached House, Dean Lane BS3",
    address: "Dean Lane, BS3",
    city: "London",
    beds: 2,
    baths: 2,
    maxTenants: 6,
    shortTermOnly: true,
    minStay: "2 months",
    maxStay: "4 months",
    availableFrom: "3rd October",
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=80",
    ],
    description: `Discover refined city living in this beautifully finished 2-bedroom, 2-bathroom apartment, thoughtfully designed for comfort, privacy, and ease. Set within a modern development, the property features a spacious open-plan kitchen and living area, sleek contemporary bathrooms, and private patio access that enhances light and liveability.

Finished to a high standard throughout, the apartment offers a calm, stylish atmosphere with quality fittings, tasteful furnishings, and a layout that works effortlessly for professionals, couples, or short-term residents seeking a well-managed home.

Whether you're relocating, on a fixed-term work stay, or simply need flexibility without compromise, this home delivers comfort, convenience, and quiet confidence.`,
    locationHighlights: [
      "Excellent transport connections within walking distance",
      "Close to local cafés, restaurants, shops, and everyday amenities",
      "Well-connected while remaining peaceful and secure",
    ],
    propertyDetails: [
      "Two generously sized double bedrooms with built-in storage",
      "Two modern bathrooms, including one en-suite",
      "Private outdoor space providing natural light and fresh air",
      "Fully equipped open-plan kitchen, dining, and living area",
      "Bright, contemporary interiors with premium finishes",
      "Professionally managed, secure setting — ideal for short stays",
    ],
    landlord: {
      name: "John Clinton",
      responseRate: "100%",
      responseTime: "Within 2 days",
    },
  },
  {
    id: 2,
    price: "$8500",
    period: "/ month",
    title: "8 Bed Property, Atlantic NW4",
    address: "Atlantic, NW4",
    city: "London",
    beds: 8,
    baths: 2,
    maxTenants: 12,
    shortTermOnly: false,
    minStay: "6 months",
    maxStay: "12 months",
    availableFrom: "1st November",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=80",
    ],
    description: `A stunning 8-bedroom property located in the heart of Atlantic, NW4. This spacious home offers generous living areas, modern fittings, and excellent transport links. Perfect for large families or shared professional living.

The property has been recently refurbished to a high standard with contemporary finishes throughout, including a fully fitted kitchen, modern bathrooms, and ample storage space.`,
    locationHighlights: [
      "Minutes from local tube station",
      "Surrounded by parks and green spaces",
      "Close to major shopping centres and amenities",
    ],
    propertyDetails: [
      "Eight well-proportioned bedrooms",
      "Two fully tiled modern bathrooms",
      "Large open-plan kitchen and dining area",
      "Private garden with patio area",
      "Off-street parking available",
      "Recently refurbished throughout",
    ],
    landlord: {
      name: "Sarah Mitchell",
      responseRate: "95%",
      responseTime: "Within 1 day",
    },
  },
  {
    id: 3,
    price: "$1230",
    period: "/ month",
    title: "1 Bed Flat, Dean Rd NW4",
    address: "Dean Rd, NW4",
    city: "London",
    beds: 1,
    baths: 1,
    maxTenants: 2,
    shortTermOnly: false,
    minStay: "6 months",
    maxStay: "12 months",
    availableFrom: "15th October",
    images: [
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    ],
    description: `A charming 1-bedroom flat located on Dean Rd, NW4. Ideal for singles or couples looking for a cosy, well-maintained home in a quiet residential area. The flat features modern finishes and is within easy reach of local amenities and transport links.`,
    locationHighlights: [
      "Quiet residential street",
      "Walking distance to shops and cafés",
      "Good bus and rail connections nearby",
    ],
    propertyDetails: [
      "One double bedroom with fitted wardrobe",
      "Modern bathroom with shower over bath",
      "Open-plan kitchen and living room",
      "Double-glazed windows throughout",
      "Gas central heating",
      "Secure entry system",
    ],
    landlord: {
      name: "John Clinton",
      responseRate: "100%",
      responseTime: "Within 2 days",
    },
  },
];

// Duplicate for IDs 4-9
for (let i = 4; i <= 9; i++) {
  const base = allProperties[(i - 1) % 3];
  allProperties.push({ ...base, id: i });
}

import { useState } from "react";

const PropertyDetail = () => {
  const { id } = useParams();
  const property = allProperties.find((p) => p.id === Number(id));
  const [activeImage, setActiveImage] = useState(0);

  if (!property) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-28 pb-20 text-center container mx-auto px-6">
          <h1 className="font-heading text-3xl font-bold text-foreground mb-4">Property Not Found</h1>
          <p className="text-muted-foreground mb-8">The property you're looking for doesn't exist.</p>
          <Link to="/properties" className="inline-block bg-brand text-brand-foreground text-sm font-medium px-8 py-3 rounded-lg hover:opacity-90 transition-opacity">
            View All Properties
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Back link */}
      <section className="pt-24 pb-4">
        <div className="container mx-auto px-6">
          <Link to="/properties" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" />
            View more
          </Link>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="pb-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="aspect-[4/3] rounded-xl overflow-hidden">
              <img
                src={property.images[activeImage]}
                alt={property.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {property.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`aspect-[4/3] rounded-xl overflow-hidden border-2 transition-colors ${activeImage === i ? "border-brand" : "border-transparent"}`}
                >
                  <img src={img} alt={`View ${i + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Title & Quick Info */}
      <section className="pb-8">
        <div className="container mx-auto px-6">
          <h1 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
            {property.title}
          </h1>
          <div className="flex flex-wrap gap-6">
            <span className="flex items-center gap-2 text-sm text-muted-foreground">
              <Bed className="w-4 h-4" /> {property.beds} Bedrooms
            </span>
            <span className="flex items-center gap-2 text-sm text-muted-foreground">
              <Bath className="w-4 h-4" /> {property.baths} Bathrooms
            </span>
            <span className="flex items-center gap-2 text-sm text-muted-foreground">
              <Users className="w-4 h-4" /> {property.maxTenants} tenants max.
            </span>
            <span className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4" /> {property.city}
            </span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left: Description */}
            <div className="lg:col-span-2 space-y-10">
              {/* Subtitle */}
              <div>
                <h2 className="font-heading text-lg font-semibold text-foreground mb-1">
                  Contemporary {property.beds}-Bedroom, {property.baths}-Bathroom Apartment — Managed by Silks Estates
                </h2>
                {property.shortTermOnly && (
                  <p className="text-sm text-brand font-medium mt-2">Short-term let only</p>
                )}
                <div className="flex flex-wrap gap-x-8 gap-y-2 mt-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> Minimum stay: {property.minStay}</span>
                  <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> Maximum stay: {property.maxStay}</span>
                  <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> Available from: {property.availableFrom}</span>
                </div>
              </div>

              {/* Description */}
              <div className="text-muted-foreground text-sm leading-relaxed whitespace-pre-line">
                {property.description}
              </div>

              {/* Location Highlights */}
              <div>
                <h3 className="font-heading text-base font-semibold text-foreground mb-4">Location Highlights</h3>
                <ul className="space-y-2">
                  {property.locationHighlights.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-brand font-bold mt-0.5">+</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Property Details */}
              <div>
                <h3 className="font-heading text-base font-semibold text-foreground mb-4">Property Details</h3>
                <ul className="space-y-2">
                  {property.propertyDetails.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-brand font-bold mt-0.5">+</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: Sidebar */}
            <div className="space-y-6">
              {/* Pricing Card */}
              <div className="bg-card border border-border rounded-xl p-6">
                <p className="text-xs text-muted-foreground mb-1">Available</p>
                <p className="font-heading text-2xl font-bold text-foreground mb-4">
                  {property.price}<span className="text-sm font-normal text-muted-foreground">{property.period}</span>
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-brand" /> No hidden charges
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-brand" /> No admin fees
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-brand" /> Full transparency
                  </li>
                </ul>
                <h4 className="font-heading text-sm font-semibold text-foreground mb-3">Ready to Rent?</h4>
                <Link
                  to="/contact"
                  className="inline-block w-full text-center bg-brand text-brand-foreground text-sm font-medium py-3 rounded-lg hover:opacity-90 transition-opacity"
                >
                  Request Viewing
                </Link>
              </div>

              {/* Landlord Card */}
              <div className="bg-card border border-border rounded-xl p-6">
                <h4 className="font-heading text-sm font-semibold text-foreground mb-4">Meet the Landlord</h4>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-sm font-bold text-foreground">
                    {property.landlord.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <p className="text-sm font-medium text-foreground">{property.landlord.name}</p>
                </div>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>Response Rate: <span className="text-foreground font-medium">{property.landlord.responseRate}</span></p>
                  <p>Response Time: <span className="text-foreground font-medium">{property.landlord.responseTime}</span></p>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="bg-secondary border border-border rounded-xl p-6 text-center">
                <MapPin className="w-6 h-6 text-muted-foreground mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Location on Map</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PropertyDetail;
