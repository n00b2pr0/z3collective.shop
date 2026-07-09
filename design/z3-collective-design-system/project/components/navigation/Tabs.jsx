import React from "react";
import { ensureZ3Styles } from "../core/Button.jsx";

const css = `
.z3-tabs{display:inline-flex;gap:6px;background:var(--z3-white);border:var(--border-width) solid var(--z3-ink);border-radius:var(--radius-pill);padding:4px;}
.z3-tabs__tab{font-family:var(--font-display);font-weight:500;font-size:14px;color:var(--text-muted);background:transparent;border:none;border-radius:var(--radius-pill);padding:8px 18px;cursor:pointer;transition:background var(--duration-fast) linear,color var(--duration-fast) linear;}
.z3-tabs__tab:hover{color:var(--z3-ink);background:var(--z3-ink-12);}
.z3-tabs__tab--active{background:var(--z3-ink);color:var(--z3-paper);font-weight:700;}
.z3-tabs__tab--active:hover{background:var(--z3-ink);color:var(--z3-paper);}
`;

export function Tabs({ tabs = [], value, onChange }) {
  ensureZ3Styles("z3-tabs-css", css);
  return (
    <div className="z3-tabs" role="tablist">
      {tabs.map((t) => {
        const tab = typeof t === "string" ? { value: t, label: t } : t;
        const active = tab.value === value;
        return (
          <button
            key={tab.value}
            role="tab"
            aria-selected={active}
            className={`z3-tabs__tab${active ? " z3-tabs__tab--active" : ""}`}
            onClick={() => onChange && onChange(tab.value)}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}
