"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BottomNavbar() {
  const pathname = usePathname();

  const navItems = [
    { label: "Overview", icon: "dashboard", href: "/dashboard" },
    { label: "Telemetry", icon: "analytics", href: "/telemetry" },
    { label: "Diagnostics", icon: "query_stats", href: "/diagnostics" },
    { label: "Simulation", icon: "science", href: "/simulation-lab" },
    { label: "Maintenance", icon: "build", href: "/maintenance-hub" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 h-16 bg-white/80 dark:bg-[#0A0E17]/80 backdrop-blur-md border-t border-black/5 dark:border-white/5 flex justify-around items-center z-50 md:hidden px-2 shadow-[0_-4px_12px_rgba(0,0,0,0.03)]">
      {navItems.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex flex-col items-center justify-center flex-1 h-full py-2 transition-all duration-200 ${
              isActive
                ? "text-primary dark:text-[#64ffda] scale-105 font-bold"
                : "text-on-surface-variant/70 hover:text-primary dark:hover:text-[#64ffda]"
            }`}
          >
            <span
              className="material-symbols-outlined text-[22px] mb-0.5"
              style={{ fontVariationSettings: isActive ? '"FILL" 1' : undefined }}
            >
              {item.icon}
            </span>
            <span className="text-[10px] font-mono font-bold tracking-tighter truncate max-w-full">
              {item.label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
