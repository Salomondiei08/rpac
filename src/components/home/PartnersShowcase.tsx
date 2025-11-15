import { partners } from "@/data/partners";

const PartnersShowcase = () => {
  const marqueePartners = [...partners, ...partners];

  return (
    <section aria-labelledby="partners-heading" className="bg-background pt-20 pb-0">
      <div className="container mx-auto space-y-10 px-4">
        <div className="space-y-3 text-center">
          <h2 id="partners-heading" className="text-3xl md:text-4xl font-semibold text-primary">
            Partenaires
          </h2>
        </div>
      </div>

      <div className="relative overflow-hidden bg-card/40 py-6">
        <div className="absolute inset-y-0 left-0 w-24 pointer-events-none bg-gradient-to-r from-background to-transparent" aria-hidden="true" />
        <div className="absolute inset-y-0 right-0 w-24 pointer-events-none bg-gradient-to-l from-background to-transparent" aria-hidden="true" />
        <div className="flex min-w-max items-center gap-12 animate-marquee px-8">
          {marqueePartners.map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="flex min-w-[200px] flex-col items-center gap-3 text-center"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-16 w-auto object-contain drop-shadow-sm"
                loading="lazy"
                decoding="async"
              />
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                {partner.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersShowcase;
