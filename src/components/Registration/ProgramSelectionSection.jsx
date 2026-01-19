import { BookOpenIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

function ProgramSelectionSection({ programs, formData, handleInputChange, handleServiceToggle, additionalServices, errors, programType, lang }) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
          <BookOpenIcon className="h-6 w-6 text-[#202C5B]" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            { lang === 'ar' ? 'اختر' : 'Choose' } {programType === 'diploma' ? (lang === 'ar' ? 'برنامج الدبلوم' : 'Diploma Program') : (lang === 'ar' ? 'الدورة' : 'Course')}
          </h2>
          <p className="text-gray-600">
            { lang === 'ar' ? 'اختر' : 'Choose' } {programType === 'diploma' ? (lang === 'ar' ? 'برنامج الدبلوم' : 'Diploma Program') : (lang === 'ar' ? 'الدورة' : 'Course')} {lang === 'ar' ? 'التي تريد التسجيل بها' : 'that you want to register for'}
          </p>
        </div>
      </div>
      
      <div className="space-y-4 mb-8">
        <label className="block text-gray-700 mb-2 font-medium">
          {lang === 'ar' ? 'البرنامج المتاح' : 'Available Program'} {lang === 'ar' ? '(اختياري)' : '(Optional)'}
        </label>
        <div className="relative">
          <select
            name="selectedProgram"
            value={formData.selectedProgram}
            onChange={handleInputChange}
            className={`w-full pr-10 pl-10 py-3.5 rounded-xl border ${
              errors.selectedProgram ? 'border-red-500' : 'border-gray-300'
            } focus:outline-none focus:ring-2 focus:ring-[#23A0D0] focus:border-transparent appearance-none`}
          >
            <option value="" disabled>
              {lang === 'ar' ? 
                (programType === 'diploma' ? 'الرجاء اختيار برنامج دبلوم' : 'الرجاء اختيار دورة') : 
                (programType === 'diploma' ? 'Please select a diploma' : 'Please select a course')
              }
            </option>
            {programs.map(program => (
              <option key={program.id} value={program.id}>
                {program.title} - {program.category}
              </option>
            ))}
          </select>
        </div>
        {errors.selectedProgram && (
          <p className="text-red-500 text-sm mt-2">{errors.selectedProgram}</p>
        )}
      </div>
      
      {/* <div>
        <label className="block text-gray-700 mb-4 font-medium">
          {lang === 'ar' ? 'خدمات إضافية (اختياري)' : 'Additional Services (Optional)'}
        </label>
        <div className="grid md:grid-cols-2 gap-4">
          {additionalServices.map(service => (
            <div
              key={service.id}
              className={`border rounded-xl p-4 cursor-pointer transition-all duration-300 ${
                formData.selectedServices.includes(service.id)
                  ? 'border-[#23A0D0] bg-blue-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
              onClick={() => handleServiceToggle(service.id)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    formData.selectedServices.includes(service.id)
                      ? 'bg-[#23A0D0] text-white'
                      : 'bg-gray-100 text-gray-600'
                  }`}>
                    {formData.selectedServices.includes(service.id) ? (
                      <CheckCircleIcon className="h-5 w-5" />
                    ) : (
                      <div className="h-3 w-3 rounded border border-gray-400"></div>
                    )}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">{service.name[lang]}</h3>
                    <span className="text-sm text-gray-600">{service.price ? service.price.toLocaleString() : (lang === 'ar' ? 'مجاني' : 'Free')}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
}

export default ProgramSelectionSection;