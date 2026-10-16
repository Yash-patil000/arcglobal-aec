import React from 'react';
import { companyConfig } from '../config/companyConfig';
import { Compass, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white border-t border-slate-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 bg-sky-600 rounded flex items-center justify-center text-white">
                <Compass className="w-5 h-5" />
              </div>
              <span className="font-bold text-xl font-heading text-white">
                {companyConfig.name}
              </span>
            </div>

            <p className="text-xs font-mono text-sky-400 font-semibold uppercase tracking-wider">
              {companyConfig.tagline}
            </p>

            <p className="text-slate-400 text-sm leading-relaxed max-w-md">
              {companyConfig.description}
            </p>

            <div className="pt-2 text-xs text-slate-400 font-mono space-y-1">
              <div>Email: <a href={`mailto:${companyConfig.email}`} className="text-sky-400 hover:underline">{companyConfig.email}</a></div>
              <div>Address: {companyConfig.address || "Pune, Maharashtra, India"}</div>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider font-heading text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              {companyConfig.navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-sky-400 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Services List */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider font-heading text-white">
              Technical Services
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-400">
              <li>Architectural CAD</li>
              <li>Civil Engineering CAD</li>
              <li>Land Survey CAD</li>
              <li>BIM Modeling</li>
              <li>Scan-to-CAD</li>
              <li>Scan-to-BIM</li>
              <li>Technical Signage</li>
              <li>As-Built Drawings</li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 font-mono gap-4">
          <div>
            © {companyConfig.copyrightYear} {companyConfig.name}. All Rights Reserved.
          </div>
          <div>
            Built for Architecture, Civil Engineering & Surveying Professionals
          </div>
        </div>

      </div>
    </footer>
  );
}
