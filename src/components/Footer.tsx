import { NavLink } from "react-router-dom";
import { Linkedin, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { partners } from "@/data/partners";

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com", icon: Linkedin },
  { label: "Twitter", href: "https://twitter.com", icon: Twitter },
  { label: "YouTube", href: "https://youtube.com", icon: Youtube },
];

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground pt-16" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Pied de page
      </h2>
      <section className="border-b border-primary-foreground/15">
        <div className="container mx-auto px-4 pb-12">
          <div className="flex gap-6 overflow-x-auto" aria-label="Partenaires de l’association">
            {partners.concat(partners).map((partner, index) => (
              <a
                key={`${partner.name}-${index}`}
                href={partner.href}
                className="flex-none w-64 rounded-2xl border border-primary-foreground/20 bg-primary-foreground/10 px-6 py-4 text-primary-foreground/90 hover:bg-primary-foreground/15 transition-colors"
              >
                <div className="text-sm uppercase tracking-wide opacity-70">Partenaire</div>
                <div className="text-lg font-semibold">{partner.name}</div>
                <div className="text-xs text-primary-foreground/70 mt-1">
                  {partner.sector}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-primary-foreground/10 flex items-center justify-center">
                <svg className="w-7 h-7 text-primary-foreground" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2 2 7v10c0 5.5 3.8 10.7 10 12 6.2-1.3 10-6.5 10-12V7l-10-5zm0 2.2 8 4v8.3c0 4.4-3.1 8.6-8 9.5-4.9-.9-8-5.1-8-9.5V8.2l8-4z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-primary-foreground/70">Association</p>
                <p className="text-lg font-semibold">Partenariats Canada-Afrique</p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Nous catalysons les collaborations entre institutions, entreprises et communautés pour bâtir des
              partenariats transformateurs sur l’ensemble du continent africain.
            </p>
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
                contact@partenariatsca.org
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-1" aria-hidden="true" />
                +1 (514) 555-9087
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
            <p className="text-xs text-primary-foreground/70">
              Inscrivez-vous à notre lettre d’information pour recevoir les dernières actualités.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-primary/95 border-t border-primary-foreground/15">
        <div className="container mx-auto px-4 py-6 text-sm text-primary-foreground/70 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
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
