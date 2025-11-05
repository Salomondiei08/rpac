import { Camera, Download, PlayCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ContactCoordinates from "@/components/ContactCoordinates";
import AnimatedSection from "@/components/AnimatedSection";
import { Dialog, DialogContent, DialogOverlay, DialogPortal } from "@/components/ui/dialog";
import { useState } from "react";

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
    url: "https://www.un.org/sites/un2.un.org/files/2023-05_sdg-progress-report_special_edition.pdf",
  },
  {
    title: "Note stratégique : diplomatie économique",
    description:
      "Analyse des opportunités de coopération dans les secteurs clés et recommandations politiques.",
    file: "PDF • 2,1 Mo",
    url: "https://www.oecd.org/dev/EMnet/EMnet-Business-Insight-Investing-in-Africa-after-COVID-19.pdf",
  },
  {
    title: "Guide d’adhésion des membres",
    description:
      "Processus d’adhésion, avantages et modalités de participation pour les organisations et individus.",
    file: "PDF • 1,6 Mo",
    url: "https://www.afdb.org/sites/default/files/documents/publications/aeb_volume_12_issue_4.pdf",
  },
];

const Gallery = () => {
  const [activeMedia, setActiveMedia] = useState<typeof galleryItems[number] | null>(null);

  const handleOpen = (item: typeof galleryItems[number]) => {
    if (item.type === "photo") {
      setActiveMedia(item);
    } else {
      window.open(item.src, "_blank", "noopener,noreferrer");
    }
  };

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
              <button
                key={item.title}
                type="button"
                onClick={() => handleOpen(item)}
                className="group relative overflow-hidden rounded-3xl shadow-[var(--shadow-card)] transition-all hover:shadow-[var(--shadow-hover)] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="h-60 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-80 transition-opacity group-hover:opacity-90" />
                <div className="absolute bottom-4 left-4 right-4 space-y-2 text-primary-foreground text-left">
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
              </button>
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
                    <Button asChild variant="outline" size="sm">
                      <a
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        download
                        className="inline-flex items-center"
                      >
                        <Download className="mr-2 h-4 w-4" />
                        Télécharger
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </AnimatedSection>
        </div>
      </section>

      <Dialog open={Boolean(activeMedia)} onOpenChange={(open) => !open && setActiveMedia(null)}>
        <DialogPortal>
          <DialogOverlay />
          <DialogContent className="max-w-5xl border-none bg-transparent shadow-none p-0 sm:rounded-none">
            {activeMedia && (
              <div className="relative flex flex-col items-center">
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setActiveMedia(null)}
                    className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black/80"
                    aria-label="Fermer la photo"
                  >
                    <X className="h-5 w-5" />
                  </button>
                  <img
                    src={activeMedia.src}
                    alt={activeMedia.title}
                    className="max-h-[80vh] w-full max-w-4xl rounded-3xl object-contain"
                  />
                </div>
                <p className="mt-4 text-center text-base font-medium text-white drop-shadow">
                  {activeMedia.title}
                </p>
              </div>
            )}
          </DialogContent>
        </DialogPortal>
      </Dialog>

      <ContactCoordinates />
    </div>
  );
};

export default Gallery;
