import React from "react";

export default function ParameterConfiguration() {
  return (
    <section className="col-span-12 lg:col-span-4 glass-panel p-6 flex flex-col space-y-6">
      <div>
        <h2 className="font-label-caps text-label-caps text-primary border-l-2 border-primary pl-3 mb-2">
          PARAMETER CONFIGURATION
        </h2>
        <p className="text-on-surface-variant font-body-sm">
          Adjust system inputs to simulate hardware response profiles.
        </p>
      </div>

      <div className="space-y-3">
        <label className="font-label-caps text-[10px] text-on-surface-variant">
          SCENARIO PRESETS
        </label>
        <div className="flex flex-wrap gap-2">
          <button className="bg-primary-container/20 text-primary border border-primary/40 px-3 py-1.5 rounded font-label-caps text-[11px] hover:bg-primary/30 transition-all">
            MAX STRESS TEST
          </button>
          <button className="bg-white/5 text-on-surface-variant border border-white/10 px-3 py-1.5 rounded font-label-caps text-[11px] hover:bg-white/10">
            GRADUAL WEAR
          </button>
          <button className="bg-white/5 text-on-surface-variant border border-white/10 px-3 py-1.5 rounded font-label-caps text-[11px] hover:bg-white/10">
            OPTIMAL EFFICIENCY
          </button>
        </div>
      </div>

      <div className="space-y-5 flex-1">
        <div className="space-y-2">
          <div className="flex justify-between font-label-caps text-[10px]">
            <span className="text-on-surface">VIBRATION RMS</span>
            <span className="text-primary">
              8.4 / <span className="opacity-60">12.0 mm/s</span>
            </span>
          </div>
          <input
            className="w-full h-1 bg-surface-container-highest appearance-none cursor-pointer accent-primary-container"
            max="20"
            min="0"
            type="range"
            value="8"
            readOnly
          />
        </div>
        <div className="space-y-2">
          <div className="flex justify-between font-label-caps text-[10px]">
            <span className="text-on-surface">BEARING TEMPERATURE</span>
            <span className="text-primary">
              68.2 / <span className="opacity-60">95.0 °C</span>
            </span>
          </div>
          <input
            className="w-full h-1 bg-surface-container-highest appearance-none cursor-pointer accent-primary-container"
            max="150"
            min="0"
            type="range"
            value="68"
            readOnly
          />
        </div>
        <div className="space-y-2">
          <div className="flex justify-between font-label-caps text-[10px]">
            <span className="text-on-surface">INLET PRESSURE</span>
            <span className="text-primary">
              14.2 / <span className="opacity-60">18.0 BAR</span>
            </span>
          </div>
          <input
            className="w-full h-1 bg-surface-container-highest appearance-none cursor-pointer accent-primary-container"
            max="30"
            min="0"
            type="range"
            value="14"
            readOnly
          />
        </div>
        <div className="space-y-2">
          <div className="flex justify-between font-label-caps text-[10px]">
            <span className="text-on-surface">FLOW RATE</span>
            <span className="text-primary">
              850.0 / <span className="opacity-60">1200.0 L/M</span>
            </span>
          </div>
          <input
            className="w-full h-1 bg-surface-container-highest appearance-none cursor-pointer accent-primary-container"
            max="2000"
            min="0"
            type="range"
            value="850"
            readOnly
          />
        </div>
      </div>
      <button className="w-full bg-primary-container text-on-primary py-4 font-label-caps text-label-caps tracking-[0.2em] shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:brightness-110 active:scale-[0.98] transition-all cyan-inner-glow relative overflow-hidden group">
        RUN SIMULATION
        <span className="absolute inset-0 bg-white/20 animate-pulse opacity-0 group-hover:opacity-100"></span>
      </button>
    </section>
  );
}
