import { CalendarDays, MapPin, ArrowUpRight } from "lucide-react";
import useInView from "@/hooks/useInView";
import { cn } from "@/lib/utils";

const events = [
  {
    title: "Forum économique Canada – Afrique de l’Ouest",
    date: "12 mars 2024",
    location: "Dakar, Sénégal",
    tag: "Diplomatie économique",
    description:
      "Table ronde ministérielle et rencontres B2B autour des investissements durables et des partenariats technologiques.",
  },
  {
    title: "Sommet régional sur la gouvernance inclusive",
    date: "28 avril 2024",
    location: "Abuja, Nigeria",
    tag: "Gouvernance inclusive",
    description:
      "Partage de solutions innovantes pour renforcer les institutions publiques et l’accès aux services essentiels.",
  },
  {
    title: "Rencontre sectorielle santé & innovation",
    date: "09 juin 2024",
    location: "Montréal, Canada",
    tag: "Innovation & santé",
    description:
      "Dialogue entre experts canadiens et africains pour accélérer les partenariats en santé numérique.",
  },
];

const RecentEvents = () => {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.2 });

  return (
    <section id="events" aria-labelledby="events-heading" className="bg-[#f8ecea] py-24">
      <div className="mx-auto max-w-6xl space-y-10 px-6">
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          <h2 id="events-heading" className="text-3xl md:text-4xl font-bold text-primary">
            Événements récents
          </h2>
          <p className="text-muted-foreground text-lg">
            Des échanges stratégiques pour rapprocher les écosystèmes canadiens et africains. Découvrez les rendez-vous qui ont marqué notre agenda.
          </p>
        </div>

        <div
          ref={ref}
          className={cn(
            "grid gap-6 lg:grid-cols-3 transition-all duration-700",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          )}
        >
          {events.map((event, index) => (
            <article
              key={event.title}
              className="group relative overflow-hidden rounded-4xl border border-border/60 bg-card shadow-[var(--shadow-card)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[var(--shadow-hover)] hover:bg-primary"
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/0 via-accent/0 to-accent/0 opacity-0 transition-opacity duration-500 group-hover:opacity-40" />
              <div className="relative flex h-full flex-col gap-6 p-8 text-left transition-colors duration-500 group-hover:text-primary-foreground">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent transition-colors duration-300 group-hover:bg-primary-foreground/20 group-hover:text-primary-foreground">
                    {event.tag}
                  </span>
                  <span className="inline-flex items-center gap-2 text-xs text-muted-foreground/80 transition-colors duration-300 group-hover:text-primary-foreground/80">
                    <CalendarDays className="h-4 w-4" aria-hidden="true" />
                    {event.date}
                  </span>
                </div>
                <h3 className="text-xl font-semibold leading-tight">
                  {event.title}
                </h3>
                <div className="space-y-3 text-sm leading-relaxed text-muted-foreground transition-colors duration-500 group-hover:text-primary-foreground/85">
                  <p>{event.description}</p>
                  <span className="inline-flex items-center gap-2 text-xs uppercase tracking-wide text-muted-foreground/70 transition-colors duration-500 group-hover:text-primary-foreground/70">
                    <MapPin className="h-4 w-4" aria-hidden="true" />
                    {event.location}
                  </span>
                </div>
                <a
                  href="/agenda"
                  className="mt-auto inline-flex items-center gap-2 text-accent font-semibold transition-colors duration-500 group-hover:text-primary-foreground"
                >
                  Voir le compte-rendu
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="flex justify-center">
          <a href="/agenda" className="inline-flex items-center gap-2 text-accent font-semibold">
            Consulter l’agenda complet
          </a>
        </div>
      </div>
    </section>
  );
};

export default RecentEvents;
