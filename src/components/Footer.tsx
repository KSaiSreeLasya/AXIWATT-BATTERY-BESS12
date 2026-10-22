import React from 'react';
import { PageId } from '../types';
import { SITE_BRAND } from '../data/content';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#f8fafc] border-t border-[#e2e8f0] text-[#334155]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#e2e8f0]">
          {/* Brand Column */}
          <div className="md:col-span-4 space-y-4">
            <div className="space-y-2">
              <div className="bg-white p-2.5 rounded-xl border border-[#e2e8f0] inline-flex items-center shadow-sm">
                <img
                  src={SITE_BRAND.logoUrl}
                  alt="AXIWATT Logo"
                  className="h-10 w-auto object-contain"
                />
              </div>
              <div className="text-sm font-bold text-[#0f172a] tracking-tight">
                Axiwatt GreenTechno Private Limited
              </div>
            </div>
            <p className="text-sm text-[#475569] max-w-sm leading-relaxed">
              Powering Progress. Energizing the Future. Delivering advanced, high-reliability battery and energy storage systems across electric mobility, telecommunications, and industrial infrastructure.
            </p>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#006d40] pt-2">
              <span className="w-2 h-2 rounded-full bg-[#00b870] animate-pulse"></span>
              <span className="tracking-wider uppercase">ALL SYSTEMS NORMAL · ADVANCED ENERGY SYSTEMS</span>
            </div>
          </div>

          {/* Column 1: Navigation */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0f172a]">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="hover:text-[#006d40] transition-colors cursor-pointer text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="hover:text-[#006d40] transition-colors cursor-pointer text-left"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('products')}
                  className="hover:text-[#006d40] transition-colors cursor-pointer text-left"
                >
                  Products & Solutions
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('industries')}
                  className="hover:text-[#006d40] transition-colors cursor-pointer text-left"
                >
                  Industries We Serve
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('technology')}
                  className="hover:text-[#006d40] transition-colors cursor-pointer text-left"
                >
                  Technology
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('sustainability')}
                  className="hover:text-[#006d40] transition-colors cursor-pointer text-left"
                >
                  Sustainability
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="hover:text-[#006d40] transition-colors cursor-pointer text-left"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: Solutions */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0f172a]">
              Solutions
            </h4>
            <ul className="space-y-2 text-sm text-[#475569]">
              <li>
                <button onClick={() => handleNav('products')} className="hover:text-[#006d40] transition-colors text-left">
                  Automotive Batteries
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('products')} className="hover:text-[#006d40] transition-colors text-left">
                  Telecom Power Backups
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('products')} className="hover:text-[#006d40] transition-colors text-left">
                  BESS Container Systems
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('products')} className="hover:text-[#006d40] transition-colors text-left">
                  Lead Replacement Packs
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('technology')} className="hover:text-[#006d40] transition-colors text-left">
                  Smart BMS Edge Logic
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('sustainability')} className="hover:text-[#006d40] transition-colors text-left">
                  Closed-Loop Recycling
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal & Policies */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0f172a]">
              Legal & Policies
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => handleNav('privacy')}
                  className="hover:text-[#006d40] transition-colors cursor-pointer text-left"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('terms')}
                  className="hover:text-[#006d40] transition-colors cursor-pointer text-left"
                >
                  Terms & Conditions
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('warranty')}
                  className="hover:text-[#006d40] transition-colors cursor-pointer text-left"
                >
                  Warranty & RMA Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="hover:text-[#006d40] transition-colors cursor-pointer text-left text-xs text-[#64748b]"
                >
                  Bilateral NDA Inquiries
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('privacy')}
                  className="hover:text-[#006d40] transition-colors cursor-pointer text-left text-xs text-[#64748b]"
                >
                  Grievance Redressal
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Office */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0f172a]">
              Registered Office
            </h4>
            <div className="space-y-2 text-sm text-[#475569]">
              <p className="flex items-center gap-2">
                <span className="material-symbols-outlined text-base text-[#006d40]">mail</span>
                <a href={`mailto:${SITE_BRAND.contactEmail}`} className="hover:text-[#006d40] text-xs font-semibold">
                  {SITE_BRAND.contactEmail}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <span className="material-symbols-outlined text-base text-[#006d40]">call</span>
                <a href="tel:+919553029624" className="hover:text-[#006d40] text-xs font-semibold">{SITE_BRAND.phone}</a>
              </p>
              <p className="flex items-start gap-2 pt-1 text-xs">
                <span className="material-symbols-outlined text-base text-[#006d40] shrink-0 mt-0.5">location_on</span>
                <span className="leading-snug text-[11px]">{SITE_BRAND.address}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Copyright and Legal Notice */}
        <div className="pt-6 border-t border-[#e2e8f0] flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#64748b]">
          <p>© {new Date().getFullYear()} Axiwatt GreenTechno Private Limited. All rights reserved. Powering Progress. Energizing the Future.</p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <button
              onClick={() => handleNav('privacy')}
              className="hover:text-[#006d40] transition-colors cursor-pointer font-medium"
            >
              Privacy Policy
            </button>
            <span>·</span>
            <button
              onClick={() => handleNav('terms')}
              className="hover:text-[#006d40] transition-colors cursor-pointer font-medium"
            >
              Terms & Conditions
            </button>
            <span>·</span>
            <button
              onClick={() => handleNav('warranty')}
              className="hover:text-[#006d40] transition-colors cursor-pointer font-medium"
            >
              Warranty Policy
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
