import React from "react";
import Link from "next/link";

export default function LandingHero() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        {/* Background Grid */}
        <div
          className="absolute inset-0 pointer-events-none opacity-20 hidden"
          style={{
            backgroundImage:
              "radial-gradient(var(--color-outline-variant) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        ></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-mono mb-8">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              SYSTEM V4.2 LIVE
            </div>
            <h1 className="font-headline text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tighter mb-6 text-on-surface">
              Predict Failures Before They <span className="text-secondary">Happen.</span>
            </h1>
            <p className="text-lg md:text-xl text-on-surface-variant mb-10 max-w-xl font-body">
              ARES-1 leverages deep neural networks to process industrial telemetry
              in real-time, detecting micro-anomalies and preventing unplanned
              downtime before it impacts your bottom line.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/dashboard"
                className="primary-button px-8 py-4 rounded-lg font-bold text-base flex items-center justify-center gap-2"
              >
                Deploy ARES-1
                <span className="material-symbols-outlined text-sm">
                  arrow_forward
                </span>
              </Link>
              <button className="outline-button px-8 py-4 rounded-lg font-medium text-base flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-sm">
                  play_circle
                </span>
                View Interactive Demo
              </button>
            </div>
          </div>

          {/* 3D Mockup Container */}
          <div className="relative perspective-1000 lg:h-[600px] flex items-center justify-center">
            <div
              className="relative w-full max-w-lg aspect-[4/3] rounded-xl border border-outline-variant bg-surface-container overflow-hidden shadow-2xl shadow-primary/10"
              style={{
                transform: "rotateY(-15deg) rotateX(10deg)",
                transformStyle: "preserve-3d",
              }}
            >
              {/* Mockup Header */}
              <div className="h-10 bg-surface-container-highest border-b border-outline-variant flex items-center px-4 gap-2">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-outline"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-outline"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-outline"></div>
                </div>
                <span className="text-xs font-mono text-on-surface-variant ml-2">
                  ares_mission_control.exe
                </span>
              </div>

              {/* Mockup Body */}
              <div className="p-6 grid grid-cols-2 gap-4 h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGRlZnM+PHBhdHRlcm4gaWQ9ImEiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik00MCAwaC0xdjQwTTAgNDBWMzloNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzI3MjcyYSIgc3Ryb2tlLXdpZHRoPSIwLjUiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjYSkiLz48L3N2Zz4=')] bg-surface">
                <div className="col-span-2 bg-surface-container-lowest border border-outline-variant rounded p-4 flex flex-col justify-between">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xs font-mono text-on-surface-variant uppercase">
                      Global Telemetry Flow
                    </span>
                    <span className="text-xs font-mono text-secondary">
                      99.98% UPTIME
                    </span>
                  </div>
                  <div className="h-16 w-full flex items-end gap-1">
                    <div className="w-full bg-primary/20 h-[30%] rounded-t-sm border-t border-primary relative">
                      <div className="absolute -top-1 right-0 w-2 h-2 bg-primary rounded-full"></div>
                    </div>
                    <div className="w-full bg-primary/20 h-[45%] rounded-t-sm border-t border-primary relative">
                      <div className="absolute -top-1 right-0 w-2 h-2 bg-primary rounded-full"></div>
                    </div>
                    <div className="w-full bg-primary/20 h-[60%] rounded-t-sm border-t border-primary relative">
                      <div className="absolute -top-1 right-0 w-2 h-2 bg-primary rounded-full"></div>
                    </div>
                    <div className="w-full bg-primary/20 h-[50%] rounded-t-sm border-t border-primary relative">
                      <div className="absolute -top-1 right-0 w-2 h-2 bg-primary rounded-full"></div>
                    </div>
                    <div className="w-full bg-error/20 h-[85%] rounded-t-sm border-t border-error relative">
                      <div className="absolute -top-1 right-0 w-2 h-2 bg-error rounded-full animate-ping"></div>
                    </div>
                    <div className="w-full bg-primary/20 h-[40%] rounded-t-sm border-t border-primary relative">
                      <div className="absolute -top-1 right-0 w-2 h-2 bg-primary rounded-full"></div>
                    </div>
                  </div>
                </div>
                <div className="bg-surface-container-lowest border border-outline-variant rounded p-4">
                  <span className="text-[10px] font-mono text-on-surface-variant block mb-2">
                    THERMAL LOAD
                  </span>
                  <div className="text-2xl font-mono text-on-surface">
                    428.5<span className="text-sm text-on-surface-variant">K</span>
                  </div>
                </div>
                <div className="bg-surface-container-lowest border border-outline-variant rounded p-4">
                  <span className="text-[10px] font-mono text-on-surface-variant block mb-2">
                    PREDICTED FAILURE
                  </span>
                  <div className="text-sm font-mono text-error">
                    TURBINE B - 14H 22M
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="border-y border-outline-variant/30 bg-surface-container-low py-10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm font-mono text-on-surface-variant mb-6 uppercase tracking-wider">
            Securing assets for industry leaders
          </p>
          <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-60 grayscale">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-3xl text-on-surface">
                token
              </span>
              <span className="font-headline font-bold text-xl text-on-surface">
                Nexus Corp
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-3xl text-on-surface">
                all_inclusive
              </span>
              <span className="font-headline font-bold text-xl text-on-surface">
                Aether Heavy
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-3xl text-on-surface">
                change_history
              </span>
              <span className="font-headline font-bold text-xl text-on-surface">
                Tri-State
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-3xl text-on-surface">
                blur_on
              </span>
              <span className="font-headline font-bold text-xl text-on-surface">
                Omni
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
