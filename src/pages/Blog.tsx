import Hero from '@/components/Hero';

const posts = [
  { title: 'What is E-Waste Recycling?', excerpt: 'The reuse and reprocessing of electrical and electronic equipment discarded or regarded as obsolete.', category: 'E-Waste Basics', imageSrc: '/Blogs/blog-what-is-ewaste.webp', imageAlt: 'What is e-waste recycling' },
  { title: 'Impacts of E-Waste on the Environment', excerpt: 'Waste from electronics ranging from computers and phones to household appliances has a profound environmental impact.', category: 'Environment', imageSrc: '/Blogs/blog-environmental-impact.webp', imageAlt: 'Environmental impact of e-waste' },
  { title: 'Process of E-Waste Recycling', excerpt: 'A step-by-step look at the reuse and reprocessing stages of discarded electrical and electronic equipment.', category: 'Process', imageSrc: '/Blogs/blog-process-ewaste.webp', imageAlt: 'Process of e-waste recycling' },
  { title: 'E-Waste in India and Developed Countries', excerpt: 'A rising global problem in both developing and developed nations, containing material that is both valuable and toxic.', category: 'Global Perspective', imageSrc: '/Blogs/blog-ewaste-india-global.webp', imageAlt: 'E-waste in India and developed countries' },
  { title: 'Types of E-Waste', excerpt: 'Large household appliances (42%), ICT equipment (33.9%), and consumer electronics — understanding the categories.', category: 'E-Waste Types', imageSrc: '/Blogs/blog-types-of-ewaste.webp', imageAlt: 'Types of e-waste' },
  { title: 'Benefits of E-Waste Recycling', excerpt: 'Recycling raw materials from end-of-life electronics is the most effective solution to the growing e-waste problem.', category: 'Benefits', imageSrc: '/Blogs/blog-benefits-recycling.webp', imageAlt: 'Benefits of e-waste recycling' },
  { title: 'Impacts of E-Waste on Health', excerpt: 'Primitive informal recycling methods in developing countries pose serious health risks to workers and communities.', category: 'Health & Safety', imageSrc: '/Blogs/blog-health-impacts.webp', imageAlt: 'Impacts of e-waste on health' },
  { title: 'Where Does Your Electronic Waste Go?', excerpt: 'E-waste contains hazardous chemicals: lead, cadmium, beryllium, mercury, and brominated flame retardants.', category: 'Awareness', imageSrc: '/Blogs/blog-electronic-waste-journey.webp', imageAlt: 'Where does your electronic waste go' },
];

export default function Blog() {
  return (
    <main>
      <Hero title="Blog & Resources" subtitle="Insights on e-waste, sustainability, and IT asset management." />

      <section style={{ backgroundColor: '#ffffff', padding: '80px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <p style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#1E88E5', margin: '0 0 10px 0' }}>Resources</p>
          <h2 style={{ fontSize: 'clamp(22px, 2.8vw, 30px)', fontWeight: 700, color: '#0D47A1', lineHeight: 1.15, margin: '0 0 40px 0' }}>E-Waste &amp; IT Insights</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 24 }}>
            {posts.map(post => (
              <article key={post.title} style={{ backgroundColor: '#ffffff', border: '1px solid #E3F2FD', display: 'flex', flexDirection: 'column' }}>
                <div style={{ position: 'relative', paddingTop: '75%', width: '100%', overflow: 'hidden' }}>
                  <img
                    src={post.imageSrc}
                    alt={post.imageAlt}
                    loading="lazy"
                    className="w-full h-full object-cover rounded-t-xl"
                    style={{ position: 'absolute', inset: 0 }}
                  />
                </div>
                <div style={{ padding: '22px 24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#1E88E5', marginBottom: 8, display: 'block' }}>{post.category}</span>
                  <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#0D47A1', margin: '0 0 10px 0', lineHeight: 1.25 }}>{post.title}</h3>
                  <p style={{ fontSize: '14px', color: '#1A1A1A', lineHeight: 1.6, margin: 0, flex: 1 }}>{post.excerpt}</p>
                  <button style={{ marginTop: 16, display: 'inline-flex', alignItems: 'center', gap: 5, fontSize: '14px', fontWeight: 600, color: '#1E88E5', background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}>
                    Read More
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* E-Waste Guide highlight */}
      <section style={{ backgroundColor: '#F7FAFD', padding: '80px 24px' }}>
        <div style={{ maxWidth: 760, margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#1E88E5', margin: '0 0 10px 0' }}>Free Resource</p>
          <h2 style={{ fontSize: 'clamp(22px, 2.8vw, 30px)', fontWeight: 700, color: '#0D47A1', lineHeight: 1.15, margin: '0 0 16px 0' }}>The Complete E-Waste Guide</h2>
          <p style={{ fontSize: '17px', color: '#1A1A1A', lineHeight: 1.65, margin: '0 0 28px 0' }}>
            Everything you need to know about e-waste — types, environmental impact, health risks, the recycling process, and how to responsibly dispose of your organization&apos;s IT assets.
          </p>
          <button
            style={{ fontSize: '15px', fontWeight: 600, color: '#ffffff', backgroundColor: '#0D47A1', border: 'none', padding: '12px 32px', cursor: 'pointer' }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#0A3880')}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#0D47A1')}
          >
            Download Guide
          </button>
        </div>
      </section>
    </main>
  );
}
