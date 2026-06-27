"use client";
import React from "react";
import Link from "next/link";
import { useAppContext } from "@/components/AppContext";
import TelemetryChartsLight from "./components/TelemetryChartsLight";
import TelemetryStatsLight from "./components/TelemetryStatsLight";

export default function TelemetryLight() {
  const { theme, setTheme } = useAppContext();

  return (
    <div className="dashboard-light-theme font-body min-h-screen flex overflow-hidden bg-[#f4f9f9] text-[#151d1e]">
      {/* Side Navigation Shell */}
      <nav className="h-screen w-64 fixed left-0 top-0 bg-surface-container-lowest border-r border-outline-variant flex flex-col py-gutter px-4 z-50">
        <div className="mb-8 mt-4">
          <Link href="/">
            <h1 className="font-headline text-3xl font-bold text-on-surface tracking-tighter uppercase">CORE<div>INSIGHT</div></h1>
          </Link>
          <p className="font-mono text-[11px] text-on-surface-variant mt-1 font-bold opacity-70">V.4.0 ONLINE</p>
        </div>
        <div className="flex-grow space-y-2">
          <Link className="flex items-center space-x-3 p-3 rounded text-on-surface-variant font-medium font-mono text-[11px] font-bold hover:bg-surface-variant hover:text-on-surface transition-all" href="/dashboard">
            <span className="material-symbols-outlined mr-3">dashboard</span>
            <span>Overview</span>
          </Link>
          <Link className="flex items-center space-x-3 p-3 rounded text-primary bg-primary-container/30 border-l-2 border-primary font-bold font-mono text-[11px] scale-95 duration-100" href="/telemetry">
            <span className="material-symbols-outlined mr-3" style={{ fontVariationSettings: '"FILL" 1' }}>analytics</span>
            <span>Live Telemetry</span>
          </Link>
          <Link className="flex items-center space-x-3 p-3 rounded text-on-surface-variant font-medium font-mono text-[11px] font-bold hover:bg-surface-variant hover:text-on-surface transition-all" href="/diagnostics">
            <span className="material-symbols-outlined mr-3">query_stats</span>
            <span>Diagnostics</span>
          </Link>
          <Link className="flex items-center space-x-3 p-3 rounded text-on-surface-variant font-medium font-mono text-[11px] font-bold hover:bg-surface-variant hover:text-on-surface transition-all" href="/simulation-lab">
            <span className="material-symbols-outlined mr-3">science</span>
            <span>Simulation Lab</span>
          </Link>
          <Link className="flex items-center space-x-3 p-3 rounded text-on-surface-variant font-medium font-mono text-[11px] font-bold hover:bg-surface-variant hover:text-on-surface transition-all" href="/maintenance-hub">
            <span className="material-symbols-outlined mr-3">build</span>
            <span>Maintenance Hub</span>
          </Link>
        </div>
        <div className="mt-auto pt-4 border-t border-outline-variant">
          <button className="w-full mb-4 bg-primary text-on-primary font-mono text-[11px] font-bold py-3 rounded hover:bg-primary-fixed-variant transition-colors">
            GENERATE REPORT
          </button>
          <div className="flex flex-col space-y-2">
            <a className="flex items-center space-x-3 p-2 rounded text-on-surface-variant font-medium font-mono text-[11px] font-bold hover:bg-surface-variant hover:text-on-surface transition-all" href="#">
              <span className="material-symbols-outlined mr-2">terminal</span>
              <span>System Logs</span>
            </a>
            <a className="flex items-center space-x-3 p-2 rounded text-on-surface-variant font-medium font-mono text-[11px] font-bold hover:bg-surface-variant hover:text-on-surface transition-all" href="#">
              <span className="material-symbols-outlined mr-2">settings</span>
              <span>Settings</span>
            </a>
          </div>
          <div className="mt-4 flex items-center space-x-2 text-[12px] font-mono text-on-surface-variant">
            <div className="w-8 h-8 rounded-full bg-surface-container border border-outline-variant overflow-hidden mr-2">
              <img alt="System Operator" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDB4_qK8TJkgY-LEMRr5m41Ab1q4UdiOaX-RAYJb5EfwIXfdYgebMfmJwo8AYSK77gmCFOUlH3LjPEpOXCXhFcV5dX5BxWNzvHwRC6dKBDsP4yLo8Cwm2QGURpk4-zA9FPWWL4aq_0fpTwpZ5LbYODssBs1JnYLvrpHfuTammv4W43n6j_2raFXUGsRTnaP9F1gSG2AXDuvrnkgX64HRuJlhDQ-qSO983ll65qOdU24tuCzmWEBcC3xNVPZxVL2IKJjzEI2dvpbrQw" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col">
              <span className="text-on-surface font-bold text-[12px]">Operator 01</span>
              <span className="text-[10px] opacity-70">LEVEL 4 CLEARANCE</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Top AppBar Shell */}
      <header className="fixed top-0 left-64 h-16 bg-white/95 backdrop-blur-sm border-b border-outline-variant flex items-center justify-between px-6 z-40 transition-all duration-200" style={{ width: "calc(100% - 16rem)" }}>
        {/* Branding Left */}
        <div className="flex flex-col">
          <h2 className="font-mono text-[18px] font-bold text-[#006970] tracking-tight leading-none uppercase">Insight Monitor</h2>
        </div>

        {/* Navigation Center */}
        <nav className="hidden md:flex space-x-8 font-mono text-[11px] absolute left-1/2 -translate-x-1/2 items-center h-full">
          <a className="text-primary border-b-2 border-primary h-full flex items-center px-1 font-bold uppercase" href="#">Real-time</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors h-full flex items-center px-1 uppercase font-bold" href="#">History</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors h-full flex items-center px-1 uppercase font-bold" href="#">Nodes</a>
        </nav>

        {/* Actions Right */}
        <div className="flex items-center space-x-4">
          <button className="bg-[#fee2e2] border border-[#fca5a5] text-[#991b1b] font-mono text-[10px] px-4 py-1.5 rounded-sm hover:bg-red-200 transition-colors uppercase font-bold tracking-wider">
            EMERGENCY SHUTDOWN
          </button>
          <div className="flex items-center space-x-3 text-on-surface-variant">
            <Link href="/" className="hover:text-primary transition-colors p-1 flex items-center">
              <span className="material-symbols-outlined text-[20px]">home</span>
            </Link>
            <button 
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="hover:text-primary transition-colors p-1"
            >
              <span className="material-symbols-outlined text-[20px]">{theme === 'dark' ? 'light_mode' : 'dark_mode'}</span>
            </button>
            <button className="hover:text-primary transition-colors p-1 relative">
              <span className="material-symbols-outlined text-[20px]">notifications</span>
              <span className="absolute top-1 right-1 w-1.5 h-1.5 bg-error rounded-full"></span>
            </button>
            <button className="hover:text-primary transition-colors p-1">
              <span className="material-symbols-outlined text-[22px]">account_circle</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Telemetry Stage */}
      <main className="mt-16 p-6 h-[calc(100vh-64px)] overflow-hidden flex flex-col gap-6 w-full" style={{ marginLeft: "16rem", width: "calc(100% - 16rem)" }}>
        {/* Top Action Bar */}
        <div className="bg-[#ffffff] border border-[#dee3e4] shadow-[0_1px_3px_rgba(0,0,0,0.05)] flex items-center justify-between px-6 py-4 rounded-xl">
          <div className="flex items-center gap-4">
            <div className="px-3 py-1 bg-primary-container/30 border border-primary-container rounded">
              <span className="font-mono text-[12px] text-primary tracking-widest uppercase font-bold">ASSET ID: ST-049</span>
            </div>
            <span className="text-outline-variant font-medium">|</span>
            <span className="font-headline text-2xl text-on-surface font-semibold">Motor Array Beta</span>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex bg-surface-container rounded p-1 border border-outline-variant">
              <button className="px-3 py-1 font-mono text-[10px] text-on-surface-variant hover:text-on-surface rounded font-bold">1 MIN</button>
              <button className="px-3 py-1 font-mono text-[10px] text-on-surface-variant hover:text-on-surface rounded font-bold">5 MIN</button>
              <button className="px-3 py-1 font-mono text-[10px] text-on-surface-variant hover:text-on-surface rounded font-bold">1 HOUR</button>
              <button className="px-3 py-1 font-mono text-[10px] text-primary bg-surface shadow-sm rounded border border-outline-variant font-bold">LIVE</button>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_rgba(0,105,112,0.5)]"></span>
              <span className="font-mono text-[11px] text-primary font-bold">LIVE STREAM: ON</span>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 border border-outline-variant rounded hover:bg-surface-variant transition-all font-mono text-[11px] text-on-surface-variant font-bold">
              <span className="material-symbols-outlined text-[16px]">download</span>
              EXPORT CSV
            </button>
          </div>
        </div>

        {/* Upper Section: Charts (60% Height) */}
        <TelemetryChartsLight />

        {/* Lower Section: Telemetry Grid (40% Height) */}
        <TelemetryStatsLight />
      </main>
    </div>
  );
}
