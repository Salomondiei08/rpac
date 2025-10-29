import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { partners } from "@/data/partners";

const PartnersCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = direction === "left" ? -280 : 280;
    scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section
      aria-labelledby="partners-heading"
      className="py-16 bg-background"
    >
      <div className="container mx-auto px-4 space-y-10">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <p className="inline-flex items-center gap-2 rounded-full bg-accent/15 px-4 py-2 text-sm font-semibold text-accent">
            Nos partenaires stratégiques
          </p>
          <h2
            id="partners-heading"
            className="text-3xl md:text-4xl font-bold text-primary"
          >
            Un réseau engagé sur tout le continent
          </h2>
          <p className="text-muted-foreground text-lg">
            Institutions publiques, entreprises et coalitions citoyennes
            co-construisent nos programmes pour amplifier l’impact de chaque
            initiative.
          </p>
        </div>

        <div className="relative">
          <button
            type="button"
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-white/80 p-2 text-primary shadow-md ring-1 ring-black/10 transition hover:bg-white md:inline-flex"
            aria-label="Parcourir les partenaires précédents"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar py-2 snap-x snap-mandatory"
          >
            {partners.concat(partners).map((partner, index) => (
              <article
                key={`${partner.name}-${index}`}
                className="flex w-64 flex-none flex-col justify-between rounded-2xl border border-border/60 bg-card/90 px-6 py-5 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-all snap-start"
              >
                <div className="space-y-2">
                  <span className="text-xs uppercase tracking-wide text-muted-foreground/80">
                    {partner.sector}
                  </span>
                  <h3 className="text-lg font-semibold text-primary leading-tight">
                    {partner.name}
                  </h3>
                </div>
                <a
                  href={partner.href}
                  className="text-sm font-medium text-accent hover:underline"
                >
                  En savoir plus
                </a>
              </article>
            ))}
          </div>

          <button
            type="button"
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-white/80 p-2 text-primary shadow-md ring-1 ring-black/10 transition hover:bg-white md:inline-flex"
            aria-label="Parcourir les partenaires suivants"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default PartnersCarousel;
