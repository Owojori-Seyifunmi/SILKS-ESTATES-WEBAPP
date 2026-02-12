import { Search } from "lucide-react";
import heroImage from "@/assets/hero-building.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[100vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Modern building"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[hsl(var(--hero-overlay)/0.3)]" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-6 pt-24">
        <div className="max-w-lg">
           <h1 className="font-heading text-5xl md:text-6xl font-semibold leading-tight text-primary-foreground mb-6">
            Find Your Ideal Home in Batley & West Yorkshire
          </h1>
          <p className="text-primary-foreground/80 text-base md:text-lg max-w-sm leading-relaxed">
            Quality properties for sale and rent across Batley and West Yorkshire
          </p>
        </div>

        {/* Search Bar */}
        <div className="mt-16 max-w-3xl">
          <div className="bg-background rounded-xl shadow-xl p-6">
            {/* Tabs */}
            <div className="flex gap-6 mb-6">
              <button className="text-sm font-semibold text-foreground border-b-2 border-foreground pb-1">
                Buy
              </button>
              <button className="text-sm font-medium text-muted-foreground pb-1 hover:text-foreground transition-colors">
                Rent
              </button>
            </div>

            {/* Filters */}
            <div className="flex flex-col md:flex-row items-end gap-4">
              <div className="flex-1 w-full">
                <label className="text-xs text-muted-foreground mb-1 block">Location</label>
                <select className="w-full text-sm font-medium text-foreground bg-secondary rounded-lg px-3 py-2.5 border-0 focus:ring-1 focus:ring-ring outline-none appearance-none cursor-pointer">
                  <option>Batley</option>
                  <option>West Yorkshire</option>
                </select>
              </div>
              <div className="flex-1 w-full">
                <label className="text-xs text-muted-foreground mb-1 block">Property Type</label>
                <select className="w-full text-sm font-medium text-foreground bg-secondary rounded-lg px-3 py-2.5 border-0 focus:ring-1 focus:ring-ring outline-none appearance-none cursor-pointer">
                  <option>Duplex House</option>
                  <option>Apartment</option>
                  <option>Villa</option>
                </select>
              </div>
              <div className="flex-1 w-full">
                <label className="text-xs text-muted-foreground mb-1 block">Price Range</label>
                <select className="w-full text-sm font-medium text-foreground bg-secondary rounded-lg px-3 py-2.5 border-0 focus:ring-1 focus:ring-ring outline-none appearance-none cursor-pointer">
                  <option>£100,000 – £200,000</option>
                  <option>£200,000 – £350,000</option>
                  <option>£350,000+</option>
                </select>
              </div>
              <button className="flex items-center gap-2 bg-brand text-brand-foreground px-6 py-2.5 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity whitespace-nowrap">
                <Search className="w-4 h-4" />
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
