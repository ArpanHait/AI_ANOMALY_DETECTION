import React from "react";

export default function SensorTrendsLight() {
  return (
    <div
      className="glass-panel flex-grow rounded-xl p-6 flex flex-col"
      style={{ background: "#ffffff", border: "1px solid #dee3e4" }}
    >
      <div className="font-mono text-[11px] font-bold text-on-surface-variant mb-4 uppercase">
        Sensor Trends (24H)
      </div>
      <div className="flex-grow relative bg-surface-container rounded border border-outline-variant overflow-hidden">
        {/* Fake Chart Grid & Content */}
        <div className="absolute inset-0 grid grid-cols-6 grid-rows-4 opacity-20">
          <div className="border-b border-r border-outline-variant"></div>
          <div className="border-b border-r border-outline-variant"></div>
          <div className="border-b border-r border-outline-variant"></div>
          <div className="border-b border-r border-outline-variant"></div>
          <div className="border-b border-r border-outline-variant"></div>
          <div className="border-b border-outline-variant"></div>
          <div className="border-b border-r border-outline-variant"></div>
          <div className="border-b border-r border-outline-variant"></div>
          <div className="border-b border-r border-outline-variant"></div>
          <div className="border-b border-r border-outline-variant"></div>
          <div className="border-b border-r border-outline-variant"></div>
          <div className="border-b border-outline-variant"></div>
          <div className="border-b border-r border-outline-variant"></div>
          <div className="border-b border-r border-outline-variant"></div>
          <div className="border-b border-r border-outline-variant"></div>
          <div className="border-b border-r border-outline-variant"></div>
          <div className="border-b border-r border-outline-variant"></div>
          <div className="border-b border-outline-variant"></div>
          <div className="border-r border-outline-variant"></div>
          <div className="border-r border-outline-variant"></div>
          <div className="border-r border-outline-variant"></div>
          <div className="border-r border-outline-variant"></div>
          <div className="border-r border-outline-variant"></div>
          <div></div>
        </div>
        {/* Safe Band */}
        <div className="absolute top-[40%] bottom-[20%] left-0 right-0 bg-primary/5 border-y border-primary/20"></div>
        {/* Spike Area */}
        <div className="absolute top-0 bottom-[60%] left-[70%] right-[10%] bg-error/10 border-b border-error/30"></div>
        {/* Line */}
        <svg
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            className="drop-shadow-[0_0_3px_rgba(0,105,112,0.3)]"
            d="M0,70 Q10,75 20,65 T40,60 T60,70 T70,20 T80,10 T90,50 T100,55"
            fill="none"
            stroke="#006970"
            strokeWidth="3"
          ></path>
          <path
            className="drop-shadow-[0_0_5px_rgba(186,26,26,0.5)]"
            d="M70,20 T80,10"
            fill="none"
            stroke="#ba1a1a"
            strokeWidth="4"
          ></path>
        </svg>
      </div>
    </div>
  );
}
