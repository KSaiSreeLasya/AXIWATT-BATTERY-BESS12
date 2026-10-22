import React, { useState } from 'react';
import { PageId } from '../types';
import { SITE_BRAND } from '../data/content';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'products', label: 'Products & Solutions' },
    { id: 'industries', label: 'Industries' },
    { id: 'technology', label: 'Technology' },
    { id: 'sustainability', label: 'Sustainability' },
    { id: 'contact', label: 'Contact Us' },
  ];

  const handleNavClick = (id: PageId) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-[#ffffff]/95 backdrop-blur-md border-b border-[#e2e8f0] transition-colors duration-150 relative">
      <div className="absolute bottom-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#00b870]/50 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Left Cluster: Official Logo + Navigation Links shifted to the left */}
        <div className="flex items-center gap-8 xl:gap-12">
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center cursor-pointer group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00b870] rounded-lg shrink-0 py-1"
          >
            <img
              src={SITE_BRAND.logoUrl}
              alt="AXIWATT Logo"
              className="h-10 md:h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
            />
          </button>

          {/* Navigation Links positioned towards the left */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-sm font-medium transition-colors duration-150 py-1 border-b-2 whitespace-nowrap shrink-0 cursor-pointer ${
                    isActive
                      ? 'text-[#006d40] border-[#006d40] font-semibold'
                      : 'text-[#334155] border-transparent hover:text-[#006d40] hover:border-[#00b870]/40'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center lg:hidden shrink-0">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="p-2 rounded-lg text-[#334155] hover:text-[#006d40] hover:bg-[#f8fafc] focus-visible:outline-none"
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#e2e8f0] bg-white px-4 pt-3 pb-6 space-y-2 shadow-lg animate-in fade-in duration-200">
          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-3 py-2.5 rounded-lg text-base font-medium transition-colors flex items-center justify-between ${
                  isActive
                    ? 'bg-[#ecfdf5] text-[#006d40] font-semibold'
                    : 'text-[#334155] hover:bg-[#f8fafc] hover:text-[#006d40]'
                }`}
              >
                <span>{item.label}</span>
                {isActive && <span className="material-symbols-outlined text-sm">check</span>}
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};
