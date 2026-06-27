import React from "react";

export default function ParameterConfigurationLight() {
  return (
    <section className="col-span-12 lg:col-span-4 bg-[#ffffff] p-6 flex flex-col space-y-6 rounded-xl border border-outline-variant/50 shadow-sm">
      <div>
        <h2 className="font-mono text-[11px] font-bold text-primary border-l-2 border-primary pl-3 mb-2 uppercase tracking-widest">
          Parameter Configuration
        </h2>
        <p className="text-on-surface-variant font-body text-[14px]">
          Adjust system inputs to simulate hardware response profiles.
        </p>
      </div>

      {/* Scenarios */}
      <div className="space-y-3">
        <label className="font-mono text-[10px] text-on-surface-variant uppercase tracking-widest font-bold">
          Scenario Presets
        </label>
        <div className="flex flex-wrap gap-2">
          <button className="bg-primary/10 text-primary border border-primary/40 px-3 py-1.5 rounded font-mono text-[11px] hover:bg-primary/20 transition-all font-bold">
            MAX STRESS TEST
          </button>
          <button className="bg-surface-container text-on-surface-variant border border-outline-variant px-3 py-1.5 rounded font-mono text-[11px] hover:bg-surface-variant font-bold">
            GRADUAL WEAR
          </button>
          <button className="bg-surface-container text-on-surface-variant border border-outline-variant px-3 py-1.5 rounded font-mono text-[11px] hover:bg-surface-variant font-bold">
            OPTIMAL EFFICIENCY
          </button>
        </div>
      </div>

      {/* What-If Sliders */}
      <div className="space-y-5 flex-1">
        <div className="space-y-2">
          <div className="flex justify-between font-mono text-[10px] font-bold uppercase tracking-widest">
            <span className="text-on-surface">Vibration RMS</span>
            <span className="text-primary">
              8.4 /{" "}
              <span className="opacity-60 text-on-surface-variant">
                12.0 mm/s
              </span>
            </span>
          </div>
          <input
            className="w-full h-1 bg-surface-container-highest appearance-none cursor-pointer accent-primary rounded"
            max="20"
            min="0"
            type="range"
            defaultValue="8"
          />
        </div>
        <div className="space-y-2">
          <div className="flex justify-between font-mono text-[10px] font-bold uppercase tracking-widest">
            <span className="text-on-surface">Bearing Temperature</span>
            <span className="text-primary">
              68.2 /{" "}
              <span className="opacity-60 text-on-surface-variant">95.0 °C</span>
            </span>
          </div>
          <input
            className="w-full h-1 bg-surface-container-highest appearance-none cursor-pointer accent-primary rounded"
            max="150"
            min="0"
            type="range"
            defaultValue="68"
          />
        </div>
        <div className="space-y-2">
          <div className="flex justify-between font-mono text-[10px] font-bold uppercase tracking-widest">
            <span className="text-on-surface">Inlet Pressure</span>
            <span className="text-primary">
              14.2 /{" "}
              <span className="opacity-60 text-on-surface-variant">18.0 BAR</span>
            </span>
          </div>
          <input
            className="w-full h-1 bg-surface-container-highest appearance-none cursor-pointer accent-primary rounded"
            max="30"
            min="0"
            type="range"
            defaultValue="14"
          />
        </div>
        <div className="space-y-2">
          <div className="flex justify-between font-mono text-[10px] font-bold uppercase tracking-widest">
            <span className="text-on-surface">Flow Rate</span>
            <span className="text-primary">
              850.0 /{" "}
              <span className="opacity-60 text-on-surface-variant">
                1200.0 L/M
              </span>
            </span>
          </div>
          <input
            className="w-full h-1 bg-surface-container-highest appearance-none cursor-pointer accent-primary rounded"
            max="2000"
            min="0"
            type="range"
            defaultValue="850"
          />
        </div>
      </div>

      <button className="w-full bg-primary text-on-primary py-4 font-mono text-[11px] font-bold tracking-[0.2em] shadow-md hover:brightness-110 active:scale-[0.98] transition-all relative overflow-hidden group rounded">
        RUN SIMULATION
        <span className="absolute inset-0 bg-white/20 animate-pulse opacity-0 group-hover:opacity-100"></span>
      </button>
    </section>
  );
}
