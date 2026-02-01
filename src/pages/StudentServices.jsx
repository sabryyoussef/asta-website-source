import React from "react";
import { useParams } from "react-router-dom";
import SEO from "../components/SEO";

function StudentServices() {
  const { lang } = useParams();
  const isRTL = lang === 'ar';
  return (
    <div>
      <SEO title={isRTL ? "خدمات الطلاب | اكاديمية المهارات التطبيقية" : "Student Services | Applied Skills Training Academy"} />
      <h1>Student Services</h1>
      <p>Welcome to the Student Services page. Here you will find information about student support services.</p>
    </div>
  );
}

export default StudentServices;