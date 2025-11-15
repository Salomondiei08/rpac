import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { programs } from "@/data/programs";
import useInView from "@/hooks/useInView";
import { cn } from "@/lib/utils";

const ProgramsHighlights = () => {
  return (
    <section aria-labelledby="activities-heading" className="relative bg-background pt-12 pb-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6">
        <header className="space-y-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Nos activités
          </p>
          <h1 id="activities-heading" className="text-3xl font-semibold text-primary sm:text-4xl">
            Des programmes pensés pour transformer les ambitions en résultats
          </h1>
          <p className="mx-auto max-w-3xl text-base text-muted-foreground sm:text-lg">
            Explorez les huit axes structurants du RPAC. Chaque programme fédère institutions publiques, entreprises et
            acteurs de la société civile autour d’actions concrètes entre le Canada et l’Afrique.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {programs.slice(0, 6).map((program, index) => (
            <ActivityCard key={program.slug} program={program} index={index} />
          ))}
        </div>

        <div className="flex justify-center">
          <Button asChild variant="outline" className="px-8 py-6 text-base font-semibold">
            <Link to="/programmes">Voir tous nos programmes</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

interface ActivityCardProps {
  program: (typeof programs)[number];
  index: number;
}

const ActivityCard = ({ program, index }: ActivityCardProps) => {
  const { ref, inView } = useInView<HTMLArticleElement>({
    threshold: 0.2,
  });
  return (
    <article
      ref={ref}
      className={cn(
        "group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-border/60 bg-card/60 p-8 shadow-[var(--shadow-card)] transition-all duration-700",
        "hover:-translate-y-2 hover:shadow-[var(--shadow-hover)] hover:bg-[#0d1f29]",
        inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
      )}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div
        className="absolute inset-x-0 bottom-0 h-1 rounded-full bg-accent/40 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        aria-hidden="true"
      />
      <div
        className="flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/15 text-accent transition-colors duration-500 group-hover:bg-white/15 group-hover:text-white"
      >
        <program.icon className="h-8 w-8" aria-hidden="true" />
      </div>

      <div className="mt-6 space-y-3">
        <h2 className="text-xl font-semibold text-primary transition-colors duration-500 group-hover:text-white">
          {program.title}
        </h2>
        <p className="text-sm leading-relaxed text-muted-foreground transition-colors duration-500 group-hover:text-white/80">
          {program.excerpt}
        </p>

        <div className="flex flex-wrap gap-2">
          {program.focus.slice(0, 3).map((item) => (
            <span key={item} className="rounded-full border border-border/70 px-3 py-1 text-xs uppercase tracking-wide text-muted-foreground transition-colors duration-500 group-hover:border-white/40 group-hover:text-white/80">
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <Button
          asChild
          className="w-full justify-between bg-accent text-accent-foreground shadow-none transition-all duration-500 group-hover:bg-white group-hover:text-[#0d1f29]"
        >
          <Link to={`/programmes/${program.slug}`}>
            Lire plus
            <span aria-hidden="true" className="ml-2 inline-block transition-transform duration-500 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </Button>
      </div>
    </article>
  );
};

export default ProgramsHighlights;
