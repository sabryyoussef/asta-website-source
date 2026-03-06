import React from "react";
import { 
  PhoneIcon,
  AcademicCapIcon,
  CalendarIcon,
  DocumentTextIcon,
  CheckCircleIcon
} from "@heroicons/react/24/outline";

export default function RegistrationProcessSection({ lang }) {
  const isRTL = lang === "ar";

  const steps = [
    {
      icon: PhoneIcon,
      title: lang === "ar" ? "تواصل مع فريق القبول" : "Contact our admissions team",
      description: lang === "ar"
        ? "تواصل معنا للاستفسار عن المتطلبات والتواريخ المتاحة"
        : "Contact us to inquire about requirements and available dates",
      stepNumber: "1",
      gradient: "from-[#3CBEB3] to-[#23A0D0]",
    },
    {
      icon: AcademicCapIcon,
      title: lang === "ar" ? "اختر مستواك المفضل" : "Select your preferred level",
      description: lang === "ar"
        ? "اختر المستوى المناسب لأهدافك الأكاديمية أو المهنية"
        : "Choose the level that suits your academic or professional goals",
      stepNumber: "2",
      gradient: "from-[#23A0D0] to-[#30AFC1]",
    },
    {
      icon: CalendarIcon,
      title: lang === "ar" ? "اختر تاريخ اختبارك" : "Choose your exam date",
      description: lang === "ar"
        ? "حدد التاريخ الذي يناسب جدولك الزمني"
        : "Select the date that fits your schedule",
      stepNumber: "3",
      gradient: "from-[#30AFC1] to-[#226796]",
    },
    {
      icon: DocumentTextIcon,
      title: lang === "ar" ? "أكمل نموذج التسجيل" : "Complete the registration form",
      description: lang === "ar"
        ? "املأ بياناتك الشخصية والمعلومات المطلوبة"
        : "Fill in your personal details and required information",
      stepNumber: "4",
      gradient: "from-[#226796] to-[#202C5B]",
    },
    {
      icon: CheckCircleIcon,
      title: lang === "ar" ? "احصل على التأكيد والتفاصيل" : "Receive confirmation and exam details",
      description: lang === "ar"
        ? "استلم تأكيد التسجيل ومعلومات الاختبار الكاملة"
        : "Receive registration confirmation and complete exam information",
      stepNumber: "5",
      gradient: "from-[#202C5B] to-[#226796]",
    },
  ];

  return (
    <div className={`py-16 px-4 bg-gradient-to-b from-gray-50 to-gray-100 ${isRTL ? "rtl" : "ltr"}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {lang === "ar" ? "عملية التسجيل" : "Registration Process"}
          </h2>
          <div className="h-1.5 w-32 bg-gradient-to-r from-[#202C5B] via-[#23A0D0] to-[#3CBEB3] mx-auto rounded-full" />
        </div>

        <div className="text-center mb-12">
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-4">
            {lang === "ar"
              ? "للتسجيل في اختبار LanguageCert الأكاديمي:"
              : "To register for the LanguageCert Academic exam:"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-[1.02] relative"
            >
              <div className={`h-2 bg-gradient-to-r ${step.gradient}`} />
              <div className={`p-6`}>
                <div className="absolute top-4 right-4">
                  <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${step.gradient} flex items-center justify-center`}>
                    <span className="text-white text-sm font-bold">{step.stepNumber}</span>
                  </div>
                </div>
                <div className={`flex items-center gap-3 mb-4`}>
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${step.gradient} flex items-center justify-center flex-shrink-0`}>
                    <step.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-[#202C5B]">
                    {step.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-[#202C5B]/5 to-[#23A0D0]/5 rounded-2xl p-8 max-w-4xl mx-auto">
          <div className="text-center">
            <h3 className="text-xl font-bold text-[#202C5B] mb-4">
              {lang === "ar" ? "معلومات إضافية" : "Additional Information"}
            </h3>
            <p className="text-gray-700 leading-relaxed">
              {lang === "ar"
                ? "لمواعيد الاختبار القادمة والرسوم، يرجى التواصل معنا مباشرة."
                : "For upcoming exam dates and fees, please contact us directly."}
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 max-w-3xl mx-auto">
            <h3 className="text-lg font-bold text-[#202C5B] mb-4">
              {lang === "ar" ? "مساعدة سريعة" : "Quick Assistance"}
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              {lang === "ar"
                ? "فريق القبول لدينا جاهز لمساعدتك في كل خطوة من عملية التسجيل. لا تتردد في طرح أي أسئلة."
                : "Our admissions team is ready to assist you at every step of the registration process. Don't hesitate to ask any questions."}
            </p>
            <div className={`flex flex-col sm:flex-row gap-4 justify-center`}>
              <div className="flex items-center gap-2 text-gray-700">
                <PhoneIcon className="h-5 w-5" />
                <span>{lang === "ar" ? "+201201568888" : "+201201568888"}</span>
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
