import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import useInView from "@/hooks/useInView";
import { cn } from "@/lib/utils";
import impactImage from "@/assets/rpac-actu.png";

const AboutSpotlight = () => {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.2 });

  return (
    <section
      ref={ref}
      aria-labelledby="about-spotlight-heading"
      className="relative overflow-hidden bg-muted/40 py-24"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(13,42,51,0.12),_transparent)]" />
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 lg:flex-row lg:items-center">
        <div
          className={cn(
            "relative h-[360px] overflow-hidden rounded-4xl bg-white lg:w-1/2 transition-all duration-700 ease-out flex items-center justify-center p-6",
            inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          )}
        >
          <img
            src={impactImage}
            alt="Le RPAC en action"
            className="h-full w-full object-contain opacity-95 transition-transform duration-700 ease-out hover:scale-[1.04]"
            style={{ clipPath: "inset(0% 1.25%)" }}
          />
        </div>

        <div
          className={cn(
            "space-y-6 lg:w-1/2 transition-all duration-700 ease-out",
            inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          )}
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            Qui sommes-nous ?
          </span>
          <div className="space-y-4">
            <h2
              id="about-spotlight-heading"
              className="text-3xl font-semibold text-primary sm:text-4xl"
            >
              Le RPAC, catalyseur des partenariats Afrique–Canada
            </h2>
            <div className="space-y-3 text-base leading-relaxed text-muted-foreground">
              <p>
                Organisation à but non lucratif, le RPAC renforce les liens stratégiques entre le Canada et l’Afrique en
                accompagnant gouvernements, entreprises et communautés sur des projets d’investissement, d’entrepreneuriat,
                d’éducation et de coopération institutionnelle.
              </p>
              <p>
                Aligné sur l’Agenda 2063 et la Stratégie canadienne pour l’Afrique, le réseau catalyse des partenariats
                transformateurs qui promeuvent des investissements responsables, du commerce durable et la création de valeurs
                partagées entre les deux continents.
              </p>
            </div>
          </div>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-3">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
              <span>
                Accompagnement sur-mesure des gouvernements, entreprises et organisations communautaires des deux continents.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
              <span>
                Promotion d’investissements responsables et de collaborations alignées sur les principes de la RSE.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
              <span>
                Programmes alignés sur l’Agenda 2063 et la Stratégie canadienne pour l’Afrique pour créer des valeurs partagées.
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
