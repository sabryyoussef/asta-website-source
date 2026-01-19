import { BookmarkIcon, BriefcaseIcon, AcademicCapIcon } from '@heroicons/react/24/outline';

function DiplomaSpecificSection({ formData, handleInputChange, errors, lang }) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
          <AcademicCapIcon className="h-6 w-6 text-[#202C5B]" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800">{lang === 'ar' ? 'معلومات الدبلوم الإضافية' : 'Additional Diploma Information'}</h2>
          <p className="text-gray-600">{lang === 'ar' ? 'الرجاء ملء المعلومات الخاصة ببرنامج الدبلوم' : 'Please fill in the additional diploma information'}</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Prior Experience */}
        <div>
          <label className="block text-gray-700 mb-2 font-medium">
            {lang === 'ar' ? 'هل لديك خبرة سابقة في المجال؟' : 'Do you have prior experience in the field?'} *
          </label>
          <div className="relative">
            <select
              name="priorExperience"
              value={formData.priorExperience || ''}
              onChange={handleInputChange}
              className={`w-full pr-10 pl-10 py-3.5 rounded-xl border ${
                errors.priorExperience ? 'border-red-500' : 'border-gray-300'
              } focus:outline-none focus:ring-2 focus:ring-[#23A0D0] focus:border-transparent appearance-none`}
            >
              <option value="">{lang === 'ar' ? 'اختر من فضلك' : 'Select please'}</option>
              <option value="none">{lang === 'ar' ? 'لا توجد خبرة' : 'No experience'}</option>
              <option value="less-than-1">{lang === 'ar' ? 'أقل من سنة' : 'Less than 1 year'}</option>
              <option value="1-3">{lang === 'ar' ? '1-3 سنوات' : '1-3 years'}</option>
              <option value="more-than-3">{lang === 'ar' ? 'أكثر من 3 سنوات' : 'More than 3 years'}</option>
            </select>
          </div>
          {errors.priorExperience && (
            <p className="text-red-500 text-sm mt-2">{errors.priorExperience}</p>
          )}
        </div>

        {/* Career Goals */}
        <div>
          <label className="block text-gray-700 mb-2 font-medium">
            {lang === 'ar' ? 'أهدافك المهنية' : 'Your career goals'}
          </label>
          <div className="relative">
            <textarea
              name="careerGoals"
              value={formData.careerGoals || ''}
              onChange={handleInputChange}
              className={`w-full pr-4 pl-4 py-3.5 rounded-xl border ${
                errors.careerGoals ? 'border-red-500' : 'border-gray-300'
              } focus:outline-none focus:ring-2 focus:ring-[#23A0D0] focus:border-transparent`}
              placeholder={lang === 'ar' ? 'اشرح أهدافك المهنية...' : 'Explain your career goals...'}
              rows="4"
            />
          </div>
          {errors.careerGoals && (
            <p className="text-red-500 text-sm mt-2">{errors.careerGoals}</p>
          )}
        </div>

        {/* Preferred Study Schedule */}
        <div>
          <label className="block text-gray-700 mb-2 font-medium">
            {lang === 'ar' ? 'الجدول الدراسي المفضل' : 'Preferred study schedule'} *
          </label>
          <div className="space-y-2">
            {[
              { value: 'fulltime', label: lang === 'ar' ? 'دوام كامل' : 'Full-time' },
              { value: 'parttime', label: lang === 'ar' ? 'دوام جزئي' : 'Part-time' },
              { value: 'weekend', label: lang === 'ar' ? 'أيام نهاية الأسبوع' : 'Weekend' }
            ].map(option => (
              <label key={option.value} className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                <input
                  type="radio"
                  name="studySchedule"
                  value={option.value}
                  checked={formData.studySchedule === option.value}
                  onChange={handleInputChange}
                  className="w-4 h-4"
                />
                <span className="text-gray-700">{option.label}</span>
              </label>
            ))}
          </div>
          {errors.studySchedule && (
            <p className="text-red-500 text-sm mt-2">{errors.studySchedule}</p>
          )}
        </div>

        {/* Financial Support */}
        <div>
          <label className="block text-gray-700 mb-2 font-medium">
            {lang === 'ar' ? 'هل تحتاج إلى دعم مالي؟' : 'Do you need financial support?'} *
          </label>
          <div className="relative">
            <select
              name="financialSupport"
              value={formData.financialSupport || ''}
              onChange={handleInputChange}
              className={`w-full pr-10 pl-10 py-3.5 rounded-xl border ${
                errors.financialSupport ? 'border-red-500' : 'border-gray-300'
              } focus:outline-none focus:ring-2 focus:ring-[#23A0D0] focus:border-transparent appearance-none`}
            >
              <option value="">{lang === 'ar' ? 'اختر من فضلك' : 'Select please'}</option>
              <option value="no">{lang === 'ar' ? 'لا أحتاج دعم مالي' : 'No financial support needed'}</option>
              <option value="partial">{lang === 'ar' ? 'دعم جزئي' : 'Partial support'}</option>
              <option value="full">{lang === 'ar' ? 'دعم كامل' : 'Full support'}</option>
              <option value="scholarship">{lang === 'ar' ? 'منحة دراسية' : 'Scholarship'}</option>
            </select>
          </div>
          {errors.financialSupport && (
            <p className="text-red-500 text-sm mt-2">{errors.financialSupport}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default DiplomaSpecificSection;
