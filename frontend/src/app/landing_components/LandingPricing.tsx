import React from "react";
import Link from "next/link";

export default function LandingPricing() {
  return (
    <>
      {/* Pricing Section */}
      <section
        id="pricing"
        className="py-24 border-t border-outline-variant/30 max-w-7xl mx-auto px-6"
      >
        <div className="mb-16 text-center">
          <span className="text-primary font-mono text-xs tracking-wider uppercase mb-3 block">
            Deployment Options
          </span>
          <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4 text-on-surface">
            Simple, Transparent Pricing Plans.
          </h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto font-body">
            Deploy ARES-1 on-premise or in the cloud. Select a plan to scale uptime
            across your operations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {/* Plan 1 */}
          <div className="bento-card p-8 flex flex-col justify-between border border-outline-variant rounded-xl bg-surface-container/10">
            <div>
              <h3 className="font-headline text-lg font-bold text-on-surface mb-2">
                Pilot
              </h3>
              <p className="text-xs text-on-surface-variant mb-6">
                Perfect for testing with live sensor simulators.
              </p>
              <div className="text-4xl font-headline font-bold text-on-surface mb-6">
                $0{" "}
                <span className="text-xs font-mono text-on-surface-variant">
                  / 30 DAYS
                </span>
              </div>
              <ul className="space-y-3 text-sm text-on-surface-variant mb-8">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm text-primary">
                    check
                  </span>
                  1 active asset simulation
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm text-primary">
                    check
                  </span>
                  Baseline LSTM predictions
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm text-primary">
                    check
                  </span>
                  64-step rolling window size
                </li>
              </ul>
            </div>
            <Link
              href="/dashboard"
              className="outline-button w-full text-center py-3 rounded-lg text-sm font-bold block"
            >
              Start Pilot
            </Link>
          </div>

          {/* Plan 2 */}
          <div className="bento-card p-8 flex flex-col justify-between border border-primary/50 rounded-xl bg-surface-container/20 relative shadow-lg shadow-primary/5">
            <div className="absolute -top-3 right-6 bg-primary text-on-primary font-mono text-[9px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Most Popular
            </div>
            <div>
              <h3 className="font-headline text-lg font-bold text-on-surface mb-2">
                Scale
              </h3>
              <p className="text-xs text-on-surface-variant mb-6">
                Designed for mid-sized factory floor assets.
              </p>
              <div className="text-4xl font-headline font-bold text-on-surface mb-6">
                $1,499{" "}
                <span className="text-xs font-mono text-on-surface-variant">
                  / MONTH
                </span>
              </div>
              <ul className="space-y-3 text-sm text-on-surface-variant mb-8">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm text-primary">
                    check
                  </span>
                  Up to 15 active telemetry assets
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm text-primary">
                    check
                  </span>
                  SHAP Root Cause diagnostics
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm text-primary">
                    check
                  </span>
                  API & Webhook notification integrations
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm text-primary">
                    check
                  </span>
                  24/7 technical chat support
                </li>
              </ul>
            </div>
            <Link
              href="/dashboard"
              className="primary-button w-full text-center py-3 rounded-lg text-sm font-bold block shadow-lg shadow-primary/10"
            >
              Deploy Scale
            </Link>
          </div>

          {/* Plan 3 */}
          <div className="bento-card p-8 flex flex-col justify-between border border-outline-variant rounded-xl bg-surface-container/10">
            <div>
              <h3 className="font-headline text-lg font-bold text-on-surface mb-2">
                Enterprise
              </h3>
              <p className="text-xs text-on-surface-variant mb-6">
                Full digital twin lab and customization.
              </p>
              <div className="text-4xl font-headline font-bold text-on-surface mb-6">
                Custom{" "}
                <span className="text-xs font-mono text-on-surface-variant">
                  QUOTE
                </span>
              </div>
              <ul className="space-y-3 text-sm text-on-surface-variant mb-8">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm text-primary">
                    check
                  </span>
                  Unlimited active assets & digital twins
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm text-primary">
                    check
                  </span>
                  Custom neural network fine-tuning
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm text-primary">
                    check
                  </span>
                  Dedicated FastAPI server cluster
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm text-primary">
                    check
                  </span>
                  On-premise deployment assistance
                </li>
              </ul>
            </div>
            <button className="outline-button w-full text-center py-3 rounded-lg text-sm font-bold block">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 border-t border-outline-variant/30">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-headline text-4xl md:text-5xl font-bold mb-6 text-on-surface tracking-tight">
            Ready to eliminate unplanned downtime?
          </h2>
          <p className="text-lg text-on-surface-variant mb-10 font-body">
            Join the industry leaders trusting ARES-1 to secure their operational
            continuity.
          </p>
          <button className="primary-button px-10 py-5 rounded-lg font-bold text-lg inline-flex items-center justify-center gap-3 shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform">
            Start Your Free Pilot
            <span className="material-symbols-outlined">rocket_launch</span>
          </button>
        </div>
      </section>
    </>
  );
}
