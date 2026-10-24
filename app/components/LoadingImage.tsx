'use client';

import Image, { type ImageProps } from 'next/image';

type LoadingImageProps = ImageProps & {
  shellClassName?: string;
};

export default function LoadingImage({
  alt,
  className,
  shellClassName,
  onLoad,
  onError,
  ...imageProps
}: LoadingImageProps) {
  const handleLoad: ImageProps['onLoad'] = (event) => {
    const shell = event.currentTarget.closest('.image-loading-shell');
    shell?.classList.add('is-loaded');
    shell?.setAttribute('aria-busy', 'false');
    onLoad?.(event);
  };

  const handleError: ImageProps['onError'] = (event) => {
    const shell = event.currentTarget.closest('.image-loading-shell');
    shell?.classList.add('has-error');
    shell?.setAttribute('aria-busy', 'false');
    onError?.(event);
  };

  return (
    <span
      className={`image-loading-shell${shellClassName ? ` ${shellClassName}` : ''}`}
      aria-busy="true"
    >
      <span className="image-loading-placeholder" aria-hidden="true" />
      <Image
        {...imageProps}
        alt={alt}
        className={`image-loading-image${className ? ` ${className}` : ''}`}
        onLoad={handleLoad}
        onError={handleError}
      />
    </span>
  );
}
