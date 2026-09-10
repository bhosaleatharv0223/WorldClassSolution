import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import ResponsiveBanner from '@/components/ResponsiveBanner';

const services = [
  { heading: 'Infrastructure Services', body: 'End-to-end IT infrastructure deployment, management, and support — from on-site services to AMC for LAN, WAN, computers and peripherals.', desktopImageSrc: '/Services/itinfrastructure.webp', mobileImageSrc: '/Services/itinfrastructure-mobile.webp', imageAlt: 'IT infrastructure deployment and management' },
  { heading: 'Application Development Services', body: 'Web design, application development, web applications, support and maintenance, and testing — flexible solutions for your business needs.', desktopImageSrc: '/Services/Application Development Services.webp', mobileImageSrc: '/Services/application develoment service-mobile.webp', imageAlt: 'Application development and web design services' },
  { heading: 'Professional Consultancy Services', body: 'Expert consultants who know exactly what to do to improve your business process and IT requirements, regardless of industry.', desktopImageSrc: '/Services/ConsultancyServices.webp', mobileImageSrc: '/Services/Consultancyservices-mobile.webp', imageAlt: 'Professional IT consultancy services' },
  { heading: 'Website Design', body: 'Professional, responsive website design and maintenance services — built to represent your brand and deliver measurable results.', desktopImageSrc: '/Services/Websitedesign.webp', mobileImageSrc: '/Services/WebsiteDesign-mobile.webp', imageAlt: 'Responsive website design services' },
  { heading: 'Customized Data Centre Designing', body: 'Bespoke data centre design and build — from floor planning to power management — optimized for your workload requirements.', desktopImageSrc: '/Services/DataCentre.webp', mobileImageSrc: '/Services/DataCentre-mobile.webp', imageAlt: 'Custom data centre design and build' },
  { heading: 'High Performance Computing (HPC)', body: 'High-performance computing products and solutions delivering the computational power your business needs to stay competitive.', desktopImageSrc: '/Services/HighPerfomanceComputingInfrastructure.webp', mobileImageSrc: '/Services/HighPerfomanceComputingInfrastructure-mobile.webp', imageAlt: 'High performance computing infrastructure' },
];

const infraDetails = [
  { head: 'Technology Deployment', body: 'Successful IT hardware and software deployments require logistical skill and geographic coverage to ensure the right people are in the right place at the right time. IT leaders must plan and partner with the appropriate experts to manage complex technology deployment needs, while minimizing costs and operational disruptions.' },
  { head: 'Managed IT Services', body: 'The need to get work done better, faster and more cost-effectively is ever present in business. While assembling strong teams of qualified experts remains critical to driving successful IT outcomes, IT leaders today must also consider ways to optimize the structure of IT strategy and operations.' },
  { head: 'Outsourced IT Support Services', body: 'IT support teams are strategic assets that can reduce overall IT costs and significantly improve end-user productivity. To maximize the value of their IT support function, leaders must implement strategies to address workforce attrition, knowledge management, scalability and customer satisfaction.' },
];

const appDevServices = ['Web Design & Maintenance', 'Application Development', 'Web Applications Development', 'Application Support & Maintenance', 'Application Testing'];
const technologies = ['.NET (ASP.NET, C#, VB.NET, WebServices)', 'ASP', 'HTML', 'DHTML', 'PHP', 'CGI', 'JavaScript', 'VBScript', 'Java', 'JSP', 'WebSphere', 'Oracle', 'SQL Server'];

