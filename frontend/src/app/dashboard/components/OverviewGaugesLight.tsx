import React from "react";

export default function OverviewGaugesLight() {
  return (
    <div className="flex flex-col sm:flex-row gap-1 h-auto md:h-[25%]">
      <div
        className="glass-panel flex-1 rounded-xl p-6 flex flex-col items-center justify-center relative bg-surface-container overflow-hidden"
        style={{
          background: "#ffffff",
          boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
          border: "1px solid #dee3e4",
        }}
      >
        <div className="font-mono text-xs text-primary mb-4 tracking-widest uppercase font-bold">
          Anomaly Score
        </div>
        <div className="relative w-32 h-32 flex items-center justify-center">
          <svg
            className="w-full h-full transform -rotate-90 overflow-visible"
            viewBox="0 0 100 100"
          >
            <defs>
              <filter
                id="neonGlowLight-89"
                x="-20%"
                y="-20%"
                width="140%"
                height="140%"
              >
                <feGaussianBlur stdDeviation="0.5" result="blur1" />
                <feGaussianBlur stdDeviation="1" result="blur2" />
                <feMerge>
                  <feMergeNode in="blur2" />
                  <feMergeNode in="blur1" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <circle
              cx="50"
              cy="50"
              fill="none"
              r="45"
              stroke="rgba(0,105,112,0.1)"
              strokeWidth="8"
            ></circle>
            <circle
              filter="url(#neonGlowLight-89)"
              cx="50"
              cy="50"
              fill="none"
              r="45"
              stroke="#006970"
              strokeDasharray="283"
              strokeDashoffset="31"
              strokeWidth="8"
              strokeLinecap="round"
            ></circle>
          </svg>
          <div
            className="absolute font-headline text-3xl font-bold"
            style={{
              color: "#006970",
              textShadow:
                "0 0 4px rgba(0,105,112,0.3), 0 0 8px rgba(0,105,112,0.15)",
            }}
          >
            89%
          </div>
        </div>
      </div>
      <div
        className="glass-panel flex-1 rounded-xl p-6 flex flex-col items-center justify-center relative shadow-[inset_0_0_10px_rgba(186,26,26,0.05)] overflow-hidden border-error/50"
        style={{
          background: "#ffffff",
          boxShadow: "inset 0 0 10px rgba(186,26,26,0.05)",
          border: "1px solid rgba(186,26,26,0.5)",
        }}
      >
        <div className="font-mono text-xs text-error mb-4 tracking-widest uppercase font-bold">
          Failure Probability
        </div>
        <div className="relative w-32 h-32 flex items-center justify-center">
          <svg
            className="w-full h-full transform -rotate-90 overflow-visible"
            viewBox="0 0 100 100"
          >
            <defs>
              <filter
                id="neonGlowRedLight-82"
                x="-20%"
                y="-20%"
                width="140%"
                height="140%"
              >
                <feGaussianBlur stdDeviation="0.5" result="blur1" />
                <feGaussianBlur stdDeviation="1" result="blur2" />
                <feMerge>
                  <feMergeNode in="blur2" />
                  <feMergeNode in="blur1" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <circle
              cx="50"
              cy="50"
              fill="none"
              r="45"
              stroke="rgba(186,26,26,0.1)"
              strokeWidth="8"
            ></circle>
            <circle
              filter="url(#neonGlowRedLight-82)"
              className="animate-pulse"
              cx="50"
              cy="50"
              fill="none"
              r="45"
              stroke="#ba1a1a"
              strokeDasharray="283"
              strokeDashoffset="50"
              strokeWidth="8"
              strokeLinecap="round"
            ></circle>
          </svg>
          <div
            className="absolute font-headline text-3xl font-bold animate-pulse"
            style={{
              color: "#ba1a1a",
              textShadow:
                "0 0 4px rgba(186,26,26,0.3), 0 0 8px rgba(186,26,26,0.15)",
            }}
          >
            82%
          </div>
        </div>
      </div>
    </div>
  );
}
