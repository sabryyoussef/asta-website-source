import React from "react";
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/outline";

export default function CTASection({ lang }) {
  const isRTL = lang === "ar";

  return (
    <div className={`py-16 px-4 bg-gradient-to-r from-[#202C5B] to-[#226796] text-white ${isRTL ? "rtl" : "ltr"}`}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {lang === "ar" 
              ? "سجل الآن في اختبار LanguageCert الأكاديمي" 
              : "Register Now for LanguageCert Academic"}
          </h2>
          <p className="text-lg md:text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
            {lang === "ar"
              ? "تواصل معنا اليوم لتأمين مقعدك في جلسة الاختبار القادمة."
              : "Contact us today to secure your seat in the upcoming exam session."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <PhoneIcon className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-lg font-bold mb-2">
              {lang === "ar" ? "الهاتف" : "Phone"}
            </h3>
            <p className="text-blue-100">
              {isRTL ? "+201201568888" : "+201201568888"}
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <EnvelopeIcon className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-lg font-bold mb-2">
              {lang === "ar" ? "البريد الإلكتروني" : "Email"}
            </h3>
            <p className="text-blue-100">
              info@vetbrains.edu.eg
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <MapPinIcon className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-lg font-bold mb-2">
              {lang === "ar" ? "الموقع" : "Location"}
            </h3>
            <p className="text-blue-100">
              {lang === "ar" ? "الجيزة - مصر" : "Giza - Egypt"}
            </p>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto border border-white/20">
            <h3 className="text-xl font-bold mb-4">
              {lang === "ar" ? "ابدأ رحلتك اليوم" : "Start Your Journey Today"}
            </h3>
            <p className="text-blue-100 mb-6">
              {lang === "ar"
                ? "انضم إلى آلاف الطلاب الذين حققوا أهدافهم الأكاديمية والمهنية من خلال شهادات LanguageCert."
                : "Join thousands of students who have achieved their academic and professional goals through LanguageCert certifications."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:+201201568888`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#23A0D0] to-[#30AFC1] text-gray-900 rounded-xl font-bold hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
              >
                <PhoneIcon className="h-5 w-5" />
                <span>{lang === "ar" ? "اتصل الآن" : "Call Now"}</span>
              </a>
              <a
                href="mailto:info@vetbrains.edu.eg"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm text-white rounded-xl font-bold hover:bg-white/30 transition-all duration-300 border border-white/30"
              >
                <EnvelopeIcon className="h-5 w-5" />
                <span>{lang === "ar" ? "أرسل رسالة" : "Send Message"}</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-blue-100">
            {lang === "ar"
              ? "نحن هنا لدعمك في كل خطوة من رحلتك نحو النجاح الأكاديمي"
              : "We are here to support you every step of your academic success journey"}
          </p>
        </div>
      </div>
    </div>
  );
}
