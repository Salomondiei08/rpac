import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import ContactCoordinates from "@/components/ContactCoordinates";
import AnimatedSection from "@/components/AnimatedSection";

const resourceHighlights = [
  {
    title: "Notes stratégiques",
    description:
      "Analyses de contexte, études sectorielles et recommandations politiques pour éclairer vos décisions.",
    points: [
      "Veille institutionnelle Canada – Afrique",
      "Analyses sectorielles par région",
      "Synthèses opérationnelles pour décideurs",
    ],
  },
  {
    title: "Guides opérationnels",
    description:
      "Outils pratiques pour structurer vos projets : cadres logiques, matrices de risques et modèles de gouvernance.",
    points: [
      "Boîtes à outils de co-développement",
      "Matrices de risques et gouvernance",
      "Checklists de suivi-évaluation",
    ],
  },
  {
    title: "Réseaux & communautés",
    description:
      "Accès à nos clubs de partenaires, espaces d’échanges sectoriels et événements exclusifs.",
    points: [
      "Rencontres trimestrielles thématiques",
      "Webinaires experts & retours d’expérience",
      "Annuaire qualifié des organisations membres",
    ],
  },
];

const publicationCollections = [
  {
    title: "Notes stratégiques",
    description:
      "Analyses de contexte, études sectorielles et recommandations politiques pour éclairer vos décisions.",
    resources: [
      {
        title: "Rapport d’impact 2023",
        url: "https://www.un.org/sites/un2.un.org/files/2023-05_sdg-progress-report_special_edition.pdf",
        meta: "PDF • 4,2 Mo",
      },
      {
        title: "Note stratégique : diplomatie économique",
        url: "https://www.oecd.org/dev/EMnet/EMnet-Business-Insight-Investing-in-Africa-after-COVID-19.pdf",
        meta: "PDF • 2,1 Mo",
      },
    ],
  },
  {
    title: "Guides opérationnels",
    description:
      "Outils pratiques pour structurer vos projets : cadres logiques, matrices de risques et modèles de gouvernance.",
    resources: [
      {
        title: "Guide d’adhésion des membres",
        url: "https://www.afdb.org/sites/default/files/documents/publications/aeb_volume_12_issue_4.pdf",
        meta: "PDF • 1,6 Mo",
      },
      {
        title: "Kit de gouvernance partagée",
        url: "https://www.undp.org/sites/g/files/zskgke326/files/publications/UNDP-Governance-Toolkit.pdf",
        meta: "PDF • 3,4 Mo",
      },
    ],
  },
  {
    title: "Réseaux & communautés",
    description:
      "Accès à nos clubs de partenaires, espaces d’échanges sectoriels et événements exclusifs.",
    resources: [
      {
        title: "Plateforme collaborative RPAC",
        url: "https://rpac.org",
        meta: "Portail en ligne",
      },
      {
        title: "Annuaire des partenaires",
        url: "https://www.au-partenariats.org",
        meta: "PDF • 2,9 Mo",
      },
    ],
  },
];

const Resources = () => {
  return (
    <div className="bg-background">
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-primary/80 text-primary-foreground pt-24 md:pt-28 pb-24">
        <AnimatedSection className="mx-auto max-w-5xl px-6 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">Ressources</h1>
        </AnimatedSection>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-6xl space-y-12 px-6">
          <AnimatedSection className="space-y-4 max-w-3xl">
            <Badge variant="secondary" className="bg-accent/10 text-accent uppercase tracking-[0.3em]">
              Nos ressources
            </Badge>
            <h2 className="text-3xl font-bold text-primary">Nos principales ressources</h2>
            <p className="text-muted-foreground leading-relaxed">
              Chaque ressource s’appuie sur notre réseau d’experts, de collectivités et de partenaires
              économiques pour transformer les ambitions en résultats mesurables.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={120} className="grid gap-8 md:grid-cols-3">
            {resourceHighlights.map((highlight) => (
              <Card
                key={highlight.title}
                className="border border-border/60 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-shadow duration-300"
              >
                <CardHeader>
                  <CardTitle className="text-xl text-primary">
                    {highlight.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {highlight.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2 text-sm text-muted-foreground/90">
                    {highlight.points.map((point) => (
                      <li key={point} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-muted/20 py-24">
        <div className="mx-auto max-w-6xl space-y-12 px-6">
          <AnimatedSection className="space-y-4 max-w-3xl">
            <Badge variant="secondary" className="bg-accent/10 text-accent uppercase tracking-[0.3em]">
              Publications & rapports
            </Badge>
            <h2 className="text-3xl font-bold text-primary">Téléchargez nos publications</h2>
            <p className="text-muted-foreground leading-relaxed">
              Retrouver l’ensemble des notes, guides et rapports produits avec nos partenaires pour
              documenter l’action et partager les bonnes pratiques.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={120} className="grid gap-8 md:grid-cols-3">
            {publicationCollections.map((collection) => (
              <Card
                key={collection.title}
                className="border border-border/60 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-shadow duration-300"
              >
                <CardHeader>
                  <CardTitle className="text-lg text-primary">{collection.title}</CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {collection.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3 text-sm text-muted-foreground/90">
                    {collection.resources.map((resource) => (
                      <li key={resource.title} className="space-y-2 rounded-2xl bg-white/60 p-4 shadow-sm">
                        <p className="font-semibold text-primary">{resource.title}</p>
                        <div className="flex flex-wrap items-center justify-between gap-2 text-xs uppercase tracking-wide text-muted-foreground/70">
                          <span>{resource.meta}</span>
                          <Button variant="outline" size="sm" asChild>
                            <a
                              href={resource.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              download={resource.meta.includes("PDF")}
                              className="inline-flex items-center gap-2"
                            >
                              <Download className="h-4 w-4" />
                              Télécharger
                            </a>
                          </Button>
                        </div>
                      </li>
                    ))}
                  </ul>
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
