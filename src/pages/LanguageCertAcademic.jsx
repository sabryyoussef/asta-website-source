import React from "react";
import { useParams } from "react-router-dom";
import SEO from "../components/SEO";
import LanguageCertHeroSection from "../components/LanguageCert/LanguageCertHeroSection";
import AboutLanguageCertSection from "../components/LanguageCert/AboutLanguageCertSection";
import AvailableLevelsSection from "../components/LanguageCert/AvailableLevelsSection";
import ExamFormatSection from "../components/LanguageCert/ExamFormatSection";
import WhyChooseASTASection from "../components/LanguageCert/WhyChooseASTASection";
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
        titleAr="اختبار LanguageCert الأكاديمي | أكاديمية المهارات التطبيقية"
        titleEn="LanguageCert Academic Exam | Applied Skills Training Academy"
        descriptionAr="ASTA تقدم اختبار LanguageCert الأكاديمي المعتمد عالمياً. تعرف على المستويات المتاحة والتنسيق وعملية التسجيل."
        descriptionEn="ASTA offers the internationally recognized LanguageCert Academic exam. Learn about available levels, format, and registration process."
        url={`https://asta.edu.sa/${lang}/languagecert-academic`}
        isRTL={isRTL}
      />

      <LanguageCertHeroSection lang={lang} />
      <AboutLanguageCertSection lang={lang} />
      <AvailableLevelsSection lang={lang} />
      <ExamFormatSection lang={lang} />
      <WhyChooseASTASection lang={lang} />
      <ResultsCertificationSection lang={lang} />
      <RegistrationProcessSection lang={lang} />
      <FAQSection lang={lang} />
      <CTASection lang={lang} />
    </div>
  );
}
