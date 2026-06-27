import React from "react";

export default function LandingCaseStudies() {
  return (
    <section
      id="case-studies"
      className="py-24 border-t border-outline-variant/30 bg-surface-container-low/50"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <span className="text-primary font-mono text-xs tracking-wider uppercase mb-3 block">
            Operational Proof
          </span>
          <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4 text-on-surface">
            Success Stories in Failure Prevention.
          </h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto font-body">
            See how ARES-1 prevented catastrophic breakdowns and optimized uptime
            across heavy industrial deployments.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Case 1 */}
          <div className="bento-card p-8 flex flex-col justify-between h-full relative overflow-hidden group">
            <div className="mb-8">
              <div className="flex justify-between items-center mb-6">
                <span className="font-mono text-xs text-primary font-bold">
                  NEXUS CORP
                </span>
                <span className="material-symbols-outlined text-primary text-xl">
                  token
                </span>
              </div>
              <h3 className="font-headline text-xl font-bold text-on-surface mb-3">
                Turbine Cavitation Early Warning
              </h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Autoencoders detected low-amplitude high-frequency vibration spikes on
                turbine bearings 14 hours before standard alerts, avoiding $1.2M in
                turbine housing rebuilds.
              </p>
            </div>
            <div className="border-t border-outline-variant/30 pt-4 mt-auto">
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-on-surface-variant">LEAD TIME</span>
                <span className="text-secondary font-bold">14 HOURS</span>
              </div>
            </div>
          </div>

          {/* Case 2 */}
          <div className="bento-card p-8 flex flex-col justify-between h-full relative overflow-hidden group">
            <div className="mb-8">
              <div className="flex justify-between items-center mb-6">
                <span className="font-mono text-xs text-primary font-bold">
                  TRI-STATE
                </span>
                <span className="material-symbols-outlined text-primary text-xl">
                  change_history
                </span>
              </div>
              <h3 className="font-headline text-xl font-bold text-on-surface mb-3">
                Valve Position Slip Prevention
              </h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Identified micro-anomalies on fluid valves due to slow torque
                degradation, allowing maintenance during scheduled breaks rather
                than triggering an emergency cutoff.
              </p>
            </div>
            <div className="border-t border-outline-variant/30 pt-4 mt-auto">
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-on-surface-variant">MAINTENANCE COST</span>
                <span className="text-secondary font-bold">92% SAVED</span>
              </div>
            </div>
          </div>

          {/* Case 3 */}
          <div className="bento-card p-8 flex flex-col justify-between h-full relative overflow-hidden group">
            <div className="mb-8">
              <div className="flex justify-between items-center mb-6">
                <span className="font-mono text-xs text-primary font-bold">
                  AETHER HEAVY
                </span>
                <span className="material-symbols-outlined text-primary text-xl">
                  all_inclusive
                </span>
              </div>
              <h3 className="font-headline text-xl font-bold text-on-surface mb-3">
                High-Temp Fluid Pump Isolation
              </h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                SHAP attribution model identified inlet pressure flow rate
                anomalies as the source of a thermal overload warning, completing
                remote isolation in under 2 minutes.
              </p>
            </div>
            <div className="border-t border-outline-variant/30 pt-4 mt-auto">
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-on-surface-variant">RESPONSE TIME</span>
                <span className="text-secondary font-bold">2 MINUTES</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
