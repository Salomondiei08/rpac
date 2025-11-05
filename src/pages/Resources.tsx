import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ContactCoordinates from "@/components/ContactCoordinates";
import AnimatedSection from "@/components/AnimatedSection";

const resourceCollections = [
  {
    title: "Notes stratégiques",
    description:
      "Analyses de contexte, études sectorielles et recommandations politiques pour éclairer vos décisions.",
    items: [
      "Panorama des relations Canada-Afrique",
      "Cartographie des filières prioritaires",
      "Études d’impact et retours d’expérience",
    ],
  },
  {
    title: "Guides opérationnels",
    description:
      "Outils pratiques pour structurer vos projets : cadres logiques, matrices de risques et modèles de gouvernance.",
    items: [
      "Boîte à outils de co-développement",
      "Modèles d’accords de partenariat",
      "Checklist de suivi et évaluation",
    ],
  },
  {
    title: "Réseaux & communautés",
    description:
      "Accès à nos clubs de partenaires, espaces d’échanges sectoriels et événements exclusifs.",
    items: [
      "Rencontres trimestrielles",
      "Webinaires thématiques",
      "Plateformes collaboratives",
    ],
  },
];

const Resources = () => {
  return (
    <div className="bg-background">
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-primary/80 text-primary-foreground mt-[-80px] md:mt-[-96px] pt-24 md:pt-28 pb-24">
        <AnimatedSection className="mx-auto max-w-5xl px-6 space-y-6 text-center md:text-left">
          <Badge
            variant="secondary"
            className="bg-white/15 text-primary-foreground mx-auto md:mx-0"
          >
            Ressources
          </Badge>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold max-w-4xl leading-tight mx-auto md:mx-0">
            Capitaliser sur l’expertise du réseau pour accélérer vos projets.
          </h1>
          <p className="text-base sm:text-lg lg:text-xl max-w-3xl text-primary-foreground/90 mx-auto md:mx-0">
            Explorez nos publications, outils pratiques et communautés d’échange dédiées au
            co-développement entre le Canada et l’Afrique.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-3 text-sm text-primary-foreground/70">
            <span className="inline-flex items-center gap-2">
              <Badge variant="secondary" className="bg-white/10">
                Publications
              </Badge>
            </span>
            <span className="inline-flex items-center gap-2">
              <Badge variant="secondary" className="bg-white/10">
                Outils métiers
              </Badge>
            </span>
            <span className="inline-flex items-center gap-2">
              <Badge variant="secondary" className="bg-white/10">
                Communautés
              </Badge>
            </span>
          </div>
        </AnimatedSection>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-6xl space-y-12 px-6">
          <AnimatedSection className="space-y-4 max-w-3xl">
            <h2 className="text-3xl font-bold text-primary">
              Nos principales ressources
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Chaque ressource est conçue avec nos partenaires terrain pour transformer les ambitions
              en feuilles de route concrètes et mesurables.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={120} className="grid gap-8 md:grid-cols-3">
            {resourceCollections.map((collection) => (
              <Card
                key={collection.title}
                className="border border-border/60 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-shadow duration-300"
              >
                <CardHeader>
                  <CardTitle className="text-xl text-primary">
                    {collection.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {collection.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2 text-sm text-muted-foreground/90">
                    {collection.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant="ghost"
                    className="px-0 text-primary hover:text-primary/90 hover:bg-transparent"
                  >
                    Consulter <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </AnimatedSection>
        </div>
      </section>

      <ContactCoordinates />
    </div>
  );
};

export default Resources;
