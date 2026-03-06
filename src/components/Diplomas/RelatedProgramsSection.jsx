import React from "react";
import { useNavigate } from "react-router-dom";
import Programs from "../../api/Programs";
import { getProgramData } from "../../api/Programs";

const RelatedProgramsSection = ({ currentProgramId, lang }) => {
  const navigate = useNavigate();
  const isRTL = lang === 'ar';
  
  // Get related programs (excluding current program)
  const relatedPrograms = Programs
    .filter(program => program.id !== parseInt(currentProgramId))
    .slice(0, 3); // Show max 3 related programs
    
  if (relatedPrograms.length === 0) return null;

  const handleProgramClick = (programId) => {
    window.scrollTo(0, 0);
    navigate(`/${lang}/programs/${programId}`);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          {isRTL ? 'دورات ذات صلة' : 'Related Programs'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {relatedPrograms.map((program) => {
            const localizedProgram = getProgramData(program, lang);
            return (
            <div
              key={program.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              onClick={() => handleProgramClick(program.id)}
            >
              <div className="relative h-48 overflow-hidden">
                {localizedProgram.image ? (
                  <img
                    src={localizedProgram.image}
                    alt={localizedProgram.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                    <svg className="w-16 h-16 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                )}
                <div className="absolute top-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg">
                    <span className="text-sm font-medium text-gray-900">
                      {localizedProgram.category}
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                  {localizedProgram.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {localizedProgram.subtitle}
                </p>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-sm font-medium text-gray-900">
                      {localizedProgram.rating || "4.5"}
                    </span>
                  </div>
                  <span className="text-lg font-bold text-blue-600">
                    {localizedProgram.price} {isRTL ? 'جنيه مصري' : 'Egyptian Pound'}
                  </span>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{localizedProgram.duration}</span>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
        </div>
      </div>
    </section>
  );
};

export default RelatedProgramsSection;
