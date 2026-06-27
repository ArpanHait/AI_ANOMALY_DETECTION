import React from "react";

export default function DiagnosticsTerminalDark() {
  return (
    <section className="flex-1 glass-panel flex flex-col overflow-hidden relative border-t border-primary-container/20">
      <div className="px-6 py-4 border-b border-white/5 bg-black/20 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-primary-container">
            terminal
          </span>
          <h2 className="font-body-lg text-body-lg font-semibold text-on-surface">
            AI Diagnostic Terminal
          </h2>
        </div>
        <div className="flex gap-2">
          <span className="w-2 h-2 rounded-full bg-outline-variant"></span>
          <span className="w-2 h-2 rounded-full bg-outline-variant"></span>
          <span className="w-2 h-2 rounded-full bg-primary-container glow-cyan-inner"></span>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6 scrollbar-hide">
        <div className="flex justify-end w-full">
          <div className="max-w-[70%] bg-surface-variant border border-outline-variant/30 text-on-surface p-4 rounded-xl rounded-tr-sm shadow-lg">
            <p className="font-body-sm text-body-sm">
              Explain the bearing failure drivers.
            </p>
          </div>
        </div>

        <div className="flex justify-start w-full">
          <div className="flex gap-4 max-w-[90%]">
            <div className="w-8 h-8 rounded bg-primary-container/10 border border-primary-container/30 flex items-center justify-center shrink-0 mt-1">
              <span className="material-symbols-outlined text-primary-container text-sm">
                smart_toy
              </span>
            </div>
            <div className="flex flex-col gap-3">
              <div className="text-on-surface font-body-sm text-body-sm pt-1">
                The anomaly is driven by a 3.2x deviation in{" "}
                <code className="font-data-sm text-data-sm text-primary-container bg-primary-container/10 px-1 rounded border border-primary-container/20">
                  vibration_rms
                </code>
                .
              </div>

              <div className="bg-[#05070A] rounded-lg border border-white/10 overflow-hidden w-full shadow-2xl">
                <div className="flex items-center justify-between px-4 py-2 bg-white/5 border-b border-white/5">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-error/80"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-secondary-container/80"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-primary-container/80"></div>
                  </div>
                  <span className="font-data-sm text-data-sm text-outline-variant">
                    payload.json
                  </span>
                  <button className="text-outline hover:text-on-surface transition-colors">
                    <span className="material-symbols-outlined text-sm">
                      content_copy
                    </span>
                  </button>
                </div>
                <div className="p-4 overflow-x-auto">
                  <pre className="font-data-sm text-data-sm leading-relaxed">
                    <code className="text-on-surface-variant">
                      {"{"}
                      <br />
                      &nbsp;&nbsp;
                      <span className="text-primary-fixed-dim">{"\"endpoint\""}</span>:{" "}
                      <span className="text-[#a8e6cf]">{"\"/explain\""}</span>,
                      <br />
                      &nbsp;&nbsp;
                      <span className="text-primary-fixed-dim">{"\"context\""}</span>:{" "}
                      <span className="text-[#a8e6cf]">{"\"Bearing Failure RCA\""}</span>,
                      <br />
                      &nbsp;&nbsp;
                      <span className="text-primary-fixed-dim">
                        {"\"failure_probability\""}
                      </span>
                      : <span className="text-secondary-container">0.942</span>,
                      <br />
                      &nbsp;&nbsp;
                      <span className="text-primary-fixed-dim">
                        {"\"top_failure_features\""}
                      </span>
                      : [
                      <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;{"{"}
                      <span className="text-primary-fixed-dim">{"\"feature\""}</span>:{" "}
                      <span className="text-[#a8e6cf]">{"\"vibration_rms\""}</span>,{" "}
                      <span className="text-primary-fixed-dim">
                        {"\"contribution\""}
                      </span>
                      : <span className="text-secondary-container">0.65</span>
                      {"}"},<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;{"{"}
                      <span className="text-primary-fixed-dim">{"\"feature\""}</span>:{" "}
                      <span className="text-[#a8e6cf]">{"\"bearing_temp_c\""}</span>,{" "}
                      <span className="text-primary-fixed-dim">
                        {"\"contribution\""}
                      </span>
                      : <span className="text-secondary-container">0.22</span>
                      {"}"}
                      <br />
                      &nbsp;&nbsp;],
                      <br />
                      &nbsp;&nbsp;
                      <span className="text-primary-fixed-dim">
                        {"\"anomaly_feature_deviations\""}
                      </span>
                      : [
                      <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;{"{"}
                      <span className="text-primary-fixed-dim">{"\"sensor\""}</span>:{" "}
                      <span className="text-[#a8e6cf]">{"\"vibration_rms\""}</span>,{" "}
                      <span className="text-primary-fixed-dim">{"\"expected\""}</span>
                      : <span className="text-secondary-container">5.2</span>,{" "}
                      <span className="text-primary-fixed-dim">{"\"actual\""}</span>:{" "}
                      <span className="text-secondary-container">14.8</span>,{" "}
                      <span className="text-primary-fixed-dim">{"\"severity\""}</span>
                      : <span className="text-error">{"\"CRITICAL\""}</span>
                      {"}"}
                      <br />
                      &nbsp;&nbsp;]
                      <br />
                      {"}"}
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

      <div className="p-4 bg-black/40 border-t border-white/5 backdrop-blur-md shrink-0">
        <div className="flex gap-2 mb-3 overflow-x-auto scrollbar-hide pb-1">
          <button className="shrink-0 px-3 py-1.5 rounded-full border border-primary-container/30 bg-primary-container/5 text-primary-container hover:bg-primary-container/10 font-label-caps text-label-caps transition-colors flex items-center gap-1">
            <span className="material-symbols-outlined text-[14px]">
              auto_awesome
            </span>
            Analyze Valve Blockage
          </button>
          <button className="shrink-0 px-3 py-1.5 rounded-full border border-outline-variant/50 bg-white/5 text-on-surface-variant hover:bg-white/10 font-label-caps text-label-caps transition-colors flex items-center gap-1">
            <span className="material-symbols-outlined text-[14px]">
              data_object
            </span>
            Show Bearing Data JSON
          </button>
        </div>

        <div className="relative flex items-center">
          <input
            className="w-full bg-[#0A0E17]/80 border border-outline-variant/30 rounded-lg pl-4 pr-12 py-3 font-body-sm text-body-sm text-on-surface focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container/50 transition-all shadow-inner"
            placeholder="Query the RCA, run predictions, or ask for raw JSON..."
            type="text"
          />
          <button className="absolute right-2 w-8 h-8 rounded bg-primary-container text-black flex items-center justify-center hover:bg-primary transition-colors shadow-[0_0_10px_rgba(0,240,255,0.4)]">
            <span className="material-symbols-outlined text-sm">send</span>
          </button>
        </div>
      </div>
    </section>
  );
}
