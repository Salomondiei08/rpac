import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Linkedin, Twitter } from "lucide-react";
import ProfileCard from "@/components/shared/ProfileCard";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import ContactCoordinates from "@/components/ContactCoordinates";
import useInView from "@/hooks/useInView";
import { cn } from "@/lib/utils";
import {
  boardMembers,
  honoraryMembers,
  regionalRepresentatives,
  followers,
} from "@/data/team";

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

const Teams = () => {
  return (
    <div className="bg-background">
      <section className="relative overflow-hidden bg-primary text-primary-foreground pt-24 md:pt-28 pb-24">
        <AnimatedSection className="mx-auto max-w-5xl px-6 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">Nos équipes</h1>
        </AnimatedSection>
      </section>

      <section className="py-20">
        <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6">
          <div id="board-heading" className="space-y-6">
            <AnimatedSection className="max-w-3xl space-y-3">
              <h2 className="text-3xl font-bold text-primary">
                Conseil d’administration
              </h2>
              <p className="text-muted-foreground">
                Il assure la gouvernance stratégique et la supervision des
                programmes portés par le RPAC.
              </p>
            </AnimatedSection>
            <div className="grid gap-6 md:grid-cols-2">
              {boardMembers.map((member, index) => (
                <AnimatedSection key={member.name} delay={index * 80}>
                  <Dialog>
                    <DialogTrigger asChild>
                      <ProfileCard
                        {...member}
                        socials={defaultSocials}
                        interactive
                        layout="horizontal"
                      />
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
                          Ce membre accompagne les coalitions du RPAC et peut
                          être sollicité pour des interventions stratégiques.
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
          </div>

          <div
            id="honorary-heading"
            className="space-y-6 rounded-4xl border border-border/60 bg-muted/20 px-8 py-10"
          >
            <AnimatedSection className="max-w-3xl space-y-3">
              <h2 className="text-3xl font-bold text-primary">
                Membres honoraires
              </h2>
              <p className="text-muted-foreground">
                Ils appuient la mission de l’association par leur influence et
                leurs réseaux bilatéraux.
              </p>
            </AnimatedSection>
            <div className="grid gap-6 md:grid-cols-2">
              {honoraryMembers.map((member, index) => (
                <AnimatedSection key={member.name} delay={index * 90}>
                  <Dialog>
                    <DialogTrigger asChild>
                      <ProfileCard
                        {...member}
                        socials={defaultSocials}
                        interactive
                        layout="horizontal"
                      />
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
                          Ils facilitent l’ouverture de nouvelles alliances
                          institutionnelles et soutiennent la portée mondiale du
                          réseau.
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-3">
                        <Button asChild variant="outline">
                          <Link to="/adhesion-contact">
                            Inviter à un événement
                          </Link>
                        </Button>
                        <Button asChild>
                          <Link to="/ressources">
                            Découvrir leurs publications
                          </Link>
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </AnimatedSection>
              ))}
            </div>
          </div>

          <div id="regional-heading" className="space-y-6">
            <AnimatedSection className="max-w-3xl space-y-3">
              <h2 className="text-3xl font-bold text-primary">
                Représentants régionaux
              </h2>
              <p className="text-muted-foreground">
                Présents sur le terrain, ils coordonnent les rencontres et
                missions sur les cinq grandes régions africaines.
              </p>
            </AnimatedSection>
            <div className="grid gap-6 md:grid-cols-2">
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
                        layout="horizontal"
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
                          Disponible pour accompagner vos missions, faciliter
                          les mises en relation et partager des retours
                          d’expérience opérationnels.
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-3">
                        <Button asChild variant="outline">
                          <Link to="/agenda">Planifier une rencontre</Link>
                        </Button>
                        <Button asChild>
                          <Link to="/adhesion-contact">
                            Contacter le RPAC
                          </Link>
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </AnimatedSection>
              ))}
            </div>
          </div>

          <div className="rounded-4xl border border-dashed border-border/60 bg-muted/10 p-8">
            <AnimatedSection className="space-y-3">
              <h2 className="text-3xl font-bold text-primary">Followers</h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                Nos Followers incarnent l’esprit de partenariat qui anime le RPAC. Professionnels,
                chercheurs et leaders issus des deux régions, ils partagent leur expertise pour
                renforcer les ponts entre l’Afrique et le Canada et soutenir les initiatives du
                réseau.
              </p>
            </AnimatedSection>
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {followers.map((person, index) => (
                <AnimatedSection key={person.name} delay={index * 70}>
                  <ProfileCard
                    name={person.name}
                    title={person.role}
                    bio={person.bio}
                    image={person.image}
                    layout="horizontal"
                  />
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>
      <ContactCoordinates />
    </div>
  );
};

export default Teams;
