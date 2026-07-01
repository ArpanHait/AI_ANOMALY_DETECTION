"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { useAppContext } from "@/components/AppContext";
import TelemetryCharts from "./components/TelemetryCharts";
import TelemetryStats from "./components/TelemetryStats";
import BottomNavbar from "@/components/layout/BottomNavbar";

export default function TelemetryDark() {
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
    <div ref={containerRef} className="dashboard-dark-theme min-h-screen flex flex-col md:flex-row overflow-x-hidden bg-[#0A0E17] text-on-surface font-body">
      {/* Side Navigation Shell */}
      <nav className="hidden md:flex h-screen w-[15%] fixed left-0 top-0 bg-surface-container-lowest/30 backdrop-blur-xl border-r border-outline-variant/10 flex-col py-6 px-4 z-50">
        <div className="mb-10">
          <h1 className="font-headline-lg text-headline-lg font-bold text-primary-container tracking-tighter">CORE<div className="">INSIGHT</div></h1>
          <p className="font-label-caps text-label-caps text-on-surface-variant mt-1">V.4.0 ONLINE</p>
        </div>
        <div className="flex-grow space-y-1">
          <Link href="/dashboard" className="flex items-center px-3 py-3 font-medium text-on-surface-variant hover:bg-surface-variant/20 hover:text-primary transition-all active:scale-95 duration-100 group">
            <span className="material-symbols-outlined mr-3 text-[20px]" data-icon="dashboard">dashboard</span>
            <span className="font-label-caps text-label-caps">Overview</span>
          </Link>
          <Link href="/telemetry" className="flex items-center px-3 py-3 text-primary-container bg-primary-container/10 border-l-2 border-primary-container font-bold active:scale-95 duration-100 group">
            <span className="material-symbols-outlined mr-3 text-[20px]" data-icon="analytics">analytics</span>
            <span className="font-label-caps text-label-caps">Live Telemetry</span>
          </Link>
          <Link href="/diagnostics" className="flex items-center px-3 py-3 font-medium text-on-surface-variant hover:bg-surface-variant/20 hover:text-primary transition-all active:scale-95 duration-100 group">
            <span className="material-symbols-outlined mr-3 text-[20px]" data-icon="query_stats">query_stats</span>
            <span className="font-label-caps text-label-caps">Diagnostics</span>
          </Link>
          <Link href="/simulation-lab" className="flex items-center px-3 py-3 font-medium text-on-surface-variant hover:bg-surface-variant/20 hover:text-primary transition-all active:scale-95 duration-100 group">
            <span className="material-symbols-outlined mr-3 text-[20px]" data-icon="science">science</span>
            <span className="font-label-caps text-label-caps">Simulation Lab</span>
          </Link>
          <Link href="/maintenance-hub" className="flex items-center px-3 py-3 font-medium text-on-surface-variant hover:bg-surface-variant/20 hover:text-primary transition-all active:scale-95 duration-100 group">
            <span className="material-symbols-outlined mr-3 text-[20px]" data-icon="build">build</span>
            <span className="font-label-caps text-label-caps">Maintenance Hub</span>
          </Link>
        </div>
        <div className="mt-auto pt-6 border-t border-outline-variant/10">
          <button className="w-full py-3 bg-primary-container text-on-primary-container font-label-caps text-label-caps font-bold hover:brightness-110 transition-all active:scale-95 mb-6">
            GENERATE REPORT
          </button>
          <div className="space-y-1">
            <Link href="#" className="flex items-center px-3 py-2 text-on-surface-variant font-medium hover:text-primary transition-all text-xs">
              <span className="material-symbols-outlined mr-2 text-[18px]" data-icon="terminal">terminal</span>
              <span className="font-label-caps text-label-caps">System Logs</span>
            </Link>
            <Link href="#" className="flex items-center px-3 py-2 text-on-surface-variant font-medium hover:text-primary transition-all text-xs">
              <span className="material-symbols-outlined mr-2 text-[18px]" data-icon="settings">settings</span>
              <span className="font-label-caps text-label-caps">Settings</span>
            </Link>
          </div>
          <div className="mt-6 flex items-center gap-3 px-3">
            <div className="w-8 h-8 rounded-full bg-surface-container-highest border border-outline-variant/20 overflow-hidden">
              <img alt="System Operator" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDB4_qK8TJkgY-LEMRr5m41Ab1q4UdiOaX-RAYJb5EfwIXfdYgebMfmJwo8AYSK77gmCFOUlH3LjPEpOXCXhFcV5dX5BxWNzvHwRC6dKBDsP4yLo8Cwm2QGURpk4-zA9FPWWL4aq_0fpTwpZ5LbYODssBs1JnYLvrpHfuTammv4W43n6j_2raFXUGsRTnaP9F1gSG2AXDuvrnkgX64HRuJlhDQ-qSO983ll65qOdU24tuCzmWEBcC3xNVPZxVL2IKJjzEI2dvpbrQw" className="" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-bold text-on-surface">Operator 01</span>
              <span className="text-[10px] text-on-surface-variant">LEVEL 4 CLEARANCE</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Top AppBar Shell */}
      <header className="fixed top-0 left-0 md:left-[15%] right-0 h-16 bg-[#0A0E17]/80 backdrop-blur-md border-b border-outline-variant/5 flex items-center justify-between px-6 z-40 transition-all duration-200 w-full md:w-[calc(100%-15%)]">
        <div className="flex items-center min-w-[120px] md:min-w-[200px]">
          <h2 className="font-headline-md text-sm md:text-headline-md font-bold text-primary-container">INSIGHT MONITOR</h2>
        </div>
        <nav className="hidden md:flex space-x-6 font-label-caps text-label-caps mx-auto">
          <Link href="#" className="font-label-caps text-label-caps text-primary-container border-b-2 border-primary-container pb-1 transition-all duration-200 ease-in-out">Real-time</Link>
          <Link href="#" className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-all duration-200 ease-in-out">History</Link>
          <Link href="#" className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-all duration-200 ease-in-out">Nodes</Link>
        </nav>
        <div className="flex items-center space-x-2 md:space-x-4 min-w-[120px] md:min-w-[200px] justify-end">
          <button className="bg-error-container/20 text-error border border-error/30 px-2 md:px-4 py-1.5 md:py-2 font-label-caps text-[9px] md:text-label-caps hover:bg-error-container/40 transition-colors uppercase whitespace-nowrap">
            <span className="hidden sm:inline">Emergency Shutdown</span>
            <span className="inline sm:hidden">Stop</span>
          </button>
          <div className="flex items-center space-x-2 md:space-x-4 text-on-surface-variant">
            <span className="material-symbols-outlined cursor-pointer hover:text-primary" data-icon="notifications" aria-label="Notifications">notifications</span>
            <span className="material-symbols-outlined cursor-pointer hover:text-primary" data-icon="account_circle" aria-label="Account">account_circle</span>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="ml-0 md:ml-[15%] mt-16 p-4 flex-grow flex flex-col h-auto min-h-[calc(100vh-64px)] pb-24 md:pb-4 overflow-y-auto w-full relative z-10 gap-panel-gap">
        <div className="glass-panel flex flex-col sm:flex-row items-start sm:items-center justify-between px-4 md:px-6 py-3 rounded-t-lg gap-3 sm:gap-0">
          <div className="flex items-center gap-4">
            <div className="px-3 py-1 bg-primary-container/10 border border-primary-container/30">
              <span className="font-label-caps text-[12px] text-primary-container tracking-widest">ASSET ID: ST-049</span>
            </div>
            <span className="text-on-surface-variant font-medium">|</span>
            <span className="font-headline-md text-body-lg text-on-surface font-semibold">Motor Array Beta</span>
          </div>
          <div className="flex flex-wrap items-center gap-3 sm:gap-6 w-full sm:w-auto">
            <div className="flex bg-surface-container-low rounded p-0.5 border border-outline-variant/10">
              <button className="px-3 py-1 font-label-caps text-[10px] text-on-surface-variant hover:text-primary">1 MIN</button>
              <button className="px-3 py-1 font-label-caps text-[10px] text-on-surface-variant hover:text-primary">5 MIN</button>
              <button className="px-3 py-1 font-label-caps text-[10px] text-on-surface-variant hover:text-primary">1 HOUR</button>
              <button className="px-3 py-1 font-label-caps text-[10px] text-primary-container bg-primary-container/20 rounded-sm">LIVE</button>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)] animate-pulse"></span>
              <span className="font-label-caps text-[11px] text-emerald-400">LIVE: ON</span>
            </div>
            <button className="flex-grow sm:flex-grow-0 flex items-center justify-center gap-2 px-4 py-2 border border-outline-variant/20 hover:bg-surface-variant/20 transition-all font-label-caps text-[11px]">
              <span className="material-symbols-outlined text-[16px]" data-icon="download">download</span>
              EXPORT CSV
            </button>
          </div>
        </div>

        <TelemetryCharts />
        <TelemetryStats />
      </main>

      {/* Mobile Bottom Navigation */}
      <BottomNavbar />
    </div>
  );
}
