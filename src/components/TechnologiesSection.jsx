import React from 'react';
import { companyConfig } from '../config/companyConfig';
import { Cpu } from 'lucide-react';

export default function TechnologiesSection() {
  return (
    <section className="py-16 bg-slate-100 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-700 font-heading mb-2">
            <Cpu className="w-4 h-4 text-sky-600 inline" />
            <span>Software Ecosystem</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-heading">
            Tools & Technologies
          </h2>
        </div>

        {/* Tech Badges Grid */}
        <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
          {companyConfig.technologies.map((tech) => (
            <div
              key={tech}
              className="px-4 py-2.5 bg-white border border-slate-300 rounded shadow-sm text-sm font-semibold text-slate-800 flex items-center gap-2 font-heading hover:border-sky-500 transition-colors"
            >
              <span className="w-2 h-2 rounded-full bg-sky-500"></span>
              <span>{tech}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
