  import { UserIcon, EnvelopeIcon, PhoneIcon, IdentificationIcon, AcademicCapIcon } from '@heroicons/react/24/outline';

  function PersonalInfoSection ({ formData, handleInputChange, errors, degrees, t, lang}) 
  {
    return (
    <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
          <UserIcon className="h-6 w-6 text-[#202C5B]" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800"> {t('registration.personalInfo.title')}</h2>
          <p className="text-gray-600"> {t('registration.personalInfo.description')}</p>
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-gray-700 mb-2 font-medium">
            {t('registration.personalInfo.fullName')}
          </label>
          <div className="relative">
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              className={`w-full pr-10 pl-10 py-3.5 rounded-xl border ${
                errors.fullName ? 'border-red-500' : 'border-gray-300'
              } focus:outline-none focus:ring-2 focus:ring-[#23A0D0] focus:border-transparent`}
              placeholder={lang === 'ar' ? 'أدخل الاسم الكامل كما في الهوية' : 'Enter full name as in ID'}
            />
            <UserIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>
          {errors.fullName && (
            <p className="text-red-500 text-sm mt-2">{errors.fullName}</p>
          )}
        </div>
        
        <div>
          <label className="block text-gray-700 mb-2 font-medium">
            {t('registration.personalInfo.email')}
          </label>
          <div className="relative">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={`w-full pr-10 pl-10 py-3.5 rounded-xl border ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              } focus:outline-none focus:ring-2 focus:ring-[#23A0D0] focus:border-transparent`}
              placeholder="example@email.com"
            />
            <EnvelopeIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>
          {errors.email && (
            <p className="text-red-500 text-sm mt-2">{errors.email}</p>
          )}
        </div>
        
        <div>
          <label className="block text-gray-700 mb-2 font-medium">
            {t('registration.personalInfo.phone')}
          </label>
          <div className="relative">
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className={`w-full pr-10 pl-10 py-3.5 rounded-xl border ${
                errors.phone ? 'border-red-500' : 'border-gray-300'
              } focus:outline-none focus:ring-2 focus:ring-[#23A0D0] focus:border-transparent`}
              placeholder="+XXXXXXXXXXXX"
              maxLength="13"
            />
            <PhoneIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>
          {errors.phone && (
            <p className="text-red-500 text-sm mt-2">{errors.phone}</p>
          )}
        </div>
        
        <div>
          <label className="block text-gray-700 mb-2 font-medium">
            {t('registration.personalInfo.idNumber')}
          </label>
          <div className="relative">
            <input
              type="text"
              name="nationalId"
              value={formData.nationalId}
              onChange={handleInputChange}
              className={`w-full pr-10 pl-10 py-3.5 rounded-xl border ${
                errors.nationalId ? 'border-red-500' : 'border-gray-300'
              } focus:outline-none focus:ring-2 focus:ring-[#23A0D0] focus:border-transparent`}
              placeholder="1XXXXXXXXX"
              maxLength="10"
            />
            <IdentificationIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>
          {errors.nationalId && (
            <p className="text-red-500 text-sm mt-2">{errors.nationalId}</p>
          )}
        </div>
        
        <div>
          <label className="block text-gray-700 mb-2 font-medium">
            {t('registration.personalInfo.degree')}
          </label>
          <div className="relative">
            <select
              name="degree"
              value={formData.degree}
              onChange={handleInputChange}
              className={`w-full pr-10 pl-10 py-3.5 rounded-xl border ${
                errors.degree ? 'border-red-500' : 'border-gray-300'
              } focus:outline-none focus:ring-2 focus:ring-[#23A0D0] focus:border-transparent appearance-none`}
            >
              <option value="">{t('registration.personalInfo.degree')}</option>
              {degrees[lang].map((degree, index) => (
                <option key={index} value={degree}>{degree}</option>
              ))}
            </select>
            <AcademicCapIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
          </div>
          {errors.degree && (
            <p className="text-red-500 text-sm mt-2">{errors.degree}</p>
          )}
        </div>
        
        <div>
          <label className="block text-gray-700 mb-2 font-medium">
            {t('registration.personalInfo.emergencyPhone')}
          </label>
          <div className="relative">
            <input
              type="text"
              name="emergencyContact"
              value={formData.emergencyContact}
              onChange={handleInputChange}
              className="w-full pr-10 pl-10 py-3.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#23A0D0] focus:border-transparent"
              placeholder="05XXXXXXXX"
              maxLength="10"
            />
            <PhoneIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfoSection;
