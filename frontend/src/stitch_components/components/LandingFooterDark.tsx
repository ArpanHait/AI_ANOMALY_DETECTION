import React from "react";
import Link from "next/link";

export default function LandingFooterDark() {
  return (
    <>
      <section className="py-24 border-t border-outline-variant/30">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-headline text-4xl md:text-5xl font-bold mb-6 text-on-surface tracking-tight">
            Ready to eliminate unplanned downtime?
          </h2>
          <p className="text-lg text-on-surface-variant mb-10 font-body">
            Join the industry leaders trusting CoreInsight to secure their operational
            continuity.
          </p>
          <button className="primary-button px-10 py-5 rounded-lg font-bold text-lg inline-flex items-center justify-center gap-3 shadow-lg shadow-[#065f46]/20 hover:scale-[1.02] transition-transform">
            Start Your Free Pilot
            <span className="material-symbols-outlined">rocket_launch</span>
          </button>
        </div>
      </section>

      <footer className="border-t border-outline-variant/30 bg-surface-container-lowest py-12">
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
            <Link href="#" className="hover:text-primary transition-colors">
              About
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              Privacy
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              Terms
            </Link>
          </nav>
          <div className="flex gap-4 text-on-surface-variant">
            <Link href="#" className="hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-xl">language</span>
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-xl">share</span>
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
