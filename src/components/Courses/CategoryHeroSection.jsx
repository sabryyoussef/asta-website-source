import React from 'react';
import {
  BookOpenIcon,
  AcademicCapIcon,
  ChartBarIcon,
  ArrowDownIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

const CategoryHeroSection = ({ categoryName, categoryDescription, categoryImage, categoryPNG, lang = 'ar' }) => {
  const features = lang === 'ar' 
    ? [
        "دورات معتمدة عالمياً",
        "مدربون خبراء في المجال",
        "تدريب عملي وتطبيقي",
        "دعم مستمر بعد الانتهاء"
      ]
    : [
        "Globally Certified Courses",
        "Expert Trainers in the Field",
        "Practical and Applied Training",
        "Continuous Support After Completion"
      ];

  const isRTL = lang === 'ar';

  return (
    <div className={`relative overflow-hidden bg-gradient-to-r from-[#202C5B] to-[#226796] text-white` } style={{ 
      backgroundImage: categoryImage ? `url(${categoryImage})` : `url('https://images.pexels.com/photos/5439470/pexels-photo-5439470.jpeg?_gl=1*1izvuqu*_ga*MTE4Mjk4NTMxMS4xNzYzNzkyNjQ2*_ga_8JE65Q40S6*czE3Njc2ODg5ODkkbzQkZzEkdDE3Njc2ODk2ODgkajM1JGwwJGgw')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }} dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Background with geometric shapes */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#202C5B]/90 to-[#226796]/90"></div>
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className={`absolute -top-20 ${isRTL ? '-right-20' : '-left-20'} w-64 h-64 ${isRTL ? 'border-t-[120px] border-r-[120px] border-t-white border-r-transparent' : 'border-t-[120px] border-l-[120px] border-t-white border-l-transparent'}`}></div>
        <div className={`absolute bottom-0 ${isRTL ? 'left-0' : 'right-0'} w-96 h-96 ${isRTL ? 'border-b-[180px] border-l-[180px] border-b-white border-l-transparent' : 'border-b-[180px] border-r-[180px] border-b-white border-r-transparent'}`}></div>
        <div className={`absolute top-1/3 ${isRTL ? 'left-1/4' : 'right-1/4'} w-32 h-32 ${isRTL ? 'border-t-[60px] border-r-[60px] border-t-white border-r-transparent' : 'border-t-[60px] border-l-[60px] border-t-white border-l-transparent'}`}></div>
        <div className={`absolute bottom-1/4 ${isRTL ? 'right-1/3' : 'left-1/3'} w-24 h-24 ${isRTL ? 'border-b-[45px] border-l-[45px] border-b-white border-l-transparent' : 'border-b-[45px] border-r-[45px] border-b-white border-r-transparent'}`}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Main Text */}
          <div className={isRTL ? 'text-right' : 'text-left'}>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <span className="text-sm font-medium">
                {lang === 'ar' ? 'دورات احترافية معتمدة' : 'Professional Certified Courses'}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {lang === 'ar' ? 'اكتشف' : 'Discover'}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#23A0D0] to-[#30AFC1] mt-2">
                {categoryName}
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
              {categoryDescription || (lang === 'ar' 
                ? 'انطلق في رحلة التعلم والتطوير مع دوراتنا التدريبية المصممة خصيصاً لتواكب متطلبات سوق العمل الحديث وتساعدك على تحقيق أهدافك المهنية.'
                : 'Embark on a journey of learning and development with our training courses designed specifically to meet the requirements of the modern job market and help you achieve your professional goals.')}
            </p>

            {/* Features */}
            <div className="mb-10">
              <div className="grid grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className={`flex items-center gap-3 ${isRTL ? '' : 'flex-row-reverse'}`}>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#23A0D0] to-[#30AFC1] flex items-center justify-center flex-shrink-0">
                      <CheckCircleIcon className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-sm md:text-base">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-[#23A0D0] to-[#30AFC1] text-gray-900 rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-3">
                <span>{lang === 'ar' ? 'استكشاف الدورات' : 'Explore Courses'}</span>
                <ArrowDownIcon className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img src={categorywebp || '/images/IT_lock.webp'} alt={categoryName} className="rounded-2xl shadow-lg w-full h-auto object-cover col-span-2 lg:col-span-1" />

            {/* Floating Cards */}
            <div className={`absolute -top-6 ${isRTL ? '-left-6' : '-right-6'} w-64 bg-gradient-to-r from-[#23A0D0] to-[#30AFC1] rounded-2xl p-6 shadow-2xl transform ${isRTL ? 'rotate-3' : '-rotate-3'}`}>
              <div className={`flex items-center gap-3 mb-4 ${isRTL ? '' : 'flex-row-reverse'}`}>
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  <BookOpenIcon className="h-6 w-6 text-white" />
                </div>
                <div className={isRTL ? 'text-right' : 'text-left'}>
                  <div className="font-bold text-lg">{lang === 'ar' ? 'دورات مكثفة' : 'Intensive Courses'}</div>
                  <div className="text-sm text-blue-100">{lang === 'ar' ? '4-8 أسابيع' : '4-8 Weeks'}</div>
                </div>
              </div>
              <div className="text-sm">{lang === 'ar' ? 'تعلم المهارات المطلوبة في سوق العمل' : 'Learn the skills required in the job market'}</div>
            </div>

            <div className={`absolute -bottom-6 ${isRTL ? '-right-6' : '-left-6'} w-56 bg-gradient-to-r from-[#3CBEB3] to-[#23A0D0] rounded-2xl p-6 shadow-2xl transform ${isRTL ? '-rotate-3' : 'rotate-3'}`}>
              <div className={`flex items-center gap-3 mb-4 ${isRTL ? '' : 'flex-row-reverse'}`}>
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  <ChartBarIcon className="h-6 w-6 text-white" />
                </div>
                <div className={isRTL ? 'text-right' : 'text-left'}>
                  <div className="font-bold text-lg">{lang === 'ar' ? 'شهادات معتمدة' : 'Certified Certificates'}</div>
                  <div className="text-sm text-blue-100">{lang === 'ar' ? 'معترف بها دولياً' : 'Internationally Recognized'}</div>
                </div>
              </div>
              <div className="text-sm">{lang === 'ar' ? 'احصل على شهادة معتمدة بعد إتمام الدورة' : 'Get a certified certificate after completing the course'}</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-20 text-center">
          <div className="animate-bounce">
            <ArrowDownIcon className="h-8 w-8 mx-auto text-white/60" />
          </div>
          <p className="text-blue-100 mt-2">{lang === 'ar' ? 'قم بالتمرير لاكتشاف الدورات' : 'Scroll to discover courses'}</p>
        </div>
      </div>
    </div>
  );
};

export default CategoryHeroSection;

