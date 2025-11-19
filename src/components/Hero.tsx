import { Button } from "@/components/ui/button";
import { ArrowRight, Users } from "lucide-react";
import heroImage from "@/assets/african-union.jpg";

const Hero = () => {
  return (
    <section
      id="accueil"
      aria-labelledby="hero-heading"
      className="relative isolate overflow-hidden pt-12 md:pt-24 pb-24"
    >
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImage}
          alt="Représentants du réseau réunis autour d'une table de travail"
          className="h-full w-full object-cover"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d2a33]/85 via-[#13435a]/70 to-[#1d5c76]/55" />
      </div>

      <div className="absolute top-20 right-8 hidden md:block text-accent/20 animate-pulse">
        <Users className="w-16 h-16" aria-hidden="true" />
      </div>

      <div className="container mx-auto px-4">
        <div className="flex min-h-[60vh] md:min-h-[70vh] flex-col items-center justify-start md:justify-center gap-8 text-center text-primary-foreground animate-fade-up pt-6 md:pt-0">
          <div className="inline-flex items-center gap-3 rounded-full bg-white/15 px-6 py-2.5 text-lg md:text-xl font-semibold text-white/90 backdrop-blur">
            <span className="inline-flex h-2 w-2 rounded-full bg-accent" />
            Réseau pour le Partenariat Afrique-Canada
          </div>
          <div className="space-y-6 max-w-4xl">
            <h1
              id="hero-heading"
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
            >
              Bâtir des{" "}
              <span className="text-accent">partenariats transformateurs</span>
            </h1>
          </div>
          <div className="flex flex-col items-center gap-4 sm:flex-row">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
