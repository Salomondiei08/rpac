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
      <section className="relative overflow-hidden bg-[#1CC47B] text-white pt-24 md:pt-28 pb-24">
        <AnimatedSection className="mx-auto max-w-5xl space-y-6 px-6 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold max-w-4xl leading-tight mx-auto md:mx-0">
            À propos
          </h1>
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

        <ContactCoordinates />

        </div>
      </section>
    </div>
  );
};

export default About;
