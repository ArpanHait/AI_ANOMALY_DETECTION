import React from "react";

export default function ActiveWorkOrders() {
  return (
    <div
      className="glass-panel rounded-lg flex flex-col h-[500px]"
      style={{
        background: "rgba(255, 255, 255, 0.7)",
        backdropFilter: "blur(12px)",
        border: "1px solid rgba(0, 0, 0, 0.05)",
      }}
    >
      <div className="p-4 border-b border-outline-variant/30 flex justify-between items-center">
        <h3 className="font-mono text-[11px] font-bold uppercase tracking-widest text-on-surface">
          ACTIVE WORK ORDERS
        </h3>
        <div className="flex gap-2">
          <span className="px-2 py-1 bg-surface-container-low text-on-surface-variant font-mono text-[12px] rounded text-xs border border-outline-variant/50">
            Filter: ALL
          </span>
        </div>
      </div>
      <div className="flex-1 overflow-auto">
        <table className="w-full text-left border-collapse">
          <thead className="sticky top-0 bg-surface-container-low/90 backdrop-blur-md z-10">
            <tr>
              <th className="p-3 font-mono text-[11px] font-bold uppercase tracking-widest text-on-surface-variant border-b border-outline-variant/20">
                Asset ID
              </th>
              <th className="p-3 font-mono text-[11px] font-bold uppercase tracking-widest text-on-surface-variant border-b border-outline-variant/20">
                Priority
              </th>
              <th className="p-3 font-mono text-[11px] font-bold uppercase tracking-widest text-on-surface-variant border-b border-outline-variant/20">
                Type
              </th>
              <th className="p-3 font-mono text-[11px] font-bold uppercase tracking-widest text-on-surface-variant border-b border-outline-variant/20">
                Status
              </th>
              <th className="p-3 font-mono text-[11px] font-bold uppercase tracking-widest text-on-surface-variant border-b border-outline-variant/20">
                Assigned Tech
              </th>
            </tr>
          </thead>
          <tbody className="font-mono text-[12px]">
            <tr className="hover:bg-surface-container-highest/20 border-b border-outline-variant/10">
              <td className="p-3 text-primary font-bold">#AX-0992</td>
              <td className="p-3">
                <span className="text-error font-bold critical-pulse px-2 py-1 rounded">
                  CRITICAL
                </span>
              </td>
              <td className="p-3 text-on-surface">Predictive</td>
              <td className="p-3">
                <span className="text-primary font-bold">In-Progress</span>
              </td>
              <td className="p-3 text-on-surface-variant">T. Vance</td>
            </tr>
            <tr className="hover:bg-surface-container-highest/20 border-b border-outline-variant/10">
              <td className="p-3 text-primary font-bold">#PL-441B</td>
              <td className="p-3">
                <span className="text-secondary-container font-bold">
                  WARNING
                </span>
              </td>
              <td className="p-3 text-on-surface">Routine</td>
              <td className="p-3 text-on-surface-variant">Pending</td>
              <td className="p-3 text-on-surface-variant">UNASSIGNED</td>
            </tr>
            <tr className="hover:bg-surface-container-highest/20 border-b border-outline-variant/10">
              <td className="p-3 text-primary font-bold">#NV-8820</td>
              <td className="p-3">
                <span className="text-outline">NOMINAL</span>
              </td>
              <td className="p-3 text-on-surface">Routine</td>
              <td className="p-3 text-on-surface-variant">Scheduled</td>
              <td className="p-3 text-on-surface-variant">M. Ross</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
