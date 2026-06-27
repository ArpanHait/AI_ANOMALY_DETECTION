import React from "react";

export default function DowntimeWindows() {
  return (
    <div
      className="glass-panel rounded-lg flex-1 p-4 flex flex-col"
      style={{
        background: "rgba(255, 255, 255, 0.7)",
        backdropFilter: "blur(12px)",
        border: "1px solid rgba(0, 0, 0, 0.05)",
      }}
    >
      <h3 className="font-mono text-[11px] font-bold uppercase tracking-widest text-on-surface mb-4">
        SCHEDULED DOWNTIME WINDOWS
      </h3>
      <div className="space-y-4 flex-1 overflow-y-auto pr-2">
        <div className="border-l-2 border-primary pl-3 py-1 relative">
          <div className="absolute w-2 h-2 rounded-full bg-primary -left-[5px] top-2"></div>
          <p className="font-mono text-[12px] text-primary font-bold mb-1">
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
