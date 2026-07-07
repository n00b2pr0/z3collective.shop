import React from "react";
import { ensureZ3Styles } from "../core/Button.jsx";

const css = `
.z3-check{display:inline-flex;align-items:center;gap:10px;font-family:var(--font-body);font-size:15px;cursor:pointer;user-select:none;}
.z3-check input{position:absolute;opacity:0;width:0;height:0;}
.z3-check__box{width:22px;height:22px;border:var(--border-width) solid var(--z3-ink);border-radius:var(--radius-sm);background:var(--z3-white);display:grid;place-items:center;transition:background var(--duration-fast) linear,transform var(--duration-fast) var(--ease-snap);flex:none;}
.z3-check input:checked + .z3-check__box{background:var(--z3-teal);}
.z3-check input:focus-visible + .z3-check__box{box-shadow:var(--shadow-sticker);}
.z3-check:active .z3-check__box{transform:scale(.92);}
.z3-check__box svg{opacity:0;transition:opacity var(--duration-fast) linear;}
.z3-check input:checked + .z3-check__box svg{opacity:1;}
.z3-check--disabled{opacity:.4;pointer-events:none;}
`;

export function Checkbox({ label, checked, onChange, disabled, ...rest }) {
  ensureZ3Styles("z3-check-css", css);
  return (
    <label className={`z3-check${disabled ? " z3-check--disabled" : ""}`}>
      <input type="checkbox" checked={checked} onChange={onChange} disabled={disabled} {...rest} />
      <span className="z3-check__box">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
      </span>
      {label ? <span>{label}</span> : null}
    </label>
  );
}
