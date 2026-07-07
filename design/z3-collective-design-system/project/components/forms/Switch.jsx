import React from "react";
import { ensureZ3Styles } from "../core/Button.jsx";

const css = `
.z3-switch{display:inline-flex;align-items:center;gap:10px;font-family:var(--font-body);font-size:15px;cursor:pointer;user-select:none;}
.z3-switch input{position:absolute;opacity:0;width:0;height:0;}
.z3-switch__track{width:46px;height:26px;border:var(--border-width) solid var(--z3-ink);border-radius:999px;background:var(--z3-white);position:relative;transition:background var(--duration-fast) linear;flex:none;}
.z3-switch__track::after{content:"";position:absolute;top:2px;left:2px;width:18px;height:18px;border-radius:999px;background:var(--z3-ink);transition:transform var(--duration-fast) var(--ease-snap);}
.z3-switch input:checked + .z3-switch__track{background:var(--z3-teal);}
.z3-switch input:checked + .z3-switch__track::after{transform:translateX(20px);}
.z3-switch input:focus-visible + .z3-switch__track{box-shadow:var(--shadow-sticker);}
.z3-switch--disabled{opacity:.4;pointer-events:none;}
`;

export function Switch({ label, checked, onChange, disabled, ...rest }) {
  ensureZ3Styles("z3-switch-css", css);
  return (
    <label className={`z3-switch${disabled ? " z3-switch--disabled" : ""}`}>
      <input type="checkbox" role="switch" checked={checked} onChange={onChange} disabled={disabled} {...rest} />
      <span className="z3-switch__track"></span>
      {label ? <span>{label}</span> : null}
    </label>
  );
}
