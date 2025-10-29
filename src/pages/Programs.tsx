import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const programs = [
  {
    title: "Axe diplomatique et économique",
    subtitle: "La stratégie canadienne pour l’Afrique",
    description:
      "Accompagner les gouvernements et institutions dans la co-construction de feuilles de route stratégiques pour un partenariat durable.",
    focus: ["Dialogue bilatéral", "Accords structurants", "Plaidoyer commun"],
  },
  {
    title: "Commerce, Investissements & Innovation",
    description:
      "Mettre en réseau investisseurs, entrepreneurs et incubateurs pour accélérer les projets porteurs d’impact socio-économique.",
    focus: ["Rencontres B2B", "Financement mixte", "Transfert technologique"],
  },
  {
    title: "Partenariats stratégiques",
    description:
      "Co-développer des solutions avec les institutions multilatérales, les villes et les régions afin d’aligner les priorités territoriales.",
    focus: ["Coalitions publiques", "Diplomatie urbaine", "Alliance panafricaine"],
  },
  {
    title: "Forum économique",
    description:
      "Organiser des rendez-vous annuels pour connecter décideurs économiques, sociétés civiles et entrepreneurs des deux continents.",
    focus: ["Sessions plénières", "Ateliers sectoriels", "Rencontres investisseurs"],
  },
  {
    title: "Rencontres sectorielles",
    description:
      "Mettre en lumière des secteurs clés : agriculture durable, santé, énergie, numérique et industries créatives.",
    focus: ["Visites terrain", "Clusters sectoriels", "Partage d’expertise"],
  },
  {
    title: "Gouvernance publique & capacités institutionnelles",
    description:
      "Renforcer les administrations publiques à travers la formation, le mentorat et l’open innovation civique.",
    focus: ["Formations ciblées", "Coaching institutionnel", "Open data"],
  },
  {
    title: "Droits, inclusion & gouvernance démocratique",
    description:
      "Promouvoir l’inclusion sociale, l’égalité des genres et le dialogue citoyen dans les processus décisionnels.",
    focus: ["Plateformes citoyennes", "Femmes leaders", "Participation des jeunes"],
  },
  {
    title: "Agenda 2063 en Action",
    description:
      "Traduire les ambitions de l’Union africaine en projets opérationnels et partenariats mesurables.",
    focus: ["Suivi d’impact", "Laboratoires d’idées", "Coalitions régionales"],
  },
];

const Programs = () => {
  return (
    <div className="bg-background">
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-primary/80 text-primary-foreground mt-[-80px] md:mt-[-96px] pt-24 md:pt-28 pb-24">
        <div className="container mx-auto px-4 space-y-6 text-center md:text-left">
          <Badge
            variant="secondary"
            className="bg-white/15 text-primary-foreground mx-auto md:mx-0"
          >
            Nos activités
          </Badge>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold max-w-4xl leading-tight mx-auto md:mx-0">
            Nos programmes structurent un réseau d’actions concrètes entre le
            Canada et l’Afrique.
          </h1>
          <p className="text-base sm:text-lg lg:text-xl max-w-3xl text-primary-foreground/90 mx-auto md:mx-0">
            Huit axes stratégiques qui mobilisent experts, institutions et
            entrepreneurs pour transformer les ambitions en résultats tangibles.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-3 text-sm text-primary-foreground/70">
            <span className="inline-flex items-center gap-2">
              <Badge variant="secondary" className="bg-white/10">
                Diplomatie économique
              </Badge>
            </span>
            <span className="inline-flex items-center gap-2">
              <Badge variant="secondary" className="bg-white/10">
                Innovation et investissement
              </Badge>
            </span>
            <span className="inline-flex items-center gap-2">
              <Badge variant="secondary" className="bg-white/10">
                Gouvernance inclusive
              </Badge>
            </span>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 space-y-10">
        <header className="space-y-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-primary">Nos programmes</h2>
          <p className="text-muted-foreground">
            Chaque programme s’appuie sur un comité de pilotage et un réseau de
            partenaires présents sur le terrain pour accompagner la conception,
            la mise en œuvre et le suivi d’impact des projets.
          </p>
        </header>

        <div className="grid gap-8 md:grid-cols-2">
          {programs.map((program) => (
            <Card
              key={program.title}
              className="border border-border/60 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-shadow duration-300"
            >
              <CardHeader>
                <CardTitle className="text-xl text-primary">
                  {program.title}
                </CardTitle>
                {program.subtitle && (
                  <p className="text-sm text-accent font-medium">
                    {program.subtitle}
                  </p>
                )}
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {program.description}
                </p>
                <ul className="flex flex-wrap gap-2">
                  {program.focus.map((item) => (
                    <li key={item}>
                      <Badge variant="outline" className="border-accent text-accent">
                        {item}
                      </Badge>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Programs;
