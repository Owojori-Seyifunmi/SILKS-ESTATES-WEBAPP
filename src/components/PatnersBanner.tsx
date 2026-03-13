import { ScrollReveal } from "@/hooks/useScrollAnimation";

const partners = [
  { name: "Citywide Housing", url: "https://citywidehousing.co.uk/" },
  { name: "Silks Investments", url: "https://silksinvestments.co.uk/" },
  { name: "Nujum Sports", url: "https://nujumsports.co.uk/" },
  { name: "Ethical Wealth Academy", url: "https://ethicalwealth.academy/" },
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
            Trusted Partners
          </p>
        </ScrollReveal>

        {/* Partners — inline, spaced, muted */}
        <ScrollReveal>
          <div className="flex flex-wrap md:flex-nowrap justify-center items-center gap-x-12 gap-y-6">
            {partners.map((partner) => (
              <a
                key={partner.name}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-heading text-xl md:text-2xl font-semibold no-underline"
                style={{
                  color: "hsl(var(--muted-foreground))",
                  opacity: 0.45,
                  transition: "opacity 0.3s",
                }}
                onMouseEnter={e => (e.currentTarget.style.opacity = "0.85")}
                onMouseLeave={e => (e.currentTarget.style.opacity = "0.45")}
              >
                {partner.name}
              </a>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default PartnersBanner;
