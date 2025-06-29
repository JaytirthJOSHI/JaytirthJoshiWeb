import React, { useEffect } from 'react';

interface PerformanceMonitorProps {
  enabled?: boolean;
}

interface FirstInputEntry extends PerformanceEntry {
  processingStart: number;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ enabled = true }) => {
  useEffect(() => {
    if (!enabled || !window.gtag) return;

    // Monitor Core Web Vitals
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'largest-contentful-paint') {
          const lcp = entry.startTime;
          window.gtag('event', 'LCP', {
            value: Math.round(lcp),
            event_category: 'Web Vitals',
            event_label: 'Largest Contentful Paint'
          });
        }
        
        if (entry.entryType === 'first-input') {
          const fidEntry = entry as FirstInputEntry;
          const fid = fidEntry.processingStart - fidEntry.startTime;
          window.gtag('event', 'FID', {
            value: Math.round(fid),
            event_category: 'Web Vitals',
            event_label: 'First Input Delay'
          });
        }
        
        if (entry.entryType === 'layout-shift') {
          const cls = (entry as any).value;
          window.gtag('event', 'CLS', {
            value: Math.round(cls * 1000) / 1000,
            event_category: 'Web Vitals',
            event_label: 'Cumulative Layout Shift'
          });
        }
      }
    });

    // Observe different performance metrics
    observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });

    // Monitor page load time
    window.addEventListener('load', () => {
      const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
      window.gtag('event', 'page_load_time', {
        value: Math.round(loadTime),
        event_category: 'Performance',
        event_label: 'Page Load Time'
      });
    });

    // Monitor user interactions
    const trackInteraction = (event: Event) => {
      const target = event.target as HTMLElement;
      if (target.tagName === 'A' || target.tagName === 'BUTTON') {
        window.gtag('event', 'user_interaction', {
          event_category: 'Engagement',
          event_label: `${target.tagName.toLowerCase()}_click`,
          value: 1
        });
      }
    };

    document.addEventListener('click', trackInteraction);

    return () => {
      observer.disconnect();
      document.removeEventListener('click', trackInteraction);
    };
  }, [enabled]);

  return null;
};

export default PerformanceMonitor; 