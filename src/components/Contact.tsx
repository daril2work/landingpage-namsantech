import React, { useState } from 'react';
import { Mail, Code, Briefcase, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData as any).toString()
    })
    .then(() => {
      setStatus('TRANSMISSION_SENT_SUCCESSFULLY');
      form.reset();
      setTimeout(() => setStatus(''), 5000);
    })
    .catch((error) => setStatus('TRANSMISSION_FAILED: ' + error));
  };

  return (
    <section id="contact" className="section-container" style={{ paddingBottom: '8rem' }}>
      <h2 className="text-neon neon-glow fira-code" style={{ fontSize: '2rem', marginBottom: '3rem', textAlign: 'center' }}>
        04. INITIATE_CONTACT
      </h2>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '3rem',
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center' }}>
          <a href="#" className="neon-box text-neon" style={{ padding: '1rem', borderRadius: '50%', display: 'flex' }}>
            <Code size={28} />
          </a>
          <a href="#" className="neon-box text-neon" style={{ padding: '1rem', borderRadius: '50%', display: 'flex' }}>
            <Briefcase size={28} />
          </a>
          <a href="#" className="neon-box text-neon" style={{ padding: '1rem', borderRadius: '50%', display: 'flex' }}>
            <Mail size={28} />
          </a>
        </div>

        <form name="contact" data-netlify="true" onSubmit={handleSubmit} style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <input type="hidden" name="form-name" value="contact" />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label className="fira-code text-neon" style={{ fontSize: '0.9rem' }}>&gt; IDENTIFIER (NAME)</label>
            <input type="text" name="name" required style={{
              background: 'rgba(5, 5, 5, 0.8)',
              border: '1px solid rgba(168, 255, 0, 0.3)',
              padding: '1rem',
              color: 'var(--neon-green)',
              outline: 'none',
              fontFamily: 'Fira Code',
            }} className="neon-box" />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label className="fira-code text-neon" style={{ fontSize: '0.9rem' }}>&gt; COMMLINK (EMAIL)</label>
            <input type="email" name="email" required style={{
              background: 'rgba(5, 5, 5, 0.8)',
              border: '1px solid rgba(168, 255, 0, 0.3)',
              padding: '1rem',
              color: 'var(--neon-green)',
              outline: 'none',
              fontFamily: 'Fira Code',
            }} className="neon-box" />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label className="fira-code text-neon" style={{ fontSize: '0.9rem' }}>&gt; TRANSMISSION_DATA (MESSAGE)</label>
            <textarea name="message" required rows={5} style={{
              background: 'rgba(5, 5, 5, 0.8)',
              border: '1px solid rgba(168, 255, 0, 0.3)',
              padding: '1rem',
              color: 'var(--neon-green)',
              outline: 'none',
              fontFamily: 'Fira Code',
              resize: 'vertical'
            }} className="neon-box" />
          </div>

          <button type="submit" className="neon-box fira-code text-neon" style={{
            background: 'transparent',
            padding: '1rem 2rem',
            cursor: 'pointer',
            fontSize: '1rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '10px',
            marginTop: '1rem'
          }}>
            <Send size={20} />
            [ SEND_TRANSMISSION ]
          </button>
          
          {status && (
            <p className="fira-code text-neon" style={{ textAlign: 'center', marginTop: '1rem' }}>
              &gt; {status}...
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
