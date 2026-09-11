import { useState, useEffect, useRef } from 'react';

type Page = 'home' | 'about' | 'it-services' | 'e-waste' | 'blog' | 'clients' | 'contact';

interface MegaNavProps {
  activePage: Page;
  onNavigate: (page: Page) => void;
}

const whatWeDo = {
  'IT SERVICES': [
    { label: 'Infrastructure Services', page: 'it-services' as Page },
    { label: 'Application Development Services', page: 'it-services' as Page },
    { label: 'Professional Consultancy Services', page: 'it-services' as Page },
    { label: 'Website Design', page: 'it-services' as Page },
    { label: 'Customized Data Centre Designing', page: 'it-services' as Page },
    { label: 'High Performance Computing (HPC)', page: 'it-services' as Page },
  ],
  'E-WASTE & RECYCLING': [
    { label: 'WEEE Recycling', page: 'e-waste' as Page },
    { label: 'Reverse Logistics', page: 'e-waste' as Page },
    { label: 'Data Destruction', page: 'e-waste' as Page },
    { label: 'Asset Management', page: 'e-waste' as Page },
    { label: 'EPR & E-Waste Management', page: 'e-waste' as Page },
  ],
};

const whoWeAre = [
  { label: 'About Us', page: 'about' as Page },
  { label: 'Vision, Mission & Values', page: 'about' as Page },
  { label: 'How It Works (3Rs)', page: 'e-waste' as Page },
  { label: 'Clients', page: 'clients' as Page },
];

const resources = [
  { label: 'Blog', page: 'blog' as Page },
  { label: 'E-Waste Guide', page: 'blog' as Page },
];

