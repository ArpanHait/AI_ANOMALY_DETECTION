import React from "react";

export default function DiagnosticTerminal() {
  return (
    <section className="w-full md:w-auto flex-1 bg-surface-container flex flex-col overflow-hidden relative border-t-2 border-primary border-l-0 md:border-l border-l-outline-variant min-h-[450px] md:min-h-0">
      {/* Terminal Header */}
      <div className="px-6 py-4 border-b border-outline-variant bg-[#ffffff] flex items-center justify-between shrink-0">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-primary">terminal</span>
          <h2 className="font-body text-[16px] font-bold text-on-surface">
            AI Diagnostic Terminal
          </h2>
        </div>
        <div className="flex gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-outline-variant"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-outline-variant"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_4px_rgba(0,105,112,0.5)]"></span>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
        {/* User Bubble */}
        <div className="flex justify-end w-full">
          <div className="max-w-[70%] bg-[#ffffff] border border-[#dee3e4] shadow-[0_1px_3px_rgba(0,0,0,0.05)] text-on-surface p-4 rounded-xl rounded-tr-sm">
            <p className="font-body text-[14px]">
              Explain the bearing failure drivers.
            </p>
          </div>
        </div>

        {/* AI Assistant Bubble */}
        <div className="flex justify-start w-full">
          <div className="flex gap-4 max-w-[90%] w-full">
            <div className="w-8 h-8 rounded bg-primary-container text-on-primary-container border border-primary/30 flex items-center justify-center shrink-0 mt-1">
              <span
                className="material-symbols-outlined text-sm"
                style={{ fontVariationSettings: '"FILL" 1' }}
              >
                smart_toy
              </span>
            </div>
            <div className="flex flex-col gap-3 w-full">
              <div className="text-on-surface font-body text-[14px] pt-1">
                The anomaly is driven by a 3.2x deviation in{" "}
                <code className="font-mono text-[12px] text-primary bg-primary-container px-1 rounded border border-primary/20">
                  vibration_rms
                </code>
                .
              </div>

              {/* JSON Code Block */}
              <div className="bg-[#ffffff] rounded-lg border border-[#dee3e4] overflow-hidden w-full shadow-lg">
                <div className="flex items-center justify-between px-4 py-2 bg-surface-container-low border-b border-outline-variant">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-error/80"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-secondary/80"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-primary/80"></div>
                  </div>
                  <span className="font-mono text-[12px] text-on-surface-variant font-bold">
                    payload.json
                  </span>
                  <button className="text-outline hover:text-on-surface transition-colors">
                    <span className="material-symbols-outlined text-sm">
                      content_copy
                    </span>
                  </button>
                </div>
                <div className="p-4 overflow-x-auto bg-[#f8f9fa]">
                  <pre className="font-mono text-[12px] leading-relaxed">
                    <code className="text-[#333333]">
                      {`{
  "`}
                      <span className="text-primary">endpoint</span>
                      {`": "`}
                      <span className="text-[#008000]">/explain</span>
                      {`",
  "`}
                      <span className="text-primary">context</span>
                      {`": "`}
                      <span className="text-[#008000]">Bearing Failure RCA</span>
                      {`",
  "`}
                      <span className="text-primary">failure_probability</span>
                      {`": `}
                      <span className="text-secondary">0.942</span>
                      {`,
  "`}
                      <span className="text-primary">top_failure_features</span>
                      {`": [
    {"`}
                      <span className="text-primary">feature</span>
                      {`": "`}
                      <span className="text-[#008000]">vibration_rms</span>
                      {`", "`}
                      <span className="text-primary">contribution</span>
                      {`": `}
                      <span className="text-secondary">0.65</span>
                      {`},
    {"`}
                      <span className="text-primary">feature</span>
                      {`": "`}
                      <span className="text-[#008000]">bearing_temp_c</span>
                      {`", "`}
                      <span className="text-primary">contribution</span>
                      {`": `}
                      <span className="text-secondary">0.22</span>
                      {`}
  ],
  "`}
                      <span className="text-primary">anomaly_feature_deviations</span>
                      {`": [
    {"`}
                      <span className="text-primary">sensor</span>
                      {`": "`}
                      <span className="text-[#008000]">vibration_rms</span>
                      {`", "`}
                      <span className="text-primary">expected</span>
                      {`": `}
                      <span className="text-secondary">5.2</span>
                      {`, "`}
                      <span className="text-primary">actual</span>
                      {`": `}
                      <span className="text-secondary">14.8</span>
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
              <button className="flex items-center gap-1 font-mono text-[11px] font-bold text-outline hover:text-primary transition-colors w-fit uppercase">
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
      <div className="p-4 bg-[#ffffff] border-t border-outline-variant shrink-0 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
        {/* Context Chips */}
        <div className="flex gap-2 mb-3 overflow-x-auto pb-1">
          <button className="shrink-0 px-3 py-1.5 rounded-full border border-primary bg-primary-container text-on-primary-container hover:bg-primary-container/80 font-mono text-[11px] font-bold uppercase transition-colors flex items-center gap-1">
            <span className="material-symbols-outlined text-[14px]">
              auto_awesome
            </span>
            Analyze Valve Blockage
          </button>
          <button className="shrink-0 px-3 py-1.5 rounded-full border border-outline-variant bg-surface-container text-on-surface hover:bg-surface-container-high font-mono text-[11px] font-bold uppercase transition-colors flex items-center gap-1">
            <span className="material-symbols-outlined text-[14px]">
              data_object
            </span>
            Show Bearing Data JSON
          </button>
        </div>

        {/* Input Bar */}
        <div className="relative flex items-center">
          <input
            className="w-full bg-[#f4f9f9] border border-outline-variant rounded-lg pl-4 pr-12 py-3 font-body text-[14px] text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all shadow-inner"
            placeholder="Query the RCA, run predictions, or ask for raw JSON..."
            type="text"
          />
          <button className="absolute right-2 w-8 h-8 rounded bg-primary text-on-primary flex items-center justify-center hover:bg-primary-fixed-variant transition-colors">
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