export default function ITServices() {
  return (
    <main>
      <Hero title="IT Services" subtitle="Simplify and streamline your IT environment for operational excellence." />

      {/* Page intro banner image */}
      <section style={{ backgroundColor: '#ffffff', padding: '64px 24px 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <ResponsiveBanner
            desktopSrc="/itservices.webp"
            mobileSrc="/itservices1.webp"
            alt="IT services team working on enterprise infrastructure"
          />
        </div>
      </section>

      {/* Intro */}
      <section style={{ backgroundColor: '#ffffff', padding: '64px 24px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <p style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#1E88E5', margin: '0 0 10px 0' }}>Our IT Services</p>
          <h2 style={{ fontSize: 'clamp(22px, 2.8vw, 30px)', fontWeight: 700, color: '#0D47A1', lineHeight: 1.15, margin: '0 0 20px 0' }}>Built Around Your Business Goals</h2>
          <p style={{ fontSize: '17px', color: '#1A1A1A', lineHeight: 1.65, margin: '0 0 16px 0' }}>
            We work behind the scenes to help our clients achieve their business goals by delivering services that simplify and streamline your IT environment for operational excellence.
          </p>
          <p style={{ fontSize: '17px', color: '#1A1A1A', lineHeight: 1.65, margin: 0 }}>
            Our consultants know exactly what to do to improve your business process and requirements. Regardless of industry, we offer flexible, suitable solutions to meet your service challenges. Our broad portfolio of services can help turn your business challenge into a competitive success.
          </p>
        </div>
      </section>
      {/* Service cards grid */}
      <section style={{ backgroundColor: '#F7FAFD', padding: '80px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <p style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#1E88E5', margin: '0 0 10px 0' }}>What We Offer</p>
          <h2 style={{ fontSize: 'clamp(22px, 2.8vw, 30px)', fontWeight: 700, color: '#0D47A1', lineHeight: 1.15, margin: '0 0 40px 0' }}>Our Services</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 24 }}>
            {services.map(s => (
              <ServiceCard key={s.heading} heading={s.heading} body={s.body} desktopImageSrc={s.desktopImageSrc} mobileImageSrc={s.mobileImageSrc} imageAlt={s.imageAlt} eyebrow="IT Services" />
            ))}
          </div>
        </div>
      </section>
      {/* Infrastructure detail */}
      <section style={{ backgroundColor: '#ffffff', padding: '80px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <p style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#1E88E5', margin: '0 0 10px 0' }}>Deep Dive</p>
          <h2 style={{ fontSize: 'clamp(22px, 2.8vw, 30px)', fontWeight: 700, color: '#0D47A1', lineHeight: 1.15, margin: '0 0 40px 0' }}>Infrastructure Services</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 24 }}>
            {infraDetails.map(item => (
              <div key={item.head} style={{ backgroundColor: '#F7FAFD', border: '1px solid #E3F2FD', padding: '28px 24px' }}>
                <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#0D47A1', margin: '0 0 12px 0' }}>{item.head}</h3>
                <p style={{ fontSize: '15px', color: '#1A1A1A', lineHeight: 1.65, margin: 0 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Application Development */}
      <section style={{ backgroundColor: '#F7FAFD', padding: '80px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 56, alignItems: 'start' }}>
          <div>
            <p style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#1E88E5', margin: '0 0 10px 0' }}>Development</p>
            <h2 style={{ fontSize: 'clamp(22px, 2.8vw, 30px)', fontWeight: 700, color: '#0D47A1', lineHeight: 1.15, margin: '0 0 20px 0' }}>Application Development Services</h2>
            <p style={{ fontSize: '17px', color: '#1A1A1A', lineHeight: 1.65, margin: '0 0 24px 0' }}>
              Our consultants know exactly what to do to improve your business process and requirements of IT solutions. Regardless of industry, we offer flexible and suitable solutions to meet your service challenges.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {appDevServices.map(s => (
                <div key={s} style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1E88E5" strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12" /></svg>
                  <span style={{ fontSize: '15px', color: '#1A1A1A' }}>{s}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#1E88E5', margin: '0 0 10px 0' }}>Technologies</p>
            <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#0D47A1', margin: '0 0 16px 0' }}>Our Tech Stack</h3>
            <p style={{ fontSize: '15px', color: '#1A1A1A', lineHeight: 1.6, margin: '0 0 20px 0' }}>
              Our applications centers of expertise provide the required depth of knowledge to deliver software solutions through rapid development cycles and global standard application frameworks.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {technologies.map(t => (
                <span key={t} style={{ fontSize: '13px', color: '#0D47A1', border: '1px solid #90CAF9', backgroundColor: '#E3F2FD', padding: '5px 12px', fontWeight: 500 }}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
