import { NavLink } from "react-router-dom";
import { Linkedin, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";
import rpacLogo from "@/assets/rpac-logo.png";

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com", icon: Linkedin },
  { label: "Twitter", href: "https://twitter.com", icon: Twitter },
  { label: "YouTube", href: "https://youtube.com", icon: Youtube },
];

const Footer = () => {
  return (
    <footer className="bg-[#0d2a33] text-white pt-16" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Pied de page
      </h2>
      <section className="container mx-auto px-4 py-12">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={rpacLogo}
                alt="Réseau pour le Partenariat Afrique Canada"
                className="h-14 w-auto object-contain"
                loading="lazy"
                decoding="async"
              />
              <p className="text-lg font-semibold">Réseau pour le Partenariat Afrique Canada</p>
            </div>
          </div>

          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wide">Navigation</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <NavLink to="/" className="hover:text-accent transition-colors">
                  Accueil
                </NavLink>
              </li>
              <li>
                <NavLink to="/a-propos" className="hover:text-accent transition-colors">
                  À propos
                </NavLink>
              </li>
              <li>
                <NavLink to="/programmes" className="hover:text-accent transition-colors">
                  Nos programmes
                </NavLink>
              </li>
              <li>
                <NavLink to="/agenda" className="hover:text-accent transition-colors">
                  Événements / agenda
                </NavLink>
              </li>
              <li>
                <NavLink to="/galerie" className="hover:text-accent transition-colors">
                  Galerie multimédia
                </NavLink>
              </li>
              <li>
                <NavLink to="/adhesion-contact" className="hover:text-accent transition-colors">
                  Adhésion & contact
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wide">Contact rapide</h3>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-1" aria-hidden="true" />
                info@rpac.ca
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-1" aria-hidden="true" />
                +1 (819) 446-0661
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1" aria-hidden="true" />
                Maison des Associations, 125 rue Sherbrooke Ouest, Montréal, QC
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wide">Réseaux sociaux</h3>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full border border-primary-foreground/25 flex items-center justify-center hover:bg-primary-foreground/10 transition-colors"
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="w-5 h-5" aria-hidden="true" />
                </a>
              ))}
            </div>
              <p className="text-xs text-white/70">
              Inscrivez-vous à notre lettre d’information pour recevoir les dernières actualités.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6 text-sm text-white/70 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p>&copy; {new Date().getFullYear()} Association Partenariats Canada-Afrique. Tous droits réservés.</p>
          <div className="flex flex-wrap gap-4">
            <NavLink to="/mentions-legales" className="hover:text-accent transition-colors">
              Mentions légales
            </NavLink>
            <NavLink to="/politique-confidentialite" className="hover:text-accent transition-colors">
              Politique de confidentialité
            </NavLink>
            <NavLink to="/adhesion-contact" className="hover:text-accent transition-colors">
              Nous contacter
            </NavLink>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
