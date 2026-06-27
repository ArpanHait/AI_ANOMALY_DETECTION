import React from "react";

export default function ParameterGridDark() {
  return (
    <>
      <div className="grid grid-cols-3 gap-panel-gap h-[22%]">
        <div className="glass-panel rounded-xl p-4 flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">
              Vibration RMS
            </span>
            <span className="px-2 py-1 bg-error-container/30 text-error font-data-sm text-data-sm rounded border border-error/50">
              CRIT
            </span>
          </div>
          <div>
            <div className="font-data-lg text-data-lg text-error glow-crimson">
              14.2 <span className="text-data-sm text-on-surface-variant">mm/s</span>
            </div>
            <div className="h-8 mt-2 w-full bg-surface-container-low rounded relative overflow-hidden">
              <div className="absolute bottom-0 left-0 h-[60%] w-full border-t border-error/50 bg-gradient-to-t from-error/20 to-transparent"></div>
              <svg className="w-full h-full" preserveAspectRatio="none">
                <path
                  d="M0,30 Q10,10 20,20 T40,25 T60,5 T80,15 T100,0 L100,32 L0,32 Z"
                  fill="rgba(255,180,171,0.2)"
                  stroke="#ffb4ab"
                  strokeWidth="1"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="glass-panel rounded-xl p-4 flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">
              Bearing Temp
            </span>
            <span className="px-2 py-1 bg-secondary-container/30 text-secondary-fixed-dim font-data-sm text-data-sm rounded border border-secondary-fixed-dim/50">
              WARN
            </span>
          </div>
          <div>
            <div className="font-data-lg text-data-lg text-secondary-fixed-dim">
              88.5 <span className="text-data-sm text-on-surface-variant">°C</span>
            </div>
            <div className="h-8 mt-2 w-full bg-surface-container-low rounded relative overflow-hidden">
              <svg className="w-full h-full" preserveAspectRatio="none">
                <path
                  d="M0,20 Q15,15 30,25 T60,10 T90,20 T100,15 L100,32 L0,32 Z"
                  fill="rgba(255,186,32,0.2)"
                  stroke="#ffba20"
                  strokeWidth="1"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="glass-panel rounded-xl p-4 flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">
              Motor Current
            </span>
            <span className="px-2 py-1 bg-primary-container/10 text-primary-container font-data-sm text-data-sm rounded border border-primary-container/30">
              NOM
            </span>
          </div>
          <div>
            <div className="font-data-lg text-data-lg text-primary-container">
              42.1 <span className="text-data-sm text-on-surface-variant">A</span>
            </div>
            <div className="h-8 mt-2 w-full bg-surface-container-low rounded relative overflow-hidden">
              <svg className="w-full h-full" preserveAspectRatio="none">
                <path
                  d="M0,25 Q20,25 40,25 T80,25 T100,25 L100,32 L0,32 Z"
                  fill="rgba(0,240,255,0.1)"
                  stroke="#00f0ff"
                  strokeWidth="1"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-panel-gap h-[18%]">
        <div className="glass-panel rounded-xl p-4 flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">
              RPM
            </span>
            <span className="px-2 py-1 bg-primary-container/10 text-primary-container font-data-sm text-data-sm rounded border border-primary-container/30">
              NOM
            </span>
          </div>
          <div>
            <div className="font-data-lg text-data-lg text-primary-container">
              1750 <span className="text-data-sm text-on-surface-variant">rpm</span>
            </div>
            <div className="h-8 mt-2 w-full bg-surface-container-low rounded relative overflow-hidden">
              <svg className="w-full h-full" preserveAspectRatio="none">
                <path
                  d="M0,25 Q15,20 30,25 T60,22 T90,25 T100,24 L100,32 L0,32 Z"
                  fill="rgba(0,240,255,0.1)"
                  stroke="#00f0ff"
                  strokeWidth="1"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="glass-panel rounded-xl p-4 flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">
              PRESSURE
            </span>
            <span className="px-2 py-1 bg-secondary-container/30 text-secondary-fixed-dim font-data-sm text-data-sm rounded border border-secondary-fixed-dim/50">
              WARN
            </span>
          </div>
          <div>
            <div className="font-data-lg text-data-lg text-secondary-fixed-dim">
              102.4 <span className="text-data-sm text-on-surface-variant">N/m³</span>
            </div>
            <div className="h-8 mt-2 w-full bg-surface-container-low rounded relative overflow-hidden">
              <svg className="w-full h-full" preserveAspectRatio="none">
                <path
                  d="M0,28 Q20,15 40,22 T70,18 T100,25 L100,32 L0,32 Z"
                  fill="rgba(255,186,32,0.2)"
                  stroke="#ffba20"
                  strokeWidth="1"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="glass-panel rounded-xl p-4 flex flex-col">
          <div className="font-label-caps text-label-caps text-on-surface-variant uppercase mb-3">
            SYSTEM OVERRIDE / SIMULATION
          </div>
          <div className="flex flex-col gap-2 flex-grow justify-center">
            <button className="w-full py-2 border border-primary-container/40 text-primary-container font-label-caps text-label-caps rounded hover:bg-primary-container/10 transition-all text-[10px]">
              NORMAL
            </button>
            <button className="w-full py-2 bg-error/20 border border-error text-error font-label-caps text-label-caps rounded shadow-[0_0_15px_rgba(255,180,171,0.4)] animate-pulse hover:bg-error/30 transition-all text-[10px]">
              ABNORMAL
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
