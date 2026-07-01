"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { useAppContext } from "@/components/AppContext";
import OverviewGaugesLight from "./components/OverviewGaugesLight";
import ParameterGridLight from "./components/ParameterGridLight";
import SensorTrendsLight from "./components/SensorTrendsLight";
import RcaNarrativeLight from "./components/RcaNarrativeLight";
import BottomNavbar from "@/components/layout/BottomNavbar";

export default function DashboardLight() {
  const { isAbnormal, setIsAbnormal, theme, setTheme } = useAppContext();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    // Find Theme Toggle
    const themeBtn = Array.from(containerRef.current.querySelectorAll('button')).find(b => b.textContent?.includes('mode') || b.textContent?.includes('Mode'));
    if (themeBtn) {
        themeBtn.onclick = () => setTheme(theme === 'dark' ? 'light' : 'dark');
    }

    // Find ABNORMAL button and attach onClick
    const buttons = containerRef.current.querySelectorAll('button');
    buttons.forEach(btn => {
      if (btn.textContent?.includes('ABNORMAL') || btn.textContent?.includes('TRIGGER')) {
        btn.onclick = () => setIsAbnormal(!isAbnormal);
        // Modify button style if NORMAL
        if (!isAbnormal) {
           btn.className = btn.className.replace('bg-error/20', 'bg-surface-bright').replace('text-error', 'text-on-surface').replace('border-error/50', 'border-outline-variant');
           btn.innerHTML = btn.innerHTML.replace('ABNORMAL', 'NORMAL').replace('RESTORE', 'TRIGGER');
        } else {
           btn.className = btn.className.replace('bg-surface-bright', 'bg-error/20').replace('text-on-surface', 'text-error').replace('border-outline-variant', 'border-error/50');
           btn.innerHTML = btn.innerHTML.replace('NORMAL', 'ABNORMAL').replace('TRIGGER', 'RESTORE');
        }
      }
    });

    // Toggle CRIT / WARN badges
    const crits = containerRef.current.querySelectorAll('.bg-error-container\\/30, .bg-primary-container\\/10');
    crits.forEach(el => {
      if (!isAbnormal) {
        el.className = el.className.replace('bg-error-container/30', 'bg-primary-container/10').replace('text-error', 'text-primary-container').replace('border-error/50', 'border-primary-container/20');
        if (el.textContent === 'CRIT') el.textContent = 'NORMAL';
      } else {
        el.className = el.className.replace('bg-primary-container/10', 'bg-error-container/30').replace('text-primary-container', 'text-error').replace('border-primary-container/20', 'border-error/50');
        if (el.textContent === 'NORMAL') el.textContent = 'CRIT';
      }
    });

    const warns = containerRef.current.querySelectorAll('.bg-secondary-container\\/30, .bg-primary-container\\/10');
    warns.forEach(el => {
      if (el.textContent === 'WARN' || (el.getAttribute('data-orig') === 'WARN')) {
          el.setAttribute('data-orig', 'WARN');
          if (!isAbnormal) {
            el.className = el.className.replace('bg-secondary-container/30', 'bg-primary-container/10').replace('text-secondary', 'text-primary-container').replace('border-secondary/50', 'border-primary-container/20');
            el.textContent = 'NORMAL';
          } else {
            el.className = el.className.replace('bg-primary-container/10', 'bg-secondary-container/30').replace('text-primary-container', 'text-secondary').replace('border-primary-container/20', 'border-secondary/50');
            el.textContent = 'WARN';
          }
      }
    });
      
    // Remove pulsing glows
    const glows = containerRef.current.querySelectorAll('.animate-pulse');
    glows.forEach(el => {
      if (!el.className.includes('w-2 h-2')) { // Keep the system online indicator
         if (!isAbnormal) {
            el.classList.add('opacity-0');
         } else {
            el.classList.remove('opacity-0');
         }
      }
    });

    // Sidebar routing is handled statically via Next.js Link components

  }, [isAbnormal, setIsAbnormal, theme, setTheme]);

  return (
    <div ref={containerRef} className="dashboard-light-theme min-h-screen flex flex-col md:flex-row overflow-x-hidden font-body bg-[#f4f9f9] text-[#151d1e]">
      {/* Side Navigation Shell */}
      <nav className="hidden md:flex h-screen w-[15%] fixed left-0 top-0 bg-surface-container-lowest border-r border-outline-variant flex-col py-6 px-4 z-50">
        <div className="mb-8 mt-4">
          <div className="font-headline-lg text-headline-lg font-bold text-primary tracking-tighter">CORE<div className="">INSIGHT</div></div>
          <div className="font-data-sm text-data-sm text-on-surface-variant mt-1 opacity-70">V.4.0 ONLINE</div>
        </div>
        <div className="flex-grow space-y-2">
          <Link href="/dashboard" className="flex items-center space-x-3 p-3 rounded text-on-primary bg-primary border-l-2 border-primary-fixed-dim font-bold font-label-caps text-label-caps scale-95 duration-100">
            <span className="material-symbols-outlined">dashboard</span>
            <span>Overview</span>
          </Link>
          <Link href="/telemetry" className="flex items-center space-x-3 p-3 rounded text-on-surface-variant font-medium font-label-caps text-label-caps hover:bg-surface-variant hover:text-on-surface transition-all">
            <span className="material-symbols-outlined">analytics</span>
            <span>Live Telemetry</span>
          </Link>
          <Link href="/diagnostics" className="flex items-center space-x-3 p-3 rounded text-on-surface-variant font-medium font-label-caps text-label-caps hover:bg-surface-variant hover:text-on-surface transition-all">
            <span className="material-symbols-outlined">query_stats</span>
            <span>Diagnostics</span>
          </Link>
          <Link href="/simulation-lab" className="flex items-center space-x-3 p-3 rounded text-on-surface-variant font-medium font-label-caps text-label-caps hover:bg-surface-variant hover:text-on-surface transition-all">
            <span className="material-symbols-outlined">science</span>
            <span>Simulation Lab</span>
          </Link>
          <Link href="/maintenance-hub" className="flex items-center space-x-3 p-3 rounded text-on-surface-variant font-medium font-label-caps text-label-caps hover:bg-surface-variant hover:text-on-surface transition-all">
            <span className="material-symbols-outlined">build</span>
            <span>Maintenance Hub</span>
          </Link>
        </div>
        <div className="mt-auto pt-4 border-t border-outline-variant">
          <button className="w-full mb-4 bg-primary text-on-primary font-label-caps text-label-caps py-3 rounded hover:bg-on-primary-fixed-variant transition-colors">
            GENERATE REPORT
          </button>
          <div className="flex flex-col space-y-2">
            <Link href="#" className="flex items-center space-x-3 p-2 rounded text-on-surface-variant font-medium font-label-caps text-label-caps hover:bg-surface-variant hover:text-on-surface transition-all">
              <span className="material-symbols-outlined">terminal</span>
              <span>System Logs</span>
            </Link>
            <Link href="#" className="flex items-center space-x-3 p-2 rounded text-on-surface-variant font-medium font-label-caps text-label-caps hover:bg-surface-variant hover:text-on-surface transition-all">
              <span className="material-symbols-outlined">settings</span>
              <span>Settings</span>
            </Link>
          </div>
          <div className="mt-4 flex items-center space-x-2 text-data-sm font-data-sm text-on-surface-variant">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_rgba(0,105,112,0.5)]"></div>
            <span>System Status: Online</span>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="ml-0 md:ml-[15%] flex-grow flex flex-col md:flex-row h-auto min-h-screen md:h-screen pt-16 pb-24 md:pb-gutter px-gutter gap-panel-gap overflow-y-auto md:overflow-hidden w-full">
        {/* TopAppBar */}
        <header className="fixed top-0 left-0 md:left-[15%] right-0 h-16 z-40 bg-surface/80 backdrop-blur-md border-b border-outline-variant flex items-center justify-between px-gutter transition-all duration-200 ease-in-out w-full md:w-[calc(100%-15%)]">
          <div className="flex items-center min-w-[120px] md:min-w-[240px]">
            <div className="font-headline-md text-sm md:text-headline-md font-bold text-primary">INSIGHT MONITOR</div>
          </div>
          <nav className="hidden md:flex flex-grow justify-center space-x-6 font-label-caps text-label-caps">
            <Link href="#" className="text-primary border-b-2 border-primary pb-1">Real-time</Link>
            <Link href="#" className="text-on-surface-variant hover:text-primary transition-colors">History</Link>
            <Link href="#" className="text-on-surface-variant hover:text-primary transition-colors">Nodes</Link>
          </nav>
          <div className="flex items-center justify-end space-x-2 md:space-x-4 min-w-[120px] md:min-w-[240px]">
            <button className="bg-error-container border border-error text-on-error-container font-label-caps text-[9px] md:text-label-caps px-2 md:px-4 py-1.5 md:py-2 rounded hover:bg-error hover:text-on-error transition-colors whitespace-nowrap">
              <span className="hidden sm:inline">Emergency Shutdown</span>
              <span className="inline sm:hidden">Stop</span>
            </button>
            <button className="text-on-surface-variant hover:text-primary transition-colors" aria-label="Toggle theme"><span className="material-symbols-outlined">dark_mode</span></button>
            <button className="text-on-surface-variant hover:text-primary transition-colors" aria-label="Notifications"><span className="material-symbols-outlined">notifications</span></button>
            <button className="text-on-surface-variant hover:text-primary transition-colors" aria-label="Account"><span className="material-symbols-outlined">account_circle</span></button>
          </div>
        </header>

        {/* Center Stage */}
        <div className="flex-[55%] flex flex-col gap-panel-gap w-full">
          <OverviewGaugesLight />
          <ParameterGridLight />
          <SensorTrendsLight />
        </div>

        {/* Right Pane */}
        <div className="w-full md:w-auto">
          <RcaNarrativeLight />
        </div>
      </main>

      {/* Mobile Bottom Navigation */}
      <BottomNavbar />
    </div>
  );
}
