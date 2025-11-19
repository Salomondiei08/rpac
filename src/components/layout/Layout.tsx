import { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "./SEO";
import ScrollToTop from "./ScrollToTop";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <SEO />
      <ScrollToTop />
      <div className="flex min-h-screen flex-col">
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
