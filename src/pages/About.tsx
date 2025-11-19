import { ReactNode } from "react";
import useInView from "@/hooks/useInView";
import { cn } from "@/lib/utils";
import ContactCoordinates from "@/components/ContactCoordinates";

const identityParagraphs = [
  "Le Réseau pour le Partenariat Afrique-Canada (RPAC) est une organisation à but non lucratif qui œuvre au renforcement des liens stratégiques entre le Canada et l’Afrique.",
  "Reconnu par des institutions des deux régions, le RPAC agit comme catalyseur de projets innovants, porteurs de développement durable, de transformation sociale et de coopération équitable.",
  "Fondé sur les principes de réciprocité et de co-construction, il accompagne les acteurs publics, privés et communautaires dans la mise en œuvre d’initiatives concrètes en matière d’investissement, d’entrepreneuriat, d’éducation et de coopération institutionnelle.",
  "Le RPAC facilite et promeut l’augmentation des investissements et du commerce durable entre les secteurs canadiens et africains, en veillant à ce que ces échanges bénéficient à l’ensemble des parties prenantes et soient alignés sur les principes de la Responsabilité sociale des entreprises (RSE).",
  "En phase avec l’Agenda 2063 de l’Union africaine et la Stratégie canadienne pour l’Afrique, le RPAC incarne une vision ambitieuse : celle d’un partenariat transformateur, fondé sur la création de valeurs partagées.",
];

const missionParagraphs = [
  "Le Réseau pour le Partenariat Afrique-Canada (RPAC) a pour mission de promouvoir une coopération structurée, durable et mutuellement bénéfique entre les écosystèmes africains et canadiens.",
  "Il agit comme un catalyseur de partenariats stratégiques en mobilisant les institutions, les communautés, la diaspora et les acteurs économiques autour d’enjeux communs.",
  "À travers ses actions, le RPAC vise à contribuer à la mise en œuvre de cadres de coopération alignés sur les priorités africaines et canadiennes, notamment l’Agenda 2063 de l’Union africaine et la Stratégie canadienne pour l’Afrique.",
];

const missionFocus = [
  "Infrastructures",
  "Agriculture et agroalimentaire",
  "Fabrication industrielle",
  "Soins de santé",
  "Énergie et mines",
  "Nouvelles technologies d’information et de communication (NTIC)",
  "Éducation",
  "Produits de consommation",
  "Investissements responsables et gouvernance",
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
      <section className="relative overflow-hidden bg-primary text-primary-foreground pt-24 md:pt-28 pb-24">
        <AnimatedSection className="mx-auto max-w-5xl space-y-6 px-6 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold max-w-4xl leading-tight mx-auto md:mx-0">
            À propos
          </h1>
        </AnimatedSection>
      </section>

      <section className="py-24" aria-labelledby="presentation-heading">
        <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6">
          <AnimatedSection className="space-y-6">
            <h2 id="presentation-heading" className="text-3xl font-bold text-primary">
              Qui sommes-nous ?
            </h2>
            <div className="space-y-4 text-lg leading-relaxed text-muted-foreground sm:text-xl sm:leading-relaxed">
              {identityParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={100} className="space-y-6">
            <h3 className="text-3xl font-bold text-primary">Notre mission</h3>
            <div className="space-y-4 text-lg leading-relaxed text-muted-foreground sm:text-xl sm:leading-relaxed">
              {missionParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="rounded-3xl border border-neutral-300 bg-neutral-50 p-8">
              <h4 className="text-4xl font-semibold text-primary">
                Enjeux prioritaires
              </h4>
              <div className="mt-10 grid gap-8 sm:grid-cols-2">
                {[missionFocus.slice(0, Math.ceil(missionFocus.length / 2)), missionFocus.slice(Math.ceil(missionFocus.length / 2))].map((column, index) => (
                  <ul key={`mission-focus-column-${index}`} className="space-y-4">
                    {column.map((focus) => (
                      <li key={focus} className="flex items-start gap-3 text-xl text-muted-foreground leading-snug">
                        <span className="mt-2 h-3 w-3 rounded-full bg-accent" aria-hidden="true" />
                        <span>{focus}</span>
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <ContactCoordinates />
        </div>
      </section>
    </div>
  );
};

export default About;
