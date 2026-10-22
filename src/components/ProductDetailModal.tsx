import React, { useState } from 'react';
import { ProductSolution, PageId } from '../types';

interface ProductDetailModalProps {
  product: ProductSolution | null;
  onClose: () => void;
  onInquire: (productTitle: string) => void;
  onNavigate: (page: PageId) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onInquire,
  onNavigate,
}) => {
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  if (!product) return null;

  const handleDownloadSpec = () => {
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0f172a]/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-[#e2e8f0] custom-shadow-float p-6 md:p-8">
        {/* Modal Header */}
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-[#e2e8f0]">
          <div>
            <span className="text-xs font-bold text-[#006d40] uppercase tracking-wider">
              {product.badge} · OEM Architecture Spec
            </span>
            <h3 className="text-2xl font-bold text-[#0f172a] mt-1">{product.title}</h3>
            <p className="text-sm text-[#475569]">{product.subtitle}</p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-2 rounded-lg text-[#64748b] hover:text-[#0f172a] hover:bg-[#f1f5f9] transition-colors"
          >
            <span className="material-symbols-outlined text-2xl">close</span>
          </button>
        </div>

        {/* Modal Content */}
        <div className="py-6 space-y-6">
          <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-[#f1f5f9]">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-cover"
            />
          </div>

          <p className="text-base text-[#334155] leading-relaxed">{product.description}</p>

          {/* Key Applications */}
          <div>
            <h4 className="text-xs font-bold text-[#0f172a] uppercase tracking-wider mb-2">
              Suitable Applications
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {product.applications.map((app, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm text-[#475569]">
                  <span className="material-symbols-outlined text-[#006d40] text-base">check_circle</span>
                  <span>{app}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Specifications Matrix */}
          <div>
            <h4 className="text-xs font-bold text-[#0f172a] uppercase tracking-wider mb-3">
              Standard Technical Specifications
            </h4>
            <div className="rounded-xl border border-[#e2e8f0] overflow-hidden">
              <table className="w-full text-left text-sm">
                <tbody>
                  {product.specs.map((s, idx) => (
                    <tr
                      key={idx}
                      className={idx % 2 === 0 ? 'bg-[#f8fafc]' : 'bg-white'}
                    >
                      <td className="py-2.5 px-4 font-semibold text-[#334155] w-1/3 border-b border-[#f1f5f9]">
                        {s.label}
                      </td>
                      <td className="py-2.5 px-4 text-[#0f172a] font-medium border-b border-[#f1f5f9]">
                        {s.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Key Advantages */}
          <div>
            <h4 className="text-xs font-bold text-[#0f172a] uppercase tracking-wider mb-2">
              Key Engineering Advantages
            </h4>
            <ul className="space-y-2 text-sm text-[#475569]">
              {product.keyFeatures.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[#006d40] text-base shrink-0 mt-0.5">
                    verified
                  </span>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="pt-4 border-t border-[#e2e8f0] flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={handleDownloadSpec}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#f1f5f9] hover:bg-[#e2e8f0] text-[#0f172a] text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-lg">
              {downloadSuccess ? 'check' : 'download'}
            </span>
            <span>
              {downloadSuccess ? 'Spec Sheet Downloaded' : 'Download Complete Spec Sheet'}
            </span>
          </button>

          <button
            onClick={() => {
              onInquire(product.title);
              onClose();
              onNavigate('contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#006d40] hover:bg-[#059669] text-white text-sm font-semibold px-6 py-2.5 rounded-lg transition-colors cursor-pointer shadow-sm"
          >
            <span>Inquire About This Solution</span>
            <span className="material-symbols-outlined text-base">arrow_forward</span>
          </button>
        </div>
      </div>
    </div>
  );
};
