"use client";
import React from "react";
import { useAppContext } from "@/components/AppContext";
import Link from "next/link";
import OverviewGaugesLight from "./components/OverviewGaugesLight";
import ParameterGridLight from "./components/ParameterGridLight";
import SensorTrendsLight from "./components/SensorTrendsLight";
import RcaNarrativeLight from "./components/RcaNarrativeLight";

export default function DashboardLight() {
  const { theme, setTheme } = useAppContext();

  return (
    <div className="dashboard-light-theme min-h-screen flex overflow-hidden font-body">
      {/* SideNavBar */}
      <nav className="h-screen w-[15%] fixed left-0 top-0 bg-surface-container-lowest border-r border-outline-variant flex flex-col py-gutter px-4 z-50">
        <div className="mb-8 mt-4">
          <Link href="/" className="font-headline text-3xl font-bold text-primary tracking-tighter block">
            CORE<div>INSIGHT</div>
          </Link>
          <div className="font-mono text-xs text-on-surface-variant mt-1 opacity-70">
            V.4.0 ONLINE
          </div>
        </div>
        <div className="flex-grow space-y-2">
          <a
            className="flex items-center space-x-3 p-3 rounded text-on-primary bg-primary border-l-2 border-primary-fixed-dim font-bold font-mono text-xs scale-95 duration-100"
            href="#"
          >
            <span
              className="material-symbols-outlined"
              style={{ fontVariationSettings: '"FILL" 1' }}
            >
              dashboard
            </span>
            <span>Overview</span>
          </a>
          <Link
            className="flex items-center space-x-3 p-3 rounded text-on-surface-variant font-medium font-mono text-xs hover:bg-surface-variant hover:text-on-surface transition-all"
            href="/telemetry"
          >
            <span className="material-symbols-outlined">analytics</span>
            <span>Live Telemetry</span>
          </Link>
          <Link
            className="flex items-center space-x-3 p-3 rounded text-on-surface-variant font-medium font-mono text-xs hover:bg-surface-variant hover:text-on-surface transition-all"
            href="/diagnostics"
          >
            <span className="material-symbols-outlined">query_stats</span>
            <span>Diagnostics</span>
          </Link>
          <Link
            className="flex items-center space-x-3 p-3 rounded text-on-surface-variant font-medium font-mono text-xs hover:bg-surface-variant hover:text-on-surface transition-all"
            href="/simulation-lab"
          >
            <span className="material-symbols-outlined">science</span>
            <span>Simulation Lab</span>
          </Link>
          <Link
            className="flex items-center space-x-3 p-3 rounded text-on-surface-variant font-medium font-mono text-xs hover:bg-surface-variant hover:text-on-surface transition-all"
            href="/maintenance-hub"
          >
            <span className="material-symbols-outlined">build</span>
            <span>Maintenance Hub</span>
          </Link>
        </div>
        <div className="mt-auto pt-4 border-t border-outline-variant">
          <button className="w-full mb-4 bg-primary text-on-primary font-mono text-xs font-bold py-3 rounded hover:bg-on-primary-fixed-variant transition-colors">
            GENERATE REPORT
          </button>
          <div className="flex flex-col space-y-2">
            <a
              className="flex items-center space-x-3 p-2 rounded text-on-surface-variant font-medium font-mono text-xs hover:bg-surface-variant hover:text-on-surface transition-all"
              href="#"
            >
              <span className="material-symbols-outlined">terminal</span>
              <span>System Logs</span>
            </a>
            <a
              className="flex items-center space-x-3 p-2 rounded text-on-surface-variant font-medium font-mono text-xs hover:bg-surface-variant hover:text-on-surface transition-all"
              href="#"
            >
              <span className="material-symbols-outlined">settings</span>
              <span>Settings</span>
            </a>
          </div>
          <div className="mt-4 flex items-center space-x-2 font-mono text-xs text-on-surface-variant">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_rgba(0,105,112,0.5)]"></div>
            <span>System Status: Online</span>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="ml-[15%] flex-grow flex h-screen pt-16 pb-4 px-4 gap-1">
        {/* TopAppBar */}
        <header className="fixed top-0 left-[15%] right-0 h-16 z-40 bg-surface/80 backdrop-blur-md border-b border-outline-variant flex items-center justify-between px-4 transition-all duration-200 ease-in-out">
          <div className="flex items-center min-w-[240px]">
            <div className="font-headline text-2xl font-bold text-primary">
              INSIGHT MONITOR
            </div>
          </div>
          <nav className="hidden md:flex flex-grow justify-center space-x-6 font-mono text-xs font-bold uppercase">
            <a className="text-primary border-b-2 border-primary pb-1" href="#">
              Real-time
            </a>
            <a className="text-on-surface-variant hover:text-primary transition-colors" href="#">
              History
            </a>
            <a className="text-on-surface-variant hover:text-primary transition-colors" href="#">
              Nodes
            </a>
          </nav>
          <div className="flex items-center space-x-4 min-w-[240px] justify-end">
            <button className="bg-error-container border border-error text-on-error-container font-mono text-xs font-bold px-4 py-2 rounded hover:bg-error hover:text-on-error transition-colors whitespace-nowrap">
              EMERGENCY SHUTDOWN
            </button>
            <Link href="/">
              <button className="text-on-surface-variant hover:text-primary transition-colors flex items-center justify-center pt-1">
                <span className="material-symbols-outlined">home</span>
              </button>
            </Link>
            <button 
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="text-on-surface-variant hover:text-primary transition-colors flex items-center justify-center"
            >
              <span className="material-symbols-outlined">
                {theme === 'dark' ? 'light_mode' : 'dark_mode'}
              </span>
            </button>
            <button className="text-on-surface-variant hover:text-primary transition-colors flex items-center justify-center">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <button className="text-on-surface-variant hover:text-primary transition-colors flex items-center justify-center">
              <span className="material-symbols-outlined">account_circle</span>
            </button>
          </div>
        </header>

        {/* Center Stage (55%) */}
        <div className="flex-[55%] flex flex-col gap-1">
          <OverviewGaugesLight />
          <ParameterGridLight />
          <SensorTrendsLight />
        </div>

        <RcaNarrativeLight />
      </main>
    </div>
  );
}
