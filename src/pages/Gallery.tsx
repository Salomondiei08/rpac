import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogPortal,
} from "@/components/ui/dialog";
import { X } from "lucide-react";

type GalleryItem = { title: string; src: string };

const galleryItems: GalleryItem[] = [];

const Gallery = () => {
  const [activeMedia, setActiveMedia] = useState<GalleryItem | null>(null);

  return (
    <div className="bg-background">
      <section className="relative overflow-hidden bg-primary text-primary-foreground pt-24 pb-24">
        <AnimatedSection className="mx-auto max-w-5xl px-6 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Galerie multimédia
          </h1>
        </AnimatedSection>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <AnimatedSection className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {galleryItems.length === 0 ? (
              <div className="sm:col-span-2 lg:col-span-3 xl:col-span-4 rounded-3xl border border-border/60 bg-muted/20 px-6 py-10 text-center text-muted-foreground">
                Les photos officielles seront publiées prochainement. La galerie est temporairement désactivée pour retirer les visuels fictifs.
              </div>
            ) : (
              galleryItems.map((item) => (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => setActiveMedia(item)}
                  className="group relative aspect-[4/5] overflow-hidden rounded-3xl shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-hover)] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  <img
                    src={item.src}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform durée-500 group-hover:scale-110"
                    loading="lazy"
                    decoding="async"
                  />
                </button>
              ))
            )}
          </AnimatedSection>
        </div>
      </section>

      {galleryItems.length > 0 && (
        <Dialog
          open={Boolean(activeMedia)}
          onOpenChange={(open) => !open && setActiveMedia(null)}
        >
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
                </div>
              )}
            </DialogContent>
          </DialogPortal>
        </Dialog>
      )}
    </div>
  );
};

export default Gallery;
