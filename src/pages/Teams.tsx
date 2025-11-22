import AnimatedSection from "@/components/AnimatedSection";
import ContactCoordinates from "@/components/ContactCoordinates";
import {
  boardMembers,
  honoraryMembers,
  regionalRepresentatives,
  followers,
} from "@/data/team";
import { Linkedin } from "lucide-react";

type TeamMember = {
  name: string;
  title?: string;
  role?: string;
  region?: string;
  image: string;
  email?: string;
  phone?: string;
};

type Variant = "board" | "honorary" | "regional" | "active";

const linkedinUrl =
  "https://www.linkedin.com/company/r%C3%A9seau-pour-le-partenariat-afrique-canada-rpac/";
const fallbackEmail = "info@rpac.ca";
const fallbackPhone = "+1 (819) 446-0661";
const defaultTeamImage = "/placeholder.svg";

const variantStyles: Record<
  Variant,
  {
    border: string;
    badge: string;
    hover: string;
    title: string;
    background: string;
  }
> = {
  board: {
    border: "border-[#1b7f83]/60",
    badge: "text-[#1b7f83]",
    hover: "hover:border-[#1b7f83] hover:shadow-[0_10px_40px_rgba(27,127,131,0.18)]",
    title: "text-[#0b3c40]",
    background: "bg-[#e6f6f6]",
  },
  honorary: {
    border: "border-[#7c2d12]/50",
    badge: "text-[#7c2d12]",
    hover: "hover:border-[#7c2d12] hover:shadow-[0_10px_40px_rgba(124,45,18,0.18)]",
    title: "text-[#4a1c0a]",
    background: "bg-[#f9f1eb]",
  },
  regional: {
    border: "border-[#1d4ed8]/50",
    badge: "text-[#1d4ed8]",
    hover: "hover:border-[#1d4ed8] hover:shadow-[0_10px_40px_rgba(29,78,216,0.18)]",
    title: "text-[#0f2d8a]",
    background: "bg-[#eef2ff]",
  },
  active: {
    border: "border-[#15803d]/50",
    badge: "text-[#15803d]",
    hover: "hover:border-[#15803d] hover:shadow-[0_10px_40px_rgba(21,128,61,0.18)]",
    title: "text-[#0b3b1d]",
    background: "bg-[#ecf8f1]",
  },
};

const TeamCard = ({
  member,
  label,
  variant,
}: {
  member: TeamMember;
  label?: string;
  variant: Variant;
}) => {
  const title = member.title ?? member.role ?? member.region ?? "Membre du réseau";
  const email = member.email ?? fallbackEmail;
  const phone = member.phone ?? fallbackPhone;
  const styles = variantStyles[variant];

  return (
    <div
      className={`group flex flex-col overflow-hidden rounded-xl border shadow-sm transition-transform duration-300 hover:-translate-y-1.5 ${styles.border} ${styles.hover} ${styles.background}`}
    >
      <div className="relative bg-white">
        <img
          src={defaultTeamImage}
          alt={`Portrait de ${member.name}`}
          className="h-64 w-full object-cover"
          loading="lazy"
          decoding="async"
        />
        <a
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-[#005f6b] shadow-md ring-1 ring-border/60 transition-colors hover:bg-white"
          aria-label={`Profil LinkedIn de ${member.name}`}
        >
          <Linkedin className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
      <div className="space-y-1 px-5 py-5 text-sm text-muted-foreground">
        <p className={`font-semibold ${styles.title}`}>
          {label ? `${label} :` : "Protégé :"}{" "}
          <span className="font-bold">{member.name}</span>
        </p>
        <p className="text-foreground">{title}</p>
        {phone && <p>{phone}</p>}
        {email && <p className={`${styles.badge}`}>{email}</p>}
      </div>
    </div>
  );
};

const sectionBackground: Record<Variant, string> = {
  board: "bg-[#f1fbfa]",
  honorary: "bg-[#fbf4ee]",
  regional: "bg-[#f3f6ff]",
  active: "bg-[#f0faf5]",
};

const Section = ({
  title,
  subtitle,
  children,
  variant,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  variant: Variant;
}) => (
  <section className={`py-16 ${sectionBackground[variant]}`}>
    <div className="mx-auto max-w-6xl px-6 space-y-8">
      <AnimatedSection>
        <h2 className="text-3xl font-bold text-foreground">{title}</h2>
        <p className="mt-2 text-muted-foreground">{subtitle}</p>
      </AnimatedSection>
      {children}
    </div>
  </section>
);

const Teams = () => {
  return (
    <div className="bg-[#f5f5f5]">
      <section className="relative overflow-hidden bg-white pt-16 pb-10 border-b border-border/40">
        <AnimatedSection className="mx-auto max-w-6xl px-6 text-left space-y-2">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#005f6b]">
            Notre équipe
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground">
            Des experts engagés pour le partenariat Afrique-Canada
          </h1>
        </AnimatedSection>
      </section>

      <Section
        title="Conseil d’administration"
        subtitle="Gouvernance stratégique et supervision des programmes portés par le RPAC."
        variant="board"
      >
        <AnimatedSection delay={60}>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {boardMembers.map((member) => (
              <TeamCard key={member.name} member={member} variant="board" />
            ))}
          </div>
        </AnimatedSection>
      </Section>

      <Section
        title="Membres honoraires"
        subtitle="Ambassadeurs qui apportent leur rayonnement et leurs réseaux bilatéraux."
        variant="honorary"
      >
        <AnimatedSection delay={60}>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {honoraryMembers.map((member) => (
              <TeamCard
                key={member.name}
                member={member}
                label="Membre honoraire"
                variant="honorary"
              />
            ))}
          </div>
        </AnimatedSection>
      </Section>

      <Section
        title="Représentants régionaux"
        subtitle="Présents sur le terrain, ils coordonnent rencontres et missions dans chaque région."
        variant="regional"
      >
        <AnimatedSection delay={60}>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {regionalRepresentatives.map((member) => (
              <TeamCard
                key={member.name}
                member={member}
                label="Représentant"
                variant="regional"
              />
            ))}
          </div>
        </AnimatedSection>
      </Section>

      <Section
        title="Membres actifs & partenaires"
        subtitle="Praticiens et experts qui contribuent au quotidien à l’impact du réseau."
        variant="active"
      >
        <AnimatedSection delay={60}>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {followers.map((member) => (
              <TeamCard key={member.name} member={member} label="Membre actif" variant="active" />
            ))}
          </div>
        </AnimatedSection>
      </Section>

      <ContactCoordinates />
    </div>
  );
};

export default Teams;
