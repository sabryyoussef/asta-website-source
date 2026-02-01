import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import SEO from "../components/SEO";

export default function CertificateChecker() {
  const { lang = 'ar' } = useParams();
  const { t } = useTranslation();
  const isRTL = lang === 'ar';

  // Form state
  const [formData, setFormData] = useState({
    certificateCode: "",
    nationalId: "",
    fullName: "",
    phoneNumber: "",
  });

  // UI state
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [certificateResult, setCertificateResult] = useState(null);
  const [showResult, setShowResult] = useState(false);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    // Format phone number (remove non-digits, limit to 10 digits)
    if (name === 'phoneNumber') {
      const digitsOnly = value.replace(/\D/g, '');
      if (digitsOnly.length <= 10) {
        setFormData(prev => ({ ...prev, [name]: digitsOnly }));
      }
      return;
    }

    // Format national ID (only digits, limit to 10)
    if (name === 'nationalId') {
      const digitsOnly = value.replace(/\D/g, '');
      if (digitsOnly.length <= 10) {
        setFormData(prev => ({ ...prev, [name]: digitsOnly }));
      }
      return;
    }

    setFormData(prev => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  // Validation function
  const validateForm = () => {
    const newErrors = {};

    // Certificate code validation
    // if (!formData.certificateCode.trim()) {
    //   newErrors.certificateCode = isRTL 
    //     ? 'كود الشهادة مطلوب' 
    //     : 'Certificate code is required';
    // }

    // National ID / Iqama validation
    if (!formData.nationalId.trim()) {
      newErrors.nationalId = isRTL 
        ? 'رقم الهوية الوطنية أو الإقامة مطلوب' 
        : 'National ID or Iqama number is required';
    } else if (!/^[12]\d{9}$/.test(formData.nationalId)) {
      newErrors.nationalId = isRTL 
        ? 'رقم الهوية أو الإقامة يجب أن يتكون من 10 أرقام ويبدأ بـ 1 أو 2' 
        : 'National ID or Iqama must be 10 digits starting with 1 or 2';
    }

    // Full name validation
    if (!formData.fullName.trim()) {
      newErrors.fullName = isRTL 
        ? 'الاسم الكامل مطلوب' 
        : 'Full name is required';
    } else if (formData.fullName.trim().length < 3) {
      newErrors.fullName = isRTL 
        ? 'الاسم يجب أن يكون 3 أحرف على الأقل' 
        : 'Full name must be at least 3 characters';
    }

    // Phone number validation
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = isRTL 
        ? 'رقم الهاتف مطلوب' 
        : 'Phone number is required';
    } else if (!/^(05\d{8}|9665\d{8})$/.test(formData.phoneNumber.replace(/[^0-9]/g, ''))) {
      newErrors.phoneNumber = isRTL 
        ? 'رقم الهاتف يجب أن يبدأ بـ 05 أو 9665 ويتكون من 10 أرقام' 
        : 'Phone number must start with 05 or 9665 and be 10 digits';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);
    setShowResult(false);
    setCertificateResult(null);

    try {
      // Simulate API call - Replace with actual API endpoint
      // const response = await fetch('/api/check-certificate', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData),
      // });
      // const result = await response.json();

      // Mock API response for demonstration
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const mockResult = {
        certificate_exists: true,
        certificate: {
          code: formData.certificateCode || "N/A", // Certificate code field is commented out
          course: {
            title: isRTL ? "دورة تدريبية في التطوير المهني" : "Professional Development Course"
          },
          issued_at: new Date().toISOString(),
          student: {
            name: formData.fullName,
            national_id: formData.nationalId,
            phone: formData.phoneNumber
          }
        }
      };

      setCertificateResult(mockResult);
      setShowResult(true);
    } catch (error) {
      console.error('Error checking certificate:', error);
      setCertificateResult({
        certificate_exists: false,
        error: isRTL 
          ? 'حدث خطأ أثناء التحقق من الشهادة. حاول مرة أخرى' 
          : 'An error occurred while checking the certificate. Please try again'
      });
      setShowResult(true);
    } finally {
      setLoading(false);
    }
  };

  // Handle reset
  const handleReset = () => {
    setFormData({
      certificateCode: "",
      nationalId: "",
      fullName: "",
      phoneNumber: "",
    });
    setErrors({});
    setCertificateResult(null);
    setShowResult(false);
  };

  // Handle Enter key press
  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !loading) {
      handleSubmit(e);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-teal-100 flex items-center justify-center p-4 py-8">
      <SEO 
        titleAr="فحص الشهادة | اكاديمية المهارات التطبيقية"
        titleEn="Certificate Verification | Applied Skills Training Academy"
        descriptionAr="تحقق من صحة شهادتك من اكاديمية المهارات التطبيقية"
        descriptionEn="Verify your certificate from Applied Skills Training Academy"
        url={`https://asta.edu.sa/${lang}/certificate-checker`}
        isRTL={isRTL}
      />
      <div className="w-full max-w-2xl">
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
          <div className="text-center mb-8">
            <div
              className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4"
              style={{ backgroundColor: "#E5F7FA" }}
            >
              <svg
                className="w-8 h-8"
                style={{ color: "#2BAAC7" }}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              {isRTL ? "التحقق من الشهادة" : "Certificate Verification"}
            </h1>
            <p className="text-gray-600">
              {isRTL 
                ? "أدخل بياناتك وكود الشهادة للتحقق من صحتها" 
                : "Enter your information and certificate code to verify"}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Certificate Code */}
            {/* <div>
              <label
                htmlFor="certificateCode"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                {isRTL ? "كود الشهادة" : "Certificate Code"} *
              </label>
              <input
                id="certificateCode"
                name="certificateCode"
                type="text"
                value={formData.certificateCode}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
                placeholder={isRTL ? "مثال: CERT-2024-12345" : "Example: CERT-2024-12345"}
                className={`w-full px-4 py-3 border rounded-lg outline-none transition text-right ${
                  errors.certificateCode 
                    ? 'border-red-500' 
                    : 'border-gray-300 focus:border-[#2BAAC7] focus:ring-2 focus:ring-[#2BAAC7]/20'
                }`}
                disabled={loading}
                dir="ltr"
              />
              {errors.certificateCode && (
                <p className="mt-1 text-sm text-red-600">{errors.certificateCode}</p>
              )}
            </div> */}

            {/* National ID / Iqama */}
            <div>
              <label
                htmlFor="nationalId"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                {isRTL ? "رقم الهوية الوطنية / الإقامة" : "National ID / Iqama"} *
              </label>
              <input
                id="nationalId"
                name="nationalId"
                type="text"
                value={formData.nationalId}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
                placeholder={isRTL ? "10 أرقام (هوية أو إقامة)" : "10 digits (ID or Iqama)"}
                maxLength="10"
                className={`w-full px-4 py-3 border rounded-lg outline-none transition text-right ${
                  errors.nationalId 
                    ? 'border-red-500' 
                    : 'border-gray-300 focus:border-[#2BAAC7] focus:ring-2 focus:ring-[#2BAAC7]/20'
                }`}
                disabled={loading}
                dir="ltr"
              />
              {errors.nationalId && (
                <p className="mt-1 text-sm text-red-600">{errors.nationalId}</p>
              )}
            </div>

            {/* Full Name */}
            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                {isRTL ? "الاسم الكامل" : "Full Name"} *
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                value={formData.fullName}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
                placeholder={isRTL ? "أدخل الاسم الكامل" : "Enter full name"}
                className={`w-full px-4 py-3 border rounded-lg outline-none transition ${
                  errors.fullName 
                    ? 'border-red-500' 
                    : 'border-gray-300 focus:border-[#2BAAC7] focus:ring-2 focus:ring-[#2BAAC7]/20'
                }`}
                disabled={loading}
                dir={isRTL ? 'rtl' : 'ltr'}
              />
              {errors.fullName && (
                <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>
              )}
            </div>

            {/* Phone Number */}
            <div>
              <label
                htmlFor="phoneNumber"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                {isRTL ? "رقم الهاتف" : "Phone Number"} *
              </label>
              <input
                id="phoneNumber"
                name="phoneNumber"
                type="text"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
                placeholder={isRTL ? "05xxxxxxxx" : "05xxxxxxxx"}
                maxLength="10"
                className={`w-full px-4 py-3 border rounded-lg outline-none transition text-right ${
                  errors.phoneNumber 
                    ? 'border-red-500' 
                    : 'border-gray-300 focus:border-[#2BAAC7] focus:ring-2 focus:ring-[#2BAAC7]/20'
                }`}
                disabled={loading}
                dir="ltr"
              />
              {errors.phoneNumber && (
                <p className="mt-1 text-sm text-red-600">{errors.phoneNumber}</p>
              )}
            </div>

            {/* Result Display */}
            {showResult && certificateResult && (
              <div
                className={`flex items-start gap-3 p-4 rounded-lg animate-in fade-in slide-in-from-top-2 duration-300 ${
                  certificateResult.certificate_exists
                    ? 'bg-green-50 border border-green-200'
                    : 'bg-red-50 border border-red-200'
                }`}
              >
                <svg
                  className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                    certificateResult.certificate_exists ? 'text-green-600' : 'text-red-600'
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {certificateResult.certificate_exists ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  )}
                </svg>
                <div className="flex-1">
                  <p
                    className={`text-sm font-semibold mb-2 ${
                      certificateResult.certificate_exists ? 'text-green-800' : 'text-red-800'
                    }`}
                  >
                    {certificateResult.certificate_exists
                      ? (isRTL ? "تم التحقق من الشهادة بنجاح" : "Certificate verified successfully")
                      : (isRTL ? "الشهادة غير موجودة في النظام" : "Certificate not found in the system")}
                  </p>
                  {certificateResult.certificate && (
                    <div className="text-sm space-y-1.5 text-gray-700">
                      <div className="flex justify-between">
                        <span className="font-medium">{isRTL ? "الكود:" : "Code:"}</span>
                        <span className="text-left" dir="ltr">
                          {certificateResult.certificate.code}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">{isRTL ? "الدورة:" : "Course:"}</span>
                        <span className="text-right">
                          {certificateResult.certificate.course?.title}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">{isRTL ? "الاسم:" : "Name:"}</span>
                        <span className="text-right">
                          {certificateResult.certificate.student?.name}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">{isRTL ? "تاريخ الإصدار:" : "Issue Date:"}</span>
                        <span className="text-right">
                          {new Date(
                            certificateResult.certificate.issued_at
                          ).toLocaleDateString(isRTL ? "ar-EG" : "en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </span>
                      </div>
                    </div>
                  )}
                  {certificateResult.error && (
                    <p className="text-sm text-red-600 mt-2">{certificateResult.error}</p>
                  )}
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex gap-3 pt-4">
              <button
                type="submit"
                disabled={loading}
                className="flex-1 text-white py-3 px-4 rounded-lg font-medium transition flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed hover:opacity-90"
                style={{
                  backgroundColor: loading ? "#94a3b8" : "#2BAAC7",
                }}
              >
                {loading ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    {isRTL ? "جاري التحقق..." : "Verifying..."}
                  </>
                ) : (
                  <>
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                    {isRTL ? "تحقق من الشهادة" : "Verify Certificate"}
                  </>
                )}
              </button>

              {(showResult || Object.keys(errors).length > 0) && (
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-4 py-3 border rounded-lg font-medium transition flex items-center justify-center hover:bg-gray-50"
                  style={{
                    borderColor: "#2BAAC7",
                    color: "#2BAAC7",
                  }}
                  title={isRTL ? "البحث عن شهادة أخرى" : "Search for another certificate"}
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    />
                  </svg>
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
