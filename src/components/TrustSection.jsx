import React from 'react';
import { companyConfig } from '../config/companyConfig';
import { Target, Clock, TrendingUp, CheckSquare } from 'lucide-react';

export default function TrustSection() {
  const icons = [
    <Target key="1" className="w-5 h-5 text-sky-600" />,
    <Clock key="2" className="w-5 h-5 text-sky-600" />,
    <TrendingUp key="3" className="w-5 h-5 text-sky-600" />,
    <CheckSquare key="4" className="w-5 h-5 text-sky-600" />,
  ];

  return (
    <section className="py-14 bg-slate-900 text-white border-y border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-10">
          <div className="text-xs font-semibold uppercase tracking-wider text-sky-400 mb-2 font-heading">
            Engineering Credibility & Standards
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-3">
            Precision-driven. Project-ready. Built for professionals.
          </h2>
          <p className="text-slate-300 text-base leading-relaxed">
            We support architecture, engineering, construction, surveying, real estate, and signage professionals with reliable drafting, modeling, and technical documentation services.
          </p>
        </div>

        {/* 4 Compact Value Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {companyConfig.trustValues.map((item, idx) => (
            <div
              key={item.title}
              className="bg-slate-800/80 border border-slate-700/80 p-5 rounded hover:border-sky-500/60 transition-all duration-200"
            >
              <div className="w-10 h-10 rounded bg-sky-950 border border-sky-800 flex items-center justify-center mb-4">
                {icons[idx]}
              </div>
              <h3 className="text-lg font-bold text-white mb-1.5 font-heading">
                {item.title}
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
