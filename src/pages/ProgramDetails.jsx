import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
// Components
import SEO from "../components/SEO";
import ProgramHeader from "../components/Diplomas/ProgramHeader";
import OverviewSection from "../components/Diplomas/ProgramOverviewSection";
import CurriculumSection from "../components/Diplomas/ProgramCurriculumSection";
import ProgramSchema from "../components/ProgramSchema";
// TODO: Uncomment when instructor data is needed
// import InstructorSection from "../components/Diplomas/ProgramInstructorSection";
import RequirementsSection from "../components/Diplomas/ProgramRequirementsSection";
import ProgramFAQSection from "../components/Diplomas/ProgramFAQSection";
import RelatedProgramsSection from "../components/Diplomas/RelatedProgramsSection";
import LearningOutcomesSection from "../components/Diplomas/LearningOutcomesSection";
import TargetJobsSection from "../components/Diplomas/TargetJobsSection";
import CertificationsSection from "../components/Diplomas/CertificationsSection";
// data
import Programs, { getProgramData } from "../api/Programs";
const ProgramDetails = () => {
  const { id, lang = 'ar' } = useParams();
  const navigate = useNavigate();
  const isRTL = lang === 'ar';
  const { t } = useTranslation();
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);  
  const parsedId = id;
  const program = Programs.find(program => program.id === parsedId); 
  const localizedProgram = getProgramData(program, lang);
  if (!program) {
    return <div>{isRTL ? 'البرنامج غير موجود' : 'Program not found'}</div>;
  }
  
  return (
    <div dir={isRTL ? 'rtl' : 'ltr'}>
      <ProgramSchema
        title={localizedProgram.title}
        description={localizedProgram.overview}
        url={`https://vetbrains.edu.eg/${lang}/programs/${id}`}
        lang={lang}
      />
      <SEO 
        titleAr={`${localizedProgram.title} | عقول بيطرية`}
        titleEn={`${localizedProgram.title} | Vet Brains`}
        descriptionAr={localizedProgram.overview || "برنامج تدريبي معتمد في عقول بيطرية"}
        descriptionEn={localizedProgram.overview || "Accredited training program at Vet Brains"}
        url={`https://vetbrains.edu.eg/${lang}/programs/${id}`}
        isRTL={isRTL}
      />
      <ProgramHeader program={program} lang={lang} />
      <OverviewSection program={program} lang={lang} />
      <LearningOutcomesSection program={program} lang={lang} />
      <CurriculumSection program={program} lang={lang} />
      <TargetJobsSection program={program} lang={lang} />
      <CertificationsSection program={program} lang={lang} />
      {/* TODO: Uncomment when instructor data is needed */}
      {/* <InstructorSection program={program} lang={lang} /> */}
      <RequirementsSection program={program} lang={lang} />
      <ProgramFAQSection program={program} lang={lang} />
      <RelatedProgramsSection currentProgramId={id} lang={lang} />
      
      {/* CTA Bottom */}
      <div className="bg-gradient-to-r from-[#202C5B] to-[#226796] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            {isRTL ? 'جاهز للانطلاق في رحلة التعلم؟' : 'Ready to embark on a learning journey?'}
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            {isRTL ? 'سجل الآن واحجز مقعدك في أفضل برنامج تدريبي في ' : 'Register now and book your seat in the best training program in '} {localizedProgram.title}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              type="button"
              onClick={() =>
                navigate(`/${lang}/registration`, {
                  state: {
                    programType: 'diploma',
                    programId: parsedId,
                  },
                })
              }
              className="px-8 py-4 bg-gradient-to-r from-[#226796] to-[#23A0D0] text-white rounded-xl font-bold text-lg hover:shadow-2xl transition-all duration-300 inline-block"
            >
              {isRTL ? 'سجل الآن واحجز مقعدك' : 'Register now and book your seat'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramDetails;