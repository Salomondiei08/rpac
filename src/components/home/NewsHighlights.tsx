import { ArrowUpRight } from "lucide-react";
import useInView from "@/hooks/useInView";
import { cn } from "@/lib/utils";
import rpacNews from "@/assets/rpac-actu.png";

const news = [
  {
    title: "Activité RPAC",
    date: "À venir",
    excerpt:
      "Le RPAC œuvre à renforcer les collaborations entre l’Afrique et le Canada, en facilitant les initiatives, les partenariats et les projets visant un développement durable et inclusif.",
    href: "/galerie",
    image: rpacNews,
  },
  {
    title: "Activité RPAC",
    date: "À venir",
    excerpt:
      "Le RPAC œuvre à renforcer les collaborations entre l’Afrique et le Canada, en facilitant les initiatives, les partenariats et les projets visant un développement durable et inclusif.",
    href: "/galerie",
    image: rpacNews,
  },
  {
    title: "Activité RPAC",
    date: "À venir",
    excerpt:
      "Le RPAC œuvre à renforcer les collaborations entre l’Afrique et le Canada, en facilitant les initiatives, les partenariats et les projets visant un développement durable et inclusif.",
    href: "/galerie",
    image: rpacNews,
  },
];

const NewsHighlights = () => {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.2 });

  return (
    <section id="actualites" aria-labelledby="news-heading" className="bg-muted/20 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 space-y-3 text-center">
          <h2 id="news-heading" className="text-3xl md:text-4xl font-bold text-primary">
            Actualités importantes
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Suivez nos annonces institutionnelles, nos rapports d’impact et les grandes décisions prises avec nos partenaires.
          </p>
        </div>

        <div
          ref={ref}
          className={cn(
            "grid gap-6 md:grid-cols-3 transition-all duration-700",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          )}
        >
          {news.map((item, index) => (
            <article
              key={item.title}
              className="group relative overflow-hidden rounded-3xl border border-border/60 bg-card shadow-[var(--shadow-card)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[var(--shadow-hover)] hover:bg-primary"
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
                <span className="absolute left-5 top-5 inline-flex items-center rounded-full bg-white/90 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-primary shadow">
                  {item.date}
                </span>
              </div>
              <div className="flex h-full flex-col gap-4 p-8 text-left transition-colors duration-500 group-hover:text-primary-foreground">
                <h3 className="text-lg font-semibold leading-tight">
                  {item.title}
                </h3>
                <p className="flex-1 text-sm leading-relaxed text-muted-foreground transition-colors duration-500 group-hover:text-primary-foreground/90">
                  {item.excerpt}
                </p>
                <a
                  href={item.href}
                  className="inline-flex items-center gap-2 text-accent font-semibold transition-colors duration-500 group-hover:text-primary-foreground"
                >
                  Lire la suite
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsHighlights;
