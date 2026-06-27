import React from "react";

export default function TelemetryStatsLight() {
  return (
    <div className="h-[40%] grid grid-cols-4 gap-4">
      <div className="glass-panel p-4 flex flex-col justify-between border-t-4 border-t-error rounded-xl">
        <div className="flex justify-between items-start">
          <span className="font-label-caps text-[10px] text-on-surface-variant uppercase tracking-tighter">
            Vibration RMS
          </span>
          <span className="px-2 py-0.5 bg-error-container text-on-error-container font-label-caps text-[9px] rounded font-bold pulse-red">
            CRITICAL
          </span>
        </div>
        <div className="flex items-baseline gap-2 mt-4">
          <span className="font-headline-lg text-[32px] text-error font-bold leading-none">
            14.2
          </span>
          <span className="font-label-caps text-on-surface-variant text-[12px]">
            MM/S
          </span>
        </div>
        <div className="mt-auto h-8 w-full">
          <svg className="w-full h-full" viewBox="0 0 100 20">
            <path
              d="M0,10 L10,12 L20,8 L30,15 L40,5 L50,18 L60,2 L70,14 L80,6 L90,12 L100,10"
              fill="none"
              stroke="#ba1a1a"
              strokeWidth="1.5"
            />
          </svg>
        </div>
      </div>

      <div className="glass-panel p-4 flex flex-col justify-between border-t-4 border-t-secondary rounded-xl">
        <div className="flex justify-between items-start">
          <span className="font-label-caps text-[10px] text-on-surface-variant uppercase tracking-tighter">
            Bearing Temp
          </span>
          <span className="px-2 py-0.5 bg-secondary-container text-on-secondary-container font-label-caps text-[9px] rounded font-bold">
            WARNING
          </span>
        </div>
        <div className="flex items-baseline gap-2 mt-4">
          <span className="font-headline-lg text-[32px] text-secondary font-bold leading-none">
            85.5
          </span>
          <span className="font-label-caps text-on-surface-variant text-[12px]">
            °C
          </span>
        </div>
        <div className="mt-auto h-8 w-full">
          <svg className="w-full h-full" viewBox="0 0 100 20">
            <path
              d="M0,18 L20,16 L40,14 L60,10 L80,8 L100,5"
              fill="none"
              stroke="#7e5700"
              strokeWidth="1.5"
            />
          </svg>
        </div>
      </div>

      <div className="glass-panel p-4 flex flex-col justify-between border-t-4 border-t-primary rounded-xl">
        <div className="flex justify-between items-start">
          <span className="font-label-caps text-[10px] text-on-surface-variant uppercase tracking-tighter">
            Motor Current
          </span>
          <span className="px-2 py-0.5 bg-primary-container text-on-primary-container font-label-caps text-[9px] rounded font-bold">
            NORMAL
          </span>
        </div>
        <div className="flex items-baseline gap-2 mt-4">
          <span className="font-headline-lg text-[32px] text-on-surface font-bold leading-none">
            42.1
          </span>
          <span className="font-label-caps text-on-surface-variant text-[12px]">
            A
          </span>
        </div>
        <div className="mt-auto h-8 w-full">
          <svg className="w-full h-full" viewBox="0 0 100 20">
            <line
              stroke="#bfc8c9"
              strokeWidth="1.5"
              x1="0"
              x2="100"
              y1="10"
              y2="10"
            />
          </svg>
        </div>
      </div>

      <div className="glass-panel p-4 flex flex-col justify-between border-t-4 border-t-primary rounded-xl">
        <div className="flex justify-between items-start">
          <span className="font-label-caps text-[10px] text-on-surface-variant uppercase tracking-tighter">
            Motor RPM
          </span>
          <span className="px-2 py-0.5 bg-primary-container text-on-primary-container font-label-caps text-[9px] rounded font-bold">
            NORMAL
          </span>
        </div>
        <div className="flex items-baseline gap-2 mt-4">
          <span className="font-headline-lg text-[32px] text-on-surface font-bold leading-none">
            1745.0
          </span>
          <span className="font-label-caps text-on-surface-variant text-[12px]">
            RPM
          </span>
        </div>
        <div className="mt-auto h-8 w-full">
          <svg className="w-full h-full" viewBox="0 0 100 20">
            <line
              stroke="#bfc8c9"
              strokeWidth="1.5"
              x1="0"
              x2="100"
              y1="10"
              y2="10"
            />
          </svg>
        </div>
      </div>

      <div className="glass-panel p-4 flex flex-col justify-between border-t-4 border-t-primary rounded-xl">
        <div className="flex justify-between items-start">
          <span className="font-label-caps text-[10px] text-on-surface-variant uppercase tracking-tighter">
            System Pressure
          </span>
          <span className="px-2 py-0.5 bg-primary-container text-on-primary-container font-label-caps text-[9px] rounded font-bold">
            NORMAL
          </span>
        </div>
        <div className="flex items-baseline gap-2 mt-4">
          <span className="font-headline-lg text-[32px] text-on-surface font-bold leading-none">
            115.2
          </span>
          <span className="font-label-caps text-on-surface-variant text-[12px]">
            PSI
          </span>
        </div>
        <div className="mt-auto h-8 w-full">
          <svg className="w-full h-full" viewBox="0 0 100 20">
            <line
              stroke="#bfc8c9"
              strokeWidth="1.5"
              x1="0"
              x2="100"
              y1="10"
              y2="10"
            />
          </svg>
        </div>
      </div>

      <div className="glass-panel p-4 flex flex-col justify-between border-t-4 border-t-primary rounded-xl">
        <div className="flex justify-between items-start">
          <span className="font-label-caps text-[10px] text-on-surface-variant uppercase tracking-tighter">
            Inlet Pressure
          </span>
          <span className="px-2 py-0.5 bg-primary-container text-on-primary-container font-label-caps text-[9px] rounded font-bold">
            NORMAL
          </span>
        </div>
        <div className="flex items-baseline gap-2 mt-4">
          <span className="font-headline-lg text-[32px] text-on-surface font-bold leading-none">
            12.0
          </span>
          <span className="font-label-caps text-on-surface-variant text-[12px]">
            BAR
          </span>
        </div>
        <div className="mt-auto h-8 w-full">
          <svg className="w-full h-full" viewBox="0 0 100 20">
            <line
              stroke="#bfc8c9"
              strokeWidth="1.5"
              x1="0"
              x2="100"
              y1="10"
              y2="10"
            />
          </svg>
        </div>
      </div>

      <div className="glass-panel p-4 flex flex-col justify-between border-t-4 border-t-primary rounded-xl">
        <div className="flex justify-between items-start">
          <span className="font-label-caps text-[10px] text-on-surface-variant uppercase tracking-tighter">
            Flow Rate
          </span>
          <span className="px-2 py-0.5 bg-primary-container text-on-primary-container font-label-caps text-[9px] rounded font-bold">
            NORMAL
          </span>
        </div>
        <div className="flex items-baseline gap-2 mt-4">
          <span className="font-headline-lg text-[32px] text-primary font-bold leading-none">
            110.5
          </span>
          <span className="font-label-caps text-on-surface-variant text-[12px]">
            L/MIN
          </span>
        </div>
        <div className="mt-auto h-8 w-full">
          <svg className="w-full h-full" viewBox="0 0 100 20">
            <path
              d="M0,2 L25,5 L50,8 L75,15 L100,18"
              fill="none"
              stroke="#006970"
              strokeWidth="1.5"
            />
          </svg>
        </div>
      </div>

      <div className="glass-panel p-4 flex flex-col justify-between border-t-4 border-t-primary rounded-xl">
        <div className="flex justify-between items-start">
          <span className="font-label-caps text-[10px] text-on-surface-variant uppercase tracking-tighter">
            Valve Position
          </span>
          <span className="px-2 py-0.5 bg-primary-container text-on-primary-container font-label-caps text-[9px] rounded font-bold">
            NORMAL
          </span>
        </div>
        <div className="flex items-baseline gap-2 mt-4">
          <span className="font-headline-lg text-[32px] text-on-surface font-bold leading-none">
            45.0
          </span>
          <span className="font-label-caps text-on-surface-variant text-[12px]">
            %
          </span>
        </div>
        <div className="mt-auto h-8 w-full">
          <svg className="w-full h-full" viewBox="0 0 100 20">
            <line
              stroke="#bfc8c9"
              strokeWidth="1.5"
              x1="0"
              x2="100"
              y1="10"
              y2="10"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
