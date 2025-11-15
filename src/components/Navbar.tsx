import { useState, useEffect } from "react";
import type { SVGProps } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  ChevronDown,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Menu,
  Phone,
  X,
  Youtube,
} from "lucide-react";
import rpacLogo from "@/assets/rpac-logo.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const TwitterXIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M3 2.5h5.2l4 5.1 5.2-5.1H23l-8.2 8.5 8.4 10.5h-5.2l-4.7-6-6 6H1l8.7-8.9z" />
  </svg>
);
type MenuItem = {
  label: string;
  to?: string;
  children?: { label: string; to: string }[];
};

const menuItems: MenuItem[] = [
  { label: "Accueil", to: "/" },
  { label: "À propos", to: "/a-propos" },
  { label: "Équipe", to: "/equipes" },
  { label: "Programmes", to: "/programmes" },
  { label: "Événements / Agenda", to: "/agenda" },
  { label: "Partenaires", to: "/partenaires" },
  {
    label: "Media & ressources",
    children: [
      { label: "Galerie multimédia", to: "/galerie" },
      { label: "Ressources", to: "/ressources" },
    ],
  },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname, location.hash]);

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
              <a
                href="https://instagram.com"
                className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/40 hover:bg-primary/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="https://twitter.com"
                className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/40 hover:bg-primary/20 transition-colors"
                aria-label="X (Twitter)"
              >
                <TwitterXIcon className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="https://youtube.com"
                className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/40 hover:bg-primary/20 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-4 w-4" aria-hidden="true" />
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
              className="h-12 w-auto md:h-16"
            />
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4" role="menubar">
            {menuItems.map((item) => {
              const baseClasses =
                "relative inline-flex items-center gap-1 text-sm font-semibold px-3 py-2 rounded-md transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent";

              if (item.children?.length) {
                return (
                  <DropdownMenu key={item.label}>
                    <DropdownMenuTrigger
                      className={`${baseClasses} text-foreground hover:bg-[#b42424] hover:text-white hover:shadow-md data-[state=open]:bg-[#b42424] data-[state=open]:text-white`}
                      type="button"
                    >
                      <span>{item.label}</span>
                      <ChevronDown className="h-4 w-4" aria-hidden="true" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="w-56">
                      {item.children.map((child) => (
                        <DropdownMenuItem key={child.to} asChild className="p-0">
                          <NavLink
                            to={child.to}
                            className={({ isActive }) =>
                              `flex w-full items-center rounded-sm px-2 py-1.5 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                                isActive
                                  ? "text-primary"
                                  : "text-muted-foreground hover:text-foreground"
                              }`
                            }
                          >
                            {child.label}
                          </NavLink>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                );
              }

              if (item.to) {
                return (
                  <NavLink
                    key={item.label}
                    to={item.to}
                    className={({ isActive }) =>
                      `${baseClasses} ${
                        isActive ? "text-primary" : "text-foreground"
                      } hover:bg-[#b42424] hover:text-white hover:shadow-md`
                    }
                    role="menuitem"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </NavLink>
                );
              }

              return null;
            })}
            <NavLink
              to="/adhesion-contact"
              className={({ isActive }) =>
                `relative inline-flex items-center gap-1 text-sm font-semibold px-3 py-2 rounded-md transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                  isActive ? "text-[#b42424]" : "text-foreground"
                } hover:bg-[#b42424] hover:text-white hover:shadow-md`
              }
            >
              Devenir membre
            </NavLink>
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
            {menuItems.map((item) =>
              item.children?.length ? (
                <div key={item.label} className="space-y-3">
                  <span className="block text-sm font-semibold uppercase tracking-wide text-foreground/80">
                    {item.label}
                  </span>
                  <div className="ml-3 space-y-2">
                    {item.children.map((child) => (
                      <NavLink
                        key={child.to}
                        to={child.to}
                        className="block text-sm text-muted-foreground hover:text-primary transition-colors font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
                        onClick={() => setIsMobileMenuOpen(false)}
                        role="menuitem"
                      >
                        {child.label}
                      </NavLink>
                    ))}
                  </div>
                </div>
              ) : (
                item.to && (
                  <NavLink
                    key={item.label}
                    to={item.to}
                    className="block text-foreground hover:text-primary transition-colors font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
                    onClick={() => setIsMobileMenuOpen(false)}
                    role="menuitem"
                  >
                    {item.label}
                  </NavLink>
                )
              )
            )}
            <NavLink
              to="/adhesion-contact"
              className={({ isActive }) =>
                `block text-center w-full font-semibold px-3 py-2 rounded-md transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                  isActive ? "text-[#b42424]" : "text-foreground"
                } hover:bg-[#b42424] hover:text-white`
              }
            >
              Devenir membre
            </NavLink>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
