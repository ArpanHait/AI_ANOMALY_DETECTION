import React from "react";
import Link from "next/link";
import { useAppContext } from "@/components/AppContext";

export default function LandingHeader() {
  const { theme, setTheme } = useAppContext();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 py-3 md:py-4">
      <div className="max-w-7xl mx-auto glass-panel rounded-full px-4 md:px-6 py-2 md:py-3 flex items-center justify-between">
        <div className="flex items-center gap-1.5 md:gap-2">
          <span
            className="material-symbols-outlined text-primary text-lg md:text-xl"
            style={{ fontVariationSettings: '"FILL" 1' }}
          >
            hexagon
          </span>
          <span className="font-headline font-bold text-lg md:text-xl tracking-tight text-on-surface">
            CoreInsight
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <Link
            className="text-on-surface-variant hover:text-primary transition-colors text-sm font-medium"
            href="#features"
          >
            Features
          </Link>
          <Link
            className="text-on-surface-variant hover:text-primary transition-colors text-sm font-medium"
            href="#technology"
          >
            Technology
          </Link>
          <Link
            className="text-on-surface-variant hover:text-primary transition-colors text-sm font-medium"
            href="#case-studies"
          >
            Case Studies
          </Link>
          <Link
            className="text-on-surface-variant hover:text-primary transition-colors text-sm font-medium"
            href="#pricing"
          >
            Pricing
          </Link>
        </nav>
        <div className="flex items-center gap-3 md:gap-4">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="text-on-surface-variant hover:text-primary transition-colors flex items-center"
            aria-label="Toggle theme"
          >
            <span className="material-symbols-outlined text-lg md:text-xl">
              {theme === "dark" ? "light_mode" : "dark_mode"}
            </span>
          </button>
          <button className="hidden md:block outline-button px-4 py-2 rounded-md text-sm font-medium">
            Log In
          </button>
          <button className="primary-button px-3.5 md:px-5 py-1.5 md:py-2 rounded-md text-xs md:text-sm font-bold shadow-lg shadow-primary/20">
            Request Demo
          </button>
        </div>
      </div>
    </header>
  );
}
