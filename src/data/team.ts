import teamSectionsRaw from "@/content/teamSections.json";

export type Variant = "board" | "honorary" | "regional" | "active";

export type TeamMember = {
  name: string;
  title?: string;
  role?: string;
  region?: string;
  image?: string;
  imagePosition?: string;
  bio?: string;
  email?: string;
  phone?: string;
};

export type TeamSection = {
  id: string;
  title: string;
  subtitle: string;
  variant: Variant;
  cardLabel?: string;
  members: TeamMember[];
};

type RawTeamSection = Omit<TeamSection, "variant"> & { variant?: string };

const isVariant = (value: string | undefined): value is Variant =>
  value === "board" || value === "honorary" || value === "regional" || value === "active";

const rawSections: RawTeamSection[] =
  (teamSectionsRaw as { sections?: RawTeamSection[] }).sections ?? [];

export const teamSections: TeamSection[] = rawSections.map((section) => ({
  ...section,
  variant: isVariant(section.variant) ? section.variant : "board",
  members: section.members ?? [],
}));

export const boardMembers: TeamMember[] =
  teamSections.find((section) => section.id === "board")?.members ?? [];

export const honoraryMembers: TeamMember[] =
  teamSections.find((section) => section.id === "honorary")?.members ?? [];

export const regionalRepresentatives: TeamMember[] =
  teamSections.find((section) => section.id === "regional")?.members ?? [];

export const followers: TeamMember[] =
  teamSections.find((section) => section.id === "active")?.members ?? [];
