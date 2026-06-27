import React from "react";

export default function TelemetryChartsLight() {
  return (
    <div className="flex-grow flex flex-col gap-4 h-[60%]">
      <div className="glass-panel flex-1 p-4 relative group rounded-xl">
        <div className="flex justify-between items-start mb-2">
          <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">
            VIBRATION RMS VS NOMINAL BAND
          </span>
          <span className="font-data-sm text-data-sm text-error font-bold pulse-red">
            CRITICAL SPKE DETECTED
          </span>
        </div>
        <div className="w-full h-[calc(100%-20px)] overflow-hidden bg-surface-container rounded border border-outline-variant relative">
          <svg
            className="w-full h-full"
            preserveAspectRatio="none"
            viewBox="0 0 1000 120"
          >
            <rect
              fill="rgba(0, 105, 112, 0.05)"
              height="40"
              width="1000"
              x="0"
              y="40"
            />
            <line
              stroke="#bfc8c9"
              strokeDasharray="4"
              x1="0"
              x2="1000"
              y1="60"
              y2="60"
            />
            <path
              className="drop-shadow-[0_2px_4px_rgba(186,26,26,0.2)]"
              d="M0,70 L100,65 L200,68 L300,60 L400,65 L500,10 L600,105 L700,40 L800,60 L900,55 L1000,62"
              fill="none"
              stroke="#ba1a1a"
              strokeWidth="2.5"
            />
          </svg>
        </div>
      </div>

      <div className="glass-panel flex-1 p-4 relative group rounded-xl">
        <div className="flex justify-between items-start mb-2">
          <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">
            BEARING TEMPERATURE
          </span>
          <span className="font-data-sm text-data-sm text-secondary font-bold">
            +2.4°C / HR TREND
          </span>
        </div>
        <div className="w-full h-[calc(100%-20px)] overflow-hidden bg-surface-container rounded border border-outline-variant relative">
          <svg
            className="w-full h-full"
            preserveAspectRatio="none"
            viewBox="0 0 1000 120"
          >
            <path
              className="drop-shadow-[0_2px_4px_rgba(126,87,0,0.2)]"
              d="M0,90 L150,85 L300,80 L450,70 L600,65 L750,50 L900,45 L1000,40"
              fill="none"
              stroke="#7e5700"
              strokeWidth="2.5"
            />
          </svg>
        </div>
      </div>

      <div className="glass-panel flex-1 p-4 relative group rounded-xl">
        <div className="flex justify-between items-start mb-2">
          <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">
            MOTOR RPM
          </span>
          <span className="font-data-sm text-data-sm text-primary font-bold">
            STABLE NOMINAL
          </span>
        </div>
        <div className="w-full h-[calc(100%-20px)] overflow-hidden bg-surface-container rounded border border-outline-variant relative">
          <svg
            className="w-full h-full"
            preserveAspectRatio="none"
            viewBox="0 0 1000 120"
          >
            <path
              className="drop-shadow-[0_2px_4px_rgba(0,105,112,0.2)]"
              d="M0,60 L100,58 L200,62 L300,60 L400,59 L500,61 L600,60 L700,58 L800,62 L900,60 L1000,60"
              fill="none"
              stroke="#006970"
              strokeWidth="2.5"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
