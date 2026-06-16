import { Suspense, lazy, useState, useEffect } from 'react';
import NetworkBackground from './components/NetworkBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FadeInSection from './components/FadeInSection';

const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    if (theme === 'light') {
      document.documentElement.classList.add('light-mode');
    } else {
      document.documentElement.classList.remove('light-mode');
    }
  }, [theme]);

  const fallbackUI = (
    <div style={{ padding: '5rem 10%', textAlign: 'center', opacity: 0.5 }} className="fira-code text-neon neon-glow">
      &gt; LOADING_MODULE...
    </div>
  );

  return (
    <>
      <NetworkBackground />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Navbar toggleTheme={toggleTheme} currentTheme={theme} />
        <main>
          <Hero />
        <Suspense fallback={fallbackUI}>
          <FadeInSection><About /></FadeInSection>
          <FadeInSection><Skills /></FadeInSection>
          <FadeInSection><Projects /></FadeInSection>
          <FadeInSection><Contact /></FadeInSection>
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
      </div>
    </>
  );
}

export default App;
