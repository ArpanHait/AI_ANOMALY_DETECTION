import React from "react";

export default function TelemetryChartsDark() {
  return (
    <div className="flex-[6] min-h-0 flex flex-col gap-1">
      {/* Chart 1 */}
      <div
        className="glass-panel flex-1 min-h-0 p-4 flex flex-col relative group rounded-xl"
        style={{
          background: "rgba(255, 255, 255, 0.03)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255, 255, 255, 0.08)",
        }}
      >
        <div className="flex justify-between items-start mb-2">
          <span className="font-mono text-[11px] font-bold text-on-surface-variant">
            VIBRATION RMS VS NOMINAL BAND
          </span>
          <span className="font-mono text-[12px] text-error animate-pulse font-bold">
            CRITICAL SPIKE DETECTED
          </span>
        </div>
        <div className="w-full flex-1 min-h-0 overflow-hidden">
          <svg
            className="w-full h-full"
            preserveAspectRatio="none"
            viewBox="0 0 1000 120"
          >
            {/* Safe Zone */}
            <rect
              fill="rgba(255, 255, 255, 0.03)"
              height="40"
              width="1000"
              x="0"
              y="40"
            ></rect>
            {/* Nominal Line */}
            <line
              stroke="rgba(255,255,255,0.1)"
              strokeDasharray="4"
              x1="0"
              x2="1000"
              y1="60"
              y2="60"
            ></line>
            {/* Red Line Spiking */}
            <path
              className="drop-shadow-[0_0_4px_rgba(255,180,171,0.5)]"
              d="M0,70 L100,65 L200,68 L300,60 L400,65 L500,10 L600,105 L700,40 L800,60 L900,55 L1000,62"
              fill="none"
              stroke="#ffb4ab"
              strokeWidth="2"
            ></path>
          </svg>
        </div>
      </div>
      {/* Chart 2 */}
      <div
        className="glass-panel flex-1 min-h-0 p-4 flex flex-col relative group rounded-xl"
        style={{
          background: "rgba(255, 255, 255, 0.03)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255, 255, 255, 0.08)",
        }}
      >
        <div className="flex justify-between items-start mb-2">
          <span className="font-mono text-[11px] font-bold text-on-surface-variant">
            BEARING TEMPERATURE
          </span>
          <span className="font-mono text-[12px] text-secondary font-bold">
            +2.4°C / HR TREND
          </span>
        </div>
        <div className="w-full flex-1 min-h-0 overflow-hidden">
          <svg
            className="w-full h-full"
            preserveAspectRatio="none"
            viewBox="0 0 1000 120"
          >
            {/* Yellow Line Trending Up */}
            <path
              className="drop-shadow-[0_0_4px_rgba(255,186,32,0.5)]"
              d="M0,90 L150,85 L300,80 L450,70 L600,65 L750,50 L900,45 L1000,40"
              fill="none"
              stroke="#ffba20"
              strokeWidth="2"
            ></path>
          </svg>
        </div>
      </div>
      {/* Chart 3 */}
      <div
        className="glass-panel flex-1 min-h-0 p-4 flex flex-col relative group rounded-xl"
        style={{
          background: "rgba(255, 255, 255, 0.03)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255, 255, 255, 0.08)",
        }}
      >
        <div className="flex justify-between items-start mb-2">
          <span className="font-mono text-[11px] font-bold text-on-surface-variant">
            MOTOR RPM
          </span>
          <span className="font-mono text-[12px] text-[#64ffda] drop-shadow-[0_0_4px_rgba(100,255,218,0.4)] font-bold">
            STABLE NOMINAL
          </span>
        </div>
        <div className="w-full flex-1 min-h-0 overflow-hidden">
          <svg
            className="w-full h-full"
            preserveAspectRatio="none"
            viewBox="0 0 1000 120"
          >
            {/* Cyan Line Stable */}
            <path
              className="drop-shadow-[0_0_4px_rgba(0,240,255,0.5)]"
              d="M0,60 L100,58 L200,62 L300,60 L400,59 L500,61 L600,60 L700,58 L800,62 L900,60 L1000,60"
              fill="none"
              stroke="#00f0ff"
              strokeWidth="2"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
}
