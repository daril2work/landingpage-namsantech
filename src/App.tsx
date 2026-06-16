import { Suspense, lazy, useState, useEffect } from 'react';
import NetworkBackground from './components/NetworkBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FadeInSection from './components/FadeInSection';
import CosmicSplash from './components/CosmicSplash';

const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [isAnimating, setIsAnimating] = useState(false);

  const toggleTheme = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    
    // Switch theme halfway through the explosion animation
    setTimeout(() => {
      setTheme(prev => prev === 'dark' ? 'light' : 'dark');
    }, 800);

    // End animation after 2.5s
    setTimeout(() => {
      setIsAnimating(false);
    }, 2500);
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
      {isAnimating && <CosmicSplash theme={theme} />}
      <div style={{ position: 'relative', zIndex: 1, pointerEvents: isAnimating ? 'none' : 'auto' }}>
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
