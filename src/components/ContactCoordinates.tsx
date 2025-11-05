import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const contactDetails = [
  {
    icon: Mail,
    label: "Courriel",
    value: "contact@partenariatsca.org",
    href: "mailto:contact@partenariatsca.org",
  },
  {
    icon: Phone,
    label: "Téléphone",
    value: "+1 (514) 555-9087",
    href: "tel:+15145559087",
  },
  {
    icon: MapPin,
    label: "Adresse",
    value: "Maison des Associations, 125 rue Sherbrooke Ouest, Montréal, QC",
    href: "https://maps.app.goo.gl/association",
  },
];

interface ContactCoordinatesProps {
  className?: string;
}

const ContactCoordinates = ({ className }: ContactCoordinatesProps) => {
  return (
    <section className={cn("mt-24", className)}>
      <div className="mx-auto grid max-w-6xl gap-10 rounded-4xl border border-border/60 bg-muted/15 px-8 py-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
        <div className="flex flex-col justify-between gap-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold text-primary">Nos coordonnées</h2>
            <p className="text-muted-foreground">
              Notre équipe est disponible du lundi au vendredi de 9h à 17h (heure de Montréal).
            </p>
          </div>
          <div className="space-y-4">
            {contactDetails.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-start gap-4 rounded-3xl border border-border/50 bg-background px-4 py-5 shadow-[var(--shadow-card)] transition-colors hover:border-secondary hover:text-secondary"
              >
                <item.icon className="mt-1 h-5 w-5 text-secondary" aria-hidden="true" />
                <div>
                  <span className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground/80">
                    {item.label}
                  </span>
                  <p className="text-base text-primary">{item.value}</p>
                </div>
              </a>
            ))}
          </div>
          <Button asChild size="lg" className="w-full sm:w-fit">
            <a href="mailto:contact@partenariatsca.org">Nous contacter</a>
          </Button>
        </div>
        <div className="h-[360px] rounded-3xl border border-border/60 bg-background shadow-[var(--shadow-card)]">
          <iframe
            title="Localisation de l’association"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2795.661341770618!2d-73.5765724226917!3d45.50704313169984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91a45c8df0adf%3A0x99f8fef0e0fe8070!2sSherbrooke%20St%20W%2C%20Montreal%2C%20QC!5e0!3m2!1sen!2sca!4v1717276800000!5m2!1sen!2sca"
            className="h-full w-full rounded-3xl"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactCoordinates;
