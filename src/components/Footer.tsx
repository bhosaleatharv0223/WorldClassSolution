import logo from '@/imports/WCS-logo-header.png';

type Page = 'home' | 'about' | 'it-services' | 'e-waste' | 'blog' | 'clients' | 'contact';

interface FooterProps {
  readonly onNavigate: (page: Page) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const nav = (page: Page) => { onNavigate(page); window.scrollTo(0, 0); };

  const linkStyle: React.CSSProperties = {
    color: 'rgba(255,255,255,0.7)',
    fontSize: '14px',
    lineHeight: 1.8,
    background: 'none',
    border: 'none',
    padding: 0,
    cursor: 'pointer',
    textAlign: 'left',
    display: 'block',
  };

  return (
    <footer style={{ backgroundColor: '#0A2540', color: '#ffffff' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '64px 24px 40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '48px', marginBottom: 48 }}>
          {/* Col 1 */}
          <div>
            <img src={logo} alt="World Class Solutions" style={{ height: 36, display: 'block', marginBottom: 16 }} />
            <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, margin: 0 }}>
              Enterprise IT services and responsible e-waste management — from deployment to decommission.
            </p>
          </div>

          {/* Col 2 */}
          <div>
            <h4 style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#64B5F6', marginBottom: 16, margin: '0 0 16px 0' }}>IT Services</h4>
            {['Infrastructure Services', 'Application Development', 'Professional Consultancy', 'Website Design', 'Data Centre Designing', 'High Performance Computing'].map(s => (
              <button key={s} style={linkStyle} onClick={() => nav('it-services')}
                onMouseEnter={e => (e.currentTarget.style.color = '#ffffff')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}
              >{s}</button>
            ))}
          </div>

          {/* Col 3 */}
          <div>
            <h4 style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#64B5F6', marginBottom: 16, margin: '0 0 16px 0' }}>Recycling Services</h4>
            {['WEEE Recycling', 'Reverse Logistics', 'Data Destruction', 'Asset Management', 'EPR Management'].map(s => (
              <button key={s} style={linkStyle} onClick={() => nav('e-waste')}
                onMouseEnter={e => (e.currentTarget.style.color = '#ffffff')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}
              >{s}</button>
            ))}
          </div>

          {/* Col 4 */}
          <div>
            <h4 style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#64B5F6', marginBottom: 16, margin: '0 0 16px 0' }}>Contact</h4>
            <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, margin: '0 0 16px 0' }}>
              1, Sarangshree Apartment,<br />
              Opp Kailas Jeevan Factory,<br />
              Dhayari, Pune-411041
            </p>
            <a href="mailto:wcspune@gmail.com" style={{ color: '#64B5F6', fontSize: '14px', textDecoration: 'none', display: 'block', marginBottom: 8 }}>wcspune@gmail.com</a>
            <a href="tel:18002700600" style={{ color: '#64B5F6', fontSize: '14px', textDecoration: 'none', display: 'block' }}>Toll-Free: 1800-2700-600</a>

            {/* Social icons */}
            <div style={{ display: 'flex', gap: 12, marginTop: 20 }}>
              {[
                { label: 'LinkedIn', path: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z M2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z' },
                { label: 'Twitter', path: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z' },
              ].map(({ label, path }) => (
                <button key={label} aria-label={label} style={{ background: 'none', border: '1px solid rgba(100,181,246,0.3)', padding: 7, cursor: 'pointer', color: '#64B5F6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = '#64B5F6')}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(100,181,246,0.3)')}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d={path} />
                  </svg>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)', margin: 0 }}>
            &copy; 2025 World Class Solutions &mdash; All Rights Reserved.
          </p>
          <div style={{ display: 'flex', gap: 20 }}>
            {[['About Us', 'about'], ['Clients', 'clients'], ['Blog', 'blog'], ['Contact', 'contact']].map(([label, page]) => (
              <button key={label} onClick={() => nav(page as Page)}
                style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.75)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.4)')}
              >{label}</button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
