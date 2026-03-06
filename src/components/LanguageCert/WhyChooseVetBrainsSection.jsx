import React from "react";
import {
  AcademicCapIcon,
  BookOpenIcon,
  ClipboardDocumentCheckIcon,
  UserGroupIcon,
  HomeIcon
} from "@heroicons/react/24/outline";

export default function WhyChooseVetBrainsSection({ lang }) {
  const isRTL = lang === "ar";

  const benefits = [
    {
      icon: AcademicCapIcon,
      title: lang === "ar" ? "إرشاد اختبار احترافي" : "Professional exam guidance",
      description: lang === "ar"
        ? "خبراء متخصصون يقدمون إرشادات شاملة للاختبار"
        : "Specialized experts provide comprehensive exam guidance",
      gradient: "from-[#3CBEB3] to-[#23A0D0]",
    },
    {
      icon: BookOpenIcon,
      title: lang === "ar" ? "دورات تحضير منظمة" : "Structured preparation courses",
      description: lang === "ar"
        ? "برامج دراسة منظمة لضمان النجاح في الاختبار"
        : "Organized study programs to ensure exam success",
      gradient: "from-[#23A0D0] to-[#30AFC1]",
    },
    {
      icon: ClipboardDocumentCheckIcon,
      title: lang === "ar" ? "اختبارات تجريبية ومحاكاة" : "Practice tests and mock exams",
      description: lang === "ar"
        ? "اختبارات تجريبية واقعية لتقييم الاستعداد"
        : "Realistic practice tests to assess readiness",
      gradient: "from-[#30AFC1] to-[#226796]",
    },
    {
      icon: UserGroupIcon,
      title: lang === "ar" ? "دعم مخصص للطلاب" : "Dedicated student support",
      description: lang === "ar"
        ? "فريق دعم متخصص لمساعدتك في كل خطوة"
        : "Dedicated support team to assist you every step",
      gradient: "from-[#226796] to-[#202C5B]",
    },
    {
      icon: HomeIcon,
      title: lang === "ar" ? "بيئة اختبار مريحة" : "Comfortable testing environment",
      description: lang === "ar"
        ? "مرافق اختبار حديثة ومريحة ومجهزة بشكل جيد"
        : "Modern, comfortable, and well-equipped testing facilities",
      gradient: "from-[#202C5B] to-[#226796]",
    },
  ];

  return (
    <div className={`py-16 px-4 bg-gradient-to-b from-gray-50 to-gray-100 ${isRTL ? "rtl" : "ltr"}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {lang === "ar" ? "لماذا تأخذ الاختبار في Vet Brains؟" : "Why Take the Exam at Vet Brains?"}
          </h2>
          <div className="h-1.5 w-32 bg-gradient-to-r from-[#202C5B] via-[#23A0D0] to-[#3CBEB3] mx-auto rounded-full" />
        </div>

        <div className="text-center mb-12">
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-4">
            {lang === "ar"
              ? "في Vet Brains، نقدم:"
              : "At Vet Brains, we provide:"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
            >
              <div className={`h-2 bg-gradient-to-r ${benefit.gradient}`} />
              <div className={`p-6`}>
                <div className={`flex items-center gap-3 mb-4`}>
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${benefit.gradient} flex items-center justify-center flex-shrink-0`}>
                    <benefit.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-[#202C5B]">
                    {benefit.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-[#202C5B]/5 to-[#23A0D0]/5 rounded-2xl p-8 max-w-4xl mx-auto">
          <div className="text-center">
            <h3 className="text-xl font-bold text-[#202C5B] mb-4">
              {lang === "ar" ? "التزامنا بنجاحك" : "Our Commitment to Your Success"}
            </h3>
            <p className="text-gray-700 leading-relaxed">
              {lang === "ar"
                ? "يضمن فريقنا أن المرشحين مستعدون ومطلعون بالكامل على عملية الاختبار بأكملها."
                : "Our team ensures candidates are fully prepared and informed throughout the entire exam process."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
