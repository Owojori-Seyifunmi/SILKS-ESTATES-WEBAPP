import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ServicesGrid = () => {
  return (
    <section className="relative py-20 bg-secondary overflow-hidden">
      {/* Subtle background grid pattern — matches RentersRightsBill */}
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

      <div className="relative z-10 container mx-auto px-6">
        <div className="mb-12">
          <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
            Our Landlord Services
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground leading-tight">
            Choose the Level of Support
            <br />
            That Works for You
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Full Property Management - large card */}
          <div className="bg-brand text-brand-foreground rounded-2xl p-8 flex flex-col justify-between min-h-[280px]">
            <div>
              <h3 className="font-heading text-2xl font-bold mb-3">
                Full Property Management
              </h3>
              <p className="text-brand-foreground/70 text-sm leading-relaxed max-w-sm">
                Complete hands-off management of your property, from marketing to rent collection and maintenance.
              </p>
            </div>
            <Link
              to="/landlord"
              className="inline-flex items-center gap-2 mt-6 bg-background text-foreground text-sm font-medium px-6 py-2.5 rounded-lg w-fit hover:opacity-90 transition-opacity"
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Tenant Find Service */}
          <div className="bg-card border border-border rounded-2xl p-8 flex flex-col justify-between min-h-[280px]">
            <div>
              <h3 className="font-heading text-2xl font-bold text-foreground mb-3">
                Tenant Find Service
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
                Ideal for landlords who want help securing the right tenant without full management fees.
              </p>
            </div>
            <Link
              to="/landlord"
              className="inline-flex items-center gap-2 mt-6 text-sm font-medium text-foreground hover:opacity-70 transition-opacity"
            >
              Start
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Asset Protection — commented out as per client request */}
          {/* <div className="bg-card border border-border rounded-2xl p-8 flex flex-col justify-between min-h-[280px]">
            <div>
              <h3 className="font-heading text-2xl font-bold text-foreground mb-3">
                Asset Protection Protect
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
                Protect your investment and stay compliant with current UK letting regulations.
              </p>
            </div>
            <Link
              to="/landlord"
              className="inline-flex items-center gap-2 mt-6 text-sm font-medium text-foreground hover:opacity-70 transition-opacity"
            >
              Learn more
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div> */}

          {/* E-Letz Service */}
          <div className="bg-card border border-border rounded-2xl p-8 flex flex-col justify-between min-h-[280px]">
            <div>
              <h3 className="font-heading text-2xl font-bold text-foreground mb-3">
                E-Letz Service
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
                A streamlined, digital-first letting solution for modern landlords.
              </p>
            </div>
            <Link
              to="/landlord"
              className="inline-flex items-center gap-2 mt-6 text-sm font-medium text-foreground hover:opacity-70 transition-opacity"
            >
              Start
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
