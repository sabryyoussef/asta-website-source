import React from "react";
import { AcademicCapIcon, GlobeAltIcon, ShieldCheckIcon } from "@heroicons/react/24/outline";

export default function AboutLanguageCertSection({ lang }) {
  const isRTL = lang === "ar";

  const features =
    lang === "ar"
      ? [
          {
            icon: AcademicCapIcon,
            title: "تقييم شامل",
            description: "يقيم مهارات الاستماع والقراءة والكتابة والتحدث",
          },
          {
            icon: GlobeAltIcon,
            title: "توافق CEFR",
            description: "يتوافق مع الإطار الأوروبي المرجعي المشترك للغات",
          },
          {
            icon: ShieldCheckIcon,
            title: "معايير عالمية",
            description: "مصمم للقبول الجامعي والأغراض المهنية",
          },
        ]
      : [
          {
            icon: AcademicCapIcon,
            title: "Comprehensive Assessment",
            description: "Assesses Listening, Reading, Writing, and Speaking skills",
          },
          {
            icon: GlobeAltIcon,
            title: "CEFR Alignment",
            description: "Aligns with the Common European Framework of Reference (CEFR)",
          },
          {
            icon: ShieldCheckIcon,
            title: "Global Standards",
            description: "Designed for university admission and professional purposes",
          },
        ];

  return (
    <div className={`py-16 px-4 bg-white ${isRTL ? "rtl" : "ltr"}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {lang === "ar" ? "حول LanguageCert الأكاديمي" : "About LanguageCert Academic"}
          </h2>
          <div className="h-1.5 w-32 bg-gradient-to-r from-[#202C5B] via-[#23A0D0] to-[#3CBEB3] mx-auto rounded-full" />
        </div>

        <div className="text-center mb-12">
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto mb-8">
            {lang === "ar"
              ? "LanguageCert الأكاديمي هو مؤهل اللغة الإنجليزية المعترف به دولياً والمصمم لتقييم مهارات اللغة الإنجليزية الأكاديمية في الحياة الواقعية."
              : "LanguageCert Academic is an internationally recognized English language qualification designed to assess real-life academic English skills."}
          </p>

          <div className="bg-gradient-to-r from-[#202C5B]/5 to-[#23A0D0]/5 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-[#202C5B] mb-4">
              {lang === "ar" ? "المؤهل:" : "The qualification:"}
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className={`flex items-start gap-3`}>
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#23A0D0] to-[#30AFC1] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <span>
                  {lang === "ar"
                    ? "يقيم مهارات الاستماع والقراءة والكتابة والتحدث"
                    : "Assesses Listening, Reading, Writing, and Speaking skills"}
                </span>
              </li>
              <li className={`flex items-start gap-3`}>
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#23A0D0] to-[#30AFC1] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <span>
                  {lang === "ar"
                    ? "يتوافق مع الإطار الأوروبي المرجعي المشترك للغات (CEFR)"
                    : "Aligns with the Common European Framework of Reference (CEFR)"}
                </span>
              </li>
              <li className={`flex items-start gap-3`}>
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#23A0D0] to-[#30AFC1] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <span>
                  {lang === "ar"
                    ? "مصمم للقبول الجامعي والأغراض المهنية"
                    : "Is designed for university admission and professional purposes"}
                </span>
              </li>
              <li className={`flex items-start gap-3`}>
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#23A0D0] to-[#30AFC1] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <span>
                  {lang === "ar"
                    ? "يوفر إجراءات اختبار آمنة وموثوقة"
                    : "Provides secure and reliable examination procedures"}
                </span>
              </li>
            </ul>
          </div>

          <p className="text-gray-600 mt-8 max-w-4xl mx-auto">
            {lang === "ar"
              ? "تم تطوير مؤهلات LanguageCert لتلبية معايير التقييم وضمان الجودة الدولية العالية."
              : "LanguageCert qualifications are developed to meet high international standards of assessment and quality assurance."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-[#23A0D0] to-[#30AFC1] flex items-center justify-center">
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-[#202C5B] mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
