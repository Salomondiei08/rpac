import AnimatedSection from "@/components/AnimatedSection";
import ContactCoordinates from "@/components/ContactCoordinates";
import { teamSections, TeamMember, Variant } from "@/data/team";
import rpacLogo from "@/assets/rpac-logo.png";

type SectionTheme = {
  background: string;
  cardBackground: string;
  accent: string;
  border: string;
};

const variantThemes: Record<Variant, SectionTheme> = {
  board: {
    background: "bg-white",
    cardBackground: "bg-white",
    accent: "text-[#b91c1c]",
    border: "border-[#d1d5db]",
  },
  honorary: {
    background: "bg-[#fbf4ee]",
    cardBackground: "bg-white",
    accent: "text-[#7c2d12]",
    border: "border-[#e5d3c4]",
  },
  regional: {
    background: "bg-[#f3f6ff]",
    cardBackground: "bg-white",
    accent: "text-[#1d4ed8]",
    border: "border-[#c7d2fe]",
  },
  active: {
    background: "bg-[#f0faf5]",
    cardBackground: "bg-white",
    accent: "text-[#15803d]",
    border: "border-[#bbf7d0]",
  },
};

const defaultTheme: SectionTheme = {
  background: "bg-white",
  cardBackground: "bg-white",
  accent: "text-foreground",
  border: "border-border",
};

const getTheme = (variant: Variant): SectionTheme => variantThemes[variant] ?? defaultTheme;

const TeamCard = ({ member, theme }: { member: TeamMember; theme: SectionTheme }) => {
  const title = member.title ?? member.role ?? member.region ?? "Membre du réseau";
  const imageSrc = member.image || rpacLogo;
  const imagePosition = member.imagePosition || "center center";

  return (
    <div
      className={`flex flex-col overflow-hidden rounded-lg border shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${theme.cardBackground} ${theme.border}`}
    >
      <div className="relative h-64 w-full bg-[#e5e7eb]">
        <img
          src={imageSrc}
          alt={`Portrait de ${member.name}`}
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
          decoding="async"
          style={{ objectPosition: imagePosition }}
        />
      </div>
      <div className="space-y-1 px-5 py-4 text-sm text-[#0f172a]">
        <p className={`font-semibold text-lg leading-tight ${theme.accent}`}>
          {member.name}
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
  theme,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  theme: SectionTheme;
}) => (
  <section className={`py-16 ${theme.background}`}>
    <div className="mx-auto max-w-6xl px-6 space-y-8">
      <AnimatedSection>
        <h2 className={`text-3xl font-bold ${theme.accent}`}>{title}</h2>
        <p className="mt-2 text-[#4b5563]">{subtitle}</p>
      </AnimatedSection>
      {children}
    </div>
  </section>
);

const Teams = () => {
  return (
    <div className="bg-white">
      <section className="relative overflow-hidden bg-primary text-primary-foreground pt-24 md:pt-28 pb-24">
        <AnimatedSection className="mx-auto max-w-6xl px-6 space-y-3">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight">Notre équipe</h1>
        </AnimatedSection>
      </section>

      {teamSections.map((section) => {
        if (!section.members.length) return null;
        const theme = getTheme(section.variant);
        return (
          <Section
            key={section.id}
            title={section.title}
            subtitle={section.subtitle}
            theme={theme}
          >
            <AnimatedSection delay={60}>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {section.members.map((member) => (
                  <TeamCard
                    key={`${section.id}-${member.name}`}
                    member={member}
                    theme={theme}
                  />
                ))}
              </div>
            </AnimatedSection>
          </Section>
        );
      })}

      <ContactCoordinates />
    </div>
  );
};

export default Teams;
