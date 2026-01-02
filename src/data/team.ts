import portrait1 from "@/assets/portrait-1.jpg";
import portrait2 from "@/assets/portrait-2.jpg";
import portrait3 from "@/assets/portrait-3.jpg";
import portrait4 from "@/assets/portrait-4.jpg";
import portrait5 from "@/assets/portrait-5.jpg";
import portrait6 from "@/assets/portrait-6.jpg";
import portrait7 from "@/assets/portrait-7.jpg";

export const boardMembers = [
  {
    name: "N’Faly Kourouma",
    title: "Président-fondateur",
    image: portrait1,
    imagePosition: "center top",
  },
  {
    name: "Ibrahima Doumbia",
    title: "Vice-président-fondateur",
    image: portrait2,
  },
  {
    name: "Hugues Kemadjou Djiomba",
    title: "Trésorier",
    image: portrait3,
    imagePosition: "center top",
  },
  {
    name: "Yonli Paramanga Jean Bertrand Aristide",
    title: "Responsable des relations publiques et partenariats institutionnels",
    image: portrait4,
  },
  {
    name: "Dr Moulay Hicham El Amrani",
    title: "Responsable pôle académique et recherche",
    image: portrait5,
  },
  {
    name: "Kofi Nagno M’BEOU",
    title: "Responsable chargé de l’alignement Afrique–Canada",
    image: portrait6,
  },
  {
    name: "Dre Fatma NDIAYE",
    title: "Responsable chargée des relations avec la diaspora africaine",
    image: portrait7,
  },
];

// Sections temporairement masquées
export const honoraryMembers: { name: string; title?: string; image?: string }[] = [];
export const regionalRepresentatives: { name: string; region?: string; image?: string }[] = [];
export const followers: { name: string; role?: string; image?: string }[] = [];
