import React from 'react';
import { companyConfig } from '../config/companyConfig';
import { Users, CheckCircle } from 'lucide-react';

export default function ClientTypesSection() {
  return (
    <section className="py-16 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="max-w-3xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-700 font-heading mb-2">
            <Users className="w-4 h-4 text-sky-600 inline" />
            <span>Target Client Base</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-heading mb-3">
            Built for Technical Teams
          </h2>
          <p className="text-slate-600 text-base">
            Extend your technical production capacity without adding unnecessary overhead.
          </p>
        </div>

        {/* 6 Client Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
          {companyConfig.clientTypes.map((client) => (
            <div
              key={client}
              className="p-4 bg-slate-50 border border-slate-200 rounded font-heading font-semibold text-xs text-slate-800 flex items-center justify-center text-center hover:border-sky-600 transition-colors"
            >
              <span>{client}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
