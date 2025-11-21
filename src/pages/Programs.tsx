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
      <section className="relative overflow-hidden bg-primary text-primary-foreground pt-24 md:pt-28 pb-24">
        <AnimatedSection className="mx-auto max-w-5xl px-6 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Nos programmes
          </h1>
        </AnimatedSection>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-6xl space-y-12 px-6">
          <AnimatedSection className="space-y-4 max-w-3xl">
            <h2 className="text-3xl font-bold text-primary">
              Activer les partenariats concrets
            </h2>
            <div className="space-y-3 text-muted-foreground">
              <p>
                Nos programmes concrétisent la mission du RPAC : activer des
                partenariats publics et privés qui allient investissement,
                innovation et engagement mutuel.
              </p>
              <p>
                Chaque initiative est un levier de transformation, au croisement
                des intérêts stratégiques et des aspirations collectives, grâce
                à des coopérations structurées entre institutions, entreprises
                et communautés.
              </p>
              <p>
                Ancrés dans un dialogue politique continu entre décideurs
                africains et canadiens, nos programmes s’inscrivent dans les
                grandes visions de l’Agenda 2063 et de la Stratégie canadienne
                pour l’Afrique.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection
            delay={120}
            className="grid gap-8 md:grid-cols-2 xl:grid-cols-3"
          >
            {programs.map((program, index) => {
              const Icon = program.icon;
              return (
                <Card
                  key={program.slug}
                  className="group flex h-full flex-col overflow-hidden rounded-3xl border border-sky-200 bg-white p-8 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-2 hover:border-sky-400 hover:bg-sky-50 hover:shadow-[var(--shadow-hover)]"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-100 text-sky-700 transition-colors duration-300 group-hover:bg-sky-700 group-hover:text-white">
                        <Icon className="h-7 w-7" aria-hidden="true" />
                      </div>
                      <span className="text-sm font-semibold uppercase tracking-wider text-sky-700 transition-colors duration-300 group-hover:text-sky-900">
                        Programme #{index + 1}
                      </span>
                    </div>
                    <Badge
                      variant="outline"
                      className="border-sky-200 bg-sky-50 text-sky-700 transition-colors duration-300 group-hover:border-sky-500 group-hover:bg-sky-100 group-hover:text-sky-900"
                    >
                      RPAC
                    </Badge>
                  </div>
                  <CardHeader className="mt-6 space-y-3 p-0">
                    <CardTitle className="text-2xl font-semibold text-primary transition-colors duration-300 group-hover:text-primary">
                      {program.title}
                    </CardTitle>
                    {program.subtitle && (
                      <p className="text-sm font-medium text-sky-700 transition-colors duration-300 group-hover:text-sky-900">
                        {program.subtitle}
                      </p>
                    )}
                  </CardHeader>
                  <CardContent className="flex-1 space-y-5 p-0 text-sm leading-relaxed text-muted-foreground transition-colors duration-300 group-hover:text-sky-900">
                    <p>{program.description}</p>
                    <ul className="flex flex-wrap gap-2">
                      {program.focus.map((item) => (
                        <li key={item}>
                          <Badge
                            variant="outline"
                            className="border-sky-200 bg-sky-50 text-sky-700 transition-colors duration-300 group-hover:border-sky-500 group-hover:bg-sky-100 group-hover:text-sky-900"
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
                      className="inline-flex items-center gap-2 font-semibold text-sky-700 transition-colors duration-300 group-hover:text-sky-900"
                    >
                      Lire plus
                      <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </Link>
                    <Button
                      asChild
                      className="border border-sky-500 bg-sky-700 text-white hover:bg-sky-800 hover:text-white"
                    >
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
