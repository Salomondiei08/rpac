import observatoireLogo from "@/assets/observatoire.png";
import nmadvisoryLogo from "@/assets/nmadvisory-logo.jpg";

interface Partner {
  name: string;
  logo: string;
  url: string;
}

export const partners: Partner[] = [
  {
    name: "Observatoire de l’agenda 2030",
    logo: observatoireLogo,
    url: "https://observatoireagenda2030.uqam.ca/",
  },
  {
    name: "NIM ADVISORY",
    logo: nmadvisoryLogo,
    url: "https://www.nmadvisory.ca/",
  },
];
