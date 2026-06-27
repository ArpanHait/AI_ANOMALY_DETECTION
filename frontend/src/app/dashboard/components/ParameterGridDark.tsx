import React from "react";

export default function ParameterGridDark() {
  return (
    <>
      {/* Parameter Grid Row 1 */}
      <div className="grid grid-cols-3 gap-1 h-[22%]">
        <div
          className="glass-panel rounded-xl p-4 flex flex-col justify-between"
          style={{
            background: "rgba(255, 255, 255, 0.03)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(255, 255, 255, 0.08)",
          }}
        >
          <div className="flex justify-between items-start">
            <span className="font-mono text-[11px] font-bold text-on-surface-variant uppercase">
              Vibration RMS
            </span>
            <span className="px-2 py-1 bg-error-container/30 text-error font-mono text-xs rounded border border-error/50">
              CRIT
            </span>
          </div>
          <div>
            <div className="font-mono text-lg font-medium text-error glow-crimson">
              14.2 <span className="text-xs text-on-surface-variant">mm/s</span>
            </div>
            <div className="h-8 mt-2 w-full bg-surface-container-low rounded relative overflow-hidden">
              <div className="absolute bottom-0 left-0 h-[60%] w-full border-t border-error/50 bg-gradient-to-t from-error/20 to-transparent"></div>
              <svg className="w-full h-full" preserveAspectRatio="none">
                <path
                  d="M0,30 Q10,10 20,20 T40,25 T60,5 T80,15 T100,0 L100,32 L0,32 Z"
                  fill="rgba(255,180,171,0.2)"
                  stroke="#ffb4ab"
                  strokeWidth="1"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <div
          className="glass-panel rounded-xl p-4 flex flex-col justify-between"
          style={{
            background: "rgba(255, 255, 255, 0.03)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(255, 255, 255, 0.08)",
          }}
        >
          <div className="flex justify-between items-start">
            <span className="font-mono text-[11px] font-bold text-on-surface-variant uppercase">
              Bearing Temp
            </span>
            <span className="px-2 py-1 bg-secondary-container/30 text-secondary-fixed-dim font-mono text-xs rounded border border-secondary-fixed-dim/50">
              WARN
            </span>
          </div>
          <div>
            <div className="font-mono text-lg font-medium text-secondary-fixed-dim">
              88.5 <span className="text-xs text-on-surface-variant">°C</span>
            </div>
            <div className="h-8 mt-2 w-full bg-surface-container-low rounded relative overflow-hidden">
              <svg className="w-full h-full" preserveAspectRatio="none">
                <path
                  d="M0,20 Q15,15 30,25 T60,10 T90,20 T100,15 L100,32 L0,32 Z"
                  fill="rgba(255,186,32,0.2)"
                  stroke="#ffba20"
                  strokeWidth="1"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <div
          className="glass-panel rounded-xl p-4 flex flex-col justify-between"
          style={{
            background: "rgba(255, 255, 255, 0.03)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(255, 255, 255, 0.08)",
          }}
        >
          <div className="flex justify-between items-start">
            <span className="font-mono text-[11px] font-bold text-on-surface-variant uppercase">
              Motor Current
            </span>
            <span className="px-2 py-1 bg-[#64ffda]/10 text-[#64ffda] drop-shadow-[0_0_4px_rgba(100,255,218,0.4)] font-mono text-xs rounded border border-[#64ffda]/50">
              NOM
            </span>
          </div>
          <div>
            <div className="font-mono text-lg font-medium text-[#64ffda] drop-shadow-[0_0_4px_rgba(100,255,218,0.4)]">
              42.1 <span className="text-xs text-on-surface-variant">A</span>
            </div>
            <div className="h-8 mt-2 w-full bg-surface-container-low rounded relative overflow-hidden">
              <svg className="w-full h-full" preserveAspectRatio="none">
                <path
                  d="M0,25 Q20,25 40,25 T80,25 T100,25 L100,32 L0,32 Z"
                  fill="rgba(0,240,255,0.1)"
                  stroke="#00f0ff"
                  strokeWidth="1"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Parameter Grid Row 2 */}
      <div className="grid grid-cols-3 gap-1 h-[18%]">
        <div
          className="glass-panel rounded-xl p-4 flex flex-col justify-between"
          style={{
            background: "rgba(255, 255, 255, 0.03)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(255, 255, 255, 0.08)",
          }}
        >
          <div className="flex justify-between items-start">
            <span className="font-mono text-[11px] font-bold text-on-surface-variant uppercase">
              RPM
            </span>
            <span className="px-2 py-1 bg-[#64ffda]/10 text-[#64ffda] drop-shadow-[0_0_4px_rgba(100,255,218,0.4)] font-mono text-xs rounded border border-[#64ffda]/50">
              NOM
            </span>
          </div>
          <div>
            <div className="font-mono text-lg font-medium text-[#64ffda] drop-shadow-[0_0_4px_rgba(100,255,218,0.4)]">
              1750 <span className="text-xs text-on-surface-variant">rpm</span>
            </div>
            <div className="h-8 mt-2 w-full bg-surface-container-low rounded relative overflow-hidden">
              <svg className="w-full h-full" preserveAspectRatio="none">
                <path
                  d="M0,25 Q15,20 30,25 T60,22 T90,25 T100,24 L100,32 L0,32 Z"
                  fill="rgba(0,240,255,0.1)"
                  stroke="#00f0ff"
                  strokeWidth="1"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <div
          className="glass-panel rounded-xl p-4 flex flex-col justify-between"
          style={{
            background: "rgba(255, 255, 255, 0.03)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(255, 255, 255, 0.08)",
          }}
        >
          <div className="flex justify-between items-start">
            <span className="font-mono text-[11px] font-bold text-on-surface-variant uppercase">
              PRESSURE
            </span>
            <span className="px-2 py-1 bg-secondary-container/30 text-secondary-fixed-dim font-mono text-xs rounded border border-secondary-fixed-dim/50">
              WARN
            </span>
          </div>
          <div>
            <div className="font-mono text-lg font-medium text-secondary-fixed-dim">
              102.4 <span className="text-xs text-on-surface-variant">N/m³</span>
            </div>
            <div className="h-8 mt-2 w-full bg-surface-container-low rounded relative overflow-hidden">
              <svg className="w-full h-full" preserveAspectRatio="none">
                <path
                  d="M0,28 Q20,15 40,22 T70,18 T100,25 L100,32 L0,32 Z"
                  fill="rgba(255,186,32,0.2)"
                  stroke="#ffba20"
                  strokeWidth="1"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <div
          className="glass-panel rounded-xl p-4 flex flex-col"
          style={{
            background: "rgba(255, 255, 255, 0.03)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(255, 255, 255, 0.08)",
          }}
        >
          <div className="font-mono text-[11px] font-bold text-on-surface-variant uppercase mb-3">
            SYSTEM OVERRIDE / SIMULATION
          </div>
          <div className="flex flex-col gap-2 flex-grow justify-center">
            <button className="w-full py-2 border border-[#64ffda]/40 text-[#64ffda] drop-shadow-[0_0_4px_rgba(100,255,218,0.4)] font-mono font-bold rounded hover:bg-[#64ffda]/10 transition-all text-[10px]">
              NORMAL
            </button>
            <button className="w-full py-2 bg-error/20 border border-error text-error font-mono font-bold rounded shadow-[0_0_15px_rgba(255,180,171,0.4)] animate-pulse hover:bg-error/30 transition-all text-[10px]">
              ABNORMAL
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
