import React from "react";
import { ensureZ3Styles } from "../core/Button.jsx";

const css = `
.z3-radio{display:inline-flex;align-items:center;gap:10px;font-family:var(--font-body);font-size:15px;cursor:pointer;user-select:none;}
.z3-radio input{position:absolute;opacity:0;width:0;height:0;}
.z3-radio__dot{width:22px;height:22px;border:var(--border-width) solid var(--z3-ink);border-radius:999px;background:var(--z3-white);display:grid;place-items:center;transition:transform var(--duration-fast) var(--ease-snap);flex:none;}
.z3-radio__dot::after{content:"";width:10px;height:10px;border-radius:999px;background:var(--z3-teal);transform:scale(0);transition:transform var(--duration-fast) var(--ease-snap);}
.z3-radio input:checked + .z3-radio__dot::after{transform:scale(1);}
.z3-radio input:focus-visible + .z3-radio__dot{box-shadow:var(--shadow-sticker);}
.z3-radio:active .z3-radio__dot{transform:scale(.92);}
.z3-radio--disabled{opacity:.4;pointer-events:none;}
`;

export function Radio({ label, checked, onChange, disabled, name, value, ...rest }) {
  ensureZ3Styles("z3-radio-css", css);
  return (
    <label className={`z3-radio${disabled ? " z3-radio--disabled" : ""}`}>
      <input type="radio" checked={checked} onChange={onChange} disabled={disabled} name={name} value={value} {...rest} />
      <span className="z3-radio__dot"></span>
      {label ? <span>{label}</span> : null}
    </label>
  );
}
