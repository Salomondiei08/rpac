const Legal = () => {
  return (
    <section className="container mx-auto px-4 py-20 space-y-10">
      <header className="space-y-4 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold text-primary">Mentions légales</h1>
        <p className="text-muted-foreground">
          Ces mentions légales décrivent l’identité de l’association, les conditions d’utilisation du site et les
          responsabilités légales applicables.
        </p>
      </header>

      <article className="space-y-8 text-sm leading-relaxed text-muted-foreground">
        <section>
          <h2 className="text-lg font-semibold text-primary mb-3">Éditeur du site</h2>
          <p>
            Association Partenariats Canada-Afrique (PCA) — Organisation à but non lucratif, enregistrée au Québec,
            Canada. Siège social : Maison des Associations, 125 rue Sherbrooke Ouest, Montréal, QC.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-primary mb-3">Directeur de la publication</h2>
          <p>
            Conseil d’administration de l’Association PCA. Contact :{' '}
            <a href="mailto:contact@partenariatsca.org" className="text-accent hover:underline">
              contact@partenariatsca.org
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-primary mb-3">Hébergement</h2>
          <p>
            Le site est hébergé par un prestataire conforme aux normes canadiennes et internationales de protection des
            données. Les infrastructures sont situées au Canada.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-primary mb-3">Propriété intellectuelle</h2>
          <p>
            L’ensemble des contenus (textes, images, vidéos, documents) présentés sur ce site est la propriété exclusive
            de l’Association PCA ou de ses partenaires. Toute reproduction ou diffusion sans autorisation préalable est
            interdite.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-primary mb-3">Liens hypertextes</h2>
          <p>
            Les liens externes présents sur le site sont fournis à titre informatif. L’association ne peut être tenue
            responsable du contenu de ces sites tiers. Les liens vers notre site sont autorisés sous réserve d’en informer
            préalablement l’Association PCA.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-primary mb-3">Contact</h2>
          <p>
            Pour toute question relative aux mentions légales, veuillez nous écrire à{' '}
            <a href="mailto:legal@partenariatsca.org" className="text-accent hover:underline">
              legal@partenariatsca.org
            </a>
            .
          </p>
        </section>
      </article>
    </section>
  );
};

export default Legal;
