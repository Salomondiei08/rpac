import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const stats = [
    { number: "1000+", label: "Foyers électrifiés" },
    { number: "500", label: "Tonnes de CO₂ économisées" },
    { number: "98%", label: "Clients satisfaits" },
    { number: "5MW+", label: "Puissance installée" },
  ];

  return (
    <section
      id="apropos"
      aria-labelledby="about-heading"
      className="py-20 bg-muted/30"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <h2
            id="about-heading"
            className="text-4xl md:text-5xl font-bold text-primary mb-6"
          >
            À propos de nous
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Nous sommes une structure spécialisée dans la fourniture de kits
            solaires. Notre vision est de rendre l'énergie accessible et
            abordable pour améliorer la vie dans les régions urbaines et
            rurales.
          </p>
        </div>
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16" role="list">
          {stats.map((stat, index) => (
            <li key={index}>
              <Card
                className="border-none shadow-[var(--shadow-card)] bg-card text-center p-6 hover:shadow-[var(--shadow-hover)] transition-all duration-300"
                aria-label={`${stat.label} : ${stat.number}`}
              >
                <CardContent className="p-0">
                  <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm md:text-base text-muted-foreground">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            </li>
          ))}
        </ul>

        <div className="max-w-4xl mx-auto">
          <img
            src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1200&h=600&fit=crop"
            alt="Équipe Mienssa Energy travaillant sur des solutions solaires"
            className="w-full h-[400px] object-cover rounded-2xl shadow-[var(--shadow-hover)]"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
