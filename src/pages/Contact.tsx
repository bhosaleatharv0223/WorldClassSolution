import { useState } from 'react';
import Hero from '@/components/Hero';
import ImagePlaceholder from '@/components/ImagePlaceholder';
export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', interest: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };
  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '10px 14px',
    fontSize: '15px',
    color: '#1A1A1A',
    border: '1px solid #90CAF9',
    backgroundColor: '#ffffff',
    outline: 'none',
    fontFamily: 'inherit',
    boxSizing: 'border-box',
  };
  const labelStyle: React.CSSProperties = {
    fontSize: '13px',
    fontWeight: 600,
    color: '#0D47A1',
    display: 'block',
    marginBottom: 6,
    letterSpacing: '0.02em',
  };
  return (
    <main>
      <Hero title="Contact Us" subtitle="Reach out to our team in Pune for IT services or e-waste recycling." />
      <section style={{ backgroundColor: '#ffffff', padding: '80px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 64, alignItems: 'start' }}>
          {/* Contact info + image */}
          <div>
            <p style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#1E88E5', margin: '0 0 10px 0' }}>Get in Touch</p>
            <h2 style={{ fontSize: 'clamp(22px, 2.8vw, 30px)', fontWeight: 700, color: '#0D47A1', lineHeight: 1.15, margin: '0 0 24px 0' }}>Contact World Class Solutions</h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginBottom: 32 }}>
              {[
                {
                  icon: 'M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z M12 7a3 3 0 100 6 3 3 0 000-6z',
                  label: 'Main Office',
                  value: '1, Sarangshree Apartment, Opp Kailas Jeevan Factory, Dhayari, Pune-411041',
                },
                {
                  icon: 'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22 6l-10 7L2 6',
                  label: 'Email',
                  value: 'wcspune@gmail.com',
                  href: 'mailto:wcspune@gmail.com',
                },
                {
                  icon: 'M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.12 1.22 2 2 0 012.12 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.09a16 16 0 006 6l.46-.46a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z',
                  label: 'Toll-Free',
                  value: '1800-2700-600',
                  href: 'tel:18002700600',
                },
                {
                  icon: 'M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z M12 7a3 3 0 100 6 3 3 0 000-6z',
                  label: 'Green IT Recycling Plant',
                  value: 'D-222, MIDC Ranjangaon, District Pune, Maharashtra, 412220',
                },
              ].map(item => (
                <div key={item.label} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                  <div style={{ flexShrink: 0, width: 36, height: 36, border: '1px solid #E3F2FD', backgroundColor: '#F7FAFD', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1E88E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d={item.icon} />
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontSize: '12px', fontWeight: 600, color: '#5F6368', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 3 }}>{item.label}</div>
                    {item.href ? (
                      <a href={item.href} style={{ fontSize: '15px', color: '#1E88E5', textDecoration: 'none' }}>{item.value}</a>
                    ) : (
                      <span style={{ fontSize: '15px', color: '#1A1A1A', lineHeight: 1.5 }}>{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <ImagePlaceholder ratio="4:3" label="Pune office / map graphic" />
          </div>

          {/* Form */}
          <div>
            <p style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#1E88E5', margin: '0 0 10px 0' }}>Send a Message</p>
            <h3 style={{ fontSize: '22px', fontWeight: 700, color: '#0D47A1', margin: '0 0 28px 0' }}>We&apos;d Love to Hear From You</h3>

            {submitted ? (
              <div style={{ backgroundColor: '#E3F2FD', border: '1px solid #90CAF9', padding: '28px 24px' }}>
                <h4 style={{ fontSize: '18px', fontWeight: 700, color: '#0D47A1', margin: '0 0 10px 0' }}>Message Sent</h4>
                <p style={{ fontSize: '15px', color: '#1A1A1A', margin: 0 }}>Thank you for reaching out. Our team will get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                <div>
                  <label style={labelStyle}>Full Name *</label>
                  <input name="name" value={form.name} onChange={handleChange} required style={inputStyle} placeholder="Your full name" />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  <div>
                    <label style={labelStyle}>Email Address *</label>
                    <input name="email" type="email" value={form.email} onChange={handleChange} required style={inputStyle} placeholder="you@example.com" />
                  </div>
                  <div>
                    <label style={labelStyle}>Phone Number</label>
                    <input name="phone" type="tel" value={form.phone} onChange={handleChange} style={inputStyle} placeholder="+91 00000 00000" />
                  </div>
                </div>
                <div>
                  <label style={labelStyle}>I am interested in *</label>
                  <select name="interest" value={form.interest} onChange={handleChange} required style={{ ...inputStyle, appearance: 'none', cursor: 'pointer' }}>
                    <option value="">Select a service area</option>
                    <option value="it-services">IT Services</option>
                    <option value="e-waste">E-Waste Recycling</option>
                    <option value="both">Both IT Services &amp; Recycling</option>
                  </select>
                </div>
                <div>
                  <label style={labelStyle}>Message *</label>
                  <textarea name="message" value={form.message} onChange={handleChange} required rows={5} style={{ ...inputStyle, resize: 'vertical' }} placeholder="Tell us about your requirements..." />
                </div>
                <button
                  type="submit"
                  style={{ fontSize: '15px', fontWeight: 600, color: '#ffffff', backgroundColor: '#0D47A1', border: 'none', padding: '13px 28px', cursor: 'pointer', alignSelf: 'flex-start' }}
                  onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#0A3880')}
                  onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#0D47A1')}
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
