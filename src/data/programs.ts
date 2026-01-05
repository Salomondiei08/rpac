import { Globe2, LineChart, Landmark, Rocket, Building2, ShieldCheck, LucideIcon } from "lucide-react";
import programsContent from "@/content/programs.json";

export interface ProgramDetail {
  slug: string;
  title: string;
  subtitle?: string;
  excerpt: string;
  description: string;
  focus: string[];
  icon: LucideIcon;
  highlights: {
    title: string;
    description: string;
  }[];
  outcomes: string[];
}

type RawProgram = Omit<ProgramDetail, "icon"> & { icon?: string };

const iconMap: Record<string, LucideIcon> = {
  Globe2,
  LineChart,
  Landmark,
  Rocket,
  Building2,
  ShieldCheck,
};

const rawPrograms: RawProgram[] = (programsContent as { programs?: RawProgram[] }).programs ?? [];

const toStringArray = (items?: (string | { tag?: string; outcome?: string })[]): string[] =>
  (items ?? [])
    .map((item) => {
      if (typeof item === "string") return item;
      return item.tag || (item as { outcome?: string }).outcome || "";
    })
    .filter(Boolean);

export const programs: ProgramDetail[] = rawPrograms.map((program) => ({
  ...program,
  icon: program.icon && iconMap[program.icon] ? iconMap[program.icon] : Globe2,
  focus: toStringArray(program.focus as (string | { tag?: string })[]),
  outcomes: toStringArray(program.outcomes as (string | { outcome?: string })[]),
}));
