const Footer = () => {
  return (
    <footer
      className="bg-primary text-primary-foreground py-12"
      aria-labelledby="footer-heading"
    >
      <div className="container mx-auto px-4">
        <h2 id="footer-heading" className="sr-only">
          Pied de page
        </h2>
        <div className="grid md:grid-cols-4 gap-8 mb-8" role="presentation">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-primary"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2L2 7v10c0 5.5 3.8 10.7 10 12 6.2-1.3 10-6.5 10-12V7l-10-5zm0 2.2l8 4v8.3c0 4.4-3.1 8.6-8 9.5-4.9-.9-8-5.1-8-9.5V8.2l8-4z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
              <span className="text-xl font-bold">Mienssa energy</span>
            </div>
            <p className="text-primary-foreground/80 text-sm">
              Votre partenaire de confiance pour l'énergie solaire en Côte
              d'Ivoire
            </p>
          </div>

          <div aria-labelledby="nav-footer-heading">
            <h3 className="font-bold mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <a
                  href="#accueil"
                  className="hover:text-accent transition-colors"
                >
                  Accueil
                </a>
              </li>
              <li>
                <a
                  href="#solutions"
                  className="hover:text-accent transition-colors"
                >
                  Solutions
                </a>
              </li>
              <li>
                <a href="#kits" className="hover:text-accent transition-colors">
                  Nos Kits
                </a>
              </li>
              <li>
                <a
                  href="#apropos"
                  className="hover:text-accent transition-colors"
                >
                  À propos
                </a>
              </li>
            </ul>
          </div>

          <div aria-labelledby="services-footer-heading">
            <h3 className="font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>Installation solaire</li>
              <li>Maintenance</li>
              <li>Consultation</li>
              <li>Support technique</li>
            </ul>
          </div>

          <div aria-labelledby="contact-footer-heading">
            <h3 className="font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>+225 07 08 40 80 84</li>
              <li>contact@mienssa-energy.com</li>
              <li>Abidjan Cocody, Côte d'Ivoire</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/60">
          <p>
            &copy; {new Date().getFullYear()} Mienssa Energy. Tous droits
            réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
