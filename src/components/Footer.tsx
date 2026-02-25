import { Link } from "react-router-dom";
import logo from "@/assets/silks-logo.png";

const footerLinks = {
  Services: [
    { label: "Full Management", href: "/landlord" },
    { label: "Tenant Find", href: "/landlord" },
    { label: "Asset Protection", href: "/landlord" },
    { label: "E-Letz", href: "/landlord" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Properties", href: "/properties" },
    { label: "Blog", href: "/blog" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookie Policy", href: "/cookies" },
  ],
};

const Footer = () => {
  return (
    <footer className="bg-foreground pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div>
            <img src={logo} alt="Silks Estates" className="h-8 w-auto brightness-0 invert mb-4" />
            <p className="text-background/60 text-sm leading-relaxed">
              Professional property management and letting services for landlords across the UK.
            </p>
          </div>
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-background text-sm font-semibold mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-background/60 text-sm hover:text-background transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-background/10 pt-6">
          <p className="text-background/40 text-xs text-center">
            © {new Date().getFullYear()} Silks Estates. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
