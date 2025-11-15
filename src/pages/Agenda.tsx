import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarDays, Filter } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const agendaEvents = [
  {
    title: "Lancement officiel",
    date: "À venir",
    location: "Canada",
    type: "Séminaire",
    program: "Innovation",
    region: "Nord",
    description:
      "Lancement officiel du RPAC pour renforcer les échanges, les collaborations et les partenariats Afrique–Canada.",
  },
  {
    title: "Rencontre des partenaires",
    date: "À venir",
    location: "Canada",
    type: "Forum",
    program: "Gouvernance",
    region: "Est",
    description:
      "Partage de solutions innovantes pour renforcer les institutions publiques et l’accès aux services essentiels.",
  },
  {
    title: "1er Forum annuel",
    date: "À venir",
    location: "Canada",
    type: "Rencontre",
    program: "Commerce",
    region: "Sud",
    description:
      "Dialogue entre experts canadiens et africains pour accélérer les partenariats en santé numérique.",
  },
];

const filters = {
  type: ["Forum", "Rencontre", "Séminaire", "Sommet"],
  program: ["Commerce", "Innovation", "Gouvernance", "Partenariats"],
  region: ["Nord", "Ouest", "Centre", "Est", "Sud"],
};

const Agenda = () => {
  const [activeType, setActiveType] = useState<string | null>(null);
  const [activeProgram, setActiveProgram] = useState<string | null>(null);
  const [activeRegion, setActiveRegion] = useState<string | null>(null);

  const toggleFilter = (
    current: string | null,
    value: string,
    setter: (val: string | null) => void,
  ) => {
    setter(current === value ? null : value);
  };

  const filteredEvents = agendaEvents.filter((event) => {
    const typeMatch = activeType ? event.type === activeType : true;
    const programMatch = activeProgram ? event.program === activeProgram : true;
    const regionMatch = activeRegion ? event.region === activeRegion : true;
    return typeMatch && programMatch && regionMatch;
  });

  return (
    <div className="bg-background">
      <section className="relative overflow-hidden bg-primary text-primary-foreground pt-24 pb-24">
        <AnimatedSection className="mx-auto max-w-5xl px-6 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Nos événements et agendas
          </h1>
        </AnimatedSection>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-6xl space-y-12 px-6">
          <AnimatedSection className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-bold text-primary">Événements à venir</h2>
            <p className="text-lg text-muted-foreground">
              Consultez notre agenda pour découvrir tous nos séminaires, forums et initiatives à venir. Utilisez les filtres pour affiner votre recherche par type d’événement, programme ou région.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={80} className="grid gap-4 md:grid-cols-3 md:items-start">
            <div>
              <p className="flex items-center gap-2 text-sm text-muted-foreground/80">
                <Filter className="h-4 w-4" />
                Type d’événement
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {filters.type.map((type) => (
                  <Button
                    key={type}
                    variant={activeType === type ? "default" : "outline"}
                    size="sm"
                    onClick={() => toggleFilter(activeType, type, setActiveType)}
                  >
                    {type}
                  </Button>
                ))}
              </div>
            </div>
            <div>
              <p className="flex items-center gap-2 text-sm text-muted-foreground/80">
                <Filter className="h-4 w-4" />
                Programme
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {filters.program.map((program) => (
                  <Button
                    key={program}
                    variant={activeProgram === program ? "default" : "outline"}
                    size="sm"
                    onClick={() => toggleFilter(activeProgram, program, setActiveProgram)}
                  >
                    {program}
                  </Button>
                ))}
              </div>
            </div>
            <div>
              <p className="flex items-center gap-2 text-sm text-muted-foreground/80">
                <Filter className="h-4 w-4" />
                Région
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {filters.region.map((region) => (
                  <Button
                    key={region}
                    variant={activeRegion === region ? "default" : "outline"}
                    size="sm"
                    onClick={() => toggleFilter(activeRegion, region, setActiveRegion)}
                  >
                    {region}
                  </Button>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={160} className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredEvents.map((event) => (
              <Card
                key={event.title}
                className="border border-border/60 shadow-[var(--shadow-card)]"
              >
                <CardHeader>
                  <CardTitle className="text-lg text-primary leading-snug">
                    {event.title}
                  </CardTitle>
                  <p className="flex flex-wrap gap-2 text-sm text-muted-foreground/80">
                    <span>{event.date}</span>
                    <span aria-hidden="true">•</span>
                    <span>{event.location}</span>
                  </p>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {event.description}
                  </p>
                  <div className="flex flex-wrap gap-2 text-xs">
                    <Badge variant="secondary">{event.type}</Badge>
                    <Badge variant="secondary">{event.program}</Badge>
                    <Badge variant="secondary">Région {event.region}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-muted/25 py-24">
        <AnimatedSection className="mx-auto grid max-w-5xl gap-8 rounded-4xl border border-border/60 bg-card px-6 py-8 shadow-[var(--shadow-card)] md:grid-cols-2">
          <div className="space-y-4 md:p-2">
            <h2 className="text-2xl font-semibold text-primary">Calendrier interactif</h2>
            <p className="text-sm text-muted-foreground">
              Synchronisez nos événements directement à votre agenda pour ne manquer aucun rendez-vous.
            </p>
            <Button variant="outline" size="sm">
              Synchroniser mon agenda
            </Button>
          </div>
          <div className="md:px-2">
            <div className="mb-3 grid grid-cols-7 gap-2 text-center text-xs uppercase tracking-wide text-muted-foreground">
              {[
                "Lun",
                "Mar",
                "Mer",
                "Jeu",
                "Ven",
                "Sam",
                "Dim",
              ].map((day) => (
                <span key={day}>{day}</span>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-2 text-sm">
              {Array.from({ length: 35 }, (_, index) => {
                const dayNumber = index - 3;
                const isCurrentMonth = dayNumber > 0 && dayNumber <= 31;
                const isEventDay = [5, 12, 18, 21].includes(dayNumber);
                return (
                  <div
                    key={index}
                    className={`aspect-square rounded-xl border ${
                      isCurrentMonth
                        ? "flex items-center justify-center border-border/60"
                        : "border-transparent opacity-40"
                    } ${
                      isEventDay
                        ? "bg-accent/20 text-accent font-semibold"
                        : ""
                    }`}
                  >
                    {isCurrentMonth ? dayNumber : ""}
                  </div>
                );
              })}
            </div>
          </div>
        </AnimatedSection>
      </section>

    </div>
  );
};

export default Agenda;
