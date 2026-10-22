import React, { useState } from 'react';

type ModeType = 'drive' | 'regen' | 'swap';

export const PowerFlowWidget: React.FC = () => {
  const [mode, setMode] = useState<ModeType>('drive');

  const modeData = {
    drive: {
      packStatus: 'Delivering 48V',
      packStatusClass: 'bg-[#ecfdf5] text-[#006d40]',
      soc: 94,
      flowLabel: 'Discharging · 4.2 kW',
      thermalCore: '29.4°C',
      efficiency: '98.2%',
      motorBadge: 'Torque Vectoring',
      speed: '48 km/h',
      range: '128 km',
      direction: 'normal',
    },
    regen: {
      packStatus: 'Reclaiming Power',
      packStatusClass: 'bg-[#82f5c1]/30 text-[#006c4a]',
      soc: 96,
      flowLabel: 'Recharging · +1.8 kW Kinetic',
      thermalCore: '27.1°C',
      efficiency: '99.1%',
      motorBadge: 'Regen Braking Active',
      speed: '22 km/h (Decel)',
      range: '134 km',
      direction: 'reverse',
    },
    swap: {
      packStatus: 'Docked Kiosk Slot 04',
      packStatusClass: 'bg-[#ecfdf5] text-[#006d40]',
      soc: 100,
      flowLabel: 'High-Rate Direct DC · 12 kW',
      thermalCore: '25.0°C (Active Chill)',
      efficiency: '99.8%',
      motorBadge: 'Standby Ready',
      speed: '0 km/h (Docked)',
      range: '145 km',
      direction: 'charge',
    },
  };

  const current = modeData[mode];

  return (
    <div className="bg-white rounded-2xl border border-[#e2e8f0] p-6 md:p-10 custom-shadow-card">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
        <div>
          <div className="flex items-center gap-2 text-[#006d40] text-xs font-bold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-[#00b870] animate-pulse"></span>
            <span>Live Telemetry Simulation</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-[#0f172a] mt-1">
            Interactive Power Flow Architecture
          </h3>
          <p className="text-sm text-[#475569] mt-2 max-w-xl">
            Switch operational modes to observe direct power distribution between the AxiWatt pack, regenerative powertrain, and intelligent vehicle console.
          </p>
        </div>

        {/* Mode Switcher Buttons */}
        <div className="inline-flex p-1 bg-[#f1f5f9] rounded-xl border border-[#e2e8f0] shrink-0">
          <button
            onClick={() => setMode('drive')}
            className={`px-4 py-2 rounded-lg text-xs md:text-sm font-semibold transition-all cursor-pointer ${
              mode === 'drive'
                ? 'bg-white text-[#0f172a] shadow-sm'
                : 'text-[#475569] hover:text-[#0f172a]'
            }`}
          >
            Acceleration
          </button>
          <button
            onClick={() => setMode('regen')}
            className={`px-4 py-2 rounded-lg text-xs md:text-sm font-semibold transition-all cursor-pointer ${
              mode === 'regen'
                ? 'bg-white text-[#0f172a] shadow-sm'
                : 'text-[#475569] hover:text-[#0f172a]'
            }`}
          >
            Regenerative Stop
          </button>
          <button
            onClick={() => setMode('swap')}
            className={`px-4 py-2 rounded-lg text-xs md:text-sm font-semibold transition-all cursor-pointer ${
              mode === 'swap'
                ? 'bg-white text-[#0f172a] shadow-sm'
                : 'text-[#475569] hover:text-[#0f172a]'
            }`}
          >
            Dock Fast-Charge
          </button>
        </div>
      </div>

      {/* Visual Flow Display Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center bg-[#f8fafc] rounded-2xl p-6 md:p-8 border border-[#e2e8f0] relative overflow-hidden">
        {/* Node 1: Swappable Battery Pack */}
        <div className="lg:col-span-4 bg-white rounded-xl p-6 border border-[#e2e8f0] custom-shadow-subtle">
          <div className="flex items-center justify-between mb-4">
            <span className="text-[11px] font-bold text-[#64748b] uppercase tracking-wider">
              MODULE A-1
            </span>
            <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${current.packStatusClass}`}>
              {current.packStatus}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#ecfdf5] flex items-center justify-center text-[#006d40] shrink-0">
              <span className="material-symbols-outlined text-2xl">battery_charging_full</span>
            </div>
            <div>
              <h4 className="text-base font-bold text-[#0f172a]">AxiWatt Core 2.8</h4>
              <p className="text-xs text-[#64748b]">LFP Safe Thermal Array</p>
            </div>
          </div>

          {/* Battery Gauge Bar */}
          <div className="mt-5 space-y-2">
            <div className="flex justify-between text-xs">
              <span className="text-[#475569]">State of Charge (SOC)</span>
              <span className="font-bold text-[#0f172a]">{current.soc}%</span>
            </div>
            <div className="w-full bg-[#f1f5f9] h-2 rounded-full overflow-hidden">
              <div
                className="bg-[#00b870] h-full rounded-full transition-all duration-500 ease-out"
                style={{ width: `${current.soc}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Central Animated Flow Indicator */}
        <div className="lg:col-span-4 flex flex-col items-center justify-center py-2 space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#00b870] animate-ping"></span>
            <span className="text-xs font-bold text-[#006d40] tracking-wide">
              {current.flowLabel}
            </span>
          </div>

          {/* Animated Conduit Line */}
          <div className="w-full relative flex items-center justify-center">
            <div className="h-2 w-full bg-[#e2e8f0] rounded-full overflow-hidden relative">
              <div
                className={`h-full bg-gradient-to-r from-[#00b870] via-[#006d40] to-[#00b870] w-1/3 rounded-full ${
                  mode === 'regen'
                    ? 'animate-pulse'
                    : 'animate-pulse'
                } transition-all duration-300`}
                style={{
                  margin: mode === 'regen' ? '0 0 0 auto' : mode === 'swap' ? 'auto' : '0 auto 0 0',
                }}
              ></div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 w-full text-center">
            <div className="bg-white p-3 rounded-xl border border-[#e2e8f0]">
              <span className="text-[10px] font-bold text-[#64748b] uppercase tracking-wider block">
                THERMAL CORE
              </span>
              <span className="text-base font-bold text-[#0f172a]">{current.thermalCore}</span>
            </div>
            <div className="bg-white p-3 rounded-xl border border-[#e2e8f0]">
              <span className="text-[10px] font-bold text-[#64748b] uppercase tracking-wider block">
                EFFICIENCY
              </span>
              <span className="text-base font-bold text-[#006d40]">{current.efficiency}</span>
            </div>
          </div>
        </div>

        {/* Node 2: Powertrain & Telemetry Console */}
        <div className="lg:col-span-4 bg-white rounded-xl p-6 border border-[#e2e8f0] custom-shadow-subtle">
          <div className="flex items-center justify-between mb-4">
            <span className="text-[11px] font-bold text-[#64748b] uppercase tracking-wider">
              MICRO-CONTROLLER
            </span>
            <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-[#f1f5f9] text-[#0f172a]">
              {current.motorBadge}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#f1f5f9] flex items-center justify-center text-[#0f172a] shrink-0">
              <span className="material-symbols-outlined text-2xl">electric_bolt</span>
            </div>
            <div>
              <h4 className="text-base font-bold text-[#0f172a]">Direct Hub Motor</h4>
              <p className="text-xs text-[#64748b]">Dual Inverter CAN-bus</p>
            </div>
          </div>

          <div className="mt-5 pt-3 border-t border-[#f1f5f9] flex justify-between items-center">
            <div>
              <span className="text-[10px] font-bold text-[#64748b] uppercase tracking-wider block">
                CURRENT SPEED
              </span>
              <span className="text-base font-bold text-[#0f172a]">{current.speed}</span>
            </div>
            <div className="text-right">
              <span className="text-[10px] font-bold text-[#64748b] uppercase tracking-wider block">
                PROJECTED RANGE
              </span>
              <span className="text-base font-bold text-[#006d40]">{current.range}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
