# Jaytirth Joshi Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and enhanced with advanced animations, mobile navigation, and SEO optimization.

## ✨ Features

### 🎨 Enhanced Animations & Micro-interactions
- Smooth scroll-triggered animations using Intersection Observer API
- Hover effects with cubic-bezier transitions
- Particle background effects with interactive modes
- Floating profile image animation
- Micro-interactions on buttons and interactive elements

### 📱 Improved Mobile Experience
- Mobile-first responsive design
- Touch-optimized interactions
- Mobile navigation menu with smooth transitions
- Enhanced touch targets for better accessibility
- Optimized particle effects for mobile devices

### 🔍 Analytics & SEO
- Google Analytics 4 integration
- Core Web Vitals monitoring
- Structured data (JSON-LD) for rich snippets
- Open Graph and Twitter Card meta tags
- XML sitemap for better indexing
- Performance monitoring and user interaction tracking

### 🌐 Internationalization
- Multi-language support (English, Spanish, Hindi, Chinese)
- Dynamic language switching
- Localized content and translations

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/jaytirth-joshi-portfolio.git
cd jaytirth-joshi-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env` file in the root directory:
```env
REACT_APP_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

### Setting up Google Analytics

1. Go to [Google Analytics](https://analytics.google.com/)
2. Create a new property for your website
3. Get your Measurement ID (starts with "G-")
4. Add it to your `.env` file:
```env
REACT_APP_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

### Running the Application

```bash
# Development mode
npm start

# Production build
npm run build

# Test the production build
npm run test
```

## 📁 Project Structure

```
src/
├── components/
│   ├── GoogleAnalytics.tsx      # Google Analytics integration
│   ├── PerformanceMonitor.tsx   # Core Web Vitals tracking
│   ├── SEO.tsx                  # SEO meta tags and structured data
│   ├── SocialLinks.tsx          # Social media links
│   └── ...
├── pages/
│   ├── HomePage.tsx             # Main portfolio page
│   ├── ContactPage.tsx          # Contact page
│   └── ...
├── locales/                     # Translation files
└── assets/                      # Images and static assets
```

## 🎯 Key Features Explained

### Scroll-Triggered Animations
The website uses Intersection Observer API to trigger animations when elements come into view:
- Elements slide in from different directions
- Smooth opacity transitions
- Staggered animation timing for visual hierarchy

### Mobile Navigation
- Hamburger menu for mobile devices
- Full-screen overlay navigation
- Smooth slide-in animation
- Touch-optimized navigation links

### Performance Monitoring
- Tracks Core Web Vitals (LCP, FID, CLS)
- Monitors page load times
- Tracks user interactions
- Sends data to Google Analytics

### SEO Optimization
- Structured data for rich snippets
- Open Graph tags for social sharing
- Twitter Card support
- XML sitemap for search engines
- Meta tags for better indexing

## 🛠️ Customization

### Adding New Languages
1. Add translation files to `src/locales/`
2. Update the language switcher in `HomePage.tsx`
3. Add language options to the `LanguageSwitcher` component

### Modifying Animations
- Update CSS animations in `HomePage.css`
- Modify scroll trigger thresholds in `useScrollAnimation` hook
- Adjust timing and easing functions

### Updating Content
- Edit content in translation files
- Update structured data in `SEO.tsx`
- Modify experience and education data in `HomePage.tsx`

## 📊 Analytics Setup

The website includes comprehensive analytics tracking:

### Core Web Vitals
- **LCP (Largest Contentful Paint)**: Measures loading performance
- **FID (First Input Delay)**: Measures interactivity
- **CLS (Cumulative Layout Shift)**: Measures visual stability

### User Interactions
- Button clicks
- Navigation events
- Page views
- Custom events

### Performance Metrics
- Page load times
- Resource loading
- User engagement

## 🔧 Build and Deployment

### Production Build
```bash
npm run build
```

### Deployment
The build folder contains optimized files ready for deployment:
- Minified JavaScript and CSS
- Optimized images
- Static assets

### Recommended Hosting
- Vercel (recommended for React apps)
- Netlify
- GitHub Pages
- AWS S3 + CloudFront

## 📈 Performance Optimization

### Implemented Optimizations
- Lazy loading of components
- Optimized particle effects
- Reduced motion for accessibility
- Touch device optimizations
- Performance monitoring

### Further Optimizations
- Image optimization and WebP support
- Service worker for offline functionality
- Code splitting for better loading
- CDN integration

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Contact

Jaytirth Joshi
- Email: jaytirthjayjoshi@gmail.com
- LinkedIn: [linkedin.com/in/jaytirthjoshi](https://www.linkedin.com/in/jaytirthjoshi)
- GitHub: [github.com/JaytirthJOSHI](https://github.com/JaytirthJOSHI)

---

Built with ❤️ using React, TypeScript, and modern web technologies. 