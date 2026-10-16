import React from 'react';
import { companyConfig } from '../config/companyConfig';
import { Mail, MapPin, Globe, Compass, ArrowUpRight } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-white relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-4xl mx-auto bg-slate-50 border border-slate-300 rounded-lg p-8 sm:p-12 shadow-sm">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-700 font-heading mb-2">
              <Compass className="w-4 h-4 text-sky-600 inline" />
              <span>Direct Communication</span>
            </div>
            <h2 className="heading-secondary text-slate-900 mb-3">
              Let's Work Together
            </h2>
            <p className="text-slate-600 text-base">
              For project discussions and technical service requirements:
            </p>
          </div>

          {/* Contact Details Cards (NO FORMS) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Email Card */}
            <div className="bg-white border border-slate-200 p-6 rounded shadow-sm flex flex-col justify-between hover:border-sky-600 transition-colors">
              <div>
                <div className="w-10 h-10 rounded bg-sky-50 text-sky-700 flex items-center justify-center mb-4">
                  <Mail className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 font-heading uppercase tracking-wider mb-1">
                  Email Us
                </h3>
                <p className="text-xs text-slate-500 mb-3">Direct project inquiry & file transfers</p>
                <a
                  href={`mailto:${companyConfig.email}`}
                  className="text-base font-semibold text-sky-700 hover:underline break-all font-mono"
                >
                  {companyConfig.email}
                </a>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-100">
                <a
                  href={`mailto:${companyConfig.email}`}
                  className="btn-primary w-full text-xs py-2 px-3 flex items-center justify-center gap-1"
                >
                  <span>Email Our Team</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Location Card */}
            <div className="bg-white border border-slate-200 p-6 rounded shadow-sm flex flex-col justify-between hover:border-sky-600 transition-colors">
              <div>
                <div className="w-10 h-10 rounded bg-sky-50 text-sky-700 flex items-center justify-center mb-4">
                  <Globe className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 font-heading uppercase tracking-wider mb-1">
                  Global Delivery
                </h3>
                <p className="text-xs text-slate-500 mb-3">Production Hub</p>
                <p className="text-sm font-semibold text-slate-800">
                  {companyConfig.location}
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-100">
                <span className="text-[11px] font-mono text-slate-500 block text-center">
                  US & International Standards Ready
                </span>
              </div>
            </div>

          </div>

          {/* Neutral Professional Notice */}
          <div className="mt-8 pt-6 border-t border-slate-200 text-center text-xs text-slate-500">
            Note: All technical drawings and project information are processed under strict client confidentiality standards.
          </div>

        </div>

      </div>
    </section>
  );
}
