import React from 'react';
import { useReferrer } from '../hooks/useReferrer';

interface ReferrerBasedContentProps {
  children: React.ReactNode;
  googleContent?: React.ReactNode;
  linkedinContent?: React.ReactNode;
  githubContent?: React.ReactNode;
  socialContent?: React.ReactNode;
  directContent?: React.ReactNode;
  otherContent?: React.ReactNode;
}

const ReferrerBasedContent: React.FC<ReferrerBasedContentProps> = ({
  children,
  googleContent,
  linkedinContent,
  githubContent,
  socialContent,
  directContent,
  otherContent
}) => {
  const { referrerInfo, isLoading } = useReferrer();

  if (isLoading) {
    return <>{children}</>;
  }

  if (!referrerInfo) {
    return <>{children}</>;
  }

  switch (referrerInfo.source) {
    case 'google':
      return <>{googleContent || children}</>;
    case 'linkedin':
      return <>{linkedinContent || children}</>;
    case 'github':
      return <>{githubContent || children}</>;
    case 'social':
      return <>{socialContent || children}</>;
    case 'direct':
      return <>{directContent || children}</>;
    case 'other':
      return <>{otherContent || children}</>;
    default:
      return <>{children}</>;
  }
};

export default ReferrerBasedContent; 