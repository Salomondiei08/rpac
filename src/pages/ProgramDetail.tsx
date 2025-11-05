import { Link, useNavigate, useParams } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { programs } from "@/data/programs";
import { ArrowLeft, ArrowRight } from "lucide-react";

const ProgramDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const program = programs.find((item) => item.slug === slug);

  if (!program) {
    return (
      <div className="bg-background">
        <section className="flex min-h-[60vh] flex-col items-center justify-center gap-6 text-center">
          <h1 className="text-3xl font-semibold text-primary">Programme introuvable</h1>
          <p className="max-w-xl text-muted-foreground">
            Le programme recherché n’existe plus ou a été déplacé. Retournez vers la liste complète pour découvrir nos
            initiatives.
          </p>
          <div className="flex gap-4">
            <Button onClick={() => navigate(-1)} variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" />
              Retour
            </Button>
            <Button asChild>
              <Link to="/programmes">Voir tous les programmes</Link>
            </Button>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="bg-background">
      <section className="relative mt-[-80px] overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-primary/80 pt-24 pb-24 text-primary-foreground md:mt-[-96px] md:pt-28">
        <div className="mx-auto flex max-w-5xl flex-col gap-8 px-6 md:flex-row md:items-center md:justify-between">
          <div className="space-y-6 max-w-3xl">
            <Badge variant="secondary" className="bg-white/15 text-primary-foreground w-fit">
              Programme RPAC
            </Badge>
            <div className="space-y-3">
              <h1 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">{program.title}</h1>
              {program.subtitle && (
                <p className="text-lg font-medium text-primary-foreground/90">{program.subtitle}</p>
              )}
            </div>
            <p className="text-base text-primary-foreground/85 sm:text-lg">{program.description}</p>
            <div className="flex flex-wrap gap-3 text-xs sm:text-sm">
              {program.focus.map((item) => (
                <Badge key={item} variant="secondary" className="bg-white/20 text-primary-foreground">
                  {item}
                </Badge>
              ))}
            </div>
          </div>
          <Button variant="secondary" className="self-start md:self-auto" asChild>
            <Link to="/programmes">
              <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" />
              Retour aux programmes
            </Link>
          </Button>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-6xl space-y-14 px-6">
          <div className="grid gap-8 lg:grid-cols-[2fr,1fr]">
            <Card className="border border-border/60 shadow-[var(--shadow-card)]">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Ce que nous mettons en place</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                {program.highlights.map((highlight) => (
                  <div key={highlight.title} className="rounded-xl border border-border/60 bg-muted/40 p-5">
                    <h3 className="text-lg font-semibold text-primary">{highlight.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed">{highlight.description}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
            <Card className="h-fit border border-border/60 bg-muted/40 shadow-none">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Résultats attendus</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  {program.outcomes.map((outcome) => (
                    <li key={outcome} className="flex items-start gap-3">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="border border-border/60 bg-card shadow-[var(--shadow-card)]">
            <CardContent className="flex flex-col gap-6 px-6 py-8 md:flex-row md:items-center md:justify-between">
              <div className="max-w-3xl space-y-3">
                <h2 className="text-2xl font-semibold text-primary">
                  Intéressé par le programme « {program.title} » ?
                </h2>
                <p className="text-muted-foreground">
                  Contactez notre équipe pour rejoindre le cercle de partenaires, accéder aux feuilles de route et
                  explorer des opportunités de collaboration.
                </p>
              </div>
              <Button size="lg" asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link to="/adhesion-contact">
                  Contacter l’équipe
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default ProgramDetail;
