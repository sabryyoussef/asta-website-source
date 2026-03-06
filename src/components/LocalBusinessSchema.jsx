export default function LocalBusinessSchema({ lang = "ar" }) {
    const isArabic = lang === "ar";
  
    const schema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": "https://vetbrains.edu.eg/#localbusiness",
      name: "Vet Brains",
      image: "https://vetbrains.edu.eg/logo.png",
      url: "https://vetbrains.edu.eg",
      telephone: "+201003670502",
      openingHours: "Mo-Fr 08:00-20:00",
      inLanguage: isArabic ? "ar-EG" : "en-EG",
  
      address: {
        "@type": "PostalAddress",
        streetAddress: isArabic
          ? "451 شارع الهرم"
          : "451 Haram Street",
        addressLocality: isArabic ? "الجيزة" : "Giza",
        postalCode: "12556",
        addressCountry: "EG"
      },
  
      geo: {
        "@type": "GeoCoordinates",
        latitude: 26.368163933118716,
        longitude: 50.18166455834135
      }
    };
  
    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    );
  }
  