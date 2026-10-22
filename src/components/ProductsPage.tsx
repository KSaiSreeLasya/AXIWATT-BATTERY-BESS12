import React, { useState } from 'react';
import { PageId, ProductSolution } from '../types';
import { SOLUTIONS_DATA } from '../data/content';

interface ProductsPageProps {
  onOpenProduct: (product: ProductSolution) => void;
  onNavigate: (page: PageId) => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({ onOpenProduct, onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredSolutions =
    selectedCategory === 'all'
      ? SOLUTIONS_DATA
      : SOLUTIONS_DATA.filter((s) => s.category === selectedCategory);

  return (
    <div className="space-y-24 pb-20">
      {/* 1. HERO SECTION WITH GRADIENTS */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-24 overflow-hidden bg-gradient-to-b from-[#f0fdf4]/50 via-[#ffffff] to-[#f8fafc] border-b border-[#e2e8f0]/80">
        {/* Luminous Glow Ambient Spheres */}
        <div className="absolute top-0 right-10 w-96 h-96 bg-gradient-to-br from-[#00b870]/15 via-[#059669]/5 to-transparent rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-10 left-10 w-80 h-80 bg-gradient-to-tr from-[#006d40]/10 via-[#00b870]/5 to-transparent rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-[#ecfdf5] to-[#d1fae5] border border-[#a7f3d0] text-xs font-bold text-[#006d40] tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-[#00b870] animate-pulse"></span>
              Tier-1 Modular Architectures
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0f172a] tracking-tight leading-tight">
              Products & <span className="bg-gradient-to-r from-[#006d40] via-[#059669] to-[#00b870] bg-clip-text text-transparent">Solutions.</span>
            </h1>
            <p className="text-lg text-[#334155] leading-relaxed">
              Explore our comprehensive portfolio of advanced battery technologies and energy storage systems engineered for electric mobility, critical telecommunications, utility BESS, and direct lead replacement retrofits.
            </p>
          </div>

          {/* Full-Width Gradient Category Filter Bar (Navbar Wide Length) */}
          <div className="mt-10 w-full p-2 rounded-2xl bg-gradient-to-r from-[#f8fafc] via-[#ffffff] to-[#f8fafc] border border-[#e2e8f0] shadow-sm">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
              {[
                { id: 'all', label: 'All Solutions', icon: 'grid_view' },
                { id: 'automotive', label: 'Automotive Batteries', icon: 'electric_car' },
                { id: 'telecom', label: 'Telecom Batteries', icon: 'cell_tower' },
                { id: 'bess', label: 'BESS Storage', icon: 'solar_power' },
                { id: 'lead-replacement', label: 'Lead Replacement', icon: 'battery_charging_full' },
              ].map((tab) => {
                const isActive = selectedCategory === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setSelectedCategory(tab.id)}
                    className={`flex items-center justify-center gap-2 px-3 sm:px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                      isActive
                        ? 'bg-gradient-to-r from-[#006d40] to-[#059669] text-white shadow-md shadow-[#006d40]/25 scale-[1.01]'
                        : 'text-[#475569] hover:text-[#0f172a] hover:bg-white/90 border border-transparent hover:border-[#e2e8f0]'
                    }`}
                  >
                    <span className={`material-symbols-outlined text-lg ${isActive ? 'text-white' : 'text-[#006d40]'}`}>
                      {tab.icon}
                    </span>
                    <span className="truncate">{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 2. PRODUCT CARDS GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredSolutions.map((product) => (
            <div
              key={product.id}
              className="relative overflow-hidden bg-white rounded-3xl border border-[#e2e8f0] p-8 custom-shadow-subtle hover:custom-shadow-card hover:border-[#a7f3d0] transition-all flex flex-col justify-between group before:absolute before:inset-x-0 before:top-0 before:h-1.5 before:bg-gradient-to-r before:from-[#006d40] before:via-[#00b870] before:to-[#059669]"
            >
              <div>
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-[#f8fafc] mb-6 shadow-inner">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-gradient-to-r from-[#006d40] to-[#059669] text-white px-3.5 py-1 rounded-full text-xs font-bold tracking-wide shadow-md">
                    {product.badge}
                  </div>
                </div>

                <div className="text-xs font-bold text-[#006d40] uppercase tracking-wider mb-1">
                  {product.subtitle}
                </div>
                <h3 className="text-2xl font-bold text-[#0f172a] mb-3 group-hover:text-[#006d40] transition-colors">
                  {product.title}
                </h3>
                <p className="text-sm md:text-base text-[#475569] mb-6 leading-relaxed">
                  {product.description}
                </p>

                {/* Applications Pill Container */}
                <div className="mb-6 space-y-2">
                  <span className="text-xs font-bold text-[#334155] uppercase tracking-wider block">
                    Target Applications:
                  </span>
                  <div className="flex flex-wrap gap-2 text-xs text-[#475569]">
                    {product.applications.map((app, i) => (
                      <span
                        key={i}
                        className="bg-gradient-to-r from-[#f8fafc] to-[#f1f5f9] px-3 py-1 rounded-lg border border-[#e2e8f0] font-medium"
                      >
                        {app}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Spec Highlights Table */}
                <div className="mb-6 rounded-xl border border-[#e2e8f0] overflow-hidden text-xs">
                  {product.specs.slice(0, 3).map((spec, i) => (
                    <div
                      key={i}
                      className={`flex justify-between py-2.5 px-3.5 ${
                        i % 2 === 0 ? 'bg-gradient-to-r from-[#f8fafc] to-white' : 'bg-white'
                      }`}
                    >
                      <span className="font-semibold text-[#64748b]">{spec.label}</span>
                      <span className="font-bold text-[#0f172a]">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 border-t border-[#f1f5f9] flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  onClick={() => onOpenProduct(product)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-[#f8fafc] text-[#0f172a] text-sm font-semibold px-5 py-2.5 rounded-lg border border-[#e2e8f0] hover:border-[#cbd5e1] transition-all cursor-pointer shadow-sm"
                >
                  <span className="material-symbols-outlined text-base text-[#006d40]">analytics</span>
                  <span>View Full Architecture Spec</span>
                </button>
                <button
                  onClick={() => {
                    onNavigate('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 bg-gradient-to-r from-[#006d40] to-[#047857] hover:from-[#059669] hover:to-[#00b870] text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-all duration-200 cursor-pointer shadow-md shadow-[#006d40]/20"
                >
                  <span>Request Quote</span>
                  <span className="material-symbols-outlined text-base">arrow_forward</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. LITHIUM VS LEAD-ACID COMPARISON MATRIX */}
      <section className="bg-gradient-to-b from-[#f8fafc] via-[#ffffff] to-[#f8fafc] py-20 border-y border-[#e2e8f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-[#ecfdf5] to-[#d1fae5] border border-[#a7f3d0] text-xs font-bold text-[#006d40] tracking-wider uppercase">
              Electrochemical Benchmark
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#0f172a] mt-3 tracking-tight">
              AxiWatt Advanced LiFePO4 vs. <span className="text-[#64748b]">Legacy Lead-Acid</span>
            </h2>
            <p className="text-sm text-[#475569] mt-2">
              Why commercial and industrial operations are accelerating their replacement of conventional SLA/VRLA batteries.
            </p>
          </div>

          {/* Visual Lead vs Lithium Photographic Benchmark Feature */}
          <div className="mb-12 max-w-5xl mx-auto bg-white rounded-3xl border border-[#e2e8f0] p-4 md:p-6 shadow-md overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-5 rounded-2xl overflow-hidden border border-[#e2e8f0] max-h-[380px] flex items-center justify-center bg-[#f8fafc]">
                <img
                  src="/assets/aistudio/image_863d9d2a.png"
                  alt="Outdated Lead-Acid Bank vs Compact LiFePO4 Rack"
                  className="w-full h-full object-contain max-h-[360px]"
                />
              </div>
              <div className="md:col-span-7 space-y-4">
                <span className="text-xs font-bold text-[#006d40] uppercase tracking-wider block">
                  Direct Rack Replacement Retrofit
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-[#0f172a]">
                  Replace Bulky Lead-Acid Banks with High-Density LiFePO4
                </h3>
                <p className="text-sm text-[#475569] leading-relaxed">
                  A single AxiWatt LiFePO4 19-inch rack unit replaces up to three legacy open lead-acid battery cabinets, freeing up over 65% of floor space while eliminating corrosive acid fumes, hazard leaks, and maintenance watering.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="p-3.5 rounded-xl bg-[#fef2f2] border border-[#fecaca] text-xs space-y-1">
                    <span className="font-bold text-[#dc2626] flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-sm">cancel</span>
                      Outdated Lead-Acid Bank
                    </span>
                    <span className="text-[#7f1d1d] block">Heavy, corrosive gas risk, 50% max usable DOD, 500 cycle lifespan.</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-gradient-to-r from-[#ecfdf5] to-[#d1fae5] border border-[#a7f3d0] text-xs space-y-1">
                    <span className="font-bold text-[#006d40] flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-sm">check_circle</span>
                      Compact LiFePO4 Rack
                    </span>
                    <span className="text-[#065f46] block">Zero maintenance, 100% usable capacity, 4,500+ cycles, smart BMS.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl border border-[#e2e8f0] overflow-x-auto custom-shadow-card">
            <table className="w-full text-left text-sm">
              <thead className="bg-[#f8fafc] border-b border-[#e2e8f0]">
                <tr>
                  <th className="py-4 px-6 font-bold text-[#0f172a]">Performance Metric</th>
                  <th className="py-4 px-6 font-bold text-[#006d40] bg-gradient-to-r from-[#ecfdf5] to-[#d1fae5]/70 border-x border-[#a7f3d0]">
                    AxiWatt LiFePO4 Systems
                  </th>
                  <th className="py-4 px-6 font-bold text-[#64748b]">Conventional Lead-Acid / AGM</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#f1f5f9]">
                <tr>
                  <td className="py-4 px-6 font-semibold text-[#0f172a]">Cycle Life (to 80% DOD)</td>
                  <td className="py-4 px-6 font-bold text-[#006d40] bg-[#ecfdf5]/40 border-x border-[#a7f3d0]/40">3,500 – 5,000+ Full Cycles</td>
                  <td className="py-4 px-6 text-[#64748b]">400 – 600 Cycles</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold text-[#0f172a]">Usable Depth of Discharge (DOD)</td>
                  <td className="py-4 px-6 font-bold text-[#006d40] bg-[#ecfdf5]/40 border-x border-[#a7f3d0]/40">100% Usable with zero damage</td>
                  <td className="py-4 px-6 text-[#64748b]">50% max recommended</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold text-[#0f172a]">Curb Weight Reduction</td>
                  <td className="py-4 px-6 font-bold text-[#006d40] bg-[#ecfdf5]/40 border-x border-[#a7f3d0]/40">Up to 70% lighter</td>
                  <td className="py-4 px-6 text-[#64748b]">Heavy, dense lead plates</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold text-[#0f172a]">Charging Time</td>
                  <td className="py-4 px-6 font-bold text-[#006d40] bg-[#ecfdf5]/40 border-x border-[#a7f3d0]/40">1 to 2 hours fast charge</td>
                  <td className="py-4 px-6 text-[#64748b]">8 to 12 hours slow absorption</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold text-[#0f172a]">Maintenance & Off-Gassing</td>
                  <td className="py-4 px-6 font-bold text-[#006d40] bg-[#ecfdf5]/40 border-x border-[#a7f3d0]/40">Zero maintenance, sealed, no fumes</td>
                  <td className="py-4 px-6 text-[#64748b]">Watering required, corrosive gas risk</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold text-[#0f172a]">Round-Trip Efficiency</td>
                  <td className="py-4 px-6 font-bold text-[#006d40] bg-[#ecfdf5]/40 border-x border-[#a7f3d0]/40">&gt; 96% Coulometric Efficiency</td>
                  <td className="py-4 px-6 text-[#64748b]">75% – 80% with heat loss</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

    </div>
  );
};
