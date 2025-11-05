import { ReactNode } from "react";
import { Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import ProfileCard from "@/components/shared/ProfileCard";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import useInView from "@/hooks/useInView";
import { cn } from "@/lib/utils";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import impactImage from "@/assets/impact-collage.jpg";

const boardMembers = [
  {
    name: "Dr. Awa Deschênes",
    title: "Présidente du conseil",
    image:
      "https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?auto=format&fit=crop&w=300&q=80",
    bio: "Spécialiste des politiques publiques et de la coopération internationale, elle dirige les partenariats institutionnels de l’association.",
  },
  {
    name: "Jean-Philippe Akande",
    title: "Vice-président exécutif",
    image:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=300&q=80",
    bio: "Entrepreneur en diplomatie économique, il coordonne les initiatives d’investissement et de commerce durable.",
  },
  {
    name: "Fatou Ndiaye",
    title: "Administratrice, Gouvernance et inclusion",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=300&q=80",
    bio: "Experte en genre et inclusion sociale, elle pilote les programmes dédiés aux droits et à la gouvernance citoyenne.",
  },
  {
    name: "Marc Lavoie",
    title: "Trésorier",
    image:
      "https://images.unsplash.com/photo-1590086782957-93c06ef21604?auto=format&fit=crop&w=300&q=80",
    bio: "Conseiller financier basé à Ottawa, responsable de la stratégie de financement et du suivi des contributions.",
  },
];

const honoraryMembers = [
  {
    name: "Amb. Aminata Traoré",
    title: "Ambassadrice de bonne volonté",
    image:
      "https://images.unsplash.com/photo-1544723795-3fb272eaa88d?auto=format&fit=crop&w=300&q=80",
    bio: "Ancienne cheffe de mission diplomatique, engagée dans la promotion des partenariats économiques inclusifs.",
  },
  {
    name: "Hon. David Clarkson",
    title: "Membre honoraire",
    image:
      "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?auto=format&fit=crop&w=300&q=80",
    bio: "Député canadien et défenseur du rapprochement stratégique Canada-Afrique depuis plus de dix ans.",
  },
];

const regionalRepresentatives = [
  {
    name: "Selam Bekele",
    region: "Afrique de l’Est",
    image:
      "https://images.unsplash.com/photo-1544723795-432537f3b087?auto=format&fit=crop&w=300&q=80",
    bio: "Consultante en innovation sociale basée à Addis-Abeba. Elle anime le réseau régional et connecte les partenaires locaux.",
  },
  {
    name: "Hassan Benyahia",
    region: "Afrique du Nord",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722655e8?auto=format&fit=crop&w=300&q=80",
    bio: "Spécialiste des investissements verts à Casablanca, il accompagne les projets structurants dans toute la région MENA.",
  },
  {
    name: "Chantal Kanza",
    region: "Afrique centrale",
    image:
      "https://images.unsplash.com/photo-1520927641417-257677a032c0?auto=format&fit=crop&w=300&q=80",
    bio: "Juriste et militante de la gouvernance citoyenne, basée à Kinshasa, elle coordonne les partenariats institutionnels.",
  },
  {
    name: "Elvis Moyo",
    region: "Afrique australe",
    image:
      "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&w=300&q=80",
    bio: "Entrepreneur social au Cap, il soutient les projets d’innovation et de développement inclusif dans la région.",
  },
  {
    name: "Yao Kouassi",
    region: "Afrique de l’Ouest",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80",
    bio: "Basé à Abidjan, il accompagne les gouvernements et entreprises ouest-africains dans la mise en œuvre de partenariats.",
  },
];

const strategicObjectives = [
  {
    title: "Diplomatie économique",
    summary:
      "Faciliter la signature d’accords bilatéraux et de partenariats public-privé structurants.",
    detail:
      "Nous orchestrons des missions ciblées, des tables rondes ministérielles et des dispositifs de suivi d’engagements pour garantir que chaque accord débouche sur des retombées mesurables pour les territoires.",
  },
  {
    title: "Développement inclusif",
    summary:
      "Soutenir les projets favorisant l’égalité des genres, la participation citoyenne et la résilience des territoires.",
    detail:
      "Chaque initiative intègre des dispositifs de consultation citoyenne, des indicateurs d’inclusion et un accompagnement des organisations communautaires pour renforcer la gouvernance locale.",
  },
  {
    title: "Innovation et savoirs",
    summary:
      "Créer des passerelles entre universités, centres de recherche et incubateurs pour accélérer l’innovation.",
    detail:
      "Les laboratoires d’idées et programmes d’échanges académiques que nous pilotons permettent de co-développer des solutions technologiques adaptées aux réalités africaines.",
  },
  {
    title: "Renforcement institutionnel",
    summary:
      "Accompagner les administrations publiques et les organisations régionales dans l’amélioration des services rendus aux citoyens.",
    detail:
      "Formations immersives, mentorat par pairs canadiens et diagnostics organisationnels structurent nos parcours pour moderniser les services publics.",
  },
];

const defaultSocials = [
  {
    label: "Profil LinkedIn",
    href: "https://www.linkedin.com",
    icon: <Linkedin className="h-4 w-4" aria-hidden="true" />,
  },
  {
    label: "Profil Twitter",
    href: "https://twitter.com",
    icon: <Twitter className="h-4 w-4" aria-hidden="true" />,
  },
];

const AnimatedSection = ({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) => {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.15 });
  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
        className,
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const About = () => {
  return (
    <div className="bg-background">
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-primary/80 text-primary-foreground mt-[-80px] md:mt-[-96px] pt-24 md:pt-28 pb-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,hsl(var(--primary)/0.2),transparent)]" />
        <AnimatedSection className="relative z-10 mx-auto max-w-5xl space-y-6 px-6 text-center md:text-left">
          <span className="inline-flex items-center gap-2 self-center md:self-auto rounded-full bg-white/15 px-4 py-2 text-sm font-semibold uppercase tracking-wide text-white/85 shadow-sm backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-accent" />
            À propos de l’association
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold max-w-4xl leading-tight mx-auto md:mx-0">
            Connecter les visions canadiennes et africaines pour un avenir
            partagé et durable.
          </h1>
          <p className="text-base sm:text-lg lg:text-xl max-w-3xl text-primary-foreground/85 mx-auto md:mx-0">
            Depuis plus de dix ans, l’Association des Partenariats Canada-Afrique
            construit des passerelles entre institutions publiques, entreprises,
            acteurs de la société civile et communautés universitaires.
          </p>
        </AnimatedSection>
      </section>

      <section
        className="py-24"
        aria-labelledby="presentation-heading"
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-20 px-6">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                id: "presentation-heading",
                title: "Mission",
                description:
                  "Mobiliser les expertises canadiennes et africaines pour construire des alliances économiques, diplomatiques et sociales porteuses d’impact durable et inclusif.",
              },
              {
                title: "Vision",
                description:
                  "Devenir la plateforme de référence pour des partenariats transformationnels entre le Canada et l’Afrique, au service des citoyens et des territoires.",
              },
              {
                title: "Historique",
                description:
                  "Fondée en 2013 à Montréal, l’association est née de la volonté d’un réseau de diplomates, entrepreneurs et universitaires de renforcer le dialogue stratégique avec les capitales africaines.",
              },
            ].map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 80} className="h-full">
                <article className="h-full rounded-3xl border border-border/60 bg-card/95 p-8 shadow-[var(--shadow-card)]">
                  <h2
                    id={item.id}
                    className="text-2xl font-semibold text-primary"
                  >
                    {item.title}
                  </h2>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </article>
              </AnimatedSection>
            ))}
          </div>

          <section aria-labelledby="objectifs-heading" className="space-y-10">
            <AnimatedSection className="space-y-3 max-w-2xl">
              <h2
                id="objectifs-heading"
                className="text-3xl font-bold text-primary"
              >
                Objectifs stratégiques
              </h2>
              <p className="text-muted-foreground">
                Nous orientons nos actions autour de quatre piliers qui encadrent les collaborations et renforcent les capacités de nos membres.
              </p>
            </AnimatedSection>
            <div className="grid gap-10 lg:grid-cols-[1.05fr,1fr]">
              <AnimatedSection className="relative overflow-hidden rounded-4xl bg-[#0d2a33]" delay={60}>
                <img
                  src={impactImage}
                  alt="Partenaires du RPAC sur le terrain"
                  className="h-full w-full object-cover opacity-95 transition-transform duration-700 ease-out hover:scale-[1.03]"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute top-6 left-6 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary shadow-lg">
                  Terrains RPAC
                </div>
                <div className="absolute bottom-6 right-6 rounded-2xl bg-white/90 px-5 py-4 text-sm font-semibold text-primary shadow-lg">
                  45 projets pilotes accompagnés
                </div>
              </AnimatedSection>
              <AnimatedSection delay={140} className="space-y-6 rounded-4xl border border-border/60 bg-card/95 p-8 shadow-[var(--shadow-card)]">
                <Accordion type="single" collapsible className="space-y-2">
                  {strategicObjectives.map((objective, index) => (
                    <AccordionItem key={objective.title} value={`objective-${index}`} className="border-b border-border/60">
                      <AccordionTrigger className="text-left text-base font-semibold text-primary">
                        {objective.title}
                      </AccordionTrigger>
                      <AccordionContent className="space-y-3 text-sm leading-relaxed text-muted-foreground">
                        <p>{objective.summary}</p>
                        <div className="rounded-2xl bg-muted/40 p-4">
                          <p>{objective.detail}</p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
                <Button asChild variant="outline" className="w-full justify-center">
                  <Link to="/programmes">Explorer nos programmes</Link>
                </Button>
              </AnimatedSection>
            </div>
          </section>

          <section aria-labelledby="board-heading" className="space-y-8">
            <AnimatedSection className="max-w-3xl space-y-3">
              <h2
                id="board-heading"
                className="text-3xl font-bold text-primary"
              >
                Conseil d’administration
              </h2>
              <p className="text-muted-foreground">
                Composé de leaders issus de la diplomatie, du secteur privé et de l’innovation sociale, il assure la gouvernance stratégique de l’association.
              </p>
            </AnimatedSection>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {boardMembers.map((member, index) => (
                <AnimatedSection key={member.name} delay={index * 80}>
                  <Dialog>
                    <DialogTrigger asChild>
                      <ProfileCard {...member} socials={defaultSocials} interactive />
                    </DialogTrigger>
                    <DialogContent className="max-w-xl space-y-4">
                      <DialogHeader>
                        <DialogTitle>{member.name}</DialogTitle>
                        <DialogDescription className="uppercase tracking-[0.2em] text-xs text-muted-foreground">
                          {member.title}
                        </DialogDescription>
                      </DialogHeader>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {member.bio}
                      </p>
                      <div className="rounded-2xl bg-muted/40 p-4 text-sm text-muted-foreground">
                        <p>
                          Ce membre accompagne les coalitions du RPAC et peut être sollicité pour des interventions stratégiques ou des mentors personnalisés.
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-3">
                        <Button asChild variant="outline">
                          <Link to="/adhesion-contact">Prendre contact</Link>
                        </Button>
                        <Button asChild>
                          <Link to="/programmes">Voir ses projets</Link>
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </AnimatedSection>
              ))}
            </div>
          </section>

          <section
            aria-labelledby="honorary-heading"
            className="space-y-8 rounded-4xl border border-border/60 bg-muted/20 px-8 py-10"
          >
            <AnimatedSection className="max-w-3xl space-y-3">
              <h2
                id="honorary-heading"
                className="text-3xl font-bold text-primary"
              >
                Membres honoraires
              </h2>
              <p className="text-muted-foreground">
                Nos membres honoraires soutiennent la mission de l’association à titre consultatif et par leur réseau d’influence.
              </p>
            </AnimatedSection>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {honoraryMembers.map((member, index) => (
                <AnimatedSection key={member.name} delay={index * 90}>
                  <Dialog>
                    <DialogTrigger asChild>
                      <ProfileCard {...member} socials={defaultSocials} interactive />
                    </DialogTrigger>
                    <DialogContent className="max-w-xl space-y-4">
                      <DialogHeader>
                        <DialogTitle>{member.name}</DialogTitle>
                        <DialogDescription className="uppercase tracking-[0.2em] text-xs text-muted-foreground">
                          {member.title}
                        </DialogDescription>
                      </DialogHeader>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {member.bio}
                      </p>
                      <div className="rounded-2xl bg-muted/40 p-4 text-sm text-muted-foreground">
                        <p>
                          Leurs contributions permettent de fédérer de nouveaux partenaires institutionnels et de renforcer l’impact du réseau RPAC.
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-3">
                        <Button asChild variant="outline">
                          <Link to="/adhesion-contact">Inviter à un événement</Link>
                        </Button>
                        <Button asChild>
                          <Link to="/ressources">Découvrir leurs publications</Link>
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </AnimatedSection>
              ))}
            </div>
          </section>

          <section aria-labelledby="regional-heading" className="space-y-8">
            <AnimatedSection className="max-w-3xl space-y-3">
              <h2
                id="regional-heading"
                className="text-3xl font-bold text-primary"
              >
                Représentants régionaux d’Afrique
              </h2>
              <p className="text-muted-foreground">
                Cinq délégués animent nos réseaux dans les principales régions africaines, au plus près des acteurs locaux et des priorités territoriales.
              </p>
            </AnimatedSection>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
              {regionalRepresentatives.map((representative, index) => (
                <AnimatedSection key={representative.name} delay={index * 70}>
                  <Dialog>
                    <DialogTrigger asChild>
                      <ProfileCard
                        name={representative.name}
                        title={representative.region}
                        bio={representative.bio}
                        image={representative.image}
                        socials={defaultSocials}
                        interactive
                      />
                    </DialogTrigger>
                    <DialogContent className="max-w-xl space-y-4">
                      <DialogHeader>
                        <DialogTitle>{representative.name}</DialogTitle>
                        <DialogDescription className="uppercase tracking-[0.2em] text-xs text-muted-foreground">
                          {representative.region}
                        </DialogDescription>
                      </DialogHeader>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {representative.bio}
                      </p>
                      <div className="rounded-2xl bg-muted/40 p-4 text-sm text-muted-foreground">
                        <p>
                          Disponible pour accompagner vos missions sur le terrain, faciliter les mises en relation et partager des retours d’expérience opérationnels.
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-3">
                        <Button asChild variant="outline">
                          <Link to="/agenda">Planifier une rencontre</Link>
                        </Button>
                        <Button asChild>
                          <Link to="/adhesion-contact">Contacter le RPAC</Link>
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </AnimatedSection>
              ))}
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default About;
