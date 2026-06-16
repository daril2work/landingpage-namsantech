import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer-container">
      <p className="fira-code text-neon" style={{ fontSize: '0.85rem', opacity: 0.8 }}>
        &copy; {new Date().getFullYear()} NAMSANTECH. ALL_RIGHTS_RESERVED.
      </p>
      
      <p className="fira-code text-neon" style={{ fontSize: '0.85rem', opacity: 0.8 }}>
        BUILT_WITH_REACT_AND_INTELLIGENCE
      </p>
    </footer>
  );
};

export default Footer;
