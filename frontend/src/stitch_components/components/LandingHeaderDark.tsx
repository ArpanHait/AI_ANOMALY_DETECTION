import React from "react";
import Link from "next/link";

export default function LandingHeaderDark() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto glass-panel rounded-full px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">hexagon</span>
          <span className="font-headline font-bold text-xl tracking-tight text-on-surface">
            CoreInsight
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="#features"
            className="text-on-surface-variant hover:text-primary transition-colors text-sm font-medium"
          >
            Features
          </Link>
          <Link
            href="#technology"
            className="text-on-surface-variant hover:text-primary transition-colors text-sm font-medium"
          >
            Technology
          </Link>
          <Link
            href="#case-studies"
            className="text-on-surface-variant hover:text-primary transition-colors text-sm font-medium"
          >
            Case Studies
          </Link>
          <Link
            href="#pricing"
            className="text-on-surface-variant hover:text-primary transition-colors text-sm font-medium"
          >
            Pricing
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <button className="hidden md:block outline-button px-4 py-2 rounded-md text-sm font-medium">
            Log In
          </button>
          <button className="primary-button px-5 py-2 rounded-md text-sm font-bold shadow-lg shadow-[#065f46]/20">
            Request Demo
          </button>
        </div>
      </div>
    </header>
  );
}
