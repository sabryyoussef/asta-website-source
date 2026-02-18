export default function LocalBusinessSchema({ lang = "ar" }) {
    const isArabic = lang === "ar";
  
    const schema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": "https://asta.edu.sa/#localbusiness",
      name: "ASTA Academy",
      image: "https://asta.edu.sa/logo.png",
      url: "https://asta.edu.sa",
      telephone: "+966920016205",
      openingHours: "Mo-Fr 08:00-20:00",
      inLanguage: isArabic ? "ar-SA" : "en-SA",
  
      address: {
        "@type": "PostalAddress",
        streetAddress: isArabic
          ? "طريق الملك فهد، الراكة الشمالية"
          : "King Fahd Road, Al Rakah Al Shamaliyah",
        addressLocality: isArabic ? "الخبر" : "Al Khobar",
        postalCode: "34225",
        addressCountry: "SA"
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
  