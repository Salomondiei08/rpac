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
        meta: "PDF • 4,2 Mo (bientôt disponible)",
      },
      {
        title: "Guides pour investisseurs canadiens",
        meta: "PDF • 3,1 Mo (bientôt disponible)",
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
        meta: "PDF • 1,6 Mo (bientôt disponible)",
      },
      {
        title: "Kit de gouvernance partagée",
        meta: "PDF • 3,4 Mo (bientôt disponible)",
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
        meta: "PDF • 1,2 Mo (bientôt disponible)",
      },
      {
        title: "Annonce partenaires",
        meta: "PDF • 1,8 Mo (bientôt disponible)",
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
              {section.resources.map((resource, idx) => (
                <Card
                  key={resource.title}
                  className="group border border-border/60 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#009BF2]/50 hover:shadow-[var(--shadow-hover)] bg-white hover:bg-[#f0f8ff]"
                  style={{ transitionDelay: `${idx * 60}ms` }}
                >
                  <CardHeader>
                    <CardTitle className="text-lg text-primary transition-colors duration-300 group-hover:text-[#009BF2]">
                      {resource.title}
                    </CardTitle>
                    <CardDescription className="text-sm text-muted-foreground transition-colors duration-300 group-hover:text-[#0d1f29]">
                      {resource.meta}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex justify-between items-center">
                    <Button
                      variant="outline"
                      className="border-[#009BF2] text-[#009BF2] hover:bg-[#009BF2]/10"
                      disabled
                    >
                      <Download className="h-4 w-4" />
                      Bientôt disponible
                    </Button>
                    <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground/70 group-hover:text-[#009BF2]">
                      Publication en cours
                    </span>
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
              Les ressources seront mises en ligne dès que nos travaux seront finalisés. Pour recevoir les documents dès leur publication, écrivez-nous à{" "}
              <a href="mailto:contact@r-pac.ca" className="font-semibold text-primary">
                contact@r-pac.ca
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
