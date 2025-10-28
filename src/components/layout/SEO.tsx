import { Helmet } from "react-helmet-async";

// Global default SEO + JSON-LD schema
const SEO = () => {
  const siteName = "Association Partenariats Canada-Afrique";
  const title = `${siteName} - Bâtir des partenariats transformateurs`;
  const description =
    "L’Association Partenariats Canada-Afrique rassemble institutions, entreprises et acteurs de la société civile pour co-construire des initiatives de diplomatie économique, d’innovation et de gouvernance inclusive sur le continent africain.";
  const url = "https://www.partenariatsca.org"; // Placeholder; replace with real domaine
  const image =
    "https://storage.googleapis.com/gpt-engineer-file-uploads/fWGee95WDThbZaV7NtGh9rbUFT03/social-images/social-1759892605022-D‚clinaison 1.png";

  const jsonLdOrg = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteName,
    url,
    logo: image,
    sameAs: ["https://www.linkedin.com/", "https://twitter.com/"],
    description,
    address: {
      "@type": "PostalAddress",
      addressCountry: "CA",
      addressLocality: "Montréal",
      streetAddress: "125 rue Sherbrooke Ouest",
    },
  };

  return (
    <Helmet prioritizeSeoTags>
      <html lang="fr" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="author" content={siteName} />
      <meta property="og:locale" content="fr_FR" />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <link rel="canonical" href={url} />
      <script type="application/ld+json">{JSON.stringify(jsonLdOrg)}</script>
    </Helmet>
  );
};

export default SEO;
