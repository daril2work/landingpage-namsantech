import React from 'react';
import { BrainCircuit } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="nav-container">
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }} className="text-neon neon-glow fira-code">
        <BrainCircuit size={28} />
        <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>NAMSANTECH</span>
      </div>
      <div className="nav-links fira-code text-neon">
        <a href="#about" style={{ color: 'inherit', textDecoration: 'none', cursor: 'pointer' }}>About</a>
        <a href="#skills" style={{ color: 'inherit', textDecoration: 'none', cursor: 'pointer' }}>Skills</a>
        <a href="#projects" style={{ color: 'inherit', textDecoration: 'none', cursor: 'pointer' }}>Projects</a>
        <a href="#contact" style={{ color: 'inherit', textDecoration: 'none', cursor: 'pointer' }}>Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
