import React from "react";

export default function RcaNarrativeLight() {
  return (
    <div className="flex-[30%] flex flex-col gap-panel-gap">
      <div className="glass-panel flex-[40%] rounded-xl p-6 border-l-4 border-l-secondary">
        <div className="font-label-caps text-label-caps text-secondary mb-4 flex items-center space-x-2">
          <span className="material-symbols-outlined text-sm">psychology</span>
          <span className="">Root Cause Analysis</span>
        </div>
        <div className="font-headline-md text-headline-md text-on-surface mb-2">
          Stage 3 Bearing Degradation
        </div>
        <p className="font-body-sm text-body-sm text-on-surface-variant mb-4">
          AI Hypothesizes structural fatigue in inner race due to prolonged
          elevated thermal states.
        </p>
        <ul className="space-y-2 font-data-sm text-data-sm text-on-surface-variant">
          <li className="flex items-start space-x-2">
            <span className="text-error mt-0.5">•</span>
            <span className="">
              High frequency vibration harmonic matched to bearing defect freq (BPFI).
            </span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="text-secondary mt-0.5">•</span>
            <span className="">Temp gradient exceeds nominal +15°C over 48h.</span>
          </li>
        </ul>
      </div>

      <div className="glass-panel flex-[25%] rounded-xl p-6 bg-error-container/50 border border-error/50 flex flex-col justify-center">
        <div className="font-label-caps text-label-caps text-error mb-2 uppercase">
          Required Action
        </div>
        <div className="font-body-lg text-body-lg font-bold text-on-error-container mb-4">
          Schedule Immediate Bearing Replacement
        </div>
        <div>
          <div className="flex justify-between font-data-sm text-data-sm text-on-error-container mb-1">
            <span className="">AI Confidence</span>
            <span className="">94%</span>
          </div>
          <div className="w-full h-1 bg-surface-container-highest rounded overflow-hidden">
            <div className="h-full bg-error w-[94%] shadow-[0_0_5px_rgba(186,26,26,0.5)]"></div>
          </div>
        </div>
        <button className="mt-4 w-full bg-error text-on-error font-label-caps text-label-caps py-2 rounded hover:bg-on-error-container transition-colors">
          INITIATE WORK ORDER
        </button>
      </div>

      <div className="glass-panel flex-[35%] rounded-xl p-6">
        <div className="font-label-caps text-label-caps text-primary mb-4 flex items-center space-x-2 uppercase">
          <span className="material-symbols-outlined text-sm">tune</span>
          <span className="">Simulate Parameters</span>
        </div>
        <div className="space-y-6 mt-4">
          <div>
            <div className="flex justify-between font-data-sm text-data-sm mb-2">
              <span className="text-on-surface-variant">vibration_rms</span>
              <span className="text-primary">14.2 mm/s</span>
            </div>
            <input
              className="w-full accent-primary h-1 bg-surface-container rounded appearance-none focus:outline-none"
              max="20"
              min="0"
              type="range"
              defaultValue="14.2"
            />
          </div>
          <div>
            <div className="flex justify-between font-data-sm text-data-sm mb-2">
              <span className="text-on-surface-variant">bearing_temp</span>
              <span className="text-secondary">88.5 °C</span>
            </div>
            <input
              className="w-full accent-secondary h-1 bg-surface-container rounded appearance-none focus:outline-none"
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
