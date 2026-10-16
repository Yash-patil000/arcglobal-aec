import React from 'react';
import { companyConfig } from '../config/companyConfig';
import { CheckCircle2, ShieldCheck, Scale, Zap, DollarSign, Lock } from 'lucide-react';

export default function WhyChooseUsSection() {
  const whyIcons = [
    <CheckCircle2 key="1" className="w-5 h-5 text-sky-600" />,
    <Scale key="2" className="w-5 h-5 text-sky-600" />,
    <Zap key="3" className="w-5 h-5 text-sky-600" />,
    <DollarSign key="4" className="w-5 h-5 text-sky-600" />,
    <ShieldCheck key="5" className="w-5 h-5 text-sky-600" />,
    <Lock key="6" className="w-5 h-5 text-sky-600" />,
  ];

  return (
    <section className="py-20 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-400 font-heading mb-2">
            <span className="w-8 h-0.5 bg-sky-400 inline-block"></span>
            <span>Value Drivers</span>
          </div>
          <h2 className="heading-secondary text-white mb-4">
            Why {companyConfig.shortName}
          </h2>
          <p className="text-slate-300 text-lg">
            Reliable engineering CAD partnership designed to support your team’s delivery standards and project timelines.
          </p>
        </div>

        {/* 6-Point Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {companyConfig.whyChooseUs.map((point, index) => (
            <div
              key={point.title}
              className="bg-slate-800/90 border border-slate-700/80 p-6 rounded hover:border-sky-500 transition-all duration-200"
            >
              <div className="w-10 h-10 rounded bg-sky-950 border border-sky-800 flex items-center justify-center mb-4">
                {whyIcons[index]}
              </div>

              <h3 className="text-xl font-bold text-white mb-2 font-heading">
                {point.title}
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
