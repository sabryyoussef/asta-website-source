export default function ProgramSchema({ lang = "ar" ,title, description, url}) {
  const isArabic = lang === "ar";
  const schema = {
  "@context": "https://schema.org",
  "@type": "Course",
  "name": title,
  "description": description,
  "url": url,
  "provider": {
    "@type": "EducationalOrganization",
    "name": "Vet Brains",
    "sameAs": "https://vetbrains.edu.eg"
  }
}
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}