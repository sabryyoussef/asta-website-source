import React from "react";
import { useParams } from "react-router-dom";
import SEO from "../components/SEO";

function TermsAndConditions() {
  const { lang } = useParams();
  const isRTL = lang === 'ar';
  return (
    <div>
      <SEO 
        titleAr="الشروط والأحكام | اكاديمية المهارات التطبيقية"
        titleEn="Terms & Conditions | Applied Skills Training Academy"
        descriptionAr="الشروط والأحكام لاستخدام خدمات اكاديمية المهارات التطبيقية"
        descriptionEn="Terms and conditions for using Applied Skills Training Academy services"
        url={`https://asta.edu.sa/${lang}/terms-and-conditions`}
        isRTL={isRTL}
      />
      <h1>Terms and Conditions</h1>
      <p>Welcome to the Terms and Conditions page. Here you will find the terms and conditions for using our services.</p>
    </div>
  );
}

export default TermsAndConditions;