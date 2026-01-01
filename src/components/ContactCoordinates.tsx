import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

const contactDetails = [
  {
    icon: Mail,
    label: "Courriel",
    value: "contact@r-pac.ca",
    href: "mailto:contact@r-pac.ca",
  },
  {
    icon: Phone,
    label: "Téléphone",
    value: "+1 (819) 446-0661",
    href: "tel:+18194460661",
  },
  {
    icon: MapPin,
    label: "Adresse",
    value: "2001 Boulevard Robert-Bourassa, Montréal QC H3A 2A6, Suite 1700",
    href: "https://www.google.com/maps/search/?api=1&query=2001%20Boulevard%20Robert-Bourassa%2C%20Montr%C3%A9al%20QC%20H3A%202A6%2C%20Suite%201700",
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
              Notre équipe est disponible du lundi au vendredi de 9h à 17h
              (heure de Montréal).
            </p>
          </div>
          <div className="space-y-4">
            {contactDetails.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-start gap-4 rounded-3xl border border-border/50 bg-background px-4 py-5 shadow-[var(--shadow-card)] transition-colors hover:border-secondary hover:text-secondary"
              >
                <item.icon
                  className="mt-1 h-5 w-5 text-secondary"
                  aria-hidden="true"
                />
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
            <Link to="/adhesion-contact">Devenir membre</Link>
          </Button>
        </div>
        <div className="h-[360px] rounded-3xl border border-border/60 bg-background shadow-[var(--shadow-card)]">
          <iframe
            title="Localisation du réseau"
            src="https://www.google.com/maps?q=2001%20Boulevard%20Robert-Bourassa%2C%20Montr%C3%A9al%20QC%20H3A%202A6%20Suite%201700&output=embed"
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
