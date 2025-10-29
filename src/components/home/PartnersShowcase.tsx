import { partners } from "@/data/partners";

const PartnersShowcase = () => {
  return (
    <section
      aria-labelledby="partners-heading"
      className="py-20 bg-background"
    >
      <div className="container mx-auto px-4 space-y-14">
        <div className="text-center space-y-4">
          <h2
            id="partners-heading"
            className="text-3xl md:text-4xl font-semibold text-primary"
          >
            Ils nous font confiance
          </h2>
          <span className="mx-auto block h-0.5 w-24 rounded-full bg-accent" />
        </div>

        <div className="grid gap-12 sm:grid-cols-3 lg:grid-cols-5 items-center">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex flex-col items-center gap-4 text-center"
            >
              <span className="text-5xl font-light tracking-[0.15em] text-muted-foreground">
                {partner.symbol}
              </span>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
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

