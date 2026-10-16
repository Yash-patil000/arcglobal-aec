import React from 'react';
import { companyConfig } from '../config/companyConfig';
import { ArrowRight, ChevronRight, Layers, CheckCircle2, ShieldCheck, Ruler } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="hero" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 cad-grid-light overflow-hidden">
      {/* Background CAD Accent vectors */}
      <div className="absolute top-12 left-6 text-[10px] font-mono text-slate-400 select-none pointer-events-none hidden lg:block">
        GRID_REF: 42° 21' N / 71° 03' W | SCALE 1:100 | UNIT: MM
      </div>
      <div className="absolute top-12 right-6 text-[10px] font-mono text-slate-400 select-none pointer-events-none hidden lg:block">
        CAD / BIM PRODUCED BY {companyConfig.shortName.toUpperCase()}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & Content */}
          <div className="lg:col-span-7 space-y-6">
            {/* Industry Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-sky-50 border border-sky-200 text-sky-800 text-xs font-semibold uppercase tracking-wider">
              <Ruler className="w-3.5 h-3.5 text-sky-600" />
              <span>Technical Outsource Production Partner</span>
            </div>

            {/* Main Headline */}
            <h1 className="heading-primary text-slate-900 tracking-tight">
              Architecture. Engineering. Surveying.{' '}
              <span className="text-sky-700 block">Delivered Precisely.</span>
            </h1>

            {/* Supporting Text */}
            <p className="text-lg sm:text-xl text-slate-700 font-normal leading-relaxed max-w-2xl">
              Professional CAD, BIM, Land Survey, Civil Engineering, Architectural Drafting, and Technical Documentation Services for businesses, contractors, architects, engineers, and developers.
            </p>

            {/* Additional Short Statement Box */}
            <div className="p-4 rounded bg-slate-50 border-l-4 border-sky-600 border-slate-200 text-slate-800 text-sm sm:text-base font-medium flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
              <span>
                From field data to construction-ready drawings — we transform technical information into accurate digital deliverables.
              </span>
            </div>

            {/* Action Buttons (NO quote forms, simple navigation CTAs) */}
            <div className="pt-2 flex flex-col sm:flex-row gap-4">
              <a href="#services" className="btn-primary">
                <span>Explore Our Services</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#capabilities" className="btn-secondary">
                <span>View Our Capabilities</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </a>
            </div>

            {/* Engineering Highlights Bar */}
            <div className="pt-6 grid grid-cols-3 gap-4 border-t border-slate-200 text-xs text-slate-600 font-medium">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                <span>US & Global Format Ready</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                <span>Multi-Discipline CAD/BIM</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                <span>Rigorous Quality Checks</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-lg border border-slate-300 bg-slate-900 p-2 shadow-2xl overflow-hidden group">
              {/* CAD Crosshair accents */}
              <div className="absolute top-4 left-4 z-20 text-[10px] font-mono text-cyan-400 bg-slate-950/80 px-2 py-1 rounded border border-cyan-800/60">
                LOD 350 BIM | DWG / RVT
              </div>
              <div className="absolute bottom-4 right-4 z-20 text-[10px] font-mono text-slate-300 bg-slate-950/80 px-2 py-1 rounded border border-slate-700">
                + PRECISION VERIFIED
              </div>

              {/* Hero Image */}
              <img
                src="./assets/images/hero_cad_visual.svg"
                alt="CAD Architectural & Civil Engineering Technical Drawings"
                className="w-full h-auto rounded object-cover aspect-[4/3] filter brightness-105 contrast-105"
              />

              {/* Hover blueprint line border overlay */}
              <div className="absolute inset-0 border-2 border-sky-500/0 group-hover:border-sky-500/40 rounded transition-all duration-300 pointer-events-none"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
