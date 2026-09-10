interface ResponsiveServiceImageProps {
  desktopSrc: string;
  mobileSrc: string;
  alt: string;
}

export default function ResponsiveServiceImage({ desktopSrc, mobileSrc, alt }: ResponsiveServiceImageProps) {
  return (
    <picture className="service-card-image">
      <source media="(max-width: 767px)" srcSet={mobileSrc} />
      <img src={desktopSrc} alt={alt} loading="lazy" />
    </picture>
  );
}
