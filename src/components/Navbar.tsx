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
import rpacLogo from "@/assets/rpac-actu.png";
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
      <div className="bg-[#1CC47B] text-white">
        <div className="container mx-auto flex items-center justify-between gap-4 px-4 py-2 text-xs sm:text-sm">
          <div className="flex items-center gap-3">
            {[Linkedin, Facebook, Instagram, TwitterXIcon, Youtube].map(
              (Icon, index) => (
                <a
                  key={Icon.displayName ?? index}
                  href={
                    Icon === Linkedin
                      ? "https://www.linkedin.com/company/r%C3%A9seau-pour-le-partenariat-afrique-canada-rpac/"
                      : Icon === Facebook
                      ? "https://www.facebook.com/RPACorg"
                      : Icon === Instagram
                      ? "https://instagram.com"
                      : Icon === TwitterXIcon
                      ? "https://twitter.com"
                      : "https://youtube.com"
                  }
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/25 hover:bg-white/15 transition-colors"
                  aria-label={
                    Icon === TwitterXIcon
                      ? "X (Twitter)"
                      : Icon.displayName ?? "réseau social"
                  }
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </a>
              )
            )}
          </div>
          <div className="hidden md:flex flex-wrap items-center gap-4 text-white/90">
            <a
              href="mailto:contact@r-pac.ca"
              className="inline-flex items-center gap-2 hover:text-white"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              contact@r-pac.ca
            </a>
            <a
              href="tel:+18194460661"
              className="inline-flex items-center gap-2 hover:text-white"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              +1 (819) 446-0661
            </a>
          </div>
        </div>
      </div>
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
                      className={`${baseClasses} text-foreground hover:bg-[#1CC47B] hover:text-white hover:shadow-md data-[state=open]:bg-[#1CC47B] data-[state=open]:text-white`}
                      type="button"
                    >
                      <span>{item.label}</span>
                      <ChevronDown className="h-4 w-4" aria-hidden="true" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="w-56">
                      {item.children.map((child) => (
                        <DropdownMenuItem
                          key={child.to}
                          asChild
                          className="p-0"
                        >
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
                        isActive ? "text-[#1CC47B]" : "text-foreground"
                      } hover:bg-[#1CC47B] hover:text-white hover:shadow-md`
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
                  isActive ? "text-[#1CC47B]" : "text-foreground"
                } hover:bg-[#1CC47B] hover:text-white hover:shadow-md`
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
                        className={({ isActive }) =>
                          `block text-sm font-medium rounded-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                            isActive
                              ? "text-[#1CC47B]"
                              : "text-muted-foreground hover:text-[#1CC47B]"
                          }`
                        }
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
                    className={({ isActive }) =>
                      `block rounded-sm text-foreground transition-colors font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                        isActive ? "text-[#1CC47B]" : "hover:text-[#1CC47B]"
                      }`
                    }
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
                  isActive ? "text-[#1CC47B]" : "text-foreground"
                } hover:bg-[#1CC47B] hover:text-white`
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
