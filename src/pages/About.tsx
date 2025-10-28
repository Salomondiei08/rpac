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
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/80" />
        <div className="container mx-auto px-4 py-20 relative z-10 space-y-6">
          <span className="inline-flex items-center gap-2 uppercase tracking-wide text-xs sm:text-sm text-primary-foreground/80">
            À propos de l’association
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold max-w-3xl leading-tight">
            Connecter les visions canadiennes et africaines pour un avenir
            partagé et durable.
          </h1>
          <p className="text-base sm:text-lg lg:text-xl max-w-3xl text-primary-foreground/80">
            Depuis plus de dix ans, l’Association des Partenariats Canada-Afrique
            construit des passerelles entre institutions publiques, entreprises,
            acteurs de la société civile et communautés universitaires.
          </p>
        </div>
      </section>

      <section
        className="container mx-auto px-4 py-16 space-y-16"
        aria-labelledby="presentation-heading"
      >
        <div className="grid md:grid-cols-3 gap-10">
          <article className="space-y-4">
            <h2
              id="presentation-heading"
              className="text-2xl font-semibold text-primary"
            >
              Mission
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Mobiliser les expertises canadiennes et africaines pour construire
              des alliances économiques, diplomatiques et sociales porteuses
              d’impact durable et inclusif.
            </p>
          </article>
          <article className="space-y-4">
            <h2 className="text-2xl font-semibold text-primary">Vision</h2>
            <p className="text-muted-foreground leading-relaxed">
              Devenir la plateforme de référence pour des partenariats
              transformationnels entre le Canada et l’Afrique, au service des
              citoyens et des territoires.
            </p>
          </article>
          <article className="space-y-4">
            <h2 className="text-2xl font-semibold text-primary">Historique</h2>
            <p className="text-muted-foreground leading-relaxed">
              Fondée en 2013 à Montréal, l’association est née de la volonté
              d’un réseau de diplomates, entrepreneurs et universitaires de
              renforcer le dialogue stratégique avec les capitales africaines.
            </p>
          </article>
        </div>

        <section aria-labelledby="objectifs-heading" className="space-y-6">
          <div className="max-w-3xl space-y-3">
            <h2
              id="objectifs-heading"
              className="text-3xl font-bold text-primary"
            >
              Objectifs stratégiques
            </h2>
            <p className="text-muted-foreground">
              Nous orientons nos actions autour de quatre piliers qui encadrent
              les collaborations et renforcent les capacités de nos membres.
            </p>
          </div>
          <ul className="grid md:grid-cols-2 gap-8">
            <li className="rounded-3xl bg-card border border-border/60 p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-primary mb-3">
                Diplomatie économique
              </h3>
              <p className="text-muted-foreground">
                Faciliter la signature d’accords bilatéraux et de partenariats
                public-privé structurants.
              </p>
            </li>
            <li className="rounded-3xl bg-card border border-border/60 p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-primary mb-3">
                Développement inclusif
              </h3>
              <p className="text-muted-foreground">
                Soutenir les projets favorisant l’égalité des genres, la
                participation citoyenne et la résilience des territoires.
              </p>
            </li>
            <li className="rounded-3xl bg-card border border-border/60 p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-primary mb-3">
                Innovation et savoirs
              </h3>
              <p className="text-muted-foreground">
                Créer des passerelles entre universités, centres de recherche et
                incubateurs pour accélérer l’innovation.
              </p>
            </li>
            <li className="rounded-3xl bg-card border border-border/60 p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-primary mb-3">
                Renforcement institutionnel
              </h3>
              <p className="text-muted-foreground">
                Accompagner les administrations publiques et les organisations
                régionales dans l’amélioration des services rendus aux citoyens.
              </p>
            </li>
          </ul>
        </section>

        <section aria-labelledby="board-heading" className="space-y-8">
          <div className="space-y-3">
            <h2
              id="board-heading"
              className="text-3xl font-bold text-primary"
            >
              Conseil d’administration
            </h2>
            <p className="text-muted-foreground max-w-3xl">
              Composé de leaders issus de la diplomatie, du secteur privé et de
              l’innovation sociale, il assure la gouvernance stratégique de
              l’association.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {boardMembers.map((member) => (
              <ProfileCard
                key={member.name}
                {...member}
                socials={[
                  {
                    label: "Profil LinkedIn",
                    href: "https://www.linkedin.com",
                    icon: <Linkedin className="w-4 h-4" aria-hidden="true" />,
                  },
                  {
                    label: "Profil Twitter",
                    href: "https://twitter.com",
                    icon: <Twitter className="w-4 h-4" aria-hidden="true" />,
                  },
                ]}
              />
            ))}
          </div>
        </section>

        <section
          aria-labelledby="honorary-heading"
          className="space-y-8 bg-muted/30 border border-border/50 rounded-3xl p-10"
        >
          <div className="space-y-3">
            <h2
              id="honorary-heading"
              className="text-3xl font-bold text-primary"
            >
              Membres honoraires
            </h2>
            <p className="text-muted-foreground max-w-3xl">
              Nos membres honoraires soutiennent la mission de l’association à
              titre consultatif et par leur réseau d’influence.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {honoraryMembers.map((member) => (
              <ProfileCard
                key={member.name}
                {...member}
                socials={[
                  {
                    label: "Profil LinkedIn",
                    href: "https://www.linkedin.com",
                    icon: <Linkedin className="w-4 h-4" aria-hidden="true" />,
                  },
                  {
                    label: "Profil Twitter",
                    href: "https://twitter.com",
                    icon: <Twitter className="w-4 h-4" aria-hidden="true" />,
                  },
                ]}
              />
            ))}
          </div>
        </section>

        <section aria-labelledby="regional-heading" className="space-y-8">
          <div className="space-y-3">
            <h2
              id="regional-heading"
              className="text-3xl font-bold text-primary"
            >
              Représentants régionaux d’Afrique
            </h2>
            <p className="text-muted-foreground max-w-3xl">
              Cinq délégués animent nos réseaux dans les principales régions
              africaines, au plus près des acteurs locaux et des priorités
              territoriales.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
                    icon: <Linkedin className="w-4 h-4" aria-hidden="true" />,
                  },
                  {
                    label: "Profil Twitter",
                    href: "https://twitter.com",
                    icon: <Twitter className="w-4 h-4" aria-hidden="true" />,
                  },
                ]}
              />
            ))}
          </div>
        </section>
      </section>
    </div>
  );
};

export default About;
