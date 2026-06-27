import React from "react";

export default function OverviewGaugesLight() {
  return (
    <div className="flex gap-panel-gap h-[25%]">
      <div className="glass-panel flex-1 rounded-xl p-6 flex flex-col items-center justify-center relative bg-surface-container overflow-hidden">
        <div className="font-label-caps text-label-caps text-primary mb-4 tracking-widest uppercase">
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
              stroke="#dee3e4"
              strokeWidth="8"
            />
            <circle
              className="drop-shadow-[0_0_5px_rgba(0,105,112,0.2)]"
              cx="50"
              cy="50"
              fill="none"
              r="45"
              stroke="#006970"
              strokeDasharray="283"
              strokeDashoffset="31"
              strokeWidth="8"
            />
          </svg>
          <div className="absolute font-headline-lg text-headline-lg font-bold text-primary glow-cyan">
            89%
          </div>
        </div>
      </div>
      <div className="glass-panel flex-1 rounded-xl p-6 flex flex-col items-center justify-center relative shadow-[inset_0_0_10px_rgba(186,26,26,0.05)] overflow-hidden border-error/50">
        <div className="font-label-caps text-label-caps text-error mb-4 tracking-widest uppercase">
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
              stroke="#dee3e4"
              strokeWidth="8"
            />
            <circle
              className="drop-shadow-[0_0_5px_rgba(186,26,26,0.2)] animate-pulse"
              cx="50"
              cy="50"
              fill="none"
              r="45"
              stroke="#ba1a1a"
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
