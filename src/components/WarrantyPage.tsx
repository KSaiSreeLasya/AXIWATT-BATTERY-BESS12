import React from 'react';
import { PageId } from '../types';
import { CERTIFICATIONS } from '../data/content';

interface WarrantyPageProps {
  onNavigate: (page: PageId) => void;
}

export const WarrantyPage: React.FC<WarrantyPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-16 pb-20">
      {/* Header */}
      <section className="relative pt-12 pb-16 md:pt-16 md:pb-20 overflow-hidden bg-gradient-to-b from-[#f0fdf4]/50 via-[#ffffff] to-[#f8fafc] border-b border-[#e2e8f0]/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-[#ecfdf5] to-[#d1fae5] border border-[#a7f3d0] text-xs font-bold text-[#006d40] tracking-wider uppercase mb-4">
            <span className="w-2 h-2 rounded-full bg-[#00b870] animate-pulse"></span>
            Tier-1 Quality Assurance & Longevity Guarantee
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0f172a] tracking-tight leading-tight">
            Quality & <span className="bg-gradient-to-r from-[#006d40] via-[#059669] to-[#00b870] bg-clip-text text-transparent">Warranty Policy</span>
          </h1>
          <p className="text-sm text-[#64748b] mt-3">
            Axiwatt GreenTechno Private Limited · ISO 9001, ISO 14001 & ISO 45001 Certified Standards
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-[#e2e8f0] p-8 md:p-12 custom-shadow-card space-y-10 text-sm md:text-base text-[#334155] leading-relaxed">
          
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-[#0f172a] mb-3">
              1. Quality Benchmark & Manufacturing Philosophy
            </h2>
            <p>
              At <strong>Axiwatt GreenTechno Private Limited</strong>, every battery module, pack, and containerized BESS is manufactured under rigorous ISO 9001 quality management procedures and certified to ISO 14001 environmental standards. We employ automated cell impedance matching, computerized helium leak testing, and automated thermal cycling before lot dispatch.
            </p>
          </div>

          {/* Key Certification Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {CERTIFICATIONS.map((cert) => (
              <div key={cert.name} className="p-3.5 bg-[#f8fafc] rounded-xl border border-[#e2e8f0] text-xs">
                <div className="font-bold text-[#0f172a]">{cert.name}</div>
                <div className="text-[#006d40] font-semibold">{cert.role}</div>
                <div className="text-[11px] text-[#64748b] mt-0.5">{cert.body}</div>
              </div>
            ))}
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-bold text-[#0f172a] mb-3">
              2. Standard Warranty Coverage Periods
            </h2>
            <p className="mb-3">AxiWatt systems carry performance warranties based on product category:</p>
            <div className="overflow-x-auto rounded-xl border border-[#e2e8f0]">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-[#f8fafc] border-b border-[#e2e8f0]">
                  <tr>
                    <th className="p-3.5 font-bold text-[#0f172a]">Product Category</th>
                    <th className="p-3.5 font-bold text-[#006d40]">Warranty Period</th>
                    <th className="p-3.5 font-bold text-[#334155]">Cycle Guarantee (80% SOH)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#f1f5f9]">
                  <tr>
                    <td className="p-3.5 font-semibold">Automotive Mobility Packs (EV)</td>
                    <td className="p-3.5 text-[#006d40] font-bold">3 to 5 Years</td>
                    <td className="p-3.5 text-[#64748b]">2,500 – 3,000 Full Cycles</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-semibold">Telecom 48V Rack Batteries</td>
                    <td className="p-3.5 text-[#006d40] font-bold">5 Years Standard</td>
                    <td className="p-3.5 text-[#64748b]">4,500 Full Cycles @ 80% DOD</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-semibold">Utility & Commercial BESS</td>
                    <td className="p-3.5 text-[#006d40] font-bold">5 to 10 Years</td>
                    <td className="p-3.5 text-[#64748b]">5,000+ Full Cycles / MWh Throughput</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-semibold">Lead Replacement Drop-in Blocks</td>
                    <td className="p-3.5 text-[#006d40] font-bold">3 to 5 Years</td>
                    <td className="p-3.5 text-[#64748b]">3,500+ Full Cycles</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-bold text-[#0f172a] mb-3">
              3. Battery Management System (BMS) Telemetry
            </h2>
            <p>
              AxiWatt packs feature continuous digital memory logging of cell voltages, charge/discharge currents, and thermal extremes. In the event of an RMA claim, the onboard BMS historical log is evaluated to verify operational boundaries and expedite rapid component replacement or software calibration.
            </p>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-bold text-[#0f172a] mb-3">
              4. Return Merchandise Authorization (RMA) Process
            </h2>
            <ol className="list-decimal pl-5 space-y-1.5 text-sm text-[#475569]">
              <li>Contact our technical support desk at <a href="mailto:contact@axiwatt.com" className="text-[#006d40] font-semibold">contact@axiwatt.com</a> with module serial numbers and BMS telemetry logs.</li>
              <li>Our systems engineering center issues an official RMA ticket within 24 business hours.</li>
              <li>A certified regional field engineer is dispatched or replacement modules are expedited directly from our Hyderabad depot.</li>
            </ol>
          </div>

          <div className="pt-6 border-t border-[#f1f5f9] flex items-center justify-between">
            <button
              onClick={() => onNavigate('contact')}
              className="bg-gradient-to-r from-[#006d40] to-[#047857] hover:from-[#059669] hover:to-[#00b870] text-white text-sm font-semibold px-6 py-2.5 rounded-lg transition-all cursor-pointer shadow-md shadow-[#006d40]/20"
            >
              Initiate Technical Support
            </button>
            <button
              onClick={() => onNavigate('home')}
              className="text-sm font-semibold text-[#64748b] hover:text-[#0f172a] transition-colors cursor-pointer"
            >
              Back to Home
            </button>
          </div>

        </div>
      </section>
    </div>
  );
};
