import React from "react";

export default function SimResultsPanel() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
      <div className="glass-panel p-6">
        <h3 className="font-label-caps text-label-caps text-on-surface mb-4">
          RISK MATRIX: STABILITY HEATMAP
        </h3>
        <div className="grid grid-cols-5 gap-1">
          <div className="risk-tile bg-surface-container-highest/40 border border-white/5"></div>
          <div className="risk-tile bg-surface-container-highest/40 border border-white/5"></div>
          <div className="risk-tile bg-primary/20 border border-primary/30"></div>
          <div className="risk-tile bg-primary/40 border border-primary/50"></div>
          <div className="risk-tile bg-primary/60 border border-primary/70"></div>
          <div className="risk-tile bg-surface-container-highest/40 border border-white/5"></div>
          <div className="risk-tile bg-primary/20 border border-primary/30"></div>
          <div className="risk-tile bg-primary/40 border border-primary/50"></div>
          <div className="risk-tile bg-primary/60 border border-primary/70"></div>
          <div className="risk-tile bg-secondary-container/40 border border-secondary/50"></div>
          <div className="risk-tile bg-primary/20 border border-primary/30"></div>
          <div className="risk-tile bg-primary/40 border border-primary/50"></div>
          <div className="risk-tile bg-primary/60 border border-primary/70"></div>
          <div className="risk-tile bg-secondary-container/60 border border-secondary/70"></div>
          <div className="risk-tile bg-error/40 border border-error/50"></div>
          <div className="risk-tile bg-primary/40 border border-primary/50"></div>
          <div className="risk-tile bg-primary/60 border border-primary/70"></div>
          <div className="risk-tile bg-secondary-container/60 border border-secondary/70"></div>
          <div className="risk-tile bg-error/60 border border-error/70 animate-pulse"></div>
          <div className="risk-tile bg-error border border-white/20 animate-pulse"></div>
        </div>
        <div className="mt-4 flex justify-between font-label-caps text-[9px] text-on-surface-variant">
          <span className="">MIN STRESS</span>
          <span className="">CRITICAL THRESHOLD</span>
        </div>
      </div>
      <div className="glass-panel p-6 flex flex-col justify-center text-center space-y-4">
        <div className="inline-flex mx-auto p-4 rounded-full bg-error/10 border border-error/20">
          <span className="material-symbols-outlined text-error text-[32px]">
            warning
          </span>
        </div>
        <div>
          <p className="font-label-caps text-label-caps text-error">
            ANOMALY DETECTED IN SIMULATION
          </p>
          <p className="text-on-surface-variant font-body-sm mt-1 px-4">
            Configuration 4-C leads to resonant oscillation in bearing housing.
            Failure likely within 48 hours of deployment.
          </p>
        </div>
        <button className="text-primary font-label-caps text-[11px] hover:underline">
          VIEW FAILURE REPORT
        </button>
      </div>
    </div>
  );
}
