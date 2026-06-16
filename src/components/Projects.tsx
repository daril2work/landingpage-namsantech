import React from 'react';
import { ExternalLink, Code } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'FARMASIKU',
      description: 'Pharmacy automation system streamlining inventory and prescription management with AI-powered analytics.',
      tags: ['React', 'Node.js', 'PostgreSQL'],
      link: '#',
      github: '#'
    },
    {
      title: 'MAJLISAI',
      description: 'AI document generation platform enabling dynamic legal and formal document synthesis with RAG architecture.',
      tags: ['Next.js', 'Python', 'Supabase'],
      link: '#',
      github: '#'
    },
    {
      title: 'SYS_ADMIN_DASH',
      description: 'Enterprise system administration dashboard for real-time monitoring and automated server health checks.',
      tags: ['React', 'Vite', 'Express'],
      link: '#',
      github: '#'
    },
    {
      title: 'DOCGEN_PIPELINE',
      description: 'Native AI pipeline for processing and extracting structured data from unstructured medical records.',
      tags: ['Python', 'FastAPI', 'LLM'],
      link: '#',
      github: '#'
    }
  ];

  return (
    <section id="projects" className="section-container">
      <h2 className="text-neon neon-glow fira-code" style={{ fontSize: '2rem', marginBottom: '3rem' }}>
        03. DEPLOYED_PROTOCOLS
      </h2>

      <div className="projects-grid">
        {projects.map((project, idx) => (
          <div key={idx} className="neon-box" style={{
            padding: '2rem',
            borderRadius: '5px',
            backgroundColor: 'var(--card-bg-light)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <h3 className="text-neon fira-code neon-glow" style={{ fontSize: '1.4rem' }}>{project.title}</h3>
                <div style={{ display: 'flex', gap: '10px' }} className="text-neon">
                  <a href={project.github} style={{ color: 'inherit' }}><Code size={20} /></a>
                  <a href={project.link} style={{ color: 'inherit' }}><ExternalLink size={20} /></a>
                </div>
              </div>
              
              <p style={{ color: 'var(--text-gray)', lineHeight: 1.6, marginBottom: '2rem' }}>
                {project.description}
              </p>
            </div>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', borderTop: '1px solid rgba(168, 255, 0, 0.3)', paddingTop: '1.5rem' }}>
              {project.tags.map((tag, i) => (
                <span key={i} className="fira-code text-neon" style={{ fontSize: '0.85rem', opacity: 0.8 }}>
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
