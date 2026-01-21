"use client";
import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
// import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import Image from "next/image";

const slides = [
  {
    img: "/images/bg/pic1@4x.png",
    title: "بدعم من صندوق تنمية الموارد البشرية - هدف",
    desc: "بعد الحصول على الشهادة المهنية الاحترافية يتم التعويض عن التكاليف المدفوعة وفق اشتراطات وضوابط صندوق تنمية الموارد البشرية بترخيص من المؤسسه العامه لتعليم الفني والتدريب."
  },
  {
    img: "/images/bg/pic2@4x.png",
    title: "أفضل الكورسات لتطوير مهاراتك",
    desc: "أفضل الكورسات المجانية لتطوير مهاراتك لبداية طريق جديد او استكمال رحلتك للوصول لحلمك و تحقيق اهدافك."
  },
  {
    img: "/images/bg/pic2@4x.png",
    title: "أفضل الكورسات لتطوير مهاراتك",
    desc: "أفضل الكورسات المجانية لتطوير مهاراتك لبداية طريق جديد او استكمال رحلتك للوصول لحلمك و تحقيق اهدافك."
  },
  {
    img: "/images/bg/pic1@4x.png",
    title: "بدعم من صندوق تنمية الموارد البشرية - هدف",
    desc: "بعد الحصول على الشهادة المهنية الاحترافية يتم التعويض عن التكاليف المدفوعة وفق اشتراطات وضوابط صندوق تنمية الموارد البشرية بترخيص من المؤسسه العامه لتعليم الفني والتدريب."
  }
];

export default function Hero() {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

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

  return (
    <div className="relative pb-[64px] pt-[48px] overflow-hidden">
      <div className="absolute left-0 top-0 z-0 w-full h-full">
        <img
          className="w-full h-full"
          src="/images/bg/Rectangle 58.png"
          alt=""
        />
      </div>

      <Swiper
        ref={swiperRef}
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 5000,
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
      >
        {slides.map((slide, index) => (
          <SwiperSlide
            key={index}
            className="!flex flex-col md:flex-row items-center justify-between"
          >
            <div className="container relative z-10 flex flex-col md:flex-row items-center justify-between">
              {/* Text Content */}
              <div className="flex flex-col items-center md:items-start text-center md:text-right w-full md:w-1/2">
                <h1 className="lg:text-[32px] md:text-[32px] sm:text-[32px] text:[32px] font-medium md:mb-2">
                  {slide.title}
                </h1>
                <p className="md:text-[22px] sm:text-[16px] text-[12px] font-medium md:mt-[10px] md:mb-[32px] max-md:mt-[8px] my-[16px] max-w-xl text-justify leading-relaxed">
                  {slide.desc}
                </p>

                <div className="max-md:hidden flex justify-center w-full mb-6">
                  <img
                    src="/images/logo.webp"
                    alt="ASTA Logo"
                    className="w-[200px] sm:w-[292px] md:w-[320px] lg:w-[434px] h-auto"
                  />
                </div>

                <div className="max-md:hidden flex flex-row sm:flex-row gap-4 w-full justify-center md:justify-center items-center">
                  <a
                    href="/Register"
                    className="w-[96px] sm:w-[138px] lg:px[12px] px-[6px] md:px-[6px] sm:px-[6px] md:w-[152px] lg:w-[209px] md:py-[15px] py-[8px] text-white md:text-base sm:text-[10px] text-[10px] font-medium focus:outline-none shadow-md bg-[#1A2555] transition hover:opacity-90 cursor-pointer text-center"
                  >
                    اشترك الآن مجانا
                  </a>
                  <a
                    href="/Courses"
                    className="lg:px-8 md:px-6 sm:px-[12px] px-[6px] w-[96px] sm:w-[138px] md:w-[152px] lg:w-[209px] md:py-[15px] py-[8px] text-white md:text-base sm:text-[10px] text-[10px] bg-gradient-to-r from-[#23A0D0] to-68% to-[#3CBEB3] font-medium focus:outline-none shadow-md transition hover:opacity-90 cursor-pointer text-center"
                  >
                    تصفح الدورات
                  </a>
                </div>
              </div>

              {/* Animated Image with Parallax Floating Elements */}
              <div className="flex flex-[80%] max-w-[50%] justify-center md:mt-0 relative">
                <img
                  src="/images/bg/triangle.png"
                  className="absolute bottom-0 left-0 w-full z-0"
                  alt="base"
                />

                {/* Floating images with parallax effect */}
                <img
                  src="/images/bg/2@4x.png"
                  alt="floating-1"
                  className="absolute top-[80%] right-[-1%] w-[32px] z-0 transition-transform duration-150 ease-out"
                  style={{
                    transform: `translate(${mousePos.x * 20}px, ${mousePos.y * 20}px)`,
                  }}
                />
                <img
                  src="/images/bg/3@4x.png"
                  alt="floating-2"
                  className="absolute top-[55%] left-[1%] w-[48px] z-0 transition-transform duration-150 ease-out"
                  style={{
                    transform: `translate(-${mousePos.x * 30}px, ${mousePos.y * 30}px)`,
                  }}
                />
                <img
                  src="/images/bg/4@4x.png"
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

              <div className="md:hidden flex flex-row sm:flex-row gap-4 w-full justify-center md:justify-center items-center">
                <a
                  href="/Register"
                  className="w-[96px] sm:w-[138px] lg:px[12px] px-[6px] md:px-[6px] sm:px-[6px] md:w-[152px] lg:w-[209px] md:py-[15px] py-[8px] text-white md:text-base sm:text-[10px] text-[10px] font-medium focus:outline-none shadow-md bg-[#1A2555] transition hover:opacity-90 cursor-pointer text-center"
                >
                  اشترك الآن مجانا
                </a>
                <a
                  href="/Courses"
                  className="lg:px-8 md:px-6 sm:px-[12px] px-[6px] w-[96px] sm:w-[138px] md:w-[152px] lg:w-[209px] md:py-[15px] py-[8px] text-white md:text-base sm:text-[10px] text-[10px] bg-gradient-to-r from-[#23A0D0] to-68% to-[#3CBEB3] font-medium focus:outline-none shadow-md transition hover:opacity-90 cursor-pointer text-center"
                >
                  تصفح الدورات
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
