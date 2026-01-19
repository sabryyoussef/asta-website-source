import { CheckCircleIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import { getCourseData } from '../../api/Courses';
import { getProgramData } from '../../api/Programs';

function SuccessConfirmation ({ formData, selectedProgram, calculateTotal, lang }) {
    // Get localized program data
    const localizedProgram = selectedProgram ? (
        formData.programType === 'course'
            ? getCourseData(selectedProgram, lang)
            : getProgramData(selectedProgram, lang)
    ) : null;
    return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
        <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-r from-green-100 to-emerald-100 flex items-center justify-center">
          <CheckCircleIcon className="h-12 w-12 text-green-500" />
        </div>
        
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          {lang === 'ar' ? 'تم إرسال تسجيلك بنجاح! 🎉' : 'Registration submitted successfully! 🎉'}
        </h1>
        
        {/* <div className="bg-gray-50 rounded-xl p-6 mb-8 text-right">
          <h3 className="font-bold text-gray-800 mb-4">{lang === 'ar' ? 'تفاصيل التسجيل:' : 'Registration Details:'}</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">{lang === 'ar' ? 'الاسم:' : 'Name:'}</span>
              <span className="font-bold text-gray-800">{formData.fullName}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">{lang === 'ar' ? 'البرنامج:' : 'Program:'}</span>
              <span className="font-bold text-gray-800">{localizedProgram?.title || 'غير محدد'}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">{lang === 'ar' ? 'البريد الإلكتروني:' : 'Email:'}</span>
              <span className="font-bold text-gray-800">{formData.email}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">{lang === 'ar' ? 'المجموع:' : 'Total:'}</span>
              <span className="font-bold text-[#202C5B]">{calculateTotal().toLocaleString()} </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600"> {lang === 'ar' ? 'وقت الإرسال:' : 'Submission Time:'}</span>
              <span className="font-bold text-gray-800">{new Date().toLocaleString(lang === 'ar' ? 'ar-SA' : 'en-US')}</span>
            </div>
          </div>
        </div> */}
        
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <EnvelopeIcon className="h-8 w-8 text-[#202C5B]" />
            <h3 className="font-bold text-gray-800">{lang === 'ar' ? 'تفاصيل الإرسال:' : 'Submission Details:'}</h3>
          </div>
          <p className="text-gray-600 mb-3">
            {lang === 'ar' ? 'تم إرسال بيانات تسجيلك إلى قسم التسجيل' : 'Your registration data has been sent to the registration department'}
          </p>
          
          <p className="text-gray-600">
            {lang === 'ar' ? 'وسيصلك نسخة تأكيدية على بريدك:' : 'You will receive a confirmation copy at your email:'} <span className="font-bold">{formData.email}</span>
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => window.location.reload()}
            className="px-8 py-3 bg-[#202C5B] text-white rounded-xl font-bold hover:bg-[#1a2448] transition-colors"
          >
            {lang === 'ar' ? 'تسجيل جديد' : 'New Registration'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default SuccessConfirmation;