export default function MegaNav({ activePage, onNavigate }: MegaNavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
      }
    };
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, []);

  const handleNav = (page: Page) => {
    onNavigate(page);
    setOpenMenu(null);
    setMobileOpen(false);
    setMobileExpanded(null);
    window.scrollTo(0, 0);
  };

  const navLinkStyle = (active: boolean): React.CSSProperties => ({
    fontSize: '14px',
    fontWeight: 500,
    color: active ? '#0D47A1' : '#1A1A1A',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '8px 4px',
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    borderBottom: active ? '2px solid #1E88E5' : '2px solid transparent',
    whiteSpace: 'nowrap',
  });

  return (
    <nav
      ref={navRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        overflow: 'visible',
        background: 'linear-gradient(to bottom, #ffffff 0, #ffffff 76px, transparent 76px)',
        boxShadow: scrolled ? '0 1px 8px rgba(13,71,161,0.10)' : '0 1px 0 #e8eef4',
        transition: 'box-shadow 200ms',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', height: 76, gap: 32 }}>
        <button onClick={() => handleNav('home')} style={{ background: 'transparent', border: 'none', boxShadow: 'none', cursor: 'pointer', padding: 0, marginRight: 16, flexShrink: 0, overflow: 'hidden', height: 76 }}>
          <img className="header-logo" src="/WorldClasssolution%20logo.png" alt="World Class Solutions" />
        </button>

        {/* Desktop nav */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 24, flex: 1, justifyContent: 'flex-end' }} className="desktop-nav">
          <button
            onClick={() => handleNav('home')}
            style={navLinkStyle(activePage === 'home')}
            aria-current={activePage === 'home' ? 'page' : undefined}
          >
            Home
          </button>

          {/* What We Do */}
          <div style={{ position: 'relative' }}>
            <button
              style={navLinkStyle(activePage === 'it-services' || activePage === 'e-waste')}
              onClick={() => setOpenMenu(openMenu === 'what' ? null : 'what')}
            >
              What We Do
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            {openMenu === 'what' && (
              <div className="dropdown-enter" style={{ position: 'absolute', top: 'calc(100% + 8px)', left: 0, backgroundColor: '#fff', boxShadow: '0 8px 32px rgba(13,71,161,0.12)', minWidth: 520, zIndex: 200, border: '1px solid #E3F2FD', display: 'flex', gap: 0 }}>
                {Object.entries(whatWeDo).map(([col, items]) => (
                  <div key={col} style={{ flex: 1, padding: '20px 24px', borderRight: col === 'IT SERVICES' ? '1px solid #E3F2FD' : 'none' }}>
                    <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#1E88E5', marginBottom: 12 }}>{col}</div>
                    {items.map((item) => (
                      <button
                        key={item.label}
                        onClick={() => handleNav(item.page)}
                        style={{ display: 'block', width: '100%', textAlign: 'left', background: 'none', border: 'none', padding: '6px 0', fontSize: '14px', color: '#1A1A1A', cursor: 'pointer', lineHeight: 1.4 }}
                        onMouseEnter={e => (e.currentTarget.style.color = '#1E88E5')}
                        onMouseLeave={e => (e.currentTarget.style.color = '#1A1A1A')}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Who We Are */}
          <div style={{ position: 'relative' }}>
            <button
              style={navLinkStyle(activePage === 'about' || activePage === 'clients')}
              onClick={() => setOpenMenu(openMenu === 'who' ? null : 'who')}
            >
              Who We Are
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            {openMenu === 'who' && (
              <div className="dropdown-enter" style={{ position: 'absolute', top: 'calc(100% + 8px)', left: 0, backgroundColor: '#fff', boxShadow: '0 8px 32px rgba(13,71,161,0.12)', minWidth: 220, zIndex: 200, border: '1px solid #E3F2FD' }}>
                <div style={{ padding: '12px 0' }}>
                  {whoWeAre.map((item) => (
                    <button
                      key={item.label}
                      onClick={() => handleNav(item.page)}
                      style={{ display: 'block', width: '100%', textAlign: 'left', background: 'none', border: 'none', padding: '8px 20px', fontSize: '14px', color: '#1A1A1A', cursor: 'pointer' }}
                      onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#F7FAFD')}
                      onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Resources */}
          <div style={{ position: 'relative' }}>
            <button
              style={navLinkStyle(activePage === 'blog')}
              onClick={() => setOpenMenu(openMenu === 'res' ? null : 'res')}
            >
              Resources
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            {openMenu === 'res' && (
              <div className="dropdown-enter" style={{ position: 'absolute', top: 'calc(100% + 8px)', left: 0, backgroundColor: '#fff', boxShadow: '0 8px 32px rgba(13,71,161,0.12)', minWidth: 200, zIndex: 200, border: '1px solid #E3F2FD' }}>
                <div style={{ padding: '12px 0' }}>
                  {resources.map((item) => (
                    <button
                      key={item.label}
                      onClick={() => handleNav(item.page)}
                      style={{ display: 'block', width: '100%', textAlign: 'left', background: 'none', border: 'none', padding: '8px 20px', fontSize: '14px', color: '#1A1A1A', cursor: 'pointer' }}
                      onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#F7FAFD')}
                      onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <button
            onClick={() => handleNav('contact')}
            style={{ fontSize: '14px', fontWeight: 600, color: '#ffffff', backgroundColor: '#0D47A1', border: 'none', padding: '9px 20px', cursor: 'pointer', letterSpacing: '0.01em', whiteSpace: 'nowrap' }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#0A3880')}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#0D47A1')}
          >
            Contact Us
          </button>

          {/* Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: 4 }}
            className="hamburger"
            aria-label="Menu"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round">
              {mobileOpen ? <><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></> : <><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></>}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="mobile-menu" style={{ backgroundColor: '#fff', borderTop: '1px solid #E3F2FD', padding: '12px 0 20px' }}>
          <button
            onClick={() => handleNav('home')}
            style={{ width: '100%', textAlign: 'left', background: activePage === 'home' ? '#F7FAFD' : 'none', border: 'none', borderLeft: activePage === 'home' ? '3px solid #1E88E5' : '3px solid transparent', padding: '13px 24px', fontSize: '15px', fontWeight: 600, color: '#0D47A1', cursor: 'pointer' }}
            aria-current={activePage === 'home' ? 'page' : undefined}
          >
            Home
          </button>
          {[
            { key: 'what', label: 'What We Do', items: [...whatWeDo['IT SERVICES'], ...whatWeDo['E-WASTE & RECYCLING']] },
            { key: 'who', label: 'Who We Are', items: whoWeAre },
            { key: 'res', label: 'Resources', items: resources },
          ].map(group => (
            <div key={group.key}>
              <button
                onClick={() => setMobileExpanded(mobileExpanded === group.key ? null : group.key)}
                style={{ width: '100%', textAlign: 'left', background: 'none', border: 'none', padding: '12px 24px', fontSize: '15px', fontWeight: 600, color: '#0D47A1', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
              >
                {group.label}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <polyline points={mobileExpanded === group.key ? '18 15 12 9 6 15' : '6 9 12 15 18 9'} />
                </svg>
              </button>
              {mobileExpanded === group.key && (
                <div style={{ paddingLeft: 24, paddingBottom: 8 }}>
                  {group.items.map(item => (
                    <button
                      key={item.label}
                      onClick={() => handleNav(item.page)}
                      style={{ display: 'block', background: 'none', border: 'none', padding: '8px 0', fontSize: '14px', color: '#1A1A1A', cursor: 'pointer', textAlign: 'left' }}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div style={{ padding: '12px 24px 0' }}>
            <button
              onClick={() => handleNav('contact')}
              style={{ fontSize: '14px', fontWeight: 600, color: '#ffffff', backgroundColor: '#0D47A1', border: 'none', padding: '10px 24px', cursor: 'pointer', width: '100%' }}
            >
              Contact Us
            </button>
          </div>
        </div>
      )}

      <style>{`
        .header-logo {
          height: 68px;
          max-height: 76px;
          width: auto;
          margin: 0;
          background: transparent;
          border: none;
          box-shadow: none;
          display: block;
          object-fit: contain;
          mix-blend-mode: multiply;
        }

        @media (max-width: 768px) {
          .desktop-nav { gap: 0 !important; }
          .desktop-nav > *:not(.hamburger) { display: none !important; }
          .hamburger { display: flex !important; }
          .mobile-menu { max-height: calc(100vh - 76px); overflow-y: auto; box-shadow: 0 10px 24px rgba(13,71,161,0.12); }
        }

        @media (max-width: 420px) {
          .header-logo { height: 58px; max-width: 220px; }
        }
      `}</style>
    </nav>
  );
}
