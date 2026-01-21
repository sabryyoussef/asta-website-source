import React, { useRef } from "react";
// import Image from "next/image";
import CourseCard from "../Courses/CourseCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination"; // Import the pagination styles
// import Loading from "@/components/Loading.jsx";

const CourseSlider = ({ title, bg = "bg-white", courses = [] }) => {
  const swiperRef = useRef(null);
  // console.log(courses);
  // console.log(courses.length);

  if (courses.length === 0) {
    return null;
  }
//   if (!Array.isArray(courses)) {
//     return <Loading />;
//   }

  return (
    <div
      className={
        "flex flex-col items-center justify-center md:pb-[64px] md:pt-[64px] pt-[24px] pb-[24px]  " +
        bg
      }
    >
      <div className="w-full mx-auto">
        <div className="container">
          <div className="text-right mb-8 justify-between flex items-center">
            <h2 className="text-[24px] sm:text-[24px] text-[22px] font-bold text-[#202c5b]">
              {title}
            </h2>
            <a
              href="/Courses"
              className="bg-[#202C5B] text-center cursor-pointer text-white py-[12px] h-fit w-[152px] transition-colors font-bold max-md:hidden"
            >
              المزيد
            </a>
          </div>

          <div className="mt-[12px]">
            {courses.length == 0 ? null : (
              <Swiper
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
                    <CourseCard course={course} />
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
