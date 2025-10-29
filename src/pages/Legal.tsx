const Legal = () => {
  return (
    <div className="bg-background">
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-primary/80 text-primary-foreground mt-[-80px] md:mt-[-96px] pt-24 md:pt-28 pb-16">
        <div className="container mx-auto px-4 text-center space-y-4">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-semibold uppercase tracking-wide text-white/85 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-accent" />
            Cadre juridique
          </span>
          <h1 className="text-3xl md:text-4xl font-bold">Mentions légales</h1>
          <p className="mx-auto max-w-2xl text-primary-foreground/85">
            Ces mentions légales décrivent l’identité de l’association, les conditions d’utilisation du site et les
            responsabilités légales applicables.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 space-y-10">
        <article className="space-y-8 text-sm leading-relaxed text-muted-foreground">
          <section>
            <h2 className="mb-3 text-lg font-semibold text-primary">Éditeur du site</h2>
            <p>
              Association Partenariats Canada-Afrique (PCA) — Organisation à but non lucratif, enregistrée au Québec,
              Canada. Siège social : Maison des Associations, 125 rue Sherbrooke Ouest, Montréal, QC.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-primary">Directeur de la publication</h2>
            <p>
              Conseil d’administration de l’Association PCA. Contact :{" "}
              <a href="mailto:contact@partenariatsca.org" className="text-accent hover:underline">
                contact@partenariatsca.org
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-primary">Hébergement</h2>
            <p>
              Le site est hébergé par un prestataire conforme aux normes canadiennes et internationales de protection des
              données. Les infrastructures sont situées au Canada.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-primary">Propriété intellectuelle</h2>
            <p>
              L’ensemble des contenus (textes, images, vidéos, documents) présentés sur ce site est la propriété exclusive
              de l’Association PCA ou de ses partenaires. Toute reproduction ou diffusion sans autorisation préalable est
              interdite.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-primary">Liens hypertextes</h2>
            <p>
              Les liens externes présents sur le site sont fournis à titre informatif. L’association ne peut être tenue
              responsable du contenu de ces sites tiers. Les liens vers notre site sont autorisés sous réserve d’en informer
              préalablement l’Association PCA.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-primary">Contact</h2>
            <p>
              Pour toute question relative aux mentions légales, veuillez nous écrire à{" "}
              <a href="mailto:legal@partenariatsca.org" className="text-accent hover:underline">
                legal@partenariatsca.org
              </a>
              .
            </p>
          </section>
        </article>
      </section>
    </div>
  );
};

export default Legal;
