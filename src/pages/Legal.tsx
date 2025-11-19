const Legal = () => {
  return (
    <div className="bg-background">
      <section className="relative overflow-hidden bg-primary text-primary-foreground pt-24 pb-20 md:pt-28">
        <div className="mx-auto max-w-5xl px-6 space-y-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold">Mentions légales</h1>
          <p className="mx-auto max-w-2xl text-white/90">
            Ces mentions légales décrivent l’identité du réseau, les conditions
            d’utilisation du site et les responsabilités légales applicables.
          </p>
        </div>
      </section>

      <section className="py-24">
        <article className="mx-auto max-w-4xl space-y-8 px-6 text-sm leading-relaxed text-muted-foreground">
          <section>
            <h2 className="mb-3 text-lg font-semibold text-primary">
              Éditeur du site
            </h2>
            <p>
              Réseau des Partenariats Canada-Afrique (PCA) — Organisation à but
              non lucratif, enregistrée au Québec, Canada. Siège social : Maison
              des réseaus, 125 rue Sherbrooke Ouest, Montréal, QC.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-primary">
              Directeur de la publication
            </h2>
            <p>
              Conseil d’administration du réseau PCA. Contact :{" "}
              <a
                href="mailto:info@rpac.ca"
                className="text-accent hover:underline"
              >
                info@rpac.ca
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-primary">
              Hébergement
            </h2>
            <p>
              Le site est hébergé par un prestataire conforme aux normes
              canadiennes et internationales de protection des données. Les
              infrastructures sont situées au Canada.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-primary">
              Propriété intellectuelle
            </h2>
            <p>
              L’ensemble des contenus (textes, images, vidéos, documents)
              présentés sur ce site est la propriété exclusive du réseau PCA ou
              de ses partenaires. Toute reproduction ou diffusion sans
              autorisation préalable est interdite.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-primary">
              Liens hypertextes
            </h2>
            <p>
              Les liens externes présents sur le site sont fournis à titre
              informatif. le réseau ne peut être tenue responsable du contenu de
              ces sites tiers. Les liens vers notre site sont autorisés sous
              réserve d’en informer préalablement le réseau PCA.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-primary">Contact</h2>
            <p>
              Pour toute question relative aux mentions légales, veuillez nous
              écrire à{" "}
              <a
                href="mailto:info@rpac.ca"
                className="text-accent hover:underline"
              >
                info@rpac.ca
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
