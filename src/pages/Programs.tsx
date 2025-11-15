import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { programs } from "@/data/programs";
import ContactCoordinates from "@/components/ContactCoordinates";
import AnimatedSection from "@/components/AnimatedSection";

const Programs = () => {
  return (
    <div className="bg-background">
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-primary/80 text-primary-foreground pt-24 md:pt-28 pb-24">
        <AnimatedSection className="mx-auto max-w-5xl px-6 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">Nos programmes</h1>
        </AnimatedSection>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-6xl space-y-12 px-6">
          <AnimatedSection className="space-y-4 max-w-3xl">
            <h2 className="text-3xl font-bold text-primary">Nos programmes</h2>
            <p className="text-muted-foreground">
              Chaque programme s’appuie sur un comité de pilotage et un réseau de
              partenaires présents sur le terrain pour accompagner la conception,
              la mise en œuvre et le suivi d’impact des projets.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={120} className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {programs.map((program, index) => {
              const Icon = program.icon;
              return (
                <Card
                  key={program.slug}
                  className="group flex h-full flex-col overflow-hidden rounded-3xl border border-accent/15 bg-white p-8 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-2 hover:border-accent/40 hover:shadow-[var(--shadow-hover)]"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/15 text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-accent-foreground">
                        <Icon className="h-7 w-7" aria-hidden="true" />
                      </div>
                      <span className="text-sm font-semibold uppercase tracking-wider text-muted-foreground/70">
                        Programme #{index + 1}
                      </span>
                    </div>
                    <Badge variant="outline" className="border-accent/20 bg-accent/10 text-accent">
                      RPAC
                    </Badge>
                  </div>
                  <CardHeader className="mt-6 space-y-3 p-0">
                    <CardTitle className="text-2xl font-semibold text-primary">
                      {program.title}
                    </CardTitle>
                    {program.subtitle && (
                      <p className="text-sm font-medium text-accent">
                        {program.subtitle}
                      </p>
                    )}
                  </CardHeader>
                  <CardContent className="flex-1 space-y-5 p-0 text-sm leading-relaxed text-muted-foreground">
                    <p>{program.description}</p>
                    <ul className="flex flex-wrap gap-2">
                      {program.focus.map((item) => (
                        <li key={item}>
                          <Badge
                            variant="outline"
                            className="border-accent/20 bg-accent/5 text-accent"
                          >
                            {item}
                          </Badge>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <div className="mt-6 flex items-center justify-between">
                    <Link
                      to={`/programmes/${program.slug}`}
                      className="inline-flex items-center gap-2 text-accent font-semibold"
                    >
                      Lire plus
                      <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </Link>
                    <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
                      <Link to="/adhesion-contact">Nous rejoindre</Link>
                    </Button>
                  </div>
                </Card>
              );
            })}
          </AnimatedSection>
        </div>
      </section>
      <ContactCoordinates />
    </div>
  );
};

export default Programs;
