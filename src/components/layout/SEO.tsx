import { Helmet } from "react-helmet-async";

// Global default SEO + JSON-LD schema
const SEO = () => {
  const siteName = "Réseau pour le Partenariat Afrique-Canada (RPAC)";
  const baseUrl = (import.meta.env.VITE_SITE_URL as string | undefined) || "https://r-pac.ca";
  const normalizedBaseUrl = baseUrl.endsWith("/") ? baseUrl.slice(0, -1) : baseUrl;
  const canonical = `${normalizedBaseUrl}/`;
  const logo = `${normalizedBaseUrl}/android-chrome-192x192.png`;
  const socialImage = `${normalizedBaseUrl}/social-share.png`;
  const imageAlt = "Le Réseau du Partenariat Afrique-Canada en réunion stratégique";
  const title = "RPAC | Partenariats durables Afrique-Canada";
  const description =
    "Le Réseau pour le Partenariat Afrique-Canada (RPAC) fédère gouvernements, entreprises et société civile pour accélérer des coopérations durables entre le Canada et l’ensemble du continent africain.";

  const jsonLdOrg = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteName,
    url: canonical,
    logo,
    description,
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "information",
        email: "info@rpac.ca",
        areaServed: ["CA", "AF"],
      },
    ],
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
      <meta property="og:image" content={socialImage} />
      <meta property="og:image:alt" content={imageAlt} />
      <meta property="og:url" content={canonical} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={socialImage} />
      <meta name="twitter:image:alt" content={imageAlt} />
      <meta
        name="robots"
        content="index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1"
      />
      <link rel="canonical" href={canonical} />
      <script type="application/ld+json">{JSON.stringify(jsonLdOrg)}</script>
    </Helmet>
  );
};

export default SEO;
