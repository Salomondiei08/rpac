import { useState } from "react";
import {
  addMonths,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  isSameDay,
  isSameMonth,
  parseISO,
  startOfMonth,
  startOfWeek,
  subMonths,
} from "date-fns";
import { fr } from "date-fns/locale";
import { CalendarDays, ChevronLeft, ChevronRight, Filter } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const agendaEvents = [
  {
    title: "Lancement officiel du RPAC",
    date: "2026-02-20",
    location: "Montréal, Canada",
    type: "Lancement",
    program: "Institutionnel",
    region: "Canada",
    description:
      "Cérémonie de lancement et présentation des ambitions 2026 pour le Réseau pour le Partenariat Afrique-Canada.",
  },
].map((event) => ({
  ...event,
  dateValue: parseISO(event.date),
}));

const filters = {
  type: ["Lancement"],
  program: ["Institutionnel"],
  region: ["Canada"],
};

const eventDates = agendaEvents.map((event) => event.dateValue);
const defaultMonth = startOfMonth(
  eventDates.length
    ? eventDates.reduce((earliest, current) => (current < earliest ? current : earliest))
    : new Date(),
);

const Agenda = () => {
  const [activeType, setActiveType] = useState<string | null>(null);
  const [activeProgram, setActiveProgram] = useState<string | null>(null);
  const [activeRegion, setActiveRegion] = useState<string | null>(null);
  const [currentMonth, setCurrentMonth] = useState<Date>(defaultMonth);

  const today = new Date();
  const calendarDays = eachDayOfInterval({
    start: startOfWeek(startOfMonth(currentMonth), { weekStartsOn: 1 }),
    end: endOfWeek(endOfMonth(currentMonth), { weekStartsOn: 1 }),
  });
  const monthLabel = format(currentMonth, "LLLL yyyy", { locale: fr });

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

  const handleMonthChange = (direction: "previous" | "next") => {
    setCurrentMonth((prev) => (direction === "next" ? addMonths(prev, 1) : subMonths(prev, 1)));
  };

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
                    <span>{format(event.dateValue, "d MMMM yyyy", { locale: fr })}</span>
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
              Parcourez les dates clés et enregistrez celles qui vous intéressent pour ne manquer aucun rendez-vous.
            </p>
          </div>
          <div className="md:px-2">
            <div className="mb-4 flex items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-wide text-muted-foreground">Mois affiché</p>
                <p className="flex items-center gap-2 text-lg font-semibold text-primary">
                  <CalendarDays className="h-5 w-5" aria-hidden="true" />
                  {monthLabel}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  type="button"
                  size="icon"
                  variant="outline"
                  onClick={() => handleMonthChange("previous")}
                  aria-label="Mois précédent"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  type="button"
                  size="icon"
                  variant="outline"
                  onClick={() => handleMonthChange("next")}
                  aria-label="Mois suivant"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
                <Button
                  type="button"
                  size="sm"
                  variant="ghost"
                  onClick={() => setCurrentMonth(startOfMonth(today))}
                >
                  Aujourd’hui
                </Button>
              </div>
            </div>
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
              {calendarDays.map((day) => {
                const isInCurrentMonth = isSameMonth(day, currentMonth);
                const isEventDay = agendaEvents.some((event) => isSameDay(event.dateValue, day));
                const isToday = isSameDay(day, today);

                return (
                  <button
                    key={day.toISOString()}
                    type="button"
                    onClick={() => {
                      if (!isInCurrentMonth) {
                        setCurrentMonth(startOfMonth(day));
                      }
                    }}
                    className={cn(
                      "relative aspect-square rounded-xl border text-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                      isInCurrentMonth
                        ? "border-border/60 bg-background hover:border-primary/60"
                        : "border-dashed border-border/40 bg-muted/40 text-muted-foreground",
                      isEventDay && "bg-accent/20 text-accent font-semibold",
                      isToday && "ring-2 ring-primary/70",
                    )}
                    aria-label={`${format(day, "d MMMM yyyy", { locale: fr })}${isEventDay ? " - événement" : ""}`}
                  >
                    <span>{format(day, "d")}</span>
                    {isEventDay ? (
                      <span className="absolute bottom-2 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-primary" />
                    ) : null}
                  </button>
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
