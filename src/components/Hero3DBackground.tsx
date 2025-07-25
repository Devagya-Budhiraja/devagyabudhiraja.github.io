import React, { useEffect, useRef, useState } from 'react';

const Hero3DBackground = () => {
  const [pos, setPos] = useState({ x: 0.5, y: 0.5 }); // normalized (0-1)
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      setPos({ x: Math.max(0, Math.min(1, x)), y: Math.max(0, Math.min(1, y)) });
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  // Calculate gradient position in %
  const gradX = pos.x * 100;
  const gradY = pos.y * 100;

  return (
    <div
      ref={containerRef}
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
      }}
      aria-hidden="true"
    >
      {/* Cursor-tracking dynamic radial gradient */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: '100%',
          height: '100%',
          background: `radial-gradient(ellipse 40% 30% at ${gradX}% ${gradY}%, rgba(51,206,188,0.25) 0%, rgba(168,85,247,0.18) 60%, transparent 100%)`,
          transition: 'background 0.2s',
          mixBlendMode: 'screen',
        }}
      />
      {/* Purple Blob (bottom right) */}
      <div
        style={{
          position: 'absolute',
          bottom: '-10%',
          right: '-10%',
          width: '350px',
          height: '350px',
          background: 'rgba(168, 85, 247, 0.35)',
          filter: 'blur(90px)',
          borderRadius: '50%',
          mixBlendMode: 'screen',
        }}
      />
      {/* Subtle White Glow */}
      <div
        style={{
          position: 'absolute',
          top: '40%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '200px',
          background: 'rgba(255,255,255,0.12)',
          filter: 'blur(60px)',
          borderRadius: '40% 60% 60% 40% / 60% 40% 60% 40%',
          mixBlendMode: 'screen',
        }}
      />
    </div>
  );
};

export default Hero3DBackground; 