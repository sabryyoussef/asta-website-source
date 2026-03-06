"use client";
import React, { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";

const slides = [
  {
    img: "/images/Student-333.webp",
    imgDesktop: "/images/Student-500.webp",
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
    imgDesktop: "/images/Student2-666.webp",
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
    imgDesktop: "/images/Student-500.webp",
    buttonLink: "about-us",
    ar: {
      title: "عن عقول بيطرية",
      desc: "أكاديمية رائدة في مجال التدريب والاستشارات المتنوعة ومتخصصة في تقديم البرامج التدريبية للشهادات الاحترافية المهنية الدولية. نؤمن بالجودة والاحترافية والابتكار.",
      buttonText: "تعرف علينا"
    },
    en: {
      title: "About Vet Brains",
      desc: "A leading academy in the field of training and diverse consulting, specialized in providing training programs for international professional certifications. We believe in quality, professionalism and innovation.",
      buttonText: "Learn About Us"
    }
  },
  {
    img: "/images/Student2-333.webp",
    imgDesktop: "/images/Student2-666.webp",
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

const SLIDE_COUNT = 4;
const AUTOPLAY_MS = 5000;

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { lang = 'ar' } = useParams();
  const isRTL = lang === 'ar';

  // Autoplay: cycle index without reading layout (no offsetWidth/getBoundingClientRect)
  useEffect(() => {
    const id = setInterval(() => {
      setActiveIndex((i) => (i + 1) % SLIDE_COUNT);
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, []);

  // Track mouse position (throttled + cached dimensions to avoid forced reflows)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const dimensionsRef = useRef({ w: typeof window !== "undefined" ? window.innerWidth : 1, h: typeof window !== "undefined" ? window.innerHeight : 1 });
  const rafRef = useRef(null);

  useEffect(() => {
    const updateDimensions = () => {
      dimensionsRef.current = { w: window.innerWidth, h: window.innerHeight };
    };
    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    const handleMouseMove = (e) => {
      if (rafRef.current != null) return;
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null;
        const { w, h } = dimensionsRef.current;
        const x = (e.clientX / w) * 2;
        const y = (e.clientY / h) * 2;
        setMousePos({ x, y });
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", updateDimensions);
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div className="relative overflow-hidden">
      <div
        className="absolute left-0 top-0 z-0 w-full h-full bg-[#3CBEB3]/15"
        aria-hidden
      />

      {/* Single H1 per page for SEO (hidden visually): summarizes page and includes key terms */}
      <div className="sr-only">
        <h1>
          {isRTL
            ? "عقول بيطرية | دورات ودبلومات احترافية معتمدة"
            : "Vet Brains | Professional Courses & Accredited Diplomas"}
        </h1>
      </div>
      {/* CSS-only carousel: no offsetWidth/getBoundingClientRect, avoids forced reflow */}
      <div className="overflow-hidden w-full" dir={isRTL ? "rtl" : "ltr"}>
        <div
          className="flex ease-in-out duration-1000"
          style={{
            width: `${SLIDE_COUNT * 100}%`,
            transform: `translateX(${isRTL ? (activeIndex * 100) / SLIDE_COUNT : -(activeIndex * 100) / SLIDE_COUNT}%)`,
          }}
        >
          {slides.map((slide, index) => (
            <div
              key={`slide-${index}`}
              className="flex flex-col md:flex-row items-center justify-between flex-shrink-0 w-full"
              style={{ width: `${100 / SLIDE_COUNT}%` }}
            >
              <div className="container relative z-10 flex flex-col md:flex-row items-center justify-between w-full">
                {/* Text Content - H2 for carousel highlights (one H1 per page) */}
                <div className="flex flex-col items-center text-center w-full md:w-1/2">
                  <h2 className="lg:text-[32px] md:text-[32px] sm:text-[32px] text:[32px] font-medium md:mb-2">
                    {slide[lang] ? slide[lang].title : (slide.ar ? slide.ar.title : "No title")}
                  </h2>
                  <p className="md:text-[22px] sm:text-[16px] text-[12px] font-medium md:mt-[10px] md:mb-[32px] max-md:mt-[8px] my-[16px] max-w-xl text-justify leading-relaxed">
                    {slide[lang] ? slide[lang].desc : (slide.ar ? slide.ar.desc : "No description")}
                  </p>

                  <div className="max-md:hidden flex justify-center w-full mb-6">
                    <img
                      src="/svgs/VetBrains_Nav_Logo.svg"
                      srcSet="/svgs/VetBrains_Nav_Logo.svg 299w"
                      sizes="(max-width: 640px) 200px, (max-width: 768px) 292px, (max-width: 1024px) 320px, 434px"
                      alt="Vet Brains Logo"
                      width={299}
                      height={81}
                      className="w-[200px] sm:w-[292px] md:w-[320px] lg:w-[434px] h-auto"
                      decoding="async"
                    />
                  </div>

                  <div className="max-md:hidden flex flex-row sm:flex-row gap-4 w-full justify-center items-center">
                    <a
                      href={`/${lang}/${slide.buttonLink}`}
                      className="lg:px-8 md:px-6 sm:px-[12px] px-[6px] w-[96px] sm:w-[138px] md:w-[152px] lg:w-[209px] md:py-[15px] py-[8px] text-white md:text-base sm:text-[10px] text-[10px] bg-gradient-to-r from-[#23A0D0] to-68% to-[#3CBEB3] font-medium focus:outline-none shadow-md transition hover:opacity-90 cursor-pointer text-center"
                    >
                      {slide[lang] ? slide[lang].buttonText : (slide.ar ? slide.ar.buttonText : "Button")}
                    </a>
                  </div>
                </div>

                {/* Animated Image with Parallax Floating Elements */}
                <div className="flex flex-[80%] max-w-[50%] justify-center md:mt-0 relative">
                  <img
                    src="/images/triangle-500.webp"
                    srcSet="/images/triangle-250.webp 250w, /images/triangle-500.webp 500w"
                    sizes="(max-width: 768px) 100vw, 500px"
                    width={500}
                    height={400}
                    decoding="async"
                    loading="eager"
                    fetchPriority="high"
                    className="absolute bottom-0 left-0 w-full z-0"
                    alt="Base"
                  />

                  <img
                    src="/images/2@4x.webp"
                    alt="floating-1"
                    width={32}
                    height={32}
                    className="absolute top-[80%] right-[-1%] w-[32px] z-0 transition-transform duration-150 ease-out"
                    style={{ transform: `translate(${mousePos.x * 20}px, ${mousePos.y * 20}px)` }}
                  />
                  <img
                    src="/images/3@4x.webp"
                    alt="floating-2"
                    width={48}
                    height={48}
                    className="absolute top-[55%] left-[1%] w-[48px] z-0 transition-transform duration-150 ease-out"
                    style={{ transform: `translate(-${mousePos.x * 30}px, ${mousePos.y * 30}px)` }}
                  />
                  <img
                    src="/images/4@4x.webp"
                    alt="floating-3"
                    width={72}
                    height={72}
                    className="absolute top-[15%] left-[20%] w-[72px] z-0 transition-transform duration-150 ease-out"
                    style={{ transform: `translate(-${mousePos.x * 40}px, ${mousePos.y * 40}px)` }}
                  />

                  <picture className="relative z-10">
                    <source
                      media="(min-width: 768px)"
                      srcSet={`${slide.imgDesktop} 666w`}
                      sizes="(max-width: 1024px) 448px, 512px"
                    />
                    <img
                      src={slide.img}
                      srcSet={`${slide.img} 333w`}
                      sizes="(max-width: 640px) 220px, (max-width: 768px) 320px, 448px"
                      alt="slide-main"
                      width={333}
                      height={314}
                      className="flex-[80%] max-w-[220px] sm:max-w-xs md:max-w-md lg:max-w-lg w-full relative"
                      decoding="async"
                      fetchPriority={index === 0 ? "high" : undefined}
                      style={index === activeIndex ? { animation: "fadeIn 1s ease-in-out" } : undefined}
                    />
                  </picture>
                </div>
                {/* Reserve height for logo to prevent CLS when image loads (aspect 434:100) */}
                <div className="md:hidden flex justify-center w-full mb-4 mt-4 min-h-[46px] sm:min-h-[67px]">
                  <img
                    src="/svgs/VetBrains_Nav_Logo.svg"
                    srcSet="/svgs/VetBrains_Nav_Logo.svg 299w"
                    sizes="(max-width: 640px) 200px, (max-width: 768px) 292px, 434px"
                    alt="Vet Brains Logo"
                    width={299}
                    height={81}
                    className="w-[200px] sm:w-[292px] md:w-[320px] lg:w-[434px] h-auto object-contain"
                    decoding="async"
                  />
                </div>

                <div className="md:hidden flex flex-row sm:flex-row gap-4 w-full justify-center items-center">
                  <a
                    href={`/${lang}/${slide.buttonLink}`}
                    className="lg:px-8 md:px-6 sm:px-[12px] px-[6px] w-[96px] sm:w-[138px] md:w-[152px] lg:w-[209px] md:py-[15px] py-[8px] text-white md:text-base sm:text-[10px] text-[10px] bg-gradient-to-r from-[#23A0D0] to-68% to-[#3CBEB3] font-medium focus:outline-none shadow-md transition hover:opacity-90 cursor-pointer text-center"
                  >
                    {slide[lang] ? slide[lang].buttonText : (slide.ar ? slide.ar.buttonText : "Button")}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination bullets - no layout reads */}
      <div className="py-4 gap-[10px] flex justify-center" role="tablist" aria-label="Slide pagination">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            role="tab"
            aria-selected={index === activeIndex}
            aria-label={`Slide ${index + 1}`}
            onClick={() => setActiveIndex(index)}
            className={`rounded-full cursor-pointer transition-all duration-300 h-2 relative z-20 ${
              index === activeIndex ? "bg-teal-500 w-6 sm:w-8" : "bg-[#3CBEB3]/60 hover:bg-[#3CBEB3]/80 w-2"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
