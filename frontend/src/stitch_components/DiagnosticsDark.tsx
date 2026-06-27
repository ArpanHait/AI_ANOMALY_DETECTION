"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { useAppContext } from "@/components/AppContext";
import DiagnosticsRadarDark from "./components/DiagnosticsRadarDark";
import DiagnosticsTerminalDark from "./components/DiagnosticsTerminalDark";

export default function DiagnosticsDark() {
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
      

<nav className="hidden md:flex flex-col h-full py-6 bg-surface-container-low dark:bg-surface-container-low/40 backdrop-blur-xl docked left-0 h-screen w-64 border-r border-outline-variant/10 z-40">
<div className="px-margin-desktop mb-8 flex items-center gap-4"><div className="flex flex-col gap-1"><h1 className="font-headline-md text-[28px] leading-none font-black text-primary-container tracking-tight">CORE<br/>INSIGHT</h1><p className="font-label-caps text-[10px] text-on-surface-variant/70 uppercase tracking-widest">V.4.0 ONLINE</p></div></div>
<div className="flex-1 flex flex-col gap-2 px-2 overflow-y-auto scrollbar-hide"><Link href="/dashboard" className="flex items-center gap-4 text-on-surface-variant px-4 py-3 opacity-70 hover:bg-primary-container/5 hover:opacity-100 transition-all duration-200 hover:translate-x-1 rounded-lg"><span className="material-symbols-outlined">grid_view</span><span className="font-label-caps text-label-caps uppercase">Overview</span></Link><Link href="/telemetry" className="flex items-center gap-4 text-on-surface-variant px-4 py-3 opacity-70 hover:bg-primary-container/5 hover:opacity-100 transition-all duration-200 hover:translate-x-1 rounded-lg"><span className="material-symbols-outlined">show_chart</span><span className="font-label-caps text-label-caps uppercase">Live Telemetry</span></Link><Link href="/diagnostics" className="flex items-center gap-4 bg-[#00f0ff]/10 text-primary-container px-4 py-3 border-l-[3px] border-[#00f0ff] shadow-[inset_4px_0_15px_-4px_rgba(0,240,255,0.4)] transition-all duration-200 rounded-r-sm"><span className="material-symbols-outlined text-xl">query_stats</span><span className="font-label-caps text-label-caps uppercase">Diagnostics</span></Link><Link href="/simulation-lab" className="flex items-center gap-4 text-on-surface-variant px-4 py-3 opacity-70 hover:bg-primary-container/5 hover:opacity-100 transition-all duration-200 hover:translate-x-1 rounded-lg"><span className="material-symbols-outlined">science</span><span className="font-label-caps text-label-caps uppercase">Simulation Lab</span></Link><Link href="/maintenance-hub" className="flex items-center gap-4 text-on-surface-variant px-4 py-3 opacity-70 hover:bg-primary-container/5 hover:opacity-100 transition-all duration-200 hover:translate-x-1 rounded-lg"><span className="material-symbols-outlined">build</span><span className="font-label-caps text-label-caps uppercase">Maintenance Hub</span></Link></div>
<div className="mt-auto px-4 pt-6 border-t border-outline-variant/10 flex flex-col gap-4">
<button className="w-full py-3 bg-[#00f0ff] text-black font-label-caps text-label-caps uppercase font-bold rounded-sm shadow-[0_0_20px_rgba(0,240,255,0.2)] hover:brightness-110 transition-all">
        Generate Report
    </button>
<div className="flex flex-col gap-1">
<Link href="#" className="flex items-center gap-3 text-on-surface-variant/60 py-2 hover:text-on-surface transition-colors">
<span className="material-symbols-outlined text-lg">terminal</span>
<span className="font-label-caps text-label-caps uppercase text-[10px]">System Logs</span>
</Link>
<Link href="#" className="flex items-center gap-3 text-on-surface-variant/60 py-2 hover:text-on-surface transition-colors">
<span className="material-symbols-outlined text-lg">settings</span>
<span className="font-label-caps text-label-caps uppercase text-[10px]">Settings</span>
</Link>
</div>
<div className="flex items-center gap-3 py-4 border-t border-outline-variant/5"><span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff] shadow-[0_0_8px_rgba(0,240,255,0.8)]"></span><div className="flex flex-col"><span className="font-label-caps text-[10px] text-on-surface-variant/60 uppercase tracking-tighter">System Status:</span><span className="font-label-caps text-[10px] text-on-surface-variant/60 uppercase tracking-tighter">Online</span></div></div>
</div>
</nav>

<div className="flex-1 flex flex-col h-full overflow-hidden relative">

<header className="flex justify-between items-center w-full bg-surface-container dark:bg-surface-container/30 backdrop-blur-xl docked full-width top-0 z-50 h-16 border-b border-outline-variant/20 absolute px-6" ><div className="flex items-center gap-8">
<div className="flex items-center">
<h1 className="text-primary-container font-black tracking-widest text-lg" >INSIGHT MONITOR</h1>
</div>
<nav className="flex items-center gap-6">
<Link href="#" className="relative text-primary-container font-bold text-xs uppercase tracking-wider py-1">
      Real-time
      <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary-container"></span>
</Link>
<Link href="#" className="text-on-surface-variant hover:text-on-surface transition-colors font-bold text-xs uppercase tracking-wider">History</Link>
<Link href="#" className="text-on-surface-variant hover:text-on-surface transition-colors font-bold text-xs uppercase tracking-wider">Nodes</Link>
</nav>
</div>
<div className="flex items-center gap-4">
<button className="px-4 py-1 border border-[#441d1d] bg-[#1a0a0a] text-[#ffb4ab] font-bold text-[10px] uppercase tracking-[0.2em] rounded-sm hover:bg-[#2a1111] transition-colors">
    EMERGENCY SHUTDOWN
  </button>
<div className="flex items-center gap-1 ml-4">
<button className="w-9 h-9 flex items-center justify-center text-on-surface-variant hover:text-on-surface">
<span className="material-symbols-outlined text-[20px]">dark_mode</span>
</button>
<button className="w-9 h-9 flex items-center justify-center text-on-surface-variant hover:text-on-surface">
<span className="material-symbols-outlined text-[20px]">notifications</span>
</button>
<button className="w-9 h-9 flex items-center justify-center text-on-surface-variant hover:text-on-surface">
<span className="material-symbols-outlined text-[20px]">account_circle</span>
</button>
</div>
</div></header>

<main className="flex-1 mt-16 flex overflow-hidden max-h-[calc(100vh-64px)]">

<DiagnosticsRadarDark />
<DiagnosticsTerminalDark />
</main>
</div>

    </div>
  );
}
