import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ContactCoordinates from "@/components/ContactCoordinates";
import AnimatedSection from "@/components/AnimatedSection";

const partnersHighlights = [
  {
    title: "Institutions publiques",
    description:
      "Ministères, agences de développement et villes jumelées qui co-construisent des feuilles de route partagées.",
    items: ["Diplomatie économique", "Programmes bilatéraux", "Innovation publique"],
  },
  {
    title: "Organisations internationales",
    description:
      "Banques de développement, agences multilatérales et organisations régionales impliquées dans nos coalitions.",
    items: ["Mobilisation de financements", "Partage d’expertise", "Plateformes panafricaines"],
  },
  {
    title: "Entreprises & incubateurs",
    description:
      "Groupes privés, startups et clusters sectoriels engagés dans des projets structurants à impact durable.",
    items: ["Commerce & investissement", "Transfert technologique", "Accélération de projets"],
  },
];

const partnershipServices = [
  {
    title: "Cartographie des opportunités",
    description:
      "Analyse des besoins prioritaires et identification des partenaires complémentaires sur les deux continents.",
  },
  {
    title: "Ingénierie de partenariats",
    description:
      "Structuration juridique, gouvernance et modèle financier de chaque collaboration pour sécuriser l’impact.",
  },
  {
    title: "Pilotage & suivi d’impact",
    description:
      "Tableaux de bord, évaluations et partage de résultats pour garantir la transparence et l’amélioration continue.",
  },
];

const Partners = () => {
  return (
    <div className="bg-background">
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-primary/80 text-primary-foreground pt-24 md:pt-28 pb-24">
        <AnimatedSection className="mx-auto max-w-5xl px-6 space-y-6 text-center md:text-left">
          <Badge
            variant="secondary"
            className="bg-white/15 text-primary-foreground mx-auto md:mx-0"
          >
            Partenaires
          </Badge>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold max-w-4xl leading-tight mx-auto md:mx-0">
            Construire des alliances durables entre acteurs canadiens et africains.
          </h1>
          <p className="text-base sm:text-lg lg:text-xl max-w-3xl text-primary-foreground/90 mx-auto md:mx-0">
            Nous facilitons des partenariats stratégiques qui réunissent institutions,
            entreprises et société civile autour de projets porteurs d’impact.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-3 text-sm text-primary-foreground/70">
            <span className="inline-flex items-center gap-2">
              <Badge variant="secondary" className="bg-white/10">
                Coopération multi-acteurs
              </Badge>
            </span>
            <span className="inline-flex items-center gap-2">
              <Badge variant="secondary" className="bg-white/10">
                Financement durable
              </Badge>
            </span>
            <span className="inline-flex items-center gap-2">
              <Badge variant="secondary" className="bg-white/10">
                Diplomatie économique
              </Badge>
            </span>
          </div>
        </AnimatedSection>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-6xl space-y-12 px-6">
          <AnimatedSection className="space-y-4 max-w-3xl">
            <h2 className="text-3xl font-bold text-primary">Nos partenaires clés</h2>
            <p className="text-muted-foreground leading-relaxed">
              Le RPAC s’appuie sur un réseau structuré de partenaires qui partagent nos priorités
              en matière de diplomatie économique, d’innovation et de gouvernance inclusive.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={120} className="grid gap-8 md:grid-cols-3">
            {partnersHighlights.map((highlight) => (
              <Card
                key={highlight.title}
                className="border border-border/60 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-shadow duration-300"
              >
                <CardHeader>
                  <CardTitle className="text-xl text-primary">{highlight.title}</CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {highlight.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground/90">
                    {highlight.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </AnimatedSection>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-6xl space-y-12 px-6">
          <AnimatedSection className="space-y-4 max-w-3xl">
            <h2 className="text-3xl font-bold text-primary">
              Comment nous accompagnons vos partenariats
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Du cadrage stratégique à la mise en œuvre opérationnelle, notre équipe pilote chaque
              étape afin de sécuriser la création de valeur partagée.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={120} className="grid gap-8 md:grid-cols-3">
            {partnershipServices.map((service) => (
              <Card
                key={service.title}
                className="border border-border/60 bg-muted/40 shadow-none"
              >
                <CardHeader>
                  <CardTitle className="text-lg text-primary">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
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

export default Partners;
