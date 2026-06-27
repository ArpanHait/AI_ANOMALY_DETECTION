import React from "react";

export default function SimulatedProjection() {
  return (
    <div
      className="glass-panel p-6 min-h-[400px] flex flex-col rounded-xl"
      style={{
        background: "rgba(255, 255, 255, 0.03)",
        backdropFilter: "blur(12px)",
        border: "1px solid rgba(255, 255, 255, 0.08)",
      }}
    >
      <div className="flex justify-between items-start mb-6">
        <div>
          <h2 className="font-mono text-[11px] font-bold text-[#64ffda] drop-shadow-[0_0_4px_rgba(100,255,218,0.4)] border-l-2 border-[#64ffda] pl-3 uppercase tracking-widest">
            Simulated Projection
          </h2>
          <p className="text-on-surface-variant text-[12px] mt-1 font-body">
            Predicted Operational Lifecycle (T-Minus Failure)
          </p>
        </div>
        <div className="text-right">
          <span className="font-headline text-3xl font-bold text-[#64ffda] drop-shadow-[0_0_4px_rgba(100,255,218,0.4)]">
            14,204 HRS
          </span>
          <p className="font-mono text-[10px] text-on-surface-variant uppercase tracking-widest font-bold">
            Estimated Remaining Uptime
          </p>
        </div>
      </div>

      <div className="flex-1 relative flex items-end gap-1">
        <svg
          className="w-full h-full overflow-visible"
          preserveAspectRatio="none"
          viewBox="0 0 800 300"
        >
          {/* Technical Grid Background */}
          <defs>
            <pattern
              height="40"
              id="grid-sim"
              patternUnits="userSpaceOnUse"
              width="40"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="rgba(0, 240, 255, 0.05)"
                strokeWidth="1"
              ></path>
            </pattern>
            <linearGradient id="chartGradient-sim" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#00f0ff" stopOpacity="0.3"></stop>
              <stop offset="100%" stopColor="#00f0ff" stopOpacity="0"></stop>
            </linearGradient>
            <filter id="glow-sim">
              <feGaussianBlur
                result="coloredBlur"
                stdDeviation="3"
              ></feGaussianBlur>
              <feMerge>
                <feMergeNode in="coloredBlur"></feMergeNode>
                <feMergeNode in="SourceGraphic"></feMergeNode>
              </feMerge>
            </filter>
          </defs>
          <rect fill="url(#grid-sim)" height="100%" width="100%"></rect>
          {/* Area Fill */}
          <path
            d="M0,220 L100,200 L200,160 L300,180 L400,100 L500,60 L600,110 L700,150 L800,280 L800,300 L0,300 Z"
            fill="url(#chartGradient-sim)"
          ></path>
          {/* Main Chart Line */}
          <path
            d="M0,220 L100,200 L200,160 L300,180 L400,100 L500,60 L600,110 L700,150 L800,280"
            fill="none"
            filter="url(#glow-sim)"
            stroke="#00f0ff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          ></path>
          {/* Data Markers */}
          <circle
            className="animate-pulse"
            cx="100"
            cy="200"
            fill="#00f0ff"
            r="3"
          ></circle>
          <circle cx="200" cy="160" fill="#00f0ff" r="3"></circle>
          <circle cx="300" cy="180" fill="#00f0ff" r="3"></circle>
          <circle cx="400" cy="100" fill="#00f0ff" r="3"></circle>
          <circle cx="500" cy="60" fill="#00f0ff" r="3"></circle>
          <circle cx="600" cy="110" fill="#00f0ff" r="3"></circle>
          <circle cx="800" cy="280" fill="#ffb4ab" r="3"></circle>
        </svg>
      </div>

      <div className="mt-4 flex justify-between border-t border-white/5 pt-4">
        <div className="flex gap-6">
          <div>
            <p className="font-mono text-[9px] text-on-surface-variant font-bold uppercase tracking-widest">
              Model Confidence
            </p>
            <p className="font-mono text-[12px] text-[#64ffda] drop-shadow-[0_0_4px_rgba(100,255,218,0.4)] font-bold">
              98.2%
            </p>
          </div>
          <div>
            <p className="font-mono text-[9px] text-on-surface-variant font-bold uppercase tracking-widest">
              Latency
            </p>
            <p className="font-mono text-[12px] text-[#64ffda] drop-shadow-[0_0_4px_rgba(100,255,218,0.4)] font-bold">
              12ms
            </p>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <span className="w-2 h-2 rounded-full bg-[#64ffda] shadow-[0_0_5px_#00f0ff]"></span>
          <span className="w-2 h-2 rounded-full bg-white/20"></span>
          <span className="w-2 h-2 rounded-full bg-white/20"></span>
        </div>
      </div>
    </div>
  );
}
