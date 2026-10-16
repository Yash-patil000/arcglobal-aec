import React from 'react';
import { X, Check, FileText } from 'lucide-react';
import { companyConfig } from '../config/companyConfig';

export default function CapabilityModal({ capability, onClose }) {
  if (!capability) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-lg border border-slate-300 max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative">
        
        {/* Header Bar */}
        <div className="p-4 sm:p-6 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800 sticky top-0 z-10">
          <div>
            <span className="text-xs font-mono text-sky-400 uppercase tracking-wider block">
              CAPABILITY PROFILE
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-heading">{capability.title}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 space-y-6">
          {/* Image */}
          <div className="rounded border border-slate-300 overflow-hidden bg-slate-950">
            <img
              src={capability.image}
              alt={capability.title}
              className="w-full h-auto max-h-[500px] object-contain mx-auto"
            />
          </div>

          {/* Description & Technical Specs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-4">
              <h4 className="text-lg font-bold text-slate-900 font-heading">Overview & Standard Deliverables</h4>
              <p className="text-slate-700 text-sm leading-relaxed">{capability.description}</p>
              <div className="p-4 bg-slate-50 border border-slate-200 rounded text-xs text-slate-700 space-y-2">
                <div className="font-semibold text-slate-900 font-heading">Technical Quality Checklist:</div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-sky-600" /> Vector accuracy verified against source field data / sketches.</div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-sky-600" /> Layer naming & line weights strictly follow AIA / NCS standards.</div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-sky-600" /> Plot style (.ctb/.stb) and layout viewports configured for standard US sheets.</div>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-4 rounded space-y-3">
              <h5 className="text-xs font-bold text-slate-900 uppercase tracking-wider font-heading">Deliverable Specs</h5>
              <div className="text-xs space-y-2 text-slate-700">
                <div className="flex justify-between py-1 border-b border-slate-200">
                  <span className="text-slate-500">Formats:</span>
                  <span className="font-mono font-semibold">DWG, PDF, RVT</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-200">
                  <span className="text-slate-500">Standards:</span>
                  <span className="font-mono font-semibold">AIA / US NCS</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-200">
                  <span className="text-slate-500">QC Review:</span>
                  <span className="font-mono font-semibold">Dual-pass</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-500">Turnaround:</span>
                  <span className="font-mono font-semibold">Project Based</span>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <a
                  href="#contact"
                  onClick={onClose}
                  className="btn-primary w-full text-xs text-center py-2.5"
                >
                  <FileText className="w-4 h-4" />
                  Discuss {capability.title}
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
