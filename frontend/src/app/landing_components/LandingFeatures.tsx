import React from "react";

export default function LandingFeatures() {
  return (
    <section id="features" className="py-24 max-w-7xl mx-auto px-6">
      <div className="mb-16">
        <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4 text-on-surface">
          Industrial Intelligence. <br />
          <span className="text-secondary">Without the noise.</span>
        </h2>
        <p className="text-on-surface-variant max-w-2xl font-body">
          Our architecture is designed for precision. No bloated dashboards—just
          actionable telemetry and predictive insights.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px]">
        {/* Feature 1: Real-Time Telemetry (Wide) */}
        <div className="bento-card col-span-1 md:col-span-2 p-8 flex flex-col justify-between relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="relative z-10 w-full">
            <div className="flex justify-between items-start mb-4">
              <span className="material-symbols-outlined text-secondary text-3xl">
                monitor_heart
              </span>
              <div className="flex gap-1">
                <div className="w-1 h-4 bg-primary rounded-full animate-pulse"></div>
                <div
                  className="w-1 h-6 bg-primary rounded-full animate-pulse"
                  style={{ animationDelay: "150ms" }}
                ></div>
                <div
                  className="w-1 h-3 bg-primary rounded-full animate-pulse"
                  style={{ animationDelay: "300ms" }}
                ></div>
              </div>
            </div>
            <h3 className="font-headline text-xl font-bold text-on-surface mb-2">
              Real-Time Telemetry Processing
            </h3>
            <p className="text-sm text-on-surface-variant">
              Ingest millions of data points per second with zero latency. Monitor
              thermal, kinetic, and fluid dynamics instantly.
            </p>
          </div>
        </div>

        {/* Feature 2: Predictive Maintenance */}
        <div className="bento-card col-span-1 p-8 flex flex-col justify-between relative overflow-hidden group">
          <div className="relative z-10 h-full flex flex-col">
            <span className="material-symbols-outlined text-secondary text-3xl mb-4">
              build_circle
            </span>
            <h3 className="font-headline text-xl font-bold text-on-surface mb-2 mt-auto">
              Predictive Maintenance
            </h3>
            <p className="text-sm text-on-surface-variant">
              Schedule repairs exactly when needed, maximizing component lifespan.
            </p>
          </div>
        </div>

        {/* Feature 3: AI Root Cause Analysis */}
        <div className="bento-card col-span-1 p-8 flex flex-col justify-between relative overflow-hidden group">
          <div className="relative z-10 h-full flex flex-col">
            <span className="material-symbols-outlined text-secondary text-3xl mb-4">
              psychology
            </span>
            <div className="bg-surface-container-lowest border border-outline-variant p-3 rounded text-xs font-mono text-on-surface-variant mb-4 flex-grow">
              <span className="text-secondary">&gt;</span> analyzing_vector_data...
              <br />
              <span className="text-primary">[SUCCESS]</span> anomaly_isolated
              <br />
              <span className="text-on-surface font-semibold">Source: Valve X-99</span>
            </div>
            <h3 className="font-headline text-xl font-bold text-on-surface mb-2">
              AI Root Cause Analysis
            </h3>
          </div>
        </div>

        {/* Feature 4: What-If Simulation Engine (Wide) */}
        <div className="bento-card col-span-1 md:col-span-2 p-8 flex flex-col md:flex-row gap-8 items-center relative overflow-hidden group">
          <div className="flex-1 relative z-10">
            <span className="material-symbols-outlined text-secondary text-3xl mb-4">
              science
            </span>
            <h3 className="font-headline text-xl font-bold text-on-surface mb-2">
              What-If Simulation Engine
            </h3>
            <p className="text-sm text-on-surface-variant">
              Test operating parameters in a digital twin environment before
              applying them to physical hardware.
            </p>
          </div>
          <div className="flex-1 w-full bg-surface-container-lowest border border-outline-variant p-4 rounded-lg flex flex-col gap-4">
            <div>
              <div className="flex justify-between text-xs font-mono text-on-surface-variant mb-1">
                <span className="">PRESSURE</span>
                <span className="">85%</span>
              </div>
              <div className="w-full bg-surface h-2 rounded-full overflow-hidden border border-outline-variant/50">
                <div className="bg-primary w-[85%] h-full"></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-xs font-mono text-on-surface-variant mb-1">
                <span className="">TEMP_DELTA</span>
                <span className="">42%</span>
              </div>
              <div className="w-full bg-surface h-2 rounded-full overflow-hidden border border-outline-variant/50">
                <div className="bg-primary w-[42%] h-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
