import React, { useEffect, useState } from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';
import { User, Briefcase, Code, Mail, Github, Linkedin, X, FileText } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const navLinks: { to: string; label: string; icon: React.ComponentType<React.SVGProps<SVGSVGElement>> }[] = [
  { to: '#about', label: 'About', icon: User },
  { to: '#experience', label: 'Experience', icon: Briefcase },
  { to: '#projects', label: 'Projects', icon: Code },
  { to: '#contact', label: 'Contact', icon: Mail },
];

const socialLinks: { href: string; label: string; icon: React.ComponentType<React.SVGProps<SVGSVGElement>> }[] = [
  { href: 'https://github.com/Devagya-Budhiraja', label: 'GitHub', icon: Github },
  { href: 'https://www.linkedin.com/in/devagya-budhiraja-8372ad942/', label: 'LinkedIn', icon: Linkedin },
];

const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen }) => {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = ['about', 'experience', 'projects', 'contact'];
      let current = sectionIds[0];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 80) {
            current = id;
          }
        }
      }
      // If near the bottom, always set 'contact' as active
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 50) {
        current = 'contact';
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (to: string) => {
    setIsOpen(false);
    const id = to.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const NavLink = ({ to, label, icon: Icon }: { to: string; label: string; icon: React.ComponentType<React.SVGProps<SVGSVGElement>> }) => (
    <button
      onClick={() => handleNavClick(to)}
      className={`flex items-center px-4 py-2.5 rounded-lg transition-all duration-300 w-full text-left
        ${activeSection === to.replace('#', '')
          ? 'bg-primary text-white text-lg translate-x-2 shadow-lg'
          : 'text-gray-400 hover:bg-dark-700 hover:text-white text-base'}
      `}
      style={{
        fontSize: activeSection === to.replace('#', '') ? '1.125rem' : '1rem', // text-lg = 1.125rem, text-base = 1rem
      }}
    >
      <Icon className="w-5 h-5 mr-4" />
      <span className="font-medium">{label}</span>
    </button>
  );

  return (
    <>
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 bg-black/60 z-40 md:hidden transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      />
      <aside
        className={`fixed top-0 left-0 z-50 h-full w-64 bg-dark-800 border-r border-dark-700 flex flex-col transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}
      >
        <div className="flex flex-col items-center mt-4">
          <img
            src="/profile.JPG"
            alt="Devagya Budhiraja"
            className="w-24 h-24 rounded-full border-2 border-gray-700 object-cover mb-2"
          />
          <h1 className="text-xl font-bold text-white">Devagya Budhiraja</h1>
          <p className="text-sm text-gray-400">Student at University of Sydney</p>
          <p className="text-sm text-gray-400">Mechatronics Engineering</p>
        </div>

        <nav className="flex-grow px-4 py-6 space-y-2">
          {navLinks.map((link) => (
            <NavLink key={link.to} {...link} />
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-4 py-2.5 text-gray-400 rounded-lg hover:bg-dark-700 hover:text-white transition-colors duration-300"
          >
            <FileText className="w-5 h-5 mr-4" />
            <span className="font-medium">Resume</span>
          </a>
          <a
            href="/portfolio.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-4 py-2.5 text-gray-400 rounded-lg hover:bg-dark-700 hover:text-white transition-colors duration-300"
          >
            <FileText className="w-5 h-5 mr-4" />
            <span className="font-medium">Portfolio</span>
          </a>

        </nav>
        <div className="px-6 py-6 border-t border-dark-700">
          <div className="space-y-4">
            {socialLinks.map(({ href, label, icon: Icon }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex items-center text-gray-400 hover:text-primary transition-colors duration-300"
              >
                <Icon className="w-6 h-6 mr-3" />
                <span className="font-medium">{label}</span>
              </a>
            ))}
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
