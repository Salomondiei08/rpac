import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const SolarKits = () => {
  const kits = [
    {
      image:
        "https://ma.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/02/221756/3.jpg?7605",
      title: "Must Kit solaire-10W à prix pas cher",
      features: ["Panneau 10W", "Batterie intégrée", "Lampe LED incluse"],
      price: "20 000 FCFA",
    },
    {
      image: "https://sodishopguinee.com/media/2019/03/WHC-SK0603W.jpg",
      title: "Kit Solaire d'énergie SK0603W 3W 2 Ampoules",
      features: ["dfdssd", "fdfdfd", "fdfgfgfgf"],
      price: "200 000 FCFA",
    },
    {
      image:
        "https://sodishopguinee.com/media/2019/03/SOLAR-ENERGY-KIT-3-AMPOUL.jpg",
      title: "Kit Solaire SOLAR ENERGY KIT 6 AMPOULES",
      features: ["fdfddf", "dfdfdf", "dfdd"],
      price: "150 000 FCFA",
    },
    {
      image:
        "https://m.media-amazon.com/images/I/51w2W+g7Z4L._AC_UF1000,1000_QL80_.jpg",
      title: "VENEKA 1 kit de panneau solaire 3 W",
      features: ["dfdf", "dd", "dssd"],
      price: "300 000 FCFA",
    },
    {
      image:
        "https://s.alicdn.com/@sc04/kf/HTB1.t2qavvsK1RjSspdq6AZepXaR.jpg_720x720q50.jpg",
      title: "Kit solaire portatif 10w avec panneau solaire",
      features: ["dfdds", "sdsd", "sdsd"],
      price: "100 000 FCFA",
    },
    {
      image:
        "https://s.alicdn.com/@sc04/kf/HTB1f6.ta7SWBuNjSszdq6zeSpXaC.jpg_720x720q50.jpg",
      title: "Mini panneau solaire portable 50w hors réseau",
      features: ["dde", "eeez", "eez"],
      price: "500 000 FCFA",
    },
  ];

  return (
    <section
      id="kits"
      aria-labelledby="kits-heading"
      className="py-20 bg-background"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <h2
            id="kits-heading"
            className="text-4xl md:text-5xl font-bold text-primary mb-4"
          >
            Nos Kits Solaires
          </h2>
        </div>
        <ul
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8"
          role="list"
        >
          {kits.map((kit, index) => (
            <li key={index} className="h-full">
              <Card className="h-full border-none shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-all duration-300 overflow-hidden group">
                <div className="overflow-hidden">
                  <img
                    src={kit.image}
                    alt={kit.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-primary">
                    {kit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {kit.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="text-muted-foreground flex items-center"
                      >
                        <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Badge className="bg-accent/10 text-accent hover:bg-accent/20 text-lg py-1 px-3">
                    {kit.price}
                  </Badge>
                </CardContent>
                <CardFooter>
                  <Button
                    variant="outline"
                    aria-label={`Voir le détail du ${kit.title}`}
                    className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    Voir détail
                  </Button>
                </CardFooter>
              </Card>
            </li>
          ))}
        </ul>

        <div className="text-center">
          <Button
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            aria-label="Voir plus de kits solaires"
          >
            Voir plus de kits (2 restants)
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SolarKits;
