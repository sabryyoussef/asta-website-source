import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

export default function SEO({ 
    title, 
    description, 
    keywords, 
    author, 
    robots, 
    country, 
    geoRegion, 
    geoPlacename, 
    canonical 
}) {
    const { t } = useTranslation();
    
    // Get default values from translations
    const defaultTitle = t('seo.default.title');
    const defaultDescription = t('seo.default.description');
    const defaultKeywords = t('seo.default.keywords');
    const defaultAuthor = t('seo.default.author');
    const defaultRobots = t('seo.default.robots');
    const defaultCountry = t('seo.default.country');
    const defaultGeoRegion = t('seo.default.geoRegion');
    const defaultGeoPlacename = t('seo.default.geoPlacename');
    const defaultCanonical = t('seo.default.canonical');
    
    // Use provided props or fall back to defaults
    const seoTitle = title || defaultTitle;
    const seoDescription = description || defaultDescription;
    const seoKeywords = keywords || defaultKeywords;
    const seoAuthor = author || defaultAuthor;
    const seoRobots = robots || defaultRobots;
    const seoCountry = country || defaultCountry;
    const seoGeoRegion = geoRegion || defaultGeoRegion;
    const seoGeoPlacename = geoPlacename || defaultGeoPlacename;
    const seoCanonical = canonical || defaultCanonical;
    
    return (
        <Helmet>
            <meta name="description" content={seoDescription} />
            <meta name="keywords" content={seoKeywords} />
            <meta name="author" content={seoAuthor} />
            <meta name="robots" content={seoRobots} />
            <meta name="country" content={seoCountry} />
            <meta name="geo.region" content={seoGeoRegion} />
            <meta name="geo.placename" content={seoGeoPlacename} />
            <link rel="canonical" href={seoCanonical} />
            <title>{seoTitle}</title>
        </Helmet>
    );
}