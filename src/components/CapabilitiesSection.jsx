import React, { useState } from 'react';
import { companyConfig } from '../config/companyConfig';
import { Eye, ExternalLink } from 'lucide-react';
import CapabilityModal from './CapabilityModal';

export default function CapabilitiesSection() {
  const [selectedCapability, setSelectedCapability] = useState(null);

  return (
    <section id="capabilities" className="py-20 bg-slate-50 relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-700 font-heading mb-2">
            <span className="tech-accent-line"></span>
            <span>Production Portfolio</span>
          </div>
          <h2 className="heading-secondary text-slate-900 mb-4">
            Selected Capabilities
          </h2>
          <p className="text-slate-600 text-lg">
            Representative sample categories demonstrating our CAD drafting, BIM modeling, and technical drawing standards.
          </p>
        </div>

        {/* 6 Visual Capability Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {companyConfig.capabilities.map((item) => (
            <div
              key={item.id}
              className="tech-card bg-white flex flex-col justify-between group cursor-pointer"
              onClick={() => setSelectedCapability(item)}
            >
              <div>
                {/* Image Box */}
                <div className="relative overflow-hidden aspect-[16/10] bg-slate-900 border-b border-slate-200">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 filter brightness-105"
                  />
                  <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                    <span className="bg-white text-slate-900 text-xs font-bold font-heading px-3 py-1.5 rounded shadow flex items-center gap-1.5">
                      <Eye className="w-3.5 h-3.5 text-sky-600" />
                      Inspect Capability
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2 font-heading group-hover:text-sky-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Bottom Link Button */}
              <div className="px-6 pb-6 pt-0">
                <button
                  type="button"
                  onClick={() => setSelectedCapability(item)}
                  className="text-xs font-bold text-sky-700 hover:text-sky-900 flex items-center gap-1 font-heading uppercase tracking-wider group-hover:translate-x-1 transition-transform"
                >
                  <span>View Capability</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Modal Preview */}
      <CapabilityModal
        capability={selectedCapability}
        onClose={() => setSelectedCapability(null)}
      />
    </section>
  );
}
