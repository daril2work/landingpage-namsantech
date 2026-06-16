import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="section-container">
      <h2 className="text-neon neon-glow fira-code" style={{ fontSize: '2rem', marginBottom: '3rem' }}>
        01. ABOUT_ME
      </h2>

      <div className="neon-box" style={{
        backgroundColor: 'rgba(5, 5, 5, 0.8)',
        borderRadius: '5px',
        overflow: 'hidden'
      }}>
        {/* Terminal Header */}
        <div style={{
          borderBottom: '1px solid rgba(168, 255, 0, 0.3)',
          padding: '10px 15px',
          display: 'flex',
          alignItems: 'center',
          gap: '10px'
        }}>
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#ff5f56' }} />
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#ffbd2e' }} />
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#27c93f' }} />
          <span className="text-neon fira-code" style={{ marginLeft: '10px', fontSize: '0.9rem', opacity: 0.7 }}>
            ai-engineer@mainframe:~
          </span>
        </div>

        {/* Terminal Body */}
        <div style={{ padding: '2rem' }} className="fira-code text-neon">
          <p style={{ marginBottom: '1.5rem', opacity: 0.9 }}>
            &gt; cat <span style={{ fontWeight: 'bold' }}>bio.txt</span>
          </p>
          <div style={{ 
            borderLeft: '2px solid rgba(168, 255, 0, 0.3)', 
            paddingLeft: '1.5rem',
            lineHeight: 1.8,
            fontSize: '1.1rem'
          }}>
            <p style={{ marginBottom: '1.5rem' }}>
              I am an AI Native Engineer who bridges intelligent systems and practical software. I specialize in building fullstack applications powered by AI — from document generation with RAG to native AI pipelines.
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
              My expertise spans healthcare systems, pharmacy automation, enterprise system administration, and AI-driven document generation. I build with React, Python, Supabase, and PostgreSQL.
            </p>
            <p>
              I believe the future belongs to engineers who can think in code AND intelligence.
            </p>
          </div>
          <p style={{ marginTop: '1.5rem' }}>_</p>
        </div>
      </div>
    </section>
  );
};

export default About;
