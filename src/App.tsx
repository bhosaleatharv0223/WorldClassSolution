import { useState } from 'react';
import MegaNav from '@/components/MegaNav';
import Footer from '@/components/Footer';
import Home from '@/pages/Home';
import About from '@/pages/About';
import ITServices from '@/pages/ITServices';
import EWaste from '@/pages/EWaste';
import Blog from '@/pages/Blog';
import Clients from '@/pages/Clients';
import Contact from '@/pages/Contact';

type Page = 'home' | 'about' | 'it-services' | 'e-waste' | 'blog' | 'clients' | 'contact';

export default function App() {
  const [activePage, setActivePage] = useState<Page>('home');

  const navigate = (page: Page) => {
    setActivePage(page);
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (activePage) {
      case 'home':        return <Home onNavigate={navigate} />;
      case 'about':       return <About onNavigate={navigate} />;
      case 'it-services': return <ITServices />;
      case 'e-waste':     return <EWaste />;
      case 'blog':        return <Blog />;
      case 'clients':     return <Clients />;
      case 'contact':     return <Contact />;
      default:            return <Home onNavigate={navigate} />;
    }
  };

  return (
    <div style={{ minHeight: '100%', display: 'flex', flexDirection: 'column' }}>
      <MegaNav activePage={activePage} onNavigate={navigate} />
      <div style={{ flex: 1, paddingTop: 76 }}>
        {renderPage()}
      </div>
      <Footer onNavigate={navigate} />
    </div>
  );
}
