import React from "react";

export default function DowntimeWindowsDark() {
  return (
    <div
      className="glass-panel rounded-lg flex-1 p-4 flex flex-col"
      style={{
        background: "rgba(255, 255, 255, 0.03)",
        backdropFilter: "blur(12px)",
        border: "1px solid rgba(255, 255, 255, 0.08)",
      }}
    >
      <h3 className="font-mono text-[11px] font-bold uppercase tracking-widest text-on-surface mb-4">
        SCHEDULED DOWNTIME WINDOWS
      </h3>
      <div className="space-y-4 flex-1 overflow-y-auto pr-2">
        <div className="border-l-2 border-[#64ffda] pl-3 py-1 relative">
          <div className="absolute w-2 h-2 rounded-full bg-[#64ffda] shadow-[0_0_8px_rgba(100,255,218,0.8)] -left-[5px] top-2"></div>
          <p className="font-mono text-[12px] text-[#64ffda] font-bold mb-1">
            T-Minus 04:22:00
          </p>
          <p className="font-body text-[14px] text-on-surface">
            Main Turbine Inspection
          </p>
          <p className="font-mono text-[12px] text-on-surface-variant mt-1">
            Est. Duration: 4h
          </p>
        </div>
        <div className="border-l-2 border-outline-variant pl-3 py-1 relative">
          <div className="absolute w-2 h-2 rounded-full bg-outline-variant -left-[5px] top-2"></div>
          <p className="font-mono text-[12px] text-on-surface-variant mb-1">
            Tomorrow, 0800 HRS
          </p>
          <p className="font-body text-[14px] text-on-surface">
            Coolant Flush Line C
          </p>
          <p className="font-mono text-[12px] text-on-surface-variant mt-1">
            Est. Duration: 2h
          </p>
        </div>
        <div className="border-l-2 border-outline-variant pl-3 py-1 relative">
          <div className="absolute w-2 h-2 rounded-full bg-outline-variant -left-[5px] top-2"></div>
          <p className="font-mono text-[12px] text-on-surface-variant mb-1">
            Thursday, 2200 HRS
          </p>
          <p className="font-body text-[14px] text-on-surface">
            Firmware Update: Node Cluster Alpha
          </p>
          <p className="font-mono text-[12px] text-on-surface-variant mt-1">
            Est. Duration: 45m
          </p>
        </div>
      </div>
    </div>
  );
}
