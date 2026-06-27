import React from "react";

export default function LandingFooter() {
  return (
    <footer className="border-t border-outline-variant/30 bg-surface-container-low py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-on-surface-variant">
            hexagon
          </span>
          <span className="font-headline font-bold tracking-tight text-on-surface-variant">
            CoreInsight
          </span>
        </div>
        <nav className="flex gap-6 text-sm text-on-surface-variant">
          <a className="hover:text-primary transition-colors" href="#">
            About
          </a>
          <a className="hover:text-primary transition-colors" href="#">
            Privacy
          </a>
          <a className="hover:text-primary transition-colors" href="#">
            Terms
          </a>
        </nav>
        <div className="flex gap-4 text-on-surface-variant">
          <a className="hover:text-primary transition-colors" href="#">
            <span className="material-symbols-outlined text-xl">language</span>
          </a>
          <a className="hover:text-primary transition-colors" href="#">
            <span className="material-symbols-outlined text-xl">share</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
