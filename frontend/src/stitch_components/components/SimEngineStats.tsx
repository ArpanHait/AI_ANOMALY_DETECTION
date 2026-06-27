import React from "react";

export default function SimEngineStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
      <div className="glass-panel p-4 flex items-center gap-4">
        <div className="h-10 w-10 bg-primary/10 rounded flex items-center justify-center">
          <span className="material-symbols-outlined text-primary">memory</span>
        </div>
        <div>
          <p className="font-label-caps text-[10px] text-on-surface-variant">
            SIM ENGINE LOAD
          </p>
          <p className="font-data-sm text-on-surface">CORE-7: 42%</p>
        </div>
      </div>
      <div className="glass-panel p-4 flex items-center gap-4">
        <div className="h-10 w-10 bg-primary/10 rounded flex items-center justify-center">
          <span className="material-symbols-outlined text-primary">cloud_done</span>
        </div>
        <div>
          <p className="font-label-caps text-[10px] text-on-surface-variant">
            CLOUD SYNC
          </p>
          <p className="font-data-sm text-on-surface">LAST: 2M AGO</p>
        </div>
      </div>
      <div className="glass-panel p-4 flex items-center gap-4">
        <div className="h-10 w-10 bg-primary/10 rounded flex items-center justify-center">
          <span className="material-symbols-outlined text-primary">history</span>
        </div>
        <div>
          <p className="font-label-caps text-[10px] text-on-surface-variant">
            PREVIOUS ITERATION
          </p>
          <p className="font-data-sm text-on-surface">V.4.2.1-STABLE</p>
        </div>
      </div>
    </div>
  );
}
