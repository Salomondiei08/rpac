import { Linkedin, Twitter } from "lucide-react";
import ProfileCard from "@/components/shared/ProfileCard";

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

const About = () => {
  return (
    <div className="bg-background">
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-primary/80 text-primary-foreground mt-[-80px] md:mt-[-96px] pt-24 md:pt-28 pb-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,hsl(var(--primary)/0.2),transparent)]" />
        <div className="relative z-10 mx-auto max-w-5xl space-y-6 px-6 text-center md:text-left">
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
        </div>
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
            ].map((item) => (
              <article
                key={item.title}
                className="h-full rounded-3xl border border-border/60 bg-card/95 p-8 shadow-[var(--shadow-card)]"
              >
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
            ))}
          </div>

          <section aria-labelledby="objectifs-heading" className="space-y-8">
            <div className="space-y-3 max-w-2xl">
              <h2
                id="objectifs-heading"
                className="text-3xl font-bold text-primary"
              >
                Objectifs stratégiques
              </h2>
              <p className="text-muted-foreground">
                Nous orientons nos actions autour de quatre piliers qui encadrent les collaborations et renforcent les capacités de nos membres.
              </p>
            </div>
            <ul className="grid gap-6 md:grid-cols-2">
              {[
                {
                  title: "Diplomatie économique",
                  description:
                    "Faciliter la signature d’accords bilatéraux et de partenariats public-privé structurants.",
                },
                {
                  title: "Développement inclusif",
                  description:
                    "Soutenir les projets favorisant l’égalité des genres, la participation citoyenne et la résilience des territoires.",
                },
                {
                  title: "Innovation et savoirs",
                  description:
                    "Créer des passerelles entre universités, centres de recherche et incubateurs pour accélérer l’innovation.",
                },
                {
                  title: "Renforcement institutionnel",
                  description:
                    "Accompagner les administrations publiques et les organisations régionales dans l’amélioration des services rendus aux citoyens.",
                },
              ].map((objective) => (
                <li
                  key={objective.title}
                  className="rounded-3xl border border-border/60 bg-card/95 p-8 shadow-[var(--shadow-card)]"
                >
                  <h3 className="text-lg font-semibold text-primary">
                    {objective.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {objective.description}
                  </p>
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="board-heading" className="space-y-8">
            <div className="max-w-3xl space-y-3">
              <h2
                id="board-heading"
                className="text-3xl font-bold text-primary"
              >
                Conseil d’administration
              </h2>
              <p className="text-muted-foreground">
                Composé de leaders issus de la diplomatie, du secteur privé et de l’innovation sociale, il assure la gouvernance stratégique de l’association.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {boardMembers.map((member) => (
                <ProfileCard
                  key={member.name}
                  {...member}
                  socials={[
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
                  ]}
                />
              ))}
            </div>
          </section>

          <section
            aria-labelledby="honorary-heading"
            className="space-y-8 rounded-4xl border border-border/60 bg-muted/20 px-8 py-10"
          >
            <div className="max-w-3xl space-y-3">
              <h2
                id="honorary-heading"
                className="text-3xl font-bold text-primary"
              >
                Membres honoraires
              </h2>
              <p className="text-muted-foreground">
                Nos membres honoraires soutiennent la mission de l’association à titre consultatif et par leur réseau d’influence.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {honoraryMembers.map((member) => (
                <ProfileCard
                  key={member.name}
                  {...member}
                  socials={[
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
                  ]}
                />
              ))}
            </div>
          </section>

          <section aria-labelledby="regional-heading" className="space-y-8">
            <div className="max-w-3xl space-y-3">
              <h2
                id="regional-heading"
                className="text-3xl font-bold text-primary"
              >
                Représentants régionaux d’Afrique
              </h2>
              <p className="text-muted-foreground">
                Cinq délégués animent nos réseaux dans les principales régions africaines, au plus près des acteurs locaux et des priorités territoriales.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
              {regionalRepresentatives.map((representative) => (
                <ProfileCard
                  key={representative.name}
                  name={representative.name}
                  title={representative.region}
                  bio={representative.bio}
                  image={representative.image}
                  socials={[
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
                  ]}
                />
              ))}
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default About;
