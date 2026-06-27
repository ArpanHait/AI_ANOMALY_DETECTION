import React from "react";

export default function RcaNarrativeDark() {
  return (
    <div className="flex-[30%] flex flex-col gap-1">
      {/* RCA Narrative */}
      <div
        className="glass-panel flex-[40%] rounded-xl p-6 border-l-4 border-l-secondary-fixed-dim"
        style={{
          background: "rgba(255, 255, 255, 0.03)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255, 255, 255, 0.08)",
          borderLeftColor: "var(--theme-secondary-fixed-dim)",
        }}
      >
        <div className="font-mono text-[11px] font-bold text-secondary-fixed-dim mb-4 flex items-center space-x-2">
          <span className="material-symbols-outlined text-sm">psychology</span>
          <span>Root Cause Analysis</span>
        </div>
        <div className="font-headline text-2xl font-semibold text-on-surface mb-2">
          Stage 3 Bearing Degradation
        </div>
        <p className="text-sm text-on-surface-variant mb-4">
          AI Hypothesizes structural fatigue in inner race due to prolonged
          elevated thermal states.
        </p>
        <ul className="space-y-2 font-mono text-xs text-on-surface-variant">
          <li className="flex items-start space-x-2">
            <span className="text-error mt-0.5">•</span>
            <span>
              High frequency vibration harmonic matched to bearing defect freq
              (BPFI).
            </span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="text-secondary-fixed-dim mt-0.5">•</span>
            <span>Temp gradient exceeds nominal +15°C over 48h.</span>
          </li>
        </ul>
      </div>

      {/* Recommended Action */}
      <div
        className="glass-panel flex-[25%] rounded-xl p-6 bg-error-container/10 border border-error/30 flex flex-col justify-center"
        style={{
          background: "rgba(255, 255, 255, 0.03)",
          backdropFilter: "blur(12px)",
        }}
      >
        <div className="font-mono text-[11px] font-bold text-error mb-2 uppercase">
          Required Action
        </div>
        <div className="text-base font-bold text-on-error-container mb-4">
          Schedule Immediate Bearing Replacement
        </div>
        <div>
          <div className="flex justify-between font-mono text-xs text-on-surface-variant mb-1">
            <span>AI Confidence</span>
            <span>94%</span>
          </div>
          <div className="w-full h-1 bg-surface-container-high rounded overflow-hidden">
            <div className="h-full bg-error w-[94%] shadow-[0_0_8px_rgba(255,180,171,0.8)]"></div>
          </div>
        </div>
        <button className="mt-4 w-full bg-error text-on-error font-mono text-[11px] font-bold py-2 rounded hover:bg-error/80 transition-colors">
          INITIATE WORK ORDER
        </button>
      </div>

      {/* Simulation Lab */}
      <div
        className="glass-panel flex-[35%] rounded-xl p-6"
        style={{
          background: "rgba(255, 255, 255, 0.03)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255, 255, 255, 0.08)",
        }}
      >
        <div className="font-mono text-[11px] font-bold text-[#64ffda] drop-shadow-[0_0_4px_rgba(100,255,218,0.4)] mb-4 flex items-center space-x-2 uppercase">
          <span className="material-symbols-outlined text-sm">tune</span>
          <span>Simulate Parameters</span>
        </div>
        <div className="space-y-6 mt-4">
          <div>
            <div className="flex justify-between font-mono text-xs mb-2">
              <span className="text-on-surface-variant">vibration_rms</span>
              <span className="text-[#64ffda] drop-shadow-[0_0_4px_rgba(100,255,218,0.4)]">
                14.2 mm/s
              </span>
            </div>
            <input
              className="w-full accent-[#64ffda] h-1 bg-surface-container-high rounded appearance-none focus:outline-none"
              max="20"
              min="0"
              type="range"
              defaultValue="14.2"
            />
          </div>
          <div>
            <div className="flex justify-between font-mono text-xs mb-2">
              <span className="text-on-surface-variant">bearing_temp</span>
              <span className="text-secondary-fixed-dim">88.5 °C</span>
            </div>
            <input
              className="w-full accent-secondary-fixed-dim h-1 bg-surface-container-high rounded appearance-none focus:outline-none"
              max="150"
              min="0"
              type="range"
              defaultValue="88.5"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
