import React from 'react';

export default function DeliverablesSection() {
  return (
    <section id="deliverables" className="py-14 sm:py-16 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-700 font-heading mb-2">
            <span className="tech-accent-line"></span>
            <span>Standardized Outputs</span>
          </div>

          {/* Heading */}
          <h2 className="heading-secondary text-slate-900 mb-3">
            Project Deliverables
          </h2>

          {/* Introductory text */}
          <p className="text-slate-600 text-lg leading-relaxed mb-4">
            Clean, structured, and native CAD/BIM format deliverables ready for engineering, permitting, and construction.
          </p>

          {/* Concise, professional paragraph covering all 12 deliverables */}
          <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
            Our deliverables cover a wide range of industry-standard formats, including DWG and DXF drawings, PDF documentation, Revit (RVT) models, IFC files, PTS/LAS point cloud data, survey and boundary plans, construction details, shop drawings, permit submission drawings, verified as-built plans, and multidisciplinary BIM models.
          </p>
        </div>
      </div>
    </section>
  );
}
