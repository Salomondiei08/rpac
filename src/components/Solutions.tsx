import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Wrench, Shield, Package } from "lucide-react";

const Solutions = () => {
  const solutions = [
    {
      icon: Package,
      title: "Installation de panneaux solaires",
      description:
        "Installation professionnelle de panneaux solaires haute performance pour une autonomie énergétique optimale.",
    },
    {
      icon: Wrench,
      title: "Maintenance et suivi",
      description:
        "Service de maintenance préventive et suivi régulier pour garantir les performances de votre installation.",
    },
    {
      icon: Shield,
      title: "Kits solaires sur-mesure",
      description:
        "Des solutions adaptées à vos besoins pour particuliers et entreprises.",
    },
  ];

  return (
    <section
      id="solutions"
      aria-labelledby="solutions-heading"
      className="py-20 bg-muted/30"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <h2
            id="solutions-heading"
            className="text-4xl md:text-5xl font-bold text-primary mb-4"
          >
            Nos Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Découvrez nos kits innovants pour une transition énergétique réussie
          </p>
        </div>
        <ul className="grid md:grid-cols-3 gap-8" role="list">
          {solutions.map((solution, index) => (
            <li key={index} className="h-full">
              <Card
                className="h-full border-none shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-all duration-300 hover:-translate-y-2 bg-card"
                as-child="true"
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-4">
                    <solution.icon className="w-8 h-8 text-accent" />
                  </div>
                  <CardTitle className="text-2xl text-primary">
                    {solution.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-muted-foreground leading-relaxed">
                    {solution.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Solutions;
