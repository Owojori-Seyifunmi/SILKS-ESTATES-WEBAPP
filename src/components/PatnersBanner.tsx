import { ScrollReveal } from "@/hooks/useScrollAnimation";

const partners = [
  { name: "Citywide Housing" },
  { name: "Silks Investments" },
  { name: "Nujum Sports" },
  { name: "Ethical Wealth Academy" },
];

const PartnersBanner = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-background">
      <div className="relative z-10 container mx-auto px-6 max-w-5xl">
        {/* Label */}
        <ScrollReveal>
          <p
            className="text-center mb-10 tracking-[0.2em] uppercase text-xs font-medium"
            style={{ color: "hsl(var(--muted-foreground))", opacity: 0.7 }}
          >
            Trusted Partners, Shared Values
          </p>
        </ScrollReveal>

        {/* Partners — inline, spaced, muted */}
        <ScrollReveal>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
            {partners.map((partner, i) => (
              <span
                key={partner.name}
                className="font-heading text-xl md:text-2xl font-semibold transition-colors duration-300 cursor-default hover:opacity-100"
                style={{
                  color: "hsl(var(--muted-foreground))",
                  opacity: 0.45,
                  transitionProperty: "opacity",
                }}
                onMouseEnter={e => (e.currentTarget.style.opacity = "0.85")}
                onMouseLeave={e => (e.currentTarget.style.opacity = "0.45")}
              >
                {partner.name}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default PartnersBanner;
