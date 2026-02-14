"use client";
import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
// import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
// import Image from "next/image";

const slides = [
  {
    img: "/images/Student-333.webp",
    buttonLink: "courses",
    ar: {
      title: "دورات احترافية لتطوير مهاراتك",
      desc: "اكتشف مجموعة واسعة من الدورات الاحترافية المصممة لتطوير مهاراتك وزيادة فرصك الوظيفية. دورات متنوعة في مختلف المجالات التقنية والمهنية.",
      buttonText: "تصفح الدورات"
    },
    en: {
      title: "Professional Courses to Develop Your Skills",
      desc: "Discover a wide range of professional courses designed to develop your skills and increase your career opportunities. Diverse courses in various technical and professional fields.",
      buttonText: "Browse Courses"
    }
  },
  {
    img: "/images/Student2-333.webp",
    buttonLink: "programs",
    ar: {
      title: "برامج تدريبية احترافية",
      desc: "انضم إلى برامجنا التدريبية الاحترافية والدبلومات المهنية التي تمنحك المهارات والمعرفة اللازمة للنجاح في سوق العمل. برامج معتمدة ومصممة وفق أحدث المعايير الدولية.",
      buttonText: "استكشف البرامج"
    },
    en: {
      title: "Professional Training Programs",
      desc: "Join our professional training programs and diplomas that give you the skills and knowledge needed to succeed in the job market. Accredited programs designed according to the latest international standards.",
      buttonText: "Explore Programs"
    }
  },
  {
    img: "/images/Student-333.webp",
    buttonLink: "about-us",
    ar: {
      title: "عن أكاديمية المهارات التطبيقية",
      desc: "أكاديمية رائدة في مجال التدريب والاستشارات المتنوعة ومتخصصة في تقديم البرامج التدريبية للشهادات الاحترافية المهنية الدولية. نؤمن بالجودة والاحترافية والابتكار.",
      buttonText: "تعرف علينا"
    },
    en: {
      title: "About Applied Skills Academy",
      desc: "A leading academy in the field of training and diverse consulting, specialized in providing training programs for international professional certifications. We believe in quality, professionalism and innovation.",
      buttonText: "Learn About Us"
    }
  },
  {
    img: "/images/Student2-333.webp",
    buttonLink: "registration",
    ar: {
      title: "سجل الآن وابدأ رحلتك التعليمية",
      desc: "انضم إلى آلاف الطلاب الذين يطورون مهاراتهم معنا. التسجيل سهل وسريع. ابدأ رحلتك التعليمية اليوم واحصل على شهادات معتمدة معترف بها دولياً.",
      buttonText: "سجل الآن"
    },
    en: {
      title: "Register Now and Start Your Learning Journey",
      desc: "Join thousands of students developing their skills with us. Registration is easy and fast. Start your learning journey today and get internationally recognized accredited certificates.",
      buttonText: "Register Now"
    }
  }
];

