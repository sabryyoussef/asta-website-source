// "use client";

import Hero from "../components/Home/HeroSection";
import PartnersSection from "../components/Home/PartnersSection";
import Slider from "../components/Home/Slider";
// import PopularCoursesSection from "@/app/components/PopularCoursesSection";
import CourseSlider from "../components/Home/CourseSlider";
import AdvertisingSection from "../components/Home/AdvertisingSection";
// import CoursesTabs from "../components/Home/CoursesTabs";
// import TestimonialsSection from "@/app/components/TestimonialsSection";
// import Footer from "@/app/components/Footer";
// import Footer2 from "@/app/components/Footer2";
// import Join from "@/app/components/Join";
// import DashboardSection from "@/app/components/DashboardSection";
// import Learning from "@/app/components/Learning";
// import NewsLetter from "./components/NewsLetter";
import Courses from "../api/Courses.js";
// import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
// import { getSuggestions } from "@/store/slices/userDataSlice";
// import { getCoursesByFilter } from "@/store/slices/courseSlice.js";
// import { useSelector, useDispatch } from "react-redux";

export default function Home() {
  // const { isLoggedIn } = useAuth();
  // const dispatch = useDispatch();
  // const { filteredCourses, status } = useSelector((state) => state.courses);
  // const { suggestions } = useSelector((state) => state.student);
  
  // TODO: Replace with actual data when Redux is set up
  const mockFilteredCourses = {
    data: []
  };

  // useEffect(() => {
  //   dispatch(getCoursesByFilter());
  // }, [dispatch]);

  useEffect(() => {
    // console.log(mockFilteredCourses);
  }, [mockFilteredCourses]);

  // useEffect(() => {
  //   if (!isLoggedIn) return;
  //   dispatch(getSuggestions());
  // }, [isLoggedIn, dispatch]);

  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <main className="w-full">
              <Hero></Hero>
              <PartnersSection />
              <Slider />
              <CourseSlider
                bg="bg-gradient-to-r from-[#23a0d01a] to-[#3CBEB31A]"
                courses={Courses}
                title="الدورات المهنية الدولية"
              ></CourseSlider>
              
              <AdvertisingSection/>
              
              {/* <CoursesTabs /> */}
              {/* <TestimonialsSection></TestimonialsSection> */}
              {/* <Join /> */}
              {/* <NewsLetter /> */}
              {/* <Footer /> */}
              {/* <Footer2 /> */}
      </main>
    </div>
  );
}
