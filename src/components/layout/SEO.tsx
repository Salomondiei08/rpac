import { Helmet } from "react-helmet-async";

// Global default SEO + JSON-LD schema
const SEO = () => {
  const siteName = "Mienssa Energy";
  const title = `${siteName} - L'énergie solaire accessible à tous`;
  const description =
    "Mienssa Energy, votre partenaire en énergie solaire. Installation de panneaux solaires, kits solaires sur-mesure et maintenance en Côte d'Ivoire.";
  const url = "https://www.mienssa-energy.com"; // Placeholder; replace with real domain
  const image =
    "https://storage.googleapis.com/gpt-engineer-file-uploads/fWGee95WDThbZaV7NtGh9rbUFT03/social-images/social-1759892605022-D‚clinaison 1.png";

  const jsonLdOrg = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteName,
    url,
    logo: image,
    sameAs: [
      "https://www.facebook.com/", // Replace with actual
      "https://www.linkedin.com/", // Replace with actual
    ],
    description,
    address: {
      "@type": "PostalAddress",
      addressCountry: "CI",
      addressLocality: "Abidjan",
      streetAddress: "Cocody",
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
