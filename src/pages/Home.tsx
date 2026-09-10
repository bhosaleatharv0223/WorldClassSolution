import { useEffect, useRef, useState } from 'react';
import Hero from '@/components/Hero';
import ClientLogoGrid from '@/components/ClientLogoGrid';

type Page = 'home' | 'about' | 'it-services' | 'e-waste' | 'blog' | 'clients' | 'contact';

interface HomeProps {
  readonly onNavigate: (page: Page) => void;
}

const whyUs = [
  { title: 'Our Credibility', body: 'In this industry for over 29 years, shaping up to be a leading service provider online and offline.' },
  { title: 'Our Creativity', body: 'Constantly embracing change; new internet and technology updates implemented to every client\'s advantage.' },
  { title: 'Our Reliability', body: 'Staffed with competent professionals who certainly know what they are doing and translate business goals into reality.' },
  { title: 'Our Capability', body: 'Bright e-marketing ideas backed up by advanced technology and the right tools to make them happen.' },
  { title: 'Our Adaptability', body: 'Never resting on past success; we constantly keep pace, believing our energy drives performance.' },
];

const marqueeServices = [
  { label: 'Infrastructure Services', page: 'it-services' as Page },
  { label: 'Application Development', page: 'it-services' as Page },
  { label: 'Professional Consultancy', page: 'it-services' as Page },
  { label: 'Website Design', page: 'it-services' as Page },
  { label: 'Data Centre Designing', page: 'it-services' as Page },
  { label: 'High Performance Computing', page: 'it-services' as Page },
  { label: 'E-Waste Recycling', page: 'e-waste' as Page },
  { label: 'Reverse Logistics', page: 'e-waste' as Page },
  { label: 'Data Destruction', page: 'e-waste' as Page },
  { label: 'Asset Management', page: 'e-waste' as Page },
  { label: 'EPR & E-Waste Management', page: 'e-waste' as Page },
];

const stats = [
  { value: 29, suffix: '+', label: 'Years Experience' },
  { value: 500, suffix: '+', label: 'Projects Delivered' },
  { value: 14, suffix: '+', label: 'Enterprise Clients' },
  { value: 2, suffix: '', label: 'Business Divisions' },
];

function StatCard({ value, suffix, label, animate }: (typeof stats)[number] & { animate: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!animate) return;

    const duration = 1800;
    const startTime = performance.now();
    let frameId = 0;

    const updateCount = (currentTime: number) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(value * easedProgress));

      if (progress < 1) {
        frameId = requestAnimationFrame(updateCount);
      }
    };

    frameId = requestAnimationFrame(updateCount);
    return () => cancelAnimationFrame(frameId);
  }, [animate, value]);

  return (
    <div className="about-stat-card">
      <div style={{ fontSize: '36px', fontWeight: 700, color: '#0D47A1', lineHeight: 1 }}>{count}{count === value ? suffix : ''}</div>
      <div style={{ fontSize: '13px', color: '#5F6368', marginTop: 6, fontWeight: 500 }}>{label}</div>
    </div>
  );
}

const sectionHead = (eyebrow: string, title: string) => (
  <div style={{ marginBottom: 48 }}>
    <p style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#1E88E5', margin: '0 0 10px 0' }}>{eyebrow}</p>
    <h2 style={{ fontSize: 'clamp(24px, 3vw, 34px)', fontWeight: 700, color: '#0D47A1', lineHeight: 1.15, margin: 0 }}>{title}</h2>
  </div>
);

