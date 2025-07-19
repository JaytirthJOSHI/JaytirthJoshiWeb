import { useState, useEffect } from 'react';

interface ReferrerInfo {
  source: 'google' | 'linkedin' | 'github' | 'direct' | 'social' | 'other';
  searchTerm?: string;
  campaign?: string;
  medium?: string;
}

export const useReferrer = () => {
  const [referrerInfo, setReferrerInfo] = useState<ReferrerInfo | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const analyzeReferrer = () => {
      const referrer = document.referrer;
      const urlParams = new URLSearchParams(window.location.search);
      
      let source: ReferrerInfo['source'] = 'direct';
      let searchTerm: string | undefined;
      let campaign: string | undefined;
      let medium: string | undefined;

      // Check for UTM parameters first
      const utmSource = urlParams.get('utm_source');
      const utmMedium = urlParams.get('utm_medium');
      const utmCampaign = urlParams.get('utm_campaign');
      const utmTerm = urlParams.get('utm_term');

      if (utmSource) {
        campaign = utmCampaign || undefined;
        medium = utmMedium || undefined;
        searchTerm = utmTerm || undefined;

        if (utmSource.toLowerCase().includes('google')) {
          source = 'google';
        } else if (utmSource.toLowerCase().includes('linkedin')) {
          source = 'linkedin';
        } else if (utmSource.toLowerCase().includes('github')) {
          source = 'github';
        } else if (utmSource.toLowerCase().includes('twitter') || utmSource.toLowerCase().includes('facebook') || utmSource.toLowerCase().includes('instagram')) {
          source = 'social';
        } else {
          source = 'other';
        }
      } else if (referrer) {
        const referrerUrl = new URL(referrer);
        const hostname = referrerUrl.hostname.toLowerCase();

        if (hostname.includes('google.com') || hostname.includes('google.co')) {
          source = 'google';
          // Extract search term from Google referrer
          const searchParams = new URLSearchParams(referrerUrl.search);
          searchTerm = searchParams.get('q') || undefined;
        } else if (hostname.includes('linkedin.com')) {
          source = 'linkedin';
        } else if (hostname.includes('github.com')) {
          source = 'github';
        } else if (hostname.includes('twitter.com') || hostname.includes('facebook.com') || hostname.includes('instagram.com')) {
          source = 'social';
        } else {
          source = 'other';
        }
      }

      setReferrerInfo({
        source,
        ...(searchTerm && { searchTerm }),
        ...(campaign && { campaign }),
        ...(medium && { medium })
      });
      setIsLoading(false);
    };

    analyzeReferrer();
  }, []);

  return { referrerInfo, isLoading };
}; 