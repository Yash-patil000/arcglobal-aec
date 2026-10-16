import React from 'react';
import { companyConfig } from '../config/companyConfig';
import { Building, HardHat, Compass, Hammer, Landmark, Frame } from 'lucide-react';

export default function IndustriesSection() {
  const industryIcons = [
    <Building key="1" className="w-6 h-6 text-sky-600" />,
    <HardHat key="2" className="w-6 h-6 text-sky-600" />,
    <Compass key="3" className="w-6 h-6 text-sky-600" />,
    <Hammer key="4" className="w-6 h-6 text-sky-600" />,
    <Landmark key="5" className="w-6 h-6 text-sky-600" />,
    <Frame key="6" className="w-6 h-6 text-sky-600" />,
  ];

  return (
    <section id="industries" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-700 font-heading mb-2">
            <span className="tech-accent-line"></span>
            <span>Target Domains</span>
          </div>
          <h2 className="heading-secondary text-slate-900 mb-4">
            Industries We Support
          </h2>
          <p className="text-slate-600 text-lg">
            Tailored CAD drafting and technical production services across AEC and geospatial sectors.
          </p>
        </div>

        {/* 6 Industry Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {companyConfig.industries.map((ind, index) => (
            <div
              key={ind.title}
              className="p-6 bg-slate-50 border border-slate-200 rounded hover:border-sky-600 hover:shadow-md transition-all duration-200"
            >
              <div className="w-12 h-12 rounded bg-white border border-slate-200 flex items-center justify-center mb-5 shadow-sm">
                {industryIcons[index]}
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-2 font-heading">
                {ind.title}
              </h3>

              <p className="text-slate-600 text-sm leading-relaxed">
                {ind.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
