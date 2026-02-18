export default function OrganizationSchema({ lang = "ar" }) {
    const schema = {
      "@context": "https://schema.org",
      "@type": "EducationalOrganization",
      "@id": "https://asta.edu.sa/#organization",
      name: "ASTA Academy",
      url: "https://asta.edu.sa",
      logo: "https://asta.edu.sa/logo.png",
      inLanguage: lang === "ar" ? "ar-SA" : "en-SA",
      sameAs: [
        "https://x.com/astaacademysa",
        "https://www.youtube.com/@astaacademysa",
        "https://www.snapchat.com/@astaacademysa",
        "https://www.tiktok.com/@asta.academeysa",
        "https://www.instagram.com/astaacademysa/"
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+966920016205",
          contactType: "customer service",
          areaServed: "SA"
        },
        {
          "@type": "ContactPoint",
          telephone: "+966555881726",
          contactType: "customer service",
          areaServed: "SA"
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
  