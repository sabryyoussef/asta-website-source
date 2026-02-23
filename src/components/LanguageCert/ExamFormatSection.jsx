import React from "react";
import { 
  SpeakerWaveIcon, 
  BookOpenIcon, 
  PencilIcon, 
  ChatBubbleLeftRightIcon 
} from "@heroicons/react/24/outline";

export default function ExamFormatSection({ lang }) {
  const isRTL = lang === "ar";

  const examSections = [
    {
      icon: SpeakerWaveIcon,
      title: lang === "ar" ? "الاستماع" : "Listening",
      description: lang === "ar"
        ? "تقييم فهم اللغة الإنجليزية المنطوقة في سياقات أكاديمية"
        : "Assesses understanding of spoken English in academic contexts",
      gradient: "from-[#3CBEB3] to-[#23A0D0]",
    },
    {
      icon: BookOpenIcon,
      title: lang === "ar" ? "القراءة" : "Reading",
      description: lang === "ar"
        ? "تقييم فهم النصوص الأكاديمية والمواد المكتوبة"
        : "Evaluates comprehension of academic texts and written materials",
      gradient: "from-[#23A0D0] to-[#30AFC1]",
    },
    {
      icon: PencilIcon,
      title: lang === "ar" ? "الكتابة" : "Writing",
      description: lang === "ar"
        ? "تقييم القدرة على كتابة النصوص الأكاديمية بوضوح ودقة"
        : "Assesses ability to write academic texts clearly and accurately",
      gradient: "from-[#30AFC1] to-[#226796]",
    },
    {
      icon: ChatBubbleLeftRightIcon,
      title: lang === "ar" ? "التحدث" : "Speaking",
      description: lang === "ar"
        ? "تقييم مهارات التواصل الشفوي في المواقف الأكاديمية"
        : "Evaluates oral communication skills in academic situations",
      gradient: "from-[#226796] to-[#202C5B]",
    },
  ];

  return (
    <div className={`py-16 px-4 bg-white ${isRTL ? "rtl" : "ltr"}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {lang === "ar" ? "تنسيق الاختبار" : "Exam Format"}
          </h2>
          <div className="h-1.5 w-32 bg-gradient-to-r from-[#202C5B] via-[#23A0D0] to-[#3CBEB3] mx-auto rounded-full" />
        </div>

        <div className="text-center mb-12">
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
            {lang === "ar"
              ? "يشمل اختبار LanguageCert الأكاديمي:"
              : "The LanguageCert Academic exam includes:"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {examSections.map((section, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className={`h-2 bg-gradient-to-r ${section.gradient}`} />
              <div className={`p-6`}>
                <div className={`flex items-center gap-3 mb-4`}>
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${section.gradient} flex items-center justify-center flex-shrink-0`}>
                    <section.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#202C5B]">
                    {section.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {section.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-[#202C5B]/5 to-[#23A0D0]/5 rounded-2xl p-8 max-w-4xl mx-auto">
          <div className={`flex items-center gap-3 mb-4`}>
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#23A0D0] to-[#30AFC1] flex items-center justify-center flex-shrink-0">
              <ChatBubbleLeftRightIcon className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-lg font-bold text-[#202C5B]">
              {lang === "ar" ? "ملاحظة هامة" : "Important Note"}
            </h3>
          </div>
          <p className="text-gray-700 leading-relaxed">
            {lang === "ar"
              ? "قد يتم إجراء اختبار التحدث بشكل منفصل حسب تنسيق الاختبار."
              : "The Speaking test may be conducted separately depending on the exam format."}
          </p>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-600 max-w-3xl mx-auto">
            {lang === "ar"
              ? "يتم توفير مواصفات الاختبار الكاملة وإرشادات التحضير عند التسجيل."
              : "Full exam specifications and preparation guidance are provided upon registration."}
          </p>
        </div>
      </div>
    </div>
  );
}
