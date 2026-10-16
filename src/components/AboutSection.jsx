import React from 'react';
import { companyConfig } from '../config/companyConfig';
import { Compass, CheckCircle2, Cpu, FileCheck } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Subtle Blueprint Grid Accent */}
      <div className="absolute inset-0 blueprint-subtle-pattern opacity-40 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-700 font-heading">
              <span className="tech-accent-line"></span>
              <span>About {companyConfig.shortName}</span>
            </div>

            <h2 className="heading-secondary text-slate-900">
              Technical Expertise Behind Every Drawing
            </h2>

            <div className="space-y-4 text-slate-700 text-base leading-relaxed">
              <p>
                <strong className="text-slate-900 font-semibold">{companyConfig.name}</strong> is a multidisciplinary CAD and technical services company providing Architecture, Civil Engineering, Land Survey CAD, BIM, and technical documentation solutions.
              </p>
              <p>
                We help professionals convert concepts, survey data, sketches, point clouds, and engineering information into accurate, organized, and construction-ready digital drawings.
              </p>
              <p>
                Our approach combines technical accuracy, practical understanding, and efficient project delivery.
              </p>
            </div>

            {/* Structured Bullet Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-200">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded bg-sky-50 text-sky-700 flex items-center justify-center shrink-0">
                  <Compass className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 font-heading">Multi-Discipline CAD</h4>
                  <p className="text-xs text-slate-600">Architectural, civil, survey, and MEP expertise.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded bg-sky-50 text-sky-700 flex items-center justify-center shrink-0">
                  <FileCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 font-heading">US Layer Standards</h4>
                  <p className="text-xs text-slate-600">AIA, National CAD, & custom client standards.</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Image */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded border border-slate-300 bg-white p-3 shadow-lg">
              <div className="absolute top-6 right-6 bg-slate-900/90 text-white text-[11px] font-mono px-3 py-1 rounded border border-slate-700 z-10">
                SCALE 1:50 | AUTOCAD / REVIT
              </div>

              <img
                src="./assets/images/about_cad_visual.svg"
                alt="Architectural Drafting & Engineering Workspace"
                className="w-full h-auto rounded border border-slate-200 object-cover aspect-[4/3]"
              />

              {/* Technical Caption Box */}
              <div className="mt-3 p-3 bg-slate-50 border border-slate-200 rounded text-xs text-slate-700 flex items-center justify-between">
                <span className="font-semibold font-heading text-slate-900">Technical Documentation Production</span>
                <span className="font-mono text-sky-700">AIA CAD Standard Compliant</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
