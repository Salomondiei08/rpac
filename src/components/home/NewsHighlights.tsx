import { Newspaper } from "lucide-react";

const news = [
  {
    title: "Signature d’un protocole d’entente sur les infrastructures vertes",
    date: "Février 2024",
    excerpt:
      "Le partenariat tripartite Canada – Maroc – Kenya ouvre la voie à de nouveaux financements pour les projets urbains durables.",
    href: "/nos-activites#ressources",
  },
  {
    title: "Publication du rapport 2023 sur l’Agenda 2063 en action",
    date: "Janvier 2024",
    excerpt:
      "Une analyse prospective de nos projets pilotes et recommandations pour accélérer la mise en œuvre continentale.",
    href: "/nos-activites#ressources",
  },
  {
    title: "Lancement du réseau des femmes leaders en innovation sociale",
    date: "Décembre 2023",
    excerpt:
      "Plus de 80 entrepreneures et dirigeantes réunies pour partager des solutions sur l’inclusion économique.",
    href: "/nos-activites#ressources",
  },
];

const NewsHighlights = () => {
  return (
    <section
      id="actualites"
      aria-labelledby="news-heading"
      className="py-16 bg-muted/20"
    >
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center space-y-2">
          <h2
            id="news-heading"
            className="text-3xl md:text-4xl font-bold text-primary"
          >
            Actualités importantes
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Suivez nos annonces institutionnelles, nos rapports d’impact et les
            grandes décisions prises avec nos partenaires sur le continent.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {news.map((item) => (
            <article
              key={item.title}
              className="rounded-3xl bg-card shadow-[var(--shadow-card)] p-8 flex flex-col gap-5 border border-border/40"
            >
              <div className="inline-flex items-center gap-2 text-accent font-medium text-sm uppercase tracking-wide">
                <Newspaper className="w-4 h-4" aria-hidden="true" />
                {item.date}
              </div>
              <div className="space-y-3 flex-1">
                <h3 className="text-xl font-semibold text-primary leading-tight">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">{item.excerpt}</p>
              </div>
              <a
                href={item.href}
                className="text-accent font-semibold hover:underline"
              >
                Lire la suite
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsHighlights;
