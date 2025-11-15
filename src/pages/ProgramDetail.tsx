import { Link, useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { programs } from "@/data/programs";
import ContactCoordinates from "@/components/ContactCoordinates";
import { ArrowLeft } from "lucide-react";

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
      <section className="relative overflow-hidden bg-[#1CC47B] text-white pt-24 pb-24 md:pt-28">
        <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 text-center md:text-left">
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">{program.title}</h1>
          <Button variant="secondary" className="self-center md:self-start w-fit" asChild>
            <Link to="/programmes">
              <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" />
              Retour aux programmes
            </Link>
          </Button>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-6xl space-y-14 px-6">
          <div className="grid gap-8">
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
          </div>
        </div>
      </section>
      <ContactCoordinates />
    </div>
  );
};

export default ProgramDetail;
