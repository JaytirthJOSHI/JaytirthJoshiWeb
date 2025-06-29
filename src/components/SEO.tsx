// Temporarily disabled SEO component due to react-helmet dependency
// This component will be re-enabled when react-helmet is properly configured

import React from 'react';
import { Helmet } from 'react-helmet';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'profile';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
}

const SEO: React.FC<SEOProps> = ({
  title = 'Jaytirth Joshi - CEO & Founder of HealthSathi | AI/ML Expert',
  description = 'Jaytirth Joshi is the CEO and Founder of HealthSathi, an AI-powered healthcare platform. Expert in AI/ML, healthcare technology, and medical innovation.',
  keywords = 'Jaytirth Joshi, HealthSathi, AI healthcare, medical technology, CEO, founder, artificial intelligence, machine learning, healthcare innovation',
  image = '/jaytirth-joshi-professional-headshot.png',
  url = 'https://jaytirthjoshi.com',
  type = 'website',
  author = 'Jaytirth Joshi',
  publishedTime,
  modifiedTime,
  section,
  tags = []
}) => {
  const fullUrl = `${url}${window.location.pathname}`;
  const fullImageUrl = `${url}${image}`;

  // Structured data for rich snippets
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': type === 'profile' ? 'Person' : 'WebPage',
    name: title,
    description,
    url: fullUrl,
    image: fullImageUrl,
    author: {
      '@type': 'Person',
      name: author,
      url: 'https://jaytirthjoshi.com',
      jobTitle: 'CEO & Founder',
      worksFor: {
        '@type': 'Organization',
        name: 'HealthSathi'
      }
    },
    publisher: {
      '@type': 'Organization',
      name: 'Jaytirth Joshi Portfolio',
      url: 'https://jaytirthjoshi.com'
    },
    ...(publishedTime && { datePublished: publishedTime }),
    ...(modifiedTime && { dateModified: modifiedTime }),
    ...(section && { articleSection: section }),
    ...(tags.length > 0 && { keywords: tags.join(', ') })
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Jaytirth Joshi Portfolio" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      <meta name="twitter:creator" content="@jaytirthjoshi" />
      <meta name="twitter:site" content="@jaytirthjoshi" />

      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#0a192f" />
      <meta name="msapplication-TileColor" content="#0a192f" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>

      {/* Additional Person Schema for Profile Pages */}
      {type === 'profile' && (
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Jaytirth Joshi',
            url: 'https://jaytirthjoshi.com',
            image: fullImageUrl,
            jobTitle: 'CEO & Founder',
            worksFor: {
              '@type': 'Organization',
              name: 'HealthSathi',
              url: 'https://healthsathi.com'
            },
            alumniOf: {
              '@type': 'Organization',
              name: 'Various Medical Institutions'
            },
            knowsAbout: [
              'Artificial Intelligence',
              'Machine Learning',
              'Healthcare Technology',
              'Medical Innovation',
              'AI in Healthcare',
              'Startup Leadership'
            ],
            sameAs: [
              'https://linkedin.com/in/jaytirthjoshi',
              'https://github.com/jaytirthjoshi',
              'https://twitter.com/jaytirthjoshi'
            ]
          })}
        </script>
      )}
    </Helmet>
  );
};

export default SEO; 