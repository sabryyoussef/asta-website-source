import { useState, useEffect, useMemo } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  MagnifyingGlassIcon,
  FunnelIcon,
  BookOpenIcon,
} from '@heroicons/react/24/outline';
// Components
import SEO from '../components/SEO';
import CategoryHeroSection from '../components/Courses/CategoryHeroSection';
import CourseCard from '../components/Courses/CourseCard';
// data
import Courses, { getCourseData } from '../api/Courses';
import CategoriesData from '../api/Categories.json';

const CategoryPage = () => {
  const location = useLocation();
  const { lang, categoryId } = useParams();
  const { t } = useTranslation();
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const localizeLabel = (value) => {
    if (!value) return '';
    if (typeof value === 'string') return value;
    if (typeof value === 'object') return value?.[lang] ?? value?.ar ?? value?.en ?? '';
    return String(value);
  };

  // Get category data
  const categoryData = useMemo(() => {
    if (!categoryId || !CategoriesData?.categories?.[categoryId]) return null;
    return CategoriesData.categories[categoryId];
  }, [categoryId]);

  const categoryName = useMemo(() => {
    return localizeLabel(categoryData);
  }, [categoryData, lang]);

  // Get sub-categories for this main category
  const subCategories = useMemo(() => {
    if (!categoryData?.sup_categories) return [];
    return categoryData.sup_categories.map((supCat) => ({
      id: supCat.id,
      label: localizeLabel(supCat),
    }));
  }, [categoryData, lang]);

  // Build filter options (all + sub-categories by ID)
  const filterOptions = useMemo(() => {
    return ['all', ...subCategories.map(sc => sc.id)];
  }, [subCategories]);

  // Handle URL query params for sup_category filter
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const supCategoryId = params.get('sup_category');
    if (!supCategoryId) {
      setFilter('all');
      return;
    }

    // Ensure the sub-category exists for this main category
    const supCategory = subCategories.find(sc => sc.id === supCategoryId);
    if (supCategory) {
      setFilter(supCategory.id);
    } else {
      setFilter('all');
    }
  }, [location.search, subCategories]);

  // Filter courses by main category (by ID) first, then by sub-category (by ID), then search
  const filteredCourses = useMemo(() => {
    return Courses.filter(course => {
      const localizedCourse = getCourseData(course, lang || 'ar');

      // Resolve this course's main category ID by matching against Categories.json
      let courseCategoryId = null;
      const catEntries = Object.entries(CategoriesData.categories || {});
      const catMatch = catEntries.find(([id, cat]) =>
        cat.ar === localizedCourse.category || cat.en === localizedCourse.category
      );
      if (catMatch) {
        courseCategoryId = catMatch[0];
      }
      const matchesMainCategory = courseCategoryId === categoryId;

      // Then, match sub-category filter (if not 'all'), using IDs
      let matchesSubCategory = true;
      if (filter !== 'all') {
        // Resolve this course's sub-category ID by matching against current category's sup_categories
        let courseSupCategoryId = null;
        if (localizedCourse.sup_category && categoryData?.sup_categories) {
          const supMatch = categoryData.sup_categories.find(
            (sup) =>
              sup.ar === localizedCourse.sup_category ||
              sup.en === localizedCourse.sup_category
          );
          if (supMatch) {
            courseSupCategoryId = supMatch.id;
          }
        }
        matchesSubCategory =
          courseSupCategoryId !== null && courseSupCategoryId === filter;
      }
      
      // Match search term
      const matchesSearch = !searchTerm || 
        (localizedCourse.title && localizedCourse.title.toLowerCase().includes(searchTerm.toLowerCase())) || 
        (localizedCourse.description && localizedCourse.description.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (localizedCourse.subtitle && localizedCourse.subtitle.toLowerCase().includes(searchTerm.toLowerCase()));
      
      return matchesMainCategory && matchesSubCategory && matchesSearch;
    });
  }, [filter, searchTerm, lang, categoryId, categoryData]);

  const isRTL = lang === 'ar';

  if (!categoryData) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-8 px-4 flex items-center justify-center">
        <div className="text-center">
          <p className="text-2xl font-bold text-gray-800 mb-4">
            {lang === 'ar' ? 'الفئة غير موجودة' : 'Category Not Found'}
          </p>
          <p className="text-gray-600">
            {lang === 'ar' ? 'الفئة المطلوبة غير موجودة.' : 'The requested category does not exist.'}
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEO 
        titleAr={`${categoryName} | اكاديمية المهارات التطبيقية`}
        titleEn={`${categoryName} | Applied Skills Training Academy`}
        descriptionAr={`تصفح الدورات في فئة ${categoryName} في اكاديمية المهارات التطبيقية`}
        descriptionEn={`Browse courses in ${categoryName} category at Applied Skills Training Academy`}
        url={`https://asta.edu.sa/${lang}/categories/${categoryId}`}
        isRTL={isRTL}
      />
      <CategoryHeroSection 
        categoryName={categoryName} 
        categoryImage={categoryData.image}
        categoryPNG={categoryData.PNG}
        lang={lang}
      />
      <div className={`min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-8 px-4`} dir={isRTL ? 'rtl' : 'ltr'}>
        <div className="max-w-7xl mx-auto">
          {/* Page Title - H2 because CategoryHeroSection already has the page H1 */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              {categoryName}
            </h2>
            <div className={`h-1.5 w-48 bg-gradient-to-r from-[#202C5B] via-[#23A0D0] to-[#3CBEB3] mx-auto rounded-full mb-6`}></div>
          </div>

          {/* Search and Filter */}
          <div className="mb-10">
            <div className={`flex flex-col lg:flex-row gap-6 items-center justify-between mb-8`}>
              {/* Search Field */}
              <div className={`relative w-full lg:w-96`}>
                <input
                  type="text"
                  placeholder={lang === 'ar' ? 'ابحث عن دورة...' : 'Search for a course...'}
                  className={`w-full ${isRTL ? 'pr-10 pl-10' : 'pl-10 pr-10'} py-3.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#23A0D0] focus:border-transparent bg-white text-gray-800 shadow-sm`}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <MagnifyingGlassIcon className={`absolute ${isRTL ? 'left-4' : 'right-4'} top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400`} />
              </div>

              {/* Results Counter */}
              <div className="flex items-center gap-2 text-gray-700 bg-white px-4 py-2.5 rounded-xl shadow-sm border border-gray-200">
                <FunnelIcon className="h-5 w-5 text-gray-500" />
                <span className="font-medium">
                  {lang === 'ar' ? (
                    <>عرض <span className="text-[#202C5B]">{filteredCourses.length}</span> دورة</>
                  ) : (
                    <>Showing <span className="text-[#202C5B]">{filteredCourses.length}</span> courses</>
                  )}
                </span>
              </div>
            </div>

            {/* Filter Buttons (by sub-category ID) */}
            <div className="flex flex-wrap gap-3 justify-center">
              {filterOptions.map((option) => {
                const isAll = option === 'all';
                const supCategory = isAll
                  ? null
                  : subCategories.find(sc => sc.id === option);
                const label = isAll
                  ? (lang === 'ar' ? 'جميع الدورات' : 'All Courses')
                  : (supCategory ? supCategory.label : option);

                return (
                  <button
                    key={option}
                    className={`px-5 py-2.5 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 ${
                      filter === option
                        ? 'bg-gradient-to-r from-[#202C5B] to-[#226796] text-white shadow-lg'
                        : 'bg-white text-gray-700 hover:bg-gray-50 shadow-sm hover:shadow-md border border-gray-200'
                    }`}
                    onClick={() => setFilter(option)}
                  >
                    <FunnelIcon className="h-4 w-4" />
                    {label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Course Cards List */}
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
                {lang === 'ar' ? 'لا توجد دورات تطابق بحثك' : 'No courses match your search'}
              </h3>
              <p className="text-gray-500 mb-8 max-w-md mx-auto">
                {lang === 'ar' 
                  ? 'حاول استخدام مصطلحات بحث مختلفة أو قم بتغيير الفلتر للعثور على الدورة المناسبة'
                  : 'Try using different search terms or change the filter to find the right course'}
              </p>
              <button 
                className="px-6 py-3 bg-gradient-to-r from-[#202C5B] to-[#226796] text-white rounded-xl font-medium hover:shadow-lg transition-all duration-300 flex items-center gap-2 mx-auto"
                onClick={() => {
                  setFilter('all');
                  setSearchTerm('');
                }}
              >
                <FunnelIcon className="h-5 w-5" />
                {lang === 'ar' ? 'عرض جميع الدورات' : 'Show All Courses'}
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CategoryPage;

