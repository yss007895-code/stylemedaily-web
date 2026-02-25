'use client';
import Image, { ImageProps } from 'next/image';
import { useState } from 'react';

const FALLBACK_IMAGE = '/images/placeholder.webp';

interface SafeImageProps extends Omit<ImageProps, 'onError'> {
  category?: string;
  fallbackSrc?: string;
}

export default function SafeImage({ category, fallbackSrc, src, alt, ...props }: SafeImageProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError) {
      const fallback = fallbackSrc || FALLBACK_IMAGE;
      setImgSrc(fallback);
      setHasError(true);
    }
  };

  return (
    <Image
      {...props}
      src={imgSrc}
      alt={alt}
      onError={handleError}
    />
  );
}
