import React from "react";
import { useParams } from "react-router-dom";
import SEO from "../components/SEO";

function TermsAndConditions() {
  const { lang } = useParams();
  const isRTL = lang === 'ar';
  return (
    <div>
      <SEO 
        titleAr="الشروط والأحكام | عقول بيطرية"
        titleEn="Terms & Conditions | Vet Brains"
        descriptionAr="الشروط والأحكام لاستخدام خدمات عقول بيطرية"
        descriptionEn="Terms and conditions for using Vet Brains services"
        url={`https://vetbrains.edu.eg/${lang}/terms-and-conditions`}
        isRTL={isRTL}
      />
      <h1>Terms and Conditions</h1>
      <p>Welcome to the Terms and Conditions page. Here you will find the terms and conditions for using our services.</p>
    </div>
  );
}

export default TermsAndConditions;