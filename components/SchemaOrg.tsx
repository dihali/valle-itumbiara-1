export default function SchemaOrg() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Valle Proteção Veicular Itumbiara",
    alternateName: "Valle Associação de Socorro Mútuo",
    description:
      "Proteção veicular em Itumbiara e região. Carro ou moto, sem carência, sem análise de perfil.",
    url: "https://valleprotecaoitumbiara.com.br",
    telephone: "+55-64-9319-9013",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Av. Calisto Jorge — Bairro Alto da Boa Vista",
      addressLocality: "Itumbiara",
      addressRegion: "GO",
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -18.4169,
      longitude: -49.2156,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday",
      ],
      opens: "06:00",
      closes: "23:00",
    },
    areaServed: [
      "Itumbiara","Buriti Alegre","Goiatuba","Panamá","Cachoeira Dourada",
      "Araporã","Centralina",
    ],
    sameAs: ["https://www.instagram.com/valleprotecaoitumbiara"],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
