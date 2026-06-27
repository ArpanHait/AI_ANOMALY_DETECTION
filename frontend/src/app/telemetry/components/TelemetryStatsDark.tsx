import React from "react";

export default function TelemetryStatsDark() {
  return (
    <div className="flex-[4] min-h-0 grid grid-cols-4 grid-rows-2 gap-1">
      {/* Vibration RMS */}
      <div
        className="glass-panel p-4 flex flex-col justify-between border-l-2 border-error/50 rounded-xl"
        style={{
          background: "rgba(255, 255, 255, 0.03)",
          backdropFilter: "blur(12px)",
        }}
      >
        <div className="flex justify-between items-start">
          <span className="font-mono text-[10px] text-on-surface-variant uppercase tracking-tighter font-bold">
            Vibration RMS
          </span>
          <span className="px-2 py-0.5 bg-error-container/20 text-error font-mono text-[9px] rounded-full animate-pulse font-bold">
            CRITICAL
          </span>
        </div>
        <div className="flex items-baseline gap-2 mt-2">
          <span className="font-mono text-[28px] text-error font-bold leading-none">
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
              stroke="#ffb4ab"
              strokeWidth="1"
            ></path>
          </svg>
        </div>
      </div>
      {/* Bearing Temp */}
      <div
        className="glass-panel p-4 flex flex-col justify-between border-l-2 border-secondary/50 rounded-xl"
        style={{
          background: "rgba(255, 255, 255, 0.03)",
          backdropFilter: "blur(12px)",
        }}
      >
        <div className="flex justify-between items-start">
          <span className="font-mono text-[10px] text-on-surface-variant uppercase tracking-tighter font-bold">
            Bearing Temp
          </span>
          <span className="px-2 py-0.5 bg-secondary-container/20 text-secondary font-mono text-[9px] rounded-full font-bold">
            WARNING
          </span>
        </div>
        <div className="flex items-baseline gap-2 mt-2">
          <span className="font-mono text-[28px] text-secondary font-bold leading-none">
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
              stroke="#ffba20"
              strokeWidth="1"
            ></path>
          </svg>
        </div>
      </div>
      {/* Motor Current */}
      <div
        className="glass-panel p-4 flex flex-col justify-between border-l-2 border-emerald-500/50 rounded-xl"
        style={{
          background: "rgba(255, 255, 255, 0.03)",
          backdropFilter: "blur(12px)",
        }}
      >
        <div className="flex justify-between items-start">
          <span className="font-mono text-[10px] text-on-surface-variant uppercase tracking-tighter font-bold">
            Motor Current
          </span>
          <span className="px-2 py-0.5 bg-emerald-500/10 text-emerald-400 font-mono text-[9px] rounded-full font-bold">
            NORMAL
          </span>
        </div>
        <div className="flex items-baseline gap-2 mt-2">
          <span className="font-mono text-[28px] text-on-surface font-bold leading-none">
            42.1
          </span>
          <span className="font-mono text-on-surface-variant text-[12px] font-bold">
            A
          </span>
        </div>
        <div className="mt-auto flex-1 min-h-[20px] max-h-8 w-full">
          <svg
            className="w-full h-full opacity-30"
            viewBox="0 0 100 20"
            preserveAspectRatio="none"
          >
            <line
              stroke="var(--theme-on-surface)"
              strokeWidth="1"
              x1="0"
              x2="100"
              y1="10"
              y2="10"
            ></line>
          </svg>
        </div>
      </div>
      {/* Motor RPM */}
      <div
        className="glass-panel p-4 flex flex-col justify-between border-l-2 border-emerald-500/50 rounded-xl"
        style={{
          background: "rgba(255, 255, 255, 0.03)",
          backdropFilter: "blur(12px)",
        }}
      >
        <div className="flex justify-between items-start">
          <span className="font-mono text-[10px] text-on-surface-variant uppercase tracking-tighter font-bold">
            Motor RPM
          </span>
          <span className="px-2 py-0.5 bg-emerald-500/10 text-emerald-400 font-mono text-[9px] rounded-full font-bold">
            NORMAL
          </span>
        </div>
        <div className="flex items-baseline gap-2 mt-2">
          <span className="font-mono text-[28px] text-on-surface font-bold leading-none">
            1745.0
          </span>
          <span className="font-mono text-on-surface-variant text-[12px] font-bold">
            RPM
          </span>
        </div>
        <div className="mt-auto flex-1 min-h-[20px] max-h-8 w-full">
          <svg
            className="w-full h-full opacity-30"
            viewBox="0 0 100 20"
            preserveAspectRatio="none"
          >
            <line
              stroke="var(--theme-on-surface)"
              strokeWidth="1"
              x1="0"
              x2="100"
              y1="10"
              y2="10"
            ></line>
          </svg>
        </div>
      </div>
      {/* System Pressure */}
      <div
        className="glass-panel p-4 flex flex-col justify-between border-l-2 border-emerald-500/50 rounded-xl"
        style={{
          background: "rgba(255, 255, 255, 0.03)",
          backdropFilter: "blur(12px)",
        }}
      >
        <div className="flex justify-between items-start">
          <span className="font-mono text-[10px] text-on-surface-variant uppercase tracking-tighter font-bold">
            System Pressure
          </span>
          <span className="px-2 py-0.5 bg-emerald-500/10 text-emerald-400 font-mono text-[9px] rounded-full font-bold">
            NORMAL
          </span>
        </div>
        <div className="flex items-baseline gap-2 mt-2">
          <span className="font-mono text-[28px] text-on-surface font-bold leading-none">
            115.2
          </span>
          <span className="font-mono text-on-surface-variant text-[12px] font-bold">
            PSI
          </span>
        </div>
        <div className="mt-auto flex-1 min-h-[20px] max-h-8 w-full">
          <svg
            className="w-full h-full opacity-30"
            viewBox="0 0 100 20"
            preserveAspectRatio="none"
          >
            <line
              stroke="var(--theme-on-surface)"
              strokeWidth="1"
              x1="0"
              x2="100"
              y1="10"
              y2="10"
            ></line>
          </svg>
        </div>
      </div>
      {/* Inlet Pressure */}
      <div
        className="glass-panel p-4 flex flex-col justify-between border-l-2 border-emerald-500/50 rounded-xl"
        style={{
          background: "rgba(255, 255, 255, 0.03)",
          backdropFilter: "blur(12px)",
        }}
      >
        <div className="flex justify-between items-start">
          <span className="font-mono text-[10px] text-on-surface-variant uppercase tracking-tighter font-bold">
            Inlet Pressure
          </span>
          <span className="px-2 py-0.5 bg-emerald-500/10 text-emerald-400 font-mono text-[9px] rounded-full font-bold">
            NORMAL
          </span>
        </div>
        <div className="flex items-baseline gap-2 mt-2">
          <span className="font-mono text-[28px] text-on-surface font-bold leading-none">
            12.0
          </span>
          <span className="font-mono text-on-surface-variant text-[12px] font-bold">
            BAR
          </span>
        </div>
        <div className="mt-auto flex-1 min-h-[20px] max-h-8 w-full">
          <svg
            className="w-full h-full opacity-30"
            viewBox="0 0 100 20"
            preserveAspectRatio="none"
          >
            <line
              stroke="var(--theme-on-surface)"
              strokeWidth="1"
              x1="0"
              x2="100"
              y1="10"
              y2="10"
            ></line>
          </svg>
        </div>
      </div>
      {/* Flow Rate */}
      <div
        className="glass-panel p-4 flex flex-col justify-between border-l-2 border-emerald-500/50 rounded-xl"
        style={{
          background: "rgba(255, 255, 255, 0.03)",
          backdropFilter: "blur(12px)",
        }}
      >
        <div className="flex justify-between items-start">
          <span className="font-mono text-[10px] text-on-surface-variant uppercase tracking-tighter font-bold">
            Flow Rate
          </span>
          <span className="px-2 py-0.5 bg-emerald-500/10 text-emerald-400 font-mono text-[9px] rounded-full font-bold">
            NORMAL
          </span>
        </div>
        <div className="flex items-baseline gap-2 mt-2">
          <span className="font-mono text-[28px] text-on-surface font-bold leading-none text-primary-fixed">
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
              stroke="#7df4ff"
              strokeWidth="1"
            ></path>
          </svg>
        </div>
      </div>
      {/* Valve Position */}
      <div
        className="glass-panel p-4 flex flex-col justify-between border-l-2 border-emerald-500/50 rounded-xl"
        style={{
          background: "rgba(255, 255, 255, 0.03)",
          backdropFilter: "blur(12px)",
        }}
      >
        <div className="flex justify-between items-start">
          <span className="font-mono text-[10px] text-on-surface-variant uppercase tracking-tighter font-bold">
            Valve Position
          </span>
          <span className="px-2 py-0.5 bg-emerald-500/10 text-emerald-400 font-mono text-[9px] rounded-full font-bold">
            NORMAL
          </span>
        </div>
        <div className="flex items-baseline gap-2 mt-2">
          <span className="font-mono text-[28px] text-on-surface font-bold leading-none">
            45.0
          </span>
          <span className="font-mono text-on-surface-variant text-[12px] font-bold">
            %
          </span>
        </div>
        <div className="mt-auto flex-1 min-h-[20px] max-h-8 w-full opacity-30">
          <svg
            className="w-full h-full"
            viewBox="0 0 100 20"
            preserveAspectRatio="none"
          >
            <line
              stroke="var(--theme-on-surface)"
              strokeWidth="1"
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
