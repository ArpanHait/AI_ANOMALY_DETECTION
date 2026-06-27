import React from "react";

export default function SimEngineStatsLight() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="bg-[#ffffff] p-4 flex items-center gap-4 rounded-xl border border-outline-variant/50 shadow-sm">
        <div className="h-10 w-10 bg-primary/10 rounded flex items-center justify-center">
          <span className="material-symbols-outlined text-primary">memory</span>
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
      <div className="bg-[#ffffff] p-4 flex items-center gap-4 rounded-xl border border-outline-variant/50 shadow-sm">
        <div className="h-10 w-10 bg-primary/10 rounded flex items-center justify-center">
          <span className="material-symbols-outlined text-primary">
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
      <div className="bg-[#ffffff] p-4 flex items-center gap-4 rounded-xl border border-outline-variant/50 shadow-sm">
        <div className="h-10 w-10 bg-primary/10 rounded flex items-center justify-center">
          <span className="material-symbols-outlined text-primary">history</span>
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
