import React from "react";
import { CheckCircleIcon, ArrowDownIcon } from "@heroicons/react/24/outline";

const LANGUAGECERT_HERO_IMAGE = "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=1200&q=80";

export default function LanguageCertHeroSection({ lang }) {
  const isRTL = lang === "ar";

  const features =
    lang === "ar"
      ? [
          "مؤهلات معترف بها دولياً",
          "تقييم مهارات اللغة الإنجليزية الأكاديمية",
          "مراكز اختبارات معتمدة",
          "دعم احترافي للتحضير",
        ]
      : [
          "Internationally recognized qualifications",
          "Academic English skills assessment",
          "Approved testing centers",
          "Professional preparation support",
        ];

  return (
    <div
      className="relative overflow-hidden bg-gradient-to-r from-[#202C5B] to-[#226796] text-white"
      style={{
        backgroundImage: `url(${LANGUAGECERT_HERO_IMAGE})`,
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
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <span className="text-sm font-medium">
              {lang === "ar" ? "مؤهلات معتمدة عالمياً" : "Internationally Accredited Qualifications"}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            {lang === "ar" ? "اختبار LanguageCert الأكاديمي في Vet Brains" : "LanguageCert Academic Exam at Vet Brains"}
          </h1>

          <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed max-w-3xl mx-auto">
            {lang === "ar"
              ? "Vet Brains تفخر بتقديم مؤهلات LanguageCert الأكاديمية للطلاب الذين يسعون للحصول على دليل معترف به دولياً على إتقان اللغة الإنجليزية."
              : "Vet Brains is proud to offer LanguageCert Academic qualifications for students seeking internationally recognized proof of English language proficiency."}
          </p>

          <p className="text-lg md:text-xl text-blue-100 mb-12 leading-relaxed max-w-3xl mx-auto">
            {lang === "ar"
              ? "نوفر تسجيلاً رسمياً للاختبار ودعماً احترافياً للتحضير لمساعدة المرشحين على تحقيق درجاتهم المستهدفة بثقة."
              : "We provide official exam registration and professional preparation support to help candidates achieve their target scores with confidence."}
          </p>

          <div className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-3 ${isRTL ? "flex-row-reverse" : ""}`}
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#23A0D0] to-[#30AFC1] flex items-center justify-center flex-shrink-0">
                    <CheckCircleIcon className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-sm md:text-base text-start">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="animate-bounce">
            <ArrowDownIcon className="h-8 w-8 mx-auto text-white/60" />
          </div>
          <p className="text-blue-100 mt-2">
            {lang === "ar"
              ? "قم بالتمرير لمعرفة المزيد"
              : "Scroll to learn more"}
          </p>
        </div>
      </div>
    </div>
  );
}
