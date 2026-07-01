"use client";
import React from "react";
import Link from "next/link";
import { useAppContext } from "@/components/AppContext";
import TelemetryChartsDark from "./components/TelemetryChartsDark";
import TelemetryStatsDark from "./components/TelemetryStatsDark";
import BottomNavbar from "@/components/layout/BottomNavbar";

export default function TelemetryDark() {
  const { theme, setTheme } = useAppContext();

  return (
    <div className="dashboard-dark-theme min-h-screen font-body text-on-surface bg-[#0A0E17] flex flex-col md:flex-row overflow-x-hidden">
      {/* Side Navigation Shell */}
      <aside className="hidden md:flex h-screen w-[15%] fixed left-0 top-0 bg-surface-container-lowest/30 backdrop-blur-xl border-r border-outline-variant/10 flex-col py-6 px-4 z-50">
        <div className="mb-10 mt-4">
          <Link href="/" className="font-headline text-3xl font-bold text-[#64ffda] drop-shadow-[0_0_4px_rgba(100,255,218,0.4)] tracking-tighter block">
            CORE<div>INSIGHT</div>
          </Link>
          <p className="font-mono text-[11px] font-bold text-on-surface-variant mt-1">V.4.0 ONLINE</p>
        </div>
        <nav className="flex-grow space-y-1">
          <Link className="flex items-center px-3 py-3 font-medium text-on-surface-variant hover:bg-surface-variant/20 hover:text-primary transition-all active:scale-95 duration-100 group rounded" href="/dashboard">
            <span className="material-symbols-outlined mr-3 text-[20px]">dashboard</span>
            <span className="font-mono text-[11px] font-bold">Overview</span>
          </Link>
          <Link className="flex items-center px-3 py-3 text-[#64ffda] drop-shadow-[0_0_4px_rgba(100,255,218,0.4)] bg-[#64ffda]/10 border-l-2 border-[#64ffda] font-bold active:scale-95 duration-100 group rounded" href="/telemetry">
            <span className="material-symbols-outlined mr-3 text-[20px]" style={{ fontVariationSettings: '"FILL" 1' }}>analytics</span>
            <span className="font-mono text-[11px] font-bold">Live Telemetry</span>
          </Link>
          <Link className="flex items-center px-3 py-3 font-medium text-on-surface-variant hover:bg-surface-variant/20 hover:text-primary transition-all active:scale-95 duration-100 group rounded" href="/diagnostics">
            <span className="material-symbols-outlined mr-3 text-[20px]">query_stats</span>
            <span className="font-mono text-[11px] font-bold">Diagnostics</span>
          </Link>
          <Link className="flex items-center px-3 py-3 font-medium text-on-surface-variant hover:bg-surface-variant/20 hover:text-primary transition-all active:scale-95 duration-100 group rounded" href="/simulation-lab">
            <span className="material-symbols-outlined mr-3 text-[20px]">science</span>
            <span className="font-mono text-[11px] font-bold">Simulation Lab</span>
          </Link>
          <Link className="flex items-center px-3 py-3 font-medium text-on-surface-variant hover:bg-surface-variant/20 hover:text-primary transition-all active:scale-95 duration-100 group rounded" href="/maintenance-hub">
            <span className="material-symbols-outlined mr-3 text-[20px]">build</span>
            <span className="font-mono text-[11px] font-bold">Maintenance Hub</span>
          </Link>
        </nav>
        <div className="mt-auto pt-6 border-t border-outline-variant/10">
          <button className="w-full py-3 bg-[#64ffda] text-on-primary-fixed font-mono text-[11px] font-bold hover:bg-primary-fixed transition-all active:scale-95 mb-6 rounded">
            GENERATE REPORT
          </button>
          <div className="space-y-1">
            <a className="flex items-center px-3 py-2 text-on-surface-variant font-medium hover:text-primary transition-all text-xs rounded" href="#">
              <span className="material-symbols-outlined mr-2 text-[18px]">terminal</span>
              <span className="font-mono text-[11px] font-bold">System Logs</span>
            </a>
            <a className="flex items-center px-3 py-2 text-on-surface-variant font-medium hover:text-primary transition-all text-xs rounded" href="#">
              <span className="material-symbols-outlined mr-2 text-[18px]">settings</span>
              <span className="font-mono text-[11px] font-bold">Settings</span>
            </a>
          </div>
          <div className="mt-6 flex items-center gap-3 px-3">
            <div className="w-8 h-8 rounded-full bg-surface-container-highest border border-outline-variant/20 overflow-hidden flex-shrink-0">
              <img alt="System Operator" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDB4_qK8TJkgY-LEMRr5m41Ab1q4UdiOaX-RAYJb5EfwIXfdYgebMfmJwo8AYSK77gmCFOUlH3LjPEpOXCXhFcV5dX5BxWNzvHwRC6dKBDsP4yLo8Cwm2QGURpk4-zA9FPWWL4aq_0fpTwpZ5LbYODssBs1JnYLvrpHfuTammv4W43n6j_2raFXUGsRTnaP9F1gSG2AXDuvrnkgX64HRuJlhDQ-qSO983ll65qOdU24tuCzmWEBcC3xNVPZxVL2IKJjzEI2dvpbrQw" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-bold text-on-surface">Operator 01</span>
              <span className="text-[10px] text-on-surface-variant">LEVEL 4 CLEARANCE</span>
            </div>
          </div>
        </div>
      </aside>

      {/* Top AppBar Shell */}
      <header className="fixed top-0 left-0 md:left-[15%] right-0 h-16 bg-surface/10 backdrop-blur-md border-b border-outline-variant/5 flex items-center justify-between px-6 z-40 w-full md:w-[calc(100%-15%)]">
        <div className="flex items-center justify-between flex-1 gap-2 md:gap-8">
          <h2 className="font-headline text-lg md:text-2xl font-bold text-[#64ffda] drop-shadow-[0_0_4px_rgba(100,255,218,0.4)]">INSIGHT MONITOR</h2>
          <div className="hidden md:flex gap-6 flex-1 justify-center">
            <a className="font-mono text-[11px] font-bold uppercase text-[#64ffda] drop-shadow-[0_0_4px_rgba(100,255,218,0.4)] border-b-2 border-[#64ffda] pb-1 transition-all duration-200 ease-in-out" href="#">Real-time</a>
            <a className="font-mono text-[11px] font-bold uppercase text-on-surface-variant hover:text-primary transition-all duration-200 ease-in-out" href="#">History</a>
            <a className="font-mono text-[11px] font-bold uppercase text-on-surface-variant hover:text-primary transition-all duration-200 ease-in-out" href="#">Nodes</a>
          </div>
        </div>
        <div className="flex items-center gap-2 md:gap-6 pl-2">
          <button className="bg-error-container/20 text-error border border-error/30 px-2 md:px-4 py-1.5 md:py-2 font-mono text-[9px] md:text-[11px] font-bold rounded hover:bg-error-container/40 transition-colors uppercase whitespace-nowrap">
            <span className="hidden sm:inline">Emergency Shutdown</span>
            <span className="inline sm:hidden">Stop</span>
          </button>

          <div className="flex items-center gap-2 md:gap-4 text-on-surface-variant">
            <Link href="/" aria-label="Home">
              <span className="material-symbols-outlined cursor-pointer hover:text-primary flex items-center pt-1">home</span>
            </Link>
            <span 
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="material-symbols-outlined cursor-pointer hover:text-primary flex items-center"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? 'light_mode' : 'dark_mode'}
            </span>
            <span className="material-symbols-outlined cursor-pointer hover:text-primary" aria-label="Notifications">notifications</span>
            <span className="material-symbols-outlined cursor-pointer hover:text-primary" aria-label="Account">account_circle</span>
          </div>
        </div>
      </header>

      {/* Main Telemetry Stage */}
      <main className="ml-0 md:ml-[15%] mt-16 p-4 h-auto min-h-[calc(100vh-64px)] pb-24 md:pb-4 overflow-y-auto md:overflow-hidden flex flex-col gap-1 w-full">
        {/* Top Action Bar */}
        <div className="glass-panel flex flex-col sm:flex-row items-start sm:items-center justify-between px-6 py-3 rounded-t-xl gap-3 sm:gap-0" style={{ background: "rgba(255, 255, 255, 0.03)", backdropFilter: "blur(12px)", border: "1px solid rgba(255, 255, 255, 0.08)" }}>
          <div className="flex items-center gap-4">
            <div className="px-3 py-1 bg-[#64ffda]/10 border border-[#64ffda]/30 rounded">
              <span className="font-mono text-[12px] text-[#64ffda] drop-shadow-[0_0_4px_rgba(100,255,218,0.4)] tracking-widest font-bold">ASSET ID: ST-049</span>
            </div>
            <span className="text-on-surface-variant font-medium">|</span>
            <span className="font-headline text-lg text-on-surface font-semibold">Motor Array Beta</span>
          </div>
          <div className="flex flex-wrap items-center gap-4 md:gap-6">
            <div className="flex bg-surface-container-low rounded p-0.5 border border-outline-variant/10">
              <button className="px-3 py-1 font-mono text-[10px] text-on-surface-variant hover:text-primary font-bold">1 MIN</button>
              <button className="px-3 py-1 font-mono text-[10px] text-on-surface-variant hover:text-primary font-bold">5 MIN</button>
              <button className="px-3 py-1 font-mono text-[10px] text-on-surface-variant hover:text-primary font-bold">1 HOUR</button>
              <button className="px-3 py-1 font-mono text-[10px] text-[#64ffda] drop-shadow-[0_0_4px_rgba(100,255,218,0.4)] bg-[#64ffda]/20 rounded-sm font-bold">LIVE</button>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)] animate-pulse"></span>
              <span className="font-mono text-[11px] text-emerald-400 font-bold">LIVE STREAM: ON</span>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 border border-outline-variant/20 hover:bg-surface-variant/20 transition-all font-mono text-[11px] rounded font-bold">
              <span className="material-symbols-outlined text-[16px]">download</span>
              EXPORT CSV
            </button>
          </div>
        </div>

        {/* Upper Section: Charts (60% Height) */}
        <div className="w-full">
          <TelemetryChartsDark />
        </div>

        {/* Lower Section: Telemetry Grid (40% Height) */}
        <div className="w-full">
          <TelemetryStatsDark />
        </div>
      </main>

      {/* Mobile Bottom Navigation */}
      <BottomNavbar />
    </div>
  );
}
