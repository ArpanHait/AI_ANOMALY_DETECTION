import React from "react";

export default function SimulatedProjection() {
  return (
    <div className="glass-panel p-6 min-h-[400px] flex flex-col">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h2 className="font-label-caps text-label-caps text-primary border-l-2 border-primary pl-3">
            SIMULATED PROJECTION
          </h2>
          <p className="text-on-surface-variant text-[12px] mt-1">
            Predicted Operational Lifecycle (T-Minus Failure)
          </p>
        </div>
        <div className="text-right">
          <span className="font-data-lg text-headline-lg text-primary">
            14,204 HRS
          </span>
          <p className="font-label-caps text-[10px] text-on-surface-variant">
            ESTIMATED REMAINING UPTIME
          </p>
        </div>
      </div>
      <div className="flex-1 relative flex items-end gap-1">
        <svg
          className="w-full h-full overflow-visible"
          preserveAspectRatio="none"
          viewBox="0 0 800 300"
        >
          <defs>
            <pattern
              height="40"
              id="grid"
              patternUnits="userSpaceOnUse"
              width="40"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="rgba(0, 240, 255, 0.05)"
                strokeWidth="1"
              />
            </pattern>
            <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#00f0ff" stopOpacity="0.3"></stop>
              <stop offset="100%" stopColor="#00f0ff" stopOpacity="0"></stop>
            </linearGradient>
            <filter id="glow">
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
          <rect fill="url(#grid)" height="100%" width="100%" />

          <path
            d="M0,220 L100,200 L200,160 L300,180 L400,100 L500,60 L600,110 L700,150 L800,280 L800,300 L0,300 Z"
            fill="url(#chartGradient)"
          />

          <path
            d="M0,220 L100,200 L200,160 L300,180 L400,100 L500,60 L600,110 L700,150 L800,280"
            fill="none"
            filter="url(#glow)"
            stroke="#00f0ff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />

          <circle className="animate-pulse" cx="100" cy="200" fill="#00f0ff" r="3" />
          <circle cx="200" cy="160" fill="#00f0ff" r="3" />
          <circle cx="300" cy="180" fill="#00f0ff" r="3" />
          <circle cx="400" cy="100" fill="#00f0ff" r="3" />
          <circle cx="500" cy="60" fill="#00f0ff" r="3" />
          <circle cx="600" cy="110" fill="#00f0ff" r="3" />
          <circle cx="800" cy="280" fill="#ffb4ab" r="3" />
        </svg>
      </div>
      <div className="mt-4 flex justify-between border-t border-white/5 pt-4">
        <div className="flex gap-6">
          <div>
            <p className="font-label-caps text-[9px] text-on-surface-variant">
              MODEL CONFIDENCE
            </p>
            <p className="font-data-sm text-primary">98.2%</p>
          </div>
          <div>
            <p className="font-label-caps text-[9px] text-on-surface-variant">
              LATENCY
            </p>
            <p className="font-data-sm text-primary">12ms</p>
          </div>
        </div>
        <div className="flex gap-2">
          <span className="w-2 h-2 rounded-full bg-primary-container shadow-[0_0_5px_#00f0ff]"></span>
          <span className="w-2 h-2 rounded-full bg-white/20"></span>
          <span className="w-2 h-2 rounded-full bg-white/20"></span>
        </div>
      </div>
    </div>
  );
}
