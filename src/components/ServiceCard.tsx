import ImagePlaceholder from './ImagePlaceholder';
import ResponsiveServiceImage from './ResponsiveServiceImage';

interface ServiceCardProps {
  eyebrow?: string;
  heading: string;
  body: string;
  imageLabel?: string;
  desktopImageSrc?: string;
  mobileImageSrc?: string;
  imageAlt?: string;
  imageRatio?: '4:3' | '16:9' | '1:1';
  readMoreLabel?: string;
  onReadMore?: () => void;
}

export default function ServiceCard({
  eyebrow,
  heading,
  body,
  imageLabel,
  desktopImageSrc,
  mobileImageSrc,
  imageAlt,
  imageRatio = '4:3',
  readMoreLabel = 'Read More',
  onReadMore,
}: ServiceCardProps) {
  return (
    <div
      style={{
        backgroundColor: '#ffffff',
        border: '1px solid #E3F2FD',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
    >
      {desktopImageSrc && mobileImageSrc && imageAlt ? (
        <ResponsiveServiceImage desktopSrc={desktopImageSrc} mobileSrc={mobileImageSrc} alt={imageAlt} />
      ) : imageLabel ? (
        <ImagePlaceholder ratio={imageRatio} label={imageLabel} />
      ) : null}
      <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
        {eyebrow && (
          <span style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#1E88E5', marginBottom: '8px', display: 'block' }}>
            {eyebrow}
          </span>
        )}
        <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#0D47A1', lineHeight: 1.2, marginBottom: '10px', margin: '0 0 10px 0' }}>
          {heading}
        </h3>
        <p style={{ fontSize: '15px', color: '#1A1A1A', lineHeight: 1.6, flex: 1, margin: '0 0 16px 0' }}>
          {body}
        </p>
        <button
          onClick={onReadMore}
          style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', fontSize: '14px', fontWeight: 600, color: '#1E88E5', background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
        >
          {readMoreLabel}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
          </svg>
        </button>
      </div>
    </div>
  );
}
