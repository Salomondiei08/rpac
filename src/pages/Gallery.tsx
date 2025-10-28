import { Camera, Download, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-primary/80 text-primary-foreground py-20">
        <div className="container mx-auto px-4 space-y-6">
          <Badge
            variant="secondary"
            className="bg-white/15 text-primary-foreground"
          >
            Nos activités
          </Badge>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold max-w-3xl leading-tight">
            Galerie multimédia & ressources, pour revivre nos temps forts et
            approfondir nos travaux.
          </h1>
          <p className="text-base sm:text-lg lg:text-xl max-w-3xl text-primary-foreground/90">
            Photos, vidéos, publications et rapports : explorez les contenus
            produits avec nos partenaires et membres partout en Afrique et au
            Canada.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 space-y-10">
        <header className="space-y-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-primary">Galerie multimédia</h2>
          <p className="text-muted-foreground">
            Revivez nos moments forts à travers une collection de photos et de
            vidéos produites avec nos partenaires et membres.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item) => (
            <div
              key={item.title}
              className="relative rounded-3xl overflow-hidden group shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-all"
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              <div className="absolute bottom-4 left-4 right-4 text-primary-foreground space-y-2">
                <span className="inline-flex items-center gap-2 text-xs uppercase tracking-wide">
                  {item.type === "video" ? (
                    <>
                      <PlayCircle className="w-4 h-4" /> Vidéo
                    </>
                  ) : (
                    <>
                      <Camera className="w-4 h-4" /> Photo
                    </>
                  )}
                </span>
                <h3 className="text-lg font-semibold">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-muted/20 py-16">
        <div className="container mx-auto px-4 space-y-10">
          <header className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-bold text-primary">
              Publications & rapports
            </h2>
            <p className="text-muted-foreground text-lg">
              Accédez à nos documents de référence, rapports annuels, notes
              stratégiques et ressources méthodologiques.
            </p>
          </header>

          <div className="grid gap-6 md:grid-cols-3">
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
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {resource.description}
                  </p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground/80">
                    <span>{resource.file}</span>
                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4 mr-2" />
                      Télécharger
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
