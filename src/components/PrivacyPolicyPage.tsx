import React from 'react';
import { PageId } from '../types';
import { SITE_BRAND } from '../data/content';

interface PrivacyPolicyPageProps {
  onNavigate: (page: PageId) => void;
}

export const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-16 pb-20">
      {/* Header */}
      <section className="relative pt-12 pb-16 md:pt-16 md:pb-20 overflow-hidden bg-gradient-to-b from-[#f0fdf4]/50 via-[#ffffff] to-[#f8fafc] border-b border-[#e2e8f0]/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-[#ecfdf5] to-[#d1fae5] border border-[#a7f3d0] text-xs font-bold text-[#006d40] tracking-wider uppercase mb-4">
            <span className="w-2 h-2 rounded-full bg-[#00b870] animate-pulse"></span>
            Institutional Governance & Compliance
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0f172a] tracking-tight leading-tight">
            Privacy <span className="bg-gradient-to-r from-[#006d40] via-[#059669] to-[#00b870] bg-clip-text text-transparent">Policy</span>
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
              1. Introduction & Entity Information
            </h2>
            <p>
              This Privacy Policy describes how <strong>Axiwatt GreenTechno Private Limited</strong> ("AxiWatt", "we", "us", or "our"), incorporated in India, collects, uses, protects, and handles the personal and technical data you provide when visiting our website or submitting inquiries for our battery solutions and energy storage systems.
            </p>
            <p className="mt-2 text-xs text-[#64748b]">
              Registered Office: Plot no. 102, 103, Sri Krishna Vihar, Temple Lane, Mythri Nagar Phase-2, Serillingampally, Miyapur Sub Post Office, Hyderabad, Rangareddy, Telangana 500049.
            </p>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-bold text-[#0f172a] mb-3">
              2. Information We Collect
            </h2>
            <p className="mb-2">We collect information strictly necessary to provide tailored engineering consultation, quotes, and technical specifications:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-sm text-[#475569]">
              <li><strong>Contact Information:</strong> Full name, institutional/work email, organization name, and phone number.</li>
              <li><strong>Engineering & Technical Data:</strong> Estimated battery capacity (kWh/MWh), voltage preferences, application sector (EV mobility, telecom, BESS), and operating conditions.</li>
              <li><strong>Project Scope & Notes:</strong> Specific integration requirements, delivery timelines, and bilateral non-disclosure preferences.</li>
              <li><strong>Automated Telemetry & Cookies:</strong> Essential session cookies and diagnostic logs to maintain site security and optimize web response performance.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-bold text-[#0f172a] mb-3">
              3. Purpose & Legal Basis of Processing
            </h2>
            <p>We process collected data under the following legitimate business purposes:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-sm text-[#475569] mt-2">
              <li>To evaluate and respond to engineering inquiries and system dimensioning requests.</li>
              <li>To issue formal commercial proposals, technical datasheets, and bilateral NDAs.</li>
              <li>To fulfill statutory compliance obligations under the Information Technology Act, 2000, and Digital Personal Data Protection (DPDP) Act, 2023.</li>
              <li>To ensure security, prevent malicious activities, and monitor web infrastructure reliability.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-bold text-[#0f172a] mb-3">
              4. Bilateral Confidentiality & NDA Commitment
            </h2>
            <p>
              We treat all client system architectures, fleet metrics, electrical schematics, and operational specifications with strict confidentiality. If you select the formal bilateral Non-Disclosure Agreement (NDA) option in our enquiry form, all technical dialogue is automatically bound under formal proprietary non-disclosure protocols before any detailed design documentation is exchanged.
            </p>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-bold text-[#0f172a] mb-3">
              5. Data Sharing & Third Parties
            </h2>
            <p>
              <strong>We do not sell, rent, or trade your personal or institutional data.</strong> Information is shared solely with vetted technical partners, email delivery infrastructure (such as EmailJS for inquiry routing), or as mandated by law enforcement or regulatory authorities having competent jurisdiction in India.
            </p>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-bold text-[#0f172a] mb-3">
              6. Data Security & Storage
            </h2>
            <p>
              We implement industry-standard administrative, physical, and technical safeguards including TLS/SSL encryption for data in transit and restricted role-based access for stored technical documentation. Data is stored on secure cloud servers complying with ISO 27001 standards.
            </p>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-bold text-[#0f172a] mb-3">
              7. Your Rights & Grievance Redressal
            </h2>
            <p>
              You have the right to request access, correction, or deletion of your personal contact records stored with us. For inquiries or grievance redressal, please contact our Compliance Officer:
            </p>
            <div className="mt-3 p-4 bg-[#f8fafc] rounded-xl border border-[#e2e8f0] text-sm">
              <p className="font-bold text-[#0f172a]">Grievance & Privacy Officer</p>
              <p className="text-[#475569]">Axiwatt GreenTechno Private Limited</p>
              <p className="text-[#475569]">Email: <a href="mailto:contact@axiwatt.com" className="text-[#006d40] font-semibold">contact@axiwatt.com</a></p>
              <p className="text-[#475569]">Phone: <a href="tel:+919553029624" className="text-[#006d40] font-semibold">+91 95530 29624</a></p>
              <p className="text-xs text-[#64748b] mt-1">Plot no. 102, 103, Sri Krishna Vihar, Temple Lane, Mythri Nagar Phase-2, Serillingampally, Miyapur, Hyderabad, Telangana 500049</p>
            </div>
          </div>

          <div className="pt-6 border-t border-[#f1f5f9] flex items-center justify-between">
            <button
              onClick={() => onNavigate('contact')}
              className="bg-gradient-to-r from-[#006d40] to-[#047857] hover:from-[#059669] hover:to-[#00b870] text-white text-sm font-semibold px-6 py-2.5 rounded-lg transition-all cursor-pointer shadow-md shadow-[#006d40]/20"
            >
              Contact Compliance Team
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