export default function Home({ onNavigate }: HomeProps) {
  const nav = (page: Page) => { onNavigate(page); window.scrollTo(0, 0); };
  const statsRef = useRef<HTMLDivElement>(null);
  const whyUsRef = useRef<HTMLElement>(null);
  const marqueeTrackRef = useRef<HTMLDivElement>(null);
  const dragStateRef = useRef({ active: false, startX: 0, startTransform: 0 });
  const resumeTimeoutRef = useRef<number | null>(null);
  const [statsVisible, setStatsVisible] = useState(false);
  const [whyUsVisible, setWhyUsVisible] = useState(false);

  useEffect(() => {
    const statsElement = statsRef.current;
    if (!statsElement) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setStatsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.25 });

    observer.observe(statsElement);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const whyUsElement = whyUsRef.current;
    if (!whyUsElement) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setWhyUsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.2 });

    observer.observe(whyUsElement);
    return () => observer.disconnect();
  }, []);

  useEffect(() => () => {
    if (resumeTimeoutRef.current !== null) window.clearTimeout(resumeTimeoutRef.current);
  }, []);

  const getMarqueeTransform = (track: HTMLDivElement) => {
    const transform = window.getComputedStyle(track).transform;
    if (transform === 'none') return 0;
    const values = transform.match(/matrix3?d?\(([^)]+)\)/)?.[1].split(',').map(Number);
    return values?.length === 16 ? values[12] : values?.[4] ?? 0;
  };

  const handleMarqueePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    const track = marqueeTrackRef.current;
    if (!track) return;
    if (resumeTimeoutRef.current !== null) window.clearTimeout(resumeTimeoutRef.current);
    dragStateRef.current = { active: true, startX: event.clientX, startTransform: getMarqueeTransform(track) };
    track.style.animationPlayState = 'paused';
    track.setPointerCapture(event.pointerId);
  };

  const handleMarqueePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const track = marqueeTrackRef.current;
    const dragState = dragStateRef.current;
    if (!track || !dragState.active) return;
    track.style.transform = `translate3d(${dragState.startTransform + event.clientX - dragState.startX}px, 0, 0)`;
  };

  const handleMarqueePointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    const track = marqueeTrackRef.current;
    if (!track) return;
    dragStateRef.current.active = false;
    track.releasePointerCapture(event.pointerId);
    resumeTimeoutRef.current = window.setTimeout(() => {
      track.style.transform = '';
      track.style.animationPlayState = 'running';
    }, 2500);
  };

  const renderMarqueeSet = (hidden = false) => (
    <div className="service-marquee-set" aria-hidden={hidden}>
      {marqueeServices.map(service => (
        <button
          key={`${hidden ? 'duplicate-' : ''}${service.label}`}
          type="button"
          tabIndex={hidden ? -1 : undefined}
          onClick={hidden ? undefined : () => nav(service.page)}
          className="service-marquee-pill"
          onMouseEnter={event => { event.currentTarget.style.backgroundColor = '#1E88E5'; event.currentTarget.style.color = '#ffffff'; }}
          onMouseLeave={event => { event.currentTarget.style.backgroundColor = 'transparent'; event.currentTarget.style.color = '#1E88E5'; }}
        >
          {service.label}
        </button>
      ))}
    </div>
  );

  return (
    <main>
      <Hero isHome title="" onContactClick={() => nav('contact')} />

      {/* Service marquee */}
      <div className="service-marquee-container">
        <div
          ref={marqueeTrackRef}
          className="service-marquee-track"
          onPointerDown={handleMarqueePointerDown}
          onPointerMove={handleMarqueePointerMove}
          onPointerUp={handleMarqueePointerUp}
          onPointerCancel={handleMarqueePointerUp}
        >
          {renderMarqueeSet()}
          {renderMarqueeSet(true)}
        </div>
      </div>

      {/* About snippet */}
      <section style={{ backgroundColor: '#ffffff', padding: '80px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 56, alignItems: 'center' }}>
          <div>
            <p style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#1E88E5', margin: '0 0 10px 0' }}>About WCS</p>
            <h2 style={{ fontSize: 'clamp(22px, 2.8vw, 32px)', fontWeight: 700, color: '#0D47A1', lineHeight: 1.15, margin: '0 0 20px 0' }}>
              29 Years of Domain Expertise
            </h2>
            <p style={{ fontSize: '17px', color: '#1A1A1A', lineHeight: 1.6, margin: '0 0 16px 0' }}>
              World Class Solutions (WCS) is an IT services organization providing IT services, consulting and business solutions, adding real value to global organizations through domain expertise and world-class service.
            </p>
            <p style={{ fontSize: '17px', color: '#1A1A1A', lineHeight: 1.6, margin: '0 0 28px 0' }}>
              WCS places innovation, cost-effectiveness, timeliness and energy efficiency at the heart of its business, working toward complete customer satisfaction.
            </p>
              <p style={{ fontSize: '15px', color: '#1565C0', lineHeight: 1.6, margin: '0 0 24px 0', fontWeight: 600 }}>
                Our Green IT Recycling division brings 11+ years of IT asset management experience.
              </p>
            <button
              onClick={() => nav('about')}
              style={{ fontSize: '14px', fontWeight: 600, color: '#0D47A1', border: '2px solid #0D47A1', background: 'none', padding: '10px 24px', cursor: 'pointer' }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#0D47A1'; e.currentTarget.style.color = '#fff'; }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#0D47A1'; }}
            >
              Learn More About Us
            </button>
          </div>
          <div ref={statsRef} className="about-stats-grid">
            {stats.map(stat => (
              <StatCard key={stat.label} {...stat} animate={statsVisible} />
            ))}
          </div>
        </div>
      </section>

      {/* Two-division overview */}
      <section style={{ backgroundColor: '#F7FAFD', padding: '80px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          {sectionHead('Our Divisions', 'Two Specialised Business Units')}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
            {[
              {
                label: 'IT SERVICES',
                title: 'World Class Solutions',
                body: 'End-to-end IT services, consulting and business solutions — infrastructure, application development, and professional consultancy — for enterprises across India.',
                cta: 'Explore IT Services',
                page: 'it-services' as Page,
              },
              {
                label: 'E-WASTE & RECYCLING',
                title: 'Green IT Recycling',
                body: 'Responsible asset recovery and e-waste management — WEEE recycling, data destruction, reverse logistics, and EPR compliance — for organizations nationwide.',
                cta: 'Explore Recycling Services',
                page: 'e-waste' as Page,
              },
            ].map(d => (
              <div key={d.label} style={{ backgroundColor: '#ffffff', border: '1px solid #E3F2FD', padding: '36px 32px' }}>
                <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#1E88E5' }}>{d.label}</span>
                <h3 style={{ fontSize: '22px', fontWeight: 700, color: '#0D47A1', margin: '12px 0 14px 0' }}>{d.title}</h3>
                <p style={{ fontSize: '16px', color: '#1A1A1A', lineHeight: 1.6, margin: '0 0 24px 0' }}>{d.body}</p>
                <button
                  onClick={() => nav(d.page)}
                  style={{ fontSize: '14px', fontWeight: 600, color: '#1E88E5', background: 'none', border: 'none', padding: 0, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 6 }}
                >
                  {d.cta}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section ref={whyUsRef} className={`why-us-section${whyUsVisible ? ' is-visible' : ''}`} style={{ backgroundColor: '#ffffff', padding: '80px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div className="why-us-heading" style={{ marginBottom: 48 }}>
            <p style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#1E88E5', margin: '0 0 10px 0' }}>Why Choose WCS</p>
            <h2 style={{ fontSize: 'clamp(24px, 3vw, 34px)', fontWeight: 700, color: '#0D47A1', lineHeight: 1.15, margin: 0 }}>What Sets Us Apart</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 24 }}>
            {whyUs.map((item, index) => (
              <div key={item.title} className="why-us-card" style={{ transitionDelay: `${index * 90}ms`, backgroundColor: '#F7FAFD', padding: '28px 24px', border: '1px solid #E3F2FD' }}>
                <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#0D47A1', margin: '0 0 10px 0' }}>{item.title}</h3>
                <p style={{ fontSize: '15px', color: '#1A1A1A', lineHeight: 1.6, margin: 0 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client logos */}
      <section style={{ backgroundColor: '#F7FAFD', padding: '72px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          {sectionHead('Our Clients', 'Trusted by Industry Leaders')}
          <ClientLogoGrid />
          <div style={{ marginTop: 32 }}>
            <button
              onClick={() => nav('clients')}
              style={{ fontSize: '14px', fontWeight: 600, color: '#1E88E5', background: 'none', border: 'none', padding: 0, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 6 }}
            >
              View All Clients
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
            </button>
          </div>
        </div>
      </section>

      {/* Footer CTA band */}
      <section style={{ backgroundColor: '#0A2540', padding: '64px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: 700, color: '#ffffff', margin: '0 0 16px 0', lineHeight: 1.2 }}>
            Ready to work with us?
          </h2>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.7)', margin: '0 0 32px 0', lineHeight: 1.6 }}>
            Let us help you achieve your business goals with world-class IT solutions and sustainable technology services.
          </p>
          <button
            onClick={() => nav('contact')}
            style={{ fontSize: '15px', fontWeight: 600, color: '#0D47A1', backgroundColor: '#ffffff', border: 'none', padding: '13px 36px', cursor: 'pointer' }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#E3F2FD')}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#ffffff')}
          >
            Contact Us
          </button>
        </div>
      </section>
    </main>
  );
}
