import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';
import { resolve } from 'path';

// Your base URL
const BASE_URL = 'https://asta.com.sa';

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

// Function to fetch dynamic routes from your API
async function fetchDynamicRoutes() {
  try {
    // Fetch programs
    const programsResponse = await fetch('http://localhost:5173/api/Programs');
    const programs = await programsResponse.json();
    
    // Fetch courses
    const coursesResponse = await fetch('http://localhost:5173/api/Courses');
    const courses = await coursesResponse.json();
    
    // Fetch categories
    const categoriesResponse = await fetch('http://localhost:5173/api/Categories');
    const categories = await categoriesResponse.json();
    
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
    categories.forEach(category => {
      routes.push(`/ar/categories/${category.id}`, `/en/categories/${category.id}`);
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
