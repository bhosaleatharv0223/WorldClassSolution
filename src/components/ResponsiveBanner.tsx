interface ResponsiveBannerProps {
  desktopSrc: string;
  mobileSrc: string;
  alt: string;
}

export default function ResponsiveBanner({ desktopSrc, mobileSrc, alt }: ResponsiveBannerProps) {
  return (
    <picture className="responsive-banner">
      <source media="(max-width: 767px)" srcSet={mobileSrc} />
      <img src={desktopSrc} alt={alt} loading="eager" fetchPriority="high" />
    </picture>
  );
}
