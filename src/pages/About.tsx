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
          <div className="about-wcs-copy-card">
            <p style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#1E88E5', margin: '0 0 10px 0' }}>World Class Solutions</p>
            <h2 style={{ fontSize: 'clamp(22px, 2.8vw, 30px)', fontWeight: 700, color: '#0D47A1', lineHeight: 1.15, margin: '0 0 20px 0' }}>
              About WCS
            </h2>
            <p style={{ fontSize: '17px', color: '#1A1A1A', lineHeight: 1.65, margin: '0 0 16px 0' }}>
              World Class Solutions <strong>(WCS)</strong> is an IT services organization providing IT services, consulting, and business solutions to organizations across India and beyond. With over 29 years of industry experience, we add real value to our clients through deep domain expertise, proven field-tested solutions, and a consistent standard of world-class service delivery.
            </p>
            <p style={{ fontSize: '17px', color: '#1A1A1A', lineHeight: 1.65, margin: '0 0 16px 0' }}>
              At the heart of our business credo lies a firm commitment to innovation, cost-effectiveness, timeliness, and energy efficiency &mdash; all working together toward one goal: complete customer satisfaction. A wide and distinguished clientele, spanning manufacturing, healthcare, education, and infrastructure sectors, continues to place its trust in our proficiency. When you work with WCS, your long-term success becomes our motivation &mdash; giving you both the capability to meet every challenge and the agility to seize every opportunity.
            </p>
            <div className="vision-highlight-card" style={{ backgroundColor: '#F0F6FC', padding: '28px 32px', marginTop: 32, width: '100%', boxSizing: 'border-box' }}>
              <p style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#1E88E5', margin: '0 0 10px 0' }}>
                Our Vision
              </p>
              <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#0D47A1', lineHeight: 1.2, margin: '0 0 14px 0' }}>
                Where We&apos;re Headed
              </h3>
              <p style={{ fontSize: '20px', fontWeight: 700, color: '#0D47A1', lineHeight: 1.45, margin: 0 }}>
                To become a leading enterprise and business solutions provider that drives performance and business value. We are committed to helping our clients achieve success by providing comprehensive solutions.
              </p>
              <p style={{ fontSize: '16px', fontWeight: 400, color: '#1A1A1A', lineHeight: 1.6, margin: '16px 0 0 0' }}>
                This vision guides every engagement we take on &mdash; from IT infrastructure deployment to responsible e-waste management &mdash; ensuring our clients always have a partner built for the long term.
              </p>
            </div>
          </div>
          <div style={{ maxWidth: 420 }}>
            <div style={{ position: 'relative', paddingTop: '100%', width: '100%', overflow: 'hidden' }}>
              <img
                src="/SomanathShinde.webp"
                alt="Somnath S Shinde, Founder of World Class Solutions"
                className="w-full h-full object-cover"
                style={{ position: 'absolute', inset: 0 }}
              />
            </div>
            <p style={{ fontSize: '16px', fontWeight: 600, color: '#0D47A1', lineHeight: 1.4, textAlign: 'center', margin: '16px 0 0 0' }}>
              Somnath S Shinde
              <div style={{ fontSize: '13px', fontWeight: 500, color: '#1E88E5', marginTop: 4 }}>
                Founder of World Class Solutions
              </div>
            </p>
          </div>
        </div>
      </section>

      {/* Our Motto */}
      <section style={{ backgroundColor: '#ffffff', padding: '0 24px 80px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <p style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#1E88E5', margin: '0 0 10px 0' }}>
            Our Motto
          </p>
          <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 40px)', fontWeight: 700, color: '#0D47A1', lineHeight: 1.15, margin: '0 0 20px 0' }}>
            Way to Excellence
          </h2>
          <p style={{ maxWidth: 900, fontSize: '17px', color: '#1A1A1A', lineHeight: 1.65, margin: '0 0 36px 0' }}>
            &apos;Way to Excellence&apos; is more than a tagline &mdash; it&apos;s the operating principle behind every project we deliver. For World Class Solutions, excellence means combining technical precision with genuine accountability: every IT deployment planned with the same rigor as a mission-critical system, every e-waste consignment handled with the same care as a compliance audit. We measure excellence not by shortcuts avoided, but by outcomes delivered &mdash; on time, within scope, and built to last.
          </p>
          <div className="motto-pillars-grid">
            <article className="motto-pillar-card">
              <h3>Precision in Execution</h3>
              <p>From infrastructure deployment to application development, every engagement follows documented processes, clear milestones, and measurable quality checks.</p>
            </article>
            <article className="motto-pillar-card">
              <h3>Accountability at Every Step</h3>
              <p>Whether it&apos;s a managed IT contract or a certified data destruction job, we stand behind our work with transparent reporting and traceable outcomes.</p>
            </article>
            <article className="motto-pillar-card">
              <h3>Continuous Improvement</h3>
              <p>Technology and environmental standards evolve constantly &mdash; so do we. We invest in new tools, new certifications, and new methods to stay ahead of what our clients need next.</p>
            </article>
          </div>
        </div>
      </section>

      {/* Ewaste Recycling */}
      <section style={{ backgroundColor: '#F7FAFD', padding: '80px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <p style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#1E88E5', margin: '0 0 10px 0' }}>Our Second Division</p>
          <h2 style={{ fontSize: 'clamp(22px, 2.8vw, 30px)', fontWeight: 700, color: '#0D47A1', lineHeight: 1.15, margin: '0 0 24px 0' }}>Ewaste Recycling</h2>
          <div className="about-recycling-card">
            <div style={{ maxWidth: 860 }}>
              <p style={{ fontSize: '17px', color: '#1A1A1A', lineHeight: 1.65, margin: '0 0 16px 0' }}>
                Ewaste Recycling Center Pvt. Ltd is an asset recovery solution provider, managing excess or end-of-life IT assets. Our expertise in process engineering and remarketing directly translates into the recovery of IT asset value for our clients.
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
