import React, { Suspense, lazy } from 'react';
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
  const fallbackUI = (
    <div style={{ padding: '5rem 10%', textAlign: 'center', opacity: 0.5 }} className="fira-code text-neon neon-glow">
      &gt; LOADING_MODULE...
    </div>
  );

  return (
    <>
      <NetworkBackground />
      <Navbar />
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
    </>
  );
}

export default App;
