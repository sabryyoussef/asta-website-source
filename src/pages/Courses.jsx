import { useState, useEffect, useMemo } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import {
  MagnifyingGlassIcon,
  FunnelIcon,
  BookOpenIcon,
} from '@heroicons/react/24/outline';
// Components
import SEO from '../components/SEO';
import CoursesHeroSection from '../components/Courses/CoursesHeroSection';
import CourseCard from '../components/Courses/CourseCard';
// data
import Courses, { getCourseData } from '../api/Courses';
import CategoriesData from '../api/Categories.json';

const CoursesPage = () => {
  const location = useLocation();
  const { lang } = useParams();
  const isRTL = lang === 'ar';
  // filter holds main category ID or 'all'
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const localizeLabel = (value) => {
    if (!value) return '';
    if (typeof value === 'string') return value;
    if (typeof value === 'object') return value?.[lang] ?? value?.ar ?? value?.en ?? '';
    return String(value);
  };

  // Build category options as { id, label } so filtering works in all languages
  const categoryOptions = useMemo(() => {
    const entries = Object.entries(CategoriesData?.categories || {});
    return [
      { id: 'all', label: lang === 'en' ? 'All Courses' : 'جميع الدورات' },
      ...entries.map(([id, cat]) => ({
        id,
        label: localizeLabel(cat),
      })),
    ];
  }, [lang]);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const categoryId = params.get('category');
    if (!categoryId) {
      setFilter('all');
      return;
    }

    // Ensure the category exists
    if (CategoriesData?.categories?.[categoryId]) {
      setFilter(categoryId);
    } else {
      setFilter('all');
    }
  }, [location.search]);

  // Filter courses by main category (using IDs) and search term
  const filteredCourses = useMemo(() => {
    return Courses.filter(course => {
      const localizedCourse = getCourseData(course, lang || 'ar');

      // Resolve this course's main category ID by matching against Categories.json
      let courseCategoryId = null;
      const catEntries = Object.entries(CategoriesData.categories || {});
      const catMatch = catEntries.find(([, cat]) =>
        cat.ar === localizedCourse.category || cat.en === localizedCourse.category
      );
      if (catMatch) {
        courseCategoryId = catMatch[0];
      }

      const matchesCategory =
        filter === 'all' || (courseCategoryId !== null && courseCategoryId === filter);

      const matchesSearch =
        !searchTerm ||
        (localizedCourse.title &&
          localizedCourse.title.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (localizedCourse.description &&
          localizedCourse.description.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (localizedCourse.subtitle &&
          localizedCourse.subtitle.toLowerCase().includes(searchTerm.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [filter, searchTerm, lang]);

  return (
    <>
    <SEO 
      titleAr="الدورات | اكاديمية المهارات التطبيقية"
      titleEn="Courses | Applied Skills Training Academy"
      descriptionAr="تصفح الدورات الاحترافية في اكاديمية المهارات التطبيقية"
      descriptionEn="Browse professional courses at Applied Skills Training Academy"
      url={`https://asta.edu.sa/${lang}/courses`}
      isRTL={isRTL}
    />
    <CoursesHeroSection lang={lang}/>
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-8 px-4" dir="rtl">
      <div className="max-w-7xl mx-auto">
        {/* عنوان الصفحة */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            {lang === 'en' ? 'Professional Courses' : 'الدورات الاحترافية'}
          </h1>
          <div className="h-1.5 w-48 bg-gradient-to-r from-[#202C5B] via-[#23A0D0] to-[#3CBEB3] mx-auto rounded-full mb-6"></div>
        </div>

        {/* البحث والتصفية */}
        <div className="mb-10">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between mb-8">
            {/* حقل البحث */}
            <div className="relative w-full lg:w-96">
              <input
                type="text"
                placeholder={lang === 'en' ? 'Search for professional courses...' : 'ابحث عن دورة احترافية...'}
                className="w-full pr-10 pl-10 py-3.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#23A0D0] focus:border-transparent bg-white text-gray-800 shadow-sm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>

            {/* عداد النتائج */}
            <div className="flex items-center gap-2 text-gray-700 bg-white px-4 py-2.5 rounded-xl shadow-sm border border-gray-200">
              <FunnelIcon className="h-5 w-5 text-gray-500" />
              <span className="font-medium">
                {lang === 'en' 
                  ? `Showing ${filteredCourses.length} of ${Courses.length} courses`
                  : `عرض ${filteredCourses.length} من ${Courses.length} دورة`
                }
              </span>
            </div>
          </div>

          {/* أزرار التصفية */}
          <div className="flex flex-wrap gap-3 justify-center">
            {categoryOptions.map((option) => (
              <button
                key={option.id}
                className={`px-5 py-2.5 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 ${
                  filter === option.id
                    ? 'bg-gradient-to-r from-[#202C5B] to-[#226796] text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-50 shadow-sm hover:shadow-md border border-gray-200'
                }`}
                onClick={() => setFilter(option.id)}
              >
                <FunnelIcon className="h-4 w-4" />
                {option.label}
              </button>
            ))}
          </div>
        </div>

        {/* قائمة بطاقات الدورات */}
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-2xl shadow-lg border border-gray-200">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl mb-6">
              <BookOpenIcon className="h-12 w-12 text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-700 mb-4">
              {lang === 'en' ? 'No courses match your search' : 'لا توجد دورات تطابق بحثك'}
            </h3>
            <p className="text-gray-500 mb-8 max-w-md mx-auto">
              {lang === 'en' 
                ? 'Try using different search terms or change the filter to find the right course'
                : 'حاول استخدام مصطلحات بحث مختلفة أو قم بتغيير الفلتر للعثور على الدورة المناسب'
              }
            </p>
            <button 
              className="px-6 py-3 bg-gradient-to-r from-[#202C5B] to-[#226796] text-white rounded-xl font-medium hover:shadow-lg transition-all duration-300 flex items-center gap-2 mx-auto"
              onClick={() => {
                setFilter('all');
                setSearchTerm('');
              }}
            >
              <FunnelIcon className="h-5 w-5" />
              {lang === 'en' ? 'Show All Courses' : 'عرض جميع الدورات'}
            </button>
          </div>
        )}
      </div>
    </div>
    </>
  );
};

export default CoursesPage;