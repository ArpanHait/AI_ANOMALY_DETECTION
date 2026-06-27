import React from "react";

export default function ParameterGridLight() {
  return (
    <>
      <div className="grid grid-cols-3 gap-panel-gap h-[22%]">
        <div className="glass-panel rounded-xl p-4 flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">
              Vibration RMS
            </span>
            <span className="px-2 py-1 bg-error text-on-error font-data-sm text-data-sm rounded">
              CRIT
            </span>
          </div>
          <div>
            <div className="font-data-lg text-data-lg text-error glow-crimson">
              14.2 <span className="text-data-sm text-on-surface-variant">mm/s</span>
            </div>
            <div className="h-8 mt-2 w-full bg-surface-container rounded relative overflow-hidden">
              <div className="absolute bottom-0 left-0 h-[60%] w-full border-t border-error bg-gradient-to-t from-error/10 to-transparent"></div>
              <svg className="w-full h-full" preserveAspectRatio="none">
                <path
                  d="M0,30 Q10,10 20,20 T40,25 T60,5 T80,15 T100,0 L100,32 L0,32 Z"
                  fill="rgba(186,26,26,0.1)"
                  stroke="#ba1a1a"
                  strokeWidth="2"
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
            <span className="px-2 py-1 bg-secondary text-on-secondary font-data-sm text-data-sm rounded">
              WARN
            </span>
          </div>
          <div>
            <div className="font-data-lg text-data-lg text-secondary">
              88.5 <span className="text-data-sm text-on-surface-variant">°C</span>
            </div>
            <div className="h-8 mt-2 w-full bg-surface-container rounded relative overflow-hidden">
              <svg className="w-full h-full" preserveAspectRatio="none">
                <path
                  d="M0,20 Q15,15 30,25 T60,10 T90,20 T100,15 L100,32 L0,32 Z"
                  fill="rgba(126,87,0,0.1)"
                  stroke="#7e5700"
                  strokeWidth="2"
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
            <span className="px-2 py-1 bg-primary text-on-primary font-data-sm text-data-sm rounded">
              NOM
            </span>
          </div>
          <div>
            <div className="font-data-lg text-data-lg text-primary">
              42.1 <span className="text-data-sm text-on-surface-variant">A</span>
            </div>
            <div className="h-8 mt-2 w-full bg-surface-container rounded relative overflow-hidden">
              <svg className="w-full h-full" preserveAspectRatio="none">
                <path
                  d="M0,25 Q20,25 40,25 T80,25 T100,25 L100,32 L0,32 Z"
                  fill="rgba(0,105,112,0.1)"
                  stroke="#006970"
                  strokeWidth="2"
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
            <span className="px-2 py-1 bg-primary text-on-primary font-data-sm text-data-sm rounded">
              NOM
            </span>
          </div>
          <div>
            <div className="font-data-lg text-data-lg text-primary">
              1750 <span className="text-data-sm text-on-surface-variant">rpm</span>
            </div>
            <div className="h-8 mt-2 w-full bg-surface-container rounded relative overflow-hidden">
              <svg className="w-full h-full" preserveAspectRatio="none">
                <path
                  d="M0,25 Q15,20 30,25 T60,22 T90,25 T100,24 L100,32 L0,32 Z"
                  fill="rgba(0,105,112,0.1)"
                  stroke="#006970"
                  strokeWidth="2"
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
            <span className="px-2 py-1 bg-secondary text-on-secondary font-data-sm text-data-sm rounded">
              WARN
            </span>
          </div>
          <div>
            <div className="font-data-lg text-data-lg text-secondary">
              102.4 <span className="text-data-sm text-on-surface-variant">N/m³</span>
            </div>
            <div className="h-8 mt-2 w-full bg-surface-container rounded relative overflow-hidden">
              <svg className="w-full h-full" preserveAspectRatio="none">
                <path
                  d="M0,28 Q20,15 40,22 T70,18 T100,25 L100,32 L0,32 Z"
                  fill="rgba(126,87,0,0.1)"
                  stroke="#7e5700"
                  strokeWidth="2"
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
            <button className="w-full py-2 border border-primary text-primary font-label-caps text-label-caps rounded hover:bg-primary hover:text-on-primary transition-all text-[10px]">
              NORMAL
            </button>
            <button className="w-full py-2 bg-error border border-error text-on-error font-label-caps text-label-caps rounded shadow-[0_0_10px_rgba(186,26,26,0.2)] animate-pulse hover:bg-on-error-container transition-all text-[10px]">
              ABNORMAL
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
