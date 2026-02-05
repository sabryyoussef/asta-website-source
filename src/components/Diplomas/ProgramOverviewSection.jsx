import { CheckCircleIcon } from '@heroicons/react/24/outline';
import { getProgramData } from '../../api/Programs';

function OverviewSection({ program, lang }) {
  const isRTL = lang === 'ar';
  
  // Get localized program data
  const localizedProgram = getProgramData(program, lang);
  
  // Ensure objectives is an array
  const objectives = Array.isArray(localizedProgram?.objectives) 
    ? localizedProgram.objectives 
    : (localizedProgram?.objectives ? [localizedProgram.objectives] : []);

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 border-r-4 border-[#202C5B] pr-4">
          {isRTL ? 'نظرة عامة' : 'Overview'}
        </h2>
        
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <p className="text-gray-600 leading-relaxed text-lg mb-8">
              {localizedProgram.overview}
            </p>
            
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-6">{isRTL ? 'أهداف البرنامج' : 'Program Objectives'}</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {objectives.map((objective, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircleIcon className="h-6 w-6 text-[#23A0D0] mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{objective}</span>
                  </div>
                ))}
                {objectives.length === 0 && (
                  <div className="col-span-2 text-center text-gray-500">
                    {isRTL ? 'لا توجد أهداف محددة' : 'No specific objectives'}
                  </div>
                )}
              </div>
            </div>
          </div>
          
          <div>
            <div className="bg-gray-50 rounded-2xl p-6 sticky top-6">
              <h3 className="text-xl font-bold text-gray-800 mb-6">{isRTL ? 'معلومات البرنامج' : 'Program Information'}</h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-gray-200 gap-8">
                  <span className="text-sm font-semibold text-[#23A0D0]">{isRTL ? 'المدة' : 'Duration'}</span>
                  <span className="font-bold text-gray-900">{localizedProgram.duration}</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-gray-200 gap-8">
                  <span className="text-sm font-semibold text-[#23A0D0]">{isRTL ? 'المستوى' : 'Level'}</span>
                  <span className="font-bold text-gray-900">{localizedProgram.level}</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-gray-200 gap-8">
                  <span className="text-sm font-semibold text-[#23A0D0]">{isRTL ? 'الساعات المعتمدة' : 'Credit Hours'}</span>
                  <span className="font-bold text-gray-900">{localizedProgram.creditHours || (isRTL ? 'غير محدد' : 'Not specified')}</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-gray-200 gap-8">
                  <span className="text-sm font-semibold text-[#23A0D0]">{isRTL ? 'لغة التدريس' : 'Language'}</span>
                  <span className="font-bold text-gray-900">{localizedProgram.language || (isRTL ? 'غير محدد' : 'Not specified')}</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-gray-200 gap-8">
                  <span className="text-sm font-semibold text-[#23A0D0]">{isRTL ? 'أيام الدراسة' : 'Study Days'}</span>
                  <span className="font-bold text-gray-900">
                    {localizedProgram.schedule?.days ? 
                      (Array.isArray(localizedProgram.schedule.days) ? localizedProgram.schedule.days.join('، ') : localizedProgram.schedule.days) 
                      : (isRTL ? 'غير محدد' : 'Not specified')}
                  </span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-gray-200 gap-8">
                  <span className="text-sm font-semibold text-[#23A0D0]">{isRTL ? 'التوقيت' : 'Time'}</span>
                  <span className="font-bold text-gray-900">{localizedProgram.schedule?.time || (isRTL ? 'غير محدد' : 'Not specified')}</span>
                </div>
                <div className="flex items-center justify-between py-3 gap-8">
                  <span className="text-sm font-semibold text-[#23A0D0]">{isRTL ? 'نمط التدريب' : 'Training Style'}</span>
                  <span className="font-bold text-gray-900">{localizedProgram.schedule?.mode || (isRTL ? 'غير محدد' : 'Not specified')}</span>
                </div>
              </div>
{/*               
              <button className="w-full mt-6 bg-[#202C5B] text-white py-3 rounded-xl font-bold hover:bg-[#1a2448] transition-colors">
                {isRTL ? 'تحميل المنهج الكامل' : 'Download Full Curriculum'}
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
  }
  
  export default OverviewSection;