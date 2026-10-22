/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageId, ProductSolution } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';
import { AboutPage } from './components/AboutPage';
import { ProductsPage } from './components/ProductsPage';
import { IndustriesPage } from './components/IndustriesPage';
import { TechnologyPage } from './components/TechnologyPage';
import { SustainabilityPage } from './components/SustainabilityPage';
import { ContactPage } from './components/ContactPage';
import { PrivacyPolicyPage } from './components/PrivacyPolicyPage';
import { TermsPage } from './components/TermsPage';
import { WarrantyPage } from './components/WarrantyPage';
import { ProductDetailModal } from './components/ProductDetailModal';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [selectedProduct, setSelectedProduct] = useState<ProductSolution | null>(null);

  // Sync hash routing on load or hashchange
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      const validPages: PageId[] = [
        'home',
        'about',
        'products',
        'industries',
        'technology',
        'sustainability',
        'contact',
        'privacy',
        'terms',
        'warranty',
      ];
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-[#0f172a] flex flex-col font-sans selection:bg-[#ecfdf5] selection:text-[#006d40]">
      {/* Top Navigation */}
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main Content Render */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage onNavigate={handleNavigate} onOpenProduct={setSelectedProduct} />
        )}
        {currentPage === 'about' && <AboutPage onNavigate={handleNavigate} />}
        {currentPage === 'products' && (
          <ProductsPage onOpenProduct={setSelectedProduct} onNavigate={handleNavigate} />
        )}
        {currentPage === 'industries' && <IndustriesPage onNavigate={handleNavigate} />}
        {currentPage === 'technology' && <TechnologyPage onNavigate={handleNavigate} />}
        {currentPage === 'sustainability' && (
          <SustainabilityPage onNavigate={handleNavigate} />
        )}
        {currentPage === 'contact' && <ContactPage />}
        {currentPage === 'privacy' && <PrivacyPolicyPage onNavigate={handleNavigate} />}
        {currentPage === 'terms' && <TermsPage onNavigate={handleNavigate} />}
        {currentPage === 'warranty' && <WarrantyPage onNavigate={handleNavigate} />}
      </main>

      {/* Product Spec Detail Modal */}
      {selectedProduct && (
        <ProductDetailModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onInquire={() => {
            setSelectedProduct(null);
            handleNavigate('contact');
          }}
          onNavigate={handleNavigate}
        />
      )}

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
