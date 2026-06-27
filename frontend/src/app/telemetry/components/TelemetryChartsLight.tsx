import React from "react";

export default function TelemetryChartsLight() {
  return (
    <div className="flex-[6] min-h-0 flex flex-col gap-4">
      {/* Chart 1 */}
      <div className="bg-[#ffffff] border border-[#dee3e4] shadow-[0_1px_3px_rgba(0,0,0,0.05)] flex-1 min-h-0 p-4 flex flex-col relative group rounded-xl">
        <div className="flex justify-between items-start mb-2">
          <span className="font-mono text-[11px] font-bold text-on-surface-variant uppercase">
            VIBRATION RMS VS NOMINAL BAND
          </span>
          <span className="font-mono text-[12px] text-error font-bold animate-pulse">
            CRITICAL SPIKE DETECTED
          </span>
        </div>
        <div className="w-full h-[calc(100%-20px)] overflow-hidden bg-surface-container rounded border border-outline-variant relative">
          <svg
            className="w-full h-full"
            preserveAspectRatio="none"
            viewBox="0 0 1000 120"
          >
            {/* Safe Zone */}
            <rect
              fill="rgba(0, 105, 112, 0.05)"
              height="40"
              width="1000"
              x="0"
              y="40"
            ></rect>
            {/* Nominal Line */}
            <line
              stroke="#bfc8c9"
              strokeDasharray="4"
              x1="0"
              x2="1000"
              y1="60"
              y2="60"
            ></line>
            {/* Red Line Spiking */}
            <path
              className="drop-shadow-[0_2px_4px_rgba(186,26,26,0.2)]"
              d="M0,70 L100,65 L200,68 L300,60 L400,65 L500,10 L600,105 L700,40 L800,60 L900,55 L1000,62"
              fill="none"
              stroke="#ba1a1a"
              strokeWidth="2.5"
            ></path>
          </svg>
        </div>
      </div>
      {/* Chart 2 */}
      <div className="bg-[#ffffff] border border-[#dee3e4] shadow-[0_1px_3px_rgba(0,0,0,0.05)] flex-1 min-h-0 p-4 flex flex-col relative group rounded-xl">
        <div className="flex justify-between items-start mb-2">
          <span className="font-mono text-[11px] font-bold text-on-surface-variant uppercase">
            BEARING TEMPERATURE
          </span>
          <span className="font-mono text-[12px] text-secondary font-bold">
            +2.4°C / HR TREND
          </span>
        </div>
        <div className="w-full h-[calc(100%-20px)] overflow-hidden bg-surface-container rounded border border-outline-variant relative">
          <svg
            className="w-full h-full"
            preserveAspectRatio="none"
            viewBox="0 0 1000 120"
          >
            {/* Yellow Line Trending Up */}
            <path
              className="drop-shadow-[0_2px_4px_rgba(126,87,0,0.2)]"
              d="M0,90 L150,85 L300,80 L450,70 L600,65 L750,50 L900,45 L1000,40"
              fill="none"
              stroke="#7e5700"
              strokeWidth="2.5"
            ></path>
          </svg>
        </div>
      </div>
      {/* Chart 3 */}
      <div className="bg-[#ffffff] border border-[#dee3e4] shadow-[0_1px_3px_rgba(0,0,0,0.05)] flex-1 min-h-0 p-4 flex flex-col relative group rounded-xl">
        <div className="flex justify-between items-start mb-2">
          <span className="font-mono text-[11px] font-bold text-on-surface-variant uppercase">
            MOTOR RPM
          </span>
          <span className="font-mono text-[12px] text-primary font-bold">
            STABLE NOMINAL
          </span>
        </div>
        <div className="w-full h-[calc(100%-20px)] overflow-hidden bg-surface-container rounded border border-outline-variant relative">
          <svg
            className="w-full h-full"
            preserveAspectRatio="none"
            viewBox="0 0 1000 120"
          >
            {/* Cyan Line Stable */}
            <path
              className="drop-shadow-[0_2px_4px_rgba(0,105,112,0.2)]"
              d="M0,60 L100,58 L200,62 L300,60 L400,59 L500,61 L600,60 L700,58 L800,62 L900,60 L1000,60"
              fill="none"
              stroke="#006970"
              strokeWidth="2.5"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
}
