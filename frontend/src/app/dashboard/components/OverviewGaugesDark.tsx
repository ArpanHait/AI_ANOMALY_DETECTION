import React from "react";

export default function OverviewGaugesDark() {
  return (
    <div className="flex gap-1 h-[25%]">
      <div
        className="glass-panel flex-1 rounded-xl p-6 flex flex-col items-center justify-center relative bg-glow-cyan overflow-hidden"
        style={{
          background: "rgba(255, 255, 255, 0.03)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255, 255, 255, 0.08)",
        }}
      >
        <div className="font-mono text-xs text-[#64ffda] drop-shadow-[0_0_4px_rgba(100,255,218,0.4)] mb-4 opacity-80 tracking-widest uppercase font-bold">
          Anomaly Score
        </div>
        <div className="relative w-32 h-32 flex items-center justify-center">
          <svg
            className="w-full h-full transform -rotate-90 overflow-visible"
            viewBox="0 0 100 100"
          >
            <defs>
              <filter
                id="neonGlow-89"
                x="-20%"
                y="-20%"
                width="140%"
                height="140%"
              >
                <feGaussianBlur stdDeviation="0.5" result="blur1" />
                <feGaussianBlur stdDeviation="1.5" result="blur2" />
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
              stroke="rgba(0,240,255,0.15)"
              strokeWidth="8"
            ></circle>
            <circle
              filter="url(#neonGlow-89)"
              cx="50"
              cy="50"
              fill="none"
              r="45"
              stroke="#00f0ff"
              strokeDasharray="283"
              strokeDashoffset="31"
              strokeWidth="8"
              strokeLinecap="round"
            ></circle>
          </svg>
          <div
            className="absolute font-headline text-3xl font-bold"
            style={{
              color: "#00f0ff",
              textShadow:
                "0 0 5px rgba(0,240,255,0.5), 0 0 10px rgba(0,240,255,0.3)",
            }}
          >
            89%
          </div>
        </div>
      </div>
      <div
        className="glass-panel flex-1 rounded-xl p-6 flex flex-col items-center justify-center relative shadow-[inset_0_0_30px_rgba(255,180,171,0.1)] overflow-hidden border-error/30"
        style={{
          background: "rgba(255, 255, 255, 0.03)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255, 255, 255, 0.08)",
        }}
      >
        <div className="font-mono text-xs text-error mb-4 opacity-80 tracking-widest uppercase font-bold">
          Failure Probability
        </div>
        <div className="relative w-32 h-32 flex items-center justify-center">
          <svg
            className="w-full h-full transform -rotate-90 overflow-visible"
            viewBox="0 0 100 100"
          >
            <defs>
              <filter
                id="neonGlowRed-82"
                x="-20%"
                y="-20%"
                width="140%"
                height="140%"
              >
                <feGaussianBlur stdDeviation="0.5" result="blur1" />
                <feGaussianBlur stdDeviation="1.5" result="blur2" />
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
              stroke="rgba(255,180,171,0.15)"
              strokeWidth="8"
            ></circle>
            <circle
              filter="url(#neonGlowRed-82)"
              className="animate-pulse"
              cx="50"
              cy="50"
              fill="none"
              r="45"
              stroke="#ffb4ab"
              strokeDasharray="283"
              strokeDashoffset="50"
              strokeWidth="8"
              strokeLinecap="round"
            ></circle>
          </svg>
          <div
            className="absolute font-headline text-3xl font-bold animate-pulse"
            style={{
              color: "#ffb4ab",
              textShadow:
                "0 0 5px rgba(255,180,171,0.5), 0 0 10px rgba(255,180,171,0.3)",
            }}
          >
            82%
          </div>
        </div>
      </div>
    </div>
  );
}
