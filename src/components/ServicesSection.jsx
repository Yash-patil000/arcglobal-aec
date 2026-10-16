import React from 'react';
import { companyConfig } from '../config/companyConfig';
import { Building2, Compass, MapPin, Box, Scan, Signpost, Check } from 'lucide-react';

export default function ServicesSection() {
  const serviceIcons = [
    <Building2 key="1" className="w-6 h-6 text-sky-600" />,
    <Compass key="2" className="w-6 h-6 text-sky-600" />,
    <MapPin key="3" className="w-6 h-6 text-sky-600" />,
    <Box key="4" className="w-6 h-6 text-sky-600" />,
    <Scan key="5" className="w-6 h-6 text-sky-600" />,
    <Signpost key="6" className="w-6 h-6 text-sky-600" />,
  ];

  return (
    <section id="services" className="py-20 bg-slate-50 relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-700 font-heading mb-2">
            <span className="tech-accent-line"></span>
            <span>Core Technical Solutions</span>
          </div>
          <h2 className="heading-secondary text-slate-900 mb-4">
            Our Services
          </h2>
          <p className="text-slate-600 text-lg">
            Technical solutions designed for architecture, engineering, construction, surveying, and development workflows.
          </p>
        </div>

        {/* 6 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {companyConfig.services.map((service, index) => (
            <div
              key={service.id}
              className="tech-card p-6 flex flex-col justify-between"
            >
              <div>
                {/* Header of Card */}
                <div className="flex items-center justify-between mb-5 border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded bg-sky-50 border border-sky-100 flex items-center justify-center">
                      {serviceIcons[index]}
                    </div>
                    <div>
                      <span className="text-xs font-mono font-bold text-sky-700 uppercase tracking-wider">
                        SERVICE {service.id}
                      </span>
                      <span className="block text-xs text-slate-400 font-medium">
                        {service.category}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Service Title */}
                <h3 className="text-xl font-bold text-slate-900 mb-4 font-heading">
                  {service.title}
                </h3>

                {/* Technical Bullet Items */}
                <ul className="space-y-2 mb-6">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-slate-700">
                      <Check className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Card Footer */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-medium text-slate-500 font-heading">
                <span>Construction Ready</span>
                <span className="text-sky-700 font-semibold font-mono">Precision CAD</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
