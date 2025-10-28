const Privacy = () => {
  return (
    <section className="container mx-auto px-4 py-20 space-y-10">
      <header className="space-y-4 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold text-primary">Politique de confidentialité</h1>
        <p className="text-muted-foreground">
          Cette politique précise la façon dont l’Association Partenariats Canada-Afrique collecte, utilise et protège
          vos données personnelles.
        </p>
      </header>

      <article className="space-y-8 text-sm leading-relaxed text-muted-foreground">
        <section>
          <h2 className="text-lg font-semibold text-primary mb-3">Principes généraux</h2>
          <p>
            Nous traitons vos informations personnelles de manière responsable, conformément aux lois canadiennes,
            québécoises et aux meilleures pratiques internationales (RGPD, PIPEDA).
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-primary mb-3">Données collectées</h2>
          <p>
            Nous recueillons les données communiquées via les formulaires du site (nom, organisation, fonction, courriel,
            téléphone, intérêts) ainsi que les informations techniques nécessaires à l’amélioration de l’expérience
            utilisateur (analyse d’audience, cookies fonctionnels).
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-primary mb-3">Utilisation des données</h2>
          <p>
            Les informations sont utilisées pour gérer les adhésions, répondre aux demandes, envoyer des communications
            ciblées et analyser l’impact de nos programmes. Aucun partage commercial n’est réalisé sans consentement
            explicite.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-primary mb-3">Durée de conservation</h2>
          <p>
            Les données sont conservées pendant la durée nécessaire à la gestion de la relation avec l’association et
            supprimées au plus tard 3 ans après la dernière interaction documentée.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-primary mb-3">Vos droits</h2>
          <p>
            Vous pouvez accéder, corriger ou supprimer vos données, limiter leur traitement et retirer votre consentement
            à tout moment en écrivant à{' '}
            <a href="mailto:privacy@partenariatsca.org" className="text-accent hover:underline">
              privacy@partenariatsca.org
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-primary mb-3">Sécurité</h2>
          <p>
            Nous mettons en œuvre des mesures techniques et organisationnelles afin de protéger les données contre tout
            accès non autorisé, utilisation abusive ou divulgation non autorisée.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-primary mb-3">Mise à jour</h2>
          <p>
            Cette politique peut être mise à jour. La date de la dernière révision est précisée ici : 15 février 2024.
            Toute modification substantielle sera communiquée aux membres et visiteurs concernés.
          </p>
        </section>
      </article>
    </section>
  );
};

export default Privacy;
