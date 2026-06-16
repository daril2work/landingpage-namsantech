import React from 'react';
import { BrainCircuit, Sun, Moon } from 'lucide-react';

interface NavbarProps {
  toggleTheme?: () => void;
  currentTheme?: 'dark' | 'light';
}

const Navbar: React.FC<NavbarProps> = ({ toggleTheme, currentTheme = 'dark' }) => {
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
        {toggleTheme && (
          <button 
            onClick={toggleTheme}
            className="neon-box text-neon"
            title="Toggle Theme"
            style={{ 
              background: 'transparent', 
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '0.4rem',
              borderRadius: '50%',
              marginLeft: '0.5rem'
            }}
          >
            {currentTheme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
