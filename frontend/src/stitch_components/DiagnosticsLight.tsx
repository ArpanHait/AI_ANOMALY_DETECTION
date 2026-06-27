"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { useAppContext } from "@/components/AppContext";
import DiagnosticsRadarLight from "./components/DiagnosticsRadarLight";
import DiagnosticsTerminalLight from "./components/DiagnosticsTerminalLight";

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
    <div ref={containerRef} className="w-full h-full">
      

<header className="fixed top-0 left-0 w-full z-40 flex justify-between items-center px-lg bg-surface/90 backdrop-blur-md h-16 border-b border-outline-variant">
<div className="flex items-center gap-md">
<span className="font-headline-lg text-headline-lg font-bold tracking-tight text-on-surface">CORE INSIGHT</span>
</div>
<nav className="hidden md:flex flex-1 justify-center gap-lg">
<Link href="#" className="text-on-surface-variant font-medium hover:bg-surface-container-high transition-colors duration-150 px-sm py-xs rounded">Real-time</Link>
<Link href="#" className="text-on-surface-variant font-medium hover:bg-surface-container-high transition-colors duration-150 px-sm py-xs rounded">History</Link>
<Link href="#" className="text-on-surface-variant font-medium hover:bg-surface-container-high transition-colors duration-150 px-sm py-xs rounded">Nodes</Link>
</nav>
<div className="flex items-center gap-md">
<button className="bg-[#0f172a] text-[#00f0ff] px-md py-sm rounded border border-transparent hover:border-[#00f0ff] transition-all font-label-caps text-label-caps" >Emergency Shutdown</button>
<button className="text-on-surface-variant hover:bg-surface-container-high p-sm rounded-full transition-colors duration-150">
<span className="material-symbols-outlined" >notifications</span>
</button>
<button className="text-on-surface-variant hover:bg-surface-container-high p-sm rounded-full transition-colors duration-150">
<span className="material-symbols-outlined" >settings</span>
</button>
<div className="w-8 h-8 rounded-full bg-surface-container-high border border-outline-variant flex items-center justify-center overflow-hidden ml-sm cursor-pointer hover:ring-1 ring-primary transition-all">
<img alt="User Profile" className="w-full h-full object-cover" data-alt="Close up professional headshot of an individual, bright natural lighting, modern corporate environment, high resolution." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB43FUUE4RIghnDoatGeh4BfWqHxAVNBP_ZOQZoTOyW636-mIWT2NTwe3ktcct2t1fvR10rfY8foCOtPn0NXpodpWEL_WwLIL2A__xUiWrpi90QUAtyp5GRvm-1jWBpZnqydv43AV0V0UL-6ZgYr_DMFIgfzWbIosActanpOd5qswnY5MzXQ6UQs28Q7nwPaljiIMGVCcF1uvUScRpkTPf8Ex-Y5gHgyBNKv5WuMsyqnBZwle9UBz4EvvNgEHeu17qdM1OYpDQFN4Q"/>
</div>
</div>
</header>

<div className="flex h-screen pt-16">

<aside className="fixed left-0 top-16 h-[calc(100vh-64px)] w-64 z-30 flex flex-col pt-lg pb-xl bg-surface border-r border-outline-variant">
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
<nav className="flex-1 flex flex-col gap-xs px-sm">
<Link href="/dashboard" className="flex items-center gap-md px-md py-sm rounded-r-none text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-all duration-200">
<span className="material-symbols-outlined" >dashboard</span>
<span className="font-label-caps text-label-caps">Overview</span>
</Link>
<Link href="/telemetry" className="flex items-center gap-md px-md py-sm rounded-r-none text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-all duration-200">
<span className="material-symbols-outlined" >analytics</span>
<span className="font-label-caps text-label-caps">Telemetry</span>
</Link>
<Link href="/diagnostics" className="flex items-center gap-md px-md py-sm rounded-r-none bg-secondary-container/20 text-primary border-r-4 border-primary translate-x-1 transition-transform">
<span className="material-symbols-outlined" >biotech</span>
<span className="font-label-caps text-label-caps">Diagnostics</span>
</Link>
<Link href="/simulation-lab" className="flex items-center gap-md px-md py-sm rounded-r-none text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-all duration-200">
<span className="material-symbols-outlined" >science</span>
<span className="font-label-caps text-label-caps">Simulation Lab</span>
</Link>
<Link href="/maintenance-hub" className="flex items-center gap-md px-md py-sm rounded-r-none text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-all duration-200">
<span className="material-symbols-outlined" >engineering</span>
<span className="font-label-caps text-label-caps">Maintenance Hub</span>
</Link>
</nav>
</aside>

<main className="flex-1 ml-64 p-lg overflow-y-auto bg-surface-container-low">
<div className="flex gap-lg h-full">

<DiagnosticsRadarLight />
<DiagnosticsTerminalLight />
</div>
</main>
</div>

    </div>
  );
}
