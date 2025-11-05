import {
  Globe2,
  LineChart,
  Handshake,
  Landmark,
  Rocket,
  Building2,
  ShieldCheck,
  Lightbulb,
  LucideIcon,
} from "lucide-react";

export interface ProgramDetail {
  slug: string;
  title: string;
  subtitle?: string;
  excerpt: string;
  description: string;
  focus: string[];
  icon: LucideIcon;
  highlights: {
    title: string;
    description: string;
  }[];
  outcomes: string[];
}

export const programs: ProgramDetail[] = [
  {
    slug: "axe-diplomatique-economique",
    title: "Axe diplomatique et économique",
    subtitle: "La stratégie canadienne pour l’Afrique",
    excerpt:
      "Co-construire des feuilles de route diplomatiques et économiques entre les institutions africaines et canadiennes.",
    description:
      "Nous accompagnons les gouvernements, agences et institutions dans la définition d’alliances durables pour soutenir les priorités africaines. L’accent est mis sur le rapprochement des agendas politiques, le partage d’expertise et la mobilisation d’investissements publics.",
    focus: ["Dialogue bilatéral", "Accords structurants", "Plaidoyer commun"],
    icon: Landmark,
    highlights: [
      {
        title: "Feuilles de route partagées",
        description:
          "Diagnostic des priorités nationales et élaboration d’axes diplomatiques conjoints Canada–Afrique.",
      },
      {
        title: "Mobilisation des décideurs",
        description:
          "Sessions confidentielles entre ministères, gouvernements locaux et organisations continentales.",
      },
    ],
    outcomes: [
      "Renforcement de la coordination politique entre les parties prenantes clés.",
      "Création de cadres de dialogue réguliers pour accélérer les partenariats.",
      "Déploiement de missions d’influence ciblées.",
    ],
  },
  {
    slug: "commerce-investissements-innovation",
    title: "Commerce, Investissements & Innovation",
    excerpt:
      "Relier investisseurs, entrepreneurs et incubateurs pour accélérer les projets à impact socio-économique.",
    description:
      "Nous orchestrons des passerelles entre capital canadien et écosystèmes africains. Les projets accompagnés sont priorisés pour leur contribution à l’emploi, à l’innovation technologique et à la transformation durable des territoires.",
    focus: ["Rencontres B2B", "Financement mixte", "Transfert technologique"],
    icon: Rocket,
    highlights: [
      {
        title: "Plateformes d’affaires",
        description:
          "Organisation de rencontres d’investissements, d’ateliers sectoriels et de roadshows ciblés.",
      },
      {
        title: "Ingénierie financière",
        description:
          "Structuration de financements mixtes et accompagnement des dossiers auprès des bailleurs.",
      },
    ],
    outcomes: [
      "Pipeline de projets prêts à l’investissement.",
      "Transfert de compétences en financement structuré.",
      "Accélération de l’innovation inclusive dans les territoires.",
    ],
  },
  {
    slug: "partenariats-strategiques",
    title: "Partenariats stratégiques",
    excerpt:
      "Co-développer des solutions avec les institutions multilatérales, les villes et les régions.",
    description:
      "Nous facilitons des alliances multi-acteurs pour aligner les priorités territoriales et mutualiser les ressources. Les coalitions animées conjuguent urbanisme durable, transformation numérique et gouvernance innovante.",
    focus: ["Coalitions publiques", "Diplomatie urbaine", "Alliance panafricaine"],
    icon: Handshake,
    highlights: [
      {
        title: "Coalitions opérationnelles",
        description:
          "Mise en relation des villes, agences publiques et bailleurs pour construire des plans d’action conjoints.",
      },
      {
        title: "Gouvernance partagée",
        description:
          "Création de comités de pilotage et d’outils de suivi d’impact pour chaque partenariat stratégique.",
      },
    ],
    outcomes: [
      "Harmonisation des feuilles de route territoriales.",
      "Partage d’expertises et mutualisation des ressources.",
      "Renforcement des capacités des institutions locales.",
    ],
  },
  {
    slug: "forum-economique",
    title: "Forum économique",
    excerpt:
      "Organiser des rendez-vous annuels connectant décideurs, société civile et entrepreneurs.",
    description:
      "Le Forum économique RPAC est l’espace privilégié pour annoncer des accords, lancer des initiatives structurantes et favoriser la coopération intercontinentale. La programmation associe plénières, ateliers sectoriels et sessions de matchmaking.",
    focus: ["Sessions plénières", "Ateliers sectoriels", "Rencontres investisseurs"],
    icon: Globe2,
    highlights: [
      {
        title: "Programmation sur-mesure",
        description:
          "Séquences thématiques construites avec les partenaires afin de refléter les priorités du moment.",
      },
      {
        title: "Accès privilégié",
        description:
          "Rencontres B2B et networking ciblé pour concrétiser les collaborations annoncées.",
      },
    ],
    outcomes: [
      "Signature d’accords multilatéraux et bilatéraux.",
      "Visibilité renforcée pour les initiatives territoriales.",
      "Création de communautés sectorielles pérennes.",
    ],
  },
  {
    slug: "rencontres-sectorielles",
    title: "Rencontres sectorielles",
    excerpt:
      "Mettre en lumière les secteurs clés : agriculture durable, santé, énergie, numérique et industries créatives.",
    description:
      "Ces rencontres ciblées combinent visites terrain, démonstrations et partage d’expertise. Elles permettent aux acteurs locaux et internationaux d’identifier des synergies d’investissement et d’innovation.",
    focus: ["Visites terrain", "Clusters sectoriels", "Partage d’expertise"],
    icon: Building2,
    highlights: [
      {
        title: "Immersions locales",
        description:
          "Découvertes des écosystèmes territoriaux et de leurs projets phares avec les parties prenantes.",
      },
      {
        title: "Communautés métiers",
        description:
          "Animation de réseaux thématiques pour capitaliser sur les retours d’expérience.",
      },
    ],
    outcomes: [
      "Identification de projets pilotes et d’alliances public-privé.",
      "Valorisation des initiatives locales.",
      "Renforcement du transfert de connaissances sectorielles.",
    ],
  },
  {
    slug: "gouvernance-publique-institutionnelle",
    title: "Gouvernance publique & capacités institutionnelles",
    excerpt:
      "Renforcer les administrations publiques via la formation, le mentorat et l’innovation civique.",
    description:
      "Nous accompagnons les institutions dans la modernisation des services publics, la formation des cadres et l’ouverture des données. Les parcours sont conçus sur mesure avec des pairs canadiens et africains.",
    focus: ["Formations ciblées", "Coaching institutionnel", "Open data"],
    icon: ShieldCheck,
    highlights: [
      {
        title: "Parcours de formation",
        description:
          "Modules hybrides mêlant ateliers pratiques, mentorat et immersion dans les meilleures pratiques internationales.",
      },
      {
        title: "Innovation civique",
        description:
          "Programmes open data et laboratoires citoyens pour coconstruire des services avec les usagers.",
      },
    ],
    outcomes: [
      "Professionnalisation des équipes publiques.",
      "Amélioration de la qualité des services délivrés.",
      "Transparence accrue et engagement citoyen.",
    ],
  },
  {
    slug: "droits-inclusion-gouvernance-democratique",
    title: "Droits, inclusion & gouvernance démocratique",
    excerpt:
      "Promouvoir l’inclusion sociale, l’égalité des genres et le dialogue citoyen dans les processus décisionnels.",
    description:
      "Ce programme soutient les organisations de la société civile, les réseaux de jeunes et les coalitions de femmes leaders afin d’amplifier leur impact dans les espaces de gouvernance.",
    focus: ["Plateformes citoyennes", "Femmes leaders", "Participation des jeunes"],
    icon: Lightbulb,
    highlights: [
      {
        title: "Leadership inclusif",
        description:
          "Mentorat, renforcement des capacités et visibilité accrue pour les voix émergentes.",
      },
      {
        title: "Dialogue multi-acteurs",
        description:
          "Organisation de consultations et hackathons citoyens pour co-construire les politiques publiques.",
      },
    ],
    outcomes: [
      "Participation accrue des citoyens aux décisions publiques.",
      "Renforcement des organisations communautaires.",
      "Projets pilotes sur l’égalité des genres et l’inclusion.",
    ],
  },
  {
    slug: "agenda-2063-en-action",
    title: "Agenda 2063 en Action",
    excerpt:
      "Traduire les ambitions de l’Union africaine en projets opérationnels et partenariats mesurables.",
    description:
      "Nous transformons les cadres stratégiques continentaux en projets concrets, en finançant des initiatives pilotes et en accompagnant les équipes locales dans le suivi d’impact.",
    focus: ["Suivi d’impact", "Laboratoires d’idées", "Coalitions régionales"],
    icon: LineChart,
    highlights: [
      {
        title: "Laboratoires 2063",
        description:
          "Groupes de travail régionaux qui transforment les priorités du continent en programmes d’investissement.",
      },
      {
        title: "Mesure d’impact",
        description:
          "Outils de suivi-évaluation pour documenter les résultats et répliquer les projets réussis.",
      },
    ],
    outcomes: [
      "Accélération de projets alignés sur l’Agenda 2063.",
      "Capitalisation des bonnes pratiques inter-régions.",
      "Renforcement des coalitions régionales thématiques.",
    ],
  },
];
