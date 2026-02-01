import React from "react";
import { useParams } from "react-router-dom";
import SEO from "../components/SEO";

function StudentServices() {
  const { lang } = useParams();
  const isRTL = lang === 'ar';
  return (
    <div>
      <SEO 
        titleAr="خدمات الطلاب | اكاديمية المهارات التطبيقية"
        titleEn="Student Services | Applied Skills Training Academy"
        descriptionAr="خدمات دعم الطلاب في اكاديمية المهارات التطبيقية"
        descriptionEn="Student support services at Applied Skills Training Academy"
        url={`https://asta.edu.sa/${lang}/student-services`}
        isRTL={isRTL}
      />
      <h1>Student Services</h1>
      <p>Welcome to the Student Services page. Here you will find information about student support services.</p>
    </div>
  );
}

export default StudentServices;