import React from 'react';
import { PageId } from '../types';

interface TermsPageProps {
  onNavigate: (page: PageId) => void;
}

export const TermsPage: React.FC<TermsPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-16 pb-20">
      {/* Header */}
      <section className="relative pt-12 pb-16 md:pt-16 md:pb-20 overflow-hidden bg-gradient-to-b from-[#f0fdf4]/50 via-[#ffffff] to-[#f8fafc] border-b border-[#e2e8f0]/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-[#ecfdf5] to-[#d1fae5] border border-[#a7f3d0] text-xs font-bold text-[#006d40] tracking-wider uppercase mb-4">
            <span className="w-2 h-2 rounded-full bg-[#00b870] animate-pulse"></span>
            Commercial & Legal Framework
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0f172a] tracking-tight leading-tight">
            Terms & <span className="bg-gradient-to-r from-[#006d40] via-[#059669] to-[#00b870] bg-clip-text text-transparent">Conditions</span>
          </h1>
          <p className="text-sm text-[#64748b] mt-3">
            Last Updated: January 2026 · Axiwatt GreenTechno Private Limited
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-[#e2e8f0] p-8 md:p-12 custom-shadow-card space-y-10 text-sm md:text-base text-[#334155] leading-relaxed">
          
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-[#0f172a] mb-3">
              1. Agreement to Terms
            </h2>
            <p>
              These Terms & Conditions constitute a legally binding agreement between you (whether individually or on behalf of an entity) and <strong>Axiwatt GreenTechno Private Limited</strong> ("AxiWatt", "Company", "we", "us", or "our"), governing your access to and use of our website, product information, technical datasheets, and inquiry portals.
            </p>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-bold text-[#0f172a] mb-3">
              2. Intellectual Property Rights
            </h2>
            <p>
              Unless otherwise indicated, all proprietary trademarks, logos, brand names, visual schematics, algorithms, Battery Management System (BMS) architectures, and website software are our proprietary property and protected by applicable copyright, patent, and trademark laws of India and international treaties.
            </p>
            <p className="mt-2 text-sm text-[#475569]">
              Unauthorized reproduction, reverse engineering, decompilation, or extraction of AxiWatt pack designs or proprietary BMS source codes is strictly prohibited.
            </p>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-bold text-[#0f172a] mb-3">
              3. Commercial Quotations & Specifications
            </h2>
            <p>
              Technical specifications, capacity figures (Ah, kWh, MWh), discharge multipliers, cycle life curves, and thermal ratings published on this website are for engineering orientation purposes:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-sm text-[#475569] mt-2">
              <li>Formal commercial commitments, delivery lead times, and price quotations are binding only upon execution of a formal Purchase Order (PO) or Master Supply Agreement (MSA).</li>
              <li>AxiWatt reserves the right to introduce iterative electrochemical improvements and component optimizations without prior notification.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-bold text-[#0f172a] mb-3">
              4. Safe Handling, Installation & Safety Standards
            </h2>
            <p>
              All AxiWatt battery packs and energy storage systems must be handled, installed, commissioned, and serviced by certified high-voltage technicians in accordance with:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-sm text-[#475569] mt-2">
              <li>Applicable Indian Standards (IS), Central Electricity Authority (CEA) regulations, and Ministry of New and Renewable Energy (MNRE) guidelines.</li>
              <li>IEC 62619, IEC 62133, UL 1973, and NFPA 855 fire safety installation practices.</li>
              <li>Official AxiWatt operation and maintenance manuals provided with delivery lots.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-bold text-[#0f172a] mb-3">
              5. Limitation of Liability
            </h2>
            <p>
              In no event shall Axiwatt GreenTechno Private Limited, its directors, or employees be liable for any indirect, incidental, special, or consequential damages resulting from improper third-party cell tapping, unauthorized BMS tampering, or operational usage outside specified environmental ratings (-20°C to +60°C).
            </p>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-bold text-[#0f172a] mb-3">
              6. Governing Law & Dispute Resolution
            </h2>
            <p>
              These Terms shall be governed by and construed in accordance with the substantive laws of the Republic of India. Any controversy or claim arising out of or relating to these Terms or commercial dealings with AxiWatt shall be subject to the exclusive jurisdiction of the competent courts in <strong>Hyderabad, Telangana, India</strong>.
            </p>
          </div>

          <div className="pt-6 border-t border-[#f1f5f9] flex items-center justify-between">
            <button
              onClick={() => onNavigate('contact')}
              className="bg-gradient-to-r from-[#006d40] to-[#047857] hover:from-[#059669] hover:to-[#00b870] text-white text-sm font-semibold px-6 py-2.5 rounded-lg transition-all cursor-pointer shadow-md shadow-[#006d40]/20"
            >
              Contact Legal & Sales
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
