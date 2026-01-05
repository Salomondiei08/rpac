import { CalendarDays, MapPin, ArrowUpRight } from "lucide-react";
import useInView from "@/hooks/useInView";
import { cn } from "@/lib/utils";
import eventsData from "@/content/events.json";
import rpacLogo from "@/assets/rpac-actu.png";

const RecentEvents = () => {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.2 });
  const events = eventsData.events ?? [];

  return (
    <section
      id="events"
      aria-labelledby="events-heading"
      className="bg-[#1CC47B]/10 py-24"
    >
      <div className="mx-auto max-w-6xl space-y-10 px-6">
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          <h2
            id="events-heading"
            className="text-3xl md:text-4xl font-bold text-primary"
          >
            Événements à venir
          </h2>
          <p className="text-muted-foreground text-lg">
            Les prochaines étapes clés du réseau pour renforcer les synergies
            entre les écosystèmes africains et canadiens.
          </p>
        </div>

        <div
          ref={ref}
          className={cn(
            "grid gap-6 transition-all duration-700",
            events.length > 1 ? "md:grid-cols-2 lg:grid-cols-3" : "max-w-xl mx-auto",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          {events.map((event, index) => (
            <article
              key={event.title}
              className="relative overflow-hidden rounded-3xl border border-accent/10 bg-white p-8 shadow-[var(--shadow-card)] transition-transform duration-300 hover:-translate-y-2"
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="space-y-6">
                <div className="flex justify-center">
                  <img
                    src={event.image || rpacLogo}
                    alt={event.title}
                    className="h-16 w-auto object-contain"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="inline-flex items-center rounded-full border border-transparent bg-[#f3d9d3] px-5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-primary">
                    {event.tag}
                  </span>
                  <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground/70">
                    <CalendarDays className="h-4 w-4" aria-hidden="true" />
                    {event.date.toUpperCase()}
                  </span>
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-[#0f0f0f] leading-tight">
                    {event.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {event.description}
                  </p>
                </div>
                <div className="flex items-center justify-between text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground/70">
                  <span className="inline-flex items-center gap-2 text-muted-foreground/80">
                    <MapPin className="h-4 w-4" aria-hidden="true" />
                    {event.location.toUpperCase()}
                  </span>
                  <a
                    href={event.href || "/agenda"}
                    className="inline-flex items-center gap-2 text-accent font-semibold tracking-normal"
                  >
                    Découvrir l’agenda
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="flex justify-center">
          <a
            href="/agenda"
            className="inline-flex items-center gap-2 text-[#009BF2] font-semibold"
          >
            Consulter l’agenda complet
          </a>
        </div>
      </div>
    </section>
  );
};

export default RecentEvents;
