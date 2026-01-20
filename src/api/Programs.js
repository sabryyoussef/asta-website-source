import {
  BuildingOfficeIcon,
  ServerStackIcon,
  BanknotesIcon,
  ComputerDesktopIcon,
  DevicePhoneMobileIcon,
  CircleStackIcon,
  ShoppingCartIcon,
  DocumentTextIcon,
} from '@heroicons/react/24/outline';
import ProgramsData from './Programs.json';
import CategoriesData from './Categories.json';

// Map icon names to actual icon components
const iconMap = {
  BuildingOfficeIcon,
  ServerStackIcon,
  BanknotesIcon,
  ComputerDesktopIcon,
  DevicePhoneMobileIcon,
  CircleStackIcon,
  ShoppingCartIcon,
  DocumentTextIcon,
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
  if (typeof icon === 'string') return iconMap[icon] || BuildingOfficeIcon;
  return BuildingOfficeIcon;
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

const normalizeProgram = (program, lang = 'ar') => {
  const p = program || {};
  const category = resolveBilingualFromCatalog(p.category, CategoriesData?.categories);

  return {
    id: p.id,
    icon: normalizeIcon(p.icon),
    image: p.image,
    title: localizeValueDeep(p.title, lang) || '',
    subtitle: localizeValueDeep(p.subtitle, lang) || '',
    category: localizeValueDeep(category, lang) || '',
    duration: localizeValueDeep(p.duration, lang) || '',
    level: localizeValueDeep(p.level, lang) || '',
    startDate: localizeValueDeep(p.startDate, lang) || '',
    endDate: localizeValueDeep(p.endDate, lang) || '',
    status: localizeValueDeep(p.status, lang) || '',
    price: p.price,
    installment: p.installment,
    rating: p.rating,
    reviews: p.reviews,
    instructor: p.instructor
      ? {
          name: localizeValueDeep(p.instructor.name, lang) || '',
          title: localizeValueDeep(p.instructor.title, lang) || '',
          experience: localizeValueDeep(p.instructor.experience, lang) || '',
          image: p.instructor.image,
          bio: localizeValueDeep(p.instructor.bio, lang) || '',
        }
      : null,
    overview: localizeValueDeep(p.overview, lang) || '',
    objectives: localizeValueDeep(p.objectives, lang),
    curriculum: localizeValueDeep(p.curriculum, lang),
    targetJobs: localizeValueDeep(p.targetJobs, lang),
    requirements: localizeValueDeep(p.requirements, lang),
    admission_requirements: localizeValueDeep(p.admission_requirements, lang),
    faqs: localizeValueDeep(p.faqs, lang),
    schedule: localizeValueDeep(p.schedule, lang) || {},
  };
};

const Programs = ProgramsData.map((program) => normalizeProgram(program, 'ar'));

// Return localized program data in Arabic or English based on the original JSON,
// so we don't lose bilingual fields even if the caller passes an already-localized object.
// - Accepts either a full program object or a numeric/string ID.
// - Any lang other than 'en' falls back to 'ar'.
export const getProgramData = (programOrId, lang = 'ar') => {
  const safeLang = lang === 'en' ? 'en' : 'ar';

  // Try to resolve the program ID
  const id =
    typeof programOrId === 'number' || typeof programOrId === 'string'
      ? Number(programOrId)
      : programOrId && typeof programOrId === 'object'
      ? programOrId.id
      : undefined;

  // Always localize from the original bilingual JSON when possible
  const sourceFromJson =
    typeof id === 'number'
      ? ProgramsData.find((p) => p.id === id)
      : undefined;

  const source = sourceFromJson || programOrId || {};

  return normalizeProgram(source, safeLang);
};

export default Programs;