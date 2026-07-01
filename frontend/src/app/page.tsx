"use client";

import React, { useEffect, useRef } from "react";
import { useAppContext } from "@/components/AppContext";
import LandingHeader from "./landing_components/LandingHeader";
import LandingHero from "./landing_components/LandingHero";
import LandingFeatures from "./landing_components/LandingFeatures";
import LandingTechnology from "./landing_components/LandingTechnology";
import LandingCaseStudies from "./landing_components/LandingCaseStudies";
import LandingPricing from "./landing_components/LandingPricing";
import LandingFooter from "./landing_components/LandingFooter";

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme, setTheme } = useAppContext();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width: number, height: number;
    let particles: { x: number; y: number }[] = [];
    const mouse = { x: -1000, y: -1000 };
    const dotSpacing = 32;
    const glowRadius = 150;

    // Fetch colors dynamically based on theme
    const computedStyle = getComputedStyle(document.documentElement);
    const brandColor = computedStyle.getPropertyValue('--particle-glow').trim() || (theme === 'dark' ? '#00e55b' : '#dae2fd');
    const outlineColor = computedStyle.getPropertyValue('--particle-outline').trim() || (theme === 'dark' ? '#3b4b3a' : '#c6c6cd');

    let animationFrameId: number = 0;

    function init() {
      if (window.innerWidth < 768) {
        if (ctx && canvas) {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
        window.addEventListener("resize", resize);
        return;
      }
      resize();
      window.addEventListener("resize", resize);
      window.addEventListener("mousemove", onMouseMove);
      animate();
    }

    function onMouseMove(e: MouseEvent) {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    }

    function resize() {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      
      if (width < 768) {
        if (animationFrameId) {
          cancelAnimationFrame(animationFrameId);
          animationFrameId = 0;
        }
        if (ctx) {
          ctx.clearRect(0, 0, width, height);
        }
        window.removeEventListener("mousemove", onMouseMove);
      } else {
        createParticles();
        window.removeEventListener("mousemove", onMouseMove);
        window.addEventListener("mousemove", onMouseMove);
        if (!animationFrameId) {
          animate();
        }
      }
    }

    function createParticles() {
      particles = [];
      for (let x = 0; x < width; x += dotSpacing) {
        for (let y = 0; y < height; y += dotSpacing) {
          particles.push({ x, y });
        }
      }
    }

    function animate() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < glowRadius) {
          const opacity = 1 - dist / glowRadius;
          ctx.fillStyle = brandColor;
          ctx.globalAlpha = opacity;
          ctx.beginPath();
          ctx.arc(p.x, p.y, 1.5, 0, Math.PI * 2);
          ctx.fill();
        } else {
          ctx.fillStyle = outlineColor;
          ctx.globalAlpha = 0.3;
          ctx.beginPath();
          ctx.arc(p.x, p.y, 1, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    }

    init();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [theme]); // Re-run when theme changes so particles get new colors

  return (
    <div className="bg-background text-on-background min-h-screen selection:bg-primary-container selection:text-on-primary-container font-body">
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-[-1] opacity-40"
        id="particle-canvas"
      ></canvas>

      <LandingHeader />
      <main>
        <LandingHero />
        <LandingFeatures />
        <LandingTechnology />
        <LandingCaseStudies />
        <LandingPricing />
      </main>
      <LandingFooter />
    </div>
  );
}
