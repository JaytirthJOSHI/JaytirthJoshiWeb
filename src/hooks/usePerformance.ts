import { useEffect, useCallback } from 'react';

interface GtagParameters {
  [key: string]: string | number | boolean;
}

export const usePerformance = (enabled: boolean = true) => {
  const trackEvent = useCallback((eventName: string, parameters: GtagParameters = {}) => {
    if (window.gtag && enabled) {
      window.gtag('event', eventName, parameters);
    }
  }, [enabled]);

  const trackPageView = useCallback((pageTitle: string, pagePath: string) => {
    if (window.gtag && enabled) {
      window.gtag('config', process.env.REACT_APP_GA_MEASUREMENT_ID, {
        page_title: pageTitle,
        page_path: pagePath,
      });
    }
  }, [enabled]);

  const trackUserInteraction = useCallback((element: string, action: string) => {
    trackEvent('user_interaction', {
      event_category: 'Engagement',
      event_label: `${element}_${action}`,
      value: 1,
    });
  }, [trackEvent]);

  useEffect(() => {
    if (!enabled || !window.gtag) return;

    // Track page load time
    const handleLoad = () => {
      const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
      trackEvent('page_load_time', {
        value: Math.round(loadTime),
        event_category: 'Performance',
        event_label: 'Page Load Time',
      });
    };

    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, [enabled, trackEvent]);

  return {
    trackEvent,
    trackPageView,
    trackUserInteraction,
  };
};