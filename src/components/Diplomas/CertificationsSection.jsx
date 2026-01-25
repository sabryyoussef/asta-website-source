import { TrophyIcon, AcademicCapIcon, CheckBadgeIcon } from '@heroicons/react/24/outline';
import { getProgramData } from '../../api/Programs';

function CertificationsSection({ program, lang }) {
  const isRTL = lang === 'ar';
  
  // Get localized program data
  const localizedProgram = getProgramData(program, lang);
  const certifications = Array.isArray(localizedProgram?.certifications)
    ? localizedProgram.certifications
    : [];
  const exitPoints = localizedProgram?.exitPoints;

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-8">
          <h2 className={`text-3xl font-bold text-gray-800 mb-4 ${isRTL ? 'border-r-4 border-[#226796] pr-4' : 'border-l-4 border-[#226796] pl-4'}`}>
            <div className="flex items-center gap-3">
              <TrophyIcon className="h-8 w-8 text-[#226796]" />
              {isRTL ? 'الشهادات والمؤهلات' : 'Certifications & Qualifications'}
            </div>
          </h2>
          <p className="text-gray-600">
            {isRTL 
              ? 'احصل على شهادات مهنية معتمدة تعزز من فرصك في سوق العمل' 
              : 'Get professional accredited certifications that enhance your opportunities in the job market'}
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-gradient-to-r from-[#226796] to-[#23A0D0] rounded-2xl p-8 border border-blue-200">
            <h3 className="text-xl font-bold text-white mb-6">{isRTL ? 'الشهادات المتاحة' : 'Available Certifications'}</h3>
            <ul className="space-y-4">
              {certifications.map((certification, index) => (
                <li key={index} className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm text-white flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <AcademicCapIcon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    {/* <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm font-bold text-blue-100">
                        {isRTL ? `الشهادة ${index + 1}` : `Certification ${index + 1}`}
                      </span>
                      <div className="flex items-center gap-1 text-blue-100 text-xs">
                        <CheckBadgeIcon className="h-4 w-4" />
                        <span>{isRTL ? 'معتمدة' : 'Accredited'}</span>
                      </div>
                    </div> */}
                    <p className="text-blue-50 leading-relaxed">{certification}</p>
                  </div>
                </li>
              ))}
            </ul>
            
            {certifications.length === 0 && (
              <div className="text-center py-8">
                <p className="text-blue-100">
                  {isRTL ? 'لا توجد شهادات متاحة حالياً' : 'No certifications available at the moment'}
                </p>
              </div>
            )}
          </div>
          
          {exitPoints && (
            <div className="bg-gradient-to-r from-[#226796] to-[#23A0D0] rounded-2xl p-8 text-white h-fit">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                  <TrophyIcon className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-3">
                    {isRTL ? 'نقاط الخروج من البرنامج' : 'Program Exit Points'}
                  </h3>
                  <p className="text-blue-100 mb-6">{exitPoints}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default CertificationsSection;
