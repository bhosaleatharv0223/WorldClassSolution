import Hero from '@/components/Hero';
import ClientLogoGrid from '@/components/ClientLogoGrid';

export default function Clients() {
  return (
    <main>
      <Hero title="Our Clients" subtitle="Trusted by enterprises and institutions across India." />

      <section style={{ backgroundColor: '#ffffff', padding: '80px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <p style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#1E88E5', margin: '0 0 10px 0' }}>Client Portfolio</p>
          <h2 style={{ fontSize: 'clamp(22px, 2.8vw, 30px)', fontWeight: 700, color: '#0D47A1', lineHeight: 1.15, margin: '0 0 16px 0' }}>Organizations That Trust WCS</h2>
          <p style={{ fontSize: '17px', color: '#5F6368', lineHeight: 1.6, maxWidth: 680, margin: '0 0 56px 0' }}>
            A wide range of distinguished clientele who continuously repose their faith in our proficiency, bear testimony to our commitment to quality and service excellence.
          </p>

          <ClientLogoGrid />
        </div>
      </section>

      <section style={{ backgroundColor: '#E3F2FD', padding: '64px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: 640, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(20px, 2.5vw, 28px)', fontWeight: 700, color: '#0D47A1', margin: '0 0 14px 0' }}>
            Join Our Client Portfolio
          </h2>
          <p style={{ fontSize: '17px', color: '#1565C0', lineHeight: 1.6, margin: '0 0 28px 0' }}>
            Discover how WCS can deliver world-class IT services and responsible e-waste solutions for your organization.
          </p>
          <button
            style={{ fontSize: '15px', fontWeight: 600, color: '#ffffff', backgroundColor: '#0D47A1', border: 'none', padding: '12px 32px', cursor: 'pointer' }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#0A3880')}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#0D47A1')}
          >
            Get in Touch
          </button>
        </div>
      </section>
    </main>
  );
}
