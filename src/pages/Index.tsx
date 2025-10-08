import Hero from "@/components/Hero";
import Solutions from "@/components/Solutions";
import SolarKits from "@/components/SolarKits";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

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
      <Solutions />
      <SolarKits />
      <About />
      <Testimonials />
      <Contact />
    </>
  );
};

export default Index;
