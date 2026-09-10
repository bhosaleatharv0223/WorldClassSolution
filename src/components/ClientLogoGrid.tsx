const clientLogos = [
  { name: 'Tata Motors', src: '/ClientLogo/TATA-Motors-Logo-1536x1152.jpg', alt: 'Tata Motors logo' },
  { name: 'Essar Steel', src: '/ClientLogo/Essar-Steel-Top-Steel-companies-StartupTalky.jpg', alt: 'Essar Steel logo' },
  { name: 'Persistent', src: '/ClientLogo/PERSISTENT.jpg', alt: 'Persistent Systems logo' },
  { name: 'Rivulis Irrigation', src: '/ClientLogo/rivulis-irrigation.jpg', alt: 'Rivulis Irrigation logo' },
  { name: 'Yash Technologies', src: '/ClientLogo/YashTechnologies.jpg', alt: 'Yash Technologies logo' },
  { name: 'FIMI', src: '/ClientLogo/fimi.jpg', alt: 'FIMI logo' },
  { name: 'Abhinav Education Society', src: '/ClientLogo/AbhinavEducation.jpg', alt: 'Abhinav Education Society logo' },
  { name: 'Armacell', src: '/ClientLogo/AmarcellLogo.jpg', alt: 'Armacell logo' },
  { name: 'Curtiss Wright', src: '/ClientLogo/Curtiss-Wright_logo.svg', alt: 'Curtiss-Wright logo' },
  { name: 'NephroPlus', src: '/ClientLogo/NephroPlus.jpg', alt: 'NephroPlus logo' },
  { name: 'Wilo Mather+Platt', src: '/ClientLogo/wilo-mather-platt.jpg', alt: 'Wilo Mather+Platt logo' },
  { name: 'Williams Controls', src: '/ClientLogo/williams-controls.jpg', alt: 'Williams Controls logo' },
  { name: 'Executive Access', src: '/ClientLogo/executive-access.jpg', alt: 'Executive Access logo' },
];

export default function ClientLogoGrid() {
  return (
    <div className="client-logo-grid">
      {clientLogos.map(client => (
        <div key={client.name} className="client-logo-cell">
          <img src={client.src} alt={client.alt} />
        </div>
      ))}
    </div>
  );
}
