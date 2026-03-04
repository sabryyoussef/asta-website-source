import {
  ComputerDesktopIcon,
  AcademicCapIcon,
  UserGroupIcon,
  CommandLineIcon,
  BoltIcon,
  ShieldCheckIcon,
  ExclamationTriangleIcon,
  MagnifyingGlassIcon,
  LockClosedIcon,
  BugAntIcon,
  BeakerIcon,
} from '@heroicons/react/24/outline';
import CoursesData from './Courses.json';
import CategoriesData from './Categories.json';

// Map icon names to actual icon components
const iconMap = {
  ComputerDesktopIcon,
  AcademicCapIcon,
  UserGroupIcon,
  CommandLineIcon,
  LightningBoltIcon: BoltIcon,
  BoltIcon,
  ShieldCheckIcon,
  ExclamationTriangleIcon,
  MagnifyingGlassIcon,
  LockClosedIcon,
  BugAntIcon,
  BeakerIcon,
};

const isBilingualObject = (value) =>
  Boolean(
    value &&
      typeof value === 'object' &&
      !Array.isArray(value) &&
      Object.prototype.hasOwnProperty.call(value, 'ar') &&
      Object.prototype.hasOwnProperty.call(value, 'en')
  );

const localizeValueDeep = (value, lang = 'ar') => {
  if (value === null || value === undefined) return value;

  if (Array.isArray(value)) {
    return value.map((item) => localizeValueDeep(item, lang));
  }

  if (isBilingualObject(value)) {
    const selected = value[lang] ?? value.ar ?? value.en;
    return localizeValueDeep(selected, lang);
  }

  if (typeof value === 'object') {
    const result = {};
    Object.keys(value).forEach((key) => {
      result[key] = localizeValueDeep(value[key], lang);
    });
    return result;
  }

  return value;
};

const normalizeIcon = (icon) => {
  if (typeof icon === 'function') return icon;
  if (icon && typeof icon === 'object' && icon.$$typeof) return icon;
  if (typeof icon === 'string') return iconMap[icon] || ComputerDesktopIcon;
  return ComputerDesktopIcon;
};

const resolveBilingualFromCatalog = (value, catalog) => {
  if (!value) return value;

  if (isBilingualObject(value)) return value;

  if (typeof value === 'string') {
    const fromCatalog = catalog?.[value];
    if (isBilingualObject(fromCatalog)) return fromCatalog;
  }

  return value;
};

const normalizeCourse = (course, lang = 'ar') => {
  const c = course || {};
  const category = resolveBilingualFromCatalog(c.category, CategoriesData?.categories);
  const supCategory = resolveBilingualFromCatalog(
    c.sup_category,
    CategoriesData?.sup_categories
  );

  return {
    id: c.id,
    icon: normalizeIcon(c.icon),
    image: c.image,
    title: localizeValueDeep(c.title, lang) || '',
    subtitle: localizeValueDeep(c.subtitle, lang) || '',
    category: localizeValueDeep(category, lang) || '',
    sup_category: localizeValueDeep(supCategory, lang) || '',
    description: localizeValueDeep(c.description, lang) || '',
    overview: localizeValueDeep(c.overview, lang) || '',
    hours: c.hours,
    startDate: localizeValueDeep(c.startDate, lang) || '',
    endDate: localizeValueDeep(c.endDate, lang) || '',
    duration: localizeValueDeep(c.duration, lang) || '',
    status: localizeValueDeep(c.status, lang) || '',
    price: c.price,
    sponsore: localizeValueDeep(c.sponsore, lang) || '',
    rating: c.rating,
    reviews: c.reviews,
    level: localizeValueDeep(c.level, lang) || '',
    // TODO: Uncomment when instructor data is needed
    // instructor: c.instructor
    //   ? {
    //       name: c.instructor.name,
    //       title: localizeValueDeep(c.instructor.title, lang) || '',
    //       experience: localizeValueDeep(c.instructor.experience, lang) || '',
    //       image: c.instructor.image,
    //       bio: localizeValueDeep(c.instructor.bio, lang) || '',
    //     }
    //   : null,
    skills: localizeValueDeep(c.skills, lang),
    targetJobs: localizeValueDeep(c.targetJobs, lang),
    objectives: localizeValueDeep(c.objectives, lang),
    targetAudience: localizeValueDeep(c.targetAudience, lang),
    requirements: localizeValueDeep(c.requirements, lang),
    admission_requirements: localizeValueDeep(c.admission_requirements, lang),
    faqs: localizeValueDeep(c.faqs, lang),
  };
};

const Courses = CoursesData.map((course) => normalizeCourse(course, 'ar'));

// Return localized course data in Arabic or English based on the original JSON,
// so we don't lose bilingual fields even if the caller passes an already-localized object.
// - Accepts either a full course object or a numeric/string ID.
// - Any lang other than 'en' falls back to 'ar'.
export const getCourseData = (courseOrId, lang = 'ar') => {
  const safeLang = lang === 'en' ? 'en' : 'ar';

  // Try to resolve the course ID
  const id =
    typeof courseOrId === 'number' || typeof courseOrId === 'string'
      ? courseOrId
      : courseOrId && typeof courseOrId === 'object'
      ? courseOrId.id
      : undefined;

  // Always localize from the original bilingual JSON when possible
  const sourceFromJson =
    id !== undefined
      ? CoursesData.find((c) => String(c.id) === String(id))
      : undefined;

  const source = sourceFromJson || courseOrId || {};

  return normalizeCourse(source, safeLang);
};

export default Courses;