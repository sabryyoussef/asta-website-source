import { CheckCircleIcon, LightBulbIcon } from '@heroicons/react/24/outline';
import { getProgramData } from '../../api/Programs';

function LearningOutcomesSection({ program, lang }) {
  const isRTL = lang === 'ar';
  
  // Get localized program data
  const localizedProgram = getProgramData(program, lang);
  const learningOutcomes = Array.isArray(localizedProgram?.Learningoutcomes)
    ? localizedProgram.Learningoutcomes
    : [];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-8">
          <h2 className={`text-3xl font-bold text-gray-800 mb-4 ${isRTL ? 'border-r-4 border-[#23A0D0] pr-4' : 'border-l-4 border-[#23A0D0] pl-4'}`}>
            <div className="flex items-center gap-3">
              <LightBulbIcon className="h-8 w-8 text-[#23A0D0]" />
              {isRTL ? 'مخرجات التعلم' : 'Learning Outcomes'}
            </div>
          </h2>
          <p className="text-gray-600">
            {isRTL 
              ? 'بعد إكمال هذا البرنامج، ستكتسب المهارات والمعارف التالية:' 
              : 'After completing this program, you will acquire the following skills and knowledge:'}
          </p>
        </div>
        
        <div className="bg-gradient-to-r from-[#226796] to-[#23A0D0] rounded-2xl p-8 border border-blue-200">
          <ul className="space-y-4">
            {learningOutcomes.map((outcome, index) => (
              <li key={index} className="flex items-start gap-4 group">
                <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm text-white flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <CheckCircleIcon className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  {/* <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm font-bold text-blue-100">
                      {isRTL ? `المهارة ${index + 1}` : `Skill ${index + 1}`}
                    </span>
                  </div> */}
                  <p className="text-blue-50 leading-relaxed">{outcome}</p>
                </div>
              </li>
            ))}
          </ul>
          
          {learningOutcomes.length === 0 && (
            <div className="text-center py-8">
              <p className="text-blue-100">
                {isRTL ? 'لا توجد مخرجات تعلم متاحة حالياً' : 'No learning outcomes available at the moment'}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default LearningOutcomesSection;
