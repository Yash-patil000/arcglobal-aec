import React from 'react';
import { Mail } from 'lucide-react';

export default function HiringSection() {
  return (
    <section id="careers" className="py-16 sm:py-20 bg-white relative">
      {/* Anchor targets to preserve compatibility with existing navigation links */}
      <div id="hiring" className="sr-only" aria-hidden="true" />
      <div id="industries" className="sr-only" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-700 font-heading mb-2">
            <span className="tech-accent-line"></span>
            <span>Careers</span>
          </div>

          {/* Heading */}
          <h2 className="heading-secondary text-slate-900 mb-4">
            We&apos;re Hiring
          </h2>

          {/* Welcoming Quote */}
          <p className="text-slate-700 text-lg sm:text-xl leading-relaxed mb-6 font-normal">
            &ldquo;Great projects begin with great people. At ArcGlobal, we welcome talented minds who value precision, creativity, and innovation in CAD drafting, engineering, BIM, and geospatial solutions. Let&apos;s build the future together.&rdquo;
          </p>

          {/* Work-with-us email contact */}
          <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
            Interested in working with us? Get in touch at{' '}
            <a
              href="mailto:info@arcglobalaec.com"
              className="text-sky-600 hover:text-sky-700 font-semibold underline underline-offset-4 decoration-sky-300 hover:decoration-sky-600 transition-colors inline-flex items-center gap-1.5 align-baseline"
            >
              <Mail className="w-4 h-4 text-sky-600 shrink-0" />
              <span>info@arcglobalaec.com</span>
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
