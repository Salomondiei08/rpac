import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Layout from "./components/layout/Layout";
import { HelmetProvider } from "react-helmet-async";
import About from "./pages/About";
import Activities from "./pages/Activities";
import MembershipContact from "./pages/MembershipContact";
import Legal from "./pages/Legal";
import Privacy from "./pages/Privacy";

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
            <Route path="/nos-activites" element={<Activities />} />
            <Route path="/adhesion-contact" element={<MembershipContact />} />
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
