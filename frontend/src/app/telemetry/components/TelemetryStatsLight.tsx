import React from "react";

export default function TelemetryStatsLight() {
  return (
    <div className="flex-[4] min-h-0 grid grid-cols-4 grid-rows-2 gap-4">
      {/* Vibration RMS */}
      <div className="bg-[#ffffff] border border-[#dee3e4] shadow-[0_1px_3px_rgba(0,0,0,0.05)] p-4 flex flex-col justify-between border-t-4 border-t-error rounded-xl">
        <div className="flex justify-between items-start">
          <span className="font-mono text-[10px] font-bold text-on-surface-variant uppercase tracking-tighter">
            Vibration RMS
          </span>
          <span className="px-2 py-0.5 bg-error-container text-on-error-container font-mono text-[9px] rounded font-bold animate-pulse">
            CRITICAL
          </span>
        </div>
        <div className="flex items-baseline gap-2 mt-2">
          <span className="font-headline text-[32px] text-error font-bold leading-none">
            14.2
          </span>
          <span className="font-mono text-on-surface-variant text-[12px] font-bold">
            MM/S
          </span>
        </div>
        <div className="mt-auto flex-1 min-h-[20px] max-h-8 w-full">
          <svg
            className="w-full h-full"
            viewBox="0 0 100 20"
            preserveAspectRatio="none"
          >
            <path
              d="M0,10 L10,12 L20,8 L30,15 L40,5 L50,18 L60,2 L70,14 L80,6 L90,12 L100,10"
              fill="none"
              stroke="#ba1a1a"
              strokeWidth="1.5"
            ></path>
          </svg>
        </div>
      </div>
      {/* Bearing Temp */}
      <div className="bg-[#ffffff] border border-[#dee3e4] shadow-[0_1px_3px_rgba(0,0,0,0.05)] p-4 flex flex-col justify-between border-t-4 border-t-secondary rounded-xl">
        <div className="flex justify-between items-start">
          <span className="font-mono text-[10px] font-bold text-on-surface-variant uppercase tracking-tighter">
            Bearing Temp
          </span>
          <span className="px-2 py-0.5 bg-secondary-container text-on-secondary-container font-mono text-[9px] rounded font-bold">
            WARNING
          </span>
        </div>
        <div className="flex items-baseline gap-2 mt-2">
          <span className="font-headline text-[32px] text-secondary font-bold leading-none">
            85.5
          </span>
          <span className="font-mono text-on-surface-variant text-[12px] font-bold">
            °C
          </span>
        </div>
        <div className="mt-auto flex-1 min-h-[20px] max-h-8 w-full">
          <svg
            className="w-full h-full"
            viewBox="0 0 100 20"
            preserveAspectRatio="none"
          >
            <path
              d="M0,18 L20,16 L40,14 L60,10 L80,8 L100,5"
              fill="none"
              stroke="#7e5700"
              strokeWidth="1.5"
            ></path>
          </svg>
        </div>
      </div>
      {/* Motor Current */}
      <div className="bg-[#ffffff] border border-[#dee3e4] shadow-[0_1px_3px_rgba(0,0,0,0.05)] p-4 flex flex-col justify-between border-t-4 border-t-primary rounded-xl">
        <div className="flex justify-between items-start">
          <span className="font-mono text-[10px] font-bold text-on-surface-variant uppercase tracking-tighter">
            Motor Current
          </span>
          <span className="px-2 py-0.5 bg-primary-container text-on-primary-container font-mono text-[9px] rounded font-bold">
            NORMAL
          </span>
        </div>
        <div className="flex items-baseline gap-2 mt-2">
          <span className="font-headline text-[32px] text-on-surface font-bold leading-none">
            42.1
          </span>
          <span className="font-mono text-on-surface-variant text-[12px] font-bold">
            A
          </span>
        </div>
        <div className="mt-auto flex-1 min-h-[20px] max-h-8 w-full">
          <svg
            className="w-full h-full"
            viewBox="0 0 100 20"
            preserveAspectRatio="none"
          >
            <line
              stroke="#bfc8c9"
              strokeWidth="1.5"
              x1="0"
              x2="100"
              y1="10"
              y2="10"
            ></line>
          </svg>
        </div>
      </div>
      {/* Motor RPM */}
      <div className="bg-[#ffffff] border border-[#dee3e4] shadow-[0_1px_3px_rgba(0,0,0,0.05)] p-4 flex flex-col justify-between border-t-4 border-t-primary rounded-xl">
        <div className="flex justify-between items-start">
          <span className="font-mono text-[10px] font-bold text-on-surface-variant uppercase tracking-tighter">
            Motor RPM
          </span>
          <span className="px-2 py-0.5 bg-primary-container text-on-primary-container font-mono text-[9px] rounded font-bold">
            NORMAL
          </span>
        </div>
        <div className="flex items-baseline gap-2 mt-2">
          <span className="font-headline text-[32px] text-on-surface font-bold leading-none">
            1745.0
          </span>
          <span className="font-mono text-on-surface-variant text-[12px] font-bold">
            RPM
          </span>
        </div>
        <div className="mt-auto flex-1 min-h-[20px] max-h-8 w-full">
          <svg
            className="w-full h-full"
            viewBox="0 0 100 20"
            preserveAspectRatio="none"
          >
            <line
              stroke="#bfc8c9"
              strokeWidth="1.5"
              x1="0"
              x2="100"
              y1="10"
              y2="10"
            ></line>
          </svg>
        </div>
      </div>
      {/* System Pressure */}
      <div className="bg-[#ffffff] border border-[#dee3e4] shadow-[0_1px_3px_rgba(0,0,0,0.05)] p-4 flex flex-col justify-between border-t-4 border-t-primary rounded-xl">
        <div className="flex justify-between items-start">
          <span className="font-mono text-[10px] font-bold text-on-surface-variant uppercase tracking-tighter">
            System Pressure
          </span>
          <span className="px-2 py-0.5 bg-primary-container text-on-primary-container font-mono text-[9px] rounded font-bold">
            NORMAL
          </span>
        </div>
        <div className="flex items-baseline gap-2 mt-2">
          <span className="font-headline text-[32px] text-on-surface font-bold leading-none">
            115.2
          </span>
          <span className="font-mono text-on-surface-variant text-[12px] font-bold">
            PSI
          </span>
        </div>
        <div className="mt-auto flex-1 min-h-[20px] max-h-8 w-full">
          <svg
            className="w-full h-full"
            viewBox="0 0 100 20"
            preserveAspectRatio="none"
          >
            <line
              stroke="#bfc8c9"
              strokeWidth="1.5"
              x1="0"
              x2="100"
              y1="10"
              y2="10"
            ></line>
          </svg>
        </div>
      </div>
      {/* Inlet Pressure */}
      <div className="bg-[#ffffff] border border-[#dee3e4] shadow-[0_1px_3px_rgba(0,0,0,0.05)] p-4 flex flex-col justify-between border-t-4 border-t-primary rounded-xl">
        <div className="flex justify-between items-start">
          <span className="font-mono text-[10px] font-bold text-on-surface-variant uppercase tracking-tighter">
            Inlet Pressure
          </span>
          <span className="px-2 py-0.5 bg-primary-container text-on-primary-container font-mono text-[9px] rounded font-bold">
            NORMAL
          </span>
        </div>
        <div className="flex items-baseline gap-2 mt-2">
          <span className="font-headline text-[32px] text-on-surface font-bold leading-none">
            12.0
          </span>
          <span className="font-mono text-on-surface-variant text-[12px] font-bold">
            BAR
          </span>
        </div>
        <div className="mt-auto flex-1 min-h-[20px] max-h-8 w-full">
          <svg
            className="w-full h-full"
            viewBox="0 0 100 20"
            preserveAspectRatio="none"
          >
            <line
              stroke="#bfc8c9"
              strokeWidth="1.5"
              x1="0"
              x2="100"
              y1="10"
              y2="10"
            ></line>
          </svg>
        </div>
      </div>
      {/* Flow Rate */}
      <div className="bg-[#ffffff] border border-[#dee3e4] shadow-[0_1px_3px_rgba(0,0,0,0.05)] p-4 flex flex-col justify-between border-t-4 border-t-primary rounded-xl">
        <div className="flex justify-between items-start">
          <span className="font-mono text-[10px] font-bold text-on-surface-variant uppercase tracking-tighter">
            Flow Rate
          </span>
          <span className="px-2 py-0.5 bg-primary-container text-on-primary-container font-mono text-[9px] rounded font-bold">
            NORMAL
          </span>
        </div>
        <div className="flex items-baseline gap-2 mt-2">
          <span className="font-headline text-[32px] text-primary font-bold leading-none">
            110.5
          </span>
          <span className="font-mono text-on-surface-variant text-[12px] font-bold">
            L/MIN
          </span>
        </div>
        <div className="mt-auto flex-1 min-h-[20px] max-h-8 w-full">
          <svg
            className="w-full h-full"
            viewBox="0 0 100 20"
            preserveAspectRatio="none"
          >
            <path
              d="M0,2 L25,5 L50,8 L75,15 L100,18"
              fill="none"
              stroke="#006970"
              strokeWidth="1.5"
            ></path>
          </svg>
        </div>
      </div>
      {/* Valve Position */}
      <div className="bg-[#ffffff] border border-[#dee3e4] shadow-[0_1px_3px_rgba(0,0,0,0.05)] p-4 flex flex-col justify-between border-t-4 border-t-primary rounded-xl">
        <div className="flex justify-between items-start">
          <span className="font-mono text-[10px] font-bold text-on-surface-variant uppercase tracking-tighter">
            Valve Position
          </span>
          <span className="px-2 py-0.5 bg-primary-container text-on-primary-container font-mono text-[9px] rounded font-bold">
            NORMAL
          </span>
        </div>
        <div className="flex items-baseline gap-2 mt-2">
          <span className="font-headline text-[32px] text-on-surface font-bold leading-none">
            45.0
          </span>
          <span className="font-mono text-on-surface-variant text-[12px] font-bold">
            %
          </span>
        </div>
        <div className="mt-auto flex-1 min-h-[20px] max-h-8 w-full">
          <svg
            className="w-full h-full"
            viewBox="0 0 100 20"
            preserveAspectRatio="none"
          >
            <line
              stroke="#bfc8c9"
              strokeWidth="1.5"
              x1="0"
              x2="100"
              y1="10"
              y2="10"
            ></line>
          </svg>
        </div>
      </div>
    </div>
  );
}
