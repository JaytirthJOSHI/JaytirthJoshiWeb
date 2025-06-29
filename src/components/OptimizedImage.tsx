import React, { useState, useEffect } from 'react';
import './OptimizedImage.css';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  sizes?: string;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  width,
  height,
  priority = false,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
}) => {
  const [imageSrc, setImageSrc] = useState<string>('');
  const [isLoaded, setIsLoaded] = useState(false);
  const [supportsWebP, setSupportsWebP] = useState(false);

  useEffect(() => {
    // Check WebP support
    const checkWebP = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 1;
      canvas.height = 1;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.fillStyle = 'red';
        ctx.fillRect(0, 0, 1, 1);
        const dataURL = canvas.toDataURL('image/webp');
        return dataURL.indexOf('data:image/webp') === 0;
      }
      return false;
    };

    setSupportsWebP(checkWebP());
  }, []);

  useEffect(() => {
    if (!src) return;

    // Convert image path to WebP if supported
    let optimizedSrc = src;
    if (supportsWebP) {
      // Replace .png/.jpg/.jpeg with .webp
      optimizedSrc = src.replace(/\.(png|jpg|jpeg)$/i, '.webp');
      
      // Add mobile suffix for smaller screens
      if (window.innerWidth <= 768) {
        optimizedSrc = optimizedSrc.replace(/\.webp$/, '-mobile.webp');
      }
    }

    setImageSrc(optimizedSrc);
  }, [src, supportsWebP]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    // Fallback to original image if WebP fails
    setImageSrc(src);
  };

  return (
    <div className={`image-container ${className}`}>
      {!isLoaded && !priority && (
        <div className="image-placeholder">
          <div className="loading-spinner"></div>
        </div>
      )}
      <img
        src={imageSrc}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes}
        loading={priority ? 'eager' : 'lazy'}
        onLoad={handleLoad}
        onError={handleError}
        className={`optimized-image ${isLoaded ? 'loaded' : ''}`}
        style={{
          opacity: isLoaded ? 1 : 0,
          transition: 'opacity 0.3s ease-in-out'
        }}
      />
    </div>
  );
};

export default OptimizedImage; 