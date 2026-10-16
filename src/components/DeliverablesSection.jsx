import React from 'react';
import { companyConfig } from '../config/companyConfig';
import { FileCode, FileCheck, Layers } from 'lucide-react';

export default function DeliverablesSection() {
  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-700 font-heading mb-2">
            <span className="tech-accent-line"></span>
            <span>Standardized Outputs</span>
          </div>
          <h2 className="heading-secondary text-slate-900 mb-3">
            Project Deliverables
          </h2>
          <p className="text-slate-600 text-lg">
            Clean, structured, and native CAD/BIM format deliverables ready for engineering, permitting, and construction.
          </p>
        </div>

        {/* Deliverables Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {companyConfig.deliverables.map((item) => (
            <div
              key={item.code}
              className="p-4 bg-slate-50 border border-slate-200 rounded hover:border-sky-600 transition-all duration-200 flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono font-bold text-lg text-sky-700 bg-sky-100/80 px-2.5 py-1 rounded">
                  .{item.code}
                </span>
                <FileCode className="w-4 h-4 text-slate-400" />
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-800 font-heading">
                  {item.label}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
