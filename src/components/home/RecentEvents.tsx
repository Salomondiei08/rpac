import { CalendarDays, MapPin } from "lucide-react";

const events = [
  {
    title: "Forum économique Canada – Afrique de l’Ouest",
    date: "12 mars 2024",
    location: "Dakar, Sénégal",
    description:
      "Table ronde ministérielle et rencontres B2B autour des investissements durables et des partenariats technologiques.",
  },
  {
    title: "Sommet régional sur la gouvernance inclusive",
    date: "28 avril 2024",
    location: "Abuja, Nigeria",
    description:
      "Partage de solutions innovantes pour renforcer les institutions publiques et l’accès aux services essentiels.",
  },
  {
    title: "Rencontre sectorielle santé & innovation",
    date: "09 juin 2024",
    location: "Montréal, Canada",
    description:
      "Dialogue entre experts canadiens et africains pour accélérer les partenariats en santé numérique.",
  },
];

const RecentEvents = () => {
  return (
    <section id="events" aria-labelledby="events-heading" className="py-16">
      <div className="container mx-auto px-4 space-y-10">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <h2
            id="events-heading"
            className="text-3xl md:text-4xl font-bold text-primary"
          >
            Événements récents
          </h2>
          <p className="text-muted-foreground text-lg">
            Des échanges stratégiques pour rapprocher les écosystèmes canadiens
            et africains. Découvrez les rendez-vous qui ont marqué notre agenda.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {events.map((event) => (
            <article
              key={event.title}
              className="rounded-3xl border border-border/60 bg-card p-8 flex flex-col gap-4 shadow-sm hover:shadow-[var(--shadow-hover)] transition-all duration-300"
            >
              <div className="flex items-center gap-4 text-sm text-muted-foreground/80">
                <span className="inline-flex items-center gap-2 font-medium">
                  <CalendarDays className="w-4 h-4" aria-hidden="true" />
                  {event.date}
                </span>
                <span aria-hidden="true">•</span>
                <span className="inline-flex items-center gap-2">
                  <MapPin className="w-4 h-4" aria-hidden="true" />
                  {event.location}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-primary">
                {event.title}
              </h3>
              <p className="text-muted-foreground flex-1">{event.description}</p>
              <a href="/agenda" className="text-accent font-medium">
                Voir le compte-rendu
              </a>
            </article>
          ))}
        </div>

        <div className="flex justify-center">
          <a
            href="/agenda"
            className="inline-flex items-center gap-2 text-accent font-semibold"
          >
            Consulter l’agenda complet
          </a>
        </div>
      </div>
    </section>
  );
};

export default RecentEvents;
