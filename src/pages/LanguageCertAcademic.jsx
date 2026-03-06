import React from "react";
import { useParams } from "react-router-dom";
import SEO from "../components/SEO";
import LanguageCertHeroSection from "../components/LanguageCert/LanguageCertHeroSection";
import AboutLanguageCertSection from "../components/LanguageCert/AboutLanguageCertSection";
import AvailableLevelsSection from "../components/LanguageCert/AvailableLevelsSection";
import ExamFormatSection from "../components/LanguageCert/ExamFormatSection";
import WhyChooseVetBrainsSection from "../components/LanguageCert/WhyChooseVetBrainsSection";
import ResultsCertificationSection from "../components/LanguageCert/ResultsCertificationSection";
import RegistrationProcessSection from "../components/LanguageCert/RegistrationProcessSection";
import FAQSection from "../components/LanguageCert/FAQSection";
import CTASection from "../components/LanguageCert/CTASection";

export default function LanguageCertAcademic() {
  const { lang } = useParams();
  const isRTL = lang === "ar";

  return (
    <div dir={isRTL ? "rtl" : "ltr"}>
      <SEO
        titleAr="اختبار LanguageCert الأكاديمي | عقول بيطرية"
        titleEn="LanguageCert Academic Exam | Vet Brains"
        descriptionAr="عقول بيطرية تقدم اختبار LanguageCert الأكاديمي المعتمد عالمياً. تعرف على المستويات المتاحة والتنسيق وعملية التسجيل."
        descriptionEn="Vet Brains offers the internationally recognized LanguageCert Academic exam. Learn about available levels, format, and registration process."
        url={`https://vetbrains.edu.eg/${lang}/languagecert-academic`}
        isRTL={isRTL}
      />

      <LanguageCertHeroSection lang={lang} />
      <AboutLanguageCertSection lang={lang} />
      <AvailableLevelsSection lang={lang} />
      <ExamFormatSection lang={lang} />
      <WhyChooseVetBrainsSection lang={lang} />
      <ResultsCertificationSection lang={lang} />
      <RegistrationProcessSection lang={lang} />
      <FAQSection lang={lang} />
      <CTASection lang={lang} />
    </div>
  );
}
