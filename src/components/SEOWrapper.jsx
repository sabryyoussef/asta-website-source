import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";

function SEOWrapper() {
  const { lang } = useParams(); // 'ar' or 'en'
  const path = window.location.pathname.replace(/^\/(ar|en)/, ''); // remove lang prefix

  const canonical = `https://vetbrains.edu.eg/${lang}${path}`;
  const alternateAr = `https://vetbrains.edu.eg/ar${path}`;
  const alternateEn = `https://vetbrains.edu.eg/en${path}`;
  const xDefault = `https://vetbrains.edu.eg/`;

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