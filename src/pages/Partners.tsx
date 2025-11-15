import AnimatedSection from "@/components/AnimatedSection";
import { partners } from "@/data/partners";

const Partners = () => {
  return (
    <div className="bg-background">
      <section className="relative overflow-hidden bg-primary text-primary-foreground pt-24 md:pt-28 pb-24">
        <AnimatedSection className="mx-auto max-w-5xl px-6 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">Nos partenaires</h1>
        </AnimatedSection>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6 space-y-10">
          <AnimatedSection>
            <p className="text-lg text-muted-foreground text-center md:text-left">
              Nos partenaires institutionnels et privés sont les architectes d’une coopération concrète entre le Canada
              et l’Afrique.
            </p>
          </AnimatedSection>
          <AnimatedSection>
            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {partners.map((partner) => (
                <div
                  key={partner.name}
                  className="flex items-center justify-center rounded-2xl border border-border/60 bg-card p-6 shadow-sm"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-16 w-auto object-contain"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

    </div>
  );
};

export default Partners;
