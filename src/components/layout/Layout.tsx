import { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "./SEO";
import ScrollToTop from "./ScrollToTop";
import { cn } from "@/lib/utils";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const isHomePage = location.pathname === "/" && location.hash.length === 0;

  return (
    <>
      <SEO />
      <ScrollToTop />
      <div
        className={cn(
          "flex min-h-screen flex-col",
          !isHomePage && "font-brand text-[17px] leading-relaxed"
        )}
      >
        <Navbar />
        <main id="main" className="flex-1 focus:outline-none pb-24" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
