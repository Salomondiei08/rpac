import { Button } from "@/components/ui/button";
import { ArrowRight, Users } from "lucide-react";
import heroImage from "@/assets/solar-hero.jpg";

const Hero = () => {
  return (
    <section
      id="accueil"
      aria-labelledby="hero-heading"
      className="relative min-h-[80vh] flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Représentants de l'association réunis autour d'une table de travail"
          className="w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />
      </div>

      <div className="absolute top-20 right-8 hidden md:block text-accent/20 animate-pulse">
        <Users className="w-16 h-16" aria-hidden="true" />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center md:text-left">
        <div className="max-w-3xl space-y-6 animate-fade-up">
          <div className="inline-flex items-center gap-2 bg-accent/20 text-accent-foreground/90 rounded-full px-4 py-2 text-sm font-semibold">
            <span className="inline-flex h-2 w-2 rounded-full bg-accent" />
            Alliance panafricaine pour des partenariats durables
          </div>
          <h1
            id="hero-heading"
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight"
          >
            Bâtir des{" "}
            <span className="text-accent">partenariats transformateurs</span>
          </h1>
          <p className="text-lg sm:text-xl text-primary-foreground/90">
            L’Association des Partenariats Canada-Afrique réunit décideurs,
            entreprises et acteurs de la société civile pour co-créer des
            solutions inclusives sur l’ensemble du continent africain.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6 group"
              asChild
            >
              <a href="/programmes">
                Explorer nos initiatives
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="secondary"
              className="text-primary font-semibold text-lg px-8 py-6"
              asChild
            >
              <a href="/adhesion-contact">Rejoindre l’association</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
