import React, { useState } from 'react';
import { PageId } from '../types';
import { SUSTAINABILITY_PILLARS, WHY_CHOOSE_AXIWATT } from '../data/content';

interface SustainabilityPageProps {
  onNavigate: (page: PageId) => void;
}

export const SustainabilityPage: React.FC<SustainabilityPageProps> = ({ onNavigate }) => {
  const [fleetSize, setFleetSize] = useState<number>(25);

  // Carbon calculator
  const co2AvoidedTons = Math.round(fleetSize * 4.6 * 10) / 10;
  const dieselLitersSaved = Math.round(fleetSize * 1820).toLocaleString();
  const treesEquivalent = Math.round(co2AvoidedTons * 48);

  return (
    <div className="space-y-24 pb-20">
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden bg-gradient-to-b from-[#faf8ff] via-[#ffffff] to-[#f8fafc] border-b border-[#e2e8f0]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold text-[#006d40] uppercase tracking-wider block">
              Environmental Stewardship
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0f172a] tracking-tight leading-tight">
              Energizing a <br />
              <span className="text-[#006d40]">Sustainable Future.</span>
            </h1>
            <p className="text-lg text-[#334155] leading-relaxed">
              At AxiWatt, we believe energy innovation should support a more sustainable future. Battery technology plays an important role in electrification, renewable energy utilization, and modern energy management.
            </p>
          </div>
        </div>
      </section>

      {/* 2. OUR 5 SUSTAINABILITY FOCUS AREAS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-[#006d40] uppercase tracking-wider">
            Our Commitments
          </span>
          <h2 className="text-3xl font-bold text-[#0f172a] mt-2">
            Our Sustainability Focus
          </h2>
          <p className="text-sm md:text-base text-[#475569] mt-2">
            Every battery pack is designed from the cell chemistry up to maximize lifetime efficiency and facilitate closed-loop circular recovery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SUSTAINABILITY_PILLARS.map((item) => (
            <div
              key={item.id}
              className="bg-white p-8 rounded-2xl border border-[#e2e8f0] custom-shadow-subtle hover:custom-shadow-card transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#006d40]">
                    Pillar
                  </span>
                  <span className="text-xl font-bold text-[#006d40]">{item.metric}</span>
                </div>
                <h3 className="text-xl font-bold text-[#0f172a] mb-2">{item.title}</h3>
                <p className="text-sm text-[#475569] leading-relaxed mb-6">{item.description}</p>
              </div>

              <div className="pt-4 border-t border-[#f1f5f9] text-xs font-medium text-[#64748b]">
                {item.metricLabel}
              </div>
            </div>
          ))}

          {/* Special Closed-Loop Highlight Card */}
          <div className="bg-[#ecfdf5] p-8 rounded-2xl border border-[#a7f3d0] custom-shadow-subtle flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#006d40] mb-4">
                <span className="material-symbols-outlined text-lg">cyclone</span>
                <span>Hydrometallurgical Recovery</span>
              </div>
              <h3 className="text-xl font-bold text-[#0f172a] mb-2">98.4% Active Metal Yield</h3>
              <p className="text-sm text-[#334155] leading-relaxed">
                Our closed-loop metallurgical partner programs reclaim lithium, nickel, cobalt, and copper from spent packs, re-purposing battery-grade precursors directly into new production runs.
              </p>
            </div>
            <div className="pt-4 border-t border-[#a7f3d0] text-xs font-bold text-[#006d40]">
              Zero-Landfill Guarantee
            </div>
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE ENVIRONMENTAL IMPACT CALCULATOR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-[#e2e8f0] p-8 md:p-12 custom-shadow-card">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-bold text-[#006d40] uppercase tracking-wider">
                Carbon Offset Simulator
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-[#0f172a]">
                Quantify Your Clean Energy Transition Impact
              </h3>
              <p className="text-sm text-[#475569] leading-relaxed">
                Estimate annual carbon reductions achieved by transitioning combustion equipment or diesel backup systems to clean AxiWatt battery solutions.
              </p>

              <div className="pt-4 space-y-2">
                <div className="flex justify-between text-sm font-semibold text-[#0f172a]">
                  <span>Number of Vehicles / Systems Converted:</span>
                  <span className="text-[#006d40] font-bold text-base">{fleetSize} Units</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="500"
                  step="5"
                  value={fleetSize}
                  onChange={(e) => setFleetSize(Number(e.target.value))}
                  className="w-full accent-[#006d40] cursor-pointer"
                />
                <div className="flex justify-between text-xs text-[#64748b]">
                  <span>5 Units (Pilot)</span>
                  <span>100 Units</span>
                  <span>500 Units (Commercial)</span>
                </div>
              </div>
            </div>

            {/* Impact Metric Counters */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-[#f8fafc] p-6 rounded-xl border border-[#e2e8f0] text-center">
                <span className="material-symbols-outlined text-3xl text-[#006d40] mb-2">co2</span>
                <div className="text-2xl font-bold text-[#0f172a]">{co2AvoidedTons}</div>
                <div className="text-xs text-[#64748b] mt-1">Metric Tons CO2 Avoided / Year</div>
              </div>

              <div className="bg-[#f8fafc] p-6 rounded-xl border border-[#e2e8f0] text-center">
                <span className="material-symbols-outlined text-3xl text-[#006d40] mb-2">local_gas_station</span>
                <div className="text-2xl font-bold text-[#0f172a]">{dieselLitersSaved}</div>
                <div className="text-xs text-[#64748b] mt-1">Liters of Diesel Fuel Saved</div>
              </div>

              <div className="bg-[#f8fafc] p-6 rounded-xl border border-[#e2e8f0] text-center">
                <span className="material-symbols-outlined text-3xl text-[#006d40] mb-2">park</span>
                <div className="text-2xl font-bold text-[#0f172a]">{treesEquivalent.toLocaleString()}</div>
                <div className="text-xs text-[#64748b] mt-1">Equivalent Tree Seedlings Grown</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SECTION 7: WHY CHOOSE AXIWATT? */}
      <section className="bg-[#f8fafc] py-20 border-y border-[#e2e8f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-[#006d40] uppercase tracking-wider">
              Core Principles
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a] mt-2 tracking-tight">
              Why Choose AxiWatt?
            </h2>
            <p className="text-sm md:text-base text-[#475569] mt-3">
              Four fundamental commitments that define our partnership with global mobility leaders, telecom operators, and industrial enterprises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {WHY_CHOOSE_AXIWATT.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-2xl border border-[#e2e8f0] custom-shadow-subtle flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 mb-2 text-xs font-bold text-[#006d40] uppercase tracking-wider">
                    <span>{item.subtitle}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#0f172a] mb-3">{item.title}</h3>
                  <p className="text-sm md:text-base text-[#475569] leading-relaxed mb-6">
                    {item.description}
                  </p>
                  <ul className="space-y-2.5 pt-4 border-t border-[#f1f5f9]">
                    {item.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2 text-xs md:text-sm text-[#334155]">
                        <span className="material-symbols-outlined text-base text-[#00b870] shrink-0 mt-0.5">
                          check_circle
                        </span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => {
                onNavigate('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 bg-[#006d40] hover:bg-[#059669] text-white text-base font-semibold px-8 py-3.5 rounded-lg transition-colors cursor-pointer shadow-sm"
            >
              <span>Partner with AxiWatt Today</span>
              <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
