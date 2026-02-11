import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/silks-logo.png";

const navLinks = [
  { label: "Rent", href: "/properties" },
  { label: "Landlords", href: "/landlord" },
  { label: "Tenants", href: "/tenants" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const Header = () => {
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <img src={logo} alt="Silks Estates" className="h-10 w-auto" />
        </Link>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href || (link.href === "/properties" && location.pathname === "/");
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

        {/* Auth buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            to="/login"
            className="text-sm font-medium text-foreground hover:text-muted-foreground transition-colors"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="text-sm font-medium bg-primary text-primary-foreground px-5 py-2 rounded-full hover:opacity-90 transition-opacity"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
