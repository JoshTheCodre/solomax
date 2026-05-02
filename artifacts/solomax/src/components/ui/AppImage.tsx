import React, { useState, useCallback, useMemo, memo } from 'react';

interface AppImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  fill?: boolean;
  sizes?: string;
  onClick?: () => void;
  fallbackSrc?: string;
  [key: string]: any;
}

const AppImage = memo(function AppImage({
  src,
  alt,
  width,
  height,
  className = '',
  fill = false,
  onClick,
  fallbackSrc = '/assets/images/no_image.png',
  ...props
}: AppImageProps) {
  const [imageSrc, setImageSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  const handleError = useCallback(() => {
    if (!hasError && imageSrc !== fallbackSrc) {
      setImageSrc(fallbackSrc);
      setHasError(true);
    }
  }, [hasError, imageSrc, fallbackSrc]);

  const imageClassName = useMemo(() => {
    const classes = [className];
    if (onClick) classes.push('cursor-pointer hover:opacity-90 transition-opacity duration-200');
    return classes.filter(Boolean).join(' ');
  }, [className, onClick]);

  if (fill) {
    return (
      <img
        src={imageSrc}
        alt={alt}
        className={imageClassName}
        onError={handleError}
        onClick={onClick}
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        {...props}
      />
    );
  }

  return (
    <img
      src={imageSrc}
      alt={alt}
      width={width || 400}
      height={height || 300}
      className={imageClassName}
      onError={handleError}
      onClick={onClick}
      {...props}
    />
  );
});

AppImage.displayName = 'AppImage';

export default AppImage;
