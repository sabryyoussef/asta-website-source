import React, { Suspense, lazy } from 'react';
import { Navigate, Routes, Route } from 'react-router-dom';
import SharedLayout from '../shared/SharedLayout';

// Route-based code splitting: load page JS only when the route is visited (shortens critical path)
const Home = lazy(() => import('../pages/Home'));
const AboutUs = lazy(() => import('../pages/AboutUs'));
const VissionAndMission = lazy(() => import('../pages/Vission&Mission'));
const TrainingPrograms = lazy(() => import('../pages/TrainingPrograms'));
const ProgramDetails = lazy(() => import('../pages/ProgramDetails'));
const Courses = lazy(() => import('../pages/Courses'));
const CourseDetails = lazy(() => import('../pages/CourseDetails'));
const CategoryPage = lazy(() => import('../pages/CategoryPage'));
const Registeration2 = lazy(() => import('../pages/Registeration2'));
const StudentServices = lazy(() => import('../pages/StudentServices'));
const TermsAndConditions = lazy(() => import('../pages/Terms&Conditions'));
const AcademicIntegrityPage = lazy(() => import('../pages/AcademicIntegrityPage'));
const AdmissionAndRegistration = lazy(() => import('../pages/AdmissionAndRegistration'));
const CertificateChecker = lazy(() => import('../pages/CertificateChecker'));
const PaymentTest = lazy(() => import('../pages/PaymentTest'));
const PaymentSuccess = lazy(() => import('../pages/PaymentSuccess'));
const PaymentFailed = lazy(() => import('../pages/PaymentFailed'));
const NotFound = lazy(() => import('../pages/NotFound'));
const SuccessConfirmation = lazy(() => import('../pages/SuccessConfirmation'));
const TestCenter = lazy(() => import('../pages/TestCenter'));
const LanguageCertAcademic = lazy(() => import('../pages/LanguageCertAcademic'));

// Styles
import '../style/App.css';

function RouteFallback() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center" aria-hidden="true">
      <div className="w-8 h-8 border-2 border-[#23A0D0] border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

export default function App() {
  return (
      <Suspense fallback={<RouteFallback />}>
        <Routes>
          <Route path="/" element={<Navigate to="/ar" />} />

          <Route path="/:lang" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="academic-integrity" element={<AcademicIntegrityPage />} />
            <Route path="about-us" element={<AboutUs />} />
            <Route path="vision&mission" element={<VissionAndMission />} />
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
            <Route path="test-center" element={<TestCenter />} />
            <Route path="languagecert-academic" element={<LanguageCertAcademic />} />
            <Route path="payment-test" element={<PaymentTest />} />
            <Route path="payment-success" element={<PaymentSuccess />} />
            <Route path="payment-failed" element={<PaymentFailed />} />
            <Route path="*" element={<NotFound />} />
            <Route path="registration-success" element={<SuccessConfirmation />} />
          </Route>
        </Routes>
      </Suspense>
  );
}