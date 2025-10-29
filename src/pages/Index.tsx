import Hero from "@/components/Hero";
import ProgramsHighlights from "@/components/home/ProgramsHighlights";
import RecentEvents from "@/components/home/RecentEvents";
import NewsHighlights from "@/components/home/NewsHighlights";
import PartnersCarousel from "@/components/home/PartnersCarousel";

const Index = () => {
  return (
    <>
      {/* Skip link for accessibility */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-primary text-primary-foreground px-4 py-2 rounded-md z-50"
      >
        Aller au contenu
      </a>
      <Hero />
      <PartnersCarousel />
      <ProgramsHighlights />
      <RecentEvents />
      <NewsHighlights />
    </>
  );
};

export default Index;
