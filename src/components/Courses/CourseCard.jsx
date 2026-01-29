import {
  CheckBadgeIcon,
  TagIcon,
  ClockIcon,
  ChartBarIcon,
  CalendarIcon,
  UserGroupIcon,
  UserIcon,
  CurrencyDollarIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  ComputerDesktopIcon,
  StarIcon
} from "@heroicons/react/24/outline";
import { useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { getCourseData } from "../../api/Courses";

function CourseCard({ course }) {
  const navigate = useNavigate();
  const { lang } = useParams();
  const { t } = useTranslation();
  
  // Get localized course data
  const localizedCourse = getCourseData(course, lang);
  const courseForRender = localizedCourse || course;

  const asText = (value) => {
    if (typeof value === 'string' || typeof value === 'number') return value;
    if (value && typeof value === 'object' && (value.ar || value.en)) {
      const v = value[lang] ?? value.ar ?? value.en;
      return typeof v === 'string' || typeof v === 'number' ? v : '';
    }
    return '';
  };

  const asTextArray = (value) => {
    if (Array.isArray(value)) return value.map(asText).filter(Boolean);
    if (value && typeof value === 'object' && (value.ar || value.en)) {
      const v = value[lang] ?? value.ar ?? value.en;
      if (Array.isArray(v)) return v.map(asText).filter(Boolean);
    }
    return [];
  };
  const IconComponent = course.icon;
  const SafeIconComponent =
    typeof IconComponent === 'function' ||
    (typeof IconComponent === 'object' && IconComponent?.$$typeof)
      ? IconComponent
      : ComputerDesktopIcon;
  const statusColors = {
    "مفتوح للتسجيل": "bg-green-100 text-green-800",
    "Open for Registration": "bg-green-100 text-green-800",
    "قريبًا": "bg-yellow-100 text-yellow-800",
    "Coming Soon": "bg-yellow-100 text-yellow-800",
    "مكتمل": "bg-red-100 text-red-800",
    "Completed": "bg-red-100 text-red-800",
  };

  return (
    <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-white border border-gray-100 hover:-translate-y-1">
      {/* المثلثات الزخرفية */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-blue-50 to-blue-100 opacity-50 rounded-full group-hover:opacity-70 transition-opacity duration-300"></div>
      <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-gradient-to-tr from-cyan-50 to-cyan-100 opacity-50 rounded-full group-hover:opacity-70 transition-opacity duration-300"></div>

      {/* الهيدر مع التدرج اللوني */}
      <div className="relative h-48 bg-no-repeat bg-cover" style={{ backgroundImage: courseForRender.image ? `url(${courseForRender.image})` : 'url(/images/Diploma.jpg)' }}>
        <div className="absolute bottom-0 left-0 w-32 h-32 border-b-[80px] border-l-[80px] border-b-cyan-300/20 border-l-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#202C5B]/50 to-[#226796]/50"></div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center p-6 text-white">
          <div className="w-16 h-16 flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-2xl mb-4">
            <SafeIconComponent className="h-10 w-10 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-center mb-2">
            {asText(courseForRender.title)}
          </h3>
          <p className="text-blue-100 text-center opacity-90">
            {asText(courseForRender.subtitle)}
          </p>
        </div>
        <div className="w-full h-2 shadow-md" style={{ background: 'linear-gradient(to right, #202C5B, #226796, #23A0D0, #30AFC1, #3CBEB3)' }}></div>
      </div>

      {/* محتوى البطاقة */}
      <div className="p-6 relative z-10">
        {/* البادجات */}
        <div className="flex flex-wrap gap-2 mb-4">
          <span
            className={`px-3 py-1.5 rounded-full text-xs font-medium flex items-center gap-1 ${
              statusColors[localizedCourse.status]
            }`}
          >
            <TagIcon className="h-3 w-3" />
            {asText(courseForRender.status)}
          </span>
          <span
            className="px-3 py-1.5 rounded-full text-xs font-medium flex items-center gap-1"
            style={{
              backgroundColor: `${"#202C5B"}15`,
              color: "#202C5B",
            }}
          >
            <CheckBadgeIcon className="h-3 w-3" />
            {asText(courseForRender.sup_category) || asText(courseForRender.category)}
          </span>
        </div>

        {/* الوصف */}
        <p className="text-gray-600 mb-6 leading-relaxed text-right text-sm">
          {asText(courseForRender.description)}
        </p>
        {/* تفاصيل البرنامج */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="flex items-center gap-2 bg-gray-50 p-2 rounded-lg">
            <ClockIcon className="h-4 w-4 text-gray-500" />
            <span className="text-gray-700 text-xs font-medium">
              {asText(courseForRender.duration)}
            </span>
          </div>
          <div className="flex items-center gap-2 bg-gray-50 p-2 rounded-lg">
            <StarIcon className="h-4 w-4 text-gray-500" />
            <span className="text-gray-700 text-xs font-medium">
              {asText(courseForRender.rating)}
            </span>
          </div>
          <div className="flex items-center gap-2 bg-gray-50 p-2 rounded-lg">
            <CalendarIcon className="h-4 w-4 text-gray-500" />
            <span className="text-gray-700 text-xs font-medium">
              {asText(courseForRender.startDate)}
            </span>
          </div>
          {/* TODO: Uncomment when instructor data is needed */}
          {/* <div className="flex items-center gap-2 bg-gray-50 p-2 rounded-lg">
            <UserIcon className="h-4 w-4 text-gray-500" />
            <span className="text-gray-700 text-xs font-medium">
              {(courseForRender.instructor.name ?? '')}
            </span>
          </div> */}
        </div>

        {/* المهارات */}
        <div className="mb-6">
          <h4 className="text-gray-800 font-medium mb-3 text-right text-sm">
            {t("courses.targetJobs")}:
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {asTextArray(courseForRender.targetJobs)?.map((target, index) => (
              <span
                key={index}
                className="px-2.5 py-1 text-xs rounded-lg border"
                style={{
                  backgroundColor: `${"#202C5B"}10`,
                  color: "#202C5B",
                  borderColor: `${"#202C5B"}30`,
                }}
              >
                {target}
              </span>
            ))}
          </div>
        </div>

        {/* السعر وزر التفاصيل */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <button
            className="px-4 py-2.5 rounded-lg font-medium flex items-center gap-2 transition-all duration-300 group-hover:shadow-md"
            style={{
              backgroundColor: "#202C5B",
              color: "white",
            }}
            onClick={() => navigate(`/${lang}/courses/${course.id}`)}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateX(-5px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateX(0)";
            }}
          >
            <span className="text-sm">{t("global.details")}</span>
            {lang === 'en' ? <ArrowRightIcon className="h-4 w-4" /> : <ArrowLeftIcon className="h-4 w-4" />}
          </button>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
