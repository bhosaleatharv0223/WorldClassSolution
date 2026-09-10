interface HeroProps {
  title?: string;
  subtitle?: string;
  isHome?: boolean;
  onContactClick?: () => void;
}

export default function Hero({ title, subtitle, isHome = false, onContactClick }: HeroProps) {
  return (
    <div>
      <div
        className="hero-gradient"
        style={{
          paddingTop: isHome ? '128px' : '96px',
          paddingBottom: isHome ? '72px' : '56px',
          paddingLeft: 24,
          paddingRight: 24,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <video
          className="hero-video hero-video-desktop"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
        >
          <source src="/desktop-hero.webm" type="video/webm" />
        </video>
        <video
          className="hero-video hero-video-mobile"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
        >
          <source src="/mobile-hero.webm" type="video/webm" />
        </video>
        <div className="hero-video-overlay" aria-hidden="true" />
        <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 2 }}>
          {isHome ? (
            <>
              <div style={{ maxWidth: 680 }}>
                <p style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.75)', marginBottom: 16, margin: '0 0 16px 0' }}>
                  Way to Excellence
                </p>
                <h1 style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 700, color: '#ffffff', lineHeight: 1.1, margin: '0 0 20px 0' }}>
                  World Class Solutions.<br />
                  <span style={{ fontWeight: 400, fontSize: 'clamp(24px, 3.5vw, 38px)' }}>Sustainable Technology, End to End.</span>
                </h1>
                <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.88)', lineHeight: 1.6, maxWidth: 580, margin: '0 0 36px 0' }}>
                  We deliver enterprise IT services and responsible e-waste management — from deployment to decommission — for organizations across India.
                </p>
                <button
                  onClick={onContactClick}
                  style={{ fontSize: '15px', fontWeight: 600, color: '#ffffff', background: 'transparent', border: '2px solid #ffffff', boxShadow: 'none', padding: '12px 32px', cursor: 'pointer', letterSpacing: '0.01em' }}
                >
                  Get in Touch
                </button>
              </div>
            </>
          ) : (
            <div style={{ textAlign: 'center' }}>
              <h1 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 700, color: '#ffffff', lineHeight: 1.1, margin: 0 }}>
                {title}
              </h1>
              {subtitle && (
                <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.85)', marginTop: 14, margin: '14px 0 0 0' }}>{subtitle}</p>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Wave divider */}
      <div style={{ display: 'block', lineHeight: 0, background: 'linear-gradient(145deg, #64B5F6 0%, #1E88E5 45%, #0D47A1 100%)' }}>
        <svg viewBox="0 0 1440 72" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ width: '100%', height: 72, display: 'block' }}>
          <path d="M0,32 C240,72 480,8 720,36 C960,64 1200,12 1440,28 L1440,72 L0,72 Z" fill="#ffffff" />
        </svg>
      </div>
    </div>
  );
}
