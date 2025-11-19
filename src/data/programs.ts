import {
  Globe2,
  LineChart,
  Landmark,
  Rocket,
  Building2,
  ShieldCheck,
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
    slug: "agenda-2063-en-action",
    title: "Agenda 2063 en Action",
    excerpt:
      "Le Réseau milite en faveur de la transformation des grandes ambitions de l’Agenda 2063 en dynamiques concrètes, portées par les talents, les idées et les alliances entre l’Afrique et le Canada.",
    description:
      "Le RPAC inscrit ses initiatives dans la vision portée par l’Agenda 2063 de l’Union africaine, feuille de route stratégique pour bâtir « l’Afrique que nous voulons ». En favorisant la coopération avec le Canada et en soutenant les priorités africaines en matière de développement durable, d’intégration régionale et de prospérité partagée, le réseau agit comme un catalyseur pour faire passer les engagements politiques à l’échelle opérationnelle.",
    focus: ["Actions pour une Afrique prospère", "Suivi des objectifs 2063", "Diaspora africaine"],
    icon: LineChart,
    highlights: [
      {
        title: "Programmes alignés",
        description:
          "Les activités du réseau contribuent à renforcer les partenariats institutionnels, promouvoir le commerce et l’innovation, et créer des cadres de dialogue qui accompagnent la mise en œuvre des priorités de l’Agenda 2063.",
      },
      {
        title: "Sensibilisation Agenda 2063",
        description:
          "Le RPAC mobilise experts et institutions pour démontrer comment les visions continentales peuvent devenir des projets porteurs d’impact concret et d’intégration régionale.",
      },
    ],
    outcomes: [
      "Transformation des engagements politiques en initiatives opérationnelles.",
      "Renforcement des partenariats institutionnels centrés sur l’Agenda 2063.",
      "Mise en avant des talents et idées partagés entre l’Afrique et le Canada.",
    ],
  },
  {
    slug: "axe-diplomatique-economique",
    title: "Axe diplomatique et économique",
    subtitle: "La stratégie canadienne pour l’Afrique",
    excerpt:
      "Nous créons des passerelles entre décideurs africains et canadiens pour renforcer le dialogue politique et économique, et soutenir des partenariats publics-privés alignés sur l’Agenda 2063 et la Stratégie canadienne pour l’Afrique.",
    description:
      "Le Réseau pour le Partenariat Afrique Canada (RPAC) inscrit son action dans une dynamique qui dépasse les intentions générales pour s’ancrer dans des cadres stratégiques concrets.",
    focus: ["Dialogue politique", "Stratégie Canada-Afrique", "Partenariats publics-privés"],
    icon: Landmark,
    highlights: [
      {
        title: "Alignement stratégique",
        description:
          "Accompagnement des acteurs autour des priorités de l’Agenda 2063 et de la Stratégie canadienne pour l’Afrique pour favoriser l’intégration régionale et la diversification des marchés.",
      },
      {
        title: "Relations gouvernementales renforcées",
        description:
          "Organisation de dialogues récurrents entre institutions africaines et canadiennes afin de transformer les engagements politiques en projets concrets au service de la stabilité et de la croissance.",
      },
    ],
    outcomes: [
      "Cadres diplomatiques mieux coordonnés et orientés résultats.",
      "Partenariats publics-privés alignés sur les visions africaines et canadiennes.",
      "Suivi d’engagements partagés autour de la paix, de la sécurité et de la prospérité.",
    ],
  },
  {
    slug: "commerce-investissements-innovation",
    title: "Commerce, Investissements & Innovation",
    excerpt:
      "Nous connectons les entrepreneurs, investisseurs et institutions pour stimuler des échanges économiques durables entre l’Afrique et le Canada.",
    description:
      "Le Réseau pour le Partenariat Afrique Canada (RPAC) fait du commerce, des investissements et de l’innovation des piliers essentiels de son action.",
    focus: ["Innovation locale", "Partenariats stratégiques", "Commerce durable"],
    icon: Rocket,
    highlights: [
      {
        title: "Commerce",
        description:
          "En cohérence avec l’Agenda 2063 et la ZLECAf, le RPAC encourage l’expansion des échanges entre le Canada et les États africains pour faciliter l’accès aux marchés, diversifier les exportations et consolider les chaînes de valeur régionales.",
      },
      {
        title: "Investissements",
        description:
          "Le réseau mobilise des capitaux responsables et durables en favorisant les partenariats public-privé. Ces investissements créent des opportunités pour les entreprises canadiennes et africaines, stimulent la croissance inclusive, développent les infrastructures stratégiques et renforcent la résilience économique.",
      },
    ],
    outcomes: [
      "Échanges économiques durables et diversifiés.",
      "Projets structurants porteurs d’impact pour les territoires.",
      "Innovation partagée au service d’un développement inclusif.",
    ],
  },
  {
    slug: "forum-economique",
    title: "Nos Forums",
    excerpt:
      "Le Réseau organise des forums politiques, économiques, culturels et sociaux pour renforcer le dialogue entre l’Afrique et le Canada.",
    description:
      "Le Nos Forums du RPAC constitue une plateforme institutionnelle dédiée au dialogue et à la coopération. Il réunit décideurs publics, acteurs économiques, institutions académiques et partenaires de la société civile pour imaginer des solutions adaptées autour du commerce, des investissements, de l’innovation et de la diplomatie économique.",
    focus: ["Forums politiques et économiques", "Experts canadiens et africains", "Solutions stratégiques"],
    icon: Globe2,
    highlights: [
      {
        title: "Plateforme institutionnelle",
        description:
          "Une programmation articulant plénières, ateliers sectoriels et sessions de mise en relation pour faire converger les priorités africaines et canadiennes.",
      },
      {
        title: "Solutions partagées",
        description:
          "Les forums favorisent la confrontation des idées, la consultation des parties prenantes et la traduction des engagements en projets concrets.",
      },
    ],
    outcomes: [
      "Dialogue structuré entre institutions africaines et canadiennes.",
      "Élaboration de feuilles de route partagées par secteur.",
      "Annonce d’initiatives et partenariats porteurs d’impact.",
    ],
  },
  {
    slug: "rencontres-sectorielles",
    title: "Rencontres sectorielles",
    excerpt:
      "Le Réseau initie des rencontres ciblées entre acteurs africains et canadiens dans les secteurs stratégiques tels que l’agriculture, la science, la santé, les mines, l’énergie, l’éducation, les technologies, la culture et les industries créatives.",
    description:
      "Ce dispositif institutionnel de dialogue et de coopération crée des cadres de discussion structurés débouchant sur des actions concrètes. Chaque rencontre est conçue comme un levier d’innovation, de coopération et de transformation, aligné sur les priorités partagées.",
    focus: ["Dialogue expert·e·s", "Partenariats sectoriels", "Solutions concrètes"],
    icon: Building2,
    highlights: [
      {
        title: "Espaces dédiés",
        description:
          "Rencontres animées par des expert·e·s des deux régions pour partager visions stratégiques, retours d’expérience et bonnes pratiques.",
      },
      {
        title: "Solutions adaptées",
        description:
          "Les échanges débouchent sur des initiatives tangibles, renforçant la pertinence des programmes RPAC sur le terrain.",
      },
    ],
    outcomes: [
      "Partenariats alignés sur les priorités africaines et canadiennes.",
      "Émergence d’actions concrètes par secteur stratégique.",
      "Renforcement des communautés d’experts transcontinentales.",
    ],
  },
  {
    slug: "gouvernance-publique-institutionnelle",
    title: "Gouvernance publique & capacités institutionnelles",
    excerpt:
      "Le RPAC accompagne le renforcement des institutions africaines en mobilisant des expert·e·s des deux régions.",
    description:
      "Ce programme cible les enjeux de gouvernance moderne : transformation administrative, transparence, leadership public, décentralisation, justice et innovation institutionnelle. En créant des espaces de dialogue et de partenariat, il favorise le transfert de technologies, de savoir-faire et de bonnes pratiques au bénéfice de services publics plus efficaces.",
    focus: ["Transformation administrative", "Transparence", "Innovation institutionnelle"],
    icon: ShieldCheck,
    highlights: [
      {
        title: "Renforcement des compétences",
        description:
          "Diagnostics, formations ciblées et mentorats entre pairs pour renforcer les capacités stratégiques des acteurs publics, universitaires et communautaires.",
      },
      {
        title: "Transfert de savoir-faire",
        description:
          "Mise en relation d’expert·e·s africains et canadiens pour moderniser les outils, méthodes de gestion et cadres de coopération institutionnelle.",
      },
    ],
    outcomes: [
      "Institutions plus résilientes et proches des citoyens.",
      "Services publics modernisés et transparents.",
      "Partenariats durables entre administrations africaines et canadiennes.",
    ],
  },
];
