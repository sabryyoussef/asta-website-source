import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';

export default function NotFound({ lang: langProp }) {
  const { lang: langParam = 'ar' } = useParams();
  const rawLang = langProp || langParam;
  // Default to 'ar' if lang is invalid
  const lang = (rawLang === 'en' || rawLang === 'ar') ? rawLang : 'ar';
  const { t } = useTranslation();
  const isRTL = lang === 'ar';

  return (
    <div 
      dir={isRTL ? 'rtl' : 'ltr'} 
      className="min-h-screen flex items-center justify-center bg-gray-50 px-4"
    >
      <SEO 
        titleAr="الصفحة غير موجودة | اكاديمية المهارات التطبيقية"
        titleEn="Page Not Found | Applied Skills Training Academy"
        descriptionAr="الصفحة التي تبحث عنها غير موجودة"
        descriptionEn="The page you are looking for does not exist"
        url={`https://asta.edu.sa/${lang}/404`}
        isRTL={isRTL}
      />
      <div className="text-center">
        <h1 className="text-9xl font-bold text-[#202C5B] mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          {isRTL ? 'الصفحة غير موجودة' : 'Page Not Found'}
        </h2>
        <p className="text-gray-600 mb-8">
          {isRTL 
            ? 'عذراً، الصفحة التي تبحث عنها غير موجودة.' 
            : 'Sorry, the page you are looking for does not exist.'}
        </p>
        <Link
          to={`/${lang}`}
          className="inline-block px-6 py-3 bg-gradient-to-r from-[#23A0D0] to-[#3CBEB3] text-white font-semibold rounded-lg hover:opacity-80 transition-opacity"
        >
          {isRTL ? 'العودة إلى الصفحة الرئيسية' : 'Go to Homepage'}
        </Link>
      </div>
    </div>
  );
}

