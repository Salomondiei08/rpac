import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Facebook, Linkedin, Mail, Menu, Phone, X } from "lucide-react";
import rpacLogo from "@/assets/rpac-logo.svg";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname, location.hash]);

  const menuItems = [
    { label: "Accueil", to: "/" },
    { label: "À propos", to: "/a-propos" },
    { label: "Nos programmes", to: "/programmes" },
    { label: "Événements / Agenda", to: "/agenda" },
    { label: "Galerie multimédia", to: "/galerie" },
    { label: "Partenaires", to: "/partenaires" },
    { label: "Ressources", to: "/ressources" },
  ] as const;

  const isHomePage = location.pathname === "/" && location.hash.length === 0;

  return (
    <nav
      aria-label="Navigation principale"
      className="relative w-full z-50 bg-white shadow-sm border-b border-border/60"
    >
      {isHomePage && (
        <div className="bg-primary text-primary-foreground">
          <div className="container mx-auto flex items-center justify-between gap-4 px-4 py-2 text-xs sm:text-sm">
            <div className="flex items-center gap-3">
              <a
                href="https://linkedin.com"
                className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/40 hover:bg-primary/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="https://facebook.com"
                className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/40 hover:bg-primary/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
            <div className="hidden md:flex flex-wrap items-center gap-4 text-primary-foreground/90">
              <a
                href="mailto:contact@rpac.org"
                className="inline-flex items-center gap-2 hover:text-primary-foreground"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                contact@rpac.org
              </a>
              <a
                href="tel:+15145550199"
                className="inline-flex items-center gap-2 hover:text-primary-foreground"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                +1 (514) 555-0199
              </a>
            </div>
          </div>
        </div>
      )}
      <div className="border-t border-white/15 md:border-none">
        <div className="container mx-auto flex items-center justify-between px-4 py-4 md:py-6">
          <NavLink
            to="/"
            className="flex items-center rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-accent transition-opacity"
            aria-label="Page d’accueil Partenariats Canada-Afrique"
          >
            <img
              src={rpacLogo}
              alt="Logo Partenariats Canada-Afrique"
              className="h-10 w-auto md:h-12"
            />
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8" role="menubar">
            {menuItems.map((item) => {
              const baseClasses =
                "transition-colors font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm px-1 py-2 text-sm";
              return (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `${baseClasses} ${
                      isActive
                        ? "text-primary"
                        : "text-muted-foreground hover:text-primary"
                    }`
                  }
                  role="menuitem"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </NavLink>
              );
            })}
            <Button
              variant="default"
              className="font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-sm"
              asChild
            >
              <NavLink to="/adhesion-contact">Devenir membre</NavLink>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="menu-mobile"
            aria-label="Ouvrir le menu mobile"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            id="menu-mobile"
            className="md:hidden py-4 space-y-4 bg-white rounded-lg mt-2 p-4 shadow-lg border border-border/60"
            role="menu"
          >
            {menuItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className="block text-foreground hover:text-primary transition-colors font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
                onClick={() => setIsMobileMenuOpen(false)}
                role="menuitem"
              >
                {item.label}
              </NavLink>
            ))}
            <Button
              variant="default"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
              asChild
            >
              <NavLink to="/adhesion-contact">Devenir membre</NavLink>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
