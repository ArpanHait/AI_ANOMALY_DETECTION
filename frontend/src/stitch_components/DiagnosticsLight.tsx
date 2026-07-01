"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { useAppContext } from "@/components/AppContext";
import DiagnosticsRadarLight from "./components/DiagnosticsRadarLight";
import DiagnosticsTerminalLight from "./components/DiagnosticsTerminalLight";
import BottomNavbar from "@/components/layout/BottomNavbar";

export default function DiagnosticsLight() {
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
    <div ref={containerRef} className="dashboard-light-theme font-body min-h-screen flex flex-col overflow-x-hidden bg-[#f4f9f9] text-[#151d1e]">
      {/* Top AppBar */}
      <header className="fixed top-0 left-0 right-0 h-16 z-40 flex justify-between items-center px-4 md:px-lg bg-white/95 backdrop-blur-sm border-b border-outline-variant w-full">
        <div className="flex items-center gap-md min-w-[120px] md:min-w-[200px]">
          <span className="font-headline-lg text-sm md:text-headline-lg font-bold tracking-tight text-on-surface">CORE INSIGHT</span>
        </div>
        <nav className="hidden md:flex flex-1 justify-center gap-lg">
          <Link href="#" className="text-on-surface-variant font-medium hover:bg-surface-container-high transition-colors duration-150 px-sm py-xs rounded">Real-time</Link>
          <Link href="#" className="text-on-surface-variant font-medium hover:bg-surface-container-high transition-colors duration-150 px-sm py-xs rounded">History</Link>
          <Link href="#" className="text-on-surface-variant font-medium hover:bg-surface-container-high transition-colors duration-150 px-sm py-xs rounded">Nodes</Link>
        </nav>
        <div className="flex items-center gap-2 md:gap-md justify-end min-w-[120px] md:min-w-[200px]">
          <button className="bg-[#0f172a] text-[#00f0ff] px-2 md:px-md py-1.5 md:py-sm rounded border border-transparent hover:border-[#00f0ff] transition-all font-label-caps text-[9px] md:text-label-caps whitespace-nowrap">
            <span className="hidden sm:inline">Emergency Shutdown</span>
            <span className="inline sm:hidden">Stop</span>
          </button>
          <button className="text-on-surface-variant hover:bg-surface-container-high p-sm rounded-full transition-colors duration-150" aria-label="Notifications">
            <span className="material-symbols-outlined">notifications</span>
          </button>
          <button className="text-on-surface-variant hover:bg-surface-container-high p-sm rounded-full transition-colors duration-150" aria-label="Settings">
            <span className="material-symbols-outlined">settings</span>
          </button>
          <div className="w-8 h-8 rounded-full bg-surface-container-high border border-outline-variant flex items-center justify-center overflow-hidden ml-sm cursor-pointer hover:ring-1 ring-primary transition-all">
            <img alt="User Profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDB43FUUE4RIghnDoatGeh4BfWqHxAVNBP_ZOQZoTOyW636-mIWT2NTwe3ktcct2t1fvR10rfY8foCOtPn0NXpodpWEL_WwLIL2A__xUiWrpi90QUAtyp5GRvm-1jWBpZnqydv43AV0V0UL-6ZgYr_DMFIgfzWbIosActanpOd5qswnY5MzXQ6UQs28Q7nwPaljiIMGVCcF1uvUScRpkTPf8Ex-Y5gHgyBNKv5WuMsyqnBZwle9UBz4EvvNgEHeu17qdM1OYpDQFN4Q"/>
          </div>
        </div>
      </header>

      {/* Main Grid Wrapper */}
      <div className="flex flex-col md:flex-row h-auto min-h-screen pt-16">
        {/* Side Navigation Shell */}
        <aside className="hidden md:flex fixed left-0 top-16 h-[calc(100vh-64px)] w-64 z-30 flex-col pt-lg pb-xl bg-surface border-r border-outline-variant">
          <div className="px-lg mb-xl">
            <div className="flex items-center gap-sm mb-sm">
              <div className="w-10 h-10 rounded border border-outline-variant bg-surface-container-low flex items-center justify-center">
                <span className="material-symbols-outlined text-primary">dns</span>
              </div>
              <div>
                <div className="font-label-caps text-label-caps font-bold text-on-surface">CORE_SYS_01</div>
                <div className="font-mono-data text-mono-data text-on-surface-variant text-[10px]">V.2.4.0_STABLE</div>
              </div>
            </div>
          </div>
          <nav className="flex-grow flex flex-col gap-xs px-sm">
            <Link href="/dashboard" className="flex items-center gap-md px-md py-sm rounded-r-none text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-all duration-200">
              <span className="material-symbols-outlined">dashboard</span>
              <span className="font-label-caps text-label-caps">Overview</span>
            </Link>
            <Link href="/telemetry" className="flex items-center gap-md px-md py-sm rounded-r-none text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-all duration-200">
              <span className="material-symbols-outlined">analytics</span>
              <span className="font-label-caps text-label-caps">Telemetry</span>
            </Link>
            <Link href="/diagnostics" className="flex items-center gap-md px-md py-sm rounded-r-none bg-secondary-container/20 text-primary border-r-4 border-primary translate-x-1 transition-transform">
              <span className="material-symbols-outlined">biotech</span>
              <span className="font-label-caps text-label-caps">Diagnostics</span>
            </Link>
            <Link href="/simulation-lab" className="flex items-center gap-md px-md py-sm rounded-r-none text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-all duration-200">
              <span className="material-symbols-outlined">science</span>
              <span className="font-label-caps text-label-caps">Simulation Lab</span>
            </Link>
            <Link href="/maintenance-hub" className="flex items-center gap-md px-md py-sm rounded-r-none text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-all duration-200">
              <span className="material-symbols-outlined">engineering</span>
              <span className="font-label-caps text-label-caps">Maintenance Hub</span>
            </Link>
          </nav>
        </aside>

        {/* Main Content Area */}
        <main className="flex-grow ml-0 md:ml-64 p-4 md:p-lg overflow-y-auto bg-surface-container-low pb-24 md:pb-4">
          <div className="flex flex-col lg:flex-row gap-lg h-full">
            <DiagnosticsRadarLight />
            <DiagnosticsTerminalLight />
          </div>
        </main>
      </div>

      {/* Mobile Bottom Navigation */}
      <BottomNavbar />
    </div>
  );
}
