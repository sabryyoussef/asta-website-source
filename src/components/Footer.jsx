import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Programs, { getProgramData } from '../api/Programs';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const [email, setEmail] = useState('');
  const { lang = 'ar' } = useParams();
  const { t } = useTranslation();
  const isRTL = lang === 'ar';

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  // Data based on AOL footer structure
  const footerData = {
    contactInfo: [
      { icon: 'fa-map-marker-alt', text: t('footer.address') },
      // { icon: 'fa-phone', text: t('global.phoneNumber'), href: 'https://wa.me/966920016205', target: '_blank' },
      { icon: 'fa-envelope', text: 'info@asta.edu.sa', href: 'mailto:info@asta.edu.sa', target: '_blank' }
    ],
    
    programs: Programs.map((program) => ({
      id: program.id,
      title: getProgramData(program, lang)?.title
    })).filter(program => program.title),
    
    quickLinks: [
      { label: t('header.nav.home'), href: `/${lang}/` },
      { label: t('header.nav.about'), href: `/${lang}/about-us` },
      { label: t('header.nav.diplomas'), href: `/${lang}/programs` },
      { label: t('header.nav.courses'), href: `/${lang}/courses` },
      { label: t('header.nav.registration'), href: `/${lang}/registration` },
    ],
    
    socialLinks: [
      { platform: 'twitter', href: 'https://x.com/astaacademysa', color: 'hover:bg-[#1DA1F2]', svg: <path fill="currentColor" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /> },
      { platform: 'linkedin', href: 'https://www.linkedin.com/company/asta-acadamy', color: 'hover:bg-[#0077B5]', svg: <path fill="currentColor" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /> },
      { platform: 'youtube', href: 'https://www.youtube.com/@astaacademysa', color: 'hover:bg-[#FF0000]', svg: <path fill="currentColor" d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /> },
      { platform: 'instagram', href: 'https://www.instagram.com/astaacademysa/', color: 'hover:bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCAF45]', svg: <path fill="currentColor" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" /> },
      { platform: 'facebook', href: 'https://www.facebook.com/astaacademysa/', color: 'hover:bg-[#3B5998]', svg: <path fill="currentColor" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /> },
      { platform: 'snapchat', href: 'https://www.snapchat.com/@astaacademysa', color: 'hover:bg-[#FFD700]', svg: <path fill="currentColor" d="M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.299 4.847l-.003.06c-.012.18-.022.345-.03.51.075.045.203.09.401.09.3-.016.659-.12 1.033-.301.165-.088.344-.104.464-.104.182 0 .359.029.509.09.45.149.734.479.734.838.015.449-.39.839-1.213 1.168-.089.029-.209.075-.344.119-.45.135-1.139.36-1.333.81-.09.224-.061.524.12.868l.015.015c.06.136 1.526 3.475 4.791 4.014.255.044.435.27.42.509 0 .075-.015.149-.045.225-.24.569-1.273.988-3.146 1.271-.059.091-.12.375-.164.57-.029.179-.074.36-.134.553-.076.271-.27.405-.555.405h-.03c-.135 0-.313-.031-.538-.074-.36-.075-.765-.135-1.273-.135-.3 0-.599.015-.913.074-.6.104-1.123.464-1.723.884-.853.599-1.826 1.288-3.294 1.288-.06 0-.119-.015-.18-.015h-.149c-1.468 0-2.427-.675-3.279-1.288-.599-.42-1.107-.779-1.707-.884-.314-.045-.629-.074-.928-.074-.54 0-.958.089-1.272.149-.211.043-.391.074-.54.074-.374 0-.523-.224-.583-.42-.061-.192-.09-.389-.135-.567-.046-.181-.105-.494-.166-.57-1.918-.222-2.95-.642-3.189-1.226-.031-.063-.052-.15-.055-.225-.015-.243.165-.465.42-.509 3.264-.54 4.73-3.879 4.791-4.02l.016-.029c.18-.345.224-.645.119-.869-.195-.434-.884-.658-1.332-.809-.121-.029-.24-.074-.346-.119-1.107-.435-1.257-.93-1.197-1.273.09-.479.674-.793 1.168-.793.146 0 .27.029.383.074.42.194.789.3 1.104.3.234 0 .384-.06.465-.105l-.046-.569c-.098-1.626-.225-3.651.307-4.837C7.392 1.077 10.739.807 11.727.807l.419-.015h.06z" /> },
      { platform: 'tiktok', href: 'https://www.tiktok.com/@astaacademeysa', color: 'hover:bg-[#3B5998]', svg: <path fill="currentColor" d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" /> },
    ],
    
    partners: [
      { name: 'المؤسسة العامة للتدريب التقني والمهني', logo: '/images/partners/tvtc.svg' },
      { name: 'هيئة تقويم التعليم', logo: '/images/partners/education.svg' },
      { name: 'وزارة التعليم', logo: '/images/partners/education-ministry.svg' }
    ]
  };

  return (
    <footer className="bg-gradient-to-b from-[#202c5b] to-[#151e3f] text-white pt-12 pb-6 border-t-6 gradient-border">
      {/* Top Section - Main Footer Content */}
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6">
        {/* Three Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Column 1: Logo and Contact Info */}
          <div>
            <div className="mb-8">
              <a href="/" className="no-underline inline-block mb-6">
                <img
                  src="/svgs/ASTA_Logo.svg"
                  alt="أكاديمية المهارات التطبيقية"
                  className="w-[250px] h-auto0" // invert brightness-0 to make the logo color white
                  width={250}
                  height={60}
                />
              </a>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                {t('footer.message')}
              </p>
              
              {/* Contact Information */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <a
                    href="tel:+966920016205"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white no-underline flex items-center gap-2 hover:opacity-80 transition-opacity"
                  >
                    <i className="fas fa-phone text-[#23a0d0] text-sm"></i>
                    <span className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">{t('global.phoneNumber')}</span>
                  </a>
                  <span className="text-gray-400">-</span>
                  <a
                    href="https://wa.me/966555881726"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white no-underline flex items-center gap-2 hover:opacity-80 transition-opacity"
                  >
                    <i className="fab fa-whatsapp text-[#23a0d0] text-lg"></i>
                    <span className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">{t('global.whatsappNumber')}</span>
                  </a>
                </div>
                {footerData.contactInfo.map((contact, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <i className={`fas ${contact.icon} text-[#23a0d0] mt-1 text-sm`}></i>
                    {contact.href ? (
                      <a
                        href={contact.href}
                        target={contact.target || '_self'}
                        rel={contact.target === '_blank' ? 'noopener noreferrer' : ''}
                        className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                        style={contact.text.includes('@') ? { fontFamily: 'optima' } : {}}
                      >
                        {contact.text}
                      </a>
                    ) : (
                      <span 
                        className="text-gray-300 text-sm"
                        style={contact.text.includes('@') ? { fontFamily: 'optima' } : {}}
                      >{contact.text}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Social Media */}
            <div className="mb-8">
              <h4 className="font-semibold mb-4 text-lg">{t('footer.followUs')}</h4>
              <div className="flex gap-3">
                {footerData.socialLinks.map((social) => (
                  <a
                    key={social.platform}
                    href={social.href}
                    className={`w-10 h-10 flex items-center justify-center rounded-full bg-white/10 ${social.color} transition-all duration-300 hover:-translate-y-1 text-white`}
                    aria-label={social.platform}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      {social.svg}
                    </svg>
                  </a>
                ))}
              </div>
            </div>
            
            {/* WhatsApp Button */}
            {/* <a
              href="https://wa.me/966112345678"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white py-3 px-6 rounded-full font-semibold no-underline transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
            >
              <i className="fab fa-whatsapp text-xl"></i>
              <span>تواصل معنا عبر واتساب</span>
            </a> */}
          </div>
          
          {/* Column 2: Programs & Quick Links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Programs */}
            <div>
              <h3 className={`text-xl font-bold mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 ${lang === 'ar' ? 'after:right-0' : 'after:left-0'} after:w-12 after:h-1 after:bg-gradient-to-r after:from-[#23a0d0] after:to-[#3cbeb3]`}>
                {t('footer.ourDiplomas')}
              </h3>
              <ul className="space-y-3">
                {footerData.programs.map((program) => (
                  <li key={program.id}>
                    <a
                      href={`/${lang}/programs/${program.id}`}
                      className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center gap-2 group text-sm"
                    >
                      <i className="fas fa-graduation-cap text-xs text-[#23a0d0]"></i>
                      {program.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Quick Links */}
            <div>
              <h3 className={`text-xl font-bold mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 ${lang === 'ar' ? 'after:right-0' : 'after:left-0'} after:w-12 after:h-1 after:bg-gradient-to-r after:from-[#23a0d0] after:to-[#3cbeb3]`}>
                {t('footer.quickLinks')}
              </h3>
              <ul className="space-y-3">
                {footerData.quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center gap-2 group text-sm"
                    >
                      <i className={`${lang === 'ar' ? 'fas fa-chevron-left' : 'fas fa-chevron-right'} text-xs text-[#23a0d0] group-hover:translate-x-[-2px] transition-transform mr-2`}></i>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Column 3: Academy Location */}
          <div>
            <div className="mb-8">
              <h3 className={`text-xl font-bold mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 ${lang === 'ar' ? 'after:right-0' : 'after:left-0'} after:w-12 after:h-1 after:bg-gradient-to-r after:from-[#23a0d0] after:to-[#3cbeb3]`}>
                {lang === 'ar' ? 'موقع الأكاديمية' : 'Academy Location'}
              </h3>
              <div className="relative rounded-lg overflow-hidden shadow-lg border border-white/20">
                <a
                  href="https://www.google.com/maps/place/ASTA+Academy/@26.3679861,50.1804522,17z/data=!4m6!3m5!1s0x3e49e5758e374549:0x72802ed4f5b4f3e4!8m2!3d26.3680486!4d50.1816538!16s%2Fg%2F11yn_20_3p?entry=ttu&g_ep=EgoyMDI2MDIxMS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/images/map-location.webp"
                    alt={lang === 'ar' ? 'موقع الأكاديمية' : 'Academy Location'}
                    className="w-full h-64 md:h-72 object-cover object-center scale-125"
                    loading="lazy"
                    width="800"
                    height="400"
                  />
                </a>
              </div>

              {/* <div className="mt-4 space-y-2">
                <div className="flex items-start gap-3">
                  <i className="fas fa-map-marker-alt text-[#23a0d0] mt-1 text-sm"></i>
                  <span className="text-gray-300 text-sm leading-relaxed">
                    {lang === 'ar' ? 'الدمام، المملكة العربية السعودية' : 'Dammam, Saudi Arabia'}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <i className="fas fa-clock text-[#23a0d0] text-sm"></i>
                  <span className="text-gray-300 text-sm">
                    {lang === 'ar' ? 'الأحد - الخميس: 9:00 ص - 6:00 م' : 'Sunday - Thursday: 9:00 AM - 6:00 PM'}
                  </span>
                </div>
              </div> */}
            </div>
            
            {/* Payment Methods */}
            <div className="mb-8">
              <h4 className="font-semibold mb-4 text-lg">{isRTL ? 'طرق الدفع:' : 'Payment Methods:'}</h4>
              <div className="flex gap-2">
                {[
                  { name: 'visa', img: '/images/visa.webp' },
                  { name: 'mastercard', img: '/svgs/icons/master_card.svg' },
                  { name: 'mada', img: '/svgs/icons/mada.svg' },
                  { name: 'apple-pay', img: '/images/apple.webp' },
                  { name: 'tabby', img: '/images/tabby-logo-1-32.webp' },
                  { name: 'tamara', img: isRTL ? '/images/tamaralogo_ar.webp' : '/images/tamara-en.webp' }
                ].map((method) => (
                  <div
                    key={method.name}
                    className="w-10 h-6 bg-white/10 rounded flex items-center justify-center"
                  >
                    <img
                      src={method.img}
                      alt={method.name}
                      width={40}
                      height={24}
                      className="w-full h-full object-contain p-1"
                    />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Partners
            <div>
              <h4 className="font-semibold mb-4 text-lg">شركاؤنا</h4>
              <div className="flex flex-wrap gap-4">
                {footerData.partners.map((partner, index) => (
                  <div
                    key={index}
                    className="w-24 h-16 flex items-center justify-center bg-white/5 rounded-lg p-2 border border-white/10 hover:border-[#23a0d0]/30 transition-all duration-300"
                    title={partner.name}
                  >
                    <div className="text-center text-xs text-gray-300">{partner.name}</div>
                  </div>
                ))}
              </div>
            </div> */}
          </div>
        </div>
      </div>
      
      {/* Bottom Bar - Copyright */}
      <div className="border-t-2 gradient-border pt-6" dir={isRTL ? 'rtl' : 'ltr'}>
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-gray-400 text-sm text-center md:text-right">
              {isRTL ? 'جميع الحقوق محفوظة' : 'All rights reserved'} - {isRTL ? 'أكاديمية المهارات التطبيقية' : 'Academy of Applied Skills'} &copy; {new Date().getFullYear()}
             </div>
            
            {/* Policies Links */}
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
              <a href={`/${lang}/academic-integrity?standard=privacy`} className="hover:text-white transition-colors duration-200">
                {isRTL ? 'سياسة الخصوصية' : 'Privacy Policy'}
              </a>
              <a href={`/${lang}/academic-integrity`} className="hover:text-white transition-colors duration-200">
                {isRTL ? 'شروط الاستخدام' : 'Terms of Use'}
              </a>
              <a href="#" className="hover:text-white transition-colors duration-200">
                {isRTL ? 'الأسئلة الشائعة' : 'FAQ'}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}