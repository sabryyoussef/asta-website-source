import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  AcademicCapIcon,
  UserGroupIcon,
  CalendarIcon,
  ClockIcon,
  BuildingOfficeIcon,
  ChartBarIcon,
  DocumentTextIcon,
  BookOpenIcon,
  ComputerDesktopIcon,
  LanguageIcon,
  CalculatorIcon,
  BriefcaseIcon,
  BanknotesIcon,
  TruckIcon,
  BuildingStorefrontIcon,
  ShieldCheckIcon,
  CodeBracketIcon,
  GlobeAltIcon,
  ArrowLeftIcon,
  MagnifyingGlassIcon,
  FunnelIcon,
  DocumentArrowDownIcon,
  PrinterIcon,
  PlusIcon,
  ChevronDownIcon,
  ChevronUpIcon
} from '@heroicons/react/24/outline';
// components
import SEO from '../components/SEO';
import RenderOverview from '../components/Addmission&Registration/RenderOverview';
import RenderSubjects from '../components/Addmission&Registration/RenderSubjects';
import RenderSchedule from '../components/Addmission&Registration/RenderSchedule';
import RenderStatistics from '../components/Addmission&Registration/RenderStatistics';

const AdmissionAndRegistration = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedDiploma, setExpandedDiploma] = useState(null);
  const [expandedSubject, setExpandedSubject] = useState(null);
  const { lang } = useParams();
  const isRTL = lang === 'ar';


  const handleDownload = () => {
    const a = document.createElement('a');
    a.href = `/files/AdmissionRegistration.pdf`;
    a.download = 'AdmissionRegistration.pdf';
    a.target = '_blank';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
  // الدبلومات المتاحة
  const diplomas = [
    { id: 1, name: 'سالسل الإعداد والخدمات اللوجستية', mode: ['حضوري', 'عن بعد'], color: 'bg-teal-100 text-teal-800' },
    { id: 2, name: 'ريادة الأعمال', mode: ['حضوري'], color: 'bg-teal-100 text-teal-800' },
    { id: 3, name: 'التكنولوجيا المالية', mode: ['حضوري'], color: 'bg-teal-100 text-teal-800' },
    { id: 4, name: 'السكرتير القانوني', mode: ['حضوري', 'عن بعد'], color: 'bg-teal-100 text-teal-800' },
    { id: 5, name: 'البرمجة وتطبيقات الأجهزة الذكية', mode: ['حضوري'], color: 'bg-teal-100 text-teal-800' },
    { id: 6, name: 'تقنية السياحة والضيافة (الفندقة)', mode: ['حضوري'], color: 'bg-teal-100 text-teal-800' },
    { id: 7, name: 'أمن وشبكات الكمبيوتر', mode: ['حضوري'], color: 'bg-teal-100 text-teal-800' },
    { id: 8, name: 'التسويق الرقمي والتجارة الإلكترونية', mode: ['حضوري'], color: 'bg-teal-100 text-teal-800' },
    { id: 9, name: 'قواعد البيانات وتطوير الويب', mode: ['حضوري'], color: 'bg-teal-100 text-teal-800' }
  ];

  // التخصصات والمقررات
  const subjects = [
    { 
      id: 'computer',
      name: 'الحاسب الآلي',
      icon: <ComputerDesktopIcon className="h-6 w-6" />,
      color: 'bg-gradient-to-r from-[#23A0D0] to-[#3CBEB3]',
      courses: 14,
      hours: 68,
      instructors: 4,
      classrooms: 4,
      coursesList: [
        { diploma: 'ريادة الأعمال', name: 'مقدمة في تطبيقات الحاسب الآلي', credits: 2, hours: 4 },
        { diploma: 'سالسل الإمداد', name: 'مقدمة في تطبيقات الحاسب الآلي', credits: 2, hours: 4 },
        { diploma: 'السكرتير القانوني', name: 'مقدمة في تطبيقات الحاسب الآلي', credits: 2, hours: 4 },
        { diploma: 'التكنولوجيا المالية', name: 'مقدمة في تطبيقات الحاسب الآلي', credits: 2, hours: 4 },
        { diploma: 'السياحة والفندقة', name: 'مقدمة في تطبيقات الحاسب الآلي', credits: 2, hours: 4 },
        { diploma: 'أمن وشبكات الكمبيوتر', name: 'مقدمة في تقنية المعلومات', credits: 3, hours: 5 },
        { diploma: 'أمن وشبكات الكمبيوتر', name: 'أساسيات الشبكات والأمن', credits: 3, hours: 5 },
        { diploma: 'أمن وشبكات الكمبيوتر', name: 'مسارات الوصول إلى الشبكة', credits: 3, hours: 6 },
        { diploma: 'قواعد البيانات وتطوير الويب', name: 'مقدمة في الحاسب وتكنولوجيا المعلومات', credits: 3, hours: 5 },
        { diploma: 'قواعد البيانات وتطوير الويب', name: 'أساسيات البرمجة', credits: 3, hours: 5 },
        { diploma: 'قواعد البيانات وتطوير الويب', name: 'تصميم وتحليل قواعد البيانات', credits: 3, hours: 6 },
        { diploma: 'البرمجة وتطبيقات الأجهزة الذكية', name: 'مبادئ قواعد البيانات', credits: 3, hours: 6 },
        { diploma: 'البرمجة وتطبيقات الأجهزة الذكية', name: 'مقدمة في البرمجة', credits: 3, hours: 5 },
        { diploma: 'البرمجة وتطبيقات الأجهزة الذكية', name: 'هياكل البيانات والخوارزميات', credits: 3, hours: 5 }
      ]
    },
    { 
      id: 'english',
      name: 'اللغة الإنجليزية',
      icon: <LanguageIcon className="h-6 w-6" />,
      color: 'bg-gradient-to-r from-[#202C5B]/50 to-[#226796]/50',
      courses: 9,
      hours: 34,
      instructors: 2,
      classrooms: 2,
      coursesList: [
        { diploma: 'ريادة الأعمال', name: 'لغة إنجليزية عامة', credits: 3, hours: 4 },
        { diploma: 'سالسل الإمداد', name: 'لغة إنجليزية عامة', credits: 3, hours: 3 },
        { diploma: 'السكرتير القانوني', name: 'لغة إنجليزية عامة', credits: 3, hours: 4 },
        { diploma: 'التكنولوجيا المالية', name: 'لغة إنجليزية عامة', credits: 3, hours: 3 },
        { diploma: 'السياحة والفندقة', name: 'لغة إنجليزية عامة', credits: 3, hours: 4 },
        { diploma: 'أمن وشبكات الكمبيوتر', name: 'لغة إنجليزية عامة', credits: 3, hours: 4 },
        { diploma: 'قواعد البيانات وتطوير الويب', name: 'لغة إنجليزية عامة', credits: 3, hours: 4 },
        { diploma: 'البرمجة وتطبيقات الأجهزة الذكية', name: 'لغة إنجليزية عامة', credits: 3, hours: 4 },
        { diploma: 'التسويق الرقمي والتجارة الإلكترونية', name: 'لغة إنجليزية عامة', credits: 3, hours: 4 }
      ]
    },
    { 
      id: 'business',
      name: 'إدارة الأعمال',
      icon: <BriefcaseIcon className="h-6 w-6" />,
      color: 'bg-gradient-to-r from-[#23A0D0] to-[#3CBEB3]',
      courses: 9,
      hours: 34,
      instructors: 2,
      classrooms: 2,
      coursesList: [
        { diploma: 'ريادة الأعمال', name: 'مبادئ ريادة الأعمال', credits: 3, hours: 4 },
        { diploma: 'ريادة الأعمال', name: 'ريادة الأعمال (2)', credits: 3, hours: 5 },
        { diploma: 'أمن وشبكات الكمبيوتر', name: 'مبادئ إدارة الأعمال', credits: 3, hours: 4 },
        { diploma: 'قواعد البيانات وتطوير الويب', name: 'مبادئ إدارة الأعمال', credits: 3, hours: 4 },
        { diploma: 'التسويق الرقمي والتجارة الإلكترونية', name: 'مبادئ إدارة الأعمال', credits: 3, hours: 4 },
        { diploma: 'البرمجة وتطبيقات الأجهزة الذكية', name: 'مبادئ إدارة الأعمال', credits: 3, hours: 4 },
        { diploma: 'تقنية السياحة والفندقة', name: 'مبادئ إدارة الأعمال', credits: 3, hours: 4 },
        { diploma: 'التكنولوجيا المالية', name: 'مقدمة في إدارة المخاطر المالية', credits: 2, hours: 2 },
        { diploma: 'التكنولوجيا المالية', name: 'مقدمة في التكنولوجيا المالية', credits: 3, hours: 3 }
      ]
    },
    { 
      id: 'law',
      name: 'القانون',
      icon: <ShieldCheckIcon className="h-6 w-6" />,
      color: 'bg-gradient-to-r from-[#202C5B]/50 to-[#226796]/50',
      courses: 8,
      hours: 22,
      instructors: 1,
      classrooms: 1,
      coursesList: [
        { diploma: 'ريادة الأعمال', name: 'قانون الأعمال', credits: 2, hours: 2 },
        { diploma: 'سالسل الإمداد', name: 'مبادئ القانون التجاري', credits: 3, hours: 3 },
        { diploma: 'سالسل الإمداد', name: 'العقود التجارية وعقود النقل', credits: 2, hours: 2 },
        { diploma: 'التكنولوجيا المالية', name: 'لوائح التكنولوجيا المالية', credits: 2, hours: 2 },
        { diploma: 'السكرتير القانوني', name: 'مبادئ القانون', credits: 3, hours: 3 },
        { diploma: 'السكرتير القانوني', name: 'القانون الإداري', credits: 2, hours: 2 },
        { diploma: 'السكرتير القانوني', name: 'مبادئ القانون الدولي', credits: 2, hours: 2 },
        { diploma: 'السكرتير القانوني', name: 'القانون التجاري', credits: 2, hours: 2 }
      ]
    },
    { 
      id: 'math',
      name: 'الرياضيات',
      icon: <CalculatorIcon className="h-6 w-6" />,
      color: 'bg-gradient-to-r from-[#23A0D0] to-[#3CBEB3]',
      courses: 5,
      hours: 20,
      instructors: 1,
      classrooms: 1,
      coursesList: [
        { diploma: 'السياحة والفندقة', name: 'رياضيات', credits: 3, hours: 4 },
        { diploma: 'أمن وشبكات الكمبيوتر', name: 'رياضيات', credits: 3, hours: 4 },
        { diploma: 'قواعد البيانات وتطوير الويب', name: 'رياضيات', credits: 3, hours: 4 },
        { diploma: 'البرمجة وتطبيقات الأجهزة الذكية', name: 'رياضيات', credits: 3, hours: 4 },
        { diploma: 'التسويق الرقمي والتجارة الإلكترونية', name: 'رياضيات', credits: 3, hours: 4 }
      ]
    },
    { 
      id: 'marketing',
      name: 'التسويق',
      icon: <GlobeAltIcon className="h-6 w-6" />,
      color: 'bg-gradient-to-r from-[#202C5B]/50 to-[#226796]/50',
      courses: 3,
      hours: 16,
      instructors: 1,
      classrooms: 1,
      coursesList: [
        { diploma: 'التسويق الرقمي والتجارة الإلكترونية', name: 'مقدمة في التسويق الرقمي وبناء الاستراتيجيات', credits: 3, hours: 8 },
        { diploma: 'التسويق الرقمي والتجارة الإلكترونية', name: 'تحسين محركات البحث والتسويق عبر المحتوى', credits: 3, hours: 5 },
        { diploma: 'التسويق الرقمي والتجارة الإلكترونية', name: 'تحليل البيانات وقياس الأداء', credits: 3, hours: 3 }
      ]
    },
    { 
      id: 'accounting',
      name: 'المحاسبة',
      icon: <BanknotesIcon className="h-6 w-6" />,
      color: 'bg-gradient-to-r from-[#23A0D0] to-[#3CBEB3]',
      courses: 2,
      hours: 6,
      instructors: 1,
      classrooms: 1,
      coursesList: [
        { diploma: 'ريادة الأعمال', name: 'مبادئ المحاسبة', credits: 2, hours: 2 },
        { diploma: 'التكنولوجيا المالية', name: 'أساسيات المالية والمحاسبة', credits: 3, hours: 4 }
      ]
    },
    { 
      id: 'logistics',
      name: 'اللوجستيات',
      icon: <TruckIcon className="h-6 w-6" />,
      color: 'bg-gradient-to-r from-[#202C5B]/50 to-[#226796]/50',
      courses: 2,
      hours: 6,
      instructors: 1,
      classrooms: 1,
      coursesList: [
        { diploma: 'سالسل الإمداد والخدمات اللوجستية', name: 'مقدمة في الخدمات اللوجستية', credits: 2, hours: 2 },
        { diploma: 'سالسل الإمداد والخدمات اللوجستية', name: 'عمليات سالسل الإمداد والتوريد', credits: 3, hours: 4 }
      ]
    },
    { 
      id: 'tourism',
      name: 'السياحة والضيافة',
      icon: <BuildingStorefrontIcon className="h-6 w-6" />,
      color: 'bg-gradient-to-r from-[#23A0D0] to-[#3CBEB3]',
      courses: 2,
      hours: 6,
      instructors: 1,
      classrooms: 1,
      coursesList: [
        { diploma: 'تقنية السياحة والفندقة', name: 'مدخل إلى صناعة السياحة والضيافة', credits: 3, hours: 3 },
        { diploma: 'تقنية السياحة والفندقة', name: 'الصحة والسلامة الفندقية', credits: 3, hours: 3 }
      ]
    },
    { 
      id: 'arabic',
      name: 'اللغة العربية',
      icon: <DocumentTextIcon className="h-6 w-6" />,
      color: 'bg-gradient-to-r from-[#202C5B]/50 to-[#226796]/50',
      courses: 1,
      hours: 2,
      instructors: 1,
      classrooms: 1,
      coursesList: [
        { diploma: 'البرمجة وتطبيقات الأجهزة الذكية', name: 'الكتابة الفنية', credits: 2, hours: 2 }
      ]
    }
  ];

  // جدول المحاضرات
  const schedules = [
    {
      day: 'الأحد',
      courses: [
        { subject: 'القانون', time: '3:00-5:00 م', room: 'قاعة 1', instructor: 'د. أحمد' },
        { subject: 'الرياضيات', time: '3:00-5:00 م', room: 'قاعة 2', instructor: 'د. محمد' },
        { subject: 'الحاسب الآلي (1)', time: '5:00-7:00 م', room: 'قاعة 4', instructor: 'أ. سامي' },
        { subject: 'اللغة الإنجليزية', time: '3:00-5:00 م', room: 'قاعة 6', instructor: 'أ. سارة' },
        { subject: 'إدارة الأعمال', time: '3:00-5:00 م', room: 'قاعة 3', instructor: 'د. خالد' }
      ]
    },
    {
      day: 'الإثنين',
      courses: [
        { subject: 'القانون', time: '5:00-7:00 م', room: 'قاعة 1', instructor: 'د. أحمد' },
        { subject: 'الرياضيات', time: '7:00-9:00 م', room: 'قاعة 2', instructor: 'د. محمد' },
        { subject: 'المحاسبة', time: '5:00-7:00 م', room: 'قاعة 2', instructor: 'د. فهد' },
        { subject: 'اللغة الإنجليزية', time: '5:00-7:00 م', room: 'قاعة 6', instructor: 'أ. سارة' },
        { subject: 'إدارة الأعمال', time: '5:00-7:00 م', room: 'قاعة 3', instructor: 'د. خالد' }
      ]
    },
    {
      day: 'الثلاثاء',
      courses: [
        { subject: 'القانون', time: '6:00-8:00 م', room: 'قاعة 1', instructor: 'د. أحمد' },
        { subject: 'الرياضيات', time: '6:00-8:00 م', room: 'قاعة 2', instructor: 'د. محمد' },
        { subject: 'اللوجستيات', time: '5:00-7:00 م', room: 'قاعة 2', instructor: 'د. عبدالله' },
        { subject: 'السياحة', time: '6:30-8:00 م', room: 'قاعة 1', instructor: 'أ. نورة' },
        { subject: 'الحاسب الآلي (2)', time: '7:00-9:00 م', room: 'قاعة 5', instructor: 'أ. علي' }
      ]
    },
    {
      day: 'الأربعاء',
      courses: [
        { subject: 'القانون', time: '7:00-9:00 م', room: 'قاعة 1', instructor: 'د. أحمد' },
        { subject: 'الرياضيات', time: '7:00-9:00 م', room: 'قاعة 2', instructor: 'د. محمد' },
        { subject: 'المحاسبة', time: '9:00-10:00 م', room: 'قاعة 2', instructor: 'د. فهد' },
        { subject: 'اللغة الإنجليزية', time: '7:00-9:00 م', room: 'قاعة 6', instructor: 'أ. سارة' },
        { subject: 'إدارة الأعمال', time: '7:00-9:00 م', room: 'قاعة 3', instructor: 'د. خالد' }
      ]
    },
    {
      day: 'الخميس',
      courses: [
        { subject: 'القانون', time: '4:00-6:00 م', room: 'قاعة 1', instructor: 'د. أحمد' },
        { subject: 'الرياضيات', time: '6:00-8:00 م', room: 'قاعة 2', instructor: 'د. محمد' },
        { subject: 'اللوجستيات', time: '9:00-10:00 م', room: 'قاعة 2', instructor: 'د. عبدالله' },
        { subject: 'السياحة', time: '8:00-10:00 م', room: 'قاعة 1', instructor: 'أ. نورة' },
        { subject: 'الحاسب الآلي (2)', time: '5:00-7:00 م', room: 'قاعة 5', instructor: 'أ. علي' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white" dir="rtl">
      <SEO title={isRTL ? "القبول والتسجيل | اكاديمية المهارات التطبيقية" : "Admission & Registration | Applied Skills Training Academy"} />
      {/* Header */}
      <header className="bg-white shadow-lg">
        <div className="mx-10 px-4 py-6">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <button
                onClick={() => window.history.back()}
                className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <ArrowLeftIcon className="h-6 w-6" />
              </button>
              <div className="bg-gradient-to-r from-[#23A0D0] to-[#3CBEB3] p-3 rounded-xl">
                <AcademicCapIcon className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">
                  خطة الفصل الدراسي الأول للدبلومات
                </h1>
                <p className="text-gray-600">نظام إدارة المقررات والجداول الدراسية - 5 أيام أسبوعياً</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors" onClick={handleDownload}>
                <DocumentArrowDownIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="mx-10 px-4 py-6">
        <div className="bg-white rounded-xl shadow-sm p-2 mb-6">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-6 py-3 rounded-lg transition-colors flex items-center ${activeTab === 'overview' ? 'bg-gradient-to-r from-[#23A0D0] to-[#3CBEB3] text-white' : 'hover:bg-gray-100'}`}
            >
              <ChartBarIcon className="h-5 w-5 ml-2" />
              نظرة عامة
            </button>
            <button
              onClick={() => setActiveTab('subjects')}
              className={`px-6 py-3 rounded-lg transition-colors flex items-center ${activeTab === 'subjects' ? 'bg-gradient-to-r from-[#23A0D0] to-[#3CBEB3] text-white' : 'hover:bg-gray-100'}`}
            >
              <BookOpenIcon className="h-5 w-5 ml-2" />
              التخصصات والمقررات
            </button>
            <button
              onClick={() => setActiveTab('schedule')}
              className={`px-6 py-3 rounded-lg transition-colors flex items-center ${activeTab === 'schedule' ? 'bg-gradient-to-r from-[#23A0D0] to-[#3CBEB3] text-white' : 'hover:bg-gray-100'}`}
            >
              <CalendarIcon className="h-5 w-5 ml-2" />
              الجداول الدراسية
            </button>
            <button
              onClick={() => setActiveTab('statistics')}
              className={`px-6 py-3 rounded-lg transition-colors flex items-center ${activeTab === 'statistics' ? 'bg-gradient-to-r from-[#23A0D0] to-[#3CBEB3] text-white' : 'hover:bg-gray-100'}`}
            >
              <DocumentTextIcon className="h-5 w-5 ml-2" />
              الإحصائيات والتقارير
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="mb-8">
          {activeTab === 'overview' && <RenderOverview diplomas={diplomas} subjects={subjects} setActiveTab={setActiveTab} setExpandedSubject={setExpandedSubject} />}
          {activeTab === 'subjects' && <RenderSubjects subjects={subjects} expandedSubject={expandedSubject} setExpandedSubject={setExpandedSubject} />}
          {activeTab === 'schedule' && <RenderSchedule schedules={schedules} />}
          {activeTab === 'statistics' && <RenderStatistics subjects={subjects} />}
        </div>

        {/* Summary Footer */}
        <div className="bg-gradient-to-r from-[#23A0D0] to-[#3CBEB3] text-white rounded-xl p-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold mb-2">ملخص الفصل الدراسي الأول</h3>
              <p>9 دبلومات • 55 مقرر • 42 محاضر • 214 ساعة تدريس</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold">5</div>
                <div className="text-sm">أيام أسبوعياً</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">6</div>
                <div className="text-sm">قاعات تدريب</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">10</div>
                <div className="text-sm">تخصصات أكاديمية</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionAndRegistration;