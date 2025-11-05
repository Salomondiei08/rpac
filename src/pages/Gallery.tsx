import { X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import ContactCoordinates from "@/components/ContactCoordinates";
import AnimatedSection from "@/components/AnimatedSection";
import { Dialog, DialogContent, DialogOverlay, DialogPortal } from "@/components/ui/dialog";
import { useState } from "react";

const galleryItems = [
  {
    title: "Session plénière Ottawa 2023",
    src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Forum économique Afrique de l’Ouest",
    src: "https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Atelier gouvernance inclusive",
    src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Rencontre des femmes leaders",
    src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Laboratoire d’innovation publique",
    src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Mission commerciale Canada – Dakar",
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Cérémonie de signature de partenariat",
    src: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Table ronde innovation sociale",
    src: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Laboratoire d’innovation publique",
    src: "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=900&q=80",
  },
];

const Gallery = () => {
  const [activeMedia, setActiveMedia] = useState<typeof galleryItems[number] | null>(null);

  const handleOpen = (item: typeof galleryItems[number]) => {
    setActiveMedia(item);
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
            Explorez les temps forts de nos missions, ateliers et rencontres bilatérales qui font vivre le réseau.
          </p>
        </AnimatedSection>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-6xl space-y-12 px-6">
          <AnimatedSection className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-bold text-primary">Galerie multimédia</h2>
            <p className="text-muted-foreground">
              Revivez nos moments forts à travers une collection de photos produites avec nos partenaires et membres.
            </p>
          </AnimatedSection>

          <AnimatedSection
            delay={120}
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            {galleryItems.map((item) => (
              <button
                key={item.title}
                type="button"
                onClick={() => handleOpen(item)}
                className="group relative aspect-[4/5] overflow-hidden rounded-3xl shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-hover)] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent opacity-80 transition-opacity group-hover:opacity-90" />
                <div className="absolute bottom-4 left-4 right-4 space-y-2 text-left text-primary-foreground">
                  <Badge variant="secondary" className="bg-white/15 text-xs uppercase tracking-[0.2em]">
                    Moment RPAC
                  </Badge>
                  <h3 className="text-lg font-semibold leading-snug">{item.title}</h3>
                </div>
              </button>
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
