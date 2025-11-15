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

const sections = [
  {
    id: "rapports",
    title: "Rapports",
    description: "Études annuelles, analyses d’impact et bilans thématiques produits avec nos partenaires.",
    resources: [
      {
        title: "Rapport d’impact 2023",
        meta: "PDF • 4,2 Mo",
        url: "https://www.un.org/sites/un2.un.org/files/2023-05_sdg-progress-report_special_edition.pdf",
      },
      {
        title: "Bilan diplomatie économique",
        meta: "PDF • 3,1 Mo",
        url: "https://www.oecd.org/dev/EMnet/EMnet-Business-Insight-Investing-in-Africa-after-COVID-19.pdf",
      },
    ],
  },
  {
    id: "publications",
    title: "Publications",
    description: "Notes de synthèse, dossiers thématiques et guides pratiques pour accompagner vos projets.",
    resources: [
      {
        title: "Guide d’adhésion des membres",
        meta: "PDF • 1,6 Mo",
        url: "https://www.afdb.org/sites/default/files/documents/publications/aeb_volume_12_issue_4.pdf",
      },
      {
        title: "Kit de gouvernance partagée",
        meta: "PDF • 3,4 Mo",
        url: "https://www.undp.org/sites/g/files/zskgke326/files/publications/UNDP-Governance-Toolkit.pdf",
      },
    ],
  },
  {
    id: "communiques",
    title: "Communiqués",
    description: "Annonces officielles, déclarations conjointes et informations presse du réseau RPAC.",
    resources: [
      {
        title: "Communiqué de lancement",
        meta: "PDF • 1,2 Mo",
        url: "https://rpac.org/communique-lancement.pdf",
      },
      {
        title: "Annonce partenaires",
        meta: "PDF • 1,8 Mo",
        url: "https://rpac.org/annonce-partenaires.pdf",
      },
    ],
  },
];

const Resources = () => {
  return (
    <div className="bg-background">
      <section className="relative overflow-hidden bg-primary text-primary-foreground pt-24 md:pt-28 pb-24">
        <AnimatedSection className="mx-auto max-w-5xl px-6 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">Ressources</h1>
        </AnimatedSection>
      </section>

      {sections.map((section) => (
        <section key={section.id} className="py-16">
          <div className="mx-auto max-w-6xl space-y-10 px-6">
            <AnimatedSection className="space-y-3 text-center md:text-left">
              <h2 className="text-3xl font-bold text-primary">{section.title}</h2>
              <p className="text-muted-foreground">{section.description}</p>
            </AnimatedSection>

            <AnimatedSection delay={80} className="grid gap-6 md:grid-cols-2">
              {section.resources.map((resource) => (
                <Card key={resource.title} className="border border-border/60 shadow-[var(--shadow-card)]">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary">{resource.title}</CardTitle>
                    <CardDescription className="text-sm text-muted-foreground">
                      {resource.meta}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" asChild>
                      <a
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2"
                      >
                        <Download className="h-4 w-4" />
                        Télécharger
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </AnimatedSection>
          </div>
        </section>
      ))}

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6">
          <AnimatedSection>
            <p className="rounded-3xl border border-border/60 bg-card p-8 text-center text-muted-foreground shadow-[var(--shadow-card)]">
              Pour en savoir plus sur l’Agenda 2063, consultez le document officiel de l’Union africaine&nbsp;:
              <a
                href="https://au.int/sites/default/files/documents/36204-doc-agenda2063_popular_version_en.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 font-semibold text-primary"
              >
                Agenda 2063 – L’Afrique que nous voulons
              </a>
              .
            </p>
          </AnimatedSection>
        </div>
      </section>

      <ContactCoordinates />
    </div>
  );
};

export default Resources;
