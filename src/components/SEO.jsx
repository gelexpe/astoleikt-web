// src/components/SEO.jsx
import { Helmet } from "react-helmet-async";

const SEO = ({ title, description }) => {
  const defaultTitle = "Astola Igeriketa Taldea | Club de natación en Abadiño (Bizkaia)";
  const defaultDescription =
    "Astola Igeriketa Taldea, también conocido como Astola Igeri Taldea, es un club de natación de Abadiño (Bizkaia) que fomenta el deporte, el esfuerzo y la diversión en todas las edades.";

  const fullTitle = title ? `${title} | Astola Igeriketa Taldea` : defaultTitle;
  const fullDescription = description || defaultDescription;

  return (
    <Helmet>
      {/* Título y descripción */}
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      <meta name="keywords" content="Astola Igeriketa Taldea, Astola Igeri Taldea, Club natación Abadiño, Natación Bizkaia, Club deportivo Bizkaia, IKT Abadiño" />

      {/* Favicon y accesibilidad */}
      {/* Favicons y PWA (todas las plataformas) */}
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="shortcut icon" href="/favicon.ico" />
      
      {/* iOS */}
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      
      {/* Android */}
      <link rel="manifest" href="/site.webmanifest" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="application-name" content="Astola Igeriketa Taldea" />
      
      {/* Windows */}
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-TileImage" content="/android-chrome-192x192.png" />
      <meta name="msapplication-config" content="/browserconfig.xml" />

      {/* Open Graph (Facebook, WhatsApp, LinkedIn) */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://astolaikt.es/" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:image" content="https://astolaikt.es/og-image.jpg" />
      <meta property="og:locale" content="es_ES" />
      <meta property="og:site_name" content="Astola Igeriketa Taldea" />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content="https://astolaikt.es/og-image.jpg" />
      <meta name="twitter:creator" content="@astola_ikt" />

      {/* SEO Local */}
      <meta name="geo.region" content="ES-BI" />
      <meta name="geo.placename" content="Abadiño, Bizkaia, España" />
      <meta name="geo.position" content="43.162;-2.633" />
      <meta name="ICBM" content="43.162, -2.633" />

      {/* Datos estructurados (schema.org) */}
      <script type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "SportsTeam",
          "name": "Astola Igeriketa Taldea",
          "alternateName": "Astola Igeri Taldea",
          "sport": "Natación",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Abadiño",
            "addressRegion": "Bizkaia",
            "addressCountry": "ES"
          },
          "url": "https://astolaikt.es",
          "sameAs": [
            "https://www.instagram.com/abadinokoastolaikt/",
            "https://x.com/astola_ikt"
          ],
          "image": "https://astolaikt.es/og-image.jpg",
          "description": "${fullDescription}"
        }
      `}</script>
    </Helmet>
  );
};

export default SEO;

