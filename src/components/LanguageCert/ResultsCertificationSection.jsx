import React from "react";
import { 
  DocumentCheckIcon,
  ShieldCheckIcon,
  ClockIcon
} from "@heroicons/react/24/outline";

export default function ResultsCertificationSection({ lang }) {
  const isRTL = lang === "ar";

  const features = [
    {
      icon: DocumentCheckIcon,
      title: lang === "ar" ? "النتائج الرسمية" : "Official Results",
      description: lang === "ar"
        ? "يتم إصدار النتائج الرسمية وفقاً لإجراءات LanguageCert"
        : "Official results are issued according to LanguageCert procedures",
      gradient: "from-[#3CBEB3] to-[#23A0D0]",
    },
    {
      icon: ShieldCheckIcon,
      title: lang === "ar" ? "الشهادات المعتمدة" : "Certified Certificates",
      description: lang === "ar"
        ? "المرشحون الناجحون يحصلون على شهادة LanguageCert الرسمية"
        : "Successful candidates receive an official LanguageCert certificate",
      gradient: "from-[#23A0D0] to-[#30AFC1]",
    },
    {
      icon: ClockIcon,
      title: lang === "ar" ? "التحقق الآمن" : "Secure Verification",
      description: lang === "ar"
        ? "يمكن التحقق من الشهادات من خلال نظام التحقق الآمن من LanguageCert"
        : "Certificates can be verified through LanguageCert's secure verification system",
      gradient: "from-[#30AFC1] to-[#226796]",
    },
  ];

  return (
    <div className={`py-16 px-4 bg-white ${isRTL ? "rtl" : "ltr"}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {lang === "ar" ? "النتائج والشهادات" : "Results & Certification"}
          </h2>
          <div className="h-1.5 w-32 bg-gradient-to-r from-[#202C5B] via-[#23A0D0] to-[#3CBEB3] mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className={`h-2 bg-gradient-to-r ${feature.gradient}`} />
              <div className={`p-6`}>
                <div className={`flex items-center gap-3 mb-4`}>
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${feature.gradient} flex items-center justify-center flex-shrink-0`}>
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-[#202C5B]">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-[#202C5B]/5 to-[#23A0D0]/5 rounded-2xl p-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className={`inline-flex items-center gap-3 mb-4`}>
              <ClockIcon className="h-8 w-8 text-[#202C5B]" />
              <h3 className="text-xl font-bold text-[#202C5B]">
                {lang === "ar" ? "الجدول الزمني للنتائج" : "Result Timelines"}
              </h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              {lang === "ar"
                ? "سيتم التواصل بالجداول الزمنية للنتائج أثناء التسجيل."
                : "Result timelines will be communicated during registration."}
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 max-w-3xl mx-auto">
            <h3 className="text-lg font-bold text-[#202C5B] mb-4">
              {lang === "ar" ? "شهادات معترف بها عالمياً" : "Globally Recognized Certificates"}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {lang === "ar"
                ? "شهادات LanguageCert معترف بها من قبل الجامعات والمؤسسات التعليمية والمهنية حول العالم، مما يفتح أبواب الفرص الأكاديمية والمهنية."
                : "LanguageCert certificates are recognized by universities, educational institutions, and employers worldwide, opening doors to academic and professional opportunities."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
