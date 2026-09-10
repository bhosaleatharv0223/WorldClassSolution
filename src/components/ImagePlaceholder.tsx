interface ImagePlaceholderProps {
  ratio?: '4:3' | '16:9' | '1:1';
  label: string;
}

export default function ImagePlaceholder({ ratio = '4:3', label }: ImagePlaceholderProps) {
  const paddingMap = { '4:3': '75%', '16:9': '56.25%', '1:1': '100%' };

  return (
    <div style={{ position: 'relative', paddingTop: paddingMap[ratio], width: '100%' }}>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: '#E3F2FD',
          border: '2px dashed #90CAF9',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          gap: '6px',
        }}
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#90CAF9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <polyline points="21 15 16 10 5 21" />
        </svg>
        <span style={{ fontSize: '11px', color: '#90CAF9', textAlign: 'center', padding: '0 12px', fontWeight: 500, letterSpacing: '0.04em', textTransform: 'uppercase' }}>
          IMAGE: {label}
        </span>
      </div>
    </div>
  );
}
