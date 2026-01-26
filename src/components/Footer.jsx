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
      { platform: 'twitter', href: 'https://x.com/astaacademysa', icon: 'fa-brands fa-x-twitter', color: 'hover:bg-[#1DA1F2]' },
      { platform: 'linkedin', href: '#', icon: 'fab fa-linkedin', color: 'hover:bg-[#0077B5]' },
      { platform: 'youtube', href: 'https://www.youtube.com/@astaacademysa', icon: 'fab fa-youtube', color: 'hover:bg-[#FF0000]' },
      { platform: 'instagram', href: 'https://www.instagram.com/astaacademysa/', icon: 'fab fa-instagram', color: 'hover:bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCAF45]' },
      { platform: 'facebook', href: 'https://www.facebook.com/asta.academysa/', icon: 'fab fa-facebook', color: 'hover:bg-[#3B5998]' },
      { platform: 'snapchat', href: 'https://www.snapchat.com/@astaacademysa', icon: 'fab fa-snapchat', color: 'hover:bg-[#FFD700]' },
      { platform: 'tiktok', href: 'https://www.tiktok.com/@asta.academeysa', icon: 'fab fa-tiktok', color: 'hover:bg-[#3B5998]' },
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
                    className={`w-10 h-10 flex items-center justify-center rounded-full bg-white/10 ${social.color} transition-all duration-300 hover:-translate-y-1`}
                    aria-label={social.platform}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className={`${social.icon} text-lg`}></i>
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
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d915188.4398919921!2d49.597305838532456!3d26.360322505442543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49e5758e374549%3A0x72802ed4f5b4f3e4!2sASTA%20Academy!5e0!3m2!1sen!2ssa!4v1769085223023!5m2!1sen!2ssa"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-64 md:h-72"
                  title={lang === 'ar' ? 'موقع أكاديمية المهارات التطبيقية' : 'Academy of Applied Skills Location'}
                />
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
                  { name: 'visa', img: '/images/visa.png' },
                  { name: 'mastercard', img: '/svgs/icons/master_card.svg' },
                  { name: 'mada', img: '/svgs/icons/mada.svg' },
                  { name: 'apple-pay', img: '/images/apple.png' },
                  { name: 'tabby', img: '/images/tabby-logo-1.png' },
                  { name: 'tamara', img: isRTL ? '/images/tamaralogo_ar.png' : '/images/tamara-en.png' }
                ].map((method) => (
                  <div
                    key={method.name}
                    className="w-10 h-6 bg-white/10 rounded flex items-center justify-center"
                  >
                    <img
                      src={method.img}
                      alt={method.name}
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