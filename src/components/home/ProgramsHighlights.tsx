import { Link } from "react-router-dom";
import { ArrowUpRight, Globe2, Handshake, LineChart } from "lucide-react";

const highlights = [
  {
    title: "Programmes phares",
    description:
      "Huit axes structurants qui font avancer la diplomatie économique, l’innovation et les partenariats inclusifs entre le Canada et l’Afrique.",
    icon: LineChart,
    cta: "Découvrir nos programmes",
    href: "/nos-activites#programmes",
  },
  {
    title: "Événements récents",
    description:
      "Forums économiques, rencontres sectorielles, rassemblements de décideurs : suivez les moments forts de notre agenda continental.",
    icon: Globe2,
    cta: "Consulter l’agenda",
    href: "/nos-activites#agenda",
  },
  {
    title: "Actualités clés",
    description:
      "Analyses, publications et retours d’expérience pour éclairer les grandes transformations en Afrique francophone et anglophone.",
    icon: Handshake,
    cta: "Lire les actualités",
    href: "/nos-activites#ressources",
  },
];

const ProgramsHighlights = () => {
  return (
    <section
      aria-labelledby="highlights-heading"
      className="py-16 bg-muted/30"
    >
      <div className="container mx-auto px-4">
        <div className="text-center md:text-left md:flex md:items-end md:justify-between gap-12 mb-12">
          <div className="max-w-2xl mx-auto md:mx-0 space-y-4">
            <h2
              id="highlights-heading"
              className="text-3xl md:text-4xl font-bold text-primary"
            >
              Des actions concrètes sur tout le continent
            </h2>
            <p className="text-muted-foreground text-lg">
              Notre réseau mobilise décideurs publics et privés autour
              d’initiatives qui accélèrent les investissements, renforcent les
              capacités institutionnelles et soutiennent l’innovation sociale.
            </p>
          </div>
        </div>

        <ul
          className="grid gap-8 md:grid-cols-3"
          aria-label="Sections mises en avant"
        >
          {highlights.map((item) => (
            <li key={item.title}>
              <article className="h-full rounded-3xl bg-card shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-all duration-300 p-8 flex flex-col gap-6">
                <div className="w-14 h-14 rounded-2xl bg-accent/10 text-accent flex items-center justify-center shrink-0">
                  <item.icon className="w-7 h-7" aria-hidden="true" />
                </div>
                <div className="space-y-3 flex-1">
                  <h3 className="text-xl font-semibold text-primary">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
                <Link
                  to={item.href}
                  className="inline-flex items-center gap-2 text-accent font-medium hover:gap-3 transition-all"
                >
                  {item.cta}
                  <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProgramsHighlights;
