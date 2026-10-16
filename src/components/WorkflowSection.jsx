import React from 'react';
import { companyConfig } from '../config/companyConfig';
import { FileText, Search, Cpu, CheckCircle, Send } from 'lucide-react';

export default function WorkflowSection() {
  const stepIcons = [
    <FileText key="1" className="w-5 h-5 text-sky-400" />,
    <Search key="2" className="w-5 h-5 text-sky-400" />,
    <Cpu key="3" className="w-5 h-5 text-sky-400" />,
    <CheckCircle key="4" className="w-5 h-5 text-sky-400" />,
    <Send key="5" className="w-5 h-5 text-sky-400" />,
  ];

  return (
    <section id="process" className="py-20 cad-grid-dark text-white relative border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-400 font-heading mb-2">
            <span className="w-8 h-0.5 bg-sky-400 inline-block"></span>
            <span>Structured Process</span>
          </div>
          <h2 className="heading-secondary text-white mb-4">
            From Data to Deliverables
          </h2>
          <p className="text-slate-300 text-lg">
            A standardized technical production workflow engineered for consistency, accuracy, and timely project turnarounds.
          </p>
        </div>

        {/* Desktop Horizontal Workflow Steps / Mobile Vertical Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
          
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-slate-700/80 -translate-y-8 z-0"></div>

          {companyConfig.workflow.map((item, index) => (
            <div
              key={item.step}
              className="relative z-10 bg-slate-800/90 border border-slate-700 p-5 rounded flex flex-col justify-between hover:border-sky-500 transition-all duration-200"
            >
              <div>
                {/* Step Number Badge & Icon */}
                <div className="flex items-center justify-between mb-4">
                  <span className="w-8 h-8 rounded bg-sky-950 border border-sky-600 flex items-center justify-center font-mono font-bold text-xs text-sky-300">
                    {item.step}
                  </span>
                  <div className="p-2 rounded bg-slate-900 border border-slate-700">
                    {stepIcons[index]}
                  </div>
                </div>

                {/* Step Title */}
                <h3 className="text-lg font-bold text-white mb-2 font-heading">
                  {item.title}
                </h3>

                {/* Step Description */}
                <p className="text-slate-300 text-xs leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Bottom Step Indicator */}
              <div className="mt-4 pt-3 border-t border-slate-700/60 text-[10px] font-mono text-slate-400 flex items-center justify-between">
                <span>STAGE {index + 1} OF 5</span>
                <span className="text-sky-400 font-semibold">VERIFIED</span>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
