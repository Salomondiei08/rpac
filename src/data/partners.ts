import partnersData from "@/content/partners.json";

export interface Partner {
  name: string;
  logo: string;
  url: string;
}

const partnerList: Partner[] = (partnersData as { partners?: Partner[] }).partners ?? [];

export const partners: Partner[] = partnerList.map((partner) => ({
  ...partner,
  logo: partner.logo || "/placeholder.svg",
}));
