import React from 'react';
import { PageId, ProductSolution } from '../types';
import { SOLUTIONS_DATA, SITE_BRAND } from '../data/content';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenProduct: (product: ProductSolution) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenProduct }) => {
  const handleNav = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="space-y-24 pb-20">
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden bg-gradient-to-b from-[#f0fdf4]/50 via-[#ffffff] to-[#f8fafc] border-b border-[#e2e8f0]/80">
        {/* Luminous Glow Ambient Spheres */}
        <div className="absolute top-0 right-10 w-96 h-96 bg-gradient-to-br from-[#00b870]/15 via-[#059669]/5 to-transparent rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-tr from-[#006d40]/10 via-[#00b870]/5 to-transparent rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Kicker / Status */}
          <div className="flex items-center gap-2.5 mb-6 text-xs font-semibold text-[#006d40]">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-[#ecfdf5] to-[#d1fae5] border border-[#a7f3d0]">
              <span className="w-2 h-2 rounded-full bg-[#00b870] animate-pulse"></span>
              <span>Next-Gen Clean Energy & Storage</span>
            </span>
            <span className="text-[#64748b] hidden sm:inline">·</span>
            <span className="text-[#64748b] uppercase tracking-wider hidden sm:inline">
              MODULAR ARCHITECTURE 4.0
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0f172a] tracking-tight leading-[1.12]">
                Powering Progress. <br />
                <span className="bg-gradient-to-r from-[#006d40] via-[#059669] to-[#00b870] bg-clip-text text-transparent">Energizing the Future.</span>
              </h1>

              <div className="text-lg md:text-xl font-semibold text-[#334155]">
                Advanced Battery Solutions for a Sustainable World
              </div>

              <p className="text-base md:text-lg text-[#475569] leading-relaxed max-w-2xl">
                At AxiWatt, we are focused on delivering innovative battery and energy storage solutions for electric mobility, telecommunications, and modern power infrastructure. Our approach combines reliable performance, efficient energy management, and sustainability to meet the evolving needs of industries.
              </p>

              <div className="p-4 rounded-xl bg-gradient-to-r from-[#ecfdf5] to-[#f0fdf4] border border-[#a7f3d0] text-sm font-semibold text-[#006d40] flex items-center gap-3">
                <span className="material-symbols-outlined text-xl text-[#006d40]">bolt</span>
                <span>Powering mobility. Strengthening connectivity. Enabling a cleaner energy future.</span>
              </div>

              {/* CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={() => handleNav('products')}
                  className="bg-gradient-to-r from-[#006d40] to-[#047857] hover:from-[#059669] hover:to-[#00b870] text-white text-base font-semibold px-7 h-12 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 shadow-md shadow-[#006d40]/20 hover:shadow-lg cursor-pointer"
                >
                  <span>Explore Our Solutions</span>
                  <span className="material-symbols-outlined text-lg">arrow_forward</span>
                </button>
                <button
                  onClick={() => handleNav('contact')}
                  className="bg-[#f1f5f9] hover:bg-[#e2e8f0] text-[#0f172a] text-base font-semibold px-6 h-12 rounded-lg border border-[#e2e8f0] transition-colors duration-150 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Contact Us</span>
                </button>
              </div>

              {/* Quick Metrics Bar */}
              <div className="pt-8 border-t border-[#e2e8f0] grid grid-cols-3 gap-6">
                <div>
                  <span className="block text-[11px] font-bold text-[#64748b] uppercase tracking-wider">
                    AVERAGE SWAP
                  </span>
                  <span className="text-2xl md:text-3xl font-bold text-[#0f172a]">&lt;45s</span>
                  <span className="block text-xs text-[#006d40] font-medium mt-0.5">Ultra-Fast Dock</span>
                </div>
                <div>
                  <span className="block text-[11px] font-bold text-[#64748b] uppercase tracking-wider">
                    FLEET UPTIME
                  </span>
                  <span className="text-2xl md:text-3xl font-bold text-[#0f172a]">99.8%</span>
                  <span className="block text-xs text-[#006d40] font-medium mt-0.5">Continuous Shift</span>
                </div>
                <div>
                  <span className="block text-[11px] font-bold text-[#64748b] uppercase tracking-wider">
                    BATTERY LIFE
                  </span>
                  <span className="text-2xl md:text-3xl font-bold text-[#0f172a]">2,500+</span>
                  <span className="block text-xs text-[#006d40] font-medium mt-0.5">Full Cycles</span>
                </div>
              </div>
            </div>

            {/* Right Visual Frame */}
            <div className="lg:col-span-5 relative">
              <div className="relative bg-white rounded-2xl p-3 border border-[#e2e8f0] custom-shadow-card">
                <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-[#f8fafc]">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-3amLVQmuNS0f3YyiyQZlZrLwBDdnPApUWKZqQfnRsaLbdCr1FFSBV0AqMpPVv0X6sKnrX8xp_2JUzuOD8lwSNPMu4z1N8sYTzMPJsx3awUCnjKAJEC50RXxx9CKuzOLAG9GDELyJwomrREuNvEHRU1rSlL6Zj3f_nDDYlI9XJw8RkyNlB0iKSyKagbVdCiiBcRB39ccyT9MQNWSlNHUEXdLkuUUm47Lza3YT18A1oKQiUBtEJRf08g"
                    alt="AxiWatt Urban Mobility & Energy Solutions"
                    className="w-full h-full object-cover"
                  />
                  {/* Floating Overlay Badge */}
                  <div className="absolute bottom-3 inset-x-3 bg-white/95 backdrop-blur-md rounded-xl p-3.5 border border-[#e2e8f0] shadow-sm flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#006d40] text-lg">battery_charging_full</span>
                      <span className="font-bold text-[#0f172a]">100% Charged</span>
                    </div>
                    <div className="h-4 w-px bg-[#e2e8f0]"></div>
                    <div className="text-[#334155] font-medium">140 km Urban Range</div>
                    <div className="h-4 w-px bg-[#e2e8f0]"></div>
                    <div className="text-[#006d40] font-bold">Swapped in 45s</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. OUR SOLUTIONS OVERVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-[#006d40] uppercase tracking-wider">
            Engineered For Industrial Performance
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a] mt-2 tracking-tight">
            Our Solutions
          </h2>
          <p className="text-base text-[#475569] mt-3">
            Explore advanced battery and storage architectures tailored for mobility, telecommunications, grid integration, and equipment modernization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SOLUTIONS_DATA.map((sol) => (
            <div
              key={sol.id}
              className="bg-white rounded-2xl border border-[#e2e8f0] p-8 custom-shadow-subtle hover:custom-shadow-card transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="relative rounded-xl overflow-hidden aspect-[16/10] bg-[#f8fafc] mb-6">
                  <img
                    src={sol.image}
                    alt={sol.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[11px] font-bold text-[#0f172a] border border-[#e2e8f0]">
                    {sol.badge}
                  </div>
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-[#0f172a] mb-2">
                  {sol.title}
                </h3>
                <p className="text-sm md:text-base text-[#475569] mb-4 leading-relaxed">
                  {sol.description}
                </p>

                <div className="space-y-2 mb-6">
                  <span className="text-xs font-bold text-[#334155] uppercase tracking-wider block">
                    Core Applications:
                  </span>
                  <div className="flex flex-wrap gap-2 text-xs text-[#475569]">
                    {sol.applications.map((app, i) => (
                      <span key={i} className="bg-[#f8fafc] px-2.5 py-1 rounded-md border border-[#e2e8f0]">
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-[#f1f5f9] flex items-center justify-between">
                <button
                  onClick={() => onOpenProduct(sol)}
                  className="text-sm font-semibold text-[#006d40] hover:text-[#059669] inline-flex items-center gap-1 cursor-pointer"
                >
                  <span>View Specifications</span>
                  <span className="material-symbols-outlined text-base">arrow_forward</span>
                </button>
                <button
                  onClick={() => handleNav('contact')}
                  className="text-xs font-semibold text-[#475569] hover:text-[#0f172a] px-3 py-1.5 rounded-lg bg-[#f8fafc] border border-[#e2e8f0]"
                >
                  Request Quote
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. WHY AXIWATT? */}
      <section className="bg-[#f8fafc] py-20 border-y border-[#e2e8f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-[#006d40] uppercase tracking-wider">
              The AxiWatt Advantage
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a] mt-2 tracking-tight">
              Why AxiWatt?
            </h2>
            <p className="text-base text-[#475569] mt-3">
              We engineer dependable, sustainable, and client-tailored power systems built for the evolving demands of modern industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-8 rounded-2xl border border-[#e2e8f0] custom-shadow-subtle flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#ecfdf5] text-[#006d40] flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-2xl">verified_user</span>
                </div>
                <h3 className="text-lg font-bold text-[#0f172a] mb-2">Reliable Performance</h3>
                <p className="text-sm text-[#475569] leading-relaxed">
                  Solutions designed around dependable power and consistent operation, rigorously tested across temperature extremes and commercial shift cycles.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#f1f5f9] text-xs font-semibold text-[#006d40]">
                99.999% Mission Uptime
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-[#e2e8f0] custom-shadow-subtle flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#ecfdf5] text-[#006d40] flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-2xl">memory</span>
                </div>
                <h3 className="text-lg font-bold text-[#0f172a] mb-2">Technology-Driven Approach</h3>
                <p className="text-sm text-[#475569] leading-relaxed">
                  A focus on evolving battery technologies and energy storage innovation, including high-speed edge BMS monitoring, SiC switching, and thermal safety.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#f1f5f9] text-xs font-semibold text-[#006d40]">
                450+ Applied Patents
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-[#e2e8f0] custom-shadow-subtle flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#ecfdf5] text-[#006d40] flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-2xl">tune</span>
                </div>
                <h3 className="text-lg font-bold text-[#0f172a] mb-2">Customer-Centric Solutions</h3>
                <p className="text-sm text-[#475569] leading-relaxed">
                  Products and engineering services tightly aligned with application-specific requirements, from custom form factors to tailored discharge curves.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#f1f5f9] text-xs font-semibold text-[#006d40]">
                Turnkey Engineering
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-[#e2e8f0] custom-shadow-subtle flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#ecfdf5] text-[#006d40] flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-2xl">cyclone</span>
                </div>
                <h3 className="text-lg font-bold text-[#0f172a] mb-2">Sustainability Focus</h3>
                <p className="text-sm text-[#475569] leading-relaxed">
                  Supporting energy efficiency and responsible battery lifecycle management with closed-loop hydrometallurgical recycling and zero toxic off-gassing.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#f1f5f9] text-xs font-semibold text-[#006d40]">
                98.4% Material Recovery
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. BUILDING A SMARTER ENERGY FUTURE (CTA) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-br from-[#ecfdf5] via-[#f0fdf4] to-[#d1fae5] border border-[#a7f3d0] p-8 md:p-14 overflow-hidden shadow-lg shadow-[#006d40]/5">
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-gradient-to-tl from-[#00b870]/20 to-transparent rounded-full blur-2xl pointer-events-none"></div>
          <div className="max-w-3xl relative z-10 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 border border-[#a7f3d0] text-xs font-bold text-[#006d40] tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-[#00b870] animate-pulse"></span>
              Transition With Confidence
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0f172a] tracking-tight">
              Building a <span className="bg-gradient-to-r from-[#006d40] via-[#059669] to-[#00b870] bg-clip-text text-transparent">Smarter Energy Future</span>
            </h2>
            <p className="text-base md:text-lg text-[#334155] leading-relaxed">
              As industries transition toward electrification and renewable energy, AxiWatt aims to support this transformation with battery technologies that enable reliable, efficient, and sustainable power.
            </p>
            <p className="text-lg font-bold text-[#006d40]">
              Let's power the future together.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => handleNav('contact')}
                className="bg-gradient-to-r from-[#006d40] to-[#047857] hover:from-[#059669] hover:to-[#00b870] text-white text-base font-semibold px-8 h-12 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 shadow-md shadow-[#006d40]/20 hover:shadow-lg cursor-pointer"
              >
                <span>Schedule a Consultation</span>
                <span className="material-symbols-outlined text-lg">calendar_today</span>
              </button>
              <button
                onClick={() => handleNav('about')}
                className="bg-white hover:bg-[#f8fafc] text-[#0f172a] text-base font-semibold px-6 h-12 rounded-lg border border-[#cbd5e1] hover:border-[#94a3b8] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                <span>Learn More About Us</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
