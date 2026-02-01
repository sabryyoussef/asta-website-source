import { useState, useMemo } from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/24/outline';
import emailjs from '@emailjs/browser';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
// api
import Programs, { getProgramData } from '../api/Programs';
import Courses, { getCourseData } from '../api/Courses';
// components
import SEO from '../components/SEO';
import RegistrationHeader from '../components/Registration/RegistrationHeader';
import BasicPersonalInfo from '../components/Registration/BasicPersonalInfo';
import ProgramTypeSelector from '../components/Registration/ProgramTypeSelector';
import ProgramSelectionSection from '../components/Registration/ProgramSelectionSection';

// prepare EmailJS
emailjs.init("k62cRdPnAvAsP_96b");

const RegistrationPage2 = () => {
  const { programId, lang } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const isRTL = lang === 'ar';
  const programs = Programs;
  const courses = Courses;
  // بيانات الشهادات المتاحة
  const degrees = {
    ar: [
      "ثانوية عامة",
      "دبلوم",
      "بكالوريوس",
      "ماجستير",
      "دكتوراه"
    ],
    en: [
      "High School",
      "Diploma",
      "Bachelor",
      "Master",
      "PhD"
    ]
  };

  // بيانات الخدمات الإضافية
  const additionalServices = [
    { id: 1, name: { ar: "كتب ومراجع إضافية", en: "Additional Books and References" }, price: "" },
    { id: 2, name: { ar: "جلسات إرشاد تدريبي مهني احترافي", en: "Professional Training Guidance Sessions" }, price: "" },
    { id: 3, name: { ar: "شهادة معتمدة دولياً", en: "Internationally Recognized Certificate" }, price: "" },
    { id: 4, name: { ar: "متابعة خاصة مع المدرب", en: "Personal Follow-up with the Trainer" }, price: "" },
    { id: 5, name: { ar: "إستشاراة للحصول على الدورة", en: "Consultation for Obtaining the Course" }, price: "" },
    { id: 6, name: { ar: "حساب مجاني لمحتوى الدورة على منصة Cursera", en: "Free Account for Course Content on Coursera Platform" }, price: "" }
  ];

  // حالة النموذج - simplified form
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    programType: 'course',
    selectedProgram: '',
    selectedServices: [],
    notes: ''
  });

  // حالة التحقق
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  // Tab/Step State
  const [activeTab, setActiveTab] = useState(0);

  const steps = useMemo(() => {
    const baseSteps = [
      { id: 0, title: { ar: 'المعلومات الشخصية', en: 'Personal Info' }, fields: ['fullName', 'phone'] },
      { id: 1, title: { ar: 'تفاصيل البرنامج', en: 'Program Details' }, fields: [] },
      { id: 2, title: { ar: 'ملاحظات', en: 'Comments' }, fields: ['email', 'notes'] },
    ];

    return baseSteps;
  }, [formData.programType]);

  const validateStep = (stepIndex) => {
    const currentStepFields = steps[stepIndex]?.fields || [];
    const allErrors = validateForm();

    const stepErrors = {};
    let isValid = true;

    currentStepFields.forEach(field => {
      if (allErrors[field]) {
        stepErrors[field] = allErrors[field];
        isValid = false;
      }
    });

    setErrors(stepErrors);
    return isValid;
  };

  const handleNext = () => {
    if (validateStep(activeTab)) {
      setActiveTab(prev => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBack = () => {
    setActiveTab(prev => prev - 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // معالجة تغيير نوع البرنامج
  const handleProgramTypeChange = (type) => {
    setFormData(prev => ({
      ...prev,
      programType: type,
      selectedProgram: '',
      selectedServices: [],
      priorExperience: '',
      careerGoals: '',
      studySchedule: '',
      financialSupport: ''
    }));
    setActiveTab(0);
    setErrors({});
    setSubmitError('');
  };

  // معالجة تغيير المدخلات
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
    if (submitError) {
      setSubmitError('');
    }
  };

  // معالجة اختيار الخدمات الإضافية
  const handleServiceToggle = (serviceId) => {
    setFormData(prev => {
      const services = [...prev.selectedServices];
      const index = services.indexOf(serviceId);

      if (index > -1) {
        services.splice(index, 1);
      } else {
        services.push(serviceId);
      }

      return { ...prev, selectedServices: services };
    });
  };

  // التحقق من صحة النموذج - simplified validation
  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = lang === 'ar' ? 'الاسم الكامل مطلوب' : 'Full name is required';
    } else if (formData.fullName.trim().length < 3) {
      newErrors.fullName = lang === 'ar' ? 'الاسم يجب أن يكون 3 أحرف على الأقل' : 'Full name must be at least 3 characters';
    }

    if (!formData.phone) {
      newErrors.phone = lang === 'ar' ? 'رقم الهاتف مطلوب' : 'Phone number is required';
    }
    // select Program is optional
    // if (!formData.selectedProgram) {
    //   newErrors.selectedProgram = lang === 'ar' ? 'يجب اختيار برنامج' : 'Please select a program';
    // }

    // Email is mandatory
    if (!formData.email) {
      newErrors.email = lang === 'ar' ? 'البريد الإلكتروني مطلوب' : 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = lang === 'ar' ? 'البريد الإلكتروني غير صحيح' : 'Invalid email format';
    }

    return newErrors;
  };

  // دالة إرسال البريد الإلكتروني
  const sendRegistrationEmail = async (data) => {
    try {
      let localizedProgram = null;
      let programPrice = 0;
      
      // Only process program if one is selected
      if (formData.selectedProgram) {
        const programList = formData.programType === 'course' ? courses : programs;
        const selectedProgram = programList.find(p => p.id == formData.selectedProgram);

        if (selectedProgram) {
          localizedProgram = formData.programType === 'course'
            ? getCourseData(selectedProgram, 'ar')
            : getProgramData(selectedProgram, 'ar');
          programPrice = Number(selectedProgram.price) || 0;
        }
      }

      let diplomaInfo = '';
      if (formData.programType === 'diploma') {
        diplomaInfo = `
معلومات الدبلوم:
الخبرة السابقة: ${data.priorExperience}
أهداف الوظيفة: ${data.careerGoals}
الجدول الدراسي المفضل: ${data.studySchedule}
الدعم المالي: ${data.financialSupport}
`;
      }

      const templateParams = {
        to_email: 'abdelRahman.youssef@asta.edu.sa',
        to_name: 'عبدالرحمن يوسف',
        from_name: data.fullName,
        from_email: data.email,
        subject: localizedProgram 
          ? `تسجيل جديد في ${formData.programType === 'diploma' ? 'برنامج دبلوم' : 'دورة'}: ${localizedProgram.title}`
          : `تسجيل جديد - ${formData.programType === 'diploma' ? 'برنامج دبلوم' : 'دورة'}`,
        message: `تسجيل جديد في ${formData.programType === 'diploma' ? 'برنامج الدبلوم' : 'الدورة'}

المعلومات الشخصية:
الاسم الكامل: ${data.fullName}
البريد الإلكتروني: ${data.email || 'لم يتم توفيره'}
رقم الجوال: ${data.phone}

تفاصيل التسجيل:
نوع البرنامج: ${formData.programType === 'diploma' ? 'برنامج دبلوم' : 'دورة احترافية'}
${localizedProgram ? `البرنامج: ${localizedProgram.title}
الفئة: ${localizedProgram.category}
سعر البرنامج: ${programPrice.toLocaleString()} ر.س` : 'لم يتم اختيار برنامج'}

الخدمات الإضافية المختارة:
${data.selectedServices.length > 0 ? 
  data.selectedServices.map(service => `- ${service.name[lang] || service.name.ar || service.name.en}: ${service.price ? service.price + ' ر.س' : 'مجاني'}`).join('\n') : 
  'لا توجد خدمات إضافية مختارة'
}

إجمالي المبلغ: ${data.totalAmount} ر.س

${diplomaInfo}

ملاحظات إضافية:
${data.notes || 'لا توجد ملاحظات'}

تاريخ التسجيل: ${data.submissionDate}
رقم المرجع: ${data.referenceNumber}`,
        reply_to: data.email
      };

      const response = await emailjs.send(
        'asta',
        'template_qpi4g3m',
        templateParams
      );

      return response;
    } catch (error) {
      console.error('Error sending email:', error);
      throw new Error(lang === 'ar' ? 'فشل في إرسال البريد الإلكتروني. الرجاء المحاولة مرة أخرى.' : 'Failed to send email. Please try again.');
    }
  };

  // معالجة إرسال النموذج
  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);

      // Find the first step that contains a field with an error
      const firstErrorField = Object.keys(validationErrors)[0];
      const errorStepIndex = steps.findIndex(step =>
        step.fields && step.fields.includes(firstErrorField)
      );

      if (errorStepIndex !== -1) {
        setActiveTab(errorStepIndex);
      }

      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    setIsSubmitting(true);
    setSubmitError('');

    try {
      let localizedProgram = null;
      let programPrice = 0;
      let selectedServicesList = [];
      
      // Only process program if one is selected
      if (formData.selectedProgram) {
        const programList = formData.programType === 'course' ? courses : programs;
        const selectedProgram = programList.find(p => p.id == formData.selectedProgram);

        if (selectedProgram) {
          localizedProgram = formData.programType === 'course'
            ? getCourseData(selectedProgram, 'ar')
            : getProgramData(selectedProgram, 'ar');
          programPrice = Number(selectedProgram.price) || 0;
        }
      }

      selectedServicesList = additionalServices.filter(service =>
        formData.selectedServices.includes(service.id)
      );

      // Format selected services for email display
      const selectedServicesText = selectedServicesList
        .map(service => `${service.name[lang] || service.name.ar || service.name.en}`)
        .join(', ');

      const servicesTotal = selectedServicesList.reduce(
        (sum, service) => sum + (Number(service.price) || 0),
        0
      );
      const totalAmount = programPrice + servicesTotal;

      const submissionData = {
        ...formData,
        programTitle: localizedProgram ? localizedProgram.title : null,
        programCategory: localizedProgram ? localizedProgram.category : null,
        programPrice: programPrice.toLocaleString(),
        selectedServices: selectedServicesList,
        servicesTotal: servicesTotal.toLocaleString(),
        totalAmount: totalAmount.toLocaleString(),
        submissionDate: new Date().toLocaleString('ar-SA'),
        referenceNumber: `REG-${Date.now()}`
      };

      await sendRegistrationEmail(submissionData);

      // Store registration data in sessionStorage for the success page
      const registrationDataForStorage = {
        formData: formData,
        selectedProgram: selectedProgram,
        totalAmount: totalAmount.toLocaleString(),
        submissionDate: new Date().toLocaleString('ar-SA'),
        referenceNumber: `REG-${Date.now()}`
      };
      sessionStorage.setItem('registrationData', JSON.stringify(registrationDataForStorage));

      // Redirect to success page
      navigate(`/${lang || 'ar'}/registration-success`);

      try {
        await emailjs.send(
          'asta',
          'template_8ir9aeh',
          {
            to_email: formData.email,
            to_name: formData.fullName,
            program_name: localizedProgram ? localizedProgram.title : (formData.programType === 'diploma' ? 'برنامج دبلوم' : 'دورة'),
            selected_services: selectedServicesText,
            reference_number: submissionData.referenceNumber,
            total_amount: totalAmount.toLocaleString()
          }
        );
      } catch (userEmailError) {
        console.warn('Could not send confirmation to user:', userEmailError);
      }

    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError(error.message || (lang === 'ar' ? 'حدث خطأ أثناء إرسال النموذج. الرجاء المحاولة مرة أخرى.' : 'An error occurred while submitting the form. Please try again.'));
    } finally {
      setIsSubmitting(false);
    }
  };

  // حساب المجموع الكلي
  const calculateTotal = () => {
    const programList = formData.programType === 'course' ? courses : programs;
    const program = programList.find(p => parseInt(p.id) === parseInt(formData.selectedProgram));
    const programPrice = program ? (Number(program.price) || 0) : 0;

    const servicesTotal = additionalServices
      .filter(service => formData.selectedServices.includes(service.id))
      .reduce((sum, service) => sum + (Number(service.price) || 0), 0);

    return programPrice + servicesTotal;
  };

  // الحصول على البرنامج المحدد
  const programList = formData.programType === 'course' ? courses : programs;
  const localizedProgramList = useMemo(() =>
    programList.map(p => {
      const localizedData = formData.programType === 'course'
        ? getCourseData(p, lang)
        : getProgramData(p, lang);
      return {
        ...p,
        ...localizedData
      };
    }),
    [formData.programType, programList, lang]
  );

  const selectedProgram = useMemo(() =>
    programList.find(p => parseInt(p.id) === parseInt(formData.selectedProgram)),
    [formData.selectedProgram, formData.programType, programList]
  );

