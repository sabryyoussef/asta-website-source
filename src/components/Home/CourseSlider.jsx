import React, { useRef, useEffect, useState } from "react";
// import Image from "next/image";
import CourseCard2 from "../Courses/CourseCard2";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination"; // Import the pagination styles
import { useParams } from "react-router-dom";
// import Loading from "@/components/Loading.jsx";

const CourseSlider = ({ title, bg = "bg-white", courses = [] }) => {
  const swiperRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const { lang } = useParams();
  const isRTL = lang === 'ar';
  // console.log(courses);
  // console.log(courses.length);

  if (courses.length === 0) {
    return null;
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
//   if (!Array.isArray(courses)) {
//     return <Loading />;
//   }

  return (
    <div
      ref={sectionRef}
      className={
        `flex flex-col items-center justify-center md:pb-[64px] md:pt-[64px] pt-[24px] pb-[24px] transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ` +
        bg
      }
    >
      <div className="w-full mx-auto">
        <div className="container">
          <div className={`mb-8 justify-between flex items-center ${isRTL ? 'text-right' : 'text-left'}`}>
            <h2 className="text-[24px] sm:text-[24px] text-[22px] font-bold text-[#202c5b]">
              {title}
            </h2>
            <a
              href={`/${lang}/courses`}
              className="bg-[#202C5B] text-center cursor-pointer text-white py-[12px] h-fit w-[152px] transition-colors font-bold max-md:hidden"
            >
              {isRTL ? 'المزيد' : 'More'}
            </a>
          </div>

          <div className="mt-[12px]">
            {courses.length == 0 ? null : (
              <Swiper
                key={`course-slider-${lang}`}
                ref={swiperRef}
                modules={[Autoplay, Pagination]}
                spaceBetween={24}
                loop={true}
                slidesPerView={3}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                pagination={{
                  el: ".swiper-pagination-container",
                  clickable: true,
                }}
                dir={isRTL ? 'rtl' : 'ltr'}
                breakpoints={{
                  0: {
                    spaceBetween: 24,
                    slidesPerView: 1,
                  },
                  640: {
                    spaceBetween: 24,
                    slidesPerView: 2,
                  },
                  991: {
                    spaceBetween: 24,
                    slidesPerView: 3,
                  },
                }}
                className="w-full"
              >
                {courses?.map((course) => (
                  <SwiperSlide className="!h-[unset]" key={course.id}>
                    <CourseCard2 course={course} />
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </div>

          <div className="flex justify-center mt-8 md:flex">
            <div className="swiper-pagination-container gap-[10px] flex justify-center"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseSlider;
