import AnimatedSection from "@/components/AnimatedSection";
import ContactCoordinates from "@/components/ContactCoordinates";
import {
  boardMembers,
  honoraryMembers,
  regionalRepresentatives,
  followers,
} from "@/data/team";
import { Linkedin } from "lucide-react";
import { useMemo } from "react";

type TeamMember = {
  name: string;
  title?: string;
  role?: string;
  region?: string;
  image?: string;
  email?: string;
  phone?: string;
};

const linkedinUrl =
  "https://www.linkedin.com/company/r%C3%A9seau-pour-le-partenariat-afrique-canada-rpac/";
const fallbackEmail = "info@rpac.ca";
const fallbackPhone = "+1 (819) 446-0661";
const headshots = [
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1524504388940-b1c1722655e8?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1524504388940-b1c172265161?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1524504388940-b1c1722654b4?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1524504388940-b1c1722650a6?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1544723795-3fb272eaa88d?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1544723795-432537f3b087?auto=format&fit=crop&w=600&q=80",
];

type Variant = "board" | "honorary" | "regional" | "active";

const sectionBackground: Record<Variant, string> = {
  board: "bg-white",
  honorary: "bg-[#e6eefc]",
  regional: "bg-[#e3f3ea]",
  active: "bg-[#eeeeee]",
};

const cardBackground: Record<Variant, string> = {
  board: "bg-white",
  honorary: "bg-white",
  regional: "bg-white",
  active: "bg-white",
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
  const imageSrc = member.image || headshots[(Math.abs(member.name.length) + 1) % headshots.length];

  return (
    <div
      className={`flex flex-col overflow-hidden rounded-lg border border-[#d1d5db] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${cardBackground[variant]}`}
    >
      <div className="relative h-64 w-full bg-[#e5e7eb]">
        <img
          src={imageSrc}
          alt={`Portrait de ${member.name}`}
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
          decoding="async"
        />
        <a
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#0b74b5] shadow-sm ring-1 ring-[#d1d5db]"
          aria-label={`Profil LinkedIn de ${member.name}`}
        >
          <Linkedin className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
      <div className="space-y-1 px-5 py-4 text-sm text-[#0f172a]">
        <p className="font-semibold text-[#0b4f71] text-lg leading-tight">
          {label ? `${label} :` : "Protégé :"} <span className="font-bold">{member.name}</span>
        </p>
        <p className="text-[#111827]">{title}</p>
        {phone && <p className="text-[#111827]">{phone}</p>}
        {email && <p className="text-[#0f172a]">{email}</p>}
      </div>
    </div>
  );
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
        <h2 className="text-3xl font-bold text-[#0f172a]">{title}</h2>
        <p className="mt-2 text-[#4b5563]">{subtitle}</p>
      </AnimatedSection>
      {children}
    </div>
  </section>
);

const Teams = () => {
  const boardWithImages = useMemo(
    () => boardMembers.map((member, idx) => ({ ...member, image: member.image || headshots[idx % headshots.length] })),
    [],
  );
  const honoraryWithImages = useMemo(
    () =>
      honoraryMembers.map((member, idx) => ({ ...member, image: member.image || headshots[idx % headshots.length] })),
    [],
  );
  const regionalWithImages = useMemo(
    () =>
      regionalRepresentatives.map((member, idx) => ({
        ...member,
        image: member.image || headshots[idx % headshots.length],
      })),
    [],
  );
  const activeWithImages = useMemo(
    () => followers.map((member, idx) => ({ ...member, image: member.image || headshots[idx % headshots.length] })),
    [],
  );

  return (
    <div className="bg-white">
      <section className="relative overflow-hidden bg-primary text-primary-foreground pt-24 md:pt-28 pb-24">
        <AnimatedSection className="mx-auto max-w-6xl px-6 space-y-3">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight">Notre équipe</h1>
        </AnimatedSection>
      </section>

      <Section
        title="Conseil d’administration"
        subtitle="Gouvernance stratégique et supervision des programmes portés par le RPAC."
        variant="board"
      >
        <AnimatedSection delay={60}>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {boardWithImages.map((member) => (
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
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {honoraryWithImages.map((member) => (
              <TeamCard key={member.name} member={member} label="Membre honoraire" variant="honorary" />
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
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {regionalWithImages.map((member) => (
              <TeamCard key={member.name} member={member} label="Représentant" variant="regional" />
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
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {activeWithImages.map((member) => (
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
