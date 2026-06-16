import React, { useEffect, useRef } from 'react';

interface CosmicSplashProps {
  theme: 'dark' | 'light';
}

const CosmicSplash: React.FC<CosmicSplashProps> = ({ theme }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: any[] = [];
    
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);
    resize();

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    // Create explosion particles
    for (let i = 0; i < 400; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 30 + 5;
      particles.push({
        x: centerX,
        y: centerY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        size: Math.random() * 3 + 1,
        life: 1,
        decay: Math.random() * 0.015 + 0.005,
        color: Math.random() > 0.5 ? '#a8ff00' : '#ffffff'
      });
    }

    let opacity = 1;
    let flash = 1;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Flash background effect
      if (flash > 0) {
        ctx.fillStyle = `rgba(168, 255, 0, ${flash})`;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        flash -= 0.05;
      }

      let activeParticles = 0;
      
      // Draw neural connections
      ctx.beginPath();
      for (let i = 0; i < particles.length; i++) {
        if (particles[i].life <= 0) continue;
        for (let j = i + 1; j < particles.length; j++) {
          if (particles[j].life <= 0) continue;
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = dx * dx + dy * dy;
          if (dist < 10000) { // Connect close particles
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
          }
        }
      }
      ctx.strokeStyle = `rgba(168, 255, 0, ${opacity * 0.1})`;
      ctx.stroke();

      // Draw particles
      particles.forEach(p => {
        if (p.life <= 0) return;
        activeParticles++;
        
        p.x += p.vx;
        p.y += p.vy;
        p.life -= p.decay;
        
        // Add slight gravity/drag
        p.vx *= 0.95;
        p.vy *= 0.95;
        
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * p.life, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
        
        // Add glow
        ctx.shadowBlur = 10;
        ctx.shadowColor = p.color;
      });

      // Fade out canvas globally
      if (activeParticles < 100) {
        opacity -= 0.02;
        if (opacity < 0) opacity = 0;
        canvas.style.opacity = opacity.toString();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return (
    <div style={{
      position: 'fixed',
      top: 0, left: 0, right: 0, bottom: 0,
      zIndex: 9999,
      pointerEvents: 'none',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: theme === 'dark' ? 'rgba(5,5,5,0.8)' : 'rgba(245,245,245,0.8)',
      transition: 'background 0.5s ease'
    }}>
      <canvas ref={canvasRef} style={{ width: '100%', height: '100%' }} />
    </div>
  );
};

export default CosmicSplash;
