import { Link, useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { programs } from "@/data/programs";
import ContactCoordinates from "@/components/ContactCoordinates";
import { ArrowLeft } from "lucide-react";

const diplomaticDetails = [
  {
    title: "Alignement avec l’Agenda 2063",
    description:
      "L’Agenda 2063, adopté en 2015, constitue la feuille de route du continent pour bâtir « l’Afrique que nous voulons », une Afrique prospère, intégrée et influente sur la scène mondiale. RPAC s’engage à soutenir cette vision en favorisant des partenariats qui contribuent à la transformation structurelle des économies africaines, à la promotion du commerce intra-africain et à l’intégration régionale.",
  },
  {
    title: "Convergence avec la Stratégie canadienne pour l’Afrique",
    description:
      "Lancée en 2025, cette stratégie vise un « partenariat pour une prospérité et une sécurité partagées ». Elle met l’accent sur la diversification des marchés, la résilience des chaînes d’approvisionnement, la paix et la sécurité, ainsi que la promotion des droits humains. RPAC se positionne comme un acteur de liaison, facilitant la mise en œuvre de cette stratégie par des initiatives concrètes de coopération économique et diplomatique.",
  },
  {
    title: "Relations gouvernementales renforcées",
    description:
      "À travers cet axe, RPAC favorise le dialogue entre les gouvernements africains et canadien, en mettant en avant des priorités communes telles que la stabilité régionale, la croissance inclusive et la durabilité. Le réseau agit comme catalyseur pour transformer les engagements politiques en projets tangibles, contribuant ainsi à la réalisation des aspirations africaines et aux objectifs stratégiques du Canada.",
  },
];

const extraProgramDetails: Record<
  string,
  {
    title: string;
    paragraphs: string[];
    link?: { href: string; label: string };
  }[]
> = {
  "agenda-2063-en-action": [
    {
      title: "Agenda 2063 en action",
      paragraphs: [
        "Le Réseau pour le Partenariat Afrique Canada (RPAC) inscrit ses initiatives dans la vision portée par l’Agenda 2063 de l’Union africaine, qui constitue la feuille de route stratégique pour bâtir « l’Afrique que nous voulons ». À travers ses programmes, RPAC traduit cette ambition en actions concrètes, en favorisant la coopération avec le Canada et en soutenant les priorités africaines en matière de développement durable, d’intégration régionale et de prospérité partagée.",
        "Les activités menées par le réseau contribuent à renforcer les partenariats institutionnels, à promouvoir le commerce et l’innovation, et à créer des cadres de dialogue qui accompagnent la mise en œuvre des objectifs de l’Agenda 2063. RPAC agit ainsi comme catalyseur pour transformer les engagements politiques en projets opérationnels, au service d’une Afrique intégrée et influente sur la scène mondiale.",
        "Pour en savoir plus sur l’Agenda 2063, consultez le document officiel de l’Union africaine : Agenda 2063 – L’Afrique que nous voulons.",
      ],
      link: {
        href: "https://au.int/sites/default/files/documents/36204-doc-agenda2063_popular_version_fr.pdf",
        label: "Agenda 2063 – L’Afrique que nous voulons",
      },
    },
  ],
  "rencontres-sectorielles": [
    {
      title: "Rencontres sectorielles",
      paragraphs: [
        "Les Rencontres sectorielles du Réseau pour le Partenariat Afrique Canada (RPAC) constituent un dispositif institutionnel de dialogue et de coopération. Le réseau rencontre les acteurs et décideurs de différents secteurs en lien avec ses programmes, dans le but de créer des cadres de discussion structurés qui aboutissent à des actions concrètes.",
        "Ces rencontres permettent d’examiner les enjeux propres à chaque domaine, de partager les expertises et de définir des partenariats adaptés aux priorités africaines et canadiennes. Elles offrent un espace où les échanges se traduisent en initiatives tangibles, renforçant ainsi la pertinence des programmes du RPAC et leur impact sur le terrain.",
        "Par ce mécanisme, RPAC consolide son rôle de catalyseur institutionnel et favorise la mise en œuvre de solutions durables au service d’une prospérité partagée.",
      ],
    },
  ],
  "forum-economique": [
    {
      title: "Nos Forums",
      paragraphs: [
        "Le Nos Forums du Réseau pour le Partenariat Afrique Canada (RPAC) constitue une plateforme institutionnelle dédiée au dialogue et à la coopération. Le réseau organise des forums sur différentes thématiques en lien avec ses programmes, afin de favoriser l’échange d’expertise, la concertation entre parties prenantes et la formulation de solutions adaptées aux enjeux contemporains.",
        "Ces rencontres réunissent des représentants gouvernementaux, des acteurs économiques, des institutions académiques et des partenaires de la société civile autour de sujets stratégiques tels que le commerce, les investissements, l’innovation et la diplomatie économique.",
        "Par cette initiative, RPAC renforce la convergence des priorités africaines et canadiennes, tout en créant un espace structuré où les engagements se traduisent en projets concrets au service d’une prospérité partagée.",
      ],
    },
  ],
  "commerce-investissements-innovation": [
    {
      title: "Commerce, Investissements & Innovation",
      paragraphs: [
        "Commerce : En cohérence avec l’Agenda 2063 et la mise en œuvre de la Zone de libre-échange continentale africaine (ZLECAf), RPAC encourage l’expansion des échanges entre le Canada et les États africains. L’objectif est de faciliter l’accès aux marchés, de diversifier les exportations et de renforcer les chaînes de valeur régionales.",
        "Investissements : Le réseau soutient la mobilisation de capitaux responsables et durables, en favorisant les partenariats public-privé et en créant des opportunités pour les entreprises canadiennes et africaines. Ces investissements visent à stimuler la croissance inclusive, à développer les infrastructures stratégiques et à renforcer la résilience économique.",
      ],
    },
  ],
  "gouvernance-publique-institutionnelle": [
    {
      title: "Gouvernance publique & capacités institutionnelles",
      paragraphs: [
        "Le Réseau pour le Partenariat Afrique Canada (RPAC) se positionne comme une interface stratégique entre les institutions africaines et canadiennes. À travers ses programmes, le réseau favorise la mise en place de cadres de coopération qui renforcent la gouvernance publique et développent les capacités institutionnelles.",
        "En créant des espaces de dialogue et de partenariat, RPAC facilite le transfert de technologies, de savoir-faire et de bonnes pratiques, afin d’accompagner les administrations et les institutions dans la modernisation de leurs outils et méthodes de gestion. Cette démarche contribue à améliorer l’efficacité des politiques publiques, à renforcer la transparence et à consolider la résilience institutionnelle.",
        "Par son rôle de catalyseur, RPAC transforme les engagements en actions concrètes et durables, au service d’une gouvernance solide et d’institutions capables de répondre aux défis du développement et de la coopération internationale.",
      ],
    },
  ],
};

const ProgramDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const program = programs.find((item) => item.slug === slug);

  if (!program) {
    return (
      <div className="bg-background">
        <section className="flex min-h-[60vh] flex-col items-center justify-center gap-6 text-center">
          <h1 className="text-3xl font-semibold text-primary">
            Programme introuvable
          </h1>
          <p className="max-w-xl text-muted-foreground">
            Le programme recherché n’existe plus ou a été déplacé. Retournez
            vers la liste complète pour découvrir nos initiatives.
          </p>
          <div className="flex gap-4">
            <Button onClick={() => navigate(-1)} variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" />
              Retour
            </Button>
            <Button asChild>
              <Link to="/programmes">Voir tous les programmes</Link>
            </Button>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="bg-background">
      <section className="relative overflow-hidden bg-primary text-primary-foreground pt-24 pb-24 md:pt-28">
        <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 text-center md:text-left">
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            {program.title}
          </h1>
          <Button
            variant="secondary"
            className="self-center md:self-start w-fit"
            asChild
          >
            <Link to="/programmes">
              <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" />
              Retour aux programmes
            </Link>
          </Button>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-6xl space-y-14 px-6">
          <div className="grid gap-8">
            {extraProgramDetails[program.slug]?.map((card) => (
              <Card
                key={card.title}
                className="border border-border/60 shadow-[var(--shadow-card)]"
              >
                <CardHeader>
                  <CardTitle className="text-3xl font-semibold text-primary">
                    {card.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-5 text-lg leading-relaxed text-muted-foreground">
                  {card.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  {card.link && (
                    <a
                      href={card.link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center font-semibold text-lg text-primary underline-offset-4 hover:underline"
                    >
                      {card.link.label}
                    </a>
                  )}
                </CardContent>
              </Card>
            ))}

            {program.slug === "axe-diplomatique-economique" && (
              <Card className="border border-border/60 shadow-[var(--shadow-card)]">
                <CardHeader>
                  <CardTitle className="text-3xl font-semibold text-primary">
                    Axes d’alignement stratégique
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6 text-lg leading-relaxed text-muted-foreground">
                  {diplomaticDetails.map((detail) => (
                    <div
                      key={detail.title}
                      className="space-y-2 rounded-xl border border-border/60 bg-muted/30 p-5"
                    >
                      <h3 className="text-xl font-semibold text-primary">
                        {detail.title}
                      </h3>
                      <p className="text-lg leading-relaxed">
                        {detail.description}
                      </p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>
      <ContactCoordinates />
    </div>
  );
};

export default ProgramDetail;
