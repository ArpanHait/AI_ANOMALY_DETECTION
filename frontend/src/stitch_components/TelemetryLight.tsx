"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { useAppContext } from "@/components/AppContext";
import TelemetryChartsLight from "./components/TelemetryChartsLight";
import TelemetryStatsLight from "./components/TelemetryStatsLight";

export default function TelemetryLight() {
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
      

<nav className="h-screen w-64 fixed left-0 top-0 bg-surface-container-lowest border-r border-outline-variant flex flex-col py-gutter px-4 z-50">
<div className="mb-8 mt-4">
<h1 className="font-headline-lg text-headline-lg font-bold text-on-surface tracking-tighter">CORE<div className="">INSIGHT</div></h1>
<p className="font-data-sm text-data-sm text-on-surface-variant mt-1 opacity-70">V.4.0 ONLINE</p>
</div>
<div className="flex-grow space-y-2">
<Link href="/dashboard" className="flex items-center space-x-3 p-3 rounded text-on-surface-variant font-medium font-label-caps text-label-caps hover:bg-surface-variant hover:text-on-surface transition-all">
<span className="material-symbols-outlined mr-3" data-icon="dashboard">dashboard</span>
<span className="">Overview</span>
</Link>
<Link href="/telemetry" className="flex items-center space-x-3 p-3 rounded text-primary bg-primary-container/30 border-l-2 border-primary font-bold font-label-caps text-label-caps scale-95 duration-100">
<span className="material-symbols-outlined mr-3" data-icon="analytics" >analytics</span>
<span className="">Live Telemetry</span>
</Link>
<Link href="/diagnostics" className="flex items-center space-x-3 p-3 rounded text-on-surface-variant font-medium font-label-caps text-label-caps hover:bg-surface-variant hover:text-on-surface transition-all">
<span className="material-symbols-outlined mr-3" data-icon="query_stats">query_stats</span>
<span className="">Diagnostics</span>
</Link>
<Link href="/simulation-lab" className="flex items-center space-x-3 p-3 rounded text-on-surface-variant font-medium font-label-caps text-label-caps hover:bg-surface-variant hover:text-on-surface transition-all">
<span className="material-symbols-outlined mr-3" data-icon="science">science</span>
<span className="">Simulation Lab</span>
</Link>
<Link href="/maintenance-hub" className="flex items-center space-x-3 p-3 rounded text-on-surface-variant font-medium font-label-caps text-label-caps hover:bg-surface-variant hover:text-on-surface transition-all">
<span className="material-symbols-outlined mr-3" data-icon="build">build</span>
<span className="">Maintenance Hub</span>
</Link>
</div>
<div className="mt-auto pt-4 border-t border-outline-variant">
<button className="w-full mb-4 bg-primary text-on-primary font-label-caps text-label-caps py-3 rounded hover:bg-on-primary-fixed-variant transition-colors">
                GENERATE REPORT
            </button>
<div className="flex flex-col space-y-2">
<Link href="#" className="flex items-center space-x-3 p-2 rounded text-on-surface-variant font-medium font-label-caps text-label-caps hover:bg-surface-variant hover:text-on-surface transition-all">
<span className="material-symbols-outlined mr-2" data-icon="terminal">terminal</span>
<span className="">System Logs</span>
</Link>
<Link href="#" className="flex items-center space-x-3 p-2 rounded text-on-surface-variant font-medium font-label-caps text-label-caps hover:bg-surface-variant hover:text-on-surface transition-all">
<span className="material-symbols-outlined mr-2" data-icon="settings">settings</span>
<span className="">Settings</span>
</Link>
</div>
<div className="mt-4 flex items-center space-x-2 text-data-sm font-data-sm text-on-surface-variant">
<div className="w-8 h-8 rounded-full bg-surface-container border border-outline-variant overflow-hidden mr-2">
<img alt="System Operator" data-alt="A close-up portrait of a professional system operator in a dimly lit, high-tech command center. Subtle blue ambient light from large monitors reflects off his face, highlighting a focused and serious expression. He is wearing a dark, technical polo shirt with a small corporate logo. The style is cinematic with a shallow depth of field, emphasizing industrial expertise and digital oversight." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDB4_qK8TJkgY-LEMRr5m41Ab1q4UdiOaX-RAYJb5EfwIXfdYgebMfmJwo8AYSK77gmCFOUlH3LjPEpOXCXhFcV5dX5BxWNzvHwRC6dKBDsP4yLo8Cwm2QGURpk4-zA9FPWWL4aq_0fpTwpZ5LbYODssBs1JnYLvrpHfuTammv4W43n6j_2raFXUGsRTnaP9F1gSG2AXDuvrnkgX64HRuJlhDQ-qSO983ll65qOdU24tuCzmWEBcC3xNVPZxVL2IKJjzEI2dvpbrQw" className="" />
</div>
<div className="flex flex-col">
<span className="text-on-surface font-bold">Operator 01</span>
<span className="text-[10px] opacity-70">LEVEL 4 CLEARANCE</span>
</div>
</div>
</div>
</nav>

<header className="fixed top-0 left-64 h-16 bg-white/95 backdrop-blur-sm border-b border-outline-variant flex items-center justify-between px-6 z-40 transition-all duration-200" >
    
    <div className="flex flex-col">
        <h2 className="font-label-caps text-[18px] font-bold text-[#006970] tracking-tight leading-none uppercase">Insight Monitor</h2>
    </div>

    
    <nav className="hidden md:flex space-x-8 font-label-caps text-[11px] absolute left-1/2 -translate-x-1/2 items-center h-full">
        <Link href="#" className="text-primary border-b-2 border-primary h-full flex items-center px-1 font-bold">Real-time</Link>
        <Link href="#" className="text-on-surface-variant hover:text-primary transition-colors h-full flex items-center px-1">History</Link>
        <Link href="#" className="text-on-surface-variant hover:text-primary transition-colors h-full flex items-center px-1">Nodes</Link>
    </nav>

    
    <div className="flex items-center space-x-4">
        <button className="bg-[#fee2e2] border border-[#fca5a5] text-[#991b1b] font-label-caps text-[10px] px-4 py-1.5 rounded-sm hover:bg-red-200 transition-colors uppercase font-bold tracking-wider">
            EMERGENCY SHUTDOWN
        </button>
        <div className="flex items-center space-x-3 text-on-surface-variant">
            <button className="hover:text-primary transition-colors p-1">
                <span className="material-symbols-outlined text-[20px]" data-icon="dark_mode">dark_mode</span>
            </button>
            <button className="hover:text-primary transition-colors p-1 relative">
                <span className="material-symbols-outlined text-[20px]" data-icon="notifications">notifications</span>
                <span className="absolute top-1 right-1 w-1.5 h-1.5 bg-error rounded-full"></span>
            </button>
            <button className="hover:text-primary transition-colors p-1">
                <span className="material-symbols-outlined text-[22px]" data-icon="account_circle">account_circle</span>
            </button>
        </div>
    </div>
</header>

<main className="mt-16 p-6 h-[calc(100vh-64px)] overflow-hidden flex flex-col gap-6 w-full" >

<div className="glass-panel flex items-center justify-between px-6 py-4 rounded-xl">
<div className="flex items-center gap-4">
<div className="px-3 py-1 bg-primary-container/30 border border-primary-container rounded">
<span className="font-label-caps text-[12px] text-primary tracking-widest uppercase">ASSET ID: ST-049</span>
</div>
<span className="text-outline-variant font-medium">|</span>
<span className="font-headline-md text-body-lg text-on-surface font-semibold">Motor Array Beta</span>
</div>
<div className="flex items-center gap-6">
<div className="flex bg-surface-container rounded p-1 border border-outline-variant">
<button className="px-3 py-1 font-label-caps text-[10px] text-on-surface-variant hover:text-on-surface rounded">1 MIN</button>
<button className="px-3 py-1 font-label-caps text-[10px] text-on-surface-variant hover:text-on-surface rounded">5 MIN</button>
<button className="px-3 py-1 font-label-caps text-[10px] text-on-surface-variant hover:text-on-surface rounded">1 HOUR</button>
<button className="px-3 py-1 font-label-caps text-[10px] text-primary bg-surface shadow-sm rounded border border-outline-variant">LIVE</button>
</div>
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_rgba(0,105,112,0.5)]"></span>
<span className="font-label-caps text-[11px] text-primary font-bold">LIVE STREAM: ON</span>
</div>
<button className="flex items-center gap-2 px-4 py-2 border border-outline-variant rounded hover:bg-surface-variant transition-all font-label-caps text-[11px] text-on-surface-variant">
<span className="material-symbols-outlined text-[16px]" data-icon="download">download</span>
                    EXPORT CSV
                </button>
</div>
</div>

<TelemetryChartsLight />
<TelemetryStatsLight />
</main>







    </div>
  );
}
