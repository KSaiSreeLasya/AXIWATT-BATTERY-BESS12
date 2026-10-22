import React, { useState } from 'react';
import { PageId } from '../types';

interface CapacityCalculatorProps {
  onSelectSolution?: (solutionName: string, estimatedKwh: number) => void;
  onNavigate?: (page: PageId) => void;
}

export const CapacityCalculator: React.FC<CapacityCalculatorProps> = ({
  onSelectSolution,
  onNavigate,
}) => {
  const [useCase, setUseCase] = useState<'mobility' | 'telecom' | 'bess' | 'lead-swap'>('mobility');
  const [loadKw, setLoadKw] = useState<number>(15);
  const [backupHours, setBackupHours] = useState<number>(4);
  const [voltage, setVoltage] = useState<number>(48);

  // Derived calculation
  const totalKwh = Math.round(loadKw * backupHours * 1.15 * 10) / 10; // with 15% safety headroom
  const requiredAh = Math.round((totalKwh * 1000) / voltage);

  const getRecommendation = () => {
    switch (useCase) {
      case 'mobility':
        return {
          title: 'AxiWatt Core E-Mobility Fleet Pack',
          module: `${Math.ceil(totalKwh / 2.8)}x Modular Core 2.8 (Swappable)`,
          chemistry: 'Automotive LiFePO4 / High-C NMC',
          benefit: 'Lightweight slide-and-click rapid swap (<45s dock exchange)',
          efficiency: '98.2% round-trip power delivery',
        };
      case 'telecom':
        return {
          title: 'AxiWatt 48V Telecom Rack Series',
          module: `${Math.ceil(totalKwh / 4.8)}x 48V 100Ah 19" Rack Units`,
          chemistry: 'Wide-Temp LiFePO4 (-20°C to +60°C)',
          benefit: 'Zero diesel generator run requirement during short outages',
          efficiency: '99.1% float efficiency with CAN/SNMP telemetry',
        };
      case 'bess':
        return {
          title: 'AxiWatt Commercial & Utility BESS Unit',
          module: `${Math.ceil(totalKwh / 100)}x 100 kWh Scalable Cabinet Array`,
          chemistry: 'Heavy-Duty LFP with liquid thermal management',
          benefit: 'Sub-20ms uninterruptible islanding & automated peak shaving',
          efficiency: '> 92% AC-to-AC round-trip efficiency',
        };
      case 'lead-swap':
        return {
          title: 'AxiWatt Drop-In Lithium Replacement Array',
          module: `${Math.ceil(totalKwh / 2.4)}x Standard BCI-Equivalent LFP Blocks`,
          chemistry: 'Direct SLA/AGM Drop-In LiFePO4 with Internal BMS',
          benefit: '68% weight reduction & 5x longer operational life cycle',
          efficiency: '100% usable capacity without deep-discharge damage',
        };
    }
  };

  const recommendation = getRecommendation();

  return (
    <div className="bg-white rounded-2xl border border-[#e2e8f0] p-6 md:p-8 custom-shadow-card">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#006d40]">
            Interactive Technical Tool
          </span>
          <h3 className="text-xl md:text-2xl font-bold text-[#0f172a] mt-1">
            Battery Sizing & Capacity Estimator
          </h3>
          <p className="text-sm text-[#475569] mt-1">
            Select your operational parameters to calculate required energy storage and view the recommended AxiWatt architecture.
          </p>
        </div>
        <div className="flex items-center gap-1.5 px-3 py-1 bg-[#ecfdf5] rounded-full text-xs font-semibold text-[#006d40]">
          <span className="w-2 h-2 rounded-full bg-[#00b870] animate-pulse"></span>
          Dynamic Sizing Engine
        </div>
      </div>

      {/* Use Case Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 p-1.5 bg-[#f1f5f9] rounded-xl mb-6">
        {[
          { id: 'mobility', label: 'E-Mobility Fleet', icon: 'electric_rickshaw' },
          { id: 'telecom', label: 'Telecom Towers', icon: 'cell_tower' },
          { id: 'bess', label: 'Industrial BESS', icon: 'solar_power' },
          { id: 'lead-swap', label: 'Lead Replacement', icon: 'autorenew' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setUseCase(tab.id as any)}
            className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg text-xs md:text-sm font-semibold transition-all cursor-pointer ${
              useCase === tab.id
                ? 'bg-white text-[#0f172a] shadow-sm'
                : 'text-[#475569] hover:text-[#0f172a]'
            }`}
          >
            <span className="material-symbols-outlined text-lg">{tab.icon}</span>
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Sliders Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Load kW Slider */}
        <div className="p-4 rounded-xl bg-[#f8fafc] border border-[#e2e8f0]">
          <div className="flex justify-between items-center mb-2">
            <label className="text-xs font-bold text-[#334155] uppercase tracking-wide">
              Average Load Demand
            </label>
            <span className="text-sm font-bold text-[#006d40]">{loadKw} kW</span>
          </div>
          <input
            type="range"
            min="1"
            max="150"
            step="1"
            value={loadKw}
            onChange={(e) => setLoadKw(Number(e.target.value))}
            className="w-full accent-[#006d40] cursor-pointer"
          />
          <div className="flex justify-between text-[11px] text-[#64748b] mt-1">
            <span>1 kW</span>
            <span>75 kW</span>
            <span>150 kW</span>
          </div>
        </div>

        {/* Backup Hours Slider */}
        <div className="p-4 rounded-xl bg-[#f8fafc] border border-[#e2e8f0]">
          <div className="flex justify-between items-center mb-2">
            <label className="text-xs font-bold text-[#334155] uppercase tracking-wide">
              Required Autonomy / Shift
            </label>
            <span className="text-sm font-bold text-[#006d40]">{backupHours} Hours</span>
          </div>
          <input
            type="range"
            min="1"
            max="24"
            step="0.5"
            value={backupHours}
            onChange={(e) => setBackupHours(Number(e.target.value))}
            className="w-full accent-[#006d40] cursor-pointer"
          />
          <div className="flex justify-between text-[11px] text-[#64748b] mt-1">
            <span>1h Quick Shift</span>
            <span>8h Standard</span>
            <span>24h Full Day</span>
          </div>
        </div>

        {/* System Voltage */}
        <div className="p-4 rounded-xl bg-[#f8fafc] border border-[#e2e8f0]">
          <div className="flex justify-between items-center mb-2">
            <label className="text-xs font-bold text-[#334155] uppercase tracking-wide">
              Nominal DC Bus Voltage
            </label>
            <span className="text-sm font-bold text-[#006d40]">{voltage} V</span>
          </div>
          <select
            value={voltage}
            onChange={(e) => setVoltage(Number(e.target.value))}
            className="w-full h-10 px-3 bg-white border border-[#cbd5e1] rounded-lg text-xs font-semibold text-[#0f172a] focus:outline-none focus:ring-2 focus:ring-[#00b870]"
          >
            <option value={48}>48V DC (Standard Telecom / Light EV)</option>
            <option value={72}>72V DC (Commercial 3-Wheelers)</option>
            <option value={96}>96V DC (Heavy Urban Logistics)</option>
            <option value={400}>400V DC (Industrial C&I Bus)</option>
            <option value={800}>800V DC (Megawatt BESS Grid)</option>
          </select>
          <div className="text-[11px] text-[#64748b] mt-2">
            Estimated Amp-Hours: <span className="font-bold text-[#0f172a]">{requiredAh.toLocaleString()} Ah</span>
          </div>
        </div>
      </div>

      {/* Calculated Output Box */}
      <div className="rounded-xl border border-[#bbf7d0] bg-[#f0fdf4] p-6 md:p-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold text-[#006d40] uppercase tracking-wider">
              <span className="material-symbols-outlined text-base">recommend</span>
              <span>Tailored Solution Recommendation</span>
            </div>
            <h4 className="text-xl font-bold text-[#0f172a]">{recommendation.title}</h4>
            <p className="text-sm text-[#334155]">
              Configuration: <strong className="text-[#006d40]">{recommendation.module}</strong> ({totalKwh} kWh total capacity including 15% reserve cushion).
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs text-[#475569] pt-1">
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-sm text-[#006d40]">check</span>
                {recommendation.chemistry}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-sm text-[#006d40]">check</span>
                {recommendation.benefit}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-sm text-[#006d40]">check</span>
                {recommendation.efficiency}
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <div className="text-right sm:pr-4 sm:border-r border-[#bbf7d0]">
              <div className="text-xs uppercase text-[#64748b] font-medium">Estimated Pack Sizing</div>
              <div className="text-2xl font-bold text-[#006d40]">{totalKwh} <span className="text-sm font-semibold">kWh</span></div>
            </div>
            <button
              onClick={() => {
                if (onSelectSolution) {
                  onSelectSolution(recommendation.title, totalKwh);
                }
                if (onNavigate) {
                  onNavigate('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#006d40] hover:bg-[#059669] text-white text-sm font-semibold px-6 py-3 rounded-lg transition-colors cursor-pointer shadow-sm"
            >
              <span>Request Formal Proposal</span>
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
