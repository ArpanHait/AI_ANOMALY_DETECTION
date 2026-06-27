import React from "react";

export default function ParameterConfiguration() {
  return (
    <section
      className="col-span-12 lg:col-span-4 glass-panel p-6 flex flex-col space-y-6 rounded-xl"
      style={{
        background: "rgba(255, 255, 255, 0.03)",
        backdropFilter: "blur(12px)",
        border: "1px solid rgba(255, 255, 255, 0.08)",
      }}
    >
      <div>
        <h2 className="font-mono text-[11px] font-bold text-[#64ffda] drop-shadow-[0_0_4px_rgba(100,255,218,0.4)] border-l-2 border-[#64ffda] pl-3 mb-2 uppercase tracking-widest">
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
          <button className="bg-[#64ffda]/20 text-[#64ffda] drop-shadow-[0_0_4px_rgba(100,255,218,0.4)] border border-[#64ffda]/40 px-3 py-1.5 rounded font-mono text-[11px] hover:bg-[#64ffda]/30 transition-all font-bold">
            MAX STRESS TEST
          </button>
          <button className="bg-white/5 text-on-surface-variant border border-white/10 px-3 py-1.5 rounded font-mono text-[11px] hover:bg-white/10 font-bold">
            GRADUAL WEAR
          </button>
          <button className="bg-white/5 text-on-surface-variant border border-white/10 px-3 py-1.5 rounded font-mono text-[11px] hover:bg-white/10 font-bold">
            OPTIMAL EFFICIENCY
          </button>
        </div>
      </div>

      {/* What-If Sliders */}
      <div className="space-y-5 flex-1">
        <div className="space-y-2">
          <div className="flex justify-between font-mono text-[10px] font-bold uppercase tracking-widest">
            <span className="text-on-surface">Vibration RMS</span>
            <span className="text-[#64ffda] drop-shadow-[0_0_4px_rgba(100,255,218,0.4)]">
              8.4 /{" "}
              <span className="opacity-60 text-on-surface-variant">
                12.0 mm/s
              </span>
            </span>
          </div>
          <input
            className="w-full h-1 bg-surface-container-highest appearance-none cursor-pointer accent-[#64ffda] rounded"
            max="20"
            min="0"
            type="range"
            defaultValue="8"
          />
        </div>
        <div className="space-y-2">
          <div className="flex justify-between font-mono text-[10px] font-bold uppercase tracking-widest">
            <span className="text-on-surface">Bearing Temperature</span>
            <span className="text-[#64ffda] drop-shadow-[0_0_4px_rgba(100,255,218,0.4)]">
              68.2 /{" "}
              <span className="opacity-60 text-on-surface-variant">95.0 °C</span>
            </span>
          </div>
          <input
            className="w-full h-1 bg-surface-container-highest appearance-none cursor-pointer accent-[#64ffda] rounded"
            max="150"
            min="0"
            type="range"
            defaultValue="68"
          />
        </div>
        <div className="space-y-2">
          <div className="flex justify-between font-mono text-[10px] font-bold uppercase tracking-widest">
            <span className="text-on-surface">Inlet Pressure</span>
            <span className="text-[#64ffda] drop-shadow-[0_0_4px_rgba(100,255,218,0.4)]">
              14.2 /{" "}
              <span className="opacity-60 text-on-surface-variant">18.0 BAR</span>
            </span>
          </div>
          <input
            className="w-full h-1 bg-surface-container-highest appearance-none cursor-pointer accent-[#64ffda] rounded"
            max="30"
            min="0"
            type="range"
            defaultValue="14"
          />
        </div>
        <div className="space-y-2">
          <div className="flex justify-between font-mono text-[10px] font-bold uppercase tracking-widest">
            <span className="text-on-surface">Flow Rate</span>
            <span className="text-[#64ffda] drop-shadow-[0_0_4px_rgba(100,255,218,0.4)]">
              850.0 /{" "}
              <span className="opacity-60 text-on-surface-variant">
                1200.0 L/M
              </span>
            </span>
          </div>
          <input
            className="w-full h-1 bg-surface-container-highest appearance-none cursor-pointer accent-[#64ffda] rounded"
            max="2000"
            min="0"
            type="range"
            defaultValue="850"
          />
        </div>
      </div>

      <button className="w-full bg-[#64ffda] text-[#002022] py-4 font-mono text-[11px] font-bold tracking-[0.2em] shadow-[0_0_20px_rgba(0,240,255,0.3)] shadow-[inset_0_0_10px_rgba(0,240,255,0.4)] hover:brightness-110 active:scale-[0.98] transition-all relative overflow-hidden group rounded">
        RUN SIMULATION
        <span className="absolute inset-0 bg-white/20 animate-pulse opacity-0 group-hover:opacity-100"></span>
      </button>
    </section>
  );
}
