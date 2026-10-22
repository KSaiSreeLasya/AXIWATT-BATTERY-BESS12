import React from 'react';
import { PageId } from '../types';
import { CERTIFICATIONS } from '../data/content';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-24 pb-20">
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden bg-gradient-to-b from-[#faf8ff] via-[#ffffff] to-[#f8fafc] border-b border-[#e2e8f0]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-start mb-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ecfdf5] border border-[#a7f3d0] text-xs font-semibold text-[#006d40]">
              <span className="w-2 h-2 rounded-full bg-[#00b870] animate-pulse"></span>
              <span>INSTITUTIONAL PROFILE · TIER-1 CLEAN ENERGY INFRASTRUCTURE</span>
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-bold text-[#006d40] uppercase tracking-wider block">
                About AxiWatt
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0f172a] tracking-tight leading-tight">
                Driving Innovation in <br />
                <span className="text-[#006d40]">Battery Technology.</span>
              </h1>
              <p className="text-lg md:text-xl text-[#334155] leading-relaxed max-w-2xl pt-2">
                AxiWatt is focused on supporting the evolving energy needs of modern industries through advanced battery solutions and energy storage technologies. Our areas of focus include electric mobility, telecommunications, and energy storage applications.
              </p>
              <p className="text-base text-[#475569] leading-relaxed max-w-2xl">
                We believe that reliable energy is essential for progress. Our objective is to support businesses with practical, efficient, and dependable battery solutions that meet changing operational requirements.
              </p>
            </div>

            <div className="lg:col-span-4 bg-white p-6 rounded-2xl border border-[#e2e8f0] custom-shadow-card space-y-4">
              <div className="text-xs font-bold uppercase tracking-wider text-[#006d40]">
                Key Facts At A Glance
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between py-2 border-b border-[#f1f5f9]">
                  <span className="text-[#64748b]">Storage Deployed:</span>
                  <span className="font-bold text-[#0f172a]">12.4 GWh+ Globally</span>
                </div>
                <div className="flex justify-between py-2 border-b border-[#f1f5f9]">
                  <span className="text-[#64748b]">System Reliability:</span>
                  <span className="font-bold text-[#006d40]">99.999% Mission Uptime</span>
                </div>
                <div className="flex justify-between py-2 border-b border-[#f1f5f9]">
                  <span className="text-[#64748b]">Global Footprint:</span>
                  <span className="font-bold text-[#0f172a]">42+ Countries Served</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-[#64748b]">Thermal Safety:</span>
                  <span className="font-bold text-[#006d40]">ASIL-D Certified Standard</span>
                </div>
              </div>
              <button
                onClick={() => onNavigate('contact')}
                className="w-full mt-2 bg-[#006d40] hover:bg-[#059669] text-white text-xs font-semibold py-2.5 rounded-lg transition-colors cursor-pointer"
              >
                Connect with Leadership
              </button>
            </div>
          </div>

          {/* R&D Lab Showcase Banner */}
          <div className="relative rounded-2xl md:rounded-3xl overflow-hidden border border-[#e2e8f0] custom-shadow-card bg-[#f8fafc]">
            <div className="aspect-[16/9] md:aspect-[21/9] w-full relative">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAiq9kRSuRHsteZImYfyoATtva2X2PJE3yXWenySAD6qMm75oZpPN--ENPsMISPISFPCKd0ey091oucqfCToH_OstMgeocxELr7ld1zCpEtM0j7CfRkzyjAWV-WjFoRTcZojGkdS-vxcLzcl0cFD9xLgZWNWYnnKNLrpNip65XX2fs9BbCpDP8i0Nh80mmW2335oVy-oXaX3o0E34OeWzTc_LMhkO3kxhzDiI6BbxlYM9wYUqME05C2ow"
                alt="AxiWatt Advanced R&D Lab and Engineering Team"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-auto bg-white/95 backdrop-blur-md border border-[#e2e8f0] rounded-xl p-4 shadow-lg max-w-md">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#00b870] animate-pulse"></span>
                <span className="text-[11px] font-bold text-[#64748b] uppercase tracking-wider">
                  GLOBAL HEADQUARTERS & R&D LABS
                </span>
              </div>
              <div className="text-sm font-bold text-[#0f172a] mt-1">
                Certified Carbon-Neutral Facility · 450+ Applied Patents
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. VISION, MISSION & APPROACH */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Vision */}
          <div className="bg-white p-8 rounded-2xl border border-[#e2e8f0] custom-shadow-subtle hover:custom-shadow-card transition-all">
            <div className="w-12 h-12 rounded-xl bg-[#ecfdf5] text-[#006d40] flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-2xl">visibility</span>
            </div>
            <span className="text-xs font-bold text-[#006d40] uppercase tracking-wider block mb-1">
              Purpose & Outlook
            </span>
            <h3 className="text-2xl font-bold text-[#0f172a] mb-3">Our Vision</h3>
            <p className="text-sm md:text-base text-[#475569] leading-relaxed">
              To contribute to a cleaner and more energy-efficient future through innovative battery technologies and sustainable energy solutions.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-white p-8 rounded-2xl border border-[#e2e8f0] custom-shadow-subtle hover:custom-shadow-card transition-all">
            <div className="w-12 h-12 rounded-xl bg-[#ecfdf5] text-[#006d40] flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-2xl">flag</span>
            </div>
            <span className="text-xs font-bold text-[#006d40] uppercase tracking-wider block mb-1">
              Strategic Commitment
            </span>
            <h3 className="text-2xl font-bold text-[#0f172a] mb-3">Our Mission</h3>
            <p className="text-sm md:text-base text-[#475569] leading-relaxed">
              To support the transition toward efficient energy systems by focusing on product reliability, technological advancement, customer requirements, and responsible energy practices.
            </p>
          </div>

          {/* Approach */}
          <div className="bg-white p-8 rounded-2xl border border-[#e2e8f0] custom-shadow-subtle hover:custom-shadow-card transition-all">
            <div className="w-12 h-12 rounded-xl bg-[#ecfdf5] text-[#006d40] flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-2xl">verified</span>
            </div>
            <span className="text-xs font-bold text-[#006d40] uppercase tracking-wider block mb-1">
              Execution Methodology
            </span>
            <h3 className="text-2xl font-bold text-[#0f172a] mb-3">Our Approach</h3>
            <p className="text-sm md:text-base text-[#475569] leading-relaxed">
              We emphasize quality, performance, application suitability, and continuous improvement in delivering battery solutions for a wide range of energy requirements.
            </p>
          </div>
        </div>
      </section>


      {/* 4. CERTIFIED QUALITY & INSTITUTIONAL ACCREDITATIONS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-[#006d40] uppercase tracking-wider">
            Governance & Quality Control
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-[#0f172a] mt-2 tracking-tight">
            Certified Quality & Institutional Accreditations
          </h2>
          <p className="text-sm text-[#475569] mt-2">
            AxiWatt operates in strict adherence to certified ISO management systems and in collaboration with clean energy authorities.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.name}
              className="p-5 rounded-xl border border-[#e2e8f0] bg-white text-center flex flex-col justify-center items-center custom-shadow-subtle hover:custom-shadow-card transition-all"
            >
              <span className="text-base font-bold text-[#0f172a] mb-1">{cert.name}</span>
              <span className="text-xs font-semibold text-[#006d40]">{cert.role}</span>
              <span className="text-[11px] text-[#64748b] mt-1">{cert.body}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
