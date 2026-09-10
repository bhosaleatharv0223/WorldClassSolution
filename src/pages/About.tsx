import Hero from '@/components/Hero';

type Page = 'home' | 'about' | 'it-services' | 'e-waste' | 'blog' | 'clients' | 'contact';

interface AboutProps {
  readonly onNavigate: (page: Page) => void;
}

const values = [
  'Creation of Wealth through Fair Practices',
  'Pursuit of Excellence through quality',
  'Highest Level of Integrity',
  'Optimum Value Proposition',
  'Customer Care',
  'Team Work',
  'Respect for the Individual',
  'Preservation of our heritage and environment',
];

export default function About({ onNavigate }: AboutProps) {
  const nav = (page: Page) => { onNavigate(page); window.scrollTo(0, 0); };

  return (
    <main>
      <Hero title="About Us" subtitle="Way to Excellence" />

      {/* WCS About */}
      <section style={{ backgroundColor: '#ffffff', padding: '80px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 64, alignItems: 'start' }}>
          <div>
            <p style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#1E88E5', margin: '0 0 10px 0' }}>World Class Solutions</p>
            <h2 style={{ fontSize: 'clamp(22px, 2.8vw, 30px)', fontWeight: 700, color: '#0D47A1', lineHeight: 1.15, margin: '0 0 20px 0' }}>
              About WCS
            </h2>
            <p style={{ fontSize: '17px', color: '#1A1A1A', lineHeight: 1.65, margin: '0 0 16px 0' }}>
              World Class Solutions <strong>(WCS)</strong> is an IT services organization providing IT services, consulting and business solutions. We add real value to global organizations through domain expertise plus solutions with proven success in the field and world-class service.
            </p>
            <p style={{ fontSize: '17px', color: '#1A1A1A', lineHeight: 1.65, margin: '0 0 16px 0' }}>
              WCS has placed innovation, cost-effectiveness, timeliness and a firm commitment to energy efficiency, at the heart of its business credo, to achieve &apos;Complete Customer Satisfaction&apos;. A wide range of distinguished clientele, who continuously repose their faith in our proficiency, bear testimony to this fact.
            </p>
            <p style={{ fontSize: '17px', color: '#1565C0', lineHeight: 1.65, margin: 0, fontStyle: 'italic' }}>
              When you work with us, your long-term success is our motivation. This is why we can offer you the ability to meet every challenge and the agility to capitalize on every opportunity.
            </p>
          </div>
          <div style={{ maxWidth: 420 }}>
            <div style={{ position: 'relative', paddingTop: '100%', width: '100%', overflow: 'hidden' }}>
              <img
                src="/AboutUsWCS.webp"
                alt="World Class Solutions business and technology illustration"
                className="w-full h-full object-cover"
                style={{ position: 'absolute', inset: 0 }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Green IT Recycling */}
      <section style={{ backgroundColor: '#F7FAFD', padding: '80px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <p style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#1E88E5', margin: '0 0 10px 0' }}>Our Second Division</p>
          <h2 style={{ fontSize: 'clamp(22px, 2.8vw, 30px)', fontWeight: 700, color: '#0D47A1', lineHeight: 1.15, margin: '0 0 24px 0' }}>Green IT Recycling</h2>
          <div className="about-recycling-card">
            <div style={{ maxWidth: 860 }}>
              <p style={{ fontSize: '17px', color: '#1A1A1A', lineHeight: 1.65, margin: '0 0 16px 0' }}>
                Green IT Recycling Center Pvt. Ltd is an asset recovery solution provider, managing excess or end-of-life IT assets. Our expertise in process engineering and remarketing directly translates into the recovery of IT asset value for our clients.
              </p>
              <p style={{ fontSize: '17px', color: '#1A1A1A', lineHeight: 1.65, margin: '0 0 24px 0' }}>
                Our team brings 11+ years of experience in IT Asset management services, focused on three core services: Data Security, Value for Return, and Environmental Disposal.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {[
                  'Registered Recycler — Maharashtra Pollution Control Board (M.P.C.B)',
                  'Registered under Maharashtra Special Economic Zone (S.E.Z)',
                ].map(item => (
                  <div key={item} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                    <svg style={{ flexShrink: 0, marginTop: 3 }} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1E88E5" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span style={{ fontSize: '15px', color: '#1A1A1A', lineHeight: 1.5 }}>{item}</span>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 28 }}>
                <button
                  onClick={() => nav('e-waste')}
                  style={{ fontSize: '14px', fontWeight: 600, color: '#ffffff', backgroundColor: '#0D47A1', border: 'none', padding: '10px 24px', cursor: 'pointer' }}
                  onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#0A3880')}
                  onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#0D47A1')}
                >
                  Explore Recycling Services
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Mission Values */}
      <section style={{ backgroundColor: '#ffffff', padding: '80px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <p style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#1E88E5', margin: '0 0 10px 0' }}>Our Foundation</p>
          <h2 style={{ fontSize: 'clamp(22px, 2.8vw, 30px)', fontWeight: 700, color: '#0D47A1', lineHeight: 1.15, margin: '0 0 48px 0' }}>Vision, Mission &amp; Values</h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 32, marginBottom: 48 }}>
            {[
              {
                head: 'Vision',
                body: 'To become a leading enterprise and business solutions provider that drives performance and business value. We are committed to helping our clients achieve success by providing comprehensive solutions.',
              },
              {
                head: 'Mission',
                body: 'To help our customers gain and sustain a strategic business advantage by providing world-class solutions leveraging technology, professional services, and a flexible global delivery model.',
              },
            ].map(item => (
              <div key={item.head} style={{ borderLeft: '3px solid #1E88E5', paddingLeft: 24 }}>
                <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#0D47A1', margin: '0 0 12px 0' }}>{item.head}</h3>
                <p style={{ fontSize: '16px', color: '#1A1A1A', lineHeight: 1.65, margin: 0 }}>{item.body}</p>
              </div>
            ))}
          </div>

          <div>
            <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#0D47A1', margin: '0 0 20px 0' }}>Values</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
              {values.map(v => (
                <span key={v} style={{ fontSize: '14px', color: '#1E88E5', border: '1px solid #90CAF9', backgroundColor: '#E3F2FD', padding: '7px 16px', fontWeight: 500 }}>
                  {v}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
