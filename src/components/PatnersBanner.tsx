import { ScrollReveal } from "@/hooks/useScrollAnimation";

// ── Replace placeholder initials with real logos when client sends assets ────
// To use real logos: import logo from "@/assets/partners/citywide.png"
// Then replace the initials <div> with: <img src={logo} alt="Citywide Housing" className="h-10 w-auto object-contain" />
const partners = [
  {
    name: "Citywide Housing",
    initials: "CH",
    description: "Providing quality housing solutions across the region with a commitment to community and affordability.",
    color: "#1a6b4a",
    photo: null, // ← replace with imported logo
  },
  {
    name: "Silks Investments",
    initials: "SI",
    description: "Strategic property investment specialists helping clients build and grow high-yield portfolios.",
    color: "#b8860b",
    photo: null,
  },
  {
    name: "Nujum Sports",
    initials: "NS",
    description: "A forward-thinking sports organisation driving excellence, community engagement and athlete development.",
    color: "#1a3a6b",
    photo: null,
  },
  {
    name: "Ethical Wealth Academy",
    initials: "EWA",
    description: "Empowering individuals with the knowledge and tools to build lasting, ethical financial wealth.",
    color: "#4a1a6b",
    photo: null,
  },
];
// ─────────────────────────────────────────────────────────────────────────────

const PartnersBanner = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-background">
      {/* Subtle background grid pattern — identical to RentersRightsBill */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--brand)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--brand)) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Accent glows */}
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-brand/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-60 h-60 rounded-full bg-brand/5 blur-2xl pointer-events-none" />

      <div className="relative z-10 container mx-auto px-6 max-w-6xl">
        {/* Header */}
        <ScrollReveal>
          <div className="mb-12">
            
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground leading-tight mb-3">
              Trusted Partners,{" "}
              <span className="text-brand">Shared Values</span>
            </h2>
          </div>
        </ScrollReveal>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {partners.map((partner, i) => (
            <ScrollReveal key={partner.name} delay={i * 0.07}>
              <div className="group relative bg-secondary border border-border rounded-2xl p-5 hover:bg-white hover:border-brand/40 hover:shadow-md transition-all duration-300 cursor-default h-full">

                {/* Logo / Initials */}
                

                {/* Name */}
                <h3 className="font-heading text-sm font-bold text-foreground mb-1.5 leading-snug">
                  {partner.name}
                </h3>

               </div>
            </ScrollReveal>
          ))}
        </div>

    
      </div>
    </section>
  );
};

export default PartnersBanner;