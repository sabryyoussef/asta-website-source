import React from "react";
import { useParams } from "react-router-dom";
import SEO from "../components/SEO";

function TermsAndConditions() {
  const { lang } = useParams();
  const isRTL = lang === 'ar';
  return (
    <div>
      <SEO title={isRTL ? "الشروط والأحكام | اكاديمية المهارات التطبيقية" : "Terms & Conditions | Applied Skills Training Academy"} />
      <h1>Terms and Conditions</h1>
      <p>Welcome to the Terms and Conditions page. Here you will find the terms and conditions for using our services.</p>
    </div>
  );
}

export default TermsAndConditions;