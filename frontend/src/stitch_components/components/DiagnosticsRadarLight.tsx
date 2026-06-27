import React from "react";

export default function DiagnosticsRadarLight() {
  return (
    <div className="w-1/3 flex flex-col gap-md">
      <h2 className="font-title-md text-title-md text-on-surface pb-sm border-b border-outline-variant">
        Root Cause Radar
      </h2>
      <div className="flex flex-col gap-sm overflow-y-auto pr-sm">
        <div className="bg-error-container border border-error rounded p-md cursor-pointer hover:shadow-sm transition-shadow">
          <div className="flex justify-between items-start mb-sm">
            <div className="flex items-center gap-xs text-error">
              <span className="material-symbols-outlined text-[18px]">
                warning
              </span>
              <span className="font-label-caps text-label-caps">CRITICAL</span>
            </div>
            <span className="font-mono-data text-mono-data text-error">
              98% PROBABILITY
            </span>
          </div>
          <h3 className="font-title-md text-title-md text-on-error-container mb-xs">
            Impending Bearing Failure
          </h3>
          <p className="font-body-sm text-body-sm text-on-error-container/80 mb-sm">
            Excessive vibration detected in primary centrifuge spindle. Immediate
            intervention required to prevent catastrophic failure.
          </p>
          <div className="flex gap-xs mt-auto">
            <span className="bg-surface/50 text-on-error-container font-mono-data text-mono-data px-xs py-[2px] rounded text-[10px]">
              NODE: CF-04
            </span>
            <span className="bg-surface/50 text-on-error-container font-mono-data text-mono-data px-xs py-[2px] rounded text-[10px]">
              VIB: 14.2 mm/s
            </span>
          </div>
        </div>

        <div className="bg-surface-container-lowest border border-outline-variant rounded p-md cursor-pointer hover:border-primary transition-colors">
          <div className="flex justify-between items-start mb-sm">
            <div className="flex items-center gap-xs text-on-surface-variant">
              <span className="material-symbols-outlined text-[18px]">build</span>
              <span className="font-label-caps text-label-caps">ELEVATED RISK</span>
            </div>
            <span className="font-mono-data text-mono-data text-on-surface-variant">
              64% PROBABILITY
            </span>
          </div>
          <h3 className="font-title-md text-title-md text-on-surface mb-xs">
            Thermal Gradient Anomaly
          </h3>
          <p className="font-body-sm text-body-sm text-on-surface-variant mb-sm">
            Cooling loop 2 showing reduced efficiency. Potential coolant flow
            restriction or sensor drift.
          </p>
          <div className="flex gap-xs mt-auto">
            <span className="bg-surface-container text-on-surface font-mono-data text-mono-data px-xs py-[2px] rounded text-[10px]">
              NODE: CL-02
            </span>
            <span className="bg-surface-container text-on-surface font-mono-data text-mono-data px-xs py-[2px] rounded text-[10px]">
              DELTA-T: 4.8°C
            </span>
          </div>
        </div>

        <div className="bg-surface-container-lowest border border-outline-variant rounded p-md cursor-pointer hover:border-primary transition-colors">
          <div className="flex justify-between items-start mb-sm">
            <div className="flex items-center gap-xs text-on-surface-variant">
              <span className="material-symbols-outlined text-[18px]">
                network_check
              </span>
              <span className="font-label-caps text-label-caps">MODERATE RISK</span>
            </div>
            <span className="font-mono-data text-mono-data text-on-surface-variant">
              32% PROBABILITY
            </span>
          </div>
          <h3 className="font-title-md text-title-md text-on-surface mb-xs">
            Data Latency Spike
          </h3>
          <p className="font-body-sm text-body-sm text-on-surface-variant mb-sm">
            Intermittent packet loss detected on secondary diagnostic bus.
            Monitoring required.
          </p>
          <div className="flex gap-xs mt-auto">
            <span className="bg-surface-container text-on-surface font-mono-data text-mono-data px-xs py-[2px] rounded text-[10px]">
              BUS: DIAG-B
            </span>
            <span className="bg-surface-container text-on-surface font-mono-data text-mono-data px-xs py-[2px] rounded text-[10px]">
              LOSS: 0.4%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
