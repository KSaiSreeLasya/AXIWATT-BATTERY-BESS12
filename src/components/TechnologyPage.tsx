import React from 'react';
import { PageId } from '../types';
import { TECH_PILLARS } from '../data/content';

interface TechnologyPageProps {
  onNavigate: (page: PageId) => void;
}

export const TechnologyPage: React.FC<TechnologyPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-24 pb-20">
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden bg-gradient-to-b from-[#faf8ff] via-[#ffffff] to-[#f8fafc] border-b border-[#e2e8f0]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold text-[#006d40] uppercase tracking-wider block">
              Engineering Architecture
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0f172a] tracking-tight leading-tight">
              Technology That <br />
              <span className="text-[#006d40]">Moves Energy Forward.</span>
            </h1>
            <p className="text-lg text-[#334155] leading-relaxed">
              At AxiWatt, we recognize the importance of technology in developing efficient and reliable battery solutions. Our technology focus is guided by evolving industry requirements, application suitability, and improvements in energy storage performance.
            </p>
          </div>
        </div>
      </section>

      {/* 2. THE 4 TECHNOLOGY PILLARS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TECH_PILLARS.map((pillar) => (
            <div
              key={pillar.id}
              className="bg-white rounded-2xl border border-[#e2e8f0] p-8 custom-shadow-subtle hover:custom-shadow-card transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#ecfdf5] text-[#006d40] flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-2xl">{pillar.icon}</span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-[#0f172a] mb-2">
                  {pillar.title}
                </h3>
                <p className="text-sm md:text-base text-[#475569] mb-6 leading-relaxed">
                  {pillar.summary}
                </p>

                <div className="space-y-3 pt-4 border-t border-[#f1f5f9]">
                  {pillar.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs md:text-sm text-[#334155]">
                      <span className="material-symbols-outlined text-[#00b870] text-base shrink-0 mt-0.5">
                        check_circle
                      </span>
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
