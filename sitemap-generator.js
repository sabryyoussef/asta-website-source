import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream, readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Your base URL
const BASE_URL = 'https://vetbrains.edu.eg';

// Define your static routes for both languages
const staticRoutes = [
  // Arabic routes
  '/ar',
  '/ar/academic-integrity',
  '/ar/about-us',
  '/ar/vision&mission',
  '/ar/programs',
  '/ar/courses',
  '/ar/registration',
  '/ar/student-services',
  '/ar/terms-and-conditions',
  '/ar/admission&registration',
  '/ar/certificate-checker',
  '/ar/registration-success',
  
  // English routes
  '/en',
  '/en/academic-integrity',
  '/en/about-us',
  '/en/vision&mission',
  '/en/programs',
  '/en/courses',
  '/en/registration',
  '/en/student-services',
  '/en/terms-and-conditions',
  '/en/admission&registration',
  '/en/certificate-checker',
  '/en/registration-success'
];

// Dynamic routes (you'll need to fetch these from your API)
const dynamicRoutes = [];

// Function to fetch dynamic routes from data files
async function fetchDynamicRoutes() {
  try {
    // Read programs from JSON file
    const programs = JSON.parse(
      readFileSync(resolve(__dirname, './src/api/Programs.json'), 'utf-8')
    );
    
    // Read courses from JSON file
    const courses = JSON.parse(
      readFileSync(resolve(__dirname, './src/api/Courses.json'), 'utf-8')
    );
    
    // Read categories from JSON file
    const categoriesData = JSON.parse(
      readFileSync(resolve(__dirname, './src/api/Categories.json'), 'utf-8')
    );
    const categories = Object.keys(categoriesData.categories || {});
    
    const routes = [];
    
    // Add program routes for both languages
    programs.forEach(program => {
      routes.push(`/ar/programs/${program.id}`, `/en/programs/${program.id}`);
    });
    
    // Add course routes for both languages
    courses.forEach(course => {
      routes.push(`/ar/courses/${course.id}`, `/en/courses/${course.id}`);
    });
    
    // Add category routes for both languages
    categories.forEach(categoryId => {
      routes.push(`/ar/categories/${categoryId}`, `/en/categories/${categoryId}`);
    });
    
    return routes;
  } catch (error) {
    console.error('Error fetching dynamic routes:', error);
    return [];
  }
}

async function generateSitemap() {
  try {
    // Fetch dynamic routes
    const dynamicRoutes = await fetchDynamicRoutes();
    
    // Combine all routes
    const allRoutes = [...staticRoutes, ...dynamicRoutes];
    
    // Create sitemap stream
    const smStream = new SitemapStream({ hostname: BASE_URL });
    
    // Add each URL to the sitemap
    allRoutes.forEach(route => {
      smStream.write({
        url: route,
        changefreq: 'weekly',
        priority: route === '/ar' || route === '/en' ? 1.0 : 0.8,
        lastmod: new Date()
      });
    });
    
    // Close the stream
    smStream.end();
    
    // Generate the sitemap
    const sitemap = await streamToPromise(smStream);
    
    // Write to public directory
    const writeStream = createWriteStream(resolve('./public/sitemap.xml'));
    writeStream.write(sitemap.toString());
    writeStream.end();
    
    console.log('✅ Sitemap generated successfully at ./public/sitemap.xml');
    console.log(`📊 Total URLs: ${allRoutes.length}`);
    
  } catch (error) {
    console.error('❌ Error generating sitemap:', error);
  }
}

// Generate the sitemap
generateSitemap();
