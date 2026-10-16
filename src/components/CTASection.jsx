import React from 'react';
import { companyConfig } from '../config/companyConfig';
import { Mail, ArrowRight } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-16 bg-slate-900 text-white border-t border-slate-800 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        
        <h2 className="text-3xl sm:text-4xl font-bold font-heading tracking-tight">
          Need Reliable CAD & Technical Production Support?
        </h2>

        <p className="text-slate-300 text-lg max-w-2xl mx-auto">
          Let's build a precise and efficient workflow for your next project.
        </p>

        {/* Buttons (No form fields) */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#services" className="btn-primary w-full sm:w-auto">
            <span>Explore Services</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${companyConfig.email}`}
            className="btn-secondary w-full sm:w-auto text-white border-slate-700 hover:bg-slate-800"
          >
            <Mail className="w-4 h-4 text-sky-400" />
            <span>Email Our Team</span>
          </a>
        </div>

      </div>
    </section>
  );
}