export default function Hero() {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const { lang = 'ar' } = useParams();
  const { t } = useTranslation();
  const isRTL = lang === 'ar';

  // Track mouse position
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;

      // Normalize position to range -1 to 1
      const x = (e.clientX / innerWidth) * 2;
      const y = (e.clientY / innerHeight) * 2;

      setMousePos({ x, y });
    };

    // Attach the event listener to the window
    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };

  const handleSwiperInit = (swiper) => {
    swiperRef.current = swiper;
  };

  return (
    <div className="relative pb-[64px] pt-[48px] overflow-hidden">
      <div className="absolute left-0 top-0 z-0 w-full h-full">
        <img src="/images/Rectangle-640.webp"         // mobile / smaller version
          fetchpriority="high"
          decoding="async"
          className="w-full h-full object-cover"
          alt="Hero Background"
        />
      </div>

      <Swiper
        key={`swiper-${lang}`}
        onSwiper={handleSwiperInit}
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
        }}
        slidesPerView={1}
        loop={true}
        speed={1000}
        className="ease-in-out"
        onSlideChangeTransitionStart={handleSlideChange}
        dir={isRTL ? 'rtl' : 'ltr'}
      >
        {slides.map((slide, index) => (
          <SwiperSlide
            key={`slide-${index}`}
            className="!flex flex-col md:flex-row items-center justify-between"
          >
            <div className="container relative z-10 flex flex-col md:flex-row items-center justify-between">
              {/* Text Content */}
              <div className="flex flex-col items-center text-center w-full md:w-1/2">
                <h1 className="lg:text-[32px] md:text-[32px] sm:text-[32px] text:[32px] font-medium md:mb-2">
                  {slide[lang] ? slide[lang].title : (slide.ar ? slide.ar.title : 'No title')}
                </h1>
                <p className="md:text-[22px] sm:text-[16px] text-[12px] font-medium md:mt-[10px] md:mb-[32px] max-md:mt-[8px] my-[16px] max-w-xl text-justify leading-relaxed">
                  {slide[lang] ? slide[lang].desc : (slide.ar ? slide.ar.desc : 'No description')}
                </p>

                <div className="max-md:hidden flex justify-center w-full mb-6">
                  <img
                    src="/images/logo.webp"
                    alt="ASTA Logo"
                    className="w-[200px] sm:w-[292px] md:w-[320px] lg:w-[434px] h-auto"
                  />
                </div>

                <div className="max-md:hidden flex flex-row sm:flex-row gap-4 w-full justify-center items-center">
                  <a
                    href={`/${lang}/${slide.buttonLink}`}
                    className="lg:px-8 md:px-6 sm:px-[12px] px-[6px] w-[96px] sm:w-[138px] md:w-[152px] lg:w-[209px] md:py-[15px] py-[8px] text-white md:text-base sm:text-[10px] text-[10px] bg-gradient-to-r from-[#23A0D0] to-68% to-[#3CBEB3] font-medium focus:outline-none shadow-md transition hover:opacity-90 cursor-pointer text-center"
                  >
                    {slide[lang] ? slide[lang].buttonText : (slide.ar ? slide.ar.buttonText : 'Button')}
                  </a>
                </div>
              </div>

              {/* Animated Image with Parallax Floating Elements */}
              <div className="flex flex-[80%] max-w-[50%] justify-center md:mt-0 relative">
                <img
                  src="/images/triangle-500.webp"
                  srcSet="/images/triangle-250.webp 250w, /images/triangle-500.webp 500w"
                  sizes="(max-width: 768px) 100vw, 500px"
                  decoding="async"
                  className="absolute bottom-0 left-0 w-full"
                  alt="Base"
                />


                {/* Floating images with parallax effect */}
                <img
                  src="/images/2@4x.webp"
                  alt="floating-1"
                  className="absolute top-[80%] right-[-1%] w-[32px] z-0 transition-transform duration-150 ease-out"
                  style={{
                    transform: `translate(${mousePos.x * 20}px, ${mousePos.y * 20}px)`,
                  }}
                />
                <img
                  src="/images/3@4x.webp"
                  alt="floating-2"
                  className="absolute top-[55%] left-[1%] w-[48px] z-0 transition-transform duration-150 ease-out"
                  style={{
                    transform: `translate(-${mousePos.x * 30}px, ${mousePos.y * 30}px)`,
                  }}
                />
                <img
                  src="/images/4@4x.webp"
                  alt="floating-3"
                  className="absolute top-[15%] left-[20%] w-[72px] z-0 transition-transform duration-150 ease-out"
                  style={{
                    transform: `translate(-${mousePos.x * 40}px, ${mousePos.y * 40}px)`,
                  }}
                />

                {/* Main animated image */}
                <img
                  key={activeIndex} // triggers animation on slide change
                  src={slide.img}
                  alt="slide-main"
                  className="flex-[80%] max-w-[220px] sm:max-w-xs md:max-w-md lg:max-w-lg w-full z-5"
                  style={{
                    animation: "fadeIn 1s ease-in-out"
                  }}
                />
              </div>
              <div className="md:hidden flex justify-center w-full mb-4 mt-4">
                <img
                  src="/images/logo.webp"
                  alt="ASTA Logo"
                  className="w-[200px] sm:w-[292px] md:w-[320px] lg:w-[434px] h-auto"
                />
              </div>

              <div className="md:hidden flex flex-row sm:flex-row gap-4 w-full justify-center items-center">
                <a
                  href={`/${lang}/${slide.buttonLink}`}
                  className="lg:px-8 md:px-6 sm:px-[12px] px-[6px] w-[96px] sm:w-[138px] md:w-[152px] lg:w-[209px] md:py-[15px] py-[8px] text-white md:text-base sm:text-[10px] text-[10px] bg-gradient-to-r from-[#23A0D0] to-68% to-[#3CBEB3] font-medium focus:outline-none shadow-md transition hover:opacity-90 cursor-pointer text-center"
                >
                  {slide[lang] ? slide[lang].buttonText : (slide.ar ? slide.ar.buttonText : 'Button')}
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-pagination mb-4 gap-[10px] flex justify-center"></div>
    </div>
  );
}
