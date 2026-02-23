import React from "react";
import { AcademicCapIcon } from "@heroicons/react/24/outline";

export default function AvailableLevelsSection({ lang }) {
  const isRTL = lang === "ar";

  const levels = [
    {
      level: "B1",
      title: lang === "ar" ? "مستوى B1" : "B1 Level",
      description: lang === "ar" 
        ? "مستوى متوسط - يمكن فهم النقاط الرئيسية في المواضيع المألوفة"
        : "Intermediate - Can understand main points in familiar topics",
      gradient: "from-[#3CBEB3] to-[#23A0D0]",
    },
    {
      level: "B2",
      title: lang === "ar" ? "مستوى B2" : "B2 Level", 
      description: lang === "ar"
        ? "مستوى متقدم متوسط - يمكن التفاعل بثقة ومرونة"
        : "Upper-Intermediate - Can interact with confidence and flexibility",
      gradient: "from-[#23A0D0] to-[#30AFC1]",
    },
    {
      level: "C1",
      title: lang === "ar" ? "مستوى C1" : "C1 Level",
      description: lang === "ar"
        ? "مستوى متقدم - يمكن استخدام اللغة بفعالية للأغراض الأكاديمية"
        : "Advanced - Can use language effectively for academic purposes",
      gradient: "from-[#30AFC1] to-[#226796]",
    },
    {
      level: "C2",
      title: lang === "ar" ? "مستوى C2" : "C2 Level",
      description: lang === "ar"
        ? "مستوى إتقان - يمكن التعبير عن الأفكار بدقة وتماسك"
        : "Proficiency - Can express ideas with precision and cohesion",
      gradient: "from-[#226796] to-[#202C5B]",
    },
  ];

  return (
    <div className={`py-16 px-4 bg-gradient-to-b from-gray-50 to-gray-100 ${isRTL ? "rtl" : "ltr"}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {lang === "ar" ? "المستويات المتاحة" : "Available Levels"}
          </h2>
          <div className="h-1.5 w-32 bg-gradient-to-r from-[#202C5B] via-[#23A0D0] to-[#3CBEB3] mx-auto rounded-full" />
        </div>

        <div className="text-center mb-12">
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            {lang === "ar"
              ? "نقدم مستويات LanguageCert الأكاديمية التالية:"
              : "We offer the following LanguageCert Academic levels:"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {levels.map((level, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
            >
              <div className={`h-2 bg-gradient-to-r ${level.gradient}`} />
              <div className={`p-6 ${isRTL ? "text-right" : "text-left"}`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${level.gradient} flex items-center justify-center flex-shrink-0`}>
                    <AcademicCapIcon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#202C5B]">
                      {level.level}
                    </h3>
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  {level.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {level.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-[#202C5B]/5 to-[#23A0D0]/5 rounded-2xl p-8 max-w-4xl mx-auto">
            <p className="text-gray-700 leading-relaxed">
              {lang === "ar"
                ? "كل مستوى يقيم المرشحين وفقاً لمعايير CEFR ويقيس إتقان اللغة الإنجليزية الأكاديمية بدقة وعدالة."
                : "Each level evaluates candidates according to CEFR standards and measures academic English proficiency accurately and fairly."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
