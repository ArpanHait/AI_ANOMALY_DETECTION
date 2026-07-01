import React from "react";

export default function RootCauseRadar() {
  return (
    <aside className="w-full md:w-[30%] min-w-0 md:min-w-[320px] flex flex-col gap-4 pb-8 px-6 pt-6 border-b md:border-b-0 md:border-r border-outline-variant">
      <h2 className="font-headline text-2xl text-on-surface flex items-center gap-2 mb-2">
        <span className="material-symbols-outlined text-primary">radar</span>
        Root Cause Radar
      </h2>

      {/* Section A: Current Active Causes */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between border-b border-error/20 pb-2">
          <span className="font-mono text-[11px] text-error font-bold uppercase tracking-widest">
            Current Active Causes
          </span>
          <span className="font-mono text-[12px] text-error/70">1 Critical</span>
        </div>

        <div className="bg-[#ffffff] border border-error/50 shadow-[0_1px_3px_rgba(0,0,0,0.05)] rounded-lg p-4 relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-1 h-full bg-error animate-pulse shadow-[0_0_10px_4px_rgba(255,180,171,0.1)]"></div>
          <div className="flex justify-between items-start mb-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-error animate-pulse shadow-[0_0_8px_rgba(255,180,171,0.6)]"></span>
              <h3 className="font-body text-[14px] font-semibold text-on-surface">
                Impending Bearing Failure
              </h3>
            </div>
            <span className="material-symbols-outlined text-error/80 text-sm">
              warning
            </span>
          </div>
          <div className="font-mono text-[12px] text-on-surface-variant mb-4 bg-surface-container-high p-2 rounded border border-outline-variant/30">
            <span className="text-error/90">ERR_CODE:</span> BRG_VIB_XR9
          </div>
          <button className="w-full py-2 bg-error-container hover:bg-error-container/80 text-on-error-container font-body text-[14px] font-bold rounded flex items-center justify-center gap-2 transition-colors">
            <span className="material-symbols-outlined text-sm">smart_toy</span>
            Ask AI to Explain
          </button>
        </div>
      </div>

      {/* Section B: Predicted Future Risks */}
      <div className="flex flex-col gap-3 mt-6">
        <div className="flex items-center justify-between border-b border-secondary-container/20 pb-2">
          <span className="font-mono text-[11px] font-bold text-secondary uppercase tracking-widest">
            Predicted Future Risks
          </span>
          <span className="font-mono text-[12px] text-secondary/70">
            T-48hrs
          </span>
        </div>

        <div className="bg-[#ffffff] border border-[#dee3e4] shadow-[0_1px_3px_rgba(0,0,0,0.05)] border-l-4 border-l-secondary rounded-lg p-4 hover:bg-surface-container/50 transition-colors">
          <div className="flex justify-between items-start mb-3">
            <h3 className="font-body text-[14px] font-semibold text-secondary">
              Flow Rate Drop Detected
            </h3>
            <span className="material-symbols-outlined text-secondary/80 text-sm">
              trending_down
            </span>
          </div>
          <p className="font-body text-[14px] text-on-surface-variant mb-4 line-clamp-2">
            Possible Valve Blockage in Main Coolant Line A. Probability: 87%.
          </p>
          <button className="w-full py-2 bg-transparent hover:bg-secondary-container/20 border border-secondary text-secondary font-body text-[14px] font-bold rounded flex items-center justify-center gap-2 transition-colors">
            <span className="material-symbols-outlined text-sm">science</span>
            Run What-If Simulation
          </button>
        </div>

        <div className="bg-[#ffffff] border border-[#dee3e4] shadow-[0_1px_3px_rgba(0,0,0,0.05)] rounded-lg p-4 hover:bg-surface-container/50 transition-colors opacity-80">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-body text-[14px] text-on-surface">Thermal Drift</h3>
            <span className="font-mono text-[12px] text-outline">T-120hrs</span>
          </div>
          <p className="font-mono text-[12px] text-on-surface-variant">
            Sensor Array B2 showing minor calibration drift.
          </p>
        </div>
      </div>
    </aside>
  );
}
