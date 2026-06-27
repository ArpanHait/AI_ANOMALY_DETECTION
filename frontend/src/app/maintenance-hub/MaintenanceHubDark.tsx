"use client";
import React from "react";
import Link from "next/link";
import { useAppContext } from "@/components/AppContext";
import ActiveWorkOrdersDark from "./components/ActiveWorkOrdersDark";
import InventoryStatusDark from "./components/InventoryStatusDark";
import AssetVisualizerDark from "./components/AssetVisualizerDark";
import DowntimeWindowsDark from "./components/DowntimeWindowsDark";

export default function MaintenanceHubDark() {
  const { theme, setTheme } = useAppContext();

  return (
    <div className="dashboard-dark-theme font-body min-h-screen flex overflow-hidden bg-[#0A0E17] text-on-surface">
      {/* Side Navigation Shell */}
      <nav className="h-screen w-[15%] fixed left-0 top-0 bg-surface-container-low/40 backdrop-blur-xl border-r border-outline-variant/10 flex flex-col py-4 px-4 z-50">
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
          <Link className="flex items-center space-x-3 p-3 rounded text-on-surface-variant font-medium font-mono text-[11px] font-bold hover:bg-surface-variant/20 hover:text-primary transition-all" href="/simulation-lab">
            <span className="material-symbols-outlined">science</span>
            <span>Simulation Lab</span>
          </Link>
          <Link className="flex items-center space-x-3 p-3 rounded text-[#64ffda] drop-shadow-[0_0_4px_rgba(100,255,218,0.4)] bg-[#64ffda]/10 border-l-[3px] border-[#00f0ff] shadow-[inset_4px_0_15px_-4px_rgba(0,240,255,0.4)] font-bold font-mono text-[11px] scale-95 duration-100" href="/maintenance-hub">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>build</span>
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
      <header className="fixed top-0 left-[15%] h-16 bg-surface-container/30 backdrop-blur-xl border-b border-outline-variant/20 flex items-center justify-between px-6 z-40 transition-all duration-200" style={{ width: "calc(100% - 15%)" }}>
        {/* Branding Left */}
        <div className="flex flex-col">
          <h2 className="font-mono text-[18px] font-bold text-[#64ffda] drop-shadow-[0_0_4px_rgba(100,255,218,0.4)] tracking-widest uppercase">Insight Monitor</h2>
        </div>

        {/* Navigation Center */}
        <nav className="hidden md:flex space-x-8 font-mono text-[11px] absolute left-1/2 -translate-x-1/2 items-center h-full">
          <a className="text-[#64ffda] drop-shadow-[0_0_4px_rgba(100,255,218,0.4)] border-b-2 border-[#64ffda] h-full flex items-center px-1 font-bold uppercase" href="#">Work Orders</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors h-full flex items-center px-1 uppercase font-bold" href="#">Inventory</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors h-full flex items-center px-1 uppercase font-bold" href="#">Technicians</a>
        </nav>

        {/* Actions Right */}
        <div className="flex items-center space-x-4">
          <button className="bg-[#1a0a0a] border border-[#441d1d] text-[#ffb4ab] font-mono text-[10px] px-4 py-1.5 rounded-sm hover:bg-[#2a1111] transition-colors uppercase font-bold tracking-wider">
            EMERGENCY SHUTDOWN
          </button>
          <div className="flex items-center space-x-3 text-on-surface-variant">
            <Link href="/" className="hover:text-primary transition-colors p-1 flex items-center">
              <span className="material-symbols-outlined text-[20px]">home</span>
            </Link>
            <button 
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="hover:text-primary transition-colors p-1 flex items-center"
            >
              <span className="material-symbols-outlined text-[20px]">{theme === 'dark' ? 'light_mode' : 'dark_mode'}</span>
            </button>
            <button className="hover:text-primary transition-colors p-1 relative flex items-center">
              <span className="material-symbols-outlined text-[20px]">notifications</span>
              <span className="absolute top-1 right-1 w-1.5 h-1.5 bg-error rounded-full"></span>
            </button>
            <button className="hover:text-primary transition-colors p-1 flex items-center">
              <span className="material-symbols-outlined text-[22px]">account_circle</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="ml-[15%] pt-20 md:pt-24 min-h-screen w-full flex-1 px-4 pb-4 md:px-8 md:pb-8 overflow-y-auto grid grid-cols-12 gap-4 relative">
        <style>{`
          .neon-green-glow { box-shadow: inset 0 0 10px rgba(100, 255, 218, 0.2), 0 0 15px rgba(100, 255, 218, 0.1); }
          .text-glow { text-shadow: 0 0 10px rgba(100, 255, 218, 0.6); }
          .critical-pulse { animation: pulse-critical 2s infinite; }
          @keyframes pulse-critical {
              0% { opacity: 0.8; box-shadow: inset 0 0 5px rgba(255, 180, 171, 0.3); }
              50% { opacity: 1; box-shadow: inset 0 0 15px rgba(255, 180, 171, 0.8); }
              100% { opacity: 0.8; box-shadow: inset 0 0 5px rgba(255, 180, 171, 0.3); }
          }
        `}</style>
        {/* Page Header & Actions */}
        <div className="col-span-12 flex justify-between items-end mb-4">
          <div>
            <h1 className="font-headline text-3xl font-bold text-primary">Maintenance Hub</h1>
            <p className="font-mono text-[12px] text-on-surface-variant mt-1">System Status: OPTIMAL | Last sync: 0.2s ago</p>
          </div>
          <div className="flex gap-4">
            <button className="bg-transparent border border-[#64ffda] text-[#64ffda] font-mono text-[11px] font-bold uppercase tracking-widest py-2 px-6 rounded hover:bg-[#64ffda]/5 transition-colors flex items-center gap-2">
              <span className="material-symbols-outlined text-[16px]">shopping_cart</span> Order Parts
            </button>
            <button className="bg-[#64ffda] text-[#0A0E17] font-mono text-[11px] font-bold uppercase tracking-widest py-2 px-6 rounded neon-green-glow hover:brightness-110 transition-all flex items-center gap-2">
              <span className="material-symbols-outlined text-[16px]">add_task</span> Initiate Work Order
            </button>
          </div>
        </div>

        {/* Left Column: Work Orders & Inventory */}
        <div className="col-span-12 xl:col-span-8 flex flex-col gap-4">
          <ActiveWorkOrdersDark />
          <InventoryStatusDark />
        </div>

        {/* Right Column: Scheduling & 3D View */}
        <div className="col-span-12 xl:col-span-4 flex flex-col gap-4">
          <AssetVisualizerDark />
          <DowntimeWindowsDark />
        </div>
      </main>
    </div>
  );
}
