import React from "react";

export default function AssetVisualizerDark() {
  return (
    <div
      className="glass-panel rounded-lg h-64 relative overflow-hidden flex items-center justify-center border border-[#64ffda]/20"
      style={{
        background: "rgba(255, 255, 255, 0.03)",
        backdropFilter: "blur(12px)",
        border: "1px solid rgba(255, 255, 255, 0.08)",
      }}
    >
      {/* Faux 3D Grid Background */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(#64ffda 1px, transparent 1px), linear-gradient(90deg, #64ffda 1px, transparent 1px)",
          backgroundSize: "20px 20px",
          transform: "perspective(500px) rotateX(60deg)",
          transformOrigin: "bottom",
        }}
      ></div>
      <div className="z-10 text-center">
        <span
          className="material-symbols-outlined text-[#64ffda] drop-shadow-[0_0_4px_rgba(100,255,218,0.4)] text-6xl mb-2"
          style={{ fontVariationSettings: '"FILL" 0, "wght" 200' }}
        >
          precision_manufacturing
        </span>
        <p className="font-mono text-[12px] text-[#64ffda] tracking-widest font-bold">
          ASSET VISUALIZER OFFLINE
        </p>
      </div>
    </div>
  );
}
