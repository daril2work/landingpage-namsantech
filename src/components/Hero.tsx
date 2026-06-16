import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="fira-code text-neon" style={{ fontSize: 'clamp(0.9rem, 3vw, 1.2rem)', marginBottom: '1.5rem' }}>
        &gt; INITIALIZING USER PROTOCOL ...
      </div>
      
      <h1 className="text-neon neon-glow fira-code" style={{
        fontSize: 'clamp(3rem, 6vw, 6rem)',
        lineHeight: 1.1,
        marginBottom: '1rem',
        textTransform: 'uppercase',
        letterSpacing: '2px'
      }}>
        AI NATIVE ENGINEER.
      </h1>
      
      <h2 className="text-neon neon-glow fira-code" style={{
        fontSize: 'clamp(2rem, 4vw, 4rem)',
        lineHeight: 1.2,
        marginBottom: '3rem',
        textTransform: 'uppercase'
      }}>
        BUILDING INTELLIGENT SYSTEMS.<span className="typing-cursor"></span>
      </h2>

      <div className="hero-buttons">
        <a href="#projects" className="neon-box text-neon fira-code hero-btn">
          [ VIEW_WORK ]
        </a>
        <a href="#contact" className="neon-box text-neon fira-code hero-btn" style={{ opacity: 0.8 }}>
          [ INITIATE_CONTACT ]
        </a>
      </div>
    </section>
  );
};

export default Hero;
