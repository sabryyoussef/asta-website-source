import React, { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";

export default function FAQSection({ lang }) {
  const isRTL = lang === "ar";
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: lang === "ar" ? "هل LanguageCert الأكاديمي مقبول دولياً؟" : "Is LanguageCert Academic accepted internationally?",
      answer: lang === "ar"
        ? "مؤهلات LanguageCert معترف بها دولياً. يُنصح المرشحون بالتحقق من متطلبات الجامعة أو المؤسسة المحددة قبل التقديم."
        : "LanguageCert qualifications are internationally recognized. Candidates are advised to check specific university or institutional requirements before applying.",
    },
    {
      question: lang === "ar" ? "ما المستوى الذي يجب أن أختاره؟" : "Which level should I choose?",
      answer: lang === "ar"
        ? "المستوى المناسب يعتمد على أهدافك الأكاديمية أو المهنية. يمكن لفريقنا مساعدتك في تحديد المستوى الأنسب."
        : "The appropriate level depends on your academic or professional goals. Our team can help you determine the most suitable level.",
    },
    {
      question: lang === "ar" ? "كم من الوقت يستغرق الحصول على النتائج؟" : "How long does it take to receive results?",
      answer: lang === "ar"
        ? "الجداول الزمنية للنتائج تعتمد على تنسيق الاختبار. سيتم توفير معلومات مفصلة عند التسجيل."
        : "Result timelines depend on the exam format. Detailed information will be provided upon registration.",
    },
    {
      question: lang === "ar" ? "هل يمكنني إعادة الاختبار؟" : "Can I retake the exam?",
      answer: lang === "ar"
        ? "نعم، يمكن للمرشحين إعادة الاختبار إذا لزم الأمر."
        : "Yes, candidates may retake the exam if needed.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={`py-16 px-4 bg-white ${isRTL ? "rtl" : "ltr"}`}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {lang === "ar" ? "الأسئلة الشائعة" : "Frequently Asked Questions"}
          </h2>
          <div className="h-1.5 w-32 bg-gradient-to-r from-[#202C5B] via-[#23A0D0] to-[#3CBEB3] mx-auto rounded-full" />
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className={`w-full px-6 py-4 text-left flex items-center justify-between ${isRTL ? "flex-row-reverse" : ""} hover:bg-gray-50 transition-colors duration-200`}
              >
                <h3 className="text-lg font-semibold text-[#202C5B] pr-2">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <ChevronUpIcon className="h-5 w-5 text-[#23A0D0]" />
                  ) : (
                    <ChevronDownIcon className="h-5 w-5 text-[#23A0D0]" />
                  )}
                </div>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className={`px-6 pb-4 ${isRTL ? "text-right" : "text-left"}`}>
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-[#202C5B]/5 to-[#23A0D0]/5 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-[#202C5B] mb-4">
              {lang === "ar" ? "هل لديك المزيد من الأسئلة؟" : "Have More Questions?"}
            </h3>
            <p className="text-gray-700 mb-6">
              {lang === "ar"
                ? "فريق الدعم لدينا جاهز للإجابة على جميع استفساراتك."
                : "Our support team is ready to answer all your inquiries."}
            </p>
            <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center`}>
              <div className="flex items-center gap-2 text-gray-700">
                <span>📞</span>
                <span>{isRTL ? "+201201568888" : "+201201568888"}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <span>📧</span>
                <span>info@vetbrains.edu.eg</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
