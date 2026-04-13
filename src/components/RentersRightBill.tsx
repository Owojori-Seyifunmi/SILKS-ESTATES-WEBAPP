import { ScrollReveal } from "@/hooks/useScrollAnimation";

const billPoints = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
      </svg>
    ),
    label: "No Section 21",
    description: "No-fault evictions are abolished. Landlords can no longer ask tenants to leave without a valid legal reason.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: "Section 8 — 15 Weeks",
    description: "Extended notice periods under Section 8 give both landlords and tenants more time to prepare during possession proceedings.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: "Awaab's Law",
    description: "Landlords must investigate and fix hazardous conditions including damp and mould within strict legally defined timeframes.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
    label: "Decent Homes Standard",
    description: "All private rented homes must now meet the Decent Homes Standard safe, in good repair, and free from serious hazards.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
      </svg>
    ),
    label: "New Ombudsman",
    description: "A new Private Rented Sector Ombudsman will handle disputes quickly and fairly  all landlords must register.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75" />
      </svg>
    ),
    label: "Limits on Rent Increases",
    description: "Rent can only be increased once per year and must reflect the local market rate preventing sudden unaffordable hikes.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
      </svg>
    ),
    label: "Rolling Tenancies",
    description: "Fixed-term tenancies are replaced with open-ended rolling agreements giving tenants more security and stability.",
  },
];

const RentersRightsBill = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-background">
      {/* Subtle background grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--brand)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--brand)) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Accent glow top-right */}
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-brand/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-60 h-60 rounded-full bg-brand/5 blur-2xl pointer-events-none" />

      <div className="relative z-10 container mx-auto px-6 max-w-6xl">
        {/* Header */}
        <ScrollReveal>
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 bg-brand/15 border border-brand/30 rounded-full px-4 py-1.5 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" />
              <span className="text-xs font-semibold text-brand uppercase tracking-widest">
                New Legislation
              </span>
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground leading-tight mb-3">
              Are You Ready for the{" "}
              <span className="text-brand">Renters' Rights Bill?</span>
            </h2>
            <p className="text-muted-foreground text-sm max-w-xl leading-relaxed">
              Everything you need to know about how the Renters' Rights Bill affects you as a landlord and how Silks Estates keeps you fully compliant.
            </p>
          </div>
        </ScrollReveal>

        {/* Icon Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {billPoints.map((point, i) => (
            <ScrollReveal key={point.label} delay={i * 0.07}>
              <div className="group relative bg-secondary border border-border rounded-2xl p-5 hover:bg-white hover:border-brand/40 hover:shadow-md transition-all duration-300 cursor-default">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-brand/15 border border-brand/20 flex items-center justify-center text-brand mb-4 group-hover:bg-brand/25 transition-colors duration-300">
                  {point.icon}
                </div>

                {/* Label */}
                <h3 className="font-heading text-sm font-bold text-foreground mb-1.5 leading-snug">
                  {point.label}
                </h3>

                {/* Description */}
                <p className="text-xs text-muted-foreground leading-relaxed group-hover:text-foreground/70 transition-colors duration-300">
                  {point.description}
                </p>

                {/* Subtle corner accent */}
                <div className="absolute top-3 right-3 w-1.5 h-1.5 rounded-full bg-brand/30 group-hover:bg-brand/70 transition-colors duration-300" />
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA strip */}
        <ScrollReveal delay={0.5}>
          <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-border pt-8">
            <p className="text-muted-foreground text-sm">
              Is your property compliant? Let us handle the complexity.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-brand text-brand-foreground text-sm font-semibold px-6 py-2.5 rounded-lg hover:opacity-90 transition-opacity whitespace-nowrap"
            >
              Get a Free Compliance Check
              <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default RentersRightsBill;
