import React from "react";

export default function DiagnosticsRadarDark() {
  return (
    <aside className="w-[30%] min-w-[320px] flex flex-col gap-4 overflow-y-auto pb-8 px-6 pt-6 border-r border-outline-variant/10">
      <h2 className="font-headline text-2xl text-on-surface flex items-center gap-2 mb-2">
        <span className="material-symbols-outlined text-[#64ffda] drop-shadow-[0_0_4px_rgba(100,255,218,0.4)]">
          radar
        </span>
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

        <div
          className="glass-overlay rounded-lg p-4 border-error/30 relative overflow-hidden group"
          style={{
            background: "rgba(255, 255, 255, 0.06)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255, 255, 255, 0.15)",
          }}
        >
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
          <div className="font-mono text-[12px] text-on-surface-variant mb-4 bg-black/20 p-2 rounded border border-white/5">
            <span className="text-error/90">ERR_CODE:</span> BRG_VIB_XR9
          </div>
          <button className="w-full py-2 bg-error/10 hover:bg-error/20 border border-error/30 text-error font-body text-[14px] rounded flex items-center justify-center gap-2 transition-colors">
            <span className="material-symbols-outlined text-sm">smart_toy</span>
            Ask AI to Explain
          </button>
        </div>
      </div>

      {/* Section B: Predicted Future Risks */}
      <div className="flex flex-col gap-3 mt-6">
        <div className="flex items-center justify-between border-b border-secondary-container/20 pb-2">
          <span className="font-mono text-[11px] font-bold text-secondary-container uppercase tracking-widest">
            Predicted Future Risks
          </span>
          <span className="font-mono text-[12px] text-secondary-container/70">
            T-48hrs
          </span>
        </div>

        <div
          className="glass-panel rounded-lg p-4 border-secondary-container/20 border-l-4 border-l-secondary-container hover:bg-white/[0.04] transition-colors"
          style={{ background: "rgba(255, 255, 255, 0.03)", backdropFilter: "blur(12px)" }}
        >
          <div className="flex justify-between items-start mb-3">
            <h3 className="font-body text-[14px] font-semibold text-secondary-container">
              Flow Rate Drop Detected
            </h3>
            <span className="material-symbols-outlined text-secondary-container/80 text-sm">
              trending_down
            </span>
          </div>
          <p className="font-body text-[14px] text-on-surface-variant mb-4 line-clamp-2">
            Possible Valve Blockage in Main Coolant Line A. Probability: 87%.
          </p>
          <button className="w-full py-2 bg-transparent hover:bg-secondary-container/10 border border-secondary-container/50 text-secondary-container font-body text-[14px] rounded flex items-center justify-center gap-2 transition-colors">
            <span className="material-symbols-outlined text-sm">science</span>
            Run What-If Simulation
          </button>
        </div>

        <div
          className="glass-panel rounded-lg p-4 border border-outline-variant/20 hover:bg-white/[0.04] transition-colors opacity-60"
          style={{ background: "rgba(255, 255, 255, 0.03)", backdropFilter: "blur(12px)" }}
        >
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
