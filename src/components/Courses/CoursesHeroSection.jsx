import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  AcademicCapIcon,
  BookOpenIcon,
  UserGroupIcon,
  ChartBarIcon,
  ArrowDownIcon,
  PlayCircleIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

const CoursesHeroSection = ({ lang = 'ar' }) => {
  const { t } = useTranslation();
  const isRTL = lang === 'ar';
  
  // Features for courses
  const features = {
    ar: [
      "تعلم مرن في أي وقت",
      "محتوى تفاعلي وعملي",
      "شهادات إتمام معتمدة",
      "دعم مستمر من المدربين"
    ],
    en: [
      "Flexible Learning Anytime",
      "Interactive and Practical Content",
      "Certified Completion Certificates",
      "Continuous Support from Trainers"
    ]
  };
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-[#202C5B] to-[#226796] text-white" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* خلفية مع مثلثات هندسية */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute -top-20 -right-20 w-64 h-64 border-t-[120px] border-r-[120px] border-t-white border-r-transparent"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 border-b-[180px] border-l-[180px] border-b-white border-l-transparent"></div>
        <div className="absolute top-1/3 left-1/4 w-32 h-32 border-t-[60px] border-r-[60px] border-t-white border-r-transparent"></div>
        <div className="absolute bottom-1/4 right-1/3 w-24 h-24 border-b-[45px] border-l-[45px] border-b-white border-l-transparent"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* النص الرئيسي */}
          <div className={isRTL ? 'text-right' : 'text-left'}>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <span className="text-sm font-medium"> {t("courses.title")}</span>
            </div>
            
            <h1 className={`${isRTL ? 'text-right text-4xl md:text-5xl lg:text-6xl' : 'text-left text-4xl md:text-4xl lg:text-5xl'} font-bold mb-6 leading-tight`}>
              {t("courses.description.1")}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#23A0D0] to-[#30AFC1] mt-2">
                {t("courses.description.2")}
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
             {lang === 'ar' ? 'انطلق في رحلة التعلم والتطوير مع برامجنا التدريبية المصممة خصيصاً لتواكب متطلبات سوق العمل الحديث وتساعدك على تحقيق أهدافك المهنية.' 
                            : 'Launch your learning journey with our training programs designed specifically to keep up with the latest job market requirements and help you achieve your professional goals.'}
            </p>

            {/* الميزات */}
            <div className="mb-10">
              <div className="grid grid-cols-2 gap-4">
                {features[lang].map((feature, index) => (
                  <div key={index} className={`flex items-center gap-3 ${isRTL ? 'flex-row' : 'flex-row'}`}>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#23A0D0] to-[#30AFC1] flex items-center justify-center flex-shrink-0">
                      <CheckCircleIcon className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-sm md:text-base">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* أزرار التحكم */}
            <div className={`flex flex-col sm:flex-row gap-4 ${isRTL ? 'sm:justify-start' : 'sm:justify-start'}`}>
              <button className={`px-8 py-4 bg-gradient-to-r from-[#23A0D0] to-[#30AFC1] text-gray-900 rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <span>{lang === 'ar' ? 'استكشاف الدورات' : 'Explore Courses'}</span>
                <ArrowDownIcon className="h-5 w-5" />
              </button>
              
              <button className={`px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl font-bold text-lg hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <PlayCircleIcon className="h-6 w-6" />
                <span>{lang === 'ar' ? 'شاهد فيديو التعريف' : 'Watch Introduction Video'}</span>
              </button>
            </div>
          </div>

          {/* الصورة */}
          <div className={isRTL ? 'relative' : 'relative'}>
            <img src="/images/Student-333.webp" alt="برامج تدريبية" width={400} height={533} className="rounded-2xl shadow-lg w-full h-auto object-cover col-span-2 lg:col-span-1 relative z-10" />

            {/* بطاقات عائمة */}
            <div className={`absolute -top-10 md:-top-6 ${isRTL ? '-left-6' : '-right-6'} md:w-64 w-48 bg-gradient-to-r from-[#23A0D0] to-[#30AFC1] rounded-2xl p-6 shadow-2xl transform rotate-3`}>
              <div className={`flex items-center gap-3 mb-4 ${isRTL ? '' : 'flex-row-reverse'}`}>
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  <BookOpenIcon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-bold text-lg"> {lang === 'ar' ? 'دورات متنوعة' : 'Diverse Courses'}</div>
                  <div className="text-sm text-blue-100">{lang === 'ar' ? 'مرنة وسريعة' : 'Flexible & Fast'}</div>
                </div>
              </div>
              <div className="text-sm">{lang === 'ar' ? 'تعلم في وقتك الخاص وبوتيرة تناسبك' : 'Learn at your own pace and time'}</div>
            </div>

            <div className={`absolute -bottom-30 md:-bottom-6 ${isRTL ? '-right-6' : '-left-6'} w-56 bg-gradient-to-r from-[#3CBEB3] to-[#23A0D0] rounded-2xl p-6 shadow-2xl transform -rotate-3 z-20`}>
              <div className={`flex items-center gap-3 mb-4 ${isRTL ? '' : 'flex-row-reverse'}`}>
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  <ChartBarIcon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-bold text-lg"> {lang === 'ar' ? 'شهادات معتمدة' : 'Certified Certificates'}</div>
                  <div className="text-sm text-blue-100">{lang === 'ar' ? '100% معتمدة' : '100% Certified'}</div>
                </div>
              </div>
              <div className="text-sm">{lang === 'ar' ? 'احصل على شهادة معتمدة بعد إتمام الدورة' : 'Get a certified certificate after course completion'}</div>
            </div>
          </div>
        </div>

        {/* شريط التمرير */}
        <div className="mt-35 text-center">
          <div className="animate-bounce">
            <ArrowDownIcon className="h-8 w-8 mx-auto text-white/60" />
          </div>
          <p className="text-blue-100 mt-2">{lang === 'ar' ? 'قم بالتمرير لاكتشاف الدورات' : 'Scroll to explore courses'}</p>
        </div>
      </div>
    </div>
  );
};

export default CoursesHeroSection;