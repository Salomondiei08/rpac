import { Camera, Download, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ContactCoordinates from "@/components/ContactCoordinates";
import AnimatedSection from "@/components/AnimatedSection";

const galleryItems = [
  {
    type: "photo",
    title: "Session plénière Ottawa 2023",
    src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80",
  },
  {
    type: "video",
    title: "Forum économique Afrique de l’Ouest",
    src: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=900&q=80",
  },
  {
    type: "photo",
    title: "Atelier gouvernance inclusive",
    src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
  },
  {
    type: "photo",
    title: "Rencontre des femmes leaders",
    src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80",
  },
  {
    type: "photo",
    title: "Laboratoire d’innovation publique",
    src: "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=900&q=80",
  },
  {
    type: "video",
    title: "Agenda 2063 en action",
    src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
  },
];

const resources = [
  {
    title: "Rapport d’impact 2023",
    description:
      "Un panorama des projets menés dans 15 pays africains et les retombées pour nos membres.",
    file: "PDF • 4,2 Mo",
  },
  {
    title: "Note stratégique : diplomatie économique",
    description:
      "Analyse des opportunités de coopération dans les secteurs clés et recommandations politiques.",
    file: "PDF • 2,1 Mo",
  },
  {
    title: "Guide d’adhésion des membres",
    description:
      "Processus d’adhésion, avantages et modalités de participation pour les organisations et individus.",
    file: "PDF • 1,6 Mo",
  },
];

const Gallery = () => {
  return (
    <div className="bg-background">
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-primary/80 pt-24 pb-24 text-primary-foreground">
        <AnimatedSection className="mx-auto max-w-5xl px-6 space-y-6 text-center md:text-left">
          <Badge
            variant="secondary"
            className="mx-auto bg-white/15 text-primary-foreground md:mx-0"
          >
            Nos activités
          </Badge>
          <h1 className="mx-auto max-w-4xl text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl md:mx-0">
            Galerie multimédia & ressources, pour revivre nos temps forts et approfondir nos travaux.
          </h1>
          <p className="mx-auto max-w-3xl text-base text-primary-foreground/90 sm:text-lg lg:text-xl md:mx-0">
            Photos, vidéos, publications et rapports : explorez les contenus produits avec nos partenaires et membres partout en Afrique et au Canada.
          </p>
        </AnimatedSection>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-6xl space-y-12 px-6">
          <AnimatedSection className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-bold text-primary">Galerie multimédia</h2>
            <p className="text-muted-foreground">
              Revivez nos moments forts à travers une collection de photos et de vidéos produites avec nos partenaires et membres.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={120} className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {galleryItems.map((item) => (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-3xl shadow-[var(--shadow-card)] transition-all hover:shadow-[var(--shadow-hover)]"
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="h-60 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-80 transition-opacity group-hover:opacity-90" />
                <div className="absolute bottom-4 left-4 right-4 space-y-2 text-primary-foreground">
                  <span className="inline-flex items-center gap-2 text-xs uppercase tracking-wide">
                    {item.type === "video" ? (
                      <>
                        <PlayCircle className="h-4 w-4" /> Vidéo
                      </>
                    ) : (
                      <>
                        <Camera className="h-4 w-4" /> Photo
                      </>
                    )}
                  </span>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                </div>
              </div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-muted/20 py-24">
        <div className="mx-auto max-w-6xl space-y-12 px-6">
          <AnimatedSection className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-bold text-primary">Publications & rapports</h2>
            <p className="text-lg text-muted-foreground">
              Accédez à nos documents de référence, rapports annuels, notes stratégiques et ressources méthodologiques.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={120} className="grid gap-6 md:grid-cols-3">
            {resources.map((resource) => (
              <Card
                key={resource.title}
                className="border border-border/60 shadow-[var(--shadow-card)]"
              >
                <CardHeader>
                  <CardTitle className="text-lg text-primary">
                    {resource.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {resource.description}
                  </p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground/80">
                    <span>{resource.file}</span>
                    <Button variant="outline" size="sm">
                      <Download className="mr-2 h-4 w-4" />
                      Télécharger
                    </Button>
                  </div>
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

export default Gallery;
