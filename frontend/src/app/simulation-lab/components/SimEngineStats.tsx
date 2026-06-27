import React from "react";

export default function SimEngineStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div
        className="glass-panel p-4 flex items-center gap-4 rounded-xl"
        style={{
          background: "rgba(255, 255, 255, 0.03)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255, 255, 255, 0.08)",
        }}
      >
        <div className="h-10 w-10 bg-[#00f0ff]/10 rounded flex items-center justify-center">
          <span className="material-symbols-outlined text-[#64ffda] drop-shadow-[0_0_4px_rgba(100,255,218,0.4)]">
            memory
          </span>
        </div>
        <div>
          <p className="font-mono text-[10px] text-on-surface-variant font-bold uppercase tracking-widest">
            Sim Engine Load
          </p>
          <p className="font-mono text-[12px] text-on-surface font-bold">
            CORE-7: 42%
          </p>
        </div>
      </div>
      <div
        className="glass-panel p-4 flex items-center gap-4 rounded-xl"
        style={{
          background: "rgba(255, 255, 255, 0.03)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255, 255, 255, 0.08)",
        }}
      >
        <div className="h-10 w-10 bg-[#00f0ff]/10 rounded flex items-center justify-center">
          <span className="material-symbols-outlined text-[#64ffda] drop-shadow-[0_0_4px_rgba(100,255,218,0.4)]">
            cloud_done
          </span>
        </div>
        <div>
          <p className="font-mono text-[10px] text-on-surface-variant font-bold uppercase tracking-widest">
            Cloud Sync
          </p>
          <p className="font-mono text-[12px] text-on-surface font-bold">
            LAST: 2M AGO
          </p>
        </div>
      </div>
      <div
        className="glass-panel p-4 flex items-center gap-4 rounded-xl"
        style={{
          background: "rgba(255, 255, 255, 0.03)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255, 255, 255, 0.08)",
        }}
      >
        <div className="h-10 w-10 bg-[#00f0ff]/10 rounded flex items-center justify-center">
          <span className="material-symbols-outlined text-[#64ffda] drop-shadow-[0_0_4px_rgba(100,255,218,0.4)]">
            history
          </span>
        </div>
        <div>
          <p className="font-mono text-[10px] text-on-surface-variant font-bold uppercase tracking-widest">
            Previous Iteration
          </p>
          <p className="font-mono text-[12px] text-on-surface font-bold">
            V.4.2.1-STABLE
          </p>
        </div>
      </div>
    </div>
  );
}
