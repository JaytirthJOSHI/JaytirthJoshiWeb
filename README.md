# Jaytirth Joshi Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and enhanced with advanced animations, mobile navigation, SEO optimization, and modern development practices.

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

### 🎯 Modern Development Practices
- TypeScript with strict type checking
- ESLint and Prettier for code quality
- Husky pre-commit hooks
- Performance monitoring hooks
- Theme context for state management
- Service worker for offline functionality

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
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
Copy `env.example` to `.env` and configure:
```env
REACT_APP_GA_MEASUREMENT_ID=G-XXXXXXXXXX
REACT_APP_API_URL=https://api.example.com
REACT_APP_ENABLE_ANALYTICS=true
REACT_APP_ENABLE_PERFORMANCE_MONITORING=true
```

### Development Commands

```bash
# Start development server
npm start

# Run linting
npm run lint

# Format code
npm run format

# Type checking
npm run type-check

# Build for production
npm run build

# Run tests
npm test
```

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
├── contexts/            # React contexts (Theme, etc.)
├── hooks/               # Custom React hooks
├── pages/               # Page components
├── locales/             # Translation files
├── assets/              # Images and static assets
└── types/               # TypeScript type definitions
```

## 🎯 Key Features Explained

### Modern Development Setup
- **ESLint**: Code linting with TypeScript and React rules
- **Prettier**: Automatic code formatting
- **Husky**: Git hooks for pre-commit checks
- **TypeScript**: Strict type checking for better code quality

### Performance Monitoring
- Custom hooks for analytics tracking
- Core Web Vitals monitoring
- User interaction tracking
- Performance metrics collection

### Theme Management
- Context-based theme switching
- System theme detection
- Persistent theme preferences
- Dark/light mode support

### Service Worker
- Offline functionality
- Resource caching
- Better performance
- PWA capabilities

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

### Code Quality Checks
```bash
npm run lint        # Check for code issues
npm run format      # Format code
npm run type-check  # TypeScript validation
```

### Deployment
The build folder contains optimized files ready for deployment:
- Minified JavaScript and CSS
- Optimized images
- Static assets
- Service worker for offline functionality

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
- Service worker caching
- Code splitting

### Further Optimizations
- Image optimization and WebP support
- Advanced caching strategies
- CDN integration
- Bundle analysis and optimization

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Run quality checks (`npm run lint && npm run format && npm run type-check`)
5. Commit your changes (`git commit -m 'Add amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- React and TypeScript communities
- Contributors and supporters
- Open source libraries used in this project

## 📞 Contact

Jaytirth Joshi
- Email: jaytirthjayjoshi@gmail.com
- LinkedIn: [linkedin.com/in/jaytirthjoshi](https://www.linkedin.com/in/jaytirthjoshi)
- GitHub: [github.com/JaytirthJOSHI](https://github.com/JaytirthJOSHI)

---

Built with ❤️ using React, TypeScript, and modern web technologies. 