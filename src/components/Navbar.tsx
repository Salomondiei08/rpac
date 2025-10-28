import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Accueil", to: "/" },
    { label: "À propos", to: "/a-propos" },
    { label: "Nos activités", to: "/nos-activites" },
    { label: "Ressources", to: "/nos-activites#ressources" },
  ];

  const topMode = !isScrolled;
  const isTransparentHome =
    location.pathname === "/" && location.hash.length === 0 && topMode;

  return (
    <nav
      aria-label="Navigation principale"
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isTransparentHome
          ? "bg-transparent"
          : "bg-background/95 backdrop-blur-md shadow-md"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-2">
            <div
              className={`w-10 h-10 ${
                isTransparentHome
                  ? "bg-white/15 ring-1 ring-white/30"
                  : "bg-accent/20 ring-1 ring-accent/30"
              } backdrop-blur-sm rounded-lg flex items-center justify-center transition-colors`}
            >
              <svg
                className={`w-6 h-6 ${
                  isTransparentHome ? "text-white" : "text-primary"
                }`}
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7v10c0 5.5 3.8 10.7 10 12 6.2-1.3 10-6.5 10-12V7l-10-5zm0 2.2l8 4v8.3c0 4.4-3.1 8.6-8 9.5-4.9-.9-8-5.1-8-9.5V8.2l8-4z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </div>
            <span
              className={`text-xl font-bold ${
                isTransparentHome ? "text-white drop-shadow-sm" : "text-primary"
              }`}
            >
              Partenariats Canada-Afrique
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8" role="menubar">
            {menuItems.map((item) => {
              const baseClasses =
                "transition-colors font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm";
              return (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `${baseClasses} ${
                      isTransparentHome
                        ? isActive
                          ? "text-white"
                          : "text-white/80 hover:text-white"
                        : isActive
                          ? "text-accent"
                          : "text-foreground hover:text-accent"
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
              variant={isTransparentHome ? "secondary" : "default"}
              className={`font-semibold ${
                isTransparentHome
                  ? "bg-white/90 text-primary hover:bg-white shadow-sm"
                  : "bg-primary hover:bg-primary/90"
              }`}
              asChild
            >
              <NavLink to="/adhesion-contact">Devenir membre</NavLink>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm ${
              isTransparentHome ? "text-white" : "text-foreground"
            }`}
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
            className="md:hidden py-4 space-y-4 bg-background/95 backdrop-blur-md rounded-lg mt-2 p-4"
            role="menu"
          >
            {menuItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className="block text-foreground hover:text-accent transition-colors font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
                onClick={() => setIsMobileMenuOpen(false)}
                role="menuitem"
              >
                {item.label}
              </NavLink>
            ))}
            <Button
              variant="default"
              className="w-full bg-primary hover:bg-primary/90"
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
