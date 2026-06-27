import React from "react";

export default function InventoryStatus() {
  return (
    <div
      className="glass-panel rounded-lg p-4"
      style={{
        background: "rgba(255, 255, 255, 0.7)",
        backdropFilter: "blur(12px)",
        border: "1px solid rgba(0, 0, 0, 0.05)",
      }}
    >
      <h3 className="font-mono text-[11px] font-bold uppercase tracking-widest text-on-surface mb-4">
        CRITICAL SPARE PARTS INVENTORY
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-surface-container-lowest border border-outline-variant/20 p-3 rounded">
          <div className="flex justify-between items-start mb-2">
            <span className="font-mono text-[12px] text-on-surface-variant uppercase">
              High-Temp Bearings
            </span>
            <span className="material-symbols-outlined text-error text-[18px]">
              warning
            </span>
          </div>
          <div className="font-mono text-xl font-bold text-error">
            12 <span className="text-xs text-on-surface-variant">/ 50 (MIN 20)</span>
          </div>
        </div>
        <div className="bg-surface-container-lowest border border-outline-variant/20 p-3 rounded">
          <div className="flex justify-between items-start mb-2">
            <span className="font-mono text-[12px] text-on-surface-variant uppercase">
              Pressure Sensors
            </span>
            <span className="material-symbols-outlined text-outline text-[18px]">
              check_circle
            </span>
          </div>
          <div className="font-mono text-xl font-bold text-primary">
            145 <span className="text-xs text-on-surface-variant">/ 200</span>
          </div>
        </div>
        <div className="bg-surface-container-lowest border border-outline-variant/20 p-3 rounded">
          <div className="flex justify-between items-start mb-2">
            <span className="font-mono text-[12px] text-on-surface-variant uppercase">
              Actuator Valves
            </span>
            <span className="material-symbols-outlined text-secondary-container text-[18px]">
              info
            </span>
          </div>
          <div className="font-mono text-xl font-bold text-secondary-container">
            34 <span className="text-xs text-on-surface-variant">/ 100 (MIN 30)</span>
          </div>
        </div>
      </div>
    </div>
  );
}
