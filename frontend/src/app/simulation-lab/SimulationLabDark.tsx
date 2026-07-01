"use client";
import React from "react";
import Link from "next/link";
import { useAppContext } from "@/components/AppContext";
import ParameterConfiguration from "./components/ParameterConfiguration";
import SimulatedProjection from "./components/SimulatedProjection";
import SimResultsPanel from "./components/SimResultsPanel";
import SimEngineStats from "./components/SimEngineStats";
import BottomNavbar from "@/components/layout/BottomNavbar";

export default function SimulationLabDark() {
  const { theme, setTheme } = useAppContext();

  return (
    <div className="dashboard-dark-theme font-body min-h-screen flex flex-col md:flex-row overflow-x-hidden bg-[#0A0E17] text-on-surface">
      {/* Side Navigation Shell */}
      <nav className="hidden md:flex h-screen w-[15%] fixed left-0 top-0 bg-surface-container-low/40 backdrop-blur-xl border-r border-outline-variant/10 flex-col py-gutter px-4 z-50">
        <div className="mb-8 mt-4">
          <Link href="/">
            <h1 className="font-headline text-3xl font-bold text-[#64ffda] drop-shadow-[0_0_4px_rgba(100,255,218,0.4)] tracking-tighter uppercase">CORE<div>INSIGHT</div></h1>
          </Link>
          <p className="font-mono text-[11px] text-on-surface-variant mt-1 font-bold opacity-70">V.4.0 ONLINE</p>
        </div>
        <div className="flex-grow space-y-2">
          <Link className="flex items-center space-x-3 p-3 rounded text-on-surface-variant font-medium font-mono text-[11px] font-bold hover:bg-surface-variant/20 hover:text-primary transition-all" href="/dashboard">
            <span className="material-symbols-outlined">dashboard</span>
            <span>Overview</span>
          </Link>
          <Link className="flex items-center space-x-3 p-3 rounded text-on-surface-variant font-medium font-mono text-[11px] font-bold hover:bg-surface-variant/20 hover:text-primary transition-all" href="/telemetry">
            <span className="material-symbols-outlined">analytics</span>
            <span>Live Telemetry</span>
          </Link>
          <Link className="flex items-center space-x-3 p-3 rounded text-on-surface-variant font-medium font-mono text-[11px] font-bold hover:bg-surface-variant/20 hover:text-primary transition-all" href="/diagnostics">
            <span className="material-symbols-outlined">query_stats</span>
            <span>Diagnostics</span>
          </Link>
          <a className="flex items-center space-x-3 p-3 rounded text-[#64ffda] drop-shadow-[0_0_4px_rgba(100,255,218,0.4)] bg-[#64ffda]/10 border-l-[3px] border-[#00f0ff] shadow-[inset_4px_0_15px_-4px_rgba(0,240,255,0.4)] font-bold font-mono text-[11px] scale-95 duration-100" href="/simulation-lab">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>science</span>
            <span>Simulation Lab</span>
          </a>
          <Link className="flex items-center space-x-3 p-3 rounded text-on-surface-variant font-medium font-mono text-[11px] font-bold hover:bg-surface-variant/20 hover:text-primary transition-all" href="/maintenance-hub">
            <span className="material-symbols-outlined">build</span>
            <span>Maintenance Hub</span>
          </Link>
        </div>
        <div className="mt-auto pt-4 border-t border-outline-variant/10">
          <button className="w-full mb-4 bg-[#64ffda] text-on-primary-fixed font-mono text-[11px] font-bold py-3 rounded hover:bg-primary transition-colors shadow-[0_0_20px_rgba(0,240,255,0.2)]">
            GENERATE REPORT
          </button>
          <div className="flex flex-col space-y-2">
            <a className="flex items-center space-x-3 p-2 rounded text-on-surface-variant font-medium font-mono text-[11px] font-bold hover:bg-surface-variant/20 hover:text-primary transition-all" href="#">
              <span className="material-symbols-outlined mr-2">terminal</span>
              <span>System Logs</span>
            </a>
            <a className="flex items-center space-x-3 p-2 rounded text-on-surface-variant font-medium font-mono text-[11px] font-bold hover:bg-surface-variant/20 hover:text-primary transition-all" href="#">
              <span className="material-symbols-outlined mr-2">settings</span>
              <span>Settings</span>
            </a>
          </div>
          <div className="mt-4 flex items-center space-x-2 text-[12px] font-mono text-on-surface-variant">
            <div className="w-2 h-2 rounded-full bg-[#64ffda] animate-pulse shadow-[0_0_8px_rgba(0,240,255,0.8)]"></div>
            <div className="flex flex-col">
              <span className="text-[10px] opacity-70 uppercase tracking-tighter">System Status:</span>
              <span className="text-[10px] text-[#64ffda] drop-shadow-[0_0_4px_rgba(100,255,218,0.4)] font-bold uppercase tracking-tighter">Online</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Top AppBar Shell */}
      <header className="fixed top-0 left-0 md:left-[15%] right-0 h-16 bg-surface-container/30 backdrop-blur-xl border-b border-outline-variant/20 flex items-center justify-between px-6 z-40 transition-all duration-200 w-full md:w-[calc(100%-15%)]">
        {/* Branding Left */}
        <div className="flex flex-col min-w-[120px] md:min-w-[200px]">
          <h2 className="font-mono text-sm md:text-[18px] font-bold text-[#64ffda] drop-shadow-[0_0_4px_rgba(100,255,218,0.4)] tracking-widest uppercase">Insight Monitor</h2>
        </div>

        {/* Navigation Center */}
        <nav className="hidden md:flex space-x-8 font-mono text-[11px] absolute left-1/2 -translate-x-1/2 items-center h-full">
          <a className="text-[#64ffda] drop-shadow-[0_0_4px_rgba(100,255,218,0.4)] border-b-2 border-[#64ffda] h-full flex items-center px-1 font-bold uppercase" href="#">Real-time</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors h-full flex items-center px-1 uppercase font-bold" href="#">History</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors h-full flex items-center px-1 uppercase font-bold" href="#">Nodes</a>
        </nav>

        {/* Actions Right */}
        <div className="flex items-center space-x-2 md:space-x-4">
          <button className="bg-[#1a0a0a] border border-[#441d1d] text-[#ffb4ab] font-mono text-[9px] md:text-[10px] px-2 md:px-4 py-1.5 rounded-sm hover:bg-[#2a1111] transition-colors uppercase font-bold tracking-wider">
            <span className="hidden sm:inline">Emergency Shutdown</span>
            <span className="inline sm:hidden">Stop</span>
          </button>
          <div className="flex items-center space-x-2 md:space-x-3 text-on-surface-variant">
            <Link href="/" className="hover:text-primary transition-colors p-1 flex items-center" aria-label="Home">
              <span className="material-symbols-outlined text-[20px]">home</span>
            </Link>
            <button 
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="hover:text-primary transition-colors p-1 flex items-center"
              aria-label="Toggle theme"
            >
              <span className="material-symbols-outlined text-[20px]">{theme === 'dark' ? 'light_mode' : 'dark_mode'}</span>
            </button>
            <button className="hover:text-primary transition-colors p-1 relative flex items-center" aria-label="Notifications">
              <span className="material-symbols-outlined text-[20px]">notifications</span>
              <span className="absolute top-1 right-1 w-1.5 h-1.5 bg-error rounded-full"></span>
            </button>
            <button className="hover:text-primary transition-colors p-1 flex items-center" aria-label="Account">
              <span className="material-symbols-outlined text-[22px]">account_circle</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="ml-0 md:ml-[15%] mt-16 flex-grow flex flex-col h-auto min-h-[calc(100vh-64px)] pb-24 md:pb-4 overflow-y-auto w-full relative z-10">
        <div className="p-4 md:p-6 space-y-4 w-full">
          <div className="grid grid-cols-12 gap-4">
            <ParameterConfiguration />

            <div className="col-span-12 lg:col-span-8 space-y-4">
              <SimulatedProjection />
              <SimResultsPanel />
            </div>
          </div>

          <SimEngineStats />
        </div>
      </main>

      {/* FLOATING BACKGROUND DECORATION */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[10%] right-[5%] w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px]"></div>
      </div>

      {/* Mobile Bottom Navigation */}
      <BottomNavbar />
    </div>
  );
}
