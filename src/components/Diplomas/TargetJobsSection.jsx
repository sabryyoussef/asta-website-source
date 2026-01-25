import { BriefcaseIcon, BuildingOfficeIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import { getProgramData } from '../../api/Programs';

function TargetJobsSection({ program, lang }) {
  const isRTL = lang === 'ar';
  
  // Get localized program data
  const localizedProgram = getProgramData(program, lang);
  const targetJobs = Array.isArray(localizedProgram?.targetJobs)
    ? localizedProgram.targetJobs
    : [];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-8">
          <h2 className={`text-3xl font-bold text-gray-800 mb-4 ${isRTL ? 'border-r-4 border-[#3CBEB3] pr-4' : 'border-l-4 border-[#3CBEB3] pl-4'}`}>
            <div className="flex items-center gap-3">
              <BriefcaseIcon className="h-8 w-8 text-[#3CBEB3]" />
              {isRTL ? 'الوظائف المستهدفة' : 'Target Jobs'}
            </div>
          </h2>
          <p className="text-gray-600">
            {isRTL 
              ? 'يؤهلك هذا البرنامج للعمل في المناصب والوظائف التالية:' 
              : 'This program qualifies you for the following positions and jobs:'}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6">
          {targetJobs.map((job, index) => (
            <li key={index} className="flex items-center gap-4 group bg-gradient-to-r from-[#30AFC1] to-[#3CBEB3] rounded-xl p-4 shadow-sm hover:shadow-lg transition-shadow border border-cyan-200">
              <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm text-white flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <BuildingOfficeIcon className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-white text-sm">{job}</h3>
              </div>
            </li>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TargetJobsSection;