return (
  <div className="bg-gray-50 min-h-screen pb-12" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
    <SEO 
      titleAr="التسجيل | اكاديمية المهارات التطبيقية"
      titleEn="Registration | Applied Skills Training Academy"
      descriptionAr="سجل في برامجنا التدريبية الاحترافية الآن"
      descriptionEn="Register in our professional training programs now"
      url={`https://asta.edu.sa/${lang}/registration`}
      isRTL={isRTL}
    />
    <RegistrationHeader selectedProgram={selectedProgram} lang={lang} t={t} />
    
    <div className="max-w-4xl mx-auto px-4 py-8">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Basic Personal Info */}
        <div className="space-y-6">
          <BasicPersonalInfo formData={formData} handleInputChange={handleInputChange} errors={errors} lang={lang} t={t} />
        </div>

        {/* Program Selection */}
        <div className="space-y-6">
          <ProgramTypeSelector programType={formData.programType} handleProgramTypeChange={handleProgramTypeChange} lang={lang} t={t} />
          <ProgramSelectionSection
            programs={localizedProgramList}
            formData={formData}
            handleInputChange={handleInputChange}
            handleServiceToggle={handleServiceToggle}
            additionalServices={additionalServices}
            errors={errors}
            programType={formData.programType}
            lang={lang}
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            disabled={isSubmitting}
            className="px-8 py-3 bg-[#202C5B] text-white rounded-xl font-semibold hover:bg-[#1a234a] transition-colors flex items-center gap-2"
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 8 0 0-8 8H4a8 8 8 0 0 8-8z"></path>
                </svg>
                {lang === 'ar' ? 'جاري الإرسال...' : 'Submitting...'}
              </>
            ) : (
              <>
                {lang === 'ar' ? 'ارسال البيانات' : 'Send Data'}
                <ChevronRightIcon className="w-5 h-5" />
              </>
            )}
          </button>
        </div>

        {submitError && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mt-6">
            <p className="font-medium">{submitError}</p>
          </div>
        )}
      </form>
    </div>
  </div>
  );
};

export default RegistrationPage2;