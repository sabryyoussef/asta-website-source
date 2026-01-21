import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronUpIcon } from '@heroicons/react/24/outline';

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const { i18n } = useTranslation();

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 ${i18n.language === 'ar' ? 'left-8' : 'right-8'} z-40 p-3 bg-gradient-to-r from-[#23A0D0] to-[#3CBEB3] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#23A0D0] focus:ring-offset-2`}
      aria-label="Scroll to top"
    >
      <ChevronUpIcon className="w-6 h-6" />
    </button>
  );
}
