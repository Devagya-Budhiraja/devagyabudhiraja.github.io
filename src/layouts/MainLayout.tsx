import React, { useState, useEffect, useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import { Menu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function ScrollProgressBar() {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      setWidth(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div className="fixed top-0 left-0 h-1 bg-primary z-50 transition-all duration-[900ms]" style={{ width: `${width}%`, transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }} />
  );
}

interface MainLayoutProps {
  children: React.ReactNode;
}

// Cursor-tracking background effect
const CursorTrackingBackground: React.FC = () => {
  const glowRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let targetX = x;
    let targetY = y;

    const handleMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    let animationFrame: number;
    const animate = () => {
      x += (targetX - x) * 0.18;
      y += (targetY - y) * 0.18;
      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${x - 200}px, ${y - 200}px, 0)`;
      }
      animationFrame = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMove);
    animationFrame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  if (!mounted) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
      }}
      aria-hidden="true"
    >
      <div
        ref={glowRef}
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: 400,
          height: 400,
          background: 'rgba(255,255,255,0.10)',
          borderRadius: '50%',
          filter: 'blur(120px)',
          mixBlendMode: 'lighten',
          pointerEvents: 'none',
          willChange: 'transform',
        }}
      />
    </div>
  );
};

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="relative min-h-screen bg-dark-900 text-gray-300 antialiased">
      <CursorTrackingBackground />
      <ScrollProgressBar />
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      <div className="md:ml-64 transition-all duration-300 ease-in-out">
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="md:hidden fixed top-4 left-4 z-30 p-2 rounded-md bg-dark-800/80 text-gray-300 hover:text-white backdrop-blur-sm"
          aria-label="Open sidebar"
        >
          <Menu className="h-6 w-6" />
        </button>

        <main className="p-4 sm:p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
