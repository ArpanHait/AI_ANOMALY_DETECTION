"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { useAppContext } from "@/components/AppContext";
import ParameterConfiguration from "./components/ParameterConfiguration";
import SimulatedProjection from "./components/SimulatedProjection";
import SimResultsPanel from "./components/SimResultsPanel";
import SimEngineStats from "./components/SimEngineStats";

export default function SimulationDark() {
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
      

<aside className="h-screen w-[15%] fixed left-0 top-0 bg-surface-container-lowest/30 backdrop-blur-xl border-r border-outline-variant/10 flex flex-col py-gutter px-4 z-50">
<div className="mb-10">
<h1 className="font-headline-lg text-headline-lg font-bold text-primary-container tracking-tighter">CORE<div className="">INSIGHT</div></h1>
<p className="font-label-caps text-label-caps text-on-surface-variant mt-1">V.4.0 ONLINE</p>
</div>
<nav className="flex-grow space-y-1">
<Link href="/dashboard" className="flex items-center px-3 py-3 font-medium text-on-surface-variant hover:bg-surface-variant/20 hover:text-primary transition-all active:scale-95 duration-100 group">
<span className="material-symbols-outlined mr-3 text-[20px]" data-icon="dashboard">dashboard</span>
<span className="font-label-caps text-label-caps">Overview</span>
</Link>
<Link href="/telemetry" className="flex items-center px-3 py-3 font-medium text-on-surface-variant hover:bg-surface-variant/20 hover:text-primary transition-all active:scale-95 duration-100 group">
<span className="material-symbols-outlined mr-3 text-[20px]" data-icon="analytics">analytics</span>
<span className="font-label-caps text-label-caps">Live Telemetry</span>
</Link>
<Link href="/diagnostics" className="flex items-center px-3 py-3 font-medium text-on-surface-variant hover:bg-surface-variant/20 hover:text-primary transition-all active:scale-95 duration-100 group">
<span className="material-symbols-outlined mr-3 text-[20px]" data-icon="query_stats">query_stats</span>
<span className="font-label-caps text-label-caps">Diagnostics</span>
</Link>
<Link href="/simulation-lab" className="flex items-center px-3 py-3 text-primary-container bg-primary-container/10 border-l-2 border-primary-container font-bold active:scale-95 duration-100 group">
<span className="material-symbols-outlined mr-3 text-[20px]" data-icon="science" >science</span>
<span className="font-label-caps text-label-caps">Simulation Lab</span>
</Link>
<Link href="/maintenance-hub" className="flex items-center px-3 py-3 font-medium text-on-surface-variant hover:bg-surface-variant/20 hover:text-primary transition-all active:scale-95 duration-100 group">
<span className="material-symbols-outlined mr-3 text-[20px]" data-icon="build">build</span>
<span className="font-label-caps text-label-caps">Maintenance Hub</span>
</Link>
</nav>
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
</aside>

<header className="fixed top-0 left-[15%] right-0 h-16 bg-surface/10 backdrop-blur-md border-b border-outline-variant/5 flex items-center justify-between px-margin-desktop z-40">
<div className="flex items-center gap-8">
<h2 className="font-headline-md text-headline-md font-bold text-primary-container">INSIGHT MONITOR</h2>
<div className="flex gap-6 mx-auto">
<Link href="#" className="font-label-caps text-label-caps text-primary-container border-b-2 border-primary-container pb-1 transition-all duration-200 ease-in-out">Real-time</Link>
<Link href="#" className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-all duration-200 ease-in-out">History</Link>
<Link href="#" className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-all duration-200 ease-in-out">Nodes</Link>
</div>
</div>
<div className="flex items-center gap-6">
<button className="bg-error-container/20 text-error border border-error/30 px-4 py-2 font-label-caps text-label-caps hover:bg-error-container/40 transition-colors">
                EMERGENCY SHUTDOWN
            </button>
<div className="flex items-center gap-4 text-on-surface-variant">
<span className="material-symbols-outlined cursor-pointer hover:text-primary" data-icon="notifications">notifications</span>
<span className="material-symbols-outlined cursor-pointer hover:text-primary" data-icon="account_circle">account_circle</span>
</div>
</div>
</header>

<main className="ml-[15%] mt-16 h-[calc(100vh-64px)] bg-surface overflow-y-auto">
<div className="p-margin-desktop space-y-gutter">
<div className="grid grid-cols-12 gap-gutter">

<ParameterConfiguration />

<div className="col-span-12 lg:col-span-8 space-y-gutter">
<SimulatedProjection />
<SimResultsPanel />
</div>
</div>

<SimEngineStats />
</div>
</main>

<div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 overflow-hidden">
<div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]"></div>
<div className="absolute bottom-[10%] right-[5%] w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px]"></div>
</div>





    </div>
  );
}
