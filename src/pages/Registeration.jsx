import { useState, useMemo } from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/24/outline';
import emailjs from '@emailjs/browser';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
// api
import Programs, { getProgramData } from '../api/Programs';
import Courses, { getCourseData } from '../api/Courses';
// components
import RegistrationHeader from '../components/Registration/RegistrationHeader';
import BasicPersonalInfo from '../components/Registration/BasicPersonalInfo';
import RegistrationForm from '../components/Registration/RegistrationForm';
import ProgramTypeSelector from '../components/Registration/ProgramTypeSelector';
import ProgramSelectionSection from '../components/Registration/ProgramSelectionSection';
import DiplomaSpecificSection from '../components/Registration/DiplomaSpecificSection';
import PaymentSection from '../components/Registration/PaymentSection';
import SummarySection from '../components/Registration/SummarySection';
import SuccessConfirmation from '../components/Registration/SuccessConfirmation';

// prepare EmailJS
emailjs.init("k62cRdPnAvAsP_96b");

const RegistrationPage = () => {
  const { programId, lang } = useParams();
  const { t } = useTranslation();
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

  // حالة النموذج - initialize with first course by default
  const [formData, setFormData] = useState({
    programType: 'course',
    fullName: '',
    email: '',
    phone: '',
    nationalId: '',
    degree: '',
    selectedProgram: courses.length > 0 ? courses[0].id : 1,
    selectedServices: [],
    emergencyContact: '',
    notes: '',
    agreeToTerms: false,
    paymentMethod: 'full',
    // Diploma specific fields
    priorExperience: '',
    careerGoals: '',
    studySchedule: '',
    financialSupport: ''
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
      { id: 1, title: { ar: 'نموذج التسجيل', en: 'Registration Form' }, fields: ['email', 'nationalId', 'degree'] },
      { id: 2, title: { ar: 'تفاصيل البرنامج', en: 'Program Details' }, fields: ['selectedProgram'] },
    ];

    if (formData.programType === 'diploma') {
      baseSteps.push({
        id: 3,
        title: { ar: 'معلومات الدبلوم', en: 'Diploma Info' },
        fields: ['priorExperience', 'careerGoals', 'studySchedule', 'financialSupport']
      });
    }

    baseSteps.push({
      id: formData.programType === 'diploma' ? 4 : 3,
      title: { ar: 'الدفع والتأكيد', en: 'Payment & Confirm' },
      fields: ['agreeToTerms', 'paymentMethod']
    });

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
    const initialProgram = type === 'course'
      ? (courses.length > 0 ? courses[0].id : 1)
      : (programs.length > 0 ? programs[0].id : 1);

    setFormData(prev => ({
      ...prev,
      programType: type,
      selectedProgram: initialProgram,
      selectedServices: [],
      priorExperience: '',
      careerGoals: '',
      studySchedule: '',
      financialSupport: ''
    }));
    // setActiveTab(0); // Removing this so strict navigation doesn't force user back
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

  // التحقق من صحة النموذج
  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = lang === 'ar' ? 'الاسم الكامل مطلوب' : 'Full name is required';
    } else if (formData.fullName.trim().length < 3) {
      newErrors.fullName = lang === 'ar' ? 'الاسم يجب أن يكون 3 أحرف على الأقل' : 'Full name must be at least 3 characters';
    }

    if (!formData.email) {
      newErrors.email = lang === 'ar' ? 'البريد الإلكتروني مطلوب' : 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = lang === 'ar' ? 'البريد الإلكتروني غير صحيح' : 'Invalid email format';
    }

    if (!formData.phone) {
      newErrors.phone = lang === 'ar' ? 'رقم الهاتف مطلوب' : 'Phone number is required';
    } else if (!/^05\d{8}$/.test(formData.phone.replace(/[^0-9]/g, ''))) {
      newErrors.phone = lang === 'ar' ? 'رقم الهاتف يجب أن يبدأ بـ 05 ويتكون من 10 أرقام' : 'Phone number must start with 05 and be 10 digits';
    }

    if (!formData.nationalId) {
      newErrors.nationalId = lang === 'ar' ? 'رقم الهوية مطلوب' : 'National ID is required';
    } else if (!/^[12]\d{9}$/.test(formData.nationalId)) {
      newErrors.nationalId = lang === 'ar' ? 'رقم الهوية يجب أن يتكون من 10 أرقام ويبدأ بـ 1 أو 2' : 'National ID must be 10 digits starting with 1 or 2';
    }

    if (!formData.degree) {
      newErrors.degree = lang === 'ar' ? 'الرجاء اختيار المؤهل العلمي' : 'Please select your educational degree';
    }

    // Diploma specific validation
    if (formData.programType === 'diploma') {
      if (!formData.priorExperience) {
        newErrors.priorExperience = lang === 'ar' ? 'الرجاء تحديد خبرتك السابقة' : 'Please select your prior experience';
      }
      if (!formData.careerGoals.trim()) {
        newErrors.careerGoals = lang === 'ar' ? 'الرجاء شرح أهدافك المهنية' : 'Please explain your career goals';
      }
      if (!formData.studySchedule) {
        newErrors.studySchedule = lang === 'ar' ? 'الرجاء اختيار الجدول الدراسي المفضل' : 'Please select your preferred study schedule';
      }
      if (!formData.financialSupport) {
        newErrors.financialSupport = lang === 'ar' ? 'الرجاء تحديد احتياجاتك المالية' : 'Please select your financial support needs';
      }
    }

    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = lang === 'ar' ? 'يجب الموافقة على الشروط والأحكام' : 'You must agree to the terms and conditions';
    }

    return newErrors;
  };

  // دالة إرسال البريد الإلكتروني
  const sendRegistrationEmail = async (data) => {
    try {
      const programList = formData.programType === 'course' ? courses : programs;
      const selectedProgram = programList.find(p => p.id == formData.selectedProgram);

      // Safety check - if no program found, throw error
      if (!selectedProgram) {
        throw new Error(lang === 'ar' ? 'البرنامج المحدد غير موجود' : 'Selected program not found');
      }

      const localizedProgram = formData.programType === 'course'
        ? getCourseData(selectedProgram, 'ar')
        : getProgramData(selectedProgram, 'ar');

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
        subject: `تسجيل جديد في ${formData.programType === 'diploma' ? 'برنامج دبلوم' : 'دورة'}: ${localizedProgram.title}`,
        message: `تسجيل جديد في ${formData.programType === 'diploma' ? 'برنامج الدبلوم' : 'الدورة'}

المعلومات الشخصية:
الاسم الكامل: ${data.fullName}
البريد الإلكتروني: ${data.email}
رقم الجوال: ${data.phone}
رقم الهوية: ${data.nationalId}
المؤهل العلمي: ${data.degree}
جهة اتصال الطوارئ: ${data.emergencyContact || 'غير محدد'}

تفاصيل التسجيل:
نوع البرنامج: ${formData.programType === 'diploma' ? 'برنامج دبلوم' : 'دورة احترافية'}
البرنامج: ${localizedProgram.title}
الفئة: ${localizedProgram.category}
طريقة الدفع: ${data.paymentMethod === 'full' ? 'دفع كامل' : data.paymentMethod === 'installment' ? 'تقسيط' : 'تحويل بنكي'}

${diplomaInfo}

الخدمات الإضافية:
${data.selectedServices.length > 0
            ? data.selectedServices.map(service => `• ${service.name[lang] || service.name.ar || service.name.en} - ${service.price}`).join('\n')
            : 'لم يتم اختيار خدمات إضافية'
          }

المعلومات المالية:
سعر البرنامج: ${data.programPrice}
مجموع الخدمات الإضافية: ${data.servicesTotal}
المجموع الكلي: ${data.totalAmount}

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
      const programList = formData.programType === 'course' ? courses : programs;
      const selectedProgram = programList.find(p => p.id == formData.selectedProgram);

      // Safety check - if no program found, throw error
      if (!selectedProgram) {
        console.log('Debug - formData.selectedProgram:', formData.selectedProgram);
        console.log('Debug - programList:', programList.map(p => ({ id: p.id, title: p.title })));
        throw new Error(lang === 'ar' ? 'البرنامج المحدد غير موجود' : 'Selected program not found');
      }

      const localizedProgram = formData.programType === 'course'
        ? getCourseData(selectedProgram, 'ar')
        : getProgramData(selectedProgram, 'ar');
      const selectedServicesList = additionalServices.filter(service =>
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
      const programPrice = Number(selectedProgram.price) || 0;
      const totalAmount = programPrice + servicesTotal;

      const submissionData = {
        ...formData,
        programTitle: localizedProgram.title,
        programCategory: localizedProgram.category,
        programPrice: programPrice.toLocaleString(),
        selectedServices: selectedServicesList,
        servicesTotal: servicesTotal.toLocaleString(),
        totalAmount: totalAmount.toLocaleString(),
        submissionDate: new Date().toLocaleString('ar-SA'),
        referenceNumber: `REG-${Date.now()}`
      };

      await sendRegistrationEmail(submissionData);

      setSubmitSuccess(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });

      try {
        await emailjs.send(
          'asta',
          'template_8ir9aeh',
          {
            to_email: formData.email,
            to_name: formData.fullName,
            program_name: localizedProgram.title,
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
      <RegistrationHeader selectedProgram={selectedProgram} lang={lang} t={t} />

      {submitSuccess ? (
        <SuccessConfirmation formData={formData} selectedProgram={selectedProgram} calculateTotal={calculateTotal} lang={lang} />
      ) : (
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Stepper Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between relative">
              <div className="absolute left-0 right-0 top-1/2 h-1 bg-gray-200 -z-0"></div>
              {steps.map((step, index) => {
                const isCompleted = activeTab > index;
                const isActive = activeTab === index;

                return (
                  <div key={index} className="relative z-10 flex flex-col items-center">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 border-4 
                        ${isActive ? 'bg-[#202C5B] border-[#226796] text-white' :
                          isCompleted ? 'bg-green-500 border-green-500 text-white' :
                            'bg-white border-gray-200 text-gray-400'}`}
                    >
                      {isCompleted ? <CheckCircleIcon className="w-6 h-6" /> : index + 1}
                    </div>
                    <span className={`mt-2 text-xs md:text-sm font-medium ${isActive ? 'text-[#202C5B]' : 'text-gray-500'}`}>
                      {step.title[lang] || step.title.ar}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">

              {/* Step 1: Basic Personal Info */}
              {activeTab === 0 && (
                <div className="space-y-6 animate-fadeIn">
                  <BasicPersonalInfo formData={formData} handleInputChange={handleInputChange} errors={errors} lang={lang} t={t} />
                </div>
              )}

              {/* Step 2: Registration Form */}
              {activeTab === 1 && (
                <div className="space-y-6 animate-fadeIn">
                  <RegistrationForm formData={formData} handleInputChange={handleInputChange} errors={errors} degrees={degrees} lang={lang} t={t} />
                </div>
              )}

              {/* Step 3: Program */}
              {activeTab === 2 && (
                <div className="animate-fadeIn">
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
              )}

              {/* Step 4: Diploma (If applicable) */}
              {formData.programType === 'diploma' && activeTab === 3 && (
                <div className="animate-fadeIn">
                  <DiplomaSpecificSection formData={formData} handleInputChange={handleInputChange} errors={errors} lang={lang} />
                </div>
              )}

              {/* Step 5 (or 4): Payment */}
              {activeTab === steps.length - 1 && (
                <div className="animate-fadeIn">
                  <PaymentSection formData={formData} handleInputChange={handleInputChange} errors={errors} lang={lang} />
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between pt-6 mt-6 border-t border-gray-200">
                <button
                  type="button"
                  onClick={handleBack}
                  disabled={activeTab === 0}
                  className={`px-6 py-3 rounded-xl border font-medium flex items-center gap-2 transition-colors
                    ${activeTab === 0
                      ? 'bg-gray-100 text-gray-400 border-transparent cursor-not-allowed'
                      : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'}`}
                >
                  {lang === 'ar' ? <ChevronRightIcon className="w-5 h-5" /> : <ChevronLeftIcon className="w-5 h-5" />}
                  {lang === 'ar' ? 'السابق' : 'Back'}
                </button>

                {activeTab < steps.length - 1 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="px-8 py-3 bg-[#202C5B] text-white rounded-xl font-medium hover:bg-[#1a234a] transition-colors flex items-center gap-2"
                  >
                    {lang === 'ar' ? 'التالي' : 'Next'}
                    {lang === 'ar' ? <ChevronLeftIcon className="w-5 h-5" /> : <ChevronRightIcon className="w-5 h-5" />}
                  </button>
                ) : (
                  /* The actual Submit button is in SummarySection for the final step, but we can also put one here if preferred. 
                     Currently keeping consistent with SummarySection having the submit. 
                     But wait, render SummarySection logic handles the button now. */
                  <div />
                )}
              </div>

            </div>

            <div className="lg:col-span-1">
              <SummarySection
                selectedProgram={selectedProgram}
                formData={formData}
                calculateTotal={calculateTotal}
                additionalServices={additionalServices}
                handleSubmit={handleSubmit}
                submitError={submitError}
                submitSuccess={submitSuccess}
                isSubmitting={isSubmitting}
                showButton={activeTab === steps.length - 1}
              />
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default RegistrationPage;