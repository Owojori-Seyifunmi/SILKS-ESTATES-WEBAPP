import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/silks-logo.png";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Rent", href: "/properties" },
  { label: "Landlords", href: "/landlord" },
  { label: "Tenants", href: "/tenants" },
  { label: "About", href: "/about" },
];

const Header = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <img src={logo} alt="Silks Estates" className="h-10 w-auto" />
        </Link>

        {/* Nav Links - Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href;
            return (
              <Link
                key={link.href}
                to={link.href}
                className={`relative text-sm font-medium tracking-wide transition-colors pb-1 ${
                  isActive
                    ? "text-nav-active border-b-2 border-foreground"
                    : "text-nav-inactive hover:text-nav-active"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Contact button - Desktop */}
        <div className="hidden md:flex items-center">
          <Link
            to="/contact"
            className="text-sm font-medium bg-brand text-brand-foreground px-6 py-2.5 rounded-full hover:opacity-90 transition-opacity"
          >
            Contact
          </Link>
        </div>

        {/* Hamburger - Mobile */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background border-t border-border px-6 pb-6 pt-2">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`text-sm font-medium py-2.5 transition-colors ${
                    isActive
                      ? "text-nav-active border-l-2 border-foreground pl-3"
                      : "text-nav-inactive hover:text-nav-active pl-3"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
          <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-border">
            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="text-sm font-medium bg-brand text-brand-foreground text-center px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
