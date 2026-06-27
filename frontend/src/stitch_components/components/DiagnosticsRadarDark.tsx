import React from "react";

export default function DiagnosticsRadarDark() {
  return (
    <aside className="w-[30%] min-w-[320px] flex flex-col gap-4 overflow-y-auto scrollbar-hide pb-8 px-6 pt-6 border-r border-outline-variant/10">
      <h2 className="font-headline-md text-headline-md text-on-surface flex items-center gap-2 mb-2">
        <span className="material-symbols-outlined text-primary-container">
          radar
        </span>
        Root Cause Radar
      </h2>

      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between border-b border-error/20 pb-2">
          <span className="font-label-caps text-label-caps text-error uppercase tracking-widest">
            Current Active Causes
          </span>
          <span className="font-data-sm text-data-sm text-error/70">1 Critical</span>
        </div>
        <div className="glass-overlay rounded-lg p-4 border-error/30 relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-1 h-full bg-error pulse-crimson"></div>
          <div className="flex justify-between items-start mb-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-error pulse-crimson shadow-[0_0_8px_rgba(255,180,171,0.6)]"></span>
              <h3 className="font-body-sm text-body-sm font-semibold text-on-surface">
                Impending Bearing Failure
              </h3>
            </div>
            <span className="material-symbols-outlined text-error/80 text-sm">
              warning
            </span>
          </div>
          <div className="font-data-sm text-data-sm text-on-surface-variant mb-4 bg-black/20 p-2 rounded border border-white/5">
            <span className="text-error/90">ERR_CODE:</span> BRG_VIB_XR9
          </div>
          <button className="w-full py-2 bg-error/10 hover:bg-error/20 border border-error/30 text-error font-body-sm text-body-sm rounded flex items-center justify-center gap-2 transition-colors">
            <span className="material-symbols-outlined text-sm">smart_toy</span>
            Ask AI to Explain
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-3 mt-6">
        <div className="flex items-center justify-between border-b border-secondary-container/20 pb-2">
          <span className="font-label-caps text-label-caps text-secondary-container uppercase tracking-widest">
            Predicted Future Risks
          </span>
          <span className="font-data-sm text-data-sm text-secondary-container/70">
            T-48hrs
          </span>
        </div>
        <div className="glass-panel rounded-lg p-4 border-secondary-container/20 border-l-4 hover:bg-white/[0.04] transition-colors">
          <div className="flex justify-between items-start mb-3">
            <h3 className="font-body-sm text-body-sm font-semibold text-on-surface text-secondary-container">
              Flow Rate Drop Detected
            </h3>
            <span className="material-symbols-outlined text-secondary-container/80 text-sm">
              trending_down
            </span>
          </div>
          <p className="font-body-sm text-body-sm text-on-surface-variant mb-4 line-clamp-2">
            Possible Valve Blockage in Main Coolant Line A. Probability: 87%.
          </p>
          <button className="w-full py-2 bg-transparent hover:bg-secondary-container/10 border border-secondary-container/50 text-secondary-container font-body-sm text-body-sm rounded flex items-center justify-center gap-2 transition-colors">
            <span className="material-symbols-outlined text-sm">science</span>
            Run What-If Simulation
          </button>
        </div>
        <div className="glass-panel rounded-lg p-4 border-outline-variant/20 hover:bg-white/[0.04] transition-colors opacity-60">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-body-sm text-body-sm text-on-surface">Thermal Drift</h3>
            <span className="font-data-sm text-data-sm text-outline">T-120hrs</span>
          </div>
          <p className="font-data-sm text-data-sm text-on-surface-variant">
            Sensor Array B2 showing minor calibration drift.
          </p>
        </div>
      </div>
    </aside>
  );
}
