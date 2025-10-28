import { useState } from "react";
import {
  CalendarDays,
  Camera,
  Download,
  Filter,
  Layers3,
  PlayCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const programs = [
  {
    title: "Axe diplomatique et économique",
    subtitle: "La stratégie canadienne pour l’Afrique",
    description:
      "Accompagner les gouvernements et institutions dans la co-construction de feuilles de route stratégiques pour un partenariat durable.",
    focus: ["Dialogue bilatéral", "Accords structurants", "Plaidoyer commun"],
  },
  {
    title: "Commerce, Investissements & Innovation",
    description:
      "Mettre en réseau investisseurs, entrepreneurs et incubateurs pour accélérer les projets porteurs d’impact socio-économique.",
    focus: ["Rencontres B2B", "Financement mixte", "Transfert technologique"],
  },
  {
    title: "Partenariats stratégiques",
    description:
      "Co-développer des solutions avec les institutions multilatérales, les villes et les régions afin d’aligner les priorités territoriales.",
    focus: ["Coalitions publiques", "Diplomatie urbaine", "Alliance panafricaine"],
  },
  {
    title: "Forum économique",
    description:
      "Organiser des rendez-vous annuels pour connecter décideurs économiques, sociétés civiles et entrepreneurs des deux continents.",
    focus: ["Sessions plénières", "Ateliers sectoriels", "Rencontres investisseurs"],
  },
  {
    title: "Rencontres sectorielles",
    description:
      "Mettre en lumière des secteurs clés : agriculture durable, santé, énergie, numérique et industries créatives.",
    focus: ["Visites terrain", "Clusters sectoriels", "Partage d’expertise"],
  },
  {
    title: "Gouvernance publique & capacités institutionnelles",
    description:
      "Renforcer les administrations publiques à travers la formation, le mentorat et l’open innovation civique.",
    focus: ["Formations ciblées", "Coaching institutionnel", "Open data"],
  },
  {
    title: "Droits, inclusion & gouvernance démocratique",
    description:
      "Promouvoir l’inclusion sociale, l’égalité des genres et le dialogue citoyen dans les processus décisionnels.",
    focus: ["Plateformes citoyennes", "Femmes leaders", "Participation des jeunes"],
  },
  {
    title: "Agenda 2063 en Action",
    description:
      "Traduire les ambitions de l’Union africaine en projets opérationnels et partenariats mesurables.",
    focus: ["Suivi d’impact", "Laboratoires d’idées", "Coalitions régionales"],
  },
];

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

const galleryItems = [
  {
    type: "photo",
    title: "Session plénière Ottawa 2023",
    src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=600&q=80",
  },
  {
    type: "video",
    title: "Forum économique Afrique de l’Ouest",
    src: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=600&q=80",
  },
  {
    type: "photo",
    title: "Atelier gouvernance inclusive",
    src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80",
  },
  {
    type: "photo",
    title: "Rencontre des femmes leaders",
    src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=600&q=80",
  },
  {
    type: "photo",
    title: "Laboratoire d’innovation publique",
    src: "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=600&q=80",
  },
  {
    type: "video",
    title: "Agenda 2063 en action",
    src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=600&q=80",
  },
];

const resources = [
  {
    title: "Rapport d’impact 2023",
    description:
      "Un panorama des projets menés dans 15 pays africains et les retombées pour nos membres.",
    file: "PDF • 4,2 Mo",
  },
  {
    title: "Note stratégique : diplomatie économique",
    description:
      "Analyse des opportunités de coopération dans les secteurs clés et recommandations politiques.",
    file: "PDF • 2,1 Mo",
  },
  {
    title: "Guide d’adhésion des membres",
    description:
      "Processus d’adhésion, avantages et modalités de participation pour les organisations et individus.",
    file: "PDF • 1,6 Mo",
  },
];

const filters = {
  type: ["Forum", "Rencontre", "Séminaire", "Sommet"],
  program: ["Commerce", "Innovation", "Gouvernance", "Partenariats"],
  region: ["Nord", "Ouest", "Centre", "Est", "Sud"],
};

const Activities = () => {
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
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-primary/80 text-primary-foreground py-20">
        <div className="container mx-auto px-4 space-y-6">
          <Badge
            variant="secondary"
            className="bg-white/15 text-primary-foreground"
          >
            Nos activités
          </Badge>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold max-w-3xl leading-tight">
            Une programmation articulée autour de huit axes stratégiques pour
            maximiser l’impact des partenariats canado-africains.
          </h1>
          <p className="text-base sm:text-lg lg:text-xl max-w-3xl text-primary-foreground/90">
            Chaque programme combine expertise, co-création et suivi d’impact
            avec un réseau de partenaires publics et privés présents dans plus de
            25 pays.
          </p>
          <div className="flex flex-wrap gap-3 text-sm text-primary-foreground/70">
            <span className="inline-flex items-center gap-2">
              <Layers3 className="w-4 h-4" />
              8 axes programmatiques
            </span>
            <span className="inline-flex items-center gap-2">
              <CalendarDays className="w-4 h-4" />
              Agenda continental
            </span>
            <span className="inline-flex items-center gap-2">
              <Camera className="w-4 h-4" />
              Galerie multimédia
            </span>
          </div>
        </div>
      </section>

      <section
        id="programmes"
        aria-labelledby="programmes-heading"
        className="container mx-auto px-4 py-16 space-y-10"
      >
        <header className="space-y-4 max-w-3xl">
          <h2
            id="programmes-heading"
            className="text-3xl font-bold text-primary"
          >
            Nos programmes
          </h2>
          <p className="text-muted-foreground">
            Chaque axe s’appuie sur des comités d’experts et des partenaires
            terrain pour assurer la mise en œuvre et le suivi des engagements.
          </p>
        </header>

        <div className="grid gap-8 md:grid-cols-2">
          {programs.map((program) => (
            <Card
              key={program.title}
              className="border border-border/60 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-shadow duration-300"
            >
              <CardHeader>
                <CardTitle className="text-xl text-primary">
                  {program.title}
                </CardTitle>
                {program.subtitle && (
                  <p className="text-sm text-accent font-medium">
                    {program.subtitle}
                  </p>
                )}
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {program.description}
                </p>
                <ul className="flex flex-wrap gap-2">
                  {program.focus.map((item) => (
                    <li key={item}>
                      <Badge variant="outline" className="border-accent text-accent">
                        {item}
                      </Badge>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section
        id="agenda"
        aria-labelledby="agenda-heading"
        className="bg-muted/30 py-16"
      >
        <div className="container mx-auto px-4 space-y-10">
          <header className="max-w-3xl space-y-4">
            <h2 id="agenda-heading" className="text-3xl font-bold text-primary">
              Événements / Agenda
            </h2>
            <p className="text-muted-foreground text-lg">
              Consultez notre agenda pour découvrir tous nos séminaires, forums
              et événements à venir. Utilisez les filtres pour suivre les
              initiatives qui vous intéressent.
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
                      variant={
                        activeProgram === program ? "default" : "outline"
                      }
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

            <div className="grid md:grid-cols-12 gap-4 bg-card rounded-3xl border border-border/60 p-6">
              <div className="md:col-span-4 space-y-2">
                <h3 className="text-xl font-semibold text-primary">
                  Calendrier interactif
                </h3>
                <p className="text-sm text-muted-foreground">
                  Suivez nos initiatives à venir, enregistrez les événements dans
                  votre agenda et recevez des rappels personnalisés.
                </p>
                <Button variant="outline" size="sm">
                  Synchroniser avec mon calendrier
                </Button>
              </div>
              <div className="md:col-span-8">
                <div className="grid grid-cols-7 gap-2 text-center text-xs text-muted-foreground uppercase tracking-wide mb-2">
                  {["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"].map(
                    (day) => (
                      <span key={day}>{day}</span>
                    ),
                  )}
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
          </div>
        </div>
      </section>

      <section
        id="galerie"
        aria-labelledby="galerie-heading"
        className="container mx-auto px-4 py-16 space-y-10"
      >
        <header className="max-w-3xl space-y-4">
          <h2 id="galerie-heading" className="text-3xl font-bold text-primary">
            Galerie multimédia
          </h2>
          <p className="text-muted-foreground">
            Revivez nos moments forts à travers une collection de photos et de
            vidéos produites avec nos partenaires et membres.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item) => (
            <div
              key={item.title}
              className="relative rounded-3xl overflow-hidden group shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-all"
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              <div className="absolute bottom-4 left-4 right-4 text-primary-foreground space-y-2">
                <span className="inline-flex items-center gap-2 text-xs uppercase tracking-wide">
                  {item.type === "video" ? (
                    <>
                      <PlayCircle className="w-4 h-4" /> Vidéo
                    </>
                  ) : (
                    <>
                      <Camera className="w-4 h-4" /> Photo
                    </>
                  )}
                </span>
                <h3 className="text-lg font-semibold">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="ressources"
        aria-labelledby="ressources-heading"
        className="bg-muted/20 py-16"
      >
        <div className="container mx-auto px-4 space-y-10">
          <header className="max-w-3xl space-y-4">
            <h2
              id="ressources-heading"
              className="text-3xl font-bold text-primary"
            >
              Publications & rapports
            </h2>
            <p className="text-muted-foreground text-lg">
              Accédez à nos documents de référence, rapports annuels, notes
              stratégiques et ressources méthodologiques.
            </p>
          </header>

          <div className="grid gap-6 md:grid-cols-3">
            {resources.map((resource) => (
              <Card
                key={resource.title}
                className="border border-border/60 shadow-[var(--shadow-card)]"
              >
                <CardHeader>
                  <CardTitle className="text-lg text-primary">
                    {resource.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {resource.description}
                  </p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground/80">
                    <span>{resource.file}</span>
                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4 mr-2" />
                      Télécharger
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Activities;
