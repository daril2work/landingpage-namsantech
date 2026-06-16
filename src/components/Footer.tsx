import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer-container" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <p className="fira-code text-neon" style={{ fontSize: '0.85rem', opacity: 0.8 }}>
        &copy; {new Date().getFullYear()} NAMSANTECH. ALL_RIGHTS_RESERVED.
      </p>

      <p className="fira-code text-neon" style={{ fontSize: '0.85rem', opacity: 0.8 }}>
        BASE_LOCATION: Jakarta, Indonesia
      </p>

      <p className="fira-code text-neon" style={{ fontSize: '0.85rem', opacity: 0.8 }}>
        Build with bismillah
      </p>
      
      <p className="fira-code text-neon" style={{ fontSize: '0.85rem', opacity: 0.8 }}>
        SYSTEM_STATUS: <span style={{ color: 'var(--neon-green)', textShadow: '0 0 5px var(--neon-green)' }}>ONLINE</span>
      </p>
    </footer>
  );
};

export default Footer;
