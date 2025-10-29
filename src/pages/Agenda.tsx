import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarDays, Filter } from "lucide-react";

const agendaEvents = [
  {
    title: "Séminaire sur la transition énergétique",
    date: "18 mars 2024",
    location: "Casablanca, Maroc",
    type: "Séminaire",
    program: "Innovation",
    region: "Nord",
    description:
      "Discussion sur les mécanismes de financement et les partenariats public-privé pour l’énergie renouvelable.",
  },
  {
    title: "Forum régional des collectivités africaines",
    date: "02 avril 2024",
    location: "Nairobi, Kenya",
    type: "Forum",
    program: "Gouvernance",
    region: "Est",
    description:
      "Renforcement des capacités locales et partage de solutions innovantes pour les villes résilientes.",
  },
  {
    title: "Rencontre d’affaires Canada – Afrique australe",
    date: "21 mai 2024",
    location: "Johannesburg, Afrique du Sud",
    type: "Rencontre",
    program: "Commerce",
    region: "Sud",
    description:
      "Matchmaking d’investissements pour les secteurs santé, numérique et infrastructures durables.",
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
    if (current === value) {
      setter(null);
    } else {
      setter(value);
    }
  };

  const filteredEvents = agendaEvents.filter((event) => {
    const typeMatch = activeType ? event.type === activeType : true;
    const programMatch = activeProgram ? event.program === activeProgram : true;
    const regionMatch = activeRegion ? event.region === activeRegion : true;
    return typeMatch && programMatch && regionMatch;
  });

  return (
    <div className="bg-background">
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-primary/80 text-primary-foreground mt-[-80px] md:mt-[-96px] pt-24 md:pt-28 pb-24">
        <div className="container mx-auto px-4 space-y-6 text-center md:text-left">
          <Badge
            variant="secondary"
            className="bg-white/15 text-primary-foreground mx-auto md:mx-0"
          >
            Nos activités
          </Badge>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold max-w-4xl leading-tight mx-auto md:mx-0">
            Un agenda continental pour connecter les écosystèmes canadiens et
            africains.
          </h1>
          <p className="text-base sm:text-lg lg:text-xl max-w-3xl text-primary-foreground/90 mx-auto md:mx-0">
            Forums, séminaires, missions économiques et rencontres sectorielles
            rythment notre programmation. Sélectionnez les filtres pour suivre
            les événements qui vous concernent.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-3 text-sm text-primary-foreground/70">
            <span className="inline-flex items-center gap-2">
              <CalendarDays className="w-4 h-4" />
              Agenda mis à jour en continu
            </span>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 space-y-10">
        <header className="space-y-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-primary">
            Événements à venir
          </h2>
          <p className="text-muted-foreground text-lg">
            Consultez notre agenda pour découvrir tous nos séminaires, forums et
            initiatives à venir. Utilisez les filtres pour affiner votre
            recherche par type d’événement, programme ou région.
          </p>
        </header>

        <div className="flex flex-col gap-6">
          <div className="grid md:grid-cols-3 gap-4 items-start">
            <div>
              <p className="flex items-center gap-2 text-sm text-muted-foreground/80">
                <Filter className="w-4 h-4" />
                Type d’événement
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
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
                <Filter className="w-4 h-4" />
                Programme
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                {filters.program.map((program) => (
                  <Button
                    key={program}
                    variant={activeProgram === program ? "default" : "outline"}
                    size="sm"
                    onClick={() =>
                      toggleFilter(activeProgram, program, setActiveProgram)
                    }
                  >
                    {program}
                  </Button>
                ))}
              </div>
            </div>
            <div>
              <p className="flex items-center gap-2 text-sm text-muted-foreground/80">
                <Filter className="w-4 h-4" />
                Région
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                {filters.region.map((region) => (
                  <Button
                    key={region}
                    variant={activeRegion === region ? "default" : "outline"}
                    size="sm"
                    onClick={() =>
                      toggleFilter(activeRegion, region, setActiveRegion)
                    }
                  >
                    {region}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {filteredEvents.map((event) => (
              <Card
                key={event.title}
                className="border border-border/60 shadow-[var(--shadow-card)]"
              >
                <CardHeader>
                  <CardTitle className="text-lg text-primary leading-snug">
                    {event.title}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground/80 flex flex-wrap gap-2">
                    <span>{event.date}</span>
                    <span aria-hidden="true">•</span>
                    <span>{event.location}</span>
                  </p>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground leading-relaxed">
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
          </div>
        </div>
      </section>

      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 rounded-3xl border border-border/60 bg-card shadow-[var(--shadow-card)]">
          <div className="space-y-4 p-6">
            <h2 className="text-2xl font-semibold text-primary">
              Calendrier interactif
            </h2>
            <p className="text-sm text-muted-foreground">
              Synchronisez nos événements directement à votre agenda pour ne
              manquer aucun rendez-vous.
            </p>
            <Button variant="outline" size="sm">
              Synchroniser mon agenda
            </Button>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-7 gap-2 text-center text-xs text-muted-foreground uppercase tracking-wide mb-2">
              {["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"].map((day) => (
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
                    className={`aspect-square rounded-xl flex items-center justify-center border ${
                      isCurrentMonth
                        ? "border-border/60"
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
        </div>
      </section>
    </div>
  );
};

export default Agenda;
