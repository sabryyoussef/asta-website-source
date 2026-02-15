import React, { useEffect, useRef, useState } from "react";

import CourseCard from "../Courses/CourseCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
// import { useSelector, useDispatch } from "react-redux";
// import { getRecentCourses, getTopRatedCourses, getFreeCourses, getAllDegrees } from "@/store/slices/courseSlice.js";

const tabs = [
  "المسارات المهنية",
  "الدورات المضافة حديثاً",
  "الدورات الأعلي تقييماً",
  "أفضل الدورات المجانية",
];

export default function CoursesTabs() {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const swiperRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  // const dispatch = useDispatch();
  // const {
  //   degrees,
  //   status: degreesStatus,
  //   error: degreesError,
  // } = useSelector((state) => state.degrees);
  const [courses, setCourses] = useState([]);
  const [freeCourses, setFreeCourses] = useState([]);

  // TODO: Replace with actual API calls when Redux is set up
  // useEffect(() => {
  //   dispatch(getRecentCourses());
  //   dispatch(getTopRatedCourses());
  //   dispatch(getFreeCourses());
  //   dispatch(getAllDegrees());
  // }, [dispatch]);

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

  // Use a separate useEffect to set the local state based on activeTab
  useEffect(() => {
    switch (activeTab) {
      case tabs[0]:
        // setCourses(degrees?.data ?? []);
        setCourses([]); // TODO: Replace with actual data
        break;
      case tabs[1]:
        setCourses([]);
        break;
      case tabs[2]:
        setCourses([]);
        break;
      case tabs[3]:
        setCourses(freeCourses);
        break;
      default:
        setCourses([]);
        break;
    }
  }, [activeTab, tabs]);

  const handleActiveTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div ref={sectionRef} className={`bg-white flex flex-col items-center justify-center md:pb-[32px] md:mb-[32px] pb-[12px] mb-[12px] transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <div className="w-full mx-auto">
        <div className="bg-gradient-to-r from-[#23A0D0] to-68% to-[#3CBEB3] md:pt-[16px] max-md:py-[12px] text-white border-b-[#202C5B] border-[1px]">
          <div className="container">
            {isVisible && (
            <Swiper spaceBetween={24} slidesPerView={4} className="w-full"
              breakpoints={{
                0: {
                  slidesPerView: "auto",
                },
                767: {
                  slidesPerView: 4,
                }
              }}
            >
              {tabs.map((tab, i) => (
                <SwiperSlide
                  className={
                    "md:p-[12px] md:py-[20px] bg-[rgba(255,255,255,0.2)] p-[6px] max-md:border-[#202C5B] md:text-[20px] text-[10px] text-center cursor-pointer mt-auto hover:bg-white !transition !duration-300 hover:text-[#202C5B] max-sm:!w-max font-bold " +
                    (activeTab == tab
                      ? "text-[#202C5B] bg-white"
                      : "")
                  }
                  key={i}
                  onClick={() => handleActiveTab(tab)}
                >
                  {tab}
                </SwiperSlide>
              ))}
            </Swiper>
            )}
          </div>
        </div>
        <div className="container">
          <div className="md:hidden mt-[12px]">
            {isVisible && (
            <Swiper
              ref={swiperRef}
              modules={[Autoplay]}
              spaceBetween={24}
              slidesPerView={1}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              className="w-full"
            >
              {courses.map((course, i) => {
                if (i < 6) {
                  return (
                    <SwiperSlide key={course.id}>
                      <CourseCard course={course} iscourse={activeTab == "الدرجات الأكاديمية" ? false : true} />
                    </SwiperSlide>
                  )
                }
              })}
            </Swiper>
            )}
          </div>

          <div className="hidden md:grid md:mt-[32px] mt-[12px] w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 relative z-0">
            {courses.map((course, i) => {
              if (i < 6) {
                return (
                  <div key={course.id}>
                    <CourseCard course={course} iscourse={activeTab == "الدرجات الأكاديمية" ? false : true} />
                  </div>
                )
              }
            })}
          </div>

          {/* View All Button - Desktop */}
          <div className="flex justify-center mt-8 md:flex">
            <a href={activeTab == "الدرجات الأكاديمية" ? "/Degrees" : "/Courses"} className="bg-[#202C5B] flex justify-center cursor-pointer text-white py-[12px] w-[152px] transition-colors font-bold">
              المزيد
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
