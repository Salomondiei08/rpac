import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import useInView from "@/hooks/useInView";
import { cn } from "@/lib/utils";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import ContactCoordinates from "@/components/ContactCoordinates";
import impactImage from "@/assets/impact-collage.jpg";

const strategicObjectives = [
  {
    title: "Diplomatie économique",
    summary:
      "Faciliter la signature d’accords bilatéraux et de partenariats public-privé structurants.",
    detail:
      "Nous orchestrons des missions ciblées, des tables rondes ministérielles et des dispositifs de suivi d’engagements pour garantir que chaque accord débouche sur des retombées mesurables pour les territoires.",
  },
  {
    title: "Développement inclusif",
    summary:
      "Soutenir les projets favorisant l’égalité des genres, la participation citoyenne et la résilience des territoires.",
    detail:
      "Chaque initiative intègre des dispositifs de consultation citoyenne, des indicateurs d’inclusion et un accompagnement des organisations communautaires pour renforcer la gouvernance locale.",
  },
  {
    title: "Innovation et savoirs",
    summary:
      "Créer des passerelles entre universités, centres de recherche et incubateurs pour accélérer l’innovation.",
    detail:
      "Les laboratoires d’idées et programmes d’échanges académiques que nous pilotons permettent de co-développer des solutions technologiques adaptées aux réalités africaines.",
  },
  {
    title: "Renforcement institutionnel",
    summary:
      "Accompagner les administrations publiques et les organisations régionales dans l’amélioration des services rendus aux citoyens.",
    detail:
      "Formations immersives, mentorat par pairs canadiens et diagnostics organisationnels structurent nos parcours pour moderniser les services publics.",
  },
];

const AnimatedSection = ({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) => {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.15 });
  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
        className,
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const About = () => {
  return (
    <div className="bg-background">
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-primary/80 text-primary-foreground pt-24 md:pt-28 pb-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,hsl(var(--primary)/0.2),transparent)]" />
        <AnimatedSection className="relative z-10 mx-auto max-w-5xl space-y-6 px-6 text-center md:text-left">
          <span className="inline-flex items-center gap-2 self-center md:self-auto rounded-full bg-white/15 px-4 py-2 text-sm font-semibold uppercase tracking-wide text-white/85 shadow-sm backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-accent" />
            À propos de l’association
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold max-w-4xl leading-tight mx-auto md:mx-0">
            Connecter les visions canadiennes et africaines pour un avenir
            partagé et durable.
          </h1>
          <p className="text-base sm:text-lg lg:text-xl max-w-3xl text-primary-foreground/85 mx-auto md:mx-0">
            Depuis plus de dix ans, l’Association des Partenariats Canada-Afrique
            construit des passerelles entre institutions publiques, entreprises,
            acteurs de la société civile et communautés universitaires.
          </p>
        </AnimatedSection>
      </section>

      <section
        className="py-24"
        aria-labelledby="presentation-heading"
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-20 px-6">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                id: "presentation-heading",
                title: "Mission",
                description:
                  "Mobiliser les expertises canadiennes et africaines pour construire des alliances économiques, diplomatiques et sociales porteuses d’impact durable et inclusif.",
              },
              {
                title: "Vision",
                description:
                  "Devenir la plateforme de référence pour des partenariats transformationnels entre le Canada et l’Afrique, au service des citoyens et des territoires.",
              },
              {
                title: "Historique",
                description:
                  "Fondée en 2013 à Montréal, l’association est née de la volonté d’un réseau de diplomates, entrepreneurs et universitaires de renforcer le dialogue stratégique avec les capitales africaines.",
              },
            ].map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 80} className="h-full">
                <article className="h-full rounded-3xl border border-border/60 bg-card/95 p-8 shadow-[var(--shadow-card)]">
                  <h2
                    id={item.id}
                    className="text-2xl font-semibold text-primary"
                  >
                    {item.title}
                  </h2>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </article>
              </AnimatedSection>
            ))}
          </div>

          <section aria-labelledby="objectifs-heading" className="space-y-10">
            <AnimatedSection className="space-y-3 max-w-2xl">
              <h2
                id="objectifs-heading"
                className="text-3xl font-bold text-primary"
              >
                Objectifs stratégiques
              </h2>
              <p className="text-muted-foreground">
                Nous orientons nos actions autour de quatre piliers qui encadrent les collaborations et renforcent les capacités de nos membres.
              </p>
            </AnimatedSection>
            <div className="grid gap-10 lg:grid-cols-[1.05fr,1fr]">
              <AnimatedSection className="relative overflow-hidden rounded-4xl bg-[#0d2a33]" delay={60}>
                <img
                  src={impactImage}
                  alt="Partenaires du RPAC sur le terrain"
                  className="h-full w-full object-cover opacity-95 transition-transform duration-700 ease-out hover:scale-[1.03]"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute top-6 left-6 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary shadow-lg">
                  Terrains RPAC
                </div>
                <div className="absolute bottom-6 right-6 rounded-2xl bg-white/90 px-5 py-4 text-sm font-semibold text-primary shadow-lg">
                  45 projets pilotes accompagnés
                </div>
              </AnimatedSection>
              <AnimatedSection delay={140} className="space-y-6 rounded-4xl border border-border/60 bg-card/95 p-8 shadow-[var(--shadow-card)]">
                <Accordion type="single" collapsible className="space-y-2">
                  {strategicObjectives.map((objective, index) => (
                    <AccordionItem key={objective.title} value={`objective-${index}`} className="border-b border-border/60">
                      <AccordionTrigger className="text-left text-base font-semibold text-primary">
                        {objective.title}
                      </AccordionTrigger>
                      <AccordionContent className="space-y-3 text-sm leading-relaxed text-muted-foreground">
                        <p>{objective.summary}</p>
                        <div className="rounded-2xl bg-muted/40 p-4">
                          <p>{objective.detail}</p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
                <Button asChild variant="outline" className="w-full justify-center">
                  <Link to="/programmes">Explorer nos programmes</Link>
                </Button>
              </AnimatedSection>
            </div>
          </section>
        <ContactCoordinates />

        </div>
      </section>
    </div>
  );
};

export default About;
