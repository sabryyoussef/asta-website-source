export default function ProgramSchema({ lang = "ar" ,title, description, url}) {
  const isArabic = lang === "ar";
  const schema = {
  "@context": "https://schema.org",
  "@type": "Course",
  "name": title,
  "description": description,
  "provider": {
    "@type": "EducationalOrganization",
    "name": "ASTA Academy",
    "sameAs": "https://asta.edu.sa"
  }
}
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}