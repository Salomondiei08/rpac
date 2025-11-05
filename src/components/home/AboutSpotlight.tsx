import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import useInView from "@/hooks/useInView";
import { cn } from "@/lib/utils";
import impactImage from "@/assets/impact-collage.jpg";

const stats = [
  { value: "15+", label: "pays partenaires mobilisés" },
  { value: "120", label: "institutions accompagnées" },
  { value: "300+", label: "experts et membres actifs" },
];

const AboutSpotlight = () => {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.3 });

  return (
    <section
      ref={ref}
      aria-labelledby="about-spotlight-heading"
      className="relative overflow-hidden bg-muted/40 py-24"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(13,42,51,0.12),_transparent)]" />
      <div
        className={cn(
          "mx-auto flex max-w-6xl flex-col gap-12 px-6 lg:flex-row lg:items-center",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 transition-all duration-700 ease-out"
        )}
      >
        <div className="relative h-[340px] overflow-hidden rounded-4xl bg-[#0d2a33] lg:w-1/2">
          <img
            src={impactImage}
            alt="Membres du RPAC en mission de terrain"
            className="h-full w-full object-cover opacity-90 transition-transform duration-700 ease-out hover:scale-[1.03]"
          />
          <div className="absolute bottom-6 left-6 flex gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl bg-white/95 px-5 py-4 text-center shadow-lg backdrop-blur"
              >
                <p className="text-xl font-semibold text-primary">{stat.value}</p>
                <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground/80">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6 lg:w-1/2">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            Qui sommes-nous ?
          </span>
          <div className="space-y-4">
            <h2
              id="about-spotlight-heading"
              className="text-3xl font-semibold text-primary sm:text-4xl"
            >
              Une alliance Canada–Afrique au service d’un impact durable.
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              Le RPAC catalyse des coalitions publiques et privées pour concrétiser des
              projets structurants. Nos équipes coordonnent la stratégie, l’ingénierie de
              partenariats et le suivi d’impact avec les leaders des deux continents.
            </p>
          </div>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-3">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
              <span>
                Accompagnement sur-mesure des gouvernements, villes, entreprises et réseaux citoyens.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
              <span>
                Une approche terrain grâce à nos représentants régionaux et communautés de pratiques.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
              <span>
                Des programmes qui articulent diplomatie économique, inclusion sociale et innovation.
              </span>
            </li>
          </ul>
          <Button
            asChild
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90"
          >
            <Link to="/a-propos">Découvrir l’association</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutSpotlight;
