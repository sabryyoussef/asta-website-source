import { ClockIcon, ChevronRightIcon, DocumentTextIcon, TrophyIcon, VideoCameraIcon } from '@heroicons/react/24/outline';
import { getProgramData } from '../../api/Programs';

function CurriculumSection({ program, lang }) {
  const isRTL = lang === 'ar';
  
  // Get localized program data
  const localizedProgram = getProgramData(program, lang);

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className={`text-3xl font-bold text-gray-800 ${isRTL ? 'border-r-4 border-[#226796] pr-4' : 'border-l-4 border-[#226796] pl-4'}`}>
            {isRTL ? 'المنهج الدراسي' : 'Curriculum'}
          </h2>
          <div className="flex items-center gap-2 text-[#226796]">
            <ClockIcon className="h-5 w-5" />
            <span className="font-bold">{localizedProgram.creditHours || 0} {isRTL ? 'ساعة معتمدة' : 'credit hours'}</span>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {localizedProgram.curriculum.map((semester, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <div className="bg-gradient-to-r from-[#226796] to-[#23A0D0] text-white px-4 py-1 rounded-full">
                  {semester.semester}
                </div>
                <div className="flex items-center gap-1 text-gray-500">
                  <ClockIcon className="h-4 w-4" />
                  <span className="text-sm">{semester.courses ? semester.courses.length : 0} {isRTL ? 'مواد' : 'courses'}</span>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-4">{semester.semester}</h3>
              
              <div className="space-y-2">
                {semester.courses && semester.courses.map((course, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <ChevronRightIcon className="h-4 w-4 text-[#23A0D0]" />
                    <span className="text-gray-600">{course}</span>
                  </div>
                ))}
              </div>
              
              {/* <div className="mt-6 pt-6 border-t border-gray-100 flex justify-between items-center">
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">{isRTL ? 'فيديو' : 'Video'}</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full">{isRTL ? 'تمارين' : 'Exercises'}</span>
                </div>
                <button className="text-[#226796] font-medium hover:text-[#1a4d7a] transition-colors">
                  {isRTL ? 'عرض التفاصيل' : 'View Details'}
                </button>
              </div> */}
            </div>
          ))}
        </div>
        
        {/* <div className="mt-12 bg-white rounded-2xl p-8 border border-gray-200">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-100 to-cyan-100 flex items-center justify-center">
                <VideoCameraIcon className="h-8 w-8 text-[#226796]" />
              </div>
              <h4 className="font-bold text-gray-800 mb-2">{isRTL ? 'محاضرات ' : 'Lectures'}</h4>
              <p className="text-gray-600 text-sm">{isRTL ? '80+ ساعة تدريبية' : '80+ training hours'}</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-100 to-emerald-100 flex items-center justify-center">
                <DocumentTextIcon className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="font-bold text-gray-800 mb-2">{isRTL ? 'تمارين عملية' : 'Practical Exercises'}</h4>
              <p className="text-gray-600 text-sm">{isRTL ? '50+ تمرين تطبيقي' : '50+ practical exercises'}</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 flex items-center justify-center">
                <TrophyIcon className="h-8 w-8 text-purple-600" />
              </div>
              <h4 className="font-bold text-gray-800 mb-2">{isRTL ? 'مشروع تخرج' : 'Graduation Project'}</h4>
              <p className="text-gray-600 text-sm">{isRTL ? 'مشروع متكامل تحت الإشراف' : 'Complete project under supervision'}</p>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}

export default CurriculumSection;