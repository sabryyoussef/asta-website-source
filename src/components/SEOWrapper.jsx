import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";

function SEOWrapper() {
  const { lang } = useParams(); // 'ar' or 'en'
  const path = window.location.pathname.replace(/^\/(ar|en)/, ''); // remove lang prefix

  const canonical = `https://asta.edu.sa/${lang}${path}`;
  const alternateAr = `https://asta.edu.sa/ar${path}`;
  const alternateEn = `https://asta.edu.sa/en${path}`;
  const xDefault = `https://asta.edu.sa/`;

  return (
    <Helmet>
      <link rel="canonical" href={canonical} />
      <link rel="alternate" hreflang="ar" href={alternateAr} />
      <link rel="alternate" hreflang="en" href={alternateEn} />
      <link rel="alternate" hreflang="x-default" href={xDefault} />
    </Helmet>
  );
}

export default SEOWrapper;