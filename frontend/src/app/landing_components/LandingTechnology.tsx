import React from "react";

export default function LandingTechnology() {
  return (
    <section
      id="technology"
      className="py-24 border-t border-outline-variant/30 max-w-7xl mx-auto px-6"
    >
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-primary font-mono text-xs tracking-wider uppercase mb-3 block">
            Neural Architecture
          </span>
          <h2 className="font-headline text-3xl md:text-4xl font-bold mb-6 text-on-surface">
            Engineered for High-Stakes Telemetry.
          </h2>
          <p className="text-on-surface-variant mb-6 font-body leading-relaxed">
            ARES-1 processes multivariate time-series data at sub-millisecond
            speeds. Our backend leverages optimized Autoencoders and LSTM neural
            networks that reconstruct normal operations and flag any deviations
            instantly.
          </p>
          <div className="space-y-4">
            <div className="flex gap-4 items-start">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0 border border-primary/20">
                <span className="material-symbols-outlined text-sm">
                  settings_input_antenna
                </span>
              </div>
              <div>
                <h4 className="font-bold text-on-surface text-base">
                  Real-Time WebSocket Ingestion
                </h4>
                <p className="text-sm text-on-surface-variant">
                  Continuous streaming support with zero buffering latency, feeding
                  live sensory telemetry directly into prediction nodes.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0 border border-primary/20">
                <span className="material-symbols-outlined text-sm">
                  network_node
                </span>
              </div>
              <div>
                <h4 className="font-bold text-on-surface text-base">
                  Autoencoder Reconstruction Index
                </h4>
                <p className="text-sm text-on-surface-variant">
                  Instead of simple threshold checks, ARES-1 models system
                  co-movement to isolate the true origin of micro-anomalies.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0 border border-primary/20">
                <span className="material-symbols-outlined text-sm">insights</span>
              </div>
              <div>
                <h4 className="font-bold text-on-surface text-base">
                  SHAP Root Cause Analysis
                </h4>
                <p className="text-sm text-on-surface-variant">
                  Explainable AI breakdowns pointing operators directly to the
                  faulty valve, bearing, or thermal loop.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Architecture Diagram */}
        <div className="relative p-8 bento-card border border-outline-variant rounded-xl bg-surface-container/20 overflow-hidden">
          <div className="absolute inset-0 bg-radial-gradient from-primary/5 to-transparent pointer-events-none"></div>
          <div className="relative z-10 flex flex-col gap-6">
            <div className="flex items-center justify-between border-b border-outline-variant/30 pb-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></span>
                <span className="font-mono text-xs text-on-surface-variant uppercase tracking-wider">
                  ARES-1 Pipeline Status: Warm
                </span>
              </div>
              <span className="font-mono text-[10px] text-primary bg-primary/10 border border-primary/20 px-2 py-0.5 rounded">
                V.4.2 LIVE
              </span>
            </div>

            <div className="flex flex-col gap-4 font-mono text-xs">
              {/* Step 1 */}
              <div className="bg-surface-container-lowest border border-outline-variant rounded p-3 flex justify-between items-center relative overflow-hidden group hover:border-primary/50 transition-colors">
                <div className="flex items-center gap-3">
                  <span className="text-on-surface-variant">01</span>
                  <span className="text-on-surface font-bold">
                    Telemetry Ingestion
                  </span>
                </div>
                <span className="text-[10px] text-secondary">WS://STREAM_IN</span>
              </div>

              {/* Arrow 1 */}
              <div className="h-4 flex justify-center items-center">
                <span className="material-symbols-outlined text-sm text-primary/40">
                  arrow_downward
                </span>
              </div>

              {/* Step 2 */}
              <div className="bg-surface-container-lowest border border-outline-variant rounded p-3 flex justify-between items-center relative overflow-hidden group hover:border-primary/50 transition-colors">
                <div className="flex items-center gap-3">
                  <span className="text-on-surface-variant">02</span>
                  <span className="text-on-surface font-bold">
                    Neural Autoencoder
                  </span>
                </div>
                <span className="text-[10px] text-primary">RECONSTRUCTION</span>
              </div>

              {/* Arrow 2 */}
              <div className="h-4 flex justify-center items-center">
                <span className="material-symbols-outlined text-sm text-primary/40">
                  arrow_downward
                </span>
              </div>

              {/* Step 3 */}
              <div className="bg-surface-container-lowest border border-outline-variant rounded p-3 flex justify-between items-center relative overflow-hidden group hover:border-primary/50 transition-colors">
                <div className="flex items-center gap-3">
                  <span className="text-on-surface-variant">03</span>
                  <span className="text-on-surface font-bold">
                    SHAP Anomaly Contribution
                  </span>
                </div>
                <span className="text-[10px] text-error font-bold">
                  VALVE_X99_OVERLOAD
                </span>
              </div>

              {/* Arrow 3 */}
              <div className="h-4 flex justify-center items-center">
                <span className="material-symbols-outlined text-sm text-primary/40">
                  arrow_downward
                </span>
              </div>

              {/* Step 4 */}
              <div className="bg-surface-container-lowest border border-outline-variant rounded p-3 flex justify-between items-center relative overflow-hidden group hover:border-primary/50 transition-colors">
                <div className="flex items-center gap-3">
                  <span className="text-on-surface-variant">04</span>
                  <span className="text-on-surface font-bold">
                    Actionable Alert Dispatched
                  </span>
                </div>
                <span className="text-[10px] text-secondary">
                  TRIGGERED (14h Lead)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
