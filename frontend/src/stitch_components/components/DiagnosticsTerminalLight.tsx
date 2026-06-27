import React from "react";

export default function DiagnosticsTerminalLight() {
  return (
    <div className="w-2/3 flex flex-col gap-md bg-surface-container-lowest border border-outline-variant rounded shadow-sm overflow-hidden">
      <div className="flex items-center justify-between px-md py-sm border-b border-outline-variant bg-surface-container-high">
        <div className="flex items-center gap-sm">
          <span className="material-symbols-outlined text-primary text-[18px]">
            terminal
          </span>
          <span className="font-label-caps text-label-caps text-on-surface">
            AI DIAGNOSTIC TERMINAL // CF-04
          </span>
        </div>
        <div className="flex gap-xs">
          <button className="p-xs text-on-surface-variant hover:text-on-surface">
            <span className="material-symbols-outlined text-[16px]">
              content_copy
            </span>
          </button>
          <button className="p-xs text-on-surface-variant hover:text-on-surface">
            <span className="material-symbols-outlined text-[16px]">
              open_in_full
            </span>
          </button>
        </div>
      </div>

      <div className="flex-1 bg-[#1e293b] p-md overflow-y-auto font-mono-data text-[13px] text-[#e2e8f0] leading-relaxed relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none"></div>
        <pre>
          <code>
            {"{"}
            <br />
            &nbsp;&nbsp;{"\"diagnostic_request\""}: {"\"CF-04_VIB_ANALYSIS\""},
            <br />
            &nbsp;&nbsp;{"\"timestamp\""}: {"\"2024-05-20T14:32:01Z\""},
            <br />
            &nbsp;&nbsp;{"\"status\""}: {"\"PROCESSING_COMPLETE\""},
            <br />
            &nbsp;&nbsp;{"\"ai_confidence\""}: 0.984,
            <br />
            &nbsp;&nbsp;{"\"payload\""}: {"{"}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;{"\"sensor_data\""}: {"{"}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"\"x_axis\""}: [12.4, 13.1, 14.2, 14.5, 15.0],
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"\"y_axis\""}: [8.2, 8.5, 9.1, 9.8, 10.2],
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"\"z_axis\""}: [4.1, 4.3, 4.2, 4.5, 4.8]
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;{"}"},
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;{"\"fft_analysis\""}: {"{"}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"\"dominant_frequency_hz\""}: 120.5,
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"\"harmonics_detected\""}: true,
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"\"harmonic_ratio\""}: 2.4
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;{"}"},
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;{"\"historical_correlation\""}: {"{"}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"\"match_found\""}: true,
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"\"reference_id\""}: {"\"INC-2023-08-14-A\""},
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"\"similarity_score\""}: 0.92
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;{"}"},
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;{"\"recommendation\""}: [
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"\"INITIATE CONTROLLED SHUTDOWN SEQUENCE CF-04\""},
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"\"DISPATCH MAINTENANCE CREW FOR BEARING REPLACEMENT\""},
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"\"INSPECT SECONDARY SHAFT FOR MISALIGNMENT\""}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;]
            <br />
            &nbsp;&nbsp;{"}"}
            <br />
            {"}"}
          </code>
        </pre>
      </div>

      <div className="p-md border-t border-outline-variant bg-surface">
        <div className="flex flex-col gap-sm mb-md h-32 overflow-y-auto">
          <div className="flex gap-sm items-start">
            <div className="w-6 h-6 rounded bg-primary/10 flex items-center justify-center shrink-0 border border-primary/30">
              <span className="material-symbols-outlined text-[14px] text-primary">
                smart_toy
              </span>
            </div>
            <div className="bg-surface-container-low p-sm rounded border border-outline-variant text-body-sm text-on-surface">
              Analysis complete. The vibration signature strongly correlates with
              inner race bearing degradation. I recommend immediate scheduled
              downtime to prevent secondary damage to the main shaft.
            </div>
          </div>

          <div className="flex gap-sm items-start flex-row-reverse">
            <div className="w-6 h-6 rounded bg-surface-container-highest flex items-center justify-center shrink-0 border border-outline-variant">
              <span className="material-symbols-outlined text-[14px] text-on-surface-variant">
                person
              </span>
            </div>
            <div className="bg-secondary-container/20 p-sm rounded border border-secondary/30 text-body-sm text-on-surface text-right">
              Generate the maintenance work order and attach this diagnostic
              payload.
            </div>
          </div>
        </div>

        <div className="relative">
          <input
            className="w-full bg-surface-container-lowest border border-outline-variant text-on-surface placeholder-on-surface-variant text-body-sm rounded pl-md pr-12 py-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
            placeholder="Query AI assistant or enter command..."
            type="text"
          />
          <button className="absolute right-sm top-1/2 -translate-y-1/2 text-primary hover:text-primary-container p-xs rounded transition-colors">
            <span className="material-symbols-outlined">send</span>
          </button>
        </div>
      </div>
    </div>
  );
}
