export default function OrganizationSchema({ lang = "ar" }) {
    const schema = {
      "@context": "https://schema.org",
      "@type": "EducationalOrganization",
      "@id": "https://vetbrains.edu.eg/#organization",
      name: "Vet Brains",
      url: "https://vetbrains.edu.eg",
      logo: "https://vetbrains.edu.eg/logo.png",
      inLanguage: lang === "ar" ? "ar-EG" : "en-EG",
      sameAs: [
        "https://x.com/vetbrains_eg",
        "https://www.youtube.com/@vetbrains_eg",
        "https://www.snapchat.com/@vetbrains_eg",
        "https://www.tiktok.com/@vetbrains.eg",
        "https://www.instagram.com/vetbrains.eg/"
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+201003670502",
          contactType: "customer service",
          areaServed: "EG"
        },
        {
          "@type": "ContactPoint",
          telephone: "+201201568888",
          contactType: "customer service",
          areaServed: "EG"
        }
      ]
    };
  
    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    );
  }
  