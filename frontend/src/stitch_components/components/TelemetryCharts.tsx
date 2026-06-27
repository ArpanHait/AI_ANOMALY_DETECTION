import React from "react";

export default function TelemetryCharts() {
  return (
    <div className="flex-grow flex flex-col gap-panel-gap h-[60%]">
      <div className="glass-panel flex-1 p-4 relative group">
        <div className="flex justify-between items-start mb-2">
          <span className="font-label-caps text-label-caps text-on-surface-variant">
            VIBRATION RMS VS NOMINAL BAND
          </span>
          <span className="font-data-sm text-data-sm text-error pulse-red">
            CRITICAL SPKE DETECTED
          </span>
        </div>
        <div className="w-full h-[calc(100%-20px)] overflow-hidden">
          <svg
            className="w-full h-full"
            preserveAspectRatio="none"
            viewBox="0 0 1000 120"
          >
            <rect
              fill="rgba(255, 255, 255, 0.03)"
              height="40"
              width="1000"
              x="0"
              y="40"
            />
            <line
              stroke="rgba(255,255,255,0.1)"
              strokeDasharray="4"
              x1="0"
              x2="1000"
              y1="60"
              y2="60"
            />
            <path
              className="drop-shadow-[0_0_4px_rgba(255,180,171,0.5)]"
              d="M0,70 L100,65 L200,68 L300,60 L400,65 L500,10 L600,105 L700,40 L800,60 L900,55 L1000,62"
              fill="none"
              stroke="#ffb4ab"
              strokeWidth="2"
            />
          </svg>
        </div>
      </div>

      <div className="glass-panel flex-1 p-4 relative group">
        <div className="flex justify-between items-start mb-2">
          <span className="font-label-caps text-label-caps text-on-surface-variant">
            BEARING TEMPERATURE
          </span>
          <span className="font-data-sm text-data-sm text-secondary">
            +2.4°C / HR TREND
          </span>
        </div>
        <div className="w-full h-[calc(100%-20px)] overflow-hidden">
          <svg
            className="w-full h-full"
            preserveAspectRatio="none"
            viewBox="0 0 1000 120"
          >
            <path
              className="drop-shadow-[0_0_4px_rgba(255,186,32,0.5)]"
              d="M0,90 L150,85 L300,80 L450,70 L600,65 L750,50 L900,45 L1000,40"
              fill="none"
              stroke="#ffba20"
              strokeWidth="2"
            />
          </svg>
        </div>
      </div>

      <div className="glass-panel flex-1 p-4 relative group">
        <div className="flex justify-between items-start mb-2">
          <span className="font-label-caps text-label-caps text-on-surface-variant">
            MOTOR RPM
          </span>
          <span className="font-data-sm text-data-sm text-primary-container">
            STABLE NOMINAL
          </span>
        </div>
        <div className="w-full h-[calc(100%-20px)] overflow-hidden">
          <svg
            className="w-full h-full"
            preserveAspectRatio="none"
            viewBox="0 0 1000 120"
          >
            <path
              className="drop-shadow-[0_0_4px_rgba(0,240,255,0.5)]"
              d="M0,60 L100,58 L200,62 L300,60 L400,59 L500,61 L600,60 L700,58 L800,62 L900,60 L1000,60"
              fill="none"
              stroke="#00f0ff"
              strokeWidth="2"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
