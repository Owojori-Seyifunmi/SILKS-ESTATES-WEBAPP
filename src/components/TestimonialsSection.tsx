import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Landlord, London",
    text: "Silks Estates made the entire letting process seamless. From tenant sourcing to rent collection, everything was handled professionally.",
    rating: 5,
  },
  {
    name: "James Thompson",
    role: "Property Owner, Bristol",
    text: "I've been with Silks for two years now. Their communication is excellent and I always feel in the loop about my property.",
    rating: 5,
  },
  {
    name: "Priya Patel",
    role: "Landlord, Manchester",
    text: "The tenant find service saved me weeks of effort. They found a great tenant within days and handled all the vetting.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Landlords Say
          </h2>
          <p className="text-muted-foreground text-base max-w-md mx-auto">
            Trusted by landlords across the UK to manage and let their properties.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-secondary rounded-xl p-7">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-brand text-brand" />
                ))}
              </div>
              <p className="text-sm text-foreground leading-relaxed mb-6">
                "{t.text}"
              </p>
              <div>
                <p className="text-sm font-semibold text-brand">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
