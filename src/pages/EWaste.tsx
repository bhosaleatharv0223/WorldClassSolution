import Hero from '@/components/Hero';
import ResponsiveBanner from '@/components/ResponsiveBanner';

const services = [
  {
    heading: 'WEEE Recycling',
    eyebrow: 'E-Waste',
    body: 'Ewaste Recycling provides safe and secure electronic waste disposal and recycling services (WEEE Recycling) for industries throughout India, strictly adhering to government regulations and international standards.',
    imageSrc: '/EWasteSolution/WEE.webp',
    imageAlt: 'WEEE recycling and electronic waste sorting',
    extra: 'Plant: D-222, MIDC Ranjangaon, District Pune, Maharashtra, 412220 | Toll-Free: 1800-2700-600',
  },
  {
    heading: 'Reverse Logistics',
    eyebrow: 'Logistics',
    body: 'PAN India pickup via tie-up with Gati KWE Logistics — covering return, exchange, repair, refurbishment, remarketing and disposition from the point of consumption to the point of origin.',
    imageSrc: '/EWasteSolution/ReverseLogistics.webp',
    imageAlt: 'Reverse logistics and PAN India pickup for returned equipment',
  },
  {
    heading: 'Data Destruction',
    eyebrow: 'Data Security',
    body: 'Three certified methods: Degaussing (zeroes magnetization, data unrecoverable), Physical destruction (shredding), and Electronic Data Wiping (certified erasure software for SAS/SATA/SSD/tape with tamper-proof report).',
    imageSrc: '/EWasteSolution/DATADESTRUCTION.webp',
    imageAlt: 'Secure data destruction of hard drives and storage media',
  },
  {
    heading: 'Asset Management',
    eyebrow: 'Asset Recovery',
    body: 'Extract value from older, out-of-date computers, printers, scanners and copiers sitting idle in storage. We assess, refurbish, remarket or responsibly dispose of your end-of-life IT assets.',
    imageSrc: '/EWasteSolution/itasset.webp',
    imageAlt: 'IT asset recovery and inventory management',
  },
  {
    heading: 'EPR & E-Waste Management',
    eyebrow: 'Compliance',
    body: 'A transparent operating model for bulk producers of electric and electronic equipment to meet Extended Producer Responsibility (EPR) targets within a specified timeframe, in full compliance with regulations.',
    imageSrc: '/EWasteSolution/Epr.webp',
    imageAlt: 'EPR compliance and e-waste management oversight',
  },
];
const threeRs = [
  {
    head: 'Reuse',
    body: 'Donation to schools and NGOs, supplying parts to service centers, or reselling products. We sort used IT products for reuse, extending their lifecycle and reducing waste.',
  },
  {
    head: 'Reduce',
    body: 'Refurbishment, power-saving options, "E-Office," and repairing non-working computers using old working parts — reducing the volume of new equipment needed.',
  },
  {
    head: 'Recycle',
    body: 'Disassembly and segregation of IT products to reclaim base metals and hazardous materials — including leaded CRT glass, mercury bulbs, ink cartridges, PCBs, and ferrous metals.',
  },
];
export default function EWaste() {
  return (
    <main>
      <Hero title="E-Waste Recycling" subtitle="Responsible IT asset recovery and environmental disposal across India." />

      {/* Page intro banner */}
      <section style={{ backgroundColor: '#ffffff', padding: '64px 24px 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <ResponsiveBanner
            desktopSrc="/EWasteSolution/EwasteRecyclingDesktop.webp"
            mobileSrc="/EWasteSolution/EWasteRecyclingMobile.webp"
            alt="E-waste recycling plant and WEEE processing"
          />
        </div>
      </section>

      {/* Intro */}
      <section style={{ backgroundColor: '#ffffff', padding: '64px 24px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <p style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#1E88E5', margin: '0 0 10px 0' }}>Ewaste Recycling</p>
          <h2 style={{ fontSize: 'clamp(22px, 2.8vw, 30px)', fontWeight: 700, color: '#0D47A1', lineHeight: 1.15, margin: '0 0 20px 0' }}>Responsible IT Asset Disposal</h2>
          <p style={{ fontSize: '17px', color: '#1A1A1A', lineHeight: 1.65, margin: '0 0 16px 0' }}>
            The scope of services to effectively deal with a customer&apos;s demand for disposing of retiring IT assets can vary depending on many factors, from logistics to recycling services. As per customer demand, we render services following the norms of environmental laws.
          </p>
          <p style={{ fontSize: '17px', color: '#1A1A1A', lineHeight: 1.65, margin: 0 }}>
            As a registered recycler under the Maharashtra Pollution Control Board (M.P.C.B) and registered under Maharashtra Special Economic Zone (S.E.Z), we uphold the highest standards of environmental compliance.
          </p>
        </div>
      </section>

      {/* Service cards */}
      <section style={{ backgroundColor: '#F7FAFD', padding: '80px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <p style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#1E88E5', margin: '0 0 10px 0' }}>Our Services</p>
          <h2 style={{ fontSize: 'clamp(22px, 2.8vw, 30px)', fontWeight: 700, color: '#0D47A1', lineHeight: 1.15, margin: '0 0 40px 0' }}>Recycling &amp; Recovery Services</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 24 }}>
            {services.map(s => (
              <div key={s.heading} style={{ backgroundColor: '#ffffff', border: '1px solid #E3F2FD', display: 'flex', flexDirection: 'column' }}>
                <div style={{ position: 'relative', paddingTop: '75%', width: '100%', overflow: 'hidden' }}>
                  <img
                    src={s.imageSrc}
                    alt={s.imageAlt}
                    loading="lazy"
                    className="w-full h-full object-cover rounded-t-xl"
                    style={{ position: 'absolute', inset: 0 }}
                  />
                </div>
                <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#1E88E5', marginBottom: 8, display: 'block' }}>{s.eyebrow}</span>
                  <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#0D47A1', margin: '0 0 10px 0', lineHeight: 1.2 }}>{s.heading}</h3>
                  <p style={{ fontSize: '15px', color: '#1A1A1A', lineHeight: 1.6, margin: 0, flex: 1 }}>{s.body}</p>
                  {s.extra && <p style={{ fontSize: '13px', color: '#5F6368', marginTop: 10, lineHeight: 1.5 }}>{s.extra}</p>}
                  <button style={{ marginTop: 16, display: 'inline-flex', alignItems: 'center', gap: 5, fontSize: '14px', fontWeight: 600, color: '#1E88E5', background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}>
                    Read More
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works — The 3Rs */}
      <section style={{ backgroundColor: '#ffffff', padding: '80px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <p style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#1E88E5', margin: '0 0 10px 0' }}>Our Process</p>
          <h2 style={{ fontSize: 'clamp(22px, 2.8vw, 30px)', fontWeight: 700, color: '#0D47A1', lineHeight: 1.15, margin: '0 0 40px 0' }}>How It Works — The 3R&apos;s</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24 }}>
            {threeRs.map((item, i) => (
              <div key={item.head} style={{ backgroundColor: '#F7FAFD', border: '1px solid #E3F2FD', padding: '36px 28px' }}>
                <div style={{ fontSize: '40px', fontWeight: 700, color: '#E3F2FD', lineHeight: 1, marginBottom: 12, fontVariantNumeric: 'tabular-nums' }}>{String(i + 1).padStart(2, '0')}</div>
                <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#0D47A1', margin: '0 0 12px 0' }}>{item.head}</h3>
                <p style={{ fontSize: '15px', color: '#1A1A1A', lineHeight: 1.65, margin: 0 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance band */}
      <section style={{ backgroundColor: '#E3F2FD', padding: '48px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', gap: 48, flexWrap: 'wrap', justifyContent: 'center' }}>
          {[
            { label: 'Maharashtra PCB', desc: 'Registered Recycler under Maharashtra Pollution Control Board' },
            { label: 'Maharashtra SEZ', desc: 'Registered under Maharashtra Special Economic Zone' },
            { label: 'PAN India', desc: 'Nationwide pickup and logistics via Gati KWE Logistics partnership' },
          ].map(item => (
            <div key={item.label} style={{ textAlign: 'center', maxWidth: 240 }}>
              <div style={{ fontSize: '13px', fontWeight: 700, color: '#0D47A1', marginBottom: 6, letterSpacing: '0.04em', textTransform: 'uppercase' }}>{item.label}</div>
              <div style={{ fontSize: '14px', color: '#5F6368', lineHeight: 1.5 }}>{item.desc}</div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
