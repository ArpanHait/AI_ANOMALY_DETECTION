import React from "react";

export default function SensorTrendsDark() {
  return (
    <div
      className="glass-panel flex-grow rounded-xl p-6 flex flex-col min-h-[250px] md:min-h-0"
      style={{
        background: "rgba(255, 255, 255, 0.03)",
        backdropFilter: "blur(12px)",
        border: "1px solid rgba(255, 255, 255, 0.08)",
      }}
    >
      <div className="font-mono text-[11px] font-bold text-on-surface-variant mb-4 uppercase">
        Sensor Trends (24H)
      </div>
      <div className="flex-grow relative bg-surface-container-low/50 rounded border border-outline-variant/20 overflow-hidden">
        {/* Fake Chart Grid & Content */}
        <div className="absolute inset-0 grid grid-cols-6 grid-rows-4 opacity-10">
          <div className="border-b border-r border-white"></div>
          <div className="border-b border-r border-white"></div>
          <div className="border-b border-r border-white"></div>
          <div className="border-b border-r border-white"></div>
          <div className="border-b border-r border-white"></div>
          <div className="border-b border-white"></div>
          <div className="border-b border-r border-white"></div>
          <div className="border-b border-r border-white"></div>
          <div className="border-b border-r border-white"></div>
          <div className="border-b border-r border-white"></div>
          <div className="border-b border-r border-white"></div>
          <div className="border-b border-white"></div>
          <div className="border-b border-r border-white"></div>
          <div className="border-b border-r border-white"></div>
          <div className="border-b border-r border-white"></div>
          <div className="border-b border-r border-white"></div>
          <div className="border-b border-r border-white"></div>
          <div className="border-b border-white"></div>
          <div className="border-r border-white"></div>
          <div className="border-r border-white"></div>
          <div className="border-r border-white"></div>
          <div className="border-r border-white"></div>
          <div className="border-r border-white"></div>
          <div></div>
        </div>
        {/* Safe Band */}
        <div className="absolute top-[40%] bottom-[20%] left-0 right-0 bg-[#64ffda]/5 border-y border-[#64ffda]/20"></div>
        {/* Spike Area */}
        <div className="absolute top-0 bottom-[60%] left-[70%] right-[10%] bg-error/10 border-b border-error/30"></div>
        {/* Line */}
        <svg
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            className="drop-shadow-[0_0_5px_rgba(0,240,255,0.5)]"
            d="M0,70 Q10,75 20,65 T40,60 T60,70 T70,20 T80,10 T90,50 T100,55"
            fill="none"
            stroke="#00f0ff"
            strokeWidth="2"
          ></path>
          <path
            className="drop-shadow-[0_0_8px_rgba(255,180,171,0.8)]"
            d="M70,20 T80,10"
            fill="none"
            stroke="#ffb4ab"
            strokeWidth="3"
          ></path>
        </svg>
      </div>
    </div>
  );
}
