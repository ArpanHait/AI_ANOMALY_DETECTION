import React from "react";

export default function SimulatedProjectionLight() {
  return (
    <div className="bg-[#ffffff] p-6 min-h-[400px] flex flex-col rounded-xl border border-outline-variant/50 shadow-sm">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h2 className="font-mono text-[11px] font-bold text-primary border-l-2 border-primary pl-3 uppercase tracking-widest">
            Simulated Projection
          </h2>
          <p className="text-on-surface-variant text-[12px] mt-1 font-body">
            Predicted Operational Lifecycle (T-Minus Failure)
          </p>
        </div>
        <div className="text-right">
          <span className="font-headline text-3xl font-bold text-primary">
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
              id="gridLight-sim"
              patternUnits="userSpaceOnUse"
              width="40"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="rgba(0, 105, 112, 0.1)"
                strokeWidth="1"
              ></path>
            </pattern>
            <linearGradient id="chartGradientLight-sim" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#006970" stopOpacity="0.2"></stop>
              <stop offset="100%" stopColor="#006970" stopOpacity="0"></stop>
            </linearGradient>
            <filter id="glowLight-sim">
              <feGaussianBlur
                result="coloredBlur"
                stdDeviation="2"
              ></feGaussianBlur>
              <feMerge>
                <feMergeNode in="coloredBlur"></feMergeNode>
                <feMergeNode in="SourceGraphic"></feMergeNode>
              </feMerge>
            </filter>
          </defs>
          <rect fill="url(#gridLight-sim)" height="100%" width="100%"></rect>
          {/* Area Fill */}
          <path
            d="M0,220 L100,200 L200,160 L300,180 L400,100 L500,60 L600,110 L700,150 L800,280 L800,300 L0,300 Z"
            fill="url(#chartGradientLight-sim)"
          ></path>
          {/* Main Chart Line */}
          <path
            d="M0,220 L100,200 L200,160 L300,180 L400,100 L500,60 L600,110 L700,150 L800,280"
            fill="none"
            filter="url(#glowLight-sim)"
            stroke="#006970"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          ></path>
          {/* Data Markers */}
          <circle
            className="animate-pulse"
            cx="100"
            cy="200"
            fill="#006970"
            r="4"
          ></circle>
          <circle cx="200" cy="160" fill="#006970" r="4"></circle>
          <circle cx="300" cy="180" fill="#006970" r="4"></circle>
          <circle cx="400" cy="100" fill="#006970" r="4"></circle>
          <circle cx="500" cy="60" fill="#006970" r="4"></circle>
          <circle cx="600" cy="110" fill="#006970" r="4"></circle>
          <circle cx="800" cy="280" fill="#ba1a1a" r="4"></circle>
        </svg>
      </div>

      <div className="mt-4 flex justify-between border-t border-outline-variant/30 pt-4">
        <div className="flex gap-6">
          <div>
            <p className="font-mono text-[9px] text-on-surface-variant font-bold uppercase tracking-widest">
              Model Confidence
            </p>
            <p className="font-mono text-[12px] text-primary font-bold">98.2%</p>
          </div>
          <div>
            <p className="font-mono text-[9px] text-on-surface-variant font-bold uppercase tracking-widest">
              Latency
            </p>
            <p className="font-mono text-[12px] text-primary font-bold">12ms</p>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <span className="w-2 h-2 rounded-full bg-primary shadow-sm"></span>
          <span className="w-2 h-2 rounded-full bg-outline-variant/50"></span>
          <span className="w-2 h-2 rounded-full bg-outline-variant/50"></span>
        </div>
      </div>
    </div>
  );
}
