import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  ArrowTopRightOnSquareIcon,
  ArrowDownIcon,
  CheckCircleIcon,
  BookOpenIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";
import SEO from "../components/SEO";

const PSI_WEBSITE = "https://www.psiexams.com/en-gb/";
const PSI_LOGO = "/images/partners/Logo-PSI-RGB.png";
const PSI_LOGO_FALLBACK = "/images/partners/PSI.webp";
const PSI_HERO_IMAGE =
  "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=1200&q=80";

export default function TestCenter() {
  const { lang } = useParams();
  const { t } = useTranslation();
  const isRTL = lang === "ar";
  const [logoSrc, setLogoSrc] = useState(PSI_LOGO);

  const features =
    lang === "ar"
      ? [
          "اختبارات معتمدة عالمياً",
          "مراكز اختبارات",
          "أمان ونزاهة الاختبارات",
          "شراكة مع PSI",
        ]
      : [
          "Globally certified examinations",
          "Testing Centers",
          "Test security and integrity",
          "Partnership with PSI",
        ];

  return (
    <>
      <SEO
        titleAr="مركز الاختبارات | شراكة PSI | أكاديمية المهارات التطبيقية"
        titleEn="Test Center | PSI Partnership | Applied Skills Training Academy"
        descriptionAr="أكاديمية المهارات التطبيقية شريك مع PSI لتقديم اختبارات معتمدة عالمياً. تعرف على مركز الاختبارات وخدمات PSI."
        descriptionEn="Applied Skills Training Academy partners with PSI to deliver world-leading tests. Discover our test center and PSI services."
        url={`https://asta.edu.sa/${lang}/test-center`}
        isRTL={isRTL}
      />

      {/* Hero – same structure as CategoryHeroSection */}
      <div
        className="relative overflow-hidden bg-gradient-to-r from-[#202C5B] to-[#226796] text-white"
        style={{
          backgroundImage: `url(${PSI_HERO_IMAGE})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        dir={isRTL ? "rtl" : "ltr"}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#202C5B]/90 to-[#226796]/90" />
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div
            className={`absolute -top-20 ${isRTL ? "-right-20" : "-left-20"} w-64 h-64 ${isRTL ? "border-t-[120px] border-r-[120px] border-t-white border-r-transparent" : "border-t-[120px] border-l-[120px] border-t-white border-l-transparent"}`}
          />
          <div
            className={`absolute bottom-0 ${isRTL ? "left-0" : "right-0"} w-96 h-96 ${isRTL ? "border-b-[180px] border-l-[180px] border-b-white border-l-transparent" : "border-b-[180px] border-r-[180px] border-b-white border-r-transparent"}`}
          />
          <div
            className={`absolute top-1/3 ${isRTL ? "left-1/4" : "right-1/4"} w-32 h-32 ${isRTL ? "border-t-[60px] border-r-[60px] border-t-white border-r-transparent" : "border-t-[60px] border-l-[60px] border-t-white border-l-transparent"}`}
          />
          <div
            className={`absolute bottom-1/4 ${isRTL ? "right-1/3" : "left-1/3"} w-24 h-24 ${isRTL ? "border-b-[45px] border-l-[45px] border-b-white border-l-transparent" : "border-b-[45px] border-r-[45px] border-b-white border-r-transparent"}`}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={isRTL ? "text-right" : "text-left"}>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <span className="text-sm font-medium">
                  {t("testCenter.partnerBadge")}
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                {lang === "ar" ? "اكتشف" : "Discover"}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#23A0D0] to-[#30AFC1] mt-2">
                  {t("header.nav.testCenter")}
                </span>
              </h1>

              <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
                {t("testCenter.heroSubtitle")}
              </p>

              <div className="mb-10">
                <div className="grid grid-cols-2 gap-4">
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      className={`flex items-center gap-3 ${isRTL ? "" : "flex-row-reverse"}`}
                    >
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#23A0D0] to-[#30AFC1] flex items-center justify-center flex-shrink-0">
                        <CheckCircleIcon className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-sm md:text-base">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={PSI_WEBSITE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-gradient-to-r from-[#23A0D0] to-[#30AFC1] text-gray-900 rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-3"
                >
                  <span>{t("testCenter.visitPSI")}</span>
                  <ArrowTopRightOnSquareIcon className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div className="relative">
              <img
                src={PSI_HERO_IMAGE}
                alt={t("testCenter.heroImageAlt")}
                width={1200}
                height={800}
                className="rounded-2xl shadow-lg w-full h-auto object-cover"
              />

              <div
                className={`absolute -top-6 ${isRTL ? "-left-6" : "-right-6"} w-64 bg-gradient-to-r from-[#23A0D0] to-[#30AFC1] rounded-2xl p-6 shadow-2xl transform ${isRTL ? "rotate-3" : "-rotate-3"}`}
              >
                <div
                  className={`flex items-center gap-3 mb-4 ${isRTL ? "" : "flex-row-reverse"}`}
                >
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                    <BookOpenIcon className="h-6 w-6 text-white" />
                  </div>
                  <div className={isRTL ? "text-right" : "text-left"}>
                    <div className="font-bold text-lg">
                      {lang === "ar" ? "تطوير الاختبارات" : "Test Development"}
                    </div>
                    <div className="text-sm text-blue-100">
                      {lang === "ar" ? "تصميم وقياس موثوق" : "Reliable design & psychometrics"}
                    </div>
                  </div>
                </div>
                <div className="text-sm">
                  {t("testCenter.testDevelopmentDesc")}
                </div>
              </div>

              <div
                className={`absolute -bottom-6 ${isRTL ? "-right-6" : "-left-6"} w-56 bg-gradient-to-r from-[#3CBEB3] to-[#23A0D0] rounded-2xl p-6 shadow-2xl transform ${isRTL ? "-rotate-3" : "rotate-3"}`}
              >
                <div
                  className={`flex items-center gap-3 mb-4 ${isRTL ? "" : "flex-row-reverse"}`}
                >
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                    <ShieldCheckIcon className="h-6 w-6 text-white" />
                  </div>
                  <div className={isRTL ? "text-right" : "text-left"}>
                    <div className="font-bold text-lg">
                      {lang === "ar" ? "أمن الاختبارات" : "Test Security"}
                    </div>
                    <div className="text-sm text-blue-100">
                      {lang === "ar" ? "معترف بها دولياً" : "Internationally Recognized"}
                    </div>
                  </div>
                </div>
                <div className="text-sm">
                  {t("testCenter.testSecurityDesc")}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20 text-center">
            <div className="animate-bounce">
              <ArrowDownIcon className="h-8 w-8 mx-auto text-white/60" />
            </div>
            <p className="text-blue-100 mt-2">
              {lang === "ar"
                ? "قم بالتمرير لمعرفة المزيد عن شريكنا"
                : "Scroll to learn more about our partner"}
            </p>
          </div>
        </div>
      </div>

      {/* Content area – same as CategoryPage */}
      <div
        className={`min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-8 px-4`}
        dir={isRTL ? "rtl" : "ltr"}
      >
        <div className="max-w-7xl mx-auto">
          {/* Page title – same style as category */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              {t("testCenter.ourPartner")}
            </h1>
            <div
              className={`h-1.5 w-48 bg-gradient-to-r from-[#202C5B] via-[#23A0D0] to-[#3CBEB3] mx-auto rounded-full mb-6`}
            />
          </div>

          {/* Partner logo & tagline */}
          <div className="text-center mb-12">
            <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
              {t("testCenter.psiTagline")}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
              <img
                src={logoSrc}
                alt="PSI - Test development, multi-modal delivery & security"
                width={200}
                height={96}
                className="h-20 md:h-24 w-auto min-w-[120px] object-contain bg-white rounded-xl p-4 shadow-md border border-gray-200"
                onError={() => setLogoSrc(PSI_LOGO_FALLBACK)}
              />
            </div>
            <p className="mt-4 text-sm text-gray-500">
              {t("testCenter.etsCompany")}
            </p>
          </div>

          {/* What PSI offers – card grid like category */}
          <div className="mb-12">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                {t("testCenter.whatPSIOffers")}
              </h2>
              <div className="h-1.5 w-32 bg-gradient-to-r from-[#202C5B] via-[#23A0D0] to-[#3CBEB3] mx-auto rounded-full" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  key: "testDevelopment",
                  gradient: "from-[#202C5B] to-[#226796]",
                },
                { key: "testDelivery", gradient: "from-[#23A0D0] to-[#30AFC1]" },
                { key: "testSecurity", gradient: "from-[#3CBEB3] to-[#23A0D0]" },
              ].map(({ key, gradient }) => (
                <div
                  key={key}
                  className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  <div
                    className={`h-2 bg-gradient-to-r ${gradient}`}
                  />
                  <div
                    className={`p-6 ${isRTL ? "text-right" : "text-left"}`}
                  >
                    <h3 className="text-xl font-bold text-[#202C5B] mb-3">
                      {t(`testCenter.${key}Title`)}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {t(`testCenter.${key}Desc`)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA – same button style as category */}
          <div className="text-center py-12 bg-white rounded-2xl shadow-lg border border-gray-200">
            <p className="text-gray-700 font-medium mb-6">
              {t("testCenter.ctaText")}
            </p>
            <a
              href={PSI_WEBSITE}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#202C5B] to-[#226796] text-white rounded-xl font-medium hover:shadow-lg transition-all duration-300"
            >
              {t("testCenter.visitPSI")}
              <ArrowTopRightOnSquareIcon className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
