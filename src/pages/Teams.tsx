import AnimatedSection from "@/components/AnimatedSection";
import ContactCoordinates from "@/components/ContactCoordinates";
import { boardMembers } from "@/data/team";
import rpacLogo from "@/assets/rpac-logo.png";

type TeamMember = {
  name: string;
  title?: string;
  role?: string;
  region?: string;
  image?: string;
  imagePosition?: string;
  email?: string;
  phone?: string;
};

const linkedinUrl =
  "https://www.linkedin.com/company/r%C3%A9seau-pour-le-partenariat-afrique-canada-rpac/";

type Variant = "board";

const sectionBackground: Record<Variant, string> = {
  board: "bg-white",
};

const cardBackground: Record<Variant, string> = {
  board: "bg-white",
};

const TeamCard = ({ member, variant }: { member: TeamMember; variant: Variant }) => {
  const title = member.title ?? member.role ?? member.region ?? "Membre du réseau";
  const imageSrc = member.image || rpacLogo;

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
          style={{ objectPosition: member.imagePosition || "center center" }}
        />
      </div>
      <div className="space-y-1 px-5 py-4 text-sm text-[#0f172a]">
        <p className="font-semibold text-[#b91c1c] text-lg leading-tight">
          <span className="font-bold">{member.name}</span>
        </p>
        <p className="text-[#111827] text-base font-semibold">{title}</p>
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
        <h2 className="text-3xl font-bold text-[#b91c1c]">{title}</h2>
        <p className="mt-2 text-[#4b5563]">{subtitle}</p>
      </AnimatedSection>
      {children}
    </div>
  </section>
);

const Teams = () => {
  const boardWithImages = boardMembers.map((member) => ({ ...member, image: member.image || rpacLogo }));

  return (
    <div className="bg-white">
      <section className="relative overflow-hidden bg-primary text-primary-foreground pt-24 md:pt-28 pb-24">
        <AnimatedSection className="mx-auto max-w-6xl px-6 space-y-3">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight">Notre équipe</h1>
        </AnimatedSection>
      </section>

      <Section
        title="Conseil d’administration"
        subtitle="Il assure la gouvernance stratégique et la supervision des programmes portés par le RPAC."
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

      <ContactCoordinates />
    </div>
  );
};

export default Teams;
