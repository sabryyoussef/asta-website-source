import React from "react";
import { useParams } from "react-router-dom";
import SEO from "../components/SEO";

function StudentServices() {
  const { lang } = useParams();
  const isRTL = lang === 'ar';
  return (
    <div>
      <SEO 
        titleAr="خدمات الطلاب | عقول بيطرية"
        titleEn="Student Services | Vet Brains"
        descriptionAr="خدمات دعم الطلاب في عقول بيطرية"
        descriptionEn="Student support services at Vet Brains"
        url={`https://vetbrains.edu.eg/${lang}/student-services`}
        isRTL={isRTL}
      />
      <h1>Student Services</h1>
      <p>Welcome to the Student Services page. Here you will find information about student support services.</p>
    </div>
  );
}

export default StudentServices;