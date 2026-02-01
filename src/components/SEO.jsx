import { useMemo } from "react";
import { Helmet } from "react-helmet-async";

export default function SEO({ titleAr, titleEn, descriptionAr, descriptionEn, url, isRTL }) {  
    const title = useMemo(() => (isRTL ? titleAr : titleEn), [isRTL, titleAr, titleEn]);
    const description = useMemo(() => (isRTL ? descriptionAr : descriptionEn), [isRTL, descriptionAr, descriptionEn]);

  return (
    <Helmet>
      <html lang={isRTL ? "ar" : "en"} dir={isRTL ? "rtl" : "ltr"} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

    </Helmet>
  );
}
