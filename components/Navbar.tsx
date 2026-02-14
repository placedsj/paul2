import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { NavLink } from '../types';

const links: NavLink[] = [
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-navy-900/95 backdrop-blur-md shadow-lg py-4 border-b border-white/10'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-accent-orange rounded-tr-xl rounded-bl-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="font-display font-bold text-white text-xl">P</span>
            </div>
            <div className="font-display font-bold text-2xl tracking-tighter uppercase text-white">
            Paul <span className="text-accent-orange">Roofs</span>
            </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-bold uppercase tracking-widest text-slate-300 hover:text-accent-orange transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="flex items-center gap-2 bg-accent-orange text-white px-6 py-2.5 rounded-sm font-display font-bold uppercase tracking-wide hover:bg-accent-hover transition-colors duration-300 transform hover:-translate-y-0.5"
          >
            <Phone size={18} />
            Free Quote
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-navy-900 z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-300 md:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ top: '80px' }} 
      >
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-2xl font-display font-bold uppercase text-white hover:text-accent-orange"
          >
            {link.label}
          </a>
        ))}
        <a
          href="#contact"
          onClick={() => setIsMobileMenuOpen(false)}
          className="mt-4 bg-accent-orange text-white px-8 py-4 text-xl font-display font-bold uppercase tracking-wide rounded-sm"
        >
          Get a Free Quote
        </a>
      </div>
    </nav>
  );
};