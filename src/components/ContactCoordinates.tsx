import { Mail, Phone, MapPin, LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import contactContent from "@/content/contact.json";

interface ContactCoordinatesProps {
  className?: string;
}

const iconMap: Record<string, LucideIcon> = {
  Mail,
  Phone,
  MapPin,
};

const ContactCoordinates = ({ className }: ContactCoordinatesProps) => {
  const details = contactContent.items ?? [];
  const mapEmbed = contactContent.mapEmbed;

  return (
    <section className={cn("mt-24", className)}>
      <div className="mx-auto grid max-w-6xl gap-10 rounded-4xl border border-border/60 bg-muted/15 px-8 py-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
        <div className="flex flex-col justify-between gap-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold text-primary">
              {contactContent.title || "Nos coordonnées"}
            </h2>
            <p className="text-muted-foreground">
              {contactContent.description ||
                "Notre équipe est disponible du lundi au vendredi de 9h à 17h (heure de Montréal)."}
            </p>
          </div>
          <div className="space-y-4">
            {details.map((item) => {
              const Icon = iconMap[item.icon] || Mail;
              return (
              <a
                key={item.label}
                href={item.href}
                className="flex items-start gap-4 rounded-3xl border border-border/50 bg-background px-4 py-5 shadow-[var(--shadow-card)] transition-colors hover:border-secondary hover:text-secondary"
              >
                <Icon
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
            )})}
          </div>
          <Button asChild size="lg" className="w-full sm:w-fit">
            <Link to={contactContent.ctaHref || "/adhesion-contact"}>
              {contactContent.ctaLabel || "Devenir membre"}
            </Link>
          </Button>
        </div>
        <div className="h-[360px] rounded-3xl border border-border/60 bg-background shadow-[var(--shadow-card)]">
          <iframe
            title="Localisation du réseau"
            src={
              mapEmbed ||
              "https://www.google.com/maps?q=2001%20Boulevard%20Robert-Bourassa%2C%20Montr%C3%A9al%20QC%20H3A%202A6%20Suite%201700&output=embed"
            }
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
