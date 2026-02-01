import { CheckCircleIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import { getCourseData } from '../api/Courses';
import { getProgramData } from '../api/Programs';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';

function SuccessConfirmation() {
    const { lang } = useParams();
    const navigate = useNavigate();
    const isRTL = lang === 'ar';
    const [registrationData, setRegistrationData] = useState(null);
    const [selectedProgram, setSelectedProgram] = useState(null);

    useEffect(() => {
        // Get registration data from sessionStorage
        const storedData = sessionStorage.getItem('registrationData');
        if (storedData) {
            const data = JSON.parse(storedData);
            setRegistrationData(data.formData);
            
            // Find the selected program
            if (data.formData.selectedProgram) {
                const programList = data.formData.programType === 'course' ? 
                    require('../api/Courses').default : 
                    require('../api/Programs').default;
                const program = programList.find(p => p.id == data.formData.selectedProgram);
                setSelectedProgram(program);
            }
        } else {
            // If no data, redirect to registration
            navigate(`/${lang || 'ar'}/registration`);
        }
    }, [lang, navigate]);

    // Get localized program data
    const localizedProgram = selectedProgram ? (
        registrationData?.programType === 'course'
            ? getCourseData(selectedProgram, lang)
            : getProgramData(selectedProgram, lang)
    ) : null;

    const handleNewRegistration = () => {
        // Clear stored data
        sessionStorage.removeItem('registrationData');
        navigate(`/${lang || 'ar'}/registration`);
    };

    if (!registrationData) {
    return (
        <div className="max-w-3xl mx-auto px-4 py-12">
            <SEO title={isRTL ? "تأكيد التسجيل | اكاديمية المهارات التطبيقية" : "Registration Confirmation | Applied Skills Training Academy"} />
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#202C5B] mx-auto"></div>
                    <p className="mt-4 text-gray-600">
                        {lang === 'ar' ? 'جاري التحميل...' : 'Loading...'}
                    </p>
                </div>
            </div>
        );
    }

        return (
            <div className="max-w-3xl mx-auto px-4 py-12">
                <SEO title={isRTL ? "تأكيد التسجيل | اكاديمية المهارات التطبيقية" : "Registration Confirmation | Applied Skills Training Academy"} />
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-r from-green-100 to-emerald-100 flex items-center justify-center">
                    <CheckCircleIcon className="h-12 w-12 text-green-500" />
                </div>
                
                <h1 className="text-3xl font-bold text-gray-800 mb-4">
                    {lang === 'ar' ? 'تم إرسال تسجيلك بنجاح! 🎉' : 'Registration submitted successfully! 🎉'}
                </h1>
                
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
                    <div className="flex items-center gap-3 mb-4">
                        <EnvelopeIcon className="h-8 w-8 text-[#202C5B]" />
                        <h3 className="font-bold text-gray-800">{lang === 'ar' ? 'تفاصيل الإرسال:' : 'Submission Details:'}</h3>
                    </div>
                    <p className="text-gray-600 mb-3">
                        {lang === 'ar' ? 'تم إرسال بيانات تسجيلك إلى قسم التسجيل' : 'Your registration data has been sent to the registration department'}
                    </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                        onClick={handleNewRegistration}
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
