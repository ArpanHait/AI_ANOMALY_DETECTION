import React from "react";

export default function OverviewGaugesDark() {
  return (
    <div className="flex gap-panel-gap h-[25%]">
      <div className="glass-panel flex-1 rounded-xl p-6 flex flex-col items-center justify-center relative bg-glow-cyan overflow-hidden">
        <div className="font-label-caps text-label-caps text-primary-container mb-4 opacity-80 tracking-widest uppercase">
          Anomaly Score
        </div>
        <div className="relative w-32 h-32 flex items-center justify-center">
          <svg
            className="w-full h-full transform -rotate-90"
            viewBox="0 0 100 100"
          >
            <circle
              cx="50"
              cy="50"
              fill="none"
              r="45"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="8"
            />
            <circle
              className="drop-shadow-[0_0_10px_rgba(0,240,255,0.8)]"
              cx="50"
              cy="50"
              fill="none"
              r="45"
              stroke="#00f0ff"
              strokeDasharray="283"
              strokeDashoffset="31"
              strokeWidth="8"
            />
          </svg>
          <div className="absolute font-headline-lg text-headline-lg font-bold text-primary-container glow-cyan">
            89%
          </div>
        </div>
      </div>
      <div className="glass-panel flex-1 rounded-xl p-6 flex flex-col items-center justify-center relative shadow-[inset_0_0_30px_rgba(255,180,171,0.1)] overflow-hidden border-error/30">
        <div className="font-label-caps text-label-caps text-error mb-4 opacity-80 tracking-widest uppercase">
          Failure Probability
        </div>
        <div className="relative w-32 h-32 flex items-center justify-center">
          <svg
            className="w-full h-full transform -rotate-90"
            viewBox="0 0 100 100"
          >
            <circle
              cx="50"
              cy="50"
              fill="none"
              r="45"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="8"
            />
            <circle
              className="drop-shadow-[0_0_10px_rgba(255,180,171,0.8)] animate-pulse"
              cx="50"
              cy="50"
              fill="none"
              r="45"
              stroke="#ffb4ab"
              strokeDasharray="283"
              strokeDashoffset="50"
              strokeWidth="8"
            />
          </svg>
          <div className="absolute font-headline-lg text-headline-lg font-bold text-error glow-crimson animate-pulse">
            82%
          </div>
        </div>
      </div>
    </div>
  );
}
