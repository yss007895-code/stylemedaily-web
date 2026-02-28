'use client';
import { useState } from 'react';

const FALLBACK_IMAGE = '/images/guides/editors-choice-fashion-trends-2026.webp';

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
  category?: string;
  fill?: boolean;
  priority?: boolean;
  sizes?: string;
  placeholder?: string;
  blurDataURL?: string;
}

export default function SafeImage({
  fallbackSrc, src, alt, category, fill, priority, sizes, placeholder, blurDataURL, className, style, ...props
}: SafeImageProps) {
  const [imgSrc, setImgSrc] = useState(src || FALLBACK_IMAGE);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError) {
      setImgSrc(fallbackSrc || FALLBACK_IMAGE);
      setHasError(true);
    }
  };

  const fillStyle: React.CSSProperties = fill
    ? { position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', ...style }
    : { ...style };

  return (
    <img
      {...props}
      src={imgSrc as string}
      alt={alt || "Image"}
      className={className}
      style={fillStyle}
      loading={priority ? 'eager' : 'lazy'}
      onError={handleError}
    />
  );
}
