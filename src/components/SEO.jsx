// src/components/SEO.jsx
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description }) => {
  const defaultTitle = 'Astola I.K.T. Abadiño – Club de Natación en Abadiño';
  const defaultDescription =
    'Club de natación de Abadiño que fomenta el deporte, el esfuerzo y la diversión en todas las edades.';

  return (
    <Helmet>
      <title>{title ? `${title} | Astola I.K.T.` : defaultTitle}</title>
      <meta name="description" content={description || defaultDescription} />

      {/* Open Graph (redes sociales) */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://astolaikt.es/" />
      <meta property="og:title" content={title || defaultTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:image" content="https://astolaikt.es/og-image.jpg" />
      <meta property="og:locale" content="es_ES" />

      {/* SEO Local */}
      <meta name="geo.region" content="ES-BI" />
      <meta name="geo.placename" content="Abadiño, Bizkaia, España" />
      <meta name="geo.position" content="43.162;-2.633" />
    </Helmet>
  );
};

export default SEO;
