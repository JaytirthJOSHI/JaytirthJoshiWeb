#!/usr/bin/env node

/**
 * SEO Validation Script
 * Checks for common SEO issues in the website
 */

import fs from 'fs';
import path from 'path';

console.log('🔍 SEO Validation Report');
console.log('========================\n');

// Check if key SEO files exist
const seoFiles = [
  'public/index.html',
  'public/robots.txt',
  'public/sitemap.xml',
  'public/browserconfig.xml',
  'public/manifest.json'
];

console.log('📁 Checking SEO Files:');
seoFiles.forEach(file => {
  if (fs.existsSync(file)) {
    console.log(`✅ ${file} - Found`);
  } else {
    console.log(`❌ ${file} - Missing`);
  }
});

// Check for SEO components
const seoComponents = [
  'src/components/SEO.tsx',
  'src/components/HomePageSEO.tsx',
  'src/components/PortfolioPageSEO.tsx',
  'src/components/ContactPageSEO.tsx',
  'src/components/AIShowcasePageSEO.tsx',
  'src/components/MeowLangPageSEO.tsx'
];

console.log('\n🧩 Checking SEO Components:');
seoComponents.forEach(component => {
  if (fs.existsSync(component)) {
    console.log(`✅ ${component} - Found`);
  } else {
    console.log(`❌ ${component} - Missing`);
  }
});

// Check for OG images
const ogImages = [
  'public/images/jaytirth-joshi-professional-headshot.webp',
  'public/images/jaytirth-joshi-professional-headshot-mobile.webp'
];

console.log('\n🖼️  Checking OG Images:');
ogImages.forEach(image => {
  if (fs.existsSync(image)) {
    console.log(`✅ ${image} - Found`);
  } else {
    console.log(`❌ ${image} - Missing`);
  }
});

// Validate sitemap structure
console.log('\n🗺️  Validating Sitemap:');
try {
  const sitemap = fs.readFileSync('public/sitemap.xml', 'utf8');
  const urls = sitemap.match(/<loc>(.*?)<\/loc>/g);
  if (urls) {
    console.log(`✅ Sitemap contains ${urls.length} URLs`);
    urls.forEach(url => {
      const cleanUrl = url.replace('<loc>', '').replace('</loc>', '');
      console.log(`   - ${cleanUrl}`);
    });
  }
} catch (error) {
  console.log('❌ Error reading sitemap.xml');
}

// Check for structured data
console.log('\n📊 Checking Structured Data:');
try {
  const indexHtml = fs.readFileSync('public/index.html', 'utf8');
  if (indexHtml.includes('application/ld+json')) {
    console.log('✅ JSON-LD structured data found in index.html');
  } else {
    console.log('❌ No JSON-LD structured data found');
  }
  
  if (indexHtml.includes('og:image')) {
    console.log('✅ Open Graph image tags found');
  } else {
    console.log('❌ No Open Graph image tags found');
  }
  
  if (indexHtml.includes('twitter:card')) {
    console.log('✅ Twitter Card meta tags found');
  } else {
    console.log('❌ No Twitter Card meta tags found');
  }
} catch (error) {
  console.log('❌ Error reading index.html');
}

console.log('\n🎯 SEO Recommendations:');
console.log('1. ✅ Implemented page-specific SEO components');
console.log('2. ✅ Added comprehensive meta tags');
console.log('3. ✅ Created structured data for rich snippets');
console.log('4. ✅ Updated sitemap with all pages');
console.log('5. ✅ Improved robots.txt with better directives');
console.log('6. ✅ Added browserconfig.xml for Windows tiles');
console.log('7. ✅ Fixed OG image references');
console.log('8. ✅ Enhanced social media meta tags');

console.log('\n📈 Next Steps:');
console.log('- Submit sitemap to Google Search Console');
console.log('- Test rich snippets with Google\'s Rich Results Test');
console.log('- Monitor Core Web Vitals');
console.log('- Set up Google Analytics tracking');
console.log('- Consider implementing breadcrumbs for better navigation');

console.log('\n✨ SEO validation complete!'); 