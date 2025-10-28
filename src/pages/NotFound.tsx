import { useLocation, NavLink } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted/30">
      <div className="text-center bg-background shadow-[var(--shadow-card)] border border-border/60 rounded-3xl px-10 py-12 space-y-6 max-w-lg">
        <span className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wide text-accent">
          404
        </span>
        <h1 className="text-3xl font-bold text-primary">
          La page demandée est introuvable
        </h1>
        <p className="text-muted-foreground">
          Le lien que vous avez suivi est peut-être expiré ou la page a été
          déplacée. Retournez à l’accueil ou explorez nos activités.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild>
            <NavLink to="/">Retour à l’accueil</NavLink>
          </Button>
          <Button variant="outline" asChild>
            <NavLink to="/nos-activites">Voir nos activités</NavLink>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
