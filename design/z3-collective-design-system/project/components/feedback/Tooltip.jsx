import React from "react";
import { ensureZ3Styles } from "../core/Button.jsx";

const css = `
.z3-tip{position:relative;display:inline-flex;}
.z3-tip__bubble{position:absolute;bottom:calc(100% + 8px);left:50%;transform:translate(-50%,4px);background:var(--z3-ink);color:var(--z3-paper);font-family:var(--font-body);font-size:12px;font-weight:500;padding:6px 10px;border-radius:var(--radius-sm);white-space:nowrap;opacity:0;pointer-events:none;transition:opacity var(--duration-fast) linear,transform var(--duration-fast) var(--ease-snap);z-index:50;}
.z3-tip:hover .z3-tip__bubble,.z3-tip:focus-within .z3-tip__bubble{opacity:1;transform:translate(-50%,0);}
`;

export function Tooltip({ text, children }) {
  ensureZ3Styles("z3-tip-css", css);
  return (
    <span className="z3-tip">
      {children}
      <span className="z3-tip__bubble" role="tooltip">{text}</span>
    </span>
  );
}
