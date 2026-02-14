import React from 'react';
import { Navigate } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SharedLayout from '../shared/SharedLayout';
// Pages
import Home from '../pages/Home';
import AboutUs from '../pages/AboutUs';
import VissionAndMission from '../pages/Vission&Mission';
import TrainingPrograms from '../pages/TrainingPrograms';
import ProgramDetails from '../pages/ProgramDetails';
import Courses from '../pages/Courses';
import CourseDetails from '../pages/CourseDetails';
import CategoryPage from '../pages/CategoryPage';
import Registeration2 from '../pages/Registeration2';
import StudentServices from '../pages/StudentServices';
import TermsAndConditions from '../pages/Terms&Conditions';
import AcademicIntegrityPage from '../pages/AcademicIntegrityPage';
import AdmissionAndRegistration from '../pages/AdmissionAndRegistration';
import CertificateChecker from '../pages/CertificateChecker';
import PaymentTest from '../pages/PaymentTest';
import PaymentSuccess from '../pages/PaymentSuccess';
import PaymentFailed from '../pages/PaymentFailed';
import NotFound from '../pages/NotFound';
import SuccessConfirmation from '../pages/SuccessConfirmation';

// Styles
import '../style/App.css';

export default function App() {
  return (
      <Routes>
        <Route path="/" element={<Navigate to="/ar" />} />

        <Route path="/:lang" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="academic-integrity" element={<AcademicIntegrityPage />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="vision&mission" element={<VissionAndMission />} />
          {/* Team */}
          <Route path="programs" element={<TrainingPrograms />} />
          <Route path="programs/:id" element={<ProgramDetails />} />
          <Route path="courses" element={<Courses />} />
          <Route path="courses/:id" element={<CourseDetails />} />
          <Route path="categories/:categoryId" element={<CategoryPage />} />
          <Route path="registration" element={<Registeration2 />} />
          <Route path="student-services" element={<StudentServices />} />
          <Route path="terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="admission&registration" element={<AdmissionAndRegistration />} />
          <Route path="certificate-checker" element={<CertificateChecker />} />
          <Route path="payment-test" element={<PaymentTest />} />
          <Route path="payment-success" element={<PaymentSuccess />} />
          <Route path="payment-failed" element={<PaymentFailed />} />
          <Route path="*" element={<NotFound />} />
          <Route path="registration-success" element={<SuccessConfirmation />} />
        </Route>
        
        {/* Catch-all for routes that don't match /:lang pattern */}
        {/* <Route path="*" element={<Navigate to="/ar" replace />} /> */}
      </Routes>
  );
}