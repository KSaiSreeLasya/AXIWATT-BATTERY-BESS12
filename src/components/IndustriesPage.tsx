import React, { useState } from 'react';
import { PageId } from '../types';
import { INDUSTRIES_DATA } from '../data/content';

interface IndustriesPageProps {
  onNavigate: (page: PageId) => void;
}

export const IndustriesPage: React.FC<IndustriesPageProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<string>(INDUSTRIES_DATA[0].id);

  const selectedIndustry =
    INDUSTRIES_DATA.find((ind) => ind.id === activeTab) || INDUSTRIES_DATA[0];

  return (
    <div className="space-y-24 pb-20">
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden bg-gradient-to-b from-[#faf8ff] via-[#ffffff] to-[#f8fafc] border-b border-[#e2e8f0]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold text-[#006d40] uppercase tracking-wider block">
              Application Verticals
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0f172a] tracking-tight leading-tight">
              Energy Solutions <br />
              <span className="text-[#006d40]">Across Industries.</span>
            </h1>
            <p className="text-lg text-[#334155] leading-relaxed">
              From electric mobility fleets and telecom towers to utility solar storage and heavy industrial facilities, AxiWatt provides tailored, high-reliability battery architectures for diverse operational demands.
            </p>
          </div>

          {/* Industry Navigation Pills */}
          <div className="mt-10 flex flex-wrap gap-2 p-1.5 bg-[#f1f5f9] rounded-xl border border-[#e2e8f0]">
            {INDUSTRIES_DATA.map((ind) => (
              <button
                key={ind.id}
                onClick={() => setActiveTab(ind.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs md:text-sm font-semibold transition-all cursor-pointer ${
                  activeTab === ind.id
                    ? 'bg-white text-[#0f172a] shadow-sm'
                    : 'text-[#475569] hover:text-[#0f172a]'
                }`}
              >
                <span className="material-symbols-outlined text-lg">{ind.icon}</span>
                <span>{ind.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 2. ACTIVE INDUSTRY DEEP-DIVE SPOTLIGHT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-[#e2e8f0] p-8 md:p-12 custom-shadow-card">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ecfdf5] border border-[#a7f3d0] text-xs font-bold text-[#006d40]">
                <span className="material-symbols-outlined text-base">{selectedIndustry.icon}</span>
                <span>{selectedIndustry.name} Focus</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0f172a] tracking-tight">
                {selectedIndustry.tagline}
              </h2>

              <p className="text-base text-[#475569] leading-relaxed">
                {selectedIndustry.description}
              </p>

              {/* Challenges vs Solutions */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                <div className="p-5 rounded-xl bg-[#f8fafc] border border-[#e2e8f0]">
                  <h4 className="text-xs font-bold text-[#ba1a1a] uppercase tracking-wider mb-3 flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-base">warning</span>
                    <span>Industry Challenges</span>
                  </h4>
                  <ul className="space-y-2 text-xs text-[#475569]">
                    {selectedIndustry.challenges.map((c, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-[#94a3b8]">•</span>
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-5 rounded-xl bg-[#ecfdf5] border border-[#a7f3d0]">
                  <h4 className="text-xs font-bold text-[#006d40] uppercase tracking-wider mb-3 flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-base">verified</span>
                    <span>AxiWatt Solution</span>
                  </h4>
                  <ul className="space-y-2 text-xs text-[#0f172a] font-medium">
                    {selectedIndustry.solutionsProvided.map((s, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-[#00b870]">✓</span>
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Typical Architecture */}
              <div className="p-4 rounded-xl bg-white border border-[#e2e8f0] flex items-center justify-between text-xs">
                <div>
                  <span className="text-[#64748b] block font-medium">Standard Pack Architecture:</span>
                  <span className="text-[#0f172a] font-bold text-sm">{selectedIndustry.typicalArchitecture}</span>
                </div>
                <button
                  onClick={() => {
                    onNavigate('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="bg-[#006d40] hover:bg-[#059669] text-white text-xs font-semibold px-4 py-2 rounded-lg transition-colors cursor-pointer shrink-0"
                >
                  Request Consultation
                </button>
              </div>
            </div>

            {/* Right Visual Image */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-[#f8fafc] border border-[#e2e8f0] custom-shadow-subtle">
                <img
                  src={selectedIndustry.image}
                  alt={selectedIndustry.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ALL INDUSTRIES GRID CARDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-[#006d40] uppercase tracking-wider">
            Sector Coverage
          </span>
          <h3 className="text-2xl font-bold text-[#0f172a] mt-1">
            Complete Industrial Energy Ecosystem
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {INDUSTRIES_DATA.map((ind) => (
            <div
              key={ind.id}
              onClick={() => setActiveTab(ind.id)}
              className={`p-6 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                activeTab === ind.id
                  ? 'bg-white border-[#00b870] custom-shadow-card ring-2 ring-[#00b870]/20'
                  : 'bg-white border-[#e2e8f0] hover:border-[#cbd5e1] custom-shadow-subtle'
              }`}
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#ecfdf5] text-[#006d40] flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-xl">{ind.icon}</span>
                </div>
                <h4 className="text-lg font-bold text-[#0f172a] mb-1">{ind.name}</h4>
                <p className="text-xs text-[#475569] leading-relaxed mb-4">{ind.tagline}</p>
              </div>

              <div className="pt-4 border-t border-[#f1f5f9] flex items-center justify-between text-xs font-semibold text-[#006d40]">
                <span>Explore Specifications</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
