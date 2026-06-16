import React from 'react';
import { Terminal, Database, Code2, Cpu, Globe, Server } from 'lucide-react';

const Skills: React.FC = () => {
  const skills = [
    { name: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'TailwindCSS'], icon: <Globe size={24} /> },
    { name: 'Backend', items: ['Python', 'Node.js', 'Express', 'FastAPI'], icon: <Server size={24} /> },
    { name: 'Database', items: ['PostgreSQL', 'Supabase', 'MongoDB', 'Redis'], icon: <Database size={24} /> },
    { name: 'AI & ML', items: ['LLMs', 'RAG', 'AI Agents', 'LangChain'], icon: <Cpu size={24} /> },
    { name: 'DevOps', items: ['Docker', 'AWS', 'Linux', 'Git'], icon: <Terminal size={24} /> },
    { name: 'Tools', items: ['Vite', 'Postman', 'Figma', 'Jest'], icon: <Code2 size={24} /> },
  ];

  return (
    <section id="skills" className="section-container">
      <h2 className="text-neon neon-glow fira-code" style={{ fontSize: '2rem', marginBottom: '3rem' }}>
        02. TECH_STACK
      </h2>

      <div className="skills-grid">
        {skills.map((category, idx) => (
          <div key={idx} className="neon-box" style={{
            padding: '2rem',
            borderRadius: '5px',
            backgroundColor: 'rgba(5, 5, 5, 0.6)'
          }}>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '10px',
              marginBottom: '1.5rem',
              borderBottom: '1px solid rgba(168, 255, 0, 0.3)',
              paddingBottom: '1rem'
            }}>
              <span className="text-neon">{category.icon}</span>
              <h3 className="text-neon fira-code" style={{ fontSize: '1.2rem' }}>{category.name}</h3>
            </div>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {category.items.map((item, i) => (
                <span key={i} style={{
                  padding: '5px 12px',
                  backgroundColor: 'rgba(168, 255, 0, 0.1)',
                  border: '1px solid rgba(168, 255, 0, 0.3)',
                  borderRadius: '3px',
                  fontSize: '0.9rem'
                }} className="fira-code text-neon">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
