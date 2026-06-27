import React from "react";

export default function DiagnosticsTerminalDark() {
  return (
    <section
      className="flex-1 glass-panel flex flex-col overflow-hidden relative border-t border-[#64ffda]/20 border-l border-l-outline-variant/10 rounded-none"
      style={{ background: "rgba(255, 255, 255, 0.03)", backdropFilter: "blur(12px)" }}
    >
      {/* Terminal Header */}
      <div className="px-6 py-4 border-b border-white/5 bg-black/20 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-[#64ffda] drop-shadow-[0_0_4px_rgba(100,255,218,0.4)]">
            terminal
          </span>
          <h2 className="font-body text-[16px] font-semibold text-on-surface">
            AI Diagnostic Terminal
          </h2>
        </div>
        <div className="flex gap-2">
          <span className="w-2 h-2 rounded-full bg-outline-variant"></span>
          <span className="w-2 h-2 rounded-full bg-outline-variant"></span>
          <span className="w-2 h-2 rounded-full bg-[#64ffda] shadow-[inset_0_0_10px_rgba(0,240,255,0.2)]"></span>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
        {/* User Bubble */}
        <div className="flex justify-end w-full">
          <div className="max-w-[70%] bg-surface-variant border border-outline-variant/30 text-on-surface p-4 rounded-xl rounded-tr-sm shadow-lg">
            <p className="font-body text-[14px]">
              Explain the bearing failure drivers.
            </p>
          </div>
        </div>

        {/* AI Assistant Bubble */}
        <div className="flex justify-start w-full">
          <div className="flex gap-4 max-w-[90%] w-full">
            <div className="w-8 h-8 rounded bg-[#64ffda]/10 border border-[#64ffda]/30 flex items-center justify-center shrink-0 mt-1">
              <span
                className="material-symbols-outlined text-[#64ffda] drop-shadow-[0_0_4px_rgba(100,255,218,0.4)] text-sm"
                style={{ fontVariationSettings: '"FILL" 1' }}
              >
                smart_toy
              </span>
            </div>
            <div className="flex flex-col gap-3 w-full">
              <div className="text-on-surface font-body text-[14px] pt-1">
                The anomaly is driven by a 3.2x deviation in{" "}
                <code className="font-mono text-[12px] text-[#64ffda] drop-shadow-[0_0_4px_rgba(100,255,218,0.4)] bg-[#64ffda]/10 px-1 rounded border border-[#64ffda]/20">
                  vibration_rms
                </code>
                .
              </div>

              {/* JSON Code Block */}
              <div className="bg-[#05070A] rounded-lg border border-white/10 overflow-hidden w-full shadow-2xl">
                <div className="flex items-center justify-between px-4 py-2 bg-white/5 border-b border-white/5">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-error/80"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-secondary-container/80"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#64ffda]/80"></div>
                  </div>
                  <span className="font-mono text-[12px] text-outline-variant">
                    payload.json
                  </span>
                  <button className="text-outline hover:text-on-surface transition-colors">
                    <span className="material-symbols-outlined text-sm">
                      content_copy
                    </span>
                  </button>
                </div>
                <div className="p-4 overflow-x-auto">
                  <pre className="font-mono text-[12px] leading-relaxed">
                    <code className="text-on-surface-variant">
                      {`{
  "`}
                      <span className="text-primary">endpoint</span>
                      {`": "`}
                      <span className="text-[#a8e6cf]">/explain</span>
                      {`",
  "`}
                      <span className="text-primary">context</span>
                      {`": "`}
                      <span className="text-[#a8e6cf]">Bearing Failure RCA</span>
                      {`",
  "`}
                      <span className="text-primary">failure_probability</span>
                      {`": `}
                      <span className="text-secondary-container">0.942</span>
                      {`,
  "`}
                      <span className="text-primary">top_failure_features</span>
                      {`": [
    {"`}
                      <span className="text-primary">feature</span>
                      {`": "`}
                      <span className="text-[#a8e6cf]">vibration_rms</span>
                      {`", "`}
                      <span className="text-primary">contribution</span>
                      {`": `}
                      <span className="text-secondary-container">0.65</span>
                      {`},
    {"`}
                      <span className="text-primary">feature</span>
                      {`": "`}
                      <span className="text-[#a8e6cf]">bearing_temp_c</span>
                      {`", "`}
                      <span className="text-primary">contribution</span>
                      {`": `}
                      <span className="text-secondary-container">0.22</span>
                      {`}
  ],
  "`}
                      <span className="text-primary">anomaly_feature_deviations</span>
                      {`": [
    {"`}
                      <span className="text-primary">sensor</span>
                      {`": "`}
                      <span className="text-[#a8e6cf]">vibration_rms</span>
                      {`", "`}
                      <span className="text-primary">expected</span>
                      {`": `}
                      <span className="text-secondary-container">5.2</span>
                      {`, "`}
                      <span className="text-primary">actual</span>
                      {`": `}
                      <span className="text-secondary-container">14.8</span>
                      {`, "`}
                      <span className="text-primary">severity</span>
                      {`": "`}
                      <span className="text-error">CRITICAL</span>
                      {`"}
  ]
}`}
                    </code>
                  </pre>
                </div>
              </div>
              <button className="flex items-center gap-1 font-mono text-[11px] font-bold text-outline hover:text-[#64ffda] hover:drop-shadow-[0_0_4px_rgba(100,255,218,0.4)] transition-colors w-fit uppercase">
                <span className="material-symbols-outlined text-sm">
                  chevron_right
                </span>
                Show Raw Telemetry JSON
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Input Area (Bottom) */}
      <div className="p-4 bg-black/40 border-t border-white/5 backdrop-blur-md shrink-0">
        {/* Context Chips */}
        <div className="flex gap-2 mb-3 overflow-x-auto pb-1">
          <button className="shrink-0 px-3 py-1.5 rounded-full border border-[#64ffda]/30 bg-[#64ffda]/5 text-[#64ffda] drop-shadow-[0_0_4px_rgba(100,255,218,0.4)] hover:bg-[#64ffda]/10 font-mono text-[11px] font-bold uppercase transition-colors flex items-center gap-1">
            <span className="material-symbols-outlined text-[14px]">
              auto_awesome
            </span>
            Analyze Valve Blockage
          </button>
          <button className="shrink-0 px-3 py-1.5 rounded-full border border-outline-variant/50 bg-white/5 text-on-surface-variant hover:bg-white/10 font-mono text-[11px] font-bold uppercase transition-colors flex items-center gap-1">
            <span className="material-symbols-outlined text-[14px]">
              data_object
            </span>
            Show Bearing Data JSON
          </button>
        </div>

        {/* Input Bar */}
        <div className="relative flex items-center">
          <input
            className="w-full bg-[#0A0E17]/80 border border-outline-variant/30 rounded-lg pl-4 pr-12 py-3 font-body text-[14px] text-on-surface focus:outline-none focus:border-[#64ffda] focus:ring-1 focus:ring-[#64ffda]/50 transition-all shadow-inner"
            placeholder="Query the RCA, run predictions, or ask for raw JSON..."
            type="text"
          />
          <button className="absolute right-2 w-8 h-8 rounded bg-[#64ffda] text-black flex items-center justify-center hover:bg-primary transition-colors shadow-[0_0_10px_rgba(0,240,255,0.4)]">
            <span
              className="material-symbols-outlined text-sm"
              style={{ fontVariationSettings: '"FILL" 1' }}
            >
              send
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
