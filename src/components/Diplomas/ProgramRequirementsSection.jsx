import { CheckCircleIcon, BuildingOfficeIcon, PhoneIcon } from '@heroicons/react/24/solid';
import { getProgramData } from '../../api/Programs';

function RequirementsSection({ program, lang }) {
  const isRTL = lang === 'ar';
  
  // Get localized program data
  const localizedProgram = getProgramData(program, lang);
  const requirements = Array.isArray(localizedProgram?.requirements)
    ? localizedProgram.requirements
    : [];
  const benefits = Array.isArray(localizedProgram?.benefits)
    ? localizedProgram.benefits
    : [];
  const mandatoryRequirements = localizedProgram?.Mandatoryrequirements;

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className={`text-3xl font-bold text-gray-800 mb-8 ${isRTL ? 'border-r-4 border-[#30AFC1] pr-4' : 'border-l-4 border-[#30AFC1] pl-4'}`}>
              {isRTL ? 'متطلبات القبول' : 'Admission Requirements'}
            </h2>
            
            <div className="space-y-4">
              {requirements.map((req, index) => (
                <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm">
                  <div className="w-8 h-8 rounded-full bg-[#30AFC1] text-white flex items-center justify-center flex-shrink-0">
                    {index + 1}
                  </div>
                  <span className="text-gray-700">{req}</span>
                </div>
              ))}
              {requirements.length === 0 && <p className="text-gray-500"> {isRTL ? '- لا توجد متطلبات' : '- No requirements'}</p>}
            </div>

            {mandatoryRequirements && (
              <div className="mt-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">{isRTL ? 'المتطلبات الإلزامية' : 'Mandatory Requirements'}</h3>
                <div className="bg-gradient-to-r from-orange-50 to-red-50 p-4 rounded-xl border border-orange-200">
                  <p className="text-gray-700">{mandatoryRequirements}</p>
                </div>
              </div>
            )}
          </div>
          
          <div>
            <h2 className={`text-3xl font-bold text-gray-800 mb-8 ${isRTL ? 'border-r-4 border-[#3CBEB3] pr-4' : 'border-l-4 border-[#3CBEB3] pl-4'}`}>
              {isRTL ? 'مزايا البرنامج' : 'Program Benefits'}
            </h2>
            
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm">
                  <CheckCircleIcon className="h-6 w-6 text-[#3CBEB3] flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-8 bg-gradient-to-r from-[#30AFC1] to-[#3CBEB3] rounded-2xl p-6 text-white">
              <div className="flex items-center gap-3 mb-4">
                <BuildingOfficeIcon className="h-8 w-8" />
                <h3 className="text-xl font-bold">{isRTL ? 'دعم التوظيف' : 'Job Support'}</h3>
              </div>
              <p className="mb-4">{isRTL ? 'نوفر لك دعم كامل في إعداد السيرة الذاتية، التدريب على المقابلات الشخصية، وتوصيلك بشركات رائدة في المجال.' : 'We provide you with full support in preparing your CV, interview training, and connecting you with leading companies in the field.'}</p>
              <button className="flex items-center gap-2 text-white hover:text-gray-100">
                <PhoneIcon className="h-5 w-5" />
                <span>{isRTL ? 'تواصل مع مستشار التوظيف' : 'Contact Job Advisor'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
  }

export default RequirementsSection;