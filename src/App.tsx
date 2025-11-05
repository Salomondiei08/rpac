import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Layout from "./components/layout/Layout";
import { HelmetProvider } from "react-helmet-async";
import About from "./pages/About";
import MembershipContact from "./pages/MembershipContact";
import Legal from "./pages/Legal";
import Privacy from "./pages/Privacy";
import Programs from "./pages/Programs";
import Agenda from "./pages/Agenda";
import Gallery from "./pages/Gallery";
import Partners from "./pages/Partners";
import Resources from "./pages/Resources";
import ProgramDetail from "./pages/ProgramDetail";

const App = () => (
  <HelmetProvider>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/a-propos" element={<About />} />
            <Route path="/programmes" element={<Programs />} />
            <Route path="/programmes/:slug" element={<ProgramDetail />} />
            <Route path="/agenda" element={<Agenda />} />
            <Route path="/galerie" element={<Gallery />} />
            <Route path="/adhesion-contact" element={<MembershipContact />} />
            <Route path="/partenaires" element={<Partners />} />
            <Route path="/ressources" element={<Resources />} />
            <Route path="/mentions-legales" element={<Legal />} />
            <Route path="/politique-confidentialite" element={<Privacy />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </HelmetProvider>
);

export default App;
