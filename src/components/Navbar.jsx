import React, { useState, useEffect } from 'react';
import { companyConfig } from '../config/companyConfig';
import { Menu, X, Mail, Layers, Compass } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm py-3'
          : 'bg-white border-b border-slate-100 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2.5 text-decoration-none group">
            <div className="w-9 h-9 bg-slate-900 rounded flex items-center justify-center text-sky-400 group-hover:bg-sky-700 transition-colors">
              <Compass className="w-5 h-5 stroke-[2.2]" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg leading-none tracking-tight text-slate-900 font-heading">
                {companyConfig.shortName}
              </span>
              <span className="text-[10px] uppercase tracking-wider text-slate-500 font-medium mt-0.5">
                Technical CAD Services
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {companyConfig.navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-700 hover:text-sky-600 transition-colors py-1"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Side CTA - NO FORM, Scrolls to contact/opens mail client */}
          <div className="hidden md:flex items-center">
            <a
              href="#contact"
              className="btn-primary text-xs py-2.5 px-4 rounded border-slate-800 bg-slate-900 hover:bg-sky-700 hover:border-sky-700"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Talk to Our Team</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <div className="flex flex-col space-y-2">
            {companyConfig.navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2 text-base font-medium text-slate-800 hover:bg-slate-50 rounded"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-2">
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="btn-primary w-full text-center bg-slate-900 hover:bg-sky-700 py-3"
            >
              <Mail className="w-4 h-4 mr-2 inline" />
              Talk to Our Team
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
