import React from "react";

export default function SimResultsPanelLight() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="bg-[#ffffff] p-6 rounded-xl border border-outline-variant/50 shadow-sm">
        <h3 className="font-mono text-[11px] font-bold text-on-surface mb-4 uppercase tracking-widest">
          Risk Matrix: Stability Heatmap
        </h3>
        <div className="grid grid-cols-5 gap-1">
          <div className="aspect-square bg-surface-container border border-outline-variant/30"></div>
          <div className="aspect-square bg-surface-container border border-outline-variant/30"></div>
          <div className="aspect-square bg-primary/20 border border-primary/30"></div>
          <div className="aspect-square bg-primary/40 border border-primary/50"></div>
          <div className="aspect-square bg-primary/60 border border-primary/70"></div>

          <div className="aspect-square bg-surface-container border border-outline-variant/30"></div>
          <div className="aspect-square bg-primary/20 border border-primary/30"></div>
          <div className="aspect-square bg-primary/40 border border-primary/50"></div>
          <div className="aspect-square bg-primary/60 border border-primary/70"></div>
          <div className="aspect-square bg-secondary/40 border border-secondary/50"></div>

          <div className="aspect-square bg-primary/20 border border-primary/30"></div>
          <div className="aspect-square bg-primary/40 border border-primary/50"></div>
          <div className="aspect-square bg-primary/60 border border-primary/70"></div>
          <div className="aspect-square bg-secondary/60 border border-secondary/70"></div>
          <div className="aspect-square bg-error/40 border border-error/50"></div>

          <div className="aspect-square bg-primary/40 border border-primary/50"></div>
          <div className="aspect-square bg-primary/60 border border-primary/70"></div>
          <div className="aspect-square bg-secondary/60 border border-secondary/70"></div>
          <div className="aspect-square bg-error/60 border border-error/70 animate-pulse"></div>
          <div className="aspect-square bg-error border border-error/50 animate-pulse"></div>
        </div>
        <div className="mt-4 flex justify-between font-mono text-[9px] font-bold text-on-surface-variant uppercase tracking-widest">
          <span>Min Stress</span>
          <span>Critical Threshold</span>
        </div>
      </div>

      <div className="bg-[#ffffff] p-6 flex flex-col justify-center text-center space-y-4 rounded-xl border border-outline-variant/50 shadow-sm">
        <div className="inline-flex mx-auto p-4 rounded-full bg-error/10 border border-error/20">
          <span className="material-symbols-outlined text-error text-[32px]">
            warning
          </span>
        </div>
        <div>
          <p className="font-mono text-[11px] font-bold text-error uppercase tracking-widest">
            Anomaly Detected In Simulation
          </p>
          <p className="text-on-surface-variant font-body text-[14px] mt-1 px-4">
            Configuration 4-C leads to resonant oscillation in bearing housing.
            Failure likely within 48 hours of deployment.
          </p>
        </div>
        <button className="text-primary font-mono text-[11px] font-bold hover:underline tracking-widest uppercase">
          View Failure Report
        </button>
      </div>
    </div>
  );
}
