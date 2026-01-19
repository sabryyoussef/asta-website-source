import { UserIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

function BasicPersonalInfo({ formData, handleInputChange, errors, t, lang }) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
          <UserIcon className="h-6 w-6 text-[#202C5B]" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            {lang === 'ar' ? 'المعلومات الشخصية الأساسية' : 'Basic Personal Info'}
          </h2>
          <p className="text-gray-600">
            {lang === 'ar' ? 'الاسم ورقم الهاتف والبريد الإلكتروني' : 'Name, Phone Number and Email'}
          </p>
        </div>
      </div>
      
      <div className="grid md:grid-cols-3 gap-6">
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
              placeholder={lang === 'ar' ? 'أدخل الاسم' : 'Enter full name'}
            />
            <UserIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>
          {errors.fullName && (
            <p className="text-red-500 text-sm mt-2">{errors.fullName}</p>
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
              placeholder="05XXXXXXXX"
              maxLength="10"
            />
            <PhoneIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>
          {errors.phone && (
            <p className="text-red-500 text-sm mt-2">{errors.phone}</p>
          )}
        </div>

        <div>
          <label className="block text-gray-700 mb-2 font-medium">
            {lang === 'ar' ? 'البريد الإلكتروني (اختياري)' : 'Email (Optional)'}
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
              placeholder={lang === 'ar' ? 'أدخل بريدك الإلكتروني' : 'Enter your email'}
            />
            <EnvelopeIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>
          {errors.email && (
            <p className="text-red-500 text-sm mt-2">{errors.email}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default BasicPersonalInfo;
