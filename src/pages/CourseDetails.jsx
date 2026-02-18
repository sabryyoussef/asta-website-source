import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
// Components
import SEO from "../components/SEO";
import CourseHeader from "../components/Courses/CourseHeader";
import CourseOverviewSection from "../components/Courses/CourseOverviewSection";
// TODO: Uncomment when instructor data is needed
// import CourseInstructorSection from "../components/Courses/CourseInstructorSection";
import CourseRequirementsSection from "../components/Courses/CourseRequirementsSection";
import CourseFAQSection from "../components/Courses/CourseFAQSection";
import RelatedCoursesSection from "../components/Courses/RelatedCoursesSection";
// data
import Courses, { getCourseData } from "../api/Courses";
import ProgramSchema from "../components/ProgramSchema";
const CourseDetails = () => {
  const { id, lang = 'ar' } = useParams();
  const navigate = useNavigate();
  const isRTL = lang === 'ar';
  const { t } = useTranslation();
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);  
  const parsedId = parseInt(id);
  const course = Courses[parsedId - 1]; 
  const localizedCourse = getCourseData(course, lang);
  if (!course || isNaN(parsedId) || parsedId < 1 || parsedId > Courses.length) {
    return <div>Course not found</div>;
  }
  
  return (
    <div dir={isRTL ? 'rtl' : 'ltr'}>
      <ProgramSchema
        title={localizedCourse.title}
        description={localizedCourse.description}
        lang={lang}
      />

      <SEO 
        titleAr={`${localizedCourse.title} | اكاديمية المهارات التطبيقية`}
        titleEn={`${localizedCourse.title} | Applied Skills Training Academy`}
        descriptionAr={localizedCourse.description || "دورة احترافية في اكاديمية المهارات التطبيقية"}
        descriptionEn={localizedCourse.description || "Professional course at Applied Skills Training Academy"}
        url={`https://asta.edu.sa/${lang}/courses/${id}`}
        isRTL={isRTL}
      />
      <CourseHeader course={course} />
      <CourseOverviewSection course={course} />
      {/* TODO: Uncomment when instructor data is needed */}
      {/* <CourseInstructorSection course={course} /> */}
      <CourseRequirementsSection course={course} />
      <CourseFAQSection course={course} />
      <RelatedCoursesSection currentCourseId={id} />
      
      {/* CTA Bottom */}
      <div className="bg-gradient-to-r from-[#202C5B] to-[#226796] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">  {isRTL ? 'جاهز للانطلاق في رحلة التعلم؟' : 'Ready to embark on a learning journey?'} </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            {isRTL ? 'سجل الآن واحجز مقعدك في أفضل دورة تدريبية في ' : 'Register now and book your seat in the best training course in'} {localizedCourse.title}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="px-8 py-4 bg-gradient-to-r from-[#226796] to-[#23A0D0] text-white rounded-xl font-bold text-lg hover:shadow-2xl transition-all duration-300"
              onClick={() =>
                navigate(`/${lang}/registration`, {
                  state: {
                    programType: 'course',
                    programId: parsedId,
                  },
                })
              }
            >
              {isRTL ? 'سجل الآن واحجز مقعدك' : 'Register now and book your seat'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;