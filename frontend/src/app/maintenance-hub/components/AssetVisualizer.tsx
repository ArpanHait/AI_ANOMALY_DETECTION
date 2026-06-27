import React from "react";

export default function AssetVisualizer() {
  return (
    <div
      className="glass-panel rounded-lg h-64 relative overflow-hidden flex items-center justify-center border border-primary/20"
      style={{
        background: "rgba(255, 255, 255, 0.7)",
        backdropFilter: "blur(12px)",
        border: "1px solid rgba(0, 0, 0, 0.05)",
      }}
    >
      {/* Faux 3D Grid Background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#006970 1px, transparent 1px), linear-gradient(90deg, #006970 1px, transparent 1px)",
          backgroundSize: "20px 20px",
          transform: "perspective(500px) rotateX(60deg)",
          transformOrigin: "bottom",
        }}
      ></div>
      <div className="z-10 text-center">
        <span
          className="material-symbols-outlined text-primary text-6xl mb-2"
          style={{ fontVariationSettings: '"FILL" 0, "wght" 200' }}
        >
          precision_manufacturing
        </span>
        <p className="font-mono text-[12px] text-primary tracking-widest font-bold">
          ASSET VISUALIZER OFFLINE
        </p>
      </div>
    </div>
  );
}
