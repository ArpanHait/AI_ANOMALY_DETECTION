import React from "react";

export default function SensorTrendsDark() {
  return (
    <div className="glass-panel flex-grow rounded-xl p-6 flex flex-col">
      <div className="font-label-caps text-label-caps text-on-surface-variant mb-4 uppercase">
        Sensor Trends (24H)
      </div>
      <div className="flex-grow relative bg-surface-container-low/50 rounded border border-outline-variant/20 overflow-hidden">
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

        <div className="absolute top-[40%] bottom-[20%] left-0 right-0 bg-primary-container/5 border-y border-primary-container/20"></div>

        <div className="absolute top-0 bottom-[60%] left-[70%] right-[10%] bg-error/10 border-b border-error/30"></div>

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
          />
          <path
            className="drop-shadow-[0_0_8px_rgba(255,180,171,0.8)]"
            d="M70,20 T80,10"
            fill="none"
            stroke="#ffb4ab"
            strokeWidth="3"
          />
        </svg>
      </div>
    </div>
  );
}